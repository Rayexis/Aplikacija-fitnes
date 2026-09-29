import { StyleSheet, ScrollView } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function AboutScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <ThemedText type="title">O Meni</ThemedText>
          
          <ThemedView style={styles.profileCard}>
            <ThemedText type="subtitle">Aljaž</ThemedText>
            <ThemedText type="defaultSemiBold" style={styles.role}>Avtor aplikacije & Navdušenec nad fitnesom</ThemedText>
            
            <ThemedText style={styles.bio}>
              Pozdravljen! Sem programer in ljubitelj fitnesa. To aplikacijo sem ustvaril z namenom, da združim svojo strast do tehnologije in športa ter si poenostavim beleženje treningov.
            </ThemedText>
          </ThemedView>

        </ScrollView>
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  safeArea: { flex: 1 },
  scrollContent: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    alignItems: 'center',
    gap: 16,
    paddingBottom: 100,
  },
  profileCard: {
    alignItems: 'center',
    padding: 20,
    borderRadius: 16,
    gap: 12,
    width: '100%',
  },
  role: {
    color: '#e74c3c',
    textAlign: 'center',
  },
  bio: {
    textAlign: 'center',
    marginTop: 8,
    opacity: 0.9,
    lineHeight: 22,
  },
});