/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useRef} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Alert
} from 'react-native';
import { WebView } from 'react-native-webview';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const Section: React.FC<{
  title: string;
}> = ({children, title}) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
    </View>
  );
};

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  const webViewRef = useRef(null)

  const html = `
      <html>
      <head></head>
      <body>
        <script>
        
          
          document.addEventListener('message', function (data) {
                alert('message received ' + data.data);
                document.body.style.backgroundColor = 'blue';
           });
          
          setTimeout(function () {
            window.ReactNativeWebView.postMessage("Hello!")
          }, 5000)
        </script>
        <div>
          some text in webview
        </div>
      </body>
      </html>
    `;

  const run = `
      document.dispatchEvent(new MessageEvent('message', {data: ${JSON.stringify("userid, username, jwt token")}}));
      true;      
    `;


  const onHookMessage = () => {

  }

  //window.postMessage(${JSON.stringify(data)},'*');

  const generateOnMessageFunction = (data: any) =>
      `(function() {
    window.dispatchEvent(new MessageEvent('message', {data: ${JSON.stringify(data)}}));
    
  })()`;

  const INJECTED_JAVASCRIPT = `(function() {
   let body = document.getElementsByTagName("BODY")[0];
    body.style.fontFamily = "AralPos-Bold";
    body.style.fontSize = "60";
  
})();`;

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle}>
        <Header />
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
          <Text onPress={() => {

          }}>Load hook webview</Text>
          <Text onPress={() => {

          }}>Load latest webview</Text>
          <View style={{ height : 200, paddingTop: 22 }}>
            <WebView
                injectedJavaScript={INJECTED_JAVASCRIPT}
                ref={webViewRef}
                source={{ html }}
                onMessage={(event) => {
                  Alert.alert(event.nativeEvent.data);
                  // webRef.injectJavaScript(run);
                  webViewRef.current.injectJavaScript(run);
                }}
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
