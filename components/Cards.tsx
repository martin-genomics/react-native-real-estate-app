import icons from "@/constants/icons";
import images from "@/constants/images";
import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";



interface CardProps {
    onPress?: () => void;
}

export function FeaturedCard({ onPress }: CardProps) {
    return (
        <TouchableOpacity onPress={onPress} className="flex flex-col items-start w-60 h-80 relative">
            <Image source={images.japan} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" />
            <View className="flex flex-row items-center bg-white/90 rounded-full px-3 py-1.5 absolute top-5 right-5">
                <Image source={icons.star} className="size-3.5 rounded-full" />
                <Text className="text-xs font-rubik-bold text-black-300 text-primary ml-1">
                    4.4
                </Text>
            </View>

            <View className="flex flex-col items-start gap-2 absolute bottom-5 inset-x-5">
                <Text numberOfLines={1} className="text-xl font-rubik-extrabold text-black-300 text-white">
                    Morden Apartment
                </Text>
                <View className="flex flex-row items-center gap-1">
                    <Image source={icons.location} className="size-5" />
                    <Text numberOfLines={1} className="text-base font-rubik  text-white">
                        22 W 15th St, New York, NY 100
                    </Text>
                </View>
                <View className="flex flex-row items-center w-full">
                    <Text numberOfLines={1} className="text-base font-rubik-extrabold  text-white">
                        $1,200 / month
                    </Text>
                    <Image source={icons.heart} className="size-5 ml-auto" />
                </View>
            </View>
        </TouchableOpacity>
    );
}


export function Card({ onPress }: CardProps) {
    return (
        <TouchableOpacity className="flex-1 w-full mt-4 px-3 py-4 rounded-lg bg-white shadow-lg shadow-black-100/70 relative ">
            {/* <Image source={images.newYork} className="size-full rounded-2xl" />
            <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" /> */}
            <View className="flex flex-row items-center  bg-white/90 rounded-full px-2 p-1 absolute top-5 right-5 z-50">
                <Image source={icons.star} className="size-3.5 rounded-full" />
                <Text className="text-xs font-rubik-bold text-black-300 text-primary ml-1">
                    4.4
                </Text>
            </View>

            <Image source={images.newYork} className="w-full h-40 rounded-lg" />
            {/* <Image source={images.cardGradient} className="size-full rounded-2xl absolute bottom-0" /> */}

            <View className="flex flex-col items-start gap-2 mt-2">
                <Text numberOfLines={1} className="text-base font-rubik-bold text-black-300 text-black">
                    Cozy Studio
                </Text>
                <View className="flex flex-row items-center gap-1">
                    <Image source={icons.location} className="size-5" />
                    <Text numberOfLines={1} className="text-base font-rubik  text-black">
                        22 W 15th St, New York, NY 100
                    </Text>
                </View>
                <View className="flex flex-row items-center w-full mt-2">
                    <Text numberOfLines={1} className="text-base font-rubik-bold  text-primary">
                        $1,200 / month
                    </Text>
                    <Image source={icons.heart} className="size-5 ml-auto  w-5 h-5" tintColor={"#191d31"} />
                </View>
            </View>
        </TouchableOpacity>
    );
}