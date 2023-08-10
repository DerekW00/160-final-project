import React, { useState } from 'react';
import {
  Box,
  Flex,
  Input,
  Button,
  VStack,
  Divider,
  Text,
  Spacer,
} from '@chakra-ui/react';

function WoOchat() {

    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState('');
  
    const handleSendMessage = () => {
      if (newMessage.trim() === '') {
        return;
      }
  
      setMessages([...messages, newMessage]);
      setNewMessage('');
    };
  
    return (
        <div>
            <VStack p={4} w="100%" h="100vh" spacing={4}>
            <Box w="100%" p={4} bg="gray.100" boxShadow="md">
                Chat Room
            </Box>
            <Box w="100%" h="70vh" p={4} bg="white" borderRadius="md" boxShadow="lg" overflowY="scroll">
                {messages.map((message, index) => (
                <Flex key={index} py={1}>
                    <Spacer />
                    <Text>{message}</Text>
                </Flex>
                ))}
            </Box>
            <Divider />
            <Flex w="100%">
                <Input
                flex="1"
                variant="outline"
                placeholder="Type a message..."
                value={newMessage}
                onChange={(e) => setNewMessage(e.target.value)}
                />
                <Button colorScheme="blue" ml={2} onClick={handleSendMessage}>
                Send
                </Button>
            </Flex>
            </VStack>
            {/* <img src="wozchat.png" alt='chat' /> */}
            <div style={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>
                <Flex justify="space-between" align="center" padding="10px">
                    <a href='/CreateEvent'><img src='add.png' alt='create new event'/></a>
                    <a href='/Chat' ><img src='chat.png' alt='chat'/></a>
                    <a href='/Home'><img src='home.png' alt='home'/></a>
                    <a href='/Account'><img src='person.png' alt='person'/></a>
                    <a href='/Search'><img src='search.png' alt='search'/></a>
                </Flex>
            </div>
        </div>
    )

}

export default WoOchat;