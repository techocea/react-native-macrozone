import {Text, ScrollView, View} from "react-native";
import {globalStyles} from "@/styles/globals"
import HomeHeader from "@/components/HomeHeader";
import MacroGrid from "@/components/MacroGrid";
import RecentMeals from "@/components/RecentMeals";
import ShareButton from "@/components/ShareButton";
import CopyButton from '@/components/CopyButton';
import ReminderToggle from '@/components/RemindToggle';
import {useCallback, useState} from "react";
import {getMeals, Meal} from "@/storage/meals";
import {useFocusEffect} from "expo-router";

export default function HomeScreen() {
    const [meals, setMeals] = useState<Meal[]>([])

    const loadMeals = async()=>{
        const data = await getMeals();
        setMeals(data);
        // console.log('Loaded meals:', data);
    }

    useFocusEffect(
        useCallback(() => {
            loadMeals();
        }, []),
    );

    return (
        <ScrollView style={globalStyles.container} nestedScrollEnabled={true}>
            <View style={globalStyles.header}>
                <Text style={globalStyles.title}>MacroZone</Text>
                <ShareButton meals={meals} />
            </View>
            <HomeHeader />
            <MacroGrid meals={meals} />
            <CopyButton meals={meals} />
            <ReminderToggle />
            <RecentMeals meals={meals} onDelete={loadMeals}/>
        </ScrollView>
    );
}
