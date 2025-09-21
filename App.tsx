/**
 * Orbitron Font Example React Native App
 * Demonstrates different weights of the Orbitron font family
 *
 * @format
 */

import React from 'react';
import {
  StatusBar,
  StyleSheet,
  useColorScheme,
  View,
  Text,
  ScrollView,
  Platform,
} from 'react-native';
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from 'react-native-safe-area-context';

function App() {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaProvider>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <AppContent />
    </SafeAreaProvider>
  );
}

function AppContent() {
  const safeAreaInsets = useSafeAreaInsets();
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? '#1a1a1a' : '#ffffff',
    flex: 1,
  };

  const textStyle = {
    color: isDarkMode ? '#ffffff' : '#000000',
  };

  return (
    <View style={[backgroundStyle, { paddingTop: safeAreaInsets.top }]}>
      <ScrollView contentInsetAdjustmentBehavior="automatic" style={backgroundStyle}>
        <View style={styles.container}>
          <Text style={[styles.title, textStyle]}>Orbitron Font Example</Text>
          <Text style={[styles.subtitle, textStyle]}>
            Demonstrating different font weights
          </Text>
          
          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>Regular</Text>
            <Text style={[styles.orbitronRegular, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronRegular, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>Medium</Text>
            <Text style={[styles.orbitronMedium, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronMedium, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>SemiBold</Text>
            <Text style={[styles.orbitronSemiBold, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronSemiBold, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>Bold</Text>
            <Text style={[styles.orbitronBold, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronBold, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>ExtraBold</Text>
            <Text style={[styles.orbitronExtraBold, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronExtraBold, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.fontSection}>
            <Text style={[styles.sectionTitle, textStyle]}>Black</Text>
            <Text style={[styles.orbitronBlack, textStyle]}>
              The quick brown fox jumps over the lazy dog
            </Text>
            <Text style={[styles.orbitronBlack, styles.sampleNumber, textStyle]}>
              0123456789
            </Text>
          </View>

          <View style={styles.footer}>
            <Text style={[styles.footerText, textStyle]}>
              Platform: {Platform.OS}
            </Text>
            <Text style={[styles.footerText, textStyle]}>
              Font Family: Orbitron
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 30,
    opacity: 0.7,
  },
  fontSection: {
    marginBottom: 30,
    padding: 15,
    borderRadius: 8,
    backgroundColor: 'rgba(128, 128, 128, 0.1)',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  orbitronRegular: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-Regular' : 'Orbitron-Regular',
    fontSize: 18,
    marginBottom: 5,
  },
  orbitronMedium: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-Medium' : 'Orbitron-Medium',
    fontSize: 18,
    marginBottom: 5,
  },
  orbitronSemiBold: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-SemiBold' : 'Orbitron-SemiBold',
    fontSize: 18,
    marginBottom: 5,
  },
  orbitronBold: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-Bold' : 'Orbitron-Bold',
    fontSize: 18,
    marginBottom: 5,
  },
  orbitronExtraBold: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-ExtraBold' : 'Orbitron-ExtraBold',
    fontSize: 18,
    marginBottom: 5,
  },
  orbitronBlack: {
    fontFamily: Platform.OS === 'ios' ? 'Orbitron-Black' : 'Orbitron-Black',
    fontSize: 18,
    marginBottom: 5,
  },
  sampleNumber: {
    fontSize: 24,
    letterSpacing: 2,
  },
  footer: {
    marginTop: 30,
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: 'rgba(128, 128, 128, 0.3)',
  },
  footerText: {
    fontSize: 14,
    textAlign: 'center',
    opacity: 0.6,
    marginBottom: 5,
  },
});

export default App;
