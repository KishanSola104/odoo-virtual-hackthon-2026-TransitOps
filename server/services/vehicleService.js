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

module.exports = {
    createVehicle,
    getAllVehicles
};