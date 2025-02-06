import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {RolesScreen} from "../views/roles/RolesInfo";
import {Image} from "react-native";

const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Inicio" options={{title: "Inicio",
                tabBarLabel: "Inicio",
                tabBarIcon: ({color}) => (
                    <Image source={require("../../../assets/home.png")} style={{width: 25, height: 25}}/>
                )
            }} component={RolesScreen} />
            <Tab.Screen name="Perfil" options={{title: "Mi Perfil"}} component={ProfileInfoScreen} />
        </Tab.Navigator>
    );
}