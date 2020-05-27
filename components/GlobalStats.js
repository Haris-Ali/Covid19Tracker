import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../customComponents/Card'
import CustomHeader from '../customComponents/Header'

export default class GlobalStats extends Component {
    constructor(props) {
        super(props)
        this.state = {
            newConfirmed: '',
            totalConfirmed: '',
            newDeaths: '',
            totalDeaths: '',
            newRecovered: '',
            totalRecovered: '',
        }
    }

    componentDidMount() {
        fetch('https://api.covid19api.com/summary')
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    newConfirmed: responseJSON.Global.NewConfirmed,
                    totalConfirmed: responseJSON.Global.TotalConfirmed,
                    newDeaths: responseJSON.Global.NewDeaths,
                    totalDeaths: responseJSON.Global.TotalDeaths,
                    newRecovered: responseJSON.Global.NewRecovered,
                    totalRecovered: responseJSON.Global.TotalRecovered,
                })
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader onPressEvent={() => this.props.navigation.openDrawer()}/>
                <View style={styles.headingCont}>
                    <Text style={styles.headingText}>Global Statistics</Text>
                </View>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>New Confirmed: </Text>
                        <Text style={{...styles.casesText, color: 'orange'}}>{this.state.newConfirmed}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Total Confirmed: </Text>
                        <Text style={{...styles.casesText, color: 'orange'}}>{this.state.totalConfirmed}</Text>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>New Deaths: </Text>
                        <Text style={{...styles.casesText, color: 'red'}}>{this.state.newDeaths}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Total Deaths: </Text>
                        <Text style={{...styles.casesText, color: 'red'}}>{this.state.totalDeaths}</Text>
                    </View>
                </Card>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>New Recovered: </Text>
                        <Text style={{...styles.casesText, color: 'green'}}>{this.state.newRecovered}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Total Recovered: </Text>
                        <Text style={{...styles.casesText, color: 'green'}}>{this.state.totalRecovered}</Text>
                    </View>
                </Card>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },

    headingCont: {
        padding: 10,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    }, 

    headingText: {
        fontFamily: 'serif',
        fontSize: 32,
        borderBottomWidth: 2,
        paddingBottom: 2,
        borderColor: '#446cd4',
    },

    casesText: {
        fontFamily: 'serif',
        fontSize: 24,
        paddingBottom: 5,
    }
})