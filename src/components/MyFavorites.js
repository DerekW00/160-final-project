import { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import { Card, CardHeader, Button, Flex, Box, Heading,
         Text, Image } from '@chakra-ui/react';
import { auth, database } from '../services/firebase';
import { ref, get, child } from 'firebase/database';


function formatDateAndTime(dateTimeString) {
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);

  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} @ ${formattedTime}`;
}

function MyFavorites() {
    const [user, setUser] = useState(null);
    const [data, setData] = useState([]);

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        if (!user) {
        return;
        }

        const dbRef = ref(database);
        get(child(dbRef, `user-favorites/${user.uid}`))
        .then((snapshot) => {
            if (snapshot.exists()) {
            const snap = snapshot.val();
            const dataArray = Object.values(snap);
            setData(dataArray);
            } else {
            console.log('No data available');
            }
        })
        .catch((error) => {
            console.error(error);
        });
    }, [user]);

  return (

      <Box>
      <div style={{ padding: "20px", display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
        <img style={{ width: "70%" }}src='campuswave.png' alt='campuswave'/>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div style={{ width: '340px' }}>
      <Box maxH="83vh" overflowY="scroll">
        {data.map((item) => (
          <div>
            <Card maxW='md' variant={'outline'} key={item.Title}>
              <CardHeader>
                <Flex spacing='4'>
                  <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
                    {/* <Avatar name={item.Title} src={item.image} /> */}
                    <Image
                      objectFit='cover'
                      src='thumbnail.png'
                      // src={item.image}
                      alt='Chakra UI'
                    />
                    <Box>
                      <Text>{item.Type}</Text>
                      <Heading size='sm'>{item.Title}</Heading>
                      <Text>📍 {item.Location}</Text>
                      <Text>📅 {formatDateAndTime(item.Time)} </Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <Text>{item.description}</Text>
            </Card>
            <div style={{ height: '20px'}}></div>
          </div>
        ))}
        </Box>
        </div>
        </div>
        <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
          <Flex justify="space-between" align="center" padding="10px">
            <a href='/CreateEvent'><img src='add.png' alt='create new event'/></a>
            <button ><img src='chat.png' alt='chat'/></button>
            <a href='/Home'><img src='home.png' alt='home'/></a>
            <a href='/Account'><img src='person.png' alt='person'/></a>
            <button><img src='search.png' alt='search'/></button>
          </Flex>
        </div>
      </Box>
  );
}

export default MyFavorites;