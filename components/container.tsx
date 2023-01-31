import { StyleSheet, View} from 'react-native'
import React from 'react';

type TProps = {
  children: JSX.Element;
}

const Container: React.FC<TProps> = ({children}) => {
  return (
    <View style={styles.container}>
      {children}
    </View>
  )
}

export default Container;

const styles = StyleSheet.create({
  container: {
    marginTop: 48,
    padding: 16,
  }
});