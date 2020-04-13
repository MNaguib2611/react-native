import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#defffa',
        alignItems: 'center',
        justifyContent: 'center',
      },
      btn: {
        margin:10,
        padding:10,
        backgroundColor:"#6b558e",
        color:"white",
        borderRadius:18,
        width:150,
        textAlign:"center",
        size:50
      },
      imgStyle: {
        margin:9,
        width: 150,
        height: 100,
        border: 1 ,
        borderStyle:"solid",
        borderRadius: 8,
        padding: 5,
        alignSelf:"center"
      },
      txtStyle: {
        marginHorizontal:5,
        color:"##ceede2",
        fontSize:17,
        fontFamily:"Source Sans Pro,sans-serif",
        fontWeight:400
      },

})

export default styles