import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Menu = () => {
  return (
    <Icon.Button
      name="menu"
      backgroundColor="#3b5998"
      onPress={() => alert('Hamburger menu pressed!')}
    >
    </Icon.Button>
  );
};

export default Menu;
