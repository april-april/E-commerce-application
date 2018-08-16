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

            </Paper>
        </div>
        )
    }
}

MyShops.propTypes = {
    classes: PropTypes.object.isRequired
  }

export default withStyles(styles)(MyShops)