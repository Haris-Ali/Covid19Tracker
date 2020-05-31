import React, { Component } from 'react';
import { StyleSheet, Text, View, FlatList, ActivityIndicator } from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements'

import { FontAwesome } from '@expo/vector-icons';
import CustomHeader from '../customComponents/Header'

export default class Countries extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true, 
      dataSource: [],
      searchText: '',
      tempDataSource: [],
    }
  }

  componentDidMount() {
    fetch('https://api.covid19api.com/countries')
      .then((response) => response.json())
      .then((responseJSON) => {
        this.setState({
          isLoading: false,
          dataSource: responseJSON,
          tempDataSource: responseJSON
        })
        this.state.dataSource.sort(
            function(a, b) {
                if (a.Country < b.Country)
                    return -1
                if (a.Country > b.Country)
                    return 1
                return 0
            }
        )
      })
  }

  updateSearch = searchText => {
    const tempSearch = searchText.toLowerCase()
    this.setState({searchText}, () => {
      if ('' === tempSearch) {
        this.setState({
          dataSource: this.state.tempDataSource
        })
        return 
      }
      this.state.dataSource = this.state.tempDataSource
        .filter(function(item) {
          return item.Country.toLowerCase().startsWith(tempSearch);
        }).map(function({Country, Slug, ISO2}) {
          return {Country, Slug, ISO2}
        })

    })
  }

  clearSearch = () => {
    this.setState({search: ''})
  }

  toggleDrawer = () => {
    this.props.navigation.openDrawer()
  }

  renderHeader = () => {
    return (
      <SearchBar 
        placeholder="Type here..." 
        platform="android"
        onChangeText={this.updateSearch}
        value={this.state.searchText}
        inputStyle={{
          fontFamily: 'serif'
        }}
        containerStyle={{
          borderColor: 'gray',
          borderWidth: 2,
          borderRadius: 50,
          padding: 10,
          marginBottom: 10,
        }}
      />
    )
  }

  renderSeperator = () => {
    return (
      <View
        style={{
          height: 1,
          width: '100%',
          backgroundColor: "#CED0CE",
        }}
      >
      </View>
    )
  }

  renderItem = ({ item }) => (
    <ListItem 
      title={item.Country}
      bottomDivider
      chevron
      containerStyle={{
        borderBottomWidth: 0
      }}
      titleStyle={{
        fontFamily: 'serif',
      }}
      leftIcon={() => <FontAwesome name="flag-o" size={24} color="black" />}
      onPress={() => this.props.navigation.navigate('CountryStat', { slug: item.Slug })}
    />
  )

  render() {
    if (this.state.isLoading) {
        return (
            <View style={styles.container}>
                <ActivityIndicator size='large'/>
                <Text style={{fontFamily: 'serif', fontSize: 24, paddingTop: 5}}>Stay Home, Stay Safe</Text>
            </View>
        )
    }
    else {
        return (
            <View style={styles.container}>
                <CustomHeader onPressEvent={() => this.props.navigation.openDrawer()}/>
                <FlatList 
                  style={styles.list}
                  data={this.state.dataSource}
                  renderItem={this.renderItem}
                  keyExtractor={(item) => item.ISO2}
                  ListHeaderComponent={this.renderHeader}
                  ItemSeparatorComponent={this.renderSeperator}
                  ListEmptyComponent={() => (
                    <View style={{flex: 1, alignItems: 'center', marginTop: 10}}>
                        <Text style={{fontFamily: 'serif', fontSize: 24}}>No Countries Found</Text>
                    </View>
                  )}
                />
            </View>
        )
    }
  }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    
    list: {
        paddingTop: 20,
        width: '90%',
        alignSelf: 'center',
    }
});