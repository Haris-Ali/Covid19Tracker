import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

import Card from './Card'

export default function Continent(props) {
    return (
        <ScrollView>
            {props.continent.map((item) => 
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
    )

}

const styles = StyleSheet.create({
    country: {
        fontFamily: 'serif'
    }, 
})