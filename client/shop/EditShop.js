import React, {Component} from 'react'
import auth from './../auth/auth-helper'

const styles = theme => ({
    // hmm
})

class EditShop extends Component {
    constructor({match}) {
        super()
        this.state = {
            name: '',
            description: '',
            image: '',
            redirect: false,
            error: ''
        }
        this.match = match
    }

    componentDidMount = () => {
        this.shopData = new FormData()
        const jwt = auth.isAuthenticated()
        read({
            shopId: this.match.params.shopId
        }, {t: jwt.token}).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({id: data._id, name: data.name, description: data.description, owner: data.owner.name})
            }
        })
    }

    clickSubmit = () => {
        const jwt = auth.isAuthenticated()
        update({
            shopId: this.match.params.shopId
        }, {
            t: jwt.token
        }, this.shopData).then((data) => {
            if (data.error) {
                this.setState({error: data.error})
            } else {
                this.setState({'redirect': true})
            }
        })
    }
    handleChange = name => event => {
        const value = name === 'image'
            ? event.target.files[0]
            : event.target.value
        this.shopData.set(name, value)
        this.setState({ [name]: value })
    }
}

EditShop.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditShop)