import React, { Component } from 'react'

const styles = theme => ({
    root: {}
})

class Shop extends Component {

    constructor({ match }) {
        super()
        this.state = {
            shop: '',
            products:[]
        }
        this.match = match
    }

    loadProducts = () => {
        listByShop({
            shopId: this.match.params.shopId
        }).then((data)=>{
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({products: data})
            }
        })
    }

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

    render() {
        const logoUrl = this.state.shop._id
            ? `/api/shops/logo/${this.state.shop._id}?${new Date().getTime()}`
            : '/api/shops/defaultphoto'

        const {classes} = this.props

        return(<div>
            <CardContent>
                <Typography type="headline" component="h2" className={classes.title}>
                    {this.state.shop.name}
                </Typography>
                <br/>
                <Avatar src={logoUrl} className={classes.bigAvatar}/><br/>
                    <Typography type="subheading" component="h2" className={classes.subheading}>
                        {this.state.shop.description}
                    </Typography><br/>
            </CardContent>
        </div>)
    }
}

export default withStyles(styles)(Shop)