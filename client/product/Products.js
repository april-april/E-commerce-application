import React, {Component} from 'react'
import PropTypes from 'prop-types'

const styles = theme => ({

})

class Products extends Component {
    render() {
        const {classes} = this.props
        return ( 
            <div className={classes.root}>
            {this.props.products.length > 0 ?
                (<div className={classes.container}>
                    <GridList cellHeight={200} className={classes.gridList} cols={3}>
                    {this.props.products.map((product, i) => (
                        <GridListTile key={i} className={classes.tile}>
                            <Link to={"/product/"+product._id}><img className={classes.image} src={'/api/product/image/'+product._id} alt={product.name} /></Link>
                        </GridListTile>
                    ))}
                </GridList></div>) : this.props.searched && (<Typography type="subheading" component="h4" className={classes.title}>No products found! :(</Typography>)}
            </div>
        )
    }
}

export default withStyles(styles)(Products)