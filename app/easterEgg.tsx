import { useLocalSearchParams } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native';

export default function EasterEggScreen() {
  const { key } = useLocalSearchParams();

  // NOTE code assumes it won't receive invalid codes
  const easterEggs = {"E wdu59P'dGJ;(+t>rx@K=": {"quote": "Not all those who wonder are lost. - Excerpt of The Riddle of Strider - J.R.R Tolkien", "pointsText": "40 points", "pointsValue": 40, "index": 0
      "E du([p9kNSLJviBSU-Bqj": {"quote": "In an age of attention scarcity, the greatest act of good citizenship may be learning to withdraw your attention from everything except the battles you've chosen to fight. - Meditations for Mortals - Oliver Burkeman", "pointsText": "40 points", "pointsValue": 40, "index": 1
      }};


let tempQuote = easterEggs[key]["quote"];
let tempPointsText = easterEggs[key]["pointsText"];
// TODO using array of values same size as easterEggs object to keep track of already collected easter eggs

// TODO track timestamp of when all easter eggs are collected so that we can award a winner

// TODO add points to context total


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