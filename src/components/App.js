import React, { useEffect, useState } from 'react';

const App = () => {

    const [dogObj, setDogObj] = useState('')
    const [isLoaded, setIsLoaded] = useState(false)
    useEffect(() => {
        fetch('https://dog.ceo/api/breeds/image/random')
        .then(response => response.json())
        .then((data) => {
            setDogObj(data);
            setIsLoaded(true)
        })
    }, [])

    if(!isLoaded) return <p>Loading...</p>

    return <img src = {dogObj.message} alt="A Random Dog"></img>;
}

export default App;