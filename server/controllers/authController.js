const authService =
    require("../services/authService");

const register = async (
    req,
    res
) => {
    try {

        const result =
            await authService.register(
                req.body
            );

        return res.status(201).json(
            result
        );

    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

const login = async (
    req,
    res
) => {
    try {

        const result =
            await authService.login(
                req.body
            );

        return res.status(200).json(
            result
        );

    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json({
            success: false,
            message: error.message,
        });
    }
};

module.exports = {
    register,
    login,
};