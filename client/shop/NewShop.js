import React, { Component } from "../../node_modules/@types/react";
import Card, { CardActions, CardContent } from 'material-ui/Card'
import Button from 'material-ui/Button'
import FileUpload from 'material-ui-icons/FileUpload'
import auth from './../auth/auth-helper'
import TextField from 'material-ui/TextField'
import Typography from 'material-ui/Typography'
import Icon from 'material-ui/Icon'
import PropTypes from 'prop-types'
import {withStyles} from 'material-ui/styles'
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
                <CardContent>
                    <Typography type="headline" component="h2" className={classes.title}>
                        New
                    </Typography>
                    <br/>
                    <input accept="image/*" onChange={this.handleChange('image')} className={classes.input} id="icon-button-file" type="file" />
                    <label htmlFor="icon-button-file">
                        <Button variant="raised" color="secondary" component="span">
                        Upload 
                            <FileUpload/>
                        </Button>
                    </label> <span className={classes.filename}>{this.state.image ? this.state.image.name : ''}</span><br/>
                    <TextField id="name" label="Name" className={classes.textField} value={this.state.name} onChange={this.handleChange('name')} margin="normal"/><br/>
                    <TextField
                        id="multiline-flexible"
                        label="Description"
                        multiline
                        rows="2"
                        value={this.state.description}
                        onChange={this.handleChange('description')}
                        className={classes.textField}
                        margin="normal"
                    /><br/> 
                </CardContent>

            </Card>
        </div>)

    }
}

export default withStyles(styles)(NewShop)