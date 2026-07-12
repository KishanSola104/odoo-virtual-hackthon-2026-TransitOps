const vehicleModel =
    require("../models/vehicleModel");

const createVehicle = async ({
    registration_number,
    type_id,
    max_load_capacity,
    odometer,
    acquisition_cost,
    insurance_expiry,
    fitness_expiry,
    region
}) => {

    const existingVehicle =
        await vehicleModel.findVehicleByRegistration(
            registration_number
        );

    if (existingVehicle) {
        throw {
            statusCode: 400,
            message:
                "Vehicle already exists"
        };
    }

    const vehicleId =
        await vehicleModel.createVehicle(
            registration_number,
            type_id,
            max_load_capacity,
            odometer,
            acquisition_cost,
            insurance_expiry,
            fitness_expiry,
            region
        );

    return {
        success: true,
        message:
            "Vehicle created successfully",
        vehicleId
    };
};

const getAllVehicles = async () => {

    const vehicles =
        await vehicleModel.getAllVehicles();

    return {
        success: true,
        data: vehicles
    };
};

const getVehicleById = async (id) => {

    const vehicle =
        await vehicleModel.getVehicleById(id);

    if (!vehicle) {
        throw {
            statusCode: 404,
            message: "Vehicle not found"
        };
    }

    return vehicle;
};

const updateVehicle = async (
    id,
    vehicleData
) => {

    const vehicle =
        await vehicleModel.getVehicleById(id);

    if (!vehicle) {
        throw {
            statusCode: 404,
            message: "Vehicle not found"
        };
    }

    await vehicleModel.updateVehicle(
        id,
        vehicleData
    );

    return {
        success: true,
        message: "Vehicle updated successfully"
    };
};

const deleteVehicle = async (id) => {

    const vehicle =
        await vehicleModel.getVehicleById(id);

    if (!vehicle) {
        throw {
            statusCode: 404,
            message: "Vehicle not found"
        };
    }

    await vehicleModel.deleteVehicle(id);

    return {
        success: true,
        message: "Vehicle deleted successfully"
    };
};

const searchVehicles = async (filters) => {

    return await vehicleModel.searchVehicles(
        filters
    );
};

module.exports = {
    createVehicle,
    getAllVehicles,
    getVehicleById,
    updateVehicle,
    deleteVehicle,
    searchVehicles
};