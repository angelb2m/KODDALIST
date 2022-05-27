import React, { Component } from 'react';
import { View, FlatList, ActivityIndicator, StyleSheet } from 'react-native';
import UserItem from './UserItem';
import EmptyState from './EmptyState';
import Colors from 'koddatest/src/res/colors';
import Strings from 'koddatest/src/res/strings';
import API from 'koddatest/src/libs/api';

class HomeScreen extends Component {

  state = {
    randoms: [],
    loading: false,
  }

  componentDidMount = () => {
    this.getRandoms();
    this.props.navigation.setOptions({ 
      headerStyle: {backgroundColor: Colors.blackPearl},
      headerTintColor:  Colors.white,
      title: Strings.home_title,
      headerTitleAlign: 'center',
    })
  }

  getRandoms = async () => {
    this.setState({ loading: true });
    const res = await API.getRandom();
    
    this.setState({ randoms: res.results, loading: false });
  }

  handlePress = async (user) => {
    this.props.navigation.navigate('DetailScreen', { user });
  }

  keyExtractor = (item) => item.login.uuid;
  renderEmpty = () => <EmptyState />

  renderItem = ({item}) => {
    return(
      <UserItem
      item={item}
      onPress={() => this.handlePress(item)}
    />
    )
  }

  render() {

    const { randoms, loading } = this.state;

    return (
      <View style={styles.container}>
        { loading ?
          <ActivityIndicator
            style={styles.loader}
            color= {Colors.white}
            size="large"

          />
          : 
          <FlatList
          keyExtractor={this.keyExtractor}
          initialNumToRender={12}
          removeClippedSubviews={true}
          updateCellsBatchingPeriod={500}
          data={randoms}
          renderItem={this.renderItem}
          ListEmptyComponent={this.renderEmpty}

        />
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: Colors.charade
  },
  loader: {
    marginTop: 60
  }
});

export default HomeScreen;
