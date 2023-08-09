import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react';
import { Button, Flex, IconButton, Box } from '@chakra-ui/react';
import { Heading, Text, Avatar, Image } from '@chakra-ui/react';
import { database } from '../services/firebase';
import { ref, get, child } from 'firebase/database';

function home() {

    const data = [
        {
          name: "Segun Adebayo",
          title: "Creator, Chakra UI",
          description: "With Chakra UI, I wanted to sync the speed of development with the speed of design. I wanted the developer to be just as excited as the designer to create a screen.",
          image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80",
        },
        {
          name: "Dan Abramov",
          title: "Creator, React",
          description: "Dan Abramov is a software engineer and React core team member. He is also the creator of Redux, a state management library for React.",
          image: "https://avatars.githubusercontent.com/u/65209?v=4",
        },
        {
          name: "Chris Williams",
          title: "Creator, Next.js",
          description: "Chris Williams is a software engineer and creator of Next.js, a React framework that makes it easy to build server-rendered React applications.",
          image: "https://avatars.githubusercontent.com/u/821793?v=4",
        },
      ];

    const dbRef = ref(database);
    get(child(dbRef, 'events/')).then((snapshot) => {
    if (snapshot.exists()) {
        console.log(snapshot.val());
    } else {
        console.log("No data available");
    }
    }).catch((error) => {
    console.error(error);
    });

    return (
        <div>
            <h3>Campuswave</h3>
            <div>
                <Button href='/CreateEvent'> Create a New Party </Button>
                <Button href='/Calendar'> Calendar </Button>
                <Button href='/SignIn'> Sign In </Button>
            </div>
            <div>
            {data.map((item) => (
                <Card maxW="md" key={item.name}>
                <CardHeader>
                    <Flex spacing="4">
                    <Flex flex="1" gap="4" alignItems="center" flexWrap="wrap">
                        <Avatar name={item.name} src={item.image} />
                        <Box>
                        <Heading size="sm">{item.name}</Heading>
                        <Text>{item.title}</Text>
                        </Box>
                    </Flex>
                    <IconButton
                        variant="ghost"
                        colorScheme="gray"
                        aria-label="See menu"
                    >
                    </IconButton>
                    </Flex>
                </CardHeader>
                <CardBody/>
                <Image
                    objectFit="cover"
                    src={item.image}
                    alt="Chakra UI"
                />

                <CardFooter
                    justify="space-between"
                    flexWrap="wrap"
                    sx={{
                    '& > button': {
                        minW: '136px',
                    },
                    }}
                >
                    <Button flex="1" variant="ghost">
                    Like
                    </Button>
                    <Button flex="1" variant="ghost">
                    Comment
                    </Button>
                    <Button flex="1" variant="ghost">
                    Share
                    </Button>
                </CardFooter>
                </Card>
            ))}
            </div>
        </div>
    );
}

export default home;