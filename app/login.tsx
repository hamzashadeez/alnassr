import { useColorScheme } from "@/components/useColorScheme";
import { useRouter } from "expo-router";
import { Pressable, StyleSheet, Text, View } from "react-native";

export default function LoginScreen() {
  const router = useRouter();
  const colorScheme = useColorScheme();
  const styles = getStyles(colorScheme);

  function goNext() {
    // router.replace("/(tabs)");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Placeholder badge/logo - replace with real asset when available */}
        <View style={styles.logoPlaceholder}>
          <Text style={styles.logoText}>AL</Text>
        </View>
        <Text style={styles.title}>ALNASSR</Text>
        <Text style={styles.tagline}>ONE CLUB. ONE HEART.</Text>
      </View>

      <View style={styles.ctaWrap}>
        <Pressable style={styles.primaryButton} onPress={goNext}>
          <Text style={styles.primaryText}>Sign In</Text>
        </Pressable>

        <Pressable style={styles.ghostButton} onPress={goNext}>
          <Text style={styles.ghostText}>Continue as Guest</Text>
        </Pressable>
      </View>
    </View>
  );
}

function getStyles(colorScheme: "dark" | "light") {
  const dark = colorScheme === "dark";
  return StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "space-between",
      alignItems: "center",
      padding: 24,
      backgroundColor: dark ? "#051028" : "#fff",
    },
    header: {
      marginTop: 80,
      alignItems: "center",
    },
    logoPlaceholder: {
      width: 96,
      height: 96,
      borderRadius: 48,
      backgroundColor: "#062033",
      borderWidth: 2,
      borderColor: "#FFD700",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 16,
    },
    logoText: {
      color: "#FFD700",
      fontWeight: "900",
      fontSize: 28,
    },
    title: {
      fontSize: 40,
      fontWeight: "900",
      color: "#FFD700",
      letterSpacing: 2,
      marginBottom: 6,
    },
    tagline: {
      color: dark ? "#BFD7E6" : "#333",
      fontWeight: "600",
    },
    ctaWrap: {
      width: "100%",
      paddingBottom: 48,
    },
    primaryButton: {
      height: 56,
      borderRadius: 12,
      backgroundColor: "#FFD700",
      alignItems: "center",
      justifyContent: "center",
      marginBottom: 12,
    },
    primaryText: {
      color: "#051028",
      fontWeight: "800",
      fontSize: 16,
    },
    ghostButton: {
      height: 56,
      borderRadius: 12,
      borderWidth: 1,
      borderColor: "#FFD700",
      alignItems: "center",
      justifyContent: "center",
    },
    ghostText: {
      color: "#FFD700",
      fontWeight: "700",
    },
  });
}
