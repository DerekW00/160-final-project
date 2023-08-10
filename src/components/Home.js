import { useState, useEffect } from 'react'; // Make sure to import useState and useEffect
import { Card, CardHeader, Button, Flex, Box, Heading,
         Text, Image, useToast, Modal, ModalOverlay, ModalContent,
         ModalHeader, ModalCloseButton, ModalBody,
         ModalFooter, useDisclosure, Badge } from '@chakra-ui/react';
import { auth, database } from '../services/firebase';
import { ref, get, child, push } from 'firebase/database';


function formatDateAndTime(dateTimeString) {
  const options = { month: 'long', day: 'numeric' };
  const formattedDate = new Date(dateTimeString).toLocaleDateString('en-US', options);

  const timeOptions = { hour: 'numeric', minute: 'numeric' };
  const formattedTime = new Date(dateTimeString).toLocaleTimeString('en-US', timeOptions);

  return `${formattedDate} @ ${formattedTime}`;
}

function Home() {
  const toast = useToast();
  const [user, setUser] = useState(null);
  const [data, setData] = useState([]);
  const [selectedEvent, setSelectedEvent] = useState(null);
  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
        setUser(user);
    });

    return () => unsubscribe();
}, []);

  useEffect(() => {
    const dbRef = ref(database);
    get(child(dbRef, 'events/'))
      .then((snapshot) => {
        if (snapshot.exists()) {
          const snap = snapshot.val();
          console.log(snap);

          const dataArray = Object.values(snap);
          dataArray.sort((a, b) => new Date(a.Time) - new Date(b.Time));

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

  const addToFavorites = (eventData) => {
    if (!user) {
      console.log("You need to sign in first.");
      return;
    }

    // Push the event data to the user's favorites path
    push(child(ref(database), `user-favorites/${user.uid}`), eventData)
      .then(() => {
        toast({
          title: 'Event added to Favorites.',
          description: "You'll receive a reminder 10 minutes before the event.",
          status: 'info',
          duration: 9000,
          isClosable: true,
        });
      })
      .catch((error) => {
        console.error("Error adding event to favorites:", error);
      });
  };

  const getColorByType = (eventType) => {
    switch (eventType) {
      case 'Networking':
        return 'blue';
      case 'Alumni':
        return 'green';
      case 'Company Visit':
        return 'purple';
      default:
        return 'gray';
    }
  };

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
                  <Flex flex='1'
                    gap='4'
                    alignItems='center'
                    flexWrap='wrap'
                    onClick={() => {
                      setSelectedEvent(item);
                      onOpen(); // Open the modal
                    }}
                    style={{ cursor: 'pointer' }}>
                    {/* <Avatar name={item.Title} src={item.image} /> */}
                    <Image
                      objectFit='cover'
                      src='thumbnail.png'
                      // src={item.image}
                      alt='Chakra UI'
                    />
                    <Box>
                      <Badge colorScheme={getColorByType(item.Type)} >{item.Type}</Badge>
                      <div style={{ height: '10px' }}></div>
                      <Heading size='sm'>{item.Title}</Heading>
                      <Text>📍 {item.Location}
                            <br />
                            📅 {formatDateAndTime(item.Time)}
                      </Text>
                    </Box>
                  </Flex>
                </Flex>
              </CardHeader>
              <Text>{item.description}</Text>
              <Button
              onClick={() => addToFavorites(item)}
              colorScheme={getColorByType(item.Type)}> Add to Favorites </Button>
            </Card>
            <div style={{ height: '20px'}}></div>
          </div>
        ))}
        </Box>
        <Modal onClose={onClose} isOpen={isOpen} isCentered>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>{selectedEvent ? selectedEvent.Title : ''}</ModalHeader>
            <ModalCloseButton />
            {selectedEvent && (
              <ModalBody>
                <Image
                  objectFit='cover'
                  src='thumbnail.png'
                  // src={selectedEvent.image}
                  alt='Chakra UI'
                />
                <Box>
                  <Text>{selectedEvent.Type}</Text>
                  <Heading size='sm'>{selectedEvent.Title}</Heading>
                  <Text>📍 {selectedEvent.Location}</Text>
                  <Text>📅 {formatDateAndTime(selectedEvent.Time)}</Text>
                </Box>
                <Text>{selectedEvent.description}</Text>
              </ModalBody>
            )}
            <ModalFooter>
              <Button onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
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

export default Home;
