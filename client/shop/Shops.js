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
            <Paper className={classes.root} elevation={4}>
                <Typography type="title" className={classes.title}>
                    All Shops
                </Typography>
                <List dense>
                    {this.state.shops.map((shop, i) => {
                        return 
                        <Link to={"/shops/"+shop._id} key={i}>
                            <Divider/>
                            <ListItem button>
                                <ListItemAvatar>
                                    <Avatar className={classes.avatar}  src={'/api/shops/logo/'+shop._id+"?" + new Date().getTime()}/>
                                </ListItemAvatar>
                                <div className={classes.details}>
                                    <Typography type="headline" component="h2" color="primary" className={classes.shopTitle}>
                                        {shop.name}
                                    </Typography>
                                    <Typography type="subheading" component="h4" className={classes.subheading}>
                                        {shop.description}
                                    </Typography>
                                </div>
                            </ListItem>
                            <Divider/>
                        </Link>})}
                </List>
            </Paper>

        </div>
        )
    }
}

Shops.propTypes = {
    classes: PropTypes.object.isRequired
}
export default withStyles(styles)(Shops)