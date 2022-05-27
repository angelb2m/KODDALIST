import React from 'react';
import { ScrollView,View, Text, StyleSheet, Image } from 'react-native';
import Colors from 'koddatest/src/res/colors';


export default CustomHeaderTitle = (props) => {
    const {profileImage, personTitle, personFirstName, personLastName, personGender, locationStreetName, locationStreetNumber, locationCity, locationState, locationCP, locationLatitude, locationLongitude, locationTimezone, contactEmail, contactPhone, contactCell } = props;

    return(
        <View style={styles.container}>
        <View style={styles.containerTop}>
           <Image style={styles.profileImage} source={{ uri: profileImage }} />
        </View>
        <ScrollView>
        <View style={styles.containerSplit}>
            <View style={styles.containerTextSplit}>
               <Text style={styles.keyText}>Nombre </Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Título:</Text>
               <Text style={styles.genericText}>{(typeof personTitle === 'undefined') ? "" : personTitle}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Nombre:</Text>
               <Text style={styles.genericText}>{(typeof personFirstName === 'undefined') ? "" : personFirstName}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Apellido:</Text>
               <Text style={styles.genericText}>{(typeof personLastName === 'undefined') ? "" : personLastName}</Text>
            </View>
        </View>

        <View style={styles.containerSplit}>
            <View style={styles.containerTextSplit}>
               <Text style={styles.keyText}>Género: </Text>
               <Text style={styles.genericText}>{(typeof personGender === 'undefined') ? "" : personGender}</Text>
            </View>
        </View>

        <View style={styles.containerSplit}>
            <View style={styles.containerTextSplit}>
               <Text style={styles.keyText}>Residencia </Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Dirección:</Text>
               <Text style={styles.genericText}>{`${(typeof locationStreetName === 'undefined') ? "" : locationStreetName} #${(typeof locationStreetNumber === 'undefined') ? "" : locationStreetNumber}`}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Ciudad:</Text>
               <Text style={styles.genericText}>{(typeof locationCity === 'undefined') ? "" : locationCity}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Estado:</Text>
               <Text style={styles.genericText}>{(typeof locationState === 'undefined') ? "" : locationState}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>CP:</Text>
               <Text style={styles.genericText}>{(typeof locationCP === 'undefined') ? "" : locationCP}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Cordenadas:</Text>
               <Text style={styles.genericText}>{`${(typeof locationLatitude === 'undefined') ? "" : locationLatitude} ${(typeof locationLongitude === 'undefined') ? "" : locationLongitude}`}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Zona Horaria</Text>
               <Text style={styles.genericText}>{(typeof locationTimezone === 'undefined') ? "" : locationTimezone}</Text>
            </View>
        </View>

        <View style={styles.containerSplit}>
            <View style={styles.containerTextSplit}>
               <Text style={styles.keyText}>Contácto: </Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Correo Electrónico:</Text>
               <Text style={styles.genericText}>{(typeof contactEmail === 'undefined') ? "" : contactEmail}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Teléfono:</Text>
               <Text style={styles.genericText}>{(typeof contactPhone === 'undefined') ? "" : contactPhone}</Text>
            </View>
            <View style={styles.containerTextSplit}>
               <Text style={styles.genericText}>Móvil:</Text>
               <Text style={styles.genericText}>{(typeof contactCell === 'undefined') ? "" : contactCell}</Text>
            </View>
        </View>
    
        </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      paddingHorizontal:10,
      backgroundColor:Colors.charade,
    },
    containerSplit:{
      paddingVertical:4,
      borderBottomColor:Colors.white,
      borderBottomWidth:1
    },
    containerTextSplit:{
      flexDirection:"row",
      justifyContent:"space-between",
      alignItems:"center",
      paddingVertical:2,
    },
    keyText:{
        color:Colors.white,
        fontWeight:"bold"
    },
    genericText:{
        color:Colors.white,
        paddingLeft:10
    },
    containerTop:{
        display:"flex",
        justifyContent:"center",
        alignItems:"center",
        marginVertical:10
    },
    profileImage:{
        borderRadius:1000,
        width: 75,
        height: 75
    }

  });
  