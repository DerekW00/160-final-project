import { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Flex,
  Box,
  Heading,
  Text,
  Image,
} from '@chakra-ui/react';
import { auth, database } from '../services/firebase';
import { ref, get, child } from 'firebase/database';

function formatDateAndTime(dateTimeString) {
    const options = { month: 'long', day: 'numeric' };
    const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);
  
    const timeOptions = { hour: 'numeric', minute: 'numeric' };
    const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', timeOptions);
  
    return `${formattedDate} @ ${formattedTime}`;
  }

function MyEvents() {
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

    useEffect(() => {
      if (user) { // Check if user is not null
        const dbRef = ref(database);
        get(child(dbRef, 'user-events/' + user.uid))
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
      }
    }, [user]);


    useEffect(() => {
      const currentTime = new Date();
      const threshold = 10 * 60 * 1000; // 10 minutes in milliseconds
  
      data.forEach((event) => {
        const eventTime = new Date(event.Time);
        const timeDifference = eventTime - currentTime;
  
        if (timeDifference > 0 && timeDifference <= threshold) {
          const notification = new Notification(`Reminder: ${event.Title}`, {
            body: `Your event ${event.Title} is about to start at ${formatDateAndTime(event.Time)}!`,
          });
        }
      });
    }, [data]);
  
    const [permission, setPermission] = useState(Notification.permission);
  
    useEffect(() => {
      if (permission === 'default') {
        Notification.requestPermission().then((newPermission) => {
          setPermission(newPermission);
        });
      }
    }, [permission]);


    return (
      <Box>
      <div class="top-bar" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>
        <h3>My Events</h3>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: '340px' }}>
      <Box maxH="80vh" overflowY="scroll">
          {data.map((item) => (
            <div>
              <Card maxW='md' key={item.Title} variant={'outline'}>
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
              </Card>
              <div style={{ height: '20px'}}></div>
            </div>
          ))}
          </Box>
      </div>
      </div>
      
      <Flex justify="space-between" align="center" padding="10px">
        <button href='/CreateEvent'><img src='add.png' alt='create new event'/></button>
        <button ><img src='chat.png' alt='chat'/></button>
        <button href='/'><img src='home.png' alt='home'/></button>
        <button href='/Profile'><img src='person.png' alt='person'/></button>
        <button><img src='search.png' alt='search'/></button>
      </Flex>
      </Box>
    );
}

export default MyEvents;