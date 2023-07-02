import {View, Text, StyleSheet, Image, SafeAreaView, FlatList} from 'react-native';
import React, { useEffect, useState } from 'react';
import {Colors, fonts} from '../assets/theme';
import Header from './components/Header';
import Assets from '../assets/Assets';
import {Spacer10, Spacer15, Spacer20} from '../utils/Sapcing';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RNFetchBlob from 'rn-fetch-blob'


const arrayBuffer = 'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/04252023032040_00148466-6020-496d-879a-01edabd564d1';
const normaluri = 'https://ayae52i9de.execute-api.us-east-1.amazonaws.com/prod/s3?key=elephant-trax/google_103236758783646644108/01232022112248_69365b28-43e0-406f-a0ce-8e6716146f61';
const Add = () => {
  
  const [user, setUser] = useState('');
  const [img, setImg] = useState<any>();
  const [isLoading, setIsLoading] = useState(true);
  const [imageUrl, setImageUrl] = useState<any>('')
  

  const mergedData = [...(imageUrl ? [imageUrl] : []), ...(img || []),];
 


 const fetchImage = async (url: any) => {
  try {
    const response = await RNFetchBlob.fetch('GET', url);
    const base64Data = response.base64();

    return `data:image/jpeg;base64,${base64Data}`;
  } catch (error) {
    console.log('ERROR:', error);
    return null; // Return null in case of error
  }
};

useEffect(() => {
  const fetchData = async () => {
    const imageData = await fetchImage(normaluri);
    setImageUrl(imageData);

    const userImageData = await fetchImage(arrayBuffer);
    setImg(userImageData);

    setIsLoading(false);
  };

  fetchData();
}, []);

  return (
    <SafeAreaView style={styles.main}>
      <Header />
      <View style={styles.mainImageView}>
        <Image source={Assets.images.main_pic} style={styles.mainImage} />
      </View>
      <Spacer20 />
      <View style={styles.heading}>
        <View>
          <Text style={styles.headerText}>One - pan salmon with</Text>
          <Text style={styles.headerText}>asparagus</Text>
        </View>
        <Image source={Assets.images.heart} />
      </View>
      <Spacer10 />
      <View style={styles.smalliconsView}>
        <View style={styles.burnView}>
          <Image source={Assets.images.burn} />
          <Text style={styles.smalltext}>346 cal</Text>
        </View>

        <View style={styles.burnView}>
          <Image source={Assets.images.timing} />
          <Text style={styles.smalltext}>15 mins</Text>
        </View>
      </View>

      <Spacer15 />

      <View style={styles.caloriesView}>
        <View style={styles.caloriesInnerView}>
          <View style={styles.proteinView}>
            <Text style={styles.proteintext}>Protein</Text>
            <Text style={styles.gramstext}>
              35.5 <Text style={styles.gramstext1}>g</Text>
            </Text>
          </View>
          <View
            style={{width: 1, backgroundColor: Colors.GREY, height: 30}}></View>

          <View style={styles.proteinView}>
            <Text style={styles.proteintext}>Fats</Text>
            <Text style={styles.gramstext}>
              18.7 <Text style={styles.gramstext1}>g</Text>
            </Text>
          </View>
          <View
            style={{width: 1, backgroundColor: Colors.GREY, height: 30}}></View>
          <View style={styles.proteinView}>
            <Text style={styles.proteintext}>Net Carbs</Text>
            <Text style={styles.gramstext}>
              75 <Text style={styles.gramstext1}>g</Text>
            </Text>
          </View>
        </View>
      </View>
      <Spacer10 />

      <View style={styles.IngredientDirectionView}>
        <View style={styles.IngredientView}>
          <Text style={styles.IngredientText}>
            Ingredients
          </Text>
        </View>
        <View style={styles.DirectionView}>
          <Text style={styles.DirectionText}>
            Directions
</Text>
        </View>
      </View>

      <Spacer15 />

      <FlatList
        data={mergedData}
        style={{ marginTop: 20 }}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => (
          <View style={{ width: '100%', justifyContent: 'center', alignItems:'center'}}>
            <Text>
              No data found
            </Text>
          </View>
          
        )}
        renderItem={({ item }) => {

          if (!item) {
            return null;
          }
         
          // console.log('item',item)
          return (
            <>
            
                  <View style={styles.dataView}>
                    <View style={styles.dataFirstView}>
                      <View style={styles.dataImageView}>

                        <Image source={item} style={styles.dataImage} />
                      </View>
                      <Text style={styles.dataText}>
                        Asparagus spears
                      </Text>
                    </View>

                    <Text style={styles.dataGrams}>
                      10g
                    </Text>

                  </View>
            </>
          );
        }}
      />

      
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  dataText: {
fontFamily:fonts.SEMIBOLD, fontSize:12, color:Colors.BLACK,
  },
  dataGrams: {
    fontFamily:fonts.SEMIBOLD, fontSize:12, color:Colors.BLACK

  },
  dataImage: {
    borderRadius:50, width:37, height:37, 
  },
  dataImageView: {
    width: 37, height: 37, justifyContent:'center', alignItems:'center', 
  },
  dataFirstView: {
    flexDirection: 'row', alignItems: 'center',
    gap:10
  },
  dataView: {
    width: '100%', justifyContent: 'space-between', 
    paddingHorizontal: 16, flexDirection: 'row', alignItems: 'center', height: 41,
  
  },
  DirectionText:{
    fontFamily: fonts.BOLD, fontSize: 20,
    // color: Colors.LIGHTORANGE,
    color:Colors.BLACK
  },
  IngredientText: {
fontFamily:fonts.BOLD, fontSize:20, color:Colors.LIGHTORANGE, 
  },
  DirectionView: {
    width: '50%', justifyContent: 'center', alignItems: 'center',
    // borderBottomColor: Colors.LIGHTORANGE, borderBottomWidth: 1

  },
  IngredientView: {
    width:'50%', justifyContent:'center', alignItems:'center', borderBottomColor:Colors.LIGHTORANGE, borderBottomWidth:1, height:40
  },
  IngredientDirectionView: {
width:'100%', alignItems:"center", paddingHorizontal:20,  flexDirection:'row'
  },
  line: {
    width: 1,
    height: 30,
    tintColor: 'black',
  },
  gramstext1: {
    fontFamily: fonts.SEMIBOLD,
    color: Colors.GREY,
    fontSize: 12,
  },
  gramstext: {
    fontFamily: fonts.BOLD,
    color: Colors.BLACK,
    fontSize: 12,
  },
  proteintext: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: 12,
    color: Colors.GREY,
  },
  proteinView: {
    justifyContent: 'center',
    gap: 5,
  },
  caloriesInnerView: {
    width: '100%',
    paddingStart: 19,
    paddingEnd: 36,
    paddingTop: 14,
    paddingBottom: 16,
    borderRadius: 10,
    elevation: 5,
    backgroundColor: Colors.WHITE,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  caloriesView: {
    width: '100%',
    paddingHorizontal: 27,
  },
  smalltext: {
    fontFamily: fonts.SEMIBOLD,
    fontSize: 12,
    color: Colors.GREY,
  },
  burnView: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 5,
  },
  smalliconsView: {
    paddingHorizontal: 27,
    width: '100%',
    flexDirection: 'row',
    gap: 19,
    alignItems: 'center',
  },
  headerText: {
    fontFamily: fonts.BOLD,
    fontSize: 20,
    color: Colors.BLACK,
  },
  heading: {
    paddingHorizontal: 27,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  mainImage: {
    width: '100%',
    height: 217,
  },
  mainImageView: {
    paddingHorizontal: 27,
    marginTop: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  main: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
});
export default Add;
