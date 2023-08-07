import Button from 'react-bootstrap/Button';

console.log('home is running');

function home() {
    return (
        <div>
            <h3>Tech Cubmunity</h3>
            <div>
                <Button href='/CreateEvent'> Create a New Party </Button>
                <Button href='/Calendar'> Calendar </Button>
                <Button href='/SignIn'> Sign In </Button>
            </div>
            {/* <div id="EventCards">
                List of Events here / displayed in card format
                <div>dummy div for inserting cards</div> 
            </div> */}
        </div>
    );
}

export default home;