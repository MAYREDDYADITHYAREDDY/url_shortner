import { Text } from '@mantine/core';
import Service from '../../utils/http';
const obj = new Service();


export default function UrlResponse(props) {
   const surl = obj.getBaseURL() + '/api/s/' + props?.response?.shortCode;
   return (
       <div>
           <Text color="blue"> {surl} </Text>
       </div>
   )
}
