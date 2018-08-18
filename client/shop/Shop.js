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

    render() {
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
    }
}

export default withStyles(styles)(Shop)