import { FlatList, StyleSheet, Text, View } from 'react-native';
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((mealItem) => {
    return mealItem.categoryIds.indexOf(categoryId) >= 0; // we have a simple array so can get the index of an item
  });

  function renderMealItem(itemData) {
    const mealItemProps = {
      affordability: itemData.item.affordability,
      complexity: itemData.item.complexity,
      duration: itemData.item.duration,
      imageUrl: itemData.item.imageUrl,
      title: itemData.item.title
    };
    return <MealItem {...mealItemProps} />
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={displayedMeals}
        keyExtractor={(item) => item.id}
        renderItem={renderMealItem}
      />
    </View>
  );
};

export default MealsOverviewScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16
  }
})