import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <ThemedText type="title" style={styles.title}>
            Fitnes aplikacija
          </ThemedText>
          <ThemedText type="subtitle" style={styles.subtitle}>
            Tvoj osebni žepni trener
          </ThemedText>

          {/* Spletna slika z zagotovljenimi dimenzijami */}
          <View style={styles.imageWrapper}>
            <Image 
              source={{ uri: 'https://picsum.photos/600/400' }} 
              style={styles.heroImage} 
            />
          </View>

          <ThemedView style={styles.card}>
            <ThemedText type="defaultSemiBold" style={styles.cardTitle}>Zakaj izbrati Fitnes aplikacijo?</ThemedText>
            <ThemedText style={styles.cardText}>
              Ta aplikacija ti pomaga spremljati tvoje vadbe, načrtovati fitnes cilje in ostati v formi vsak dan. Preglej podrobnosti vadb na naslednji strani ali spoznaj avtorja!
            </ThemedText>
          </ThemedView>

        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 16,
    paddingBottom: 100,
  },
  title: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 28,
    color: '#e74c3c',
  },
  subtitle: {
    textAlign: 'center',
    opacity: 0.8,
  },
  imageWrapper: {
    width: '100%',
    height: 200,
    borderRadius: 16,
    overflow: 'hidden',
  },
  heroImage: {
    width: '100%',
    height: '100%',
  },
  card: {
    padding: 16,
    borderRadius: 12,
    gap: 8,
    width: '100%',
  },
  cardTitle: {
    fontSize: 18,
  },
  cardText: {
    lineHeight: 22,
    opacity: 0.9,
  },
});