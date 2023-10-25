import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons'

import Principal from "./Principal";
import Consultas from "./Campeonatos";
import Explorar from "./Explorar";
import Perfil from "./Perfil";
import React from "react";
 
const Tab = createBottomTabNavigator()
 
const screenOptions = {
  tabBarStyle: {
    backgroundColor: "#002851"
  },
  tabBarActiveTintColor: "#339cff",
  tabBarInactiveTintColor: "#FFF"
}

const tabs = [
  {
    name: 'Início',
    component: Principal,
    icon: 'home'
  },
  {
    name: 'Campeonatos',
    component: Consultas,
    icon: 'trophy'
  },
  {
    name: 'Alunos',
    component: Explorar,
    icon: 'people'
  },
  {
    name: 'Pagamentos',
    component: Perfil,
    icon: 'card'
  },
]

export default function Tabs() {
  return (
    <Tab.Navigator screenOptions={screenOptions}>
      {tabs.map((tab) => (
        <Tab.Screen
          key={tab.name}
          name={tab.name}
          component={tab.component}
          options={{
            headerShown: false,
            tabBarIcon: ({ color, size }) => (
              <Ionicons name={tab.icon} color={color} size={size} />
            )
          }}
        />
      ))
      }
    </Tab.Navigator>
  )
}