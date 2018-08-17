import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Redirect, Link } from 'react-router-dom'

const styles = theme => ({

})

class MyShops extends Component {

    state = {
        shops:[],
        redirectToSignin: false
    }

    loadShops = () => {
        const jwt = auth.isAuthenticated()
        listByOwner({
            userId: jwt.user._id
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                this.setState({redirectToSignin: true})
            } else {
                this.setState({shops: data})
            }
        })
    }

    removeShop = (shop) => {
        const updatedShops = this.state.shops
        const index = updatedShops.indexOf(shop)
        updatedShops.splice(index, 1)
        this.setState({shops: updatedShops})
    }
    componentDidMount = () => {
        this.loadShops()
    }
    render() {
        const { classes } = this.props
        const redirectToSignin = this.state.redirectToSignin
        if (redirectToSignin) {
            return <Redirect to='/signin'/>
        }
        return (
        <div>
            <Paper className={classes.root} elevation={4}>
            <Typography type="title" className={classes.title}>
                Your Shops
                <span className={classes.addButton}>
                    <Link to="/seller/shop/new">
                        <Button color="primary" variant="raised">
                            <Icon className={classes.leftIcon}>add_box</Icon>  New Shop
                        </Button>
                    </Link>
                </span>
            </Typography>
            <List dense>
            {this.state.shops.map((shop, i) => {
                return   <span key={i}>
                    <ListItem button>
                        <ListItemAvatar>
                            <Avatar src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                        </ListItemAvatar>
                        <ListItemText primary={shop.name} secondary={shop.description}/>
                        { auth.isAuthenticated().user && auth.isAuthenticated().user._id == shop.owner._id &&
                            (<ListItemSecondaryAction>
                                <Link to={"/seller/orders/" + shop.name+ '/'+shop._id}>
                                    <Button aria-label="Orders" color="primary">
                                        View Orders
                                    </Button>
                                </Link>
                                <Link to={"/seller/shop/edit/" + shop._id}>
                                    <IconButton aria-label="Edit" color="primary">
                                        <Edit/>
                                    </IconButton>
                                </Link>
                                <DeleteShop shop={shop} onRemove={this.removeShop}/>
                            </ListItemSecondaryAction>)
                        }
                    </ListItem>
                    <Divider/>
                </span>})}
            </List>

            </Paper>
        </div>
        )
    }
}

MyShops.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(styles)(MyShops)