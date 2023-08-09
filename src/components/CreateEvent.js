import {  Input, Select, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { useState } from 'react';
import { ref, child, push, update } from "firebase/database";
import { database, auth } from '../services/firebase';

const user = auth.currentUser;
console.log(user);


function CreateEvent() {
    // if (!user) {
    //     return <div>You need to sign in first.</div>
    // }
    const [title, setTitle] = useState('');
    const [location, setLocation] = useState('');
    const [type, setType] = useState('');
    const [description, setDescription] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');

    const create = (e) => {
        e.preventDefault();

        // A post entry.
        const eventData = {
            Title: title,
            Location: location,
            Type: type,
            Description: description,
            Phone: phone,
            Email: email
        };
        
        // Get a key for a new Event.
        const newEventKey = push(child(ref(database), 'events')).key;
        
        // Write the new post's data simultaneously in the event list and the user's event list.
        const updates = {};
        updates['/events/' + newEventKey] = eventData;
        updates['/user-events/' + user.uid + '/' + newEventKey] = eventData;
        
        return update(ref(database), updates);
    }
    

    return (
        <div>
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
            <Input
                placeholder='10/25/2023, 04:13'
                size="md"
                type="datetime-local"
                />
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
                <Input type='tel' placeholder='oski@berkeley.edu' onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>


            <Button id="CreateNewButton" onClick={create}>Create New Event</Button>

            
        </div>
    );
}

export default CreateEvent;