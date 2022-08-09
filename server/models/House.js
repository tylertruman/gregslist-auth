import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const HouseSchema = new Schema({
    levels: {type: Number, required: true, min: 1, max: 5},
    bedrooms: {type: Number, required: true, min:1, max: 50},
    bathrooms: {type: Number, required: true, min:1, max: 50},
    year: {type: Number, required: true, min: 1700, max: (new Date().getFullYear() + 1)},
    price: {type: Number, required: true, min: 10000, max: 50000000},
    img: {type: String, required: true, maxlength: 500},
    description: {type: String, required: true, minlength: 10, maxlength: 500}
    },
    { timestamps: true, toJSON: { virtuals: true } }
)