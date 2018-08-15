import React, { Component}  from 'react'
import PropTypes from 'prop-types'

const styles = theme => ({

})

class Shop extends Component {
    state = {
        shops:[]
    }

    componentDidMount = () => {
        this.loadShops()
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
}

export default withStyles(styles)(Shops)