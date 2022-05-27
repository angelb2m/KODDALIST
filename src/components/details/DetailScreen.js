import React,{ Component } from 'react';
import Colors from 'koddatest/src/res/colors';
import CustomHeaderTitle from './CustomHeaderTitle';
import UserDetail from './UserDetail';


export default class UserDetailsScreen extends Component {


  componentDidMount = () => {
      const { name } = this.props.route.params.user;

    this.props.navigation.setOptions({ 
      headerStyle: {backgroundColor: Colors.blackPearl},
      headerTintColor:  Colors.white,
      headerTitleAlign: 'center',
      headerTitle: () => (<CustomHeaderTitle data={name} />),
    })

  }


render() {
  const {picture, gender, name, location, email,  phone, cell } = this.props.route.params.user;

  return (
      
     <UserDetail 
       personTitle={name.title}
       personFirstName={name.first}
       personLastName={name.last}
       personGender={gender}
       locationCity={location.city}
       locationState={location.state}
       locationCP={location.postcode}
       locationTimezone={location.timezone.description}
       locationLatitude={location.coordinates.latitude}
       locationLongitude={location.coordinates.longitude}
       locationStreetName={location.street.name}
       locationStreetNumber={location.street.number}
       contactEmail={email}
       contactPhone={phone}
       contactCell={cell}
       profileImage={picture.large}
      
     />
  );
}

}
