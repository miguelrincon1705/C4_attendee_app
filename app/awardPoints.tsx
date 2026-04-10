import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function AwawrdPointsScreen() {
  const { key } = useLocalSearchParams();

  const { globalState, setGlobalState } = useContext(AppContext);

  // NOTE code assumes it won't receive invalid codes
  const easterEggs = {"A 7IIZSbk;mt<OaV'E'3b&": {"pointsText": "10 points", "pointsValue": 10}};


  let tempPointsValue = easterEggs[key]["pointsValue"];
  let tempPointsText = easterEggs[key]["pointsText"];

  // TODO add points to context total
      //Update name in context
      let tempContext = globalState;
      tempContext.userName = name;
      setGlobalState(tempContext);


  return (
    <View style={styles.container}>
      <Text style={styles.welcomeText}>Easter egg found!</Text>
      <Text>{tempQuote}</Text>
      <Text>{tempPointsText} awarded 🎊</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  welcomeText: { fontSize: 24, fontWeight: 'bold' }
});