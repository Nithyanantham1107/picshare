import { createClient }from "@sanity/client";
import  ImageUrlBuilder  from "@sanity/image-url";
const client=  createClient({
    projectId: 'ro02b797',
    dataset: 'production',
    useCdn:true,
    apiVersion:'2023-07-27',
});
const builder=ImageUrlBuilder(client);
export const urlfor=(source)=>builder.image(source)
export const getcategory= async ()=>{
   
  const items=  await client.fetch('*[_type=="category"]').then((data)=>{return data;})

return items;

}
export const getelementbyid=async(id)=>{
    const items =await client.fetch('*[_type=="items" &&  $id  in category[]->_id] ',{id}).then((data)=>{return(data);
    }).catch( (err)=>alert(err));
    return items;
};
export const getbyid=async(id)=>{
    const item =await client.fetch('*[_type=="items" &&  _id== $id][0] ',{id}).then((data)=>{return(data);
    }).catch( (err)=>alert(err));
  
    return item;
   
};