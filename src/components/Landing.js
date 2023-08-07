import { Button, Stack, Center } from '@chakra-ui/react'
import { Container } from 'react-bootstrap';


function Landing() {
    return (
        <div>
            <div style={ {height: '350px'} }></div>
            <Center>
                <img src="logo.png" width="300" alt="logo" />
            </Center>
            <div style={ {height: '200px'} }></div>
            <Center>
                <Stack direction='row' spacing={4} centerContent>
                    <Button colorScheme='gray' variant='solid'>
                        Sign In
                    </Button>
                    <Button colorScheme='white' variant='outline'>
                        Sign Up
                    </Button>
                </Stack>
            </Center>
        </div>
            
            
    );
}

export default Landing;