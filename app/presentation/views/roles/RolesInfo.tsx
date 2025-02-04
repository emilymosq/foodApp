import React from "react";
import {Button, FlatList, Text, View} from "react-native";
import {PropsStackNavigation} from "../../interfaces/StackNav";
import viewModel from "./ViewModel";


export const RolesScreen = ({navigation, route}: PropsStackNavigation) => {
    const {user} = viewModel.RolesViewModel();

    return (
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>

            <Text style={{marginVertical: 20, fontSize: 20}}>Ventana de Rol:</Text>

            <FlatList data={user?.roles}
                      renderItem={({item}) =>
                          <Text style={{fontSize:17}}>{item.name}</Text> }
            ></FlatList>

        </View>

    );

}
