import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from '@expo/vector-icons';
import icons from "../../../constants/icons";
import { Image, View, Text } from "react-native";

const TabIcon = ({ focused, icon, title }: { focused: boolean; icon: any; title: string }) => {
    return (
        <View className="flex-1 mt-3 flex flex-col items-center">
            <Image source={icon} tintColor={focused ? '#0061FF' : '#666876'} resizeMode="contain" className="size-6" />
            <Text className={`text-xs text-center font-semibold ${focused ? 'text-primary font-rubik-medium' : 'text-[#282930]'}`}>
                {title}
            </Text>
        </View>
    );
}


export default function TabsLayout({ children }: { children: React.ReactNode }) {
    return <Tabs

        screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
                backgroundColor: 'white',
                borderTopColor: '#0061FF',
                position: 'absolute',
                borderTopWidth: 1,
                minHeight: 70
            }
        }}
    >
        <Tabs.Screen name="index"
            options={{
                title: 'Home',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    // <Ionicons name="home" size={30} color={color} />
                    <TabIcon focused={focused} icon={icons.home} title="Home" />
                ),
            }}
        />

        <Tabs.Screen name="explore"
            options={{
                title: 'Explore',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    // <Ionicons name="home" size={30} color={color} />
                    <TabIcon focused={focused} icon={icons.search} title="Home" />
                ),
            }}
        />

        <Tabs.Screen name="profile"
            options={{
                title: 'Profile',
                headerShown: false,
                tabBarIcon: ({ color, focused }) => (
                    // <Ionicons name="home" size={30} color={color} />
                    <TabIcon focused={focused} icon={icons.person} title="Profile" />
                ),
            }}
        />


    </Tabs>;
}