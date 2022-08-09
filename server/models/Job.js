import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const JobSchema = new Schema({
    jobTitle: {type: String, required: true, minlength: 4, maxlength: 25},
    company: {type: String, required: true, minlength: 2, maxlength: 25},
    hours: {type: Number, required: true, min: 10, max: 80},
    rate: {type: Number, required: true, min: 10, max: 1000},
    description: {type: String, required: true, maxlength: 250}
    }, 
    { timestamps: true, toJSON: { virtuals: true } }
)