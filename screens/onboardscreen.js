import { View, Text, Image, SafeAreaView, TouchableOpacity } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

const Onboardscreen = () => {
  const navigation=useNavigation();
  return (
    <View  className=" flex-1   bg-yellow-400  relative" >
     <Image  className=" h-full w-full object-cover" source={require("../assets/lady.png")}/>
     <SafeAreaView className=" absolute z-10 items-start flex inset-0">
      <View className="   ml-44 mt-10 ">
   
        <Text className="text-3xl  font-semibold  text-white m-4 "> 4K Wallpapers</Text>
    
        <TouchableOpacity onPress={()=>{ 
          navigation.navigate("Home");
        }} className="bg-black border rounded-lg items-center  w-30">
          <Text className="text-3xl font-bold  text-white "> Next</Text>
        </TouchableOpacity> 
    
     </View>
    </SafeAreaView>
   
    </View>
  );
    
}

export default Onboardscreen;