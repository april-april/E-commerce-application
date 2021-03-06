import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './core/Home'
import Users from './user/Users'
import Signup from './user/Signup'
import Signin from './auth/Signin'
import Profile from './user/Profile'
import EditProfile from './user/EditProfile'
import PrivateRoute from './auth/PrivateRoute'
import Menu from './core/Menu'
import NewShop from './shop/NewShop'
import Shops from './shop/Shops'
import MyShops from './shop/MyShops'
import Shop from './shop/Shop'
import EditShop from './shop/EditShop'
import NewProduct from './product/NewProduct'
import EditProduct from './product/EditProduct'

class MainRouter extends Component {
    // Removes the server-side injected CSS when React component mounts
    componentDidMount() {
        const jssStyles = document.getElementById('jss-server-side')
        if (jssStyles && jssStyles.parentNode) {
            jssStyles.parentNode.removeChild(jssStyles)
        }
    }

    render() {
        return (
        <div>
            <Menu/>
            <Switch>
                <Route exact path="/" component={ Home } />
                <Route path="/users" component={Users}/>
                <Route path="/signup" component={Signup}/>
                <Route path="/signin" component={Signin}/>
                <Route path="/user/:userId" component={Profile}/>
                <Route path="/shops/all" component={Shops}/>
                <Route path="/product/:productId" component={Product}/>
                <PrivateRoute path="/user/edit/:userId" component={EditProfile}/>
                <PrivateRoute path="/seller/shop/new" component={NewShop}/>
                <PrivateRoute path="/seller/shops" component={MyShops}/>
                <Route path="/shops/:shopId" component={Shop}/>
                <PrivateRoute path="/seller/shop/edit/:shopId" component={EditShop}/>
                <PrivateRoute path="/seller/:shopId/products/new" component={NewProduct}/>
                <PrivateRoute path="/seller/:shopId/:productId/edit" component={EditProduct}/>
            </Switch>
        </div>)
    }
}

export default MainRouter