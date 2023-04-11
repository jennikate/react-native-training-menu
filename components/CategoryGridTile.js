import { Platform, Pressable, StyleSheet, Text, View } from "react-native";
// if you want to use navigation from a component, and therefore can't use the navigation prop that is only avaiable at the top routing level you can use this hook
// import { useNavigation } from '@react-navigation/native';
// then within function const navigation = useNagivation(); and use as normal
// simliarly there is a useRoute hook you can use if you need the route object but can't use the route prop as you're in a nested component that is not registered as a screen

function CategoryGridTile({ title, color, onPress }) {
  return (
    <View style={styles.gridItem}>
      <Pressable
        android_ripple={{ color: '#fff' }}
        style={({ pressed }) => [
          styles.button, 
          pressed ? styles.buttonPressed : null
        ]}
        onPress={onPress}
      >
      <View style={[styles.innerContainer, { backgroundColor: color }]}>
        <Text style={styles.title}>
          {title}
        </Text>
      </View>
    </Pressable>
    </View >
  );
};

export default CategoryGridTile;

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 16,
    height: 150,
    borderRadius: 8,
    backgroundColor: 'white',
    elevation: 4, // android shadow
    shadowColor: 'black',
    // iOS shadow:
    shadowOpacity: 0.25,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
    overflow: Platform.OS === 'android' ? 'hidden' : 'visible' // make sure ripple effect doesn't go over rounded corners on android, and shadow isn't hidden on iOS
  },
  button: {
    flex: 1
  },
  buttonPressed: {
    opacity: 0.5
  },
  innerContainer: {
    flex: 1,
    padding: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8
  },
  title: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
