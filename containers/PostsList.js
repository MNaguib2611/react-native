import React, { useState, useEffect } from 'react';
import { StyleSheet, Text,Image, View,FlatList,TouchableOpacity } from 'react-native';
import styles from '../assets/styles'
import axios from 'axios';

export default function ({navigation}) {
    const [posts, setPosts] = useState([]);
    const [showList, setShowList] = useState(false);
    
    const pressHandler = () => {
        axios.get('https://jsonplaceholder.typicode.com/posts').then((res) => {
        setPosts(res.data);
        });
        setShowList(true);
      };

   return ( 
    <View style={styles.container}>
       {
            !showList && <TouchableOpacity 
            onPress={pressHandler}
            style={styles.btn}
            >
            <Text style={{fontSize:20,color:"white",fontFamily:"Trocchi,serif", fontWeight:400}}>GET POSTS</Text>
            </TouchableOpacity>

        }
        {
            showList &&  <FlatList
            data={posts}
            renderItem={post => {
            return (
            <View>
                <Image
                    style={styles.imgStyle}
                    source={{uri: 'https://source.unsplash.com/random'}}
                />
                <Text 
                    style={styles.txtStyle}
                    onPress={()=>navigation.navigate('PostDetails',{postId: post.item.id})}
                ><strong>Post Title: </strong>{post.item.title}</Text>
            </View>
            )
            }
            }
            />
        }
    </View> )
}

