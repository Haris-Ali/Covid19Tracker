import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

import Card from '../customComponents/Card'
import CustomHeader from '../customComponents/Header'

export default class CountryStat extends Component {
    constructor(props) {
        super(props)
        const slug = this.props.route.params;
        this.state = {
            countrySlug: slug,
            countryName: '',
            firstDayCases: '',
            firstDayDate: '',
            totalConfirmed: '',
            totalDeaths: '',
            totalRecovered: '',
            totalActive: '',
        }
    }

    componentDidMount() {
        const slug = this.state.countrySlug.slug
        fetch('https://api.covid19api.com/dayone/country/' + slug + '/status/confirmed')
            .then(response => response.json())
            .then(responseJSON => {
                this.setState({
                    firstDayCases: responseJSON[0].Cases,
                    countryName: responseJSON[0].Country,
                    firstDayDate: responseJSON[0].Date.slice(0, 10)
                })
            })
        fetch('https://api.covid19api.com/country/' + slug)
            .then(response => response.json())
            .then(responseJSON => {
                const apiData = responseJSON
                this.setState({
                    totalConfirmed: apiData[Object.keys(responseJSON).length - 1].Confirmed,
                    totalDeaths: apiData[Object.keys(responseJSON).length - 1].Deaths,
                    totalRecovered: apiData[Object.keys(responseJSON).length - 1].Recovered,
                    totalActive: apiData[Object.keys(responseJSON).length - 1].Active
                })
                
            })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader onPressEvent={() => this.props.navigation.goBack()} icon={'arrow-back'} />
                <View style={styles.countryNameCont}>
                    <Text style={styles.countryName}>{this.state.countryName}</Text>
                </View>
                <Card>
                    <Text style={styles.casesText}>Date of first case: {this.state.firstDayDate}</Text>
                    <Text style={styles.casesText}>Cases on first day: {this.state.firstDayCases}</Text>
                </Card>
                <Card>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Coronavirus Cases: </Text>
                        <Text style={styles.casesText}>{this.state.totalConfirmed}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Deaths: </Text>
                        <Text style={{...styles.casesText, color: 'red'}}>{this.state.totalDeaths}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Recovered: </Text>
                        <Text style={{...styles.casesText, color: 'green'}}>{this.state.totalRecovered}</Text>
                    </View>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={styles.casesText}>Active: </Text>
                        <Text style={{...styles.casesText, color: 'orange'}}>{this.state.totalActive}</Text>
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

    countryNameCont: {
        padding: 10,
        margin: 40,
        alignItems: 'center',
        justifyContent: 'center',
        width: '80%',
    },

    countryName: {
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