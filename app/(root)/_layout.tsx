import React from "react";
import { useGlobalContext } from "@/lib/global-provider";
import { ActivityIndicator, SafeAreaView, SafeAreaViewComponent } from "react-native";
import { Redirect, Slot } from "expo-router";

export default function AppLayout() {

    const { user, loading, isLoggedIn } = useGlobalContext()

    if (loading) {
        return (
            <SafeAreaView>
                <ActivityIndicator className="flex-1 justify-center items-center" size="large" />
            </SafeAreaView>
        )
    }

    if (!isLoggedIn) {
        return <Redirect href="/sign-in" />
    }

    return <Slot />
}

