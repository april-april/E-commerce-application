import Shop from '../models/shop.model'
import _ from 'lodash'

const create = (req, res, next) => {
    let form = new formidable.IncomingForm()
      form.keepExtensions = true
      form.parse(req, (err, fields, files) => {
      if (err) {
          res.status(400).json({
              message: "Image could not be uploaded"
          })
        }
    })
}