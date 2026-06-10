import React, { useState } from "react";

const App = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const [access, setaccess] = useState({});

  const Responce = async (e) =>{
      e.preventDefault();

      
       const responce =  await fetch('https://dummyjson.com/auth/login', {
                      method: 'POST',
                      headers: { 'Content-Type': 'application/json' },
                      body: JSON.stringify({
                        
                        username: username,
                        password: password,
                        expiresInMins: 30, 
                      }),
                      credentials: 'include' 
                    })
           
        const data = await responce.json();

        i
        
        
      // console.log(username);
      // console.log(password);
      setUsername("");
      setPassword("");
        } 
    


  return (
    <div className="h-screen flex items-center justify-center bg-gray-100">
      
      <form
        onSubmit={Responce}
        className="bg-white p-8 rounded-xl shadow-md w-[350px]"
      >
        <h1 className="text-2xl font-semibold text-center mb-6">
          Login
        </h1>

        <div className="mb-4">
          <label className="block mb-2 text-sm font-medium">
            Username
          </label>

          <input
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black"
          />
        </div>

        <div className="mb-5">
          <label className="block mb-2 text-sm font-medium">
            Password
          </label>

          <input
            type="password"
            value={password}
            placeholder="Enter password"
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded-lg px-4 py-2 outline-none focus:border-black"
          />
        </div>

        <button className="w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition">
          Login
        </button>
      </form>

    </div>
  );
};

export default App;