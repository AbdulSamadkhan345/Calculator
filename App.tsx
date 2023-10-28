/* eslint-disable react/react-in-jsx-scope */
import { useState } from 'react';
import { SafeAreaView, StyleSheet, Switch} from 'react-native';
import { myColors } from './src/styles/Colors';
import { ThemeContext } from './src/context/ThemeContext';
import MyKeyboard from './src/components/MykeyBoard';

export default function App() {
  const [theme, setTheme] = useState('light');
  return (
    <ThemeContext.Provider value={theme}>
      <SafeAreaView style={theme === 'light'
        ? styles.container
        : [styles.container,
        { backgroundColor: 'black' }]}>
        <Switch
        value={theme === 'dark'}
        onValueChange={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        ios_backgroundColor="#000" />
        <MyKeyboard/>
      </SafeAreaView>
    </ThemeContext.Provider >
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: myColors.white,
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
});
