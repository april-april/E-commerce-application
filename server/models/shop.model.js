import mongoose from 'mongoose'
import crypto from 'crypto'

const ShopSchema = new mongoose.Schema({
    name: {
        type: String,
        trim: true,
        required: 'Name is required'
    }
})

export default mongoose.model('Shop', ShopSchema)
