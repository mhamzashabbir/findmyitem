import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import * as Animatable from 'react-native-animatable';


const Loading = (props) => {

  const styles = StyleSheet.create({
    ellipseContainer: {
      flexDirection: 'row',
      marginBottom: 20,
    },
    ellipse: {
      width: 15,
      height: 12,
      backgroundColor: '#071952',
      borderRadius: 9999,
      marginHorizontal: 10,
      transform: [{ scale: 1.5 }],
      marginBottom: props.margin || 0,
    },
  });

  return (
      <View style={styles.ellipseContainer}>
        <Animatable.View animation="zoomIn" iterationCount="infinite" delay={0} style={styles.ellipse} />
        <Animatable.View animation="zoomIn" iterationCount="infinite" delay={200} style={styles.ellipse} />
        <Animatable.View animation="zoomIn" iterationCount="infinite" delay={500} style={styles.ellipse} />
      </View>
  );
};


export default Loading;
