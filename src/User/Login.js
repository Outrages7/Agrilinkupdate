import React, { useState } from 'react';
import logo from '../Components/Images/logo.svg'; // Adjust the path as needed
import { Link, useNavigate } from 'react-router-dom'; // Import useNavigate
import axios from 'axios'; // Import axios

const LoginForm = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [activeTab, setActiveTab] = useState('login');
    const [signupData, setSignupData] = useState({
        fullName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });
    const [loginData, setLoginData] = useState({
        username: '',
        password: '',
    });
    const [passwordMatch, setPasswordMatch] = useState(false);

    const handleSignup = async () => {
        if (signupData.password !== signupData.confirmPassword) {
            alert('Passwords do not match!'); // Use alert instead of toast
            return; // Early return to prevent further execution
        }

        console.log('Signup Data:', signupData); // Log signup data

        try {
            const response = await axios.post('http://localhost:5000/api/signup', signupData);
            console.log('Signup Response:', response); // Log response
            alert('Signup successful!'); // Use alert instead of toast
            
            // Redirect to the home page
            navigate('/'); 
        } catch (error) {
            console.error('Signup error:', error); // Log the error for debugging
            const errorMessage = error.response ? error.response.data.error : 'Signup failed! Please try again.';
            alert(errorMessage); // Use alert instead of toast
        }
    };

    const handleLogin = async () => {
        console.log('Login Data:', loginData); // Log login data

        try {
            const response = await axios.post('http://localhost:5000/api/login', loginData);
            console.log('Login Response:', response); // Log response
            
            if (response.data.success) { // Check if login was successful
                alert('Login successful!'); // Use alert instead of toast
                
                // Redirect to the home page
                navigate('/'); 
            } else {
                alert('Login failed!'); // Notify user of failure
            }
        } catch (error) {
            console.error('Login error:', error); // Log the error for debugging
            const errorMessage = error.response ? error.response.data.error : 'User does not exist! Please sign up.';
            alert(errorMessage); // Use alert instead of toast
        }
    };

    const handlePasswordChange = (e) => {
        const password = e.target.value;
        setSignupData({ ...signupData, password });
        setPasswordMatch(password === signupData.confirmPassword);
    };

    const handleConfirmPasswordChange = (e) => {
        const confirmPassword = e.target.value;
        setSignupData({ ...signupData, confirmPassword });
        setPasswordMatch(signupData.password === confirmPassword);
    };

    const handleLoginInputChange = (e) => {
        const { name, value } = e.target;
        setLoginData({ ...loginData, [name]: value });
    };

    return (
        <div className="container bg-white rounded-lg shadow-md p-8 w-80">
            <div className="flex justify-center mb-4">
                <Link to="/">
                    <img
                        src={logo} 
                        alt="AgriLink Logo" 
                        className="w-14 h-14" 
                    />
                </Link>
            </div>
            <h2 className="text-center text-2xl font-bold mb-4">{activeTab === 'login' ? 'Login' : 'Signup'}</h2>
            <div className="tab flex justify-between mb-4">
                <button 
                    className={`flex-1 py-2 rounded-md cursor-pointer ${activeTab === 'login' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} 
                    onClick={() => setActiveTab('login')}
                >
                    Login
                </button>
                <button 
                    className={`flex-1 py-2 rounded-md cursor-pointer ${activeTab === 'signup' ? 'bg-green-600 text-white' : 'bg-gray-200 text-gray-600'}`} 
                    onClick={() => setActiveTab('signup')}
                >
                    Signup
                </button>
            </div>

            {activeTab === 'login' ? (
                <>
                    <input 
                        type="text" 
                        name="username" 
                        placeholder="Username" 
                        className="input-field w-full p-2 mb-4 border border-gray-300 rounded-md"
                        value={loginData.username}
                        onChange={handleLoginInputChange}
                    />
                    <input 
                        type="password" 
                        name="password" 
                        placeholder="Password" 
                        className="input-field w-full p-2 mb-4 border border-gray-300 rounded-md"
                        value={loginData.password}
                        onChange={handleLoginInputChange}
                    />
                    <div className="forgot-password text-right mb-4">
                        <a href="#" className="text-blue-600">Forgot password?</a>
                    </div>
                    <button 
                        className="login-button w-full py-2 bg-green-600 text-white rounded-md cursor-pointer"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                    <div className="signup-link text-center mt-4">
                        <p>Not a member? <a href="#" className="text-blue-600" onClick={() => setActiveTab('signup')}>Signup now</a></p>
                    </div>
                </>
            ) : (
                <>
                    <input
                        type="text"
                        placeholder="Full Name"
                        className="input-field w-full p-2 mb-4 border border-gray-300 rounded-md"
                        value={signupData.fullName}
                        onChange={(e) => setSignupData({ ...signupData, fullName: e.target.value })}
                    />
                    <input
                        type="email"
                        placeholder="Email Address"
                        className="input-field w-full p-2 mb-4 border border-gray-300 rounded-md"
                        value={signupData.email}
                        onChange={(e) => setSignupData({ ...signupData, email: e.target.value })}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="input-field w-full p-2 mb-4 border border-gray-300 rounded-md"
                        value={signupData.password}
                        onChange={handlePasswordChange}
                    />
                    <input
                        type="password"
                        placeholder="Confirm Password"
                        className={`input-field w-full p-2 mb-4 border border-gray-300 rounded-md ${passwordMatch ? 'border-green-500' : 'border-red-500'}`}
                        value={signupData.confirmPassword}
                        onChange={handleConfirmPasswordChange}
                    />
                    <button 
                        className="signup-button w-full py-2 bg-green-600 text-white rounded-md cursor-pointer"
                        onClick={handleSignup}
                    >
                        Signup
                    </button>
                    <div className="login-link text-center mt-4">
                        <p>Already a member? <a href="#" className="text-blue-600" onClick={() => setActiveTab('login')}>Login now</a></p>
                    </div>
                </>
            )}
        </div>
    );
};

const App = () => {
    return (
        <div className="flex items-center justify-center h-screen">
            <LoginForm />
        </div>
    );
};

export default App;
