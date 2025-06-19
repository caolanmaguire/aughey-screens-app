# 📱 Aughey Screens

> A modern cross-platform mobile application built with React and Apache Cordova

[![Build Status](https://github.com/caolanmaguire/aughey-screens-app/workflows/Build%20and%20Sign%20APK/badge.svg)](https://github.com/caolanmaguire/aughey-screens-app/actions)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![React](https://img.shields.io/badge/React-18+-blue.svg)](https://reactjs.org/)
[![Cordova](https://img.shields.io/badge/Cordova-12+-green.svg)](https://cordova.apache.org/)

## ✨ Features

- 🌐 **Cross-Platform**: Runs seamlessly on iOS and Android
- ⚡ **Fast & Responsive**: Built with modern React and optimized for mobile performance
- 📱 **Native Integration**: Leverages device capabilities through Cordova plugins
- 🎨 **Modern UI**: Clean, intuitive interface designed for mobile-first experience
- 🔄 **Auto-Updates**: Seamless content updates and synchronization
- 🌙 **Dark Mode**: Supports both light and dark themes
- 📱 **Responsive Design**: Adapts perfectly to different screen sizes

## 🚀 Quick Start

### Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (v16 or higher)
- **npm** or **yarn**
- **Apache Cordova CLI** (`npm install -g cordova`)
- **Android Studio** (for Android development)
- **Xcode** (for iOS development, macOS only)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/caolanmaguire/aughey-screens-app.git
   cd aughey-screens-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Build the React app**
   ```bash
   npm run build
   ```

4. **Add platforms**
   ```bash
   cordova platform add android
   cordova platform add ios  # macOS only
   ```

5. **Run on device/emulator**
   ```bash
   # Android
   cordova run android
   
   # iOS (macOS only)
   cordova run ios
   ```

## 🛠️ Development

### Development Setup

1. **Start the React development server**
   ```bash
   npm start
   ```

2. **For mobile development with live reload**
   ```bash
   # Build React app
   npm run build
   
   # Copy to Cordova
   rm -rf www/* && cp -r build/* www/
   
   # Run with live reload
   cordova run android --device --live-reload
   ```

### Project Structure

```
aughey-screens-app/
├── src/                    # React source code
│   ├── components/         # Reusable React components
│   ├── pages/             # Page components
│   ├── services/          # API and utility services
│   └── styles/            # CSS and styling files
├── public/                # Public assets
├── www/                   # Cordova web assets (generated)
├── platforms/             # Platform-specific code (generated)
├── plugins/               # Cordova plugins
├── config.xml            # Cordova configuration
└── package.json          # Node.js dependencies
```

### Available Scripts

- `npm start` - Start React development server
- `npm run build` - Build React app for production
- `npm test` - Run test suite
- `npm run eject` - Eject from Create React App (use with caution)

## 📦 Building for Production

### Android APK

```bash
# Debug build
cordova build android

# Release build (requires signing setup)
cordova build android --release
```

### iOS App

```bash
# Debug build
cordova build ios

# Release build
cordova build ios --release
```

## 🔧 Configuration

### Environment Variables

Create a `.env` file in the root directory:

```env
REACT_APP_API_URL=https://your-api-endpoint.com
REACT_APP_VERSION=1.0.0
```

### Cordova Configuration

Key settings in `config.xml`:

- **App ID**: `com.yourcompany.aughey-screens`
- **Version**: Update for each release
- **Permissions**: Configure based on required device features
- **Preferences**: Platform-specific settings

## 🚀 Deployment

### Automated CI/CD

This project includes GitHub Actions workflows for automated building and deployment:

- **Pull Requests**: Automated testing and building
- **Main Branch**: Automatic APK generation and release creation
- **Release Management**: Tagged releases with downloadable APKs

### Manual Deployment

1. **Google Play Store** (Android)
   - Build signed release APK
   - Upload to Google Play Console
   - Follow store guidelines for submission

2. **Apple App Store** (iOS)
   - Build and archive in Xcode
   - Upload to App Store Connect
   - Submit for review

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch** (`git checkout -b feature/amazing-feature`)
3. **Commit your changes** (`git commit -m 'Add amazing feature'`)
4. **Push to the branch** (`git push origin feature/amazing-feature`)
5. **Open a Pull Request**

### Development Guidelines

- Follow React and JavaScript best practices
- Write meaningful commit messages
- Add tests for new features
- Update documentation as needed
- Ensure cross-platform compatibility

## 🐛 Troubleshooting

### Common Issues

**Build Failures**
- Ensure all dependencies are installed
- Check Node.js and Cordova versions
- Clear cache: `npm run clean` or `cordova clean`

**Device Connection Issues**
- Enable USB debugging (Android)
- Check device drivers
- Verify platform-specific SDKs are installed

**Performance Issues**
- Optimize images and assets
- Enable production builds
- Check for memory leaks in React components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👥 Team

- **[Caolan Maguire](https://github.com/caolanmaguire)** - Project Maintainer

## 🙏 Acknowledgments

- Built with [React](https://reactjs.org/)
- Powered by [Apache Cordova](https://cordova.apache.org/)
- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- UI components inspired by modern mobile design principles

## 📞 Support

- 📧 **Email**: [your-email@domain.com](mailto:your-email@domain.com)
- 🐛 **Issues**: [GitHub Issues](https://github.com/caolanmaguire/aughey-screens-app/issues)
- 💬 **Discussions**: [GitHub Discussions](https://github.com/caolanmaguire/aughey-screens-app/discussions)

---

<div align="center">
  <strong>Made with ❤️ by the Aughey Screens Team</strong>
</div>
