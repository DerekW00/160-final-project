function Calendar() {
    const calendarStyle = {
        border: 'none', // Removing the border to make it look more seamless
        boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.2)', // Adding a subtle shadow for depth
        borderRadius: '8px', // Adding rounded corners for a softer appearance
        overflow: 'hidden', // Ensuring nothing overflows the rounded corners
        width: '390px',
        height: '844px',
    };

    const containerStyle = {
        display: 'flex', // Centering the iframe
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px', // Adding some padding around the calendar
    };

    return (
        <div style={containerStyle}>
            <iframe
                src="https://calendar.google.com/calendar/embed?height=800&wkst=1&bgcolor=%23ffffff&ctz=America%2FLos_Angeles&showTitle=1&mode=AGENDA&showPrint=0&showNav=1&showCalendars=0&showTz=0&title=Campuswave&src=NDdlOTc3NjI5NTc0NzEzY2U0MzFkMmRlYTllN2EyNmY1Y2FhZjliYmYzMzA5Y2FhMWI5ZGRlM2I1ZmRiYWY2MUBncm91cC5jYWxlbmRhci5nb29nbGUuY29t&color=%23EF6C00"
                style={calendarStyle}
                width="390"
                height="844"
                frameBorder="0"
                scrolling="no"
            />
        </div>
    );
}

export default Calendar;


