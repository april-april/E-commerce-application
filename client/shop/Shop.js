import React, { Component } from 'react'

const styles = theme => ({
    root: {}
})

class Shop extends Component {

    componentDidMount = () => {
        this.loadProducts()
        read({
            shopId: this.match.params.shopId
        }).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({shop: data})
            }
        })
    }

}

export default withStyles(styles)(Shop)