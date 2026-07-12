const tripService = require("../services/tripService");

const createTrip = async (req, res) => {

    try {

        const result = await tripService.createTrip(req.body);

        res.status(201).json({
            success: true,
            message: "Trip Created Successfully",
            tripId: result.insertId
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getAllTrips = async (req, res) => {

    try {

        const trips = await tripService.getAllTrips();

        res.status(200).json({
            success: true,
            data: trips
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const getTripById = async (req, res) => {

    try {

        const trip = await tripService.getTripById(req.params.id);

        if (!trip) {
            return res.status(404).json({
                success: false,
                message: "Trip Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: trip
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const updateTrip = async (req, res) => {

    try {

        await tripService.updateTrip(req.params.id, req.body);

        res.status(200).json({
            success: true,
            message: "Trip Updated Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const deleteTrip = async (req, res) => {

    try {

        await tripService.deleteTrip(req.params.id);

        res.status(200).json({
            success: true,
            message: "Trip Deleted Successfully"
        });

    } catch (err) {

        res.status(500).json({
            success: false,
            message: err.message
        });

    }

};

const searchTrips = async (
    req,
    res
) => {
    try {

        const result =
            await tripService.searchTrips(
                req.query
            );

        return res.status(200).json({
            success: true,
            data: result
        });

    } catch (error) {

        return res.status(
            error.statusCode || 500
        ).json({
            success: false,
            message: error.message
        });
    }
};

module.exports = {
    createTrip,
    getAllTrips,
    getTripById,
    updateTrip,
    deleteTrip
};