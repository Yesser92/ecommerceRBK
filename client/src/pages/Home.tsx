import React, { useState, useEffect } from 'react';
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from 'react-router-dom';
import {  signOut } from "firebase/auth";

const Home:React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLoggedIn(true);
        console.log("uid", user.uid);
      } else {
        setIsLoggedIn(false);
        console.log("user is logged out");
      }
      setIsLoading(false);
    });
  }, []);

  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
      console.log("Signed out successfully");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <section>        
      <nav>
        {isLoading && <p>Loading...</p>}
        {!isLoading && !isLoggedIn && <h2 className='font-bold'>You are not logged In</h2>}
        {!isLoading && isLoggedIn && (
          <>
            <p>Welcome Home</p>
            <div>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </>
        )}
      </nav>
    </section>
  )
}
 
export default Home;
