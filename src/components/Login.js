import React from 'react';
import '../App.css'; 
const Login = () => {
    const handleGoogleLogin = () => {
        window.location.href = 'https://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=https://frontend.com';
    };

    return (
        <div className="login-container">
            <h2>Create a New Account</h2>
            <button className="google-sign-in" onClick={handleGoogleLogin}>
                <img src="https://img.icons8.com/color/16/000000/google-logo.png" alt="Google logo" />
                Sign Up with Google
            </button>
            <button className="create-account-btn">Create an Account</button>
            <p>Already have an account? <a href="#">Sign In</a></p>
        </div>
    );
};

export default Login;
