import { Container, TextInput } from '@mantine/core'
import { useState } from 'react';
import UrlForm from './UrlForm';
import UrlResponse from './UrlResponse';


export default function UrlShortener() {
  const [ response, setResponse ] = useState(null);
 
   return (
       <Container size={"xs"}>
           {response?<UrlResponse response = {response}/>:<UrlForm setResponse={setResponse}/>}
       </Container>
   )
}
