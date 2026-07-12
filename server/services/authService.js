const bcrypt = require("bcryptjs");

const userModel =
    require("../models/userModel");

const {
    generateToken,
} = require("./jwtService");
const register = async ({
    name,
    email,
    mobile,
    password,
    role_id,
}) => {

    // Email Validation
    const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
        throw {
            statusCode: 400,
            message: "Invalid email format",
        };
    }

    // Mobile Validation
    const mobileRegex =
        /^[0-9]{10}$/;

    if (!mobileRegex.test(mobile)) {
        throw {
            statusCode: 400,
            message: "Mobile number must be exactly 10 digits",
        };
    }

    const existingUser =
        await userModel.findByEmail(
            email
        );

    if (existingUser) {
        throw {
            statusCode: 400,
            message: "Email already exists",
        };
    }

    const role =
        await userModel.findRoleById(
            role_id
        );

    if (!role) {
        throw {
            statusCode: 404,
            message: "Invalid role selected",
        };
    }

    const hashedPassword =
        await bcrypt.hash(
            password,
            10
        );

    const userId =
        await userModel.createUser(
            name,
            email,
            mobile,
            hashedPassword,
            role_id
        );

    return {
        success: true,
        message: "User registered successfully",
        userId,
    };
};

const login = async ({
    email,
    password,
}) => {

    const user =
        await userModel.findByEmail(
            email
        );

    if (!user) {

        throw {
            statusCode: 404,
            message:
                "User not found",
        };
    }

    const isPasswordValid =
        await bcrypt.compare(
            password,
            user.password
        );

    if (!isPasswordValid) {

        throw {
            statusCode: 401,
            message:
                "Invalid credentials",
        };
    }

    const token =
        generateToken(user);

    return {
        success: true,
        token,
        user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role,
        },
    };
};

module.exports = {
    register,
    login,
};