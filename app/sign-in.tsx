import { getUser, login } from "@/lib/appwrite";
import { useGlobalContext } from "@/lib/global-provider";
import { Redirect } from "expo-router";
import React from "react";
import { View, Text, ScrollView, Image, TouchableOpacity, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



export default function SignInScreen() {
    const { refetch, loading, isLoggedIn, user, } = useGlobalContext()


    if (isLoggedIn) {
        return <Redirect href="/" />
    }

    const signIn = async () => {
        const result = await login();

        if (result) {
            await refetch()
        } else {
            Alert.alert("Error", "Something went wrong");
        }
    }

    return (
        <SafeAreaView className="bg-white h-full ">
            <ScrollView contentContainerClassName="h-full">
                <Image source={require("../assets/images/onboarding.png")} className="w-full h-1/2" />
                <View className="px-10">
                    <Text className="text-base text-center uppercase font-rubik text-black-200">Welcome to Restate</Text>
                    <Text className="text-3xl text-center font-rubik-bold text-black-200">
                        Let's Get You Closer to {"\n"} <Text className=" text-primary-500">Your Ideal Home</Text>
                    </Text>
                    <Text className="text-lg text-center font-rubik text-black-200  mt-12" >
                        Login to Restate with Google
                    </Text>

                    <TouchableOpacity onPress={signIn} className="flex-row items-center justify-center mt-12 bg-white shadow-md shadow-zinc-300 py-4 rounded-full w-full">
                        <Image source={require("../assets/icons/google.png")} className="w-5 h-5" resizeMode="contain" />
                        <Text className="text-lg text-center  text-black-200 ml-2 font-rubik-bold">   Continue with Google</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );

}