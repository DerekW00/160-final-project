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
        <Button href='/CreateEvent'> Create a New Event </Button>
        <Button href='/Calendar'> Calendar </Button>
        <Button href='/SignIn'> Sign In </Button>
      </div>
      <div>
        {data.map((item) => (
          <Card maxW='md' key={item.Title}>
            <CardHeader>
              <Flex spacing='4'>
                <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                  {/* <Avatar name={item.Title} src={item.image} /> */}
                  <Box>
                    <Heading size='sm'>{item.Title}</Heading>
                    <Text>{item.Title}</Text>
                  </Box>
                </Flex>
                <IconButton
                  variant='ghost'
                  colorScheme='gray'
                  aria-label='See menu'
                />
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
              <Button flex='1' variant='ghost'>
                Like
              </Button>
              <Button flex='1' variant='ghost'>
                Comment
              </Button>
              <Button flex='1' variant='ghost'>
                Share
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default Home;
