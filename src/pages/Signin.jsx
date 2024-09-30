import React, { useEffect, useState } from 'react';
import { signInWithPopup, signInWithEmailAndPassword } from 'firebase/auth';
import Home from '../Home';
import { auth, provider } from '../index'; 

const Signin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [userEmail, setUserEmail] = useState('');

    const handleFormSubmit = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUserEmail(userCredential.user.email);
                localStorage.setItem('email', userCredential.user.email);
            })
            .catch((error) => {
                console.error("Error signing in with email and password", error);
            });
    };

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
            .then((data) => {
                setUserEmail(data.user.email);
                localStorage.setItem('email', data.user.email);
            })
            .catch((error) => {
                console.error("Error signing in with Google", error);
            });
    };

    useEffect(() => {
        setUserEmail(localStorage.getItem('email') || '');
    }, []);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            {userEmail ? (
                <Home />  
            ) : (
                <div className="bg-white shadow-md rounded px-8 py-10 max-w-md w-full">
                    <h2 className="text-2xl font-bold mb-6 text-center">Sign In</h2>
                    
                    <form onSubmit={handleFormSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            <input 
                                id="email"
                                type="email" 
                                value={email} 
                                onChange={(e) => setEmail(e.target.value)} 
                                required
                                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <div>
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            <input 
                                id="password"
                                type="password" 
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)} 
                                required
                                className="mt-2 w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                            />
                        </div>
                        <button 
                            type="submit"
                            className="w-full bg-indigo-500 text-white p-3 rounded-lg font-semibold hover:bg-indigo-600 transition duration-300"
                        >
                            Sign in
                        </button>
                    </form>

                    <p className="text-center my-4 text-gray-500">Or</p>

                    <button 
                        onClick={handleGoogleSignIn}
                        className="w-full bg-red-500 text-white p-3 rounded-lg font-semibold hover:bg-red-600 transition duration-300 flex items-center justify-center"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 48 48"
                            className="w-6 h-6 mr-2"
                        >
                            <path fill="#4285F4" d="M24 9.5c3.2 0 5.5 1.4 6.8 2.5l5-5c-3.2-2.8-7.3-4.5-11.8-4.5-9.7 0-17.8 6.3-20.5 15L12 18c2-5.8 7.5-9.5 12-9.5z"></path>
                            <path
                                fill="#34A853"
                                d="M12.1 29.9c-1.2-.4-2.4-.9-3.2-1.7l-5.5 4.3C6.8 35.7 11.7 38 17 38c5.2 0 9.3-1.7 12.3-4.5L24 27.5c-2 1.4-4.5 2.3-7 2.3-2.8 0-5.5-.8-7.9-2z"
                            ></path>
                            <path
                                fill="#FBBC05"
                                d="M41 24.5c0-1.1-.1-2.1-.3-3.1H24v6h9.7c-.4 2-1.8 3.9-3.7 5.1l5.6 4.3C39.2 33 41 29.1 41 24.5z"
                            ></path>
                            <path
                                fill="#EA4335"
                                d="M12.1 18.9l-5.5-4.3C4.3 16.8 3 20 3 24s1.3 7.2 3.6 9.4l5.5-4.3c-1-1.4-1.6-3.1-1.6-5.1s.6-3.7 1.6-5.1z"
                            ></path>
                        </svg>
                        Sign in with Google
                    </button>
                </div>
            )}
        </div>
    );
};

export default Signin;
