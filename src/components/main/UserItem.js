import React from "react";
import { View, Text, Pressable, Image, StyleSheet } from 'react-native';
import Colors from 'koddatest/src/res/colors';



const UserItem = ({ item, onPress }) => {

  return (
    <Pressable onPress={onPress} style={styles.container}>
     <View style={styles.containerLeft}>
         <Image style={styles.iconImg} source={{ uri: item.picture.thumbnail }} />
     </View>
     <View style={styles.containerRight}>
         <Text style={styles.strongText}>{`${item.name.title} ${item.name.first} ${item.name.last}`}</Text>
         <Text style={styles.lightText}>{item.email}</Text>
         <Text style={styles.lightText}>{`${item.location.city}, ${item.location.state}. CP. ${item.location.postcode}`}</Text>

     </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 4,
    height:80,
    borderBottomWidth:4,
    borderBottomColor: Colors.zircon,
  },
  containerLeft:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    margin:0,
    padding:0,

  },
  containerRight:{
    flex:4,
    justifyContent:"center",
    alignItems: "center",
    margin:0,
    padding:0,

  },
  iconImg:{
    borderRadius:1000,
    width: 50,
    height: 50
  },
  strongText:{
    color:Colors.white,
    fontWeight:"bold",
    fontSize:16
  },
  lightText:{
    color: Colors.white,
    fontSize:12
  }
});

export default UserItem;