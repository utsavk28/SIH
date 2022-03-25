const { Decimal128, Timestamp } = require('bson');
const mongoose = require('mongoose');

const plateSchema = new mongoose.Schema(
    {
        lat: {
            type: Decimal128,
            required: true,
        },
        long: {
            type: Decimal128,
            required: true,
        },
        location: {
            type: {
                type: String,
                enum: ['Point'],
            },
            coordinates: {
                type: [Number],
                index: '2dsphere',
            },
        },
        stateCode: {
            type: String,
            required: true,
        },
        midNo: {
            type: String,
            required: true,
        },
        midAlph: {
            type: String,
            required: true,
        },
        plateNo: {
            type: String,
            required: true,
        },
        img: {
            type: String,
        },
    },
    { timestamps: true }
);

//Create Geo Location
plateSchema.pre('save', async function (next) {
    this.location = {
        type: 'Point',
        coordinates: [this.long, this.lat],
    };
    next();
});

module.exports = mongoose.model('Plate', plateSchema);
