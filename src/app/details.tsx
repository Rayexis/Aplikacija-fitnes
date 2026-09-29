import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function DetailsScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea} edges={['top', 'left', 'right']}>
        <ScrollView contentContainerStyle={styles.scrollContent}>
          
          <ThemedText type="title">O Vadbah in Programih</ThemedText>
          <ThemedText style={styles.description}>
            Naša aplikacija ponuja celosten pristop k telesni pripravljenosti. Spodaj si lahko ogledaš primere vadb za moč in vzdržljivost.
          </ThemedText>

          <ThemedView style={styles.imageContainer}>
            <View style={styles.imgWrap}>
              <Image 
                source={{ uri: 'https://picsum.photos/600/300?random=1' }} 
                style={styles.image} 
              />
            </View>
            <ThemedText type="defaultSemiBold">1. Trening moči z utežmi</ThemedText>
            <ThemedText style={styles.subText}>Gradnja mišične mase in krepitev jedra telesa.</ThemedText>
          </ThemedView>

          <ThemedView style={styles.imageContainer}>
            <View style={styles.imgWrap}>
              <Image 
                source={{ uri: 'https://picsum.photos/600/300?random=2' }} 
                style={styles.image} 
              />
            </View>
            <ThemedText type="defaultSemiBold">2. Kardio in vzdržljivost</ThemedText>
            <ThemedText style={styles.subText}>Izboljšanje delovanja srca in kurjenje maščob.</ThemedText>
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
    gap: 16,
    paddingBottom: 100,
  },
  description: {
    opacity: 0.85,
    lineHeight: 20,
  },
  imageContainer: {
    gap: 8,
    marginTop: 8,
    width: '100%',
  },
  imgWrap: {
    width: '100%',
    height: 180,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 4,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  subText: {
    opacity: 0.7,
    fontSize: 13,
  },
});