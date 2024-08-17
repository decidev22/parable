import { Image, StyleSheet, Platform } from "react-native";

import { HelloWave } from "@/components/HelloWave";
import ParallaxScrollView from "@/components/ParallaxScrollView";
import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";

// Testing NativeWind
import { Text, View } from "react-native";

export default function HomeScreen() {
  return (
    <>
      <View className="flex-1">
        <Text className="text-red-200 bg-black">
          Open up App.js to start working on your app!
        </Text>
      </View>
    </>
  );
}
