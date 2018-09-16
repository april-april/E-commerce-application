import React, {Component} from 'react'
import auth from './../auth/auth-helper'
import Card, {CardActions, CardContent} from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import Avatar from 'material-ui/Avatar'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
import {read, update} from './api-product.js'
import {Link, Redirect} from 'react-router-dom'

const styles = theme => ({

})

class EditProduct extends Component {
	constructor({match}) {
		super()
		this.state = {
			name: '',
			description: '',
			image: '',
			category: '',
			quantity: '',
			price: '',
			redirect: false,
			error: ''
		}
		this.match = match
	}

	componentDidMount = () => {
		this.productData = new FormData()
		read({
			productId: this.match.params.productId
		}).then((data) => {
			if (data.error) {
				this.setState({error: data.error})
			} else {
				this.setState({id: data._id, name: data.name, description: data.description, category: data.category, quantity:data.quantity, price: data.price})
			}
		})
	}
	clickSubmit = () => {
		const jwt = auth.isAuthenticated()
		update({
			shopId: this.match.params.shopId,
			productId: this.match.params.productId
		}, {
			t: jwt.token
		}, this.productData).then((data) => {
			if (data.error) {
				this.setState({error: data.error})
			} else {
				this.setState({'redirect': true})
			}
		})
	}

	render() {

	}
}

EditProduct.propTypes = {
	classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditProduct)
