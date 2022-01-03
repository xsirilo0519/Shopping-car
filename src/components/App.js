import React, { Component } from 'react';
import { connect } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';
import { receivePhones } from '../actions/phones';
import '../index.css';
import { _getPhones } from '../utils/_DATA';
import Container from './Container';


class App extends Component {
    componentDidMount() {
        _getPhones()
            .then((phones) => {
                this.props.dispatch(receivePhones(phones))
            })
    }

    render() {
        const { phones } = this.props

        return (
            <Container phones={phones} />
        );
    }

    
    render() {

        return (
            <Container />
        );
    }


}

function mapStateToProps({ phones }) {
    return {
        phones
    }
}

export default connect(mapStateToProps)(App);