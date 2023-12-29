import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import colors from '../styles/colors';

const PostItem = ({ post }) => {
  return (
    <View style={styles.container}>
      <Image source={{ uri: post.imageUrl }} style={styles.image} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{post.title}</Text>
        <Text style={styles.description} numberOfLines={3}>{post.description}</Text>
        <Text style={styles.date}>Posted on: {post.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    borderColor: colors.green,
    borderWidth: 1,
    borderRadius: 8,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 8,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 4,
  },
  description: {
    fontSize: 16,
    color: colors.gray,
    marginBottom: 4,
  },
  date: {
    fontSize: 14,
    color: colors.lightgray,
    marginBottom: 4,
  },
});

export default PostItem;
