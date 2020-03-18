import React, {Component} from 'react';

import {StyleSheet, Text, View, TouchableOpacity, Image} from 'react-native';

class IconButton extends Component {


  constructor(props) {
    super(props);


  }


  render () {

     return (

            <TouchableOpacity
              onPress={this.props.action}
               style={this.props.style}>
               <View pointerEvents='none' style={styles.viewStyle} >
                  <Image style={[styles.imageIconStyle, this.props.iconStyle]}
                    //We are showing the Image from online
                      source={this.props.icon}
                      pointerEvents='none'
                  />

                  { this.props.text ? (
                    <Text style={[styles.textStyle, this.props.textStyle]}>
                      {this.props.text}
                    </Text>
                  ) : (
                    <Text>

                    </Text>
                  )}
                </View>
          </TouchableOpacity>

     );
   }
 }

 const styles = StyleSheet.create({

    viewStyle : {
      backgroundColor: 'transparent',
    },
    imageIconStyle : {
      margin: 10,
      height:50,
      width: 50,
      resizeMode: 'contain',
      alignSelf: 'center'
    },
    textStyle: {
      alignSelf:'center'
    }


 });

export default IconButton;
