import React, { useState, useEffect } from 'react';

export  const Greeting=()=> {
  const [greeting, setGreeting] = useState('');
  const username=localStorage.getItem("user")||null

  const usershow=username.split(" ")[0].toUpperCase()

  useEffect(() => {
    const currentTime = new Date().getHours();

    if (currentTime < 12) {
      setGreeting('Good Morning');
    } else if (currentTime < 17) {
      setGreeting('Good Afternoon');
    } else {
      setGreeting('Good Evening');
    }
  }, []);

  // Rest of the component code

  return (
    <>
      <h1  style={{fontSize:"25px",color:"black"}}>{greeting}, {usershow}</h1>
         
    </>
  );
}
