'use client'
import { useState } from "react";
import axios from "axios";
import { LottieFiles } from "./LottieFiles";

const Home_Page = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleSubmit = async() => {
     const data = {
        username: username,
        email: email,
        password: password,
      };

      try{
        await axios.post("http://localhost:8000/users/create-user", data);
        console.log("User created successfully");
      }
      catch(e){
        console.log(`There was an error while creating the user: ${e}`)
      }

  }

  return (
    <div className="flex flex-col h-screen w-full items-center justify-center">
      <div>
        <LottieFiles />
      </div>

      <form onSubmit={handleSubmit} className="flex flex-col">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
        />
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <button type="submit" className="p-4 text-white px-16 rounded-lg shadow-xl hover:bg-blue-700 my-2 mb-8 bg-blue-600">
          Sign Up
        </button>
      </form>
    </div>
  );
}

export default Home_Page;