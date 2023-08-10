import { Input, Select, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
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
            Thumbnail:
            <input type="file" name="filename" accept="image/gif, image/jpeg, image/png" />
            <br></br>
            Event Title:
            <br></br>
            <Input 
            type="text" 
            placeholder='Tech Talk'
            onChange={(e) => setTitle(e.target.value)}></Input>
            <br></br>
            Event Location:
            <Input 
            type="text" 
            placeholder='Soda 430'
            onChange={(e) => setLocation(e.target.value)}></Input>
            <br></br>
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
            <br></br>
            Contact:
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='(123) 456-789' onChange={(e) => setPhone(e.target.value)} />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
                </InputLeftElement>
                <Input type='email' placeholder='oski@berkeley.edu' onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>

            <Button id="CreateNewButton" onClick={create}>Create New Event</Button>
        </div>
    );
}

export default CreateEvent;
