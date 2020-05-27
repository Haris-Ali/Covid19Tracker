import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { Divider } from 'react-native-elements';

import apiCall from './ContinentAPI'
import Card from '../customComponents/Card'

export default class ContinentAsia extends Component {
    constructor(props) {
        super(props)
        this.state = {
            countries: []
        }
    }

    async componentDidMount() {
        const data = await apiCall('africa')
        this.setState({
            countries: data.countries
        })
    }

    render() {
        return (
            <View style={styles.container}>
                <CustomHeader onPressEvent={() => this.props.navigation.openDrawer()}/>
                <Text style={styles.continentName}>Africa</Text>
                <Divider style={{ height: 2, marginTop: 30 }} />
                <ScrollView>
                    {this.state.countries.map((item) => 
                        <Card>
                            <Text style={{...styles.country, fontSize: 22, paddingBottom: 2}}>{item.name}</Text>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{...styles.country, fontSize: 16}}>Total Cases: </Text>
                                <Text style={{...styles.country, fontSize: 16}}>{item.cases}</Text>
                            </View>
                            <View style={{flexDirection: 'row'}}>
                                <Text style={{...styles.country, fontSize: 16}}>Total Deaths: </Text>
                                <Text style={{...styles.country, fontSize: 16, color: 'red'}}>{item.deaths}</Text>
                            </View>
                        </Card>
                    )}
                </ScrollView>
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

    country: {
        fontFamily: 'serif'
    }, 
})