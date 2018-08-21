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
}

EditShop.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EditShop)