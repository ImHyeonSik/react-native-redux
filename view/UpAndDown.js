import React, {Component, ReactPropTypes } from "react";
import { View, StyleSheet, Text, TouchableHighlight } from 'react-native';

import { connect } from 'react-redux';

import * as action from '../src/redux/action'

class UpAndDown extends Component {
  constructor(props) {
    super(props);
  }

  setRandomColor = () => {
    const color = [
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200),
      Math.floor((Math.random()*55) + 200)
    ];

    this.props.handleSetColor(color);
  }

  render() {
    const color = this.props.color;
    const style = {
      backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})`
    }

    console.log(color)
    return (
      <View style={css.mainContainer}>
        <Text style={{fontSize:30}}>{this.props.number}</Text>

        <View style={{width:50, height: 50, backgroundColor: `rgb(${color[0]},${color[1]},${color[2]})` }}></View>
        <View style={css.subContainer}>
          <TouchableHighlight style={{borderWidth:2,height:30}} onPress={this.props.handleIncrement}>
            <Text style={{fontSize:20}}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{borderWidth:2,height:30}} onPress={this.props.handleDecrement}>
            <Text style={{fontSize:20}}>-</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{borderWidth:2,height:30}} onPress={this.setRandomColor}>
            <Text style={{fontSize:20}}>color change</Text>
          </TouchableHighlight>
        </View>

        <Text style={{fontSize:30}}>{this.props.mainNumber}</Text>
        <View style={css.subContainer}>
          <TouchableHighlight style={{borderWidth:2,height:30}} onPress={this.props.handleMainIncrement}>
            <Text style={{fontSize:20}}>+</Text>
          </TouchableHighlight>
          <TouchableHighlight style={{borderWidth:2,height:30}} onPress={this.props.handleMainDecrement}>
            <Text style={{fontSize:20}}>-</Text>
          </TouchableHighlight>
        </View>

      </View>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    number: state.counter.number,
    color: state.ui.color,
    mainNumber: state.counter.mainNumber
  }
}

const mapDispatchProps = (dispatch) => {
  return {
    handleIncrement: () => { dispatch(action.increment())},
    handleDecrement: () => { dispatch(action.decrement())},
    handleSetColor: (color) => { dispatch(action.setColor(color))},
    handleMainIncrement: () => { dispatch(action.mainIncrement())},
    handleMainDecrement: () => { dispatch(action.mainDecrement())},
  }
}

const css = StyleSheet.create({
  mainContainer:{
    flex:1,
    flexDirection:'column',
    alignItems:'center',
    justifyContent:'center',
    paddingTop: 100
  },
  subContainer:{
    flex:1,
    flexDirection:'row'
  }
})
export default connect(mapStateToProps, mapDispatchProps)(UpAndDown);
