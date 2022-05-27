import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Strings from 'koddatest/src/res/strings';

export default EmptyState = () => {

  return (
    <View style={styles.container}>
      <Text style={styles.text}>{Strings.empty_list}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: "center",
    justifyContent: "center"
  },
  text: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 18,
    alignSelf: "center"
  }
});