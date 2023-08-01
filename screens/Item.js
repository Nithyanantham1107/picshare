import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native'
import React, { useEffect, useState } from 'react'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { ActivityIndicator } from 'react-native';
import { Image } from 'react-native';
import { Octicons } from '@expo/vector-icons';
import { BlurView } from 'expo-blur';
import { getbyid, urlfor} from '../sanity';



const Item = ({route} ) => {
  
    const id=route?.params?.param;
   
    const navigation=useNavigation();
    const[isloading,setloading]=useState(false);
    const[item,setitem]=useState("");
    useEffect(()=>{
      setloading(true);
      getbyid(id).then((data)=>{setitem(data);}).catch((err)=>alert(err));
      setInterval(() => {
        setloading(false);
      },2000);
    },[]);
   

    const handleclick=()=>{ navigation.navigate("Home");}
  
  return (<View className="flex-1 w-full h-full  bg-black relative">
  { isloading ? ( <ActivityIndicator size={"large"} color={"white"}/>):(<>
 {item && (<>

  <Image  className="w-full h-full object-cover"source={{uri:urlfor(item.Image).url()}} />
 <View   className=" absolute z-10   inset-0 flex h-full w-full   " >  
 
 <TouchableOpacity className="w-full flex mt-4 px-3"  onPress={handleclick}>
     <AntDesign name="arrowleft" size={30} color="white" />
   </TouchableOpacity>
   <View className=" w-full h-full justify-end"> 
   <View className="    justify-center items-center h-30 mb-10 p-8">
  <BlurView   tink="light"intensity={60} classname=" w-full  rounded-md s h-full  flex flex-row p-5 ">
    
   <View className="flex flex-row  w-96 h-14 items-center">
    <Text className="text-white  font-bold text-xl  ">{item?.title} {item.description} </Text> 
<TouchableOpacity className=" ml-28">
    <AntDesign  name="cloud" size={30} color="white" />
    </TouchableOpacity></View>
    </BlurView>
  </View>
</View>
  
 
 
 




  
 



    

  
  


</View>
 </>
  
 )}

 </> )
  
  
 
}
 </View>
  );
};

export default Item;