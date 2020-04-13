import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Image, View,FlatList,TouchableOpacity } from 'react-native';
import styles from '../assets/styles'
import axios from 'axios';

export default function ({navigation , route}) {
    const [post, setPost] = useState({});
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${route.params.postId}`).then((res) => {
        setPost(res.data);
        })
    },[]);

   return ( 
    <View style={styles.container}>
        <Image
            style={styles.imgStyle}
            source={{uri: 'https://source.unsplash.com/random'}}
        />
        <Text style={{marginHorizontal:10,textDecorationLine:"underline",fontWeight:"normal",fontSize:30,alignSelf:"flex-start",color: "#7c795d",fontFamily:"Trocchi,serif",lineHeight:38}}>Title:</Text>
        <Text style={styles.txtStyle}>{post.title}</Text>
        <Text style={{marginHorizontal:10,textDecorationLine:"underline",fontWeight:"normal",fontSize:30,alignSelf:"flex-start",color: "#7c795d",fontFamily:"Trocchi,serif",lineHeight:38}}>Body:</Text>
        <Text style={styles.txtStyle}>{post.body}</Text>
    </View> )
}
