import { Card, FeaturedCard } from "@/components/Cards";
import Filters from "@/components/Filters";
import Search from "@/components/Search";
import icons from "@/constants/icons";
import images from "@/constants/images";
import { useGlobalContext } from "@/lib/global-provider";
import { Link } from "expo-router";
import React from "react";
import { FlatList, Image, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Index() {

  const { user, loading, isLoggedIn } = useGlobalContext()

  console.log(user, loading, isLoggedIn);
  return (
    <SafeAreaView className="bg-white h-full ">
      <FlatList
        data={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]}
        renderItem={({ item }) => (
          <Card />
        )}
        keyExtractor={(item) => item.toString()}
        numColumns={2}
        contentContainerClassName="pb-32"
        columnWrapperClassName="flex gap-5 px-5"
        showsVerticalScrollIndicator={false}
        ListHeaderComponent={

          <View className="px-5">
            <View className="flex flex-row items-center justify-between mt-5">
              <View className="flex flex-row items-center">
                <Image source={{ uri: user?.avatar }} className=" size-12 relative rounded-full" />
                <View className="flex flex-col ml-2  justify-center ">
                  <Text className="text-xs font-rubik text-black-200">
                    Good Morning
                  </Text>
                  <Text className="text-base font-rubik-medium text-black-300">
                    {user?.name}
                  </Text>
                </View>
              </View>
              <Image source={icons.bell} className="size-6" />
            </View>
            {/* <Link href="/properties">Properties</Link> */}

            <Search />
            <View className="my-5">
              <View className="flex flex-row items-center justify-between ">
                <Text className="text-base font-rubik-bold text-black-300">
                  Featured
                </Text>
                <TouchableOpacity>
                  <Text className="text-sm font-rubik-bold text-primary ">
                    View All
                  </Text>
                </TouchableOpacity>
              </View>
              <FlatList
                data={[1, 2, 3]}
                renderItem={({ item }) => (
                  <FeaturedCard />
                )}
                keyExtractor={(item) => item.toString()}
                // numColumns={1}
                contentContainerClassName=" flex gap-5 mt-5"
                // columnWrapperClassName="flex gap-5 px-5"
                showsHorizontalScrollIndicator={false}
                horizontal
                bounces={false}
              />
            </View>

            {/*Our Recommendations */}
            <View className="flex flex-row items-center justify-between mt-5 ">
              <Text className="text-base font-rubik-bold text-black-300">
                Our Recommendations
              </Text>
              <TouchableOpacity>
                <Text className="text-sm font-rubik-bold text-primary">
                  View All
                </Text>
              </TouchableOpacity>
            </View>

            <Filters />

          </View>
        }
      />


    </SafeAreaView>
  );
}
