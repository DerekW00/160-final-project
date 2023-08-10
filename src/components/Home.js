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

      <Box>
      <div style={{ paddingTop: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img style={{ width: "70%" }}src='campuswave.png' alt='campuswave'/>
      </div>
      <Box maxH="85vh" overflowY="scroll">
        {data.map((item) => (
          <Card maxW='md' key={item.Title}>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  {/* <Avatar name={item.Title} src={item.image} /> */}
                  <Box>
                    <Text>{item.Type}</Text>
                    <Heading size='sm'>{item.Title}</Heading>
                    <Text>📍 {item.Location}</Text>
                    <Text>📅 {formatDateAndTime(item.Time)} </Text>
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
        </Box>
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <Flex justify="space-between" align="center" padding="10px">
            <a href='/CreateEvent'><img src='add.png' alt='create new event'/></a>
            <button ><img src='chat.png' alt='chat'/></button>
            <a href='/'><img src='home.png' alt='home'/></a>
            <a href='/Profile'><img src='person.png' alt='person'/></a>
            <button><img src='search.png' alt='search'/></button>
          </Flex>
        </div>
      </Box>
  );
}

export default Home;
