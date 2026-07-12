const tripModel =
    require("../models/tripModel");

const createTrip = async (
    tripData
) => {
    return await tripModel.createTrip(
        tripData
    );
};

const getAllTrips = async () => {
    return await tripModel.getAllTrips();
};

const getTripById = async (
    id
) => {
    return await tripModel.getTripById(
        id
    );
};

const updateTrip = async (
    id,
    tripData
) => {
    return await tripModel.updateTrip(
        id,
        tripData
    );
};

const deleteTrip = async (
    id
) => {
    return await tripModel.deleteTrip(
        id
    );
};

const searchTrips = async (
    filters
) => {
    return await tripModel.searchTrips(
        filters
    );
};

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    updateTrip,
    deleteTrip,
    searchTrips
};