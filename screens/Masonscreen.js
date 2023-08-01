import { View, Text,Image,TouchableOpacity} from 'react-native';
import React from 'react'
import MasonryList from '@react-native-seoul/masonry-list';
import { useNavigation } from '@react-navigation/native';
import { urlfor } from '../sanity';
import Itemscreen from './Itemscreen';

const Masonscreen = ({data,screen}) => {
   
  return (
    <MasonryList
    data={data}
    keyExtractor={(item) => item.id}
    numColumns={2}
    showsVerticalScrollIndicator={false}
    renderItem={({item}) => <CardItem data={item} Screen={screen}/>} />
  );
};
const CardItem =({data,Screen})=>{
  const navigation=useNavigation();
    const callfunc=()=>{
        navigation.navigate(Screen,{ param:data._id});
    };
    return( <TouchableOpacity onPress={callfunc} className="rounded-md  overflow-hidden m-1 relative bg-black">
      <Image  style={{height:Math.random()*100+200}} className="object-cover w-full h-full"source={{uri:urlfor(data.Image).url()}}/>
  
    </TouchableOpacity>);
  };
export default Masonscreen;