const path = require('path');
const Plate = require('../models/Plate');

// @desc GETS ALL LOCATIONS OF A PLATE
exports.getLocations = async (req, res, next) => {
    try {
        const plates = await Plate.find({ stateCode: 'MH' });
        console.log(plates);

        return res.status(200).json({
            success: true,
            data: plates,
        });
        // res.sendFile(path.join(__dirname+'/..'+'/form.html'));
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.addLocation = async (req, res, next) => {
    try {
        console.log('HIIIII');
        console.log(req.body);
        const licenseNo = req.body.plate;
        console.log(licenseNo.substr(0, 2));
        console.log(licenseNo.substr(2, 2));
        console.log(licenseNo.substr(4, 2));
        console.log(licenseNo.substr(6, 9));
        const plate = await Plate.create({
            stateCode: licenseNo.substr(0, 2),
            midNo: licenseNo.substr(2, 2),
            midAlph: licenseNo.substr(4, 2),
            plateNo: licenseNo.substr(6, 9),
            lat: 19.17482,
            long: 72.94218,
            img: 'https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg',
        });

        return res.status(200).json({
            success: true,
            data: plate,
        });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Server error' });
    }
};

exports.getSpecific = async (req, res, next) => {
    try {
        const licenseNo = req.body.plate;
        const stateCode = licenseNo.substr(0, 2);
        const midNo = licenseNo.substr(2, 2);
        const midAlph = licenseNo.substr(4, 2);
        const plateNo = licenseNo.substr(6, 9);
        const plates = await Plate.find({
            stateCode: stateCode,
            midNo: midNo,
            midAlph: midAlph,
            plateNo: plateNo,
        });
        console.log(plates);

        return res.status(200).json({
            success: true,
            data: plates,
        });
    } catch (err) {
        console.log(err);
    }
};

// exports.getLocations();
