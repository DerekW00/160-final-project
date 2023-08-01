import Button from 'react-bootstrap/Button';

console.log('home is running');

function home() {
    return (
        <div>
            <h3>Tech Cubmunity</h3>
            <div>
                <Button href='/CreateParty'> Create a New Party </Button>
                <Button href='/Calendar'> Calendar </Button>
                <Button href='/SignIn'> Sign In </Button>
            </div>
            <div>
                List of Parties here / displayed in card format
            </div>
        </div>
    );
}

export default home;