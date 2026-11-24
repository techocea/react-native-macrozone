import {Text, ScrollView} from 'react-native';
import {globalStyles} from '@/styles/globals';
import MealItem from './MealItem';
import {Meal} from "@/storage/meals";

type RecentMealsProps = {
    meals: Meal[];
    onDelete: () => void;
};

export default function RecentMeals({meals, onDelete}: RecentMealsProps) {
    return (
        <ScrollView style={{height:250, marginTop: 30}} nestedScrollEnabled={true}>
            <Text style={globalStyles.sectionTitle}>Recent Meals</Text>
            {meals.length === 0 ? (
                <Text style={globalStyles.empty}>No meals logged yet.</Text>
            ) : (
                meals
                    .slice(0, 5)
                    .map((meal) => (
                        <MealItem
                            key={meal.id}
                            id={meal.id}
                            name={meal.name}
                            calories={meal.calories}
                            protein={meal.protein}
                            carbs={meal.carbs}
                            fat={meal.fat}
                            onDelete={onDelete}
                        />
                    ))
            )}
        </ScrollView>
    );
}