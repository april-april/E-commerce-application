import React, { Component}  from 'react'
import PropTypes from 'prop-types'
import { list } from './api-shop.js'
import { Link } from 'react-router-dom'

const styles = theme => ({

})

class Shop extends Component {
    state = {
        shops:[]
    }


    loadShops = () => {
        list().then((data) => {
            if (data.error) {
                console.log(data.error)
            } else {
                this.setState({shops: data})
            }
        })
    }

    componentDidMount = () => {
        this.loadShops()
    }

    render() {
        const { classes } = this.props 
        return (
        <div>

        </div>
        )
    }
}

Shops.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Shops)