import icons from "@/constants/icons";
import { useLocalSearchParams, usePathname, useRouter } from "expo-router";
import React from "react";
import { View, StyleSheet, Text, Image, TextInput, TouchableOpacity } from "react-native";
// import { Searchbar } from "react-native-paper";
import { useDebouncedCallback } from "use-debounce";

const Search = () => {

    const router = useRouter()

    const path = usePathname()
    const params = useLocalSearchParams<{ query?: string }>()

    const [search, setSearch] = React.useState(params.query)

    const handleSearch = (text: string) => {
        setSearch(text)
        debouncedSearch(text)
    }

    const debouncedSearch = useDebouncedCallback((text: string) => router.setParams({ query: text }), 500)


    return (
        <View className="flex flex-row items-center justify-between px-4 rounded-lg bg-accent-100  border border-primary-100 mt-2 py-2">
            <View className="flex-1 flex flex-row items-center justify-start z-50 gap-1">
                <Image source={icons.search} className="size-5" />
                <TextInput
                    className="flex-1 text-sm font-rubik text-black-200 ml-2 "
                    placeholder="Search"
                    value={search}
                    onChangeText={handleSearch}
                />
            </View>

            <TouchableOpacity className="flex flex-row items-center gap-2">
                <Image source={icons.filter} className="size-5" />
                {/* <Text className="text-sm font-rubik text-black-200">Filter</Text> */}
            </TouchableOpacity>
        </View>
    );
};

export default Search;
