import { Component } from "../../node_modules/@types/react";
import Card, { CardActions, CardContent } from 'material-ui/Card'
import { create } from './api-shop.js'
import { Link, Redirect } from 'react-router-dom'

const styles = theme =>({
    card: {},
    title: {},
    textField: {},
    submit: {},
    input: {},
    filename: {},
    error: {}
})

class NewShop extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        redirect: false,
        error: ''
    }
    componentDidMount = () => {
        this.shopData = new FormData()
    }

    render(){
        const { classes } = this.props
        return (
        <div>
            <Card className={classes.card}>

            </Card>
        </div>)

    }
}

export default withStyles(styles)(NewShop)