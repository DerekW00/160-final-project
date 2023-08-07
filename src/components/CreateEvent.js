import {  Input, Select, InputGroup, InputLeftElement, Button } from '@chakra-ui/react';
import { PhoneIcon, EmailIcon } from '@chakra-ui/icons'
import { Card } from '@chakra-ui/react';

import CardFormat from './CardFormat';


function CreateCard() {
    console.log('create card');
    var EventCards = document.getElementById('EventCards');
    EventCards.appendChild(<CardFormat/>);
}



function CreateEvent() {
    return (
        <div>
            Thumbnail:
            <Input type="img"></Input>
            Event Title:
            <br></br>
            <Input type="text" placeholder='Tech Talk'></Input>
            <br></br>
            Event Location:
            <Input type="text" placeholder='Soda 430'></Input>
            <br></br>
            Event Type:
            <Select placeholder='Select option'>
                <option value='Networking'>Networking</option>
                <option value='option2'>Option 2</option>
                <option value='option3'>Option 3</option>
            </Select>
            <br></br>
            Date and Time:
            <Input
                placeholder="Select Date and Time"
                size="md"
                type="datetime-local"
                />
            <br></br>
            Description:
            <Input type="text" placeholder='Come join'></Input>
            <br></br>
            Contact:
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <PhoneIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='(123) 456-789' />
            </InputGroup>
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                <EmailIcon color='gray.300' />
                </InputLeftElement>
                <Input type='tel' placeholder='oski@berkeley.edu' />
            </InputGroup>


            <Button id="CreateNewButton" onClick={CreateCard}>Create New Event</Button>

            
        </div>
    );
}

export default CreateEvent;