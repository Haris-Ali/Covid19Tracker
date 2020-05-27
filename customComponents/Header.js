import React from 'react';
import { Header } from 'react-native-elements';

import Icon from './Icon';

export default function CustomHeader(props) {
    var icon
    if (props.icon === 'arrow-back') 
        icon = 'arrow-back'
    else 
        icon = 'menu'
    return (
        <Header 
            placement="left"
            backgroundColor='#446cd4'
            centerComponent={ <Icon /> }
            rightComponent={{ 
            icon: icon, 
            color: '#fff', 
            size: 28,
            onPress: props.onPressEvent
            }}
            containerStyle={{
                height: 80,
                paddingBottom: 25,
                paddingLeft: 35
            }}
            rightContainerStyle={{
                paddingRight: 25
            }}
            centerContainerStyle={{
                paddingLeft: 3
            }}
        />
    )
}