# Orbitron React Native Mobile Example

This is a React Native mobile application demonstrating the use of Orbitron fonts across different font weights. The app showcases Regular, Medium, SemiBold, Bold, ExtraBold, and Black variants of the Orbitron font family on both iOS and Android platforms.

## Features

- ✨ Displays all 6 Orbitron font weights
- 📱 Native iOS and Android support
- 🌓 Dark/Light mode support
- 🔤 Sample text and numbers to showcase the fonts
- 📊 Platform detection (shows current platform)

## Prerequisites (macOS)

Before running this project, ensure you have the following installed on your Mac:

### Required Software

1. **Node.js** (version 18 or newer)
   ```bash
   # Check your Node.js version
   node --version
   
   # If you need to install or update Node.js, visit:
   # https://nodejs.org/
   ```

2. **Watchman** (for file watching)
   ```bash
   # Install via Homebrew
   brew install watchman
   ```

3. **React Native CLI**
   ```bash
   # Install globally
   npm install -g @react-native-community/cli
   ```

### iOS Development

4. **Xcode** (latest version from Mac App Store)
   - Install Xcode Command Line Tools:
     ```bash
     xcode-select --install
     ```

5. **CocoaPods** (for iOS dependencies)
   ```bash
   # Install CocoaPods
   sudo gem install cocoapods
   ```

6. **iOS Simulator** (included with Xcode)

### Android Development

7. **Java Development Kit (JDK)**
   ```bash
   # Install OpenJDK 17 via Homebrew
   brew install openjdk@17
   
   # Add to your shell profile (.zshrc, .bash_profile, etc.)
   export JAVA_HOME="/opt/homebrew/opt/openjdk@17/libexec/openjdk.jdk/Contents/Home"
   ```

8. **Android Studio**
   - Download from: https://developer.android.com/studio
   - During installation, make sure to install:
     - Android SDK
     - Android SDK Platform-Tools
     - Android Emulator
     - Performance (Intel HAXM) - if on Intel Mac

9. **Android SDK Environment Variables**
   Add these to your shell profile (.zshrc, .bash_profile, etc.):
   ```bash
   export ANDROID_HOME=$HOME/Library/Android/sdk
   export PATH=$PATH:$ANDROID_HOME/emulator
   export PATH=$PATH:$ANDROID_HOME/platform-tools
   ```

## Installation

1. **Clone and setup the project**
   ```bash
   # Navigate to the project directory
   cd orbitron-react-native-mobile-example
   
   # Install JavaScript dependencies
   npm install
   ```

2. **iOS Setup**
   ```bash
   # Navigate to iOS directory and install CocoaPods
   cd ios
   pod install
   cd ..
   ```

## Running the Application

### iOS Simulator

1. **Start the Metro bundler**
   ```bash
   npm start
   ```

2. **In a new terminal, run the iOS app**
   ```bash
   npm run ios
   ```

   Or, to specify a specific simulator:
   ```bash
   npx react-native run-ios --simulator="iPhone 15"
   ```

3. **Available iOS simulators**
   ```bash
   # List all available simulators
   xcrun simctl list devices available
   ```

### Android Emulator

1. **Start an Android emulator**
   
   **Option A: Using Android Studio**
   - Open Android Studio
   - Click "More Actions" → "Virtual Device Manager"
   - Create or start an existing Android Virtual Device (AVD)

   **Option B: Using command line**
   ```bash
   # List available AVDs
   emulator -list-avds
   
   # Start a specific AVD (replace 'Your_AVD_Name' with actual name)
   emulator -avd Your_AVD_Name
   ```

2. **Start the Metro bundler** (if not already running)
   ```bash
   npm start
   ```

3. **In a new terminal, run the Android app**
   ```bash
   npm run android
   ```

### Development Scripts

```bash
# Start Metro bundler
npm start

# Run on iOS
npm run ios

# Run on Android  
npm run android

# Run TypeScript type checking
npm run tsc

# Run ESLint
npm run lint

# Run tests
npm test
```

## Troubleshooting

### Common Issues

**iOS Build Issues:**
- Ensure Xcode is up to date
- Clean build folder: Product → Clean Build Folder in Xcode
- Reset Metro cache: `npx react-native start --reset-cache`

**Android Build Issues:**
- Ensure ANDROID_HOME is properly set
- Clean gradle cache: `cd android && ./gradlew clean && cd ..`
- Reset Metro cache: `npx react-native start --reset-cache`

**Font Issues:**
- If fonts don't appear, try:
  ```bash
  # Re-link assets
  npx react-native-asset
  
  # Clean and rebuild
  npm run android -- --reset-cache
  npm run ios -- --reset-cache
  ```

**Emulator Issues:**
- **iOS:** If simulator doesn't start, try: `sudo xcode-select --reset`
- **Android:** Ensure hardware acceleration is enabled in Android Studio

### Performance Tips

- Use physical devices for better performance testing
- Enable "Fast Refresh" for quicker development iterations
- Monitor memory usage on older devices when testing font rendering

## Project Structure

```
├── assets/fonts/           # Orbitron font files
├── android/               # Android native code
├── ios/                  # iOS native code
├── App.tsx               # Main application component
├── react-native.config.js # Asset linking configuration
└── README.md             # This file
```

## Font Information

The app includes all available Orbitron font weights:

- **Orbitron-Regular.ttf** - Default weight
- **Orbitron-Medium.ttf** - Medium weight
- **Orbitron-SemiBold.ttf** - Semi-bold weight  
- **Orbitron-Bold.ttf** - Bold weight
- **Orbitron-ExtraBold.ttf** - Extra bold weight
- **Orbitron-Black.ttf** - Heaviest weight

## License

This project uses the Orbitron font family, which is licensed under the SIL Open Font License 1.1. See `fonts/Orbitron/OFL.txt` for full license details.

The React Native application code is available under the MIT License.

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test on both iOS and Android
5. Submit a pull request

## Resources

- [React Native Documentation](https://reactnative.dev/docs/getting-started)
- [Orbitron Font Family](https://fonts.google.com/specimen/Orbitron)
- [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)