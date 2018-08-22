import React, {Component} from 'react'
import PropTypes from 'prop-types'

class DeleteShop extends Component {
    state = {
        open: false
    }
    clickButton = () => {
        this.setState({open: true})
    }
    deleteShop = () => {
        const jwt = auth.isAuthenticated()
        remove({
            shopId: this.props.shop._id
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({open: false}, () => {
                    this.props.onRemove(this.props.shop)
                })
            }
        })
    }
    handleRequestClose = () => {
        this.setState({open: false})
    }
    render() {

    }
}
DeleteShop.propTypes = {
    shop: PropTypes.object.isRequired,
    onRemove: PropTypes.func.isRequired
}

export default DeleteShop