import { Component } from "../../node_modules/@types/react";

class NewShop extends Component {
    state = {
        name: '',
        description: '',
        image: '',
        redirect: false,
        error: ''
    }
}

export default withStyles(styles)(NewShop)