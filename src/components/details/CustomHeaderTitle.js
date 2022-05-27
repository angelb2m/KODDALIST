import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Colors from 'koddatest/src/res/colors';

export default CustomHeaderTitle = (props) => {
    return(
        <View style={styles.container}>
            <View style={styles.containerName}>
              <Text  style={styles.nameText}>{`${props.data.first} ${props.data.last}`}</Text>
            </View>
       </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
      },
    containerName:{
        marginHorizontal:5,
    },
    nameText:{
        color:Colors.white,
        flexShrink: 1,
        textAlign:"left",
        textTransform:"uppercase",
        fontWeight:"bold",
    }
  });
  