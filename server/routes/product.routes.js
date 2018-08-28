import express from 'express'
import productCtrl from '../controllers/product.controller'
import authCtrl from '../controllers/auth.controller'
import shopCtrl from '../controllers/shop.controller'

const router = express.Router()

router.route('/api/products/by/:shopId')
    .post(authCtrl.requireSignin, shopCtrl.isOwner, productCtrl.create)
    .get(productCtrl.listByShop)

router.route('/api/products/related/:productId')
    .get(productCtrl.listRelated)
    
router.param('shopId', shopCtrl.shopByID)
router.param('productId', productCtrl.productByID)

export default router