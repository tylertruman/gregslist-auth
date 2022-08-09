import mongoose from 'mongoose'
const Schema = mongoose.Schema

export const CarSchema = new Schema(
  {
    make: {type: String, required: true, minlength: 2, maxlength: 20},
    model: {type: String, required: true, maxlength: 20},
    year: {type: Number, required: true, min: 1918, max: (new Date().getFullYear() + 1)},
    price: {type: Number, required: true, min: 0, max: 5000000},
    img: {type: String, maxlength: 500, default: 'https://images.unsplash.com/photo-1628155930542-3c7a64e2c833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm8lMjBpbWFnZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=800&q=60'},
    description: {type: String, maxlength: 500},
    engineType: {type: String, enum: ['2 stroke', '4 cylinder', 'v6', 'v8', 'v10', 'v12', 'unknown'], default: 'unknown'}
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
