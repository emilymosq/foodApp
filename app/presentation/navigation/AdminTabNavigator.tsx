import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {ProfileInfoScreen} from "../views/profile/info/ProfileInfo";
import {RolesScreen} from "../views/roles/RolesInfo";
import {Image} from "react-native";
import AdminOrderList from "../views/admin/order/list/OrderList";
import {AdminCategoryListScreen} from "../views/admin/category/list/CategoryList";


const Tab = createBottomTabNavigator();

export const AdminTabNavigator = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="AdminCategoryListScreen"
                        options={{title: "Lista de categorias",
                        tabBarLabel: "Inicio",
                        tabBarIcon: ({color}) => (
                    <Image source={require("../../../assets/home.png")} style={{width: 25, height: 25}}/>
                )
                }} component={AdminCategoryListScreen} />
            <Tab.Screen name="AdminOrderListScreen"
                        options={{
                            title: "Pedidos realizados",
                            tabBarLabel: "pedidos",
                            tabBarIcon: ({color}) => (
                                <Image source={require("../../../assets/shopping_cart.png")} style={{width: 25, height: 25}}/>
                            )
                        }} component={AdminOrderList} />
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