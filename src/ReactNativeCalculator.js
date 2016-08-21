import React, { Component } from 'react'
import {
    Text,
    AppRegistry
} from 'react-native'

class ReactNativeCalculator extends Component {

    render() {
        return (
            <Text>Hello, React!</Text>
        )
    }

}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator)