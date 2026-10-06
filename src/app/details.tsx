import { StyleSheet, Image, ScrollView, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';

export default function DetailsScreen() {
  return (
    <ThemedView style={styles.container}>
      <SafeAreaView
        style={styles.safeArea}
        edges={['top', 'left', 'right']}
      >
        <ScrollView
          contentContainerStyle={styles.scrollContent}
          showsVerticalScrollIndicator={false}
        >

          <ThemedText type="title" style={styles.title}>
            O Vadbah in Programih
          </ThemedText>

          <ThemedText style={styles.description}>
            Naša aplikacija ponuja celosten pristop k telesni
            pripravljenosti. Spodaj si lahko ogledaš primere
            vadb za moč in vzdržljivost.
          </ThemedText>

          
          <ThemedView style={styles.imageContainer}>

            <View style={styles.imgWrap}>
              <Image
                source={require('../assets/images/utezi.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <ThemedText type="defaultSemiBold" style={styles.itemTitle}>
              1. Trening moči z utežmi
            </ThemedText>

            <ThemedText style={styles.subText}>
              Gradnja mišične mase in krepitev jedra telesa.
            </ThemedText>

          </ThemedView>

          
          <ThemedView style={styles.imageContainer}>

            <View style={styles.imgWrap}>
              <Image
                source={require('../assets/images/kardio.jpg')}
                style={styles.image}
                resizeMode="cover"
              />
            </View>

            <ThemedText type="defaultSemiBold" style={styles.itemTitle}>
              2. Kardio in vzdržljivost
            </ThemedText>

            <ThemedText style={styles.subText}>
              Izboljšanje delovanja srca in kurjenje maščob.
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
    gap: 16,
    paddingBottom: 100,
  },

  title: {
    textAlign: 'center',
    marginBottom: 4,
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
    height: 200,
    borderRadius: 12,
    overflow: 'hidden',
    marginBottom: 4,
  },

  image: {
    width: '100%',
    height: '100%',
  },

  itemTitle: {
    fontSize: 17,
  },

  subText: {
    opacity: 0.7,
    fontSize: 13,
    lineHeight: 19,
  },
});
