import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {Image} from "react-native";
import ClienteCategoryList from "../views/cliente/category/list/CategoryList";
import ClienteOrderList from "../views/cliente/order/list/OrderList";


const Tab = createBottomTabNavigator();

export const ClienteTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="ClienteCategoryListScreen"
                        options={{title: "Lista de categorias",
                            tabBarLabel: "Inicio",
                            tabBarIcon: ({color}) => (
                                <Image source={require("../../../assets/home.png")} style={{width: 25, height: 25}}/>
                            )
                        }} component={ClienteCategoryList} />
            <Tab.Screen name="ClienteOrderListScreen"
                        options={{
                            title: "Pedidos realizados",
                            tabBarLabel: "pedidos",
                            tabBarIcon: ({color}) => (
                                <Image source={require("../../../assets/shopping_cart.png")} style={{width: 25, height: 25}}/>
                            )
                        }} component={ClienteOrderList} />
            <Tab.Screen name="Perfil"
                        options={{
                            title: "Mi perfil",
                            tabBarLabel: "perfil",
                            tabBarIcon: ({color}) => (
                                <Image source={require("../../../assets/user_menu.png")} style={{width: 25, height: 25}}/>
                            )
                        }} component={ProfileInfoScreen} />
        </Tab.Navigator>
    );
}