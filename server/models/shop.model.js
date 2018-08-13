import mongoose from 'mongoose'
import crypto from 'crypto'

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    },
    image: {
        data: Buffer,
        contentType: String
    },
    description: {
        type: String,
        trim: true
    }
})

export default mongoose.model('Shop', ShopSchema)
