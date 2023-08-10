import { Input, Select, InputGroup, InputLeftElement, Button, Flex } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons';
import { useState, useEffect } from 'react';
import { ref, child, push, update } from "firebase/database";
import { database, auth } from '../services/firebase';

function CreateEvent() {
    const [user, setUser] = useState(null);
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [dateTime, setDateTime] = useState('');

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const create = (e) => {
        e.preventDefault();

        if (!user) {
            console.log("You need to sign in first.");
            return;
        }

        // A post entry.
        const eventData = {
            Title: title,
            Location: location,
            Type: type,
            Description: description,
            Phone: phone,
            Email: email,
            Time: dateTime 
        };
        
        // Get a key for a new Event.
        const newEventKey = push(child(ref(database), 'events')).key;
        
        // Write the new post's data simultaneously in the event list and the user's event list.
        const updates = {};
        updates['/events/' + newEventKey] = eventData;
        updates['/user-events/' + user.uid + '/' + newEventKey] = eventData;
        
        update(ref(database), updates);
    }

    return (
        <div>
            <div class="top-bar" style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "70px" }}>
                <h3>Create an Event</h3>
            </div>
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <div style={{ width: '340px' }}>
            Thumbnail:
            <input type="file" name="filename" accept="image/gif, image/jpeg, image/png" />
            <div style={{ height: "10px"}}></div>
            Event Title:
            <br></br>
            <Input 
            type="text" 
            placeholder='Tech Talk'
            onChange={(e) => setTitle(e.target.value)}></Input>
            <div style={{ height: "10px"}}></div>
            Event Location:
            <Input 
            type="text" 
            placeholder='Soda 430'
            onChange={(e) => setLocation(e.target.value)}></Input>
            <div style={{ height: "10px"}}></div>
            Event Type:
            <Select placeholder='Select option' onChange={(e) => setType(e.target.value)} >
                <option value='Networking'>Networking</option>
                <option value='Alumni'>Alumni</option>
                <option value='Company'>Company Visit</option>
                <option value='other'>Other</option>
            </Select>
            <br></br>
            Date and Time:
            <br></br>
            <input
                type="datetime-local"
                value={dateTime}
                onChange={(e) => setDateTime(e.target.value)} /> 
            <br></br>
            <br></br>
            Description:
            <Input 
            type="text" 
            placeholder='Come join'
            onChange={(e) => setDescription(e.target.value)}></Input>
            <div style={{ height: "10px"}}></div>
            Contact:
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='(123) 456-789' onChange={(e) => setPhone(e.target.value)} />
            </InputGroup>
            <div style={{ height: "10px"}}></div>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
                </InputLeftElement>
                <Input type='email' placeholder='oski@berkeley.edu' onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>
                <div style={{ height: '150px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Button id="CreateNewButton" onClick={create}>Create New Event</Button>
                </div>
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
        </div>
    );
}

export default CreateEvent;
