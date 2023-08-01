import { View, Text, ActivityIndicator,ScrollView,TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { getelementbyid } from '../sanity';
import Masonscreen from './Masonscreen';
import { Octicons } from '@expo/vector-icons';
const Itemscreen = ({route}) => {

    const id=route?.params.param;
    const[isloading,setloading]=useState(false);
    const[items,setitems]=useState(null);
 
    useEffect( ()=>{

        getelementbyid(id).then((data)=>setitems(data)).catch((err)=>alert(err));

    },[]);
  return (
    <View className=" bg-black justify-center items-center relative flex-1">
     {isloading? ( <ActivityIndicator  size="large"color="white"/>):(<>

{items?(<>

    <View className="w-full mt-8  justify-between  flex-row  p-2">
<Text className="text-white text-3xl font-bold ">4K WALLPAPER</Text>
<TouchableOpacity >
    <Octicons name="three-bars" size={34} color="white" />
</TouchableOpacity>

    </View>
    <ScrollView className="h-full w-full px-4">
      { items ?(


      <Masonscreen data={items} screen="Items"/>

  



      ):(<>

<View>
  <ActivityIndicator  size="large" color="white"/>
  </View></>)}

    </ScrollView>
    

</>):(
    <Text className="text-3xl text-white font-bold"> Item Not Found</Text>
)}
     




     </>)}
    </View>
  );
};

export default Itemscreen;