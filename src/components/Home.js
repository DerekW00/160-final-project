import { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  Flex,
  IconButton,
  Box,
  Heading,
  Text,
  Avatar,
  Image,
} from '@chakra-ui/react';
import { database } from '../services/firebase';
import { ref, get, child } from 'firebase/database';
import { AddIcon, ChatIcon, Search2Icon, HamburgerIcon } from '@chakra-ui/icons';

function formatDateAndTime(dateTimeString) {
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);

  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} @ ${formattedTime}`;
}

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'events/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snap = snapshot.val();
          console.log(snap);

          // Convert the object to an array
          const dataArray = Object.values(snap);

          console.log('dataArray', dataArray);

          setData(dataArray);
        } else {
          console.log('No data available');
        }
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <h3>Campuswave</h3>
      
      <div>
        {data.map((item) => (
          <Card maxW='md' key={item.Title}>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  {/* <Avatar name={item.Title} src={item.image} /> */}
                  <Box>
                    <Text>{item.Type}</Text>
                    <Heading size='sm'>{item.Title}</Heading>
<<<<<<< Updated upstream
                    <Text>📍{item.Location}</Text>
                    <Text>📅 {item.Time} </Text>
=======
                    <Text>📍 {item.Location}</Text>
                    <Text>📅 {formatDateAndTime(item.Time)} </Text>
>>>>>>> Stashed changes
                  </Box>
                </Flex>
              </Flex>
            </CardHeader>
            <CardBody>
              <Image
                objectFit='cover'
                src={item.image}
                alt='Chakra UI'
              />
              <Text>{item.description}</Text>
            </CardBody>
            <CardFooter
              justify='space-between'
              flexWrap='wrap'
              sx={{
                '& > button': {
                  minW: '136px',
                },
              }}
            >
              
            </CardFooter>
          </Card>
        ))}
      </div>
      <div>
        <button href='/CreateEvent'><img src='add.png' alt='create new event'/></button>
        <button ><img src='chat.png' alt='chat'/></button>
        <button href='/'><img src='home.png' alt='home'/></button>
        <button href='/Profile'><img src='person.png' alt='person'/></button>
        <button><img src='search.png' alt='search'/></button>
      </div>

    </div>
  );
}

export default Home;
