import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Assets from '../../assets/Assets'
import { Colors, fonts } from '../../assets/theme'

const Header = () => {
  return (
    <View style={ styles.main}>
          <Image source={Assets.images.left_arrow} />
          <View style={styles.textView}>
              
              <Text style={styles.text}>  
                  Weight Loss
                  
              </Text>
              <Text style={styles.text}>
                  Meals
              </Text>
          </View>
          <Image source={Assets.images.profile_header} />
    </View>
  )
}
const styles = StyleSheet.create({
    textView: {
        justifyContent:'center', alignItems:'center'
    },
    text: {
        fontFamily:fonts.BOLD, fontSize:30, color:Colors.BLACK


    },
    main: {
        width:'100%',
        height: 80,
        flexDirection: 'row',
        justifyContent:'space-between', paddingHorizontal:15,alignItems:'center'

    }
})

export default Header