import React, {Component} from 'react'
import PropTypes from 'prop-types'
import auth from './../auth/auth-helper'
import {remove} from './api-product.js'

class DeleteProduct extends Component {
	state = {
		open: false
	}

	clickButton = () => {
		this.setState({open: true})
	}
	
	deleteProduct = () => {
		const jwt = auth.isAuthenticated()
		remove({
			shopId: this.props.shopId,
			productId: this.props.product._id
		}, {t: jwt.token}).then((data) => {
			if (data.error) {
				console.log(data.error)
			} else {
				this.setState({open: false}, () => {
					this.props.onRemove(this.props.product)
				})
			}
		})
	}

	render() {
	
	}
}
DeleteProduct.propTypes = {
	shopId: PropTypes.string.isRequired,
}
export default DeleteProduct
