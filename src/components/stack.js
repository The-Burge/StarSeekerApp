import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native"
import { createDrawerNavigator } from "@react-navigation/drawer"

const Drawer = createDrawerNavigator();

export default function stack (){
  return (
      <Drawer.Navigator>
        <Drawer.Screen />
      </Drawer.Navigator>
  )
}