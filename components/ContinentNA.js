import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Divider } from 'react-native-elements';

import apiCall from './ContinentAPI'
import Continent from '../customComponents/Continent'
import CustomHeader from '../customComponents/Header'

export default class ContinentAsia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    async componentDidMount() {
        const data = await apiCall('north america')
        this.setState({
            countries: data.countries
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader onPressEvent={() => this.props.navigation.openDrawer()}/>
                <Text style={styles.continentName}>North America</Text>
                <Divider style={{ height: 2, marginTop: 30 }} />
                <Continent continent={this.state.countries}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    continentName: {
        fontFamily: 'serif',
        fontSize: 32,
        paddingTop: 35,
        textAlign: 'center'
    }, 

})