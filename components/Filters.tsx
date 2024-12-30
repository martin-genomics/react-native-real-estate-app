import { categories } from '@/constants/data';
import { router, useLocalSearchParams } from 'expo-router'
import React, { useState } from 'react'
import { View, Text, ScrollView, TouchableOpacity } from 'react-native'




export default function Filters() {
    const params = useLocalSearchParams<{ filters?: string }>();
    const [selectedCategory, setSelectedCategory] = useState(params.filters || "All");


    const handleCategory = (category: string) => {
        if (category === "All") {
            // params.setParams({ filters: "" });
            setSelectedCategory("All")
            router.setParams({ filters: "All" })
            return;

        }

        setSelectedCategory(category)
        router.setParams({ filters: category })
    }



    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} className='mt-3 mb-2'>
            {categories.map((category, index) => (
                <TouchableOpacity key={index} onPress={() => handleCategory(category.category)} className={`flex flex-col items-start mr-4 gap-2 px-4 py-2 rounded-full ${selectedCategory === category.category ? 'bg-primary' : ''}`}>
                    <Text className={`text-sm font-rubik-medium text-black-300 ${selectedCategory === category.category ? 'text-white' : ''}`}>
                        {category.title}
                    </Text>
                </TouchableOpacity>
            ))}

        </ScrollView>
    )
}