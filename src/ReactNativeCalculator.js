import React, { Component } from 'react'
import {
    AppRegistry,
    Text,
    View
} from 'react-native'
import InputButton from './InputButton'
import Style from './Style'

const inputButtons = [
  [1, 2, 3, '/'],
  [4, 5, 6, '*'],
  [7, 8, 9, '-'],
  [0, '.', '=', '+']
]

class ReactNativeCalculator extends Component {

    render() {
      return (
        <View style={Style.rootContainer}>
          <View style={Style.displayContainer}></View>
          <View style={Style.inputContainer}>
            {this._renderInputButtons()}
          </View>
        </View>
      )
    }

    _renderInputButtons () {
      let views = []

      for (let r=0; r<inputButtons.length; r++) {
        let row = inputButtons[r]
        let inputRow = []
        for (let i=0; i<row.length; i++) {
          let input = row[i]

          inputRow.push(
            <InputButton value={input} />
          )
        }

        views.push(<View style={Style.inputRow}>{inputRow}</View>)
      }

      return views
    }

}

AppRegistry.registerComponent('ReactNativeCalculator', () => ReactNativeCalculator)