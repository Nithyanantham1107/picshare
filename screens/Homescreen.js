import { View, Text ,StatusBar, Image,TouchableOpacity, SafeAreaView} from 'react-native'
import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Octicons } from '@expo/vector-icons';
import { ActivityIndicator } from 'react-native';
import { ScrollView } from 'react-native';
import Masonscreen from './Masonscreen';
import { getcategory } from '../sanity';


const Homescreen = () => {
  const[category,setcategory]=useState("");
 
  useEffect(()=>{
    getcategory().then((data)=> setcategory(data)).catch((err)=>alert(err));
  },[]);
  
  console.log(category);
  const navigation=useNavigation();
  const data=[{ id:1,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2014/08/15/11/29/beach-418742_640.jpg"},
  { id:2,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2015/12/01/20/28/road-1072821_640.jpg"},
  { id:3,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_640.jpg"},
  { id:4,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2018/11/17/22/15/trees-3822149_640.jpg"},
  { id:5,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2018/08/14/13/23/ocean-3605547_640.jpg"},
  { id:5,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_640.jpg"},
  { id:6,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2016/05/05/02/37/sunset-1373171_640.jpg"},
  { id:7,name:"Nature",imageURL:"https://cdn.pixabay.com/photo/2017/04/09/09/56/avenue-2215317_640.jpg"},
];
  return (<View className=" flex-1 bg-black ">
   <View className="w-full mt-8  justify-between  flex-row  p-2">
<Text className="text-white text-3xl font-bold ">4K WALLPAPER</Text>
<TouchableOpacity >
    <Octicons  name="three-bars" size={34} color="white" />
</TouchableOpacity>

    </View>
    <ScrollView className="h-full w-full px-4">
      { category?(


      <Masonscreen data={category} screen="Itemscreen"/>

  



      ):(<>

<View>
  <ActivityIndicator  size="large" color="white"/>
  </View></>)}

    </ScrollView>
    
    
  </View>
   
  );
 
}


export default Homescreen;