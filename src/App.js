import React from "react";
import GoogleMapReact from 'google-map-react';

function App() {

    const [warn, setWarn] = React.useState('');
    const [userPosition, setPosition] = React.useState({
        lat: 0,
        lng: 0
    })

    const getLocation = () => {
        if (navigator.geolocation) {
            setWarn("");
            navigator.geolocation.watchPosition((position) => {
                setPosition({
                    lat: position.coords.latitude,
                    lng: position.coords.longitude
                })
            });
        } else {
            setWarn("You do not have location enabled.")
        }
    }

    React.useEffect(()=>{
        getLocation()
    },[])

    return (
        <div className="App">
            <h1>{warn}</h1>
            <h3>{userPosition.lat}</h3>
            <h3>{userPosition.lng}</h3>
            <div style={{height:'100vh', width:'100%'}}>
                {userPosition.lat!==0&&
                    <GoogleMapReact
                        bootstrapURLKeys={{ key: "AIzaSyAdIYIj-FnmzOVpTx9wkRGruI5OV88eF_I" }}
                        defaultZoom={20}
                        defaultCenter={{lat: userPosition.lat, lng:userPosition.lng}}
                    >

                    </GoogleMapReact>
                }

            </div>
        </div>
    );
}

export default App;
