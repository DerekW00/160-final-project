import { Button, Stack, Center } from '@chakra-ui/react'


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
                    <button colorScheme='gray' variant='solid' href='/SignIn'>
                        Sign In
                    </button>
                    <button colorScheme='white' variant='outline' href='/SignUp'>
                        Sign Up
                    </button>
                </Stack>
            </Center>
        </div>
            
            
    );
}

export default Landing;