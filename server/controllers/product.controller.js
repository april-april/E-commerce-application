import Product from '../models/product.model'
import _ from 'lodash'
import errorHandler from './../helpers/dbErrorHandler'
import formidable from 'formidable'
import fs from 'fs'

const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
    form.keepExtensions = true
    form.parse(req, (err, fields, files) => {
        if (err) {
            return res.status(400).json({
                message: "Image could not be uploaded"
            })
        }
        let product = new Product(fields)
        product.shop= req.shop
        if(files.image){
            product.image.data = fs.readFileSync(files.image.path)
            product.image.contentType = files.image.type
        }
        product.save((err, result) => {
            if (err) {
                return res.status(400).json({
                    error: errorHandler.getErrorMessage(err)
                })
            }
            res.json(result)
        })
    })
}

const listByShop = (req, res) => {
    Product.find({shop: req.shop._id}, (err, products) => {
        if (err) {
            return res.status(400).json({
                error: errorHandler.getErrorMessage(err)
            })
        }
        res.json(products)
    }).populate('shop', '_id name').select('-image')
}

export default {
    create,
    listByShop
}