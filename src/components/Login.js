import Header from "./Header";
import { useState } from "react";
const Login = () => {
    const [isSignInForm, setIsSignInForm] = useState(true);

    const toggleSignInForm = () => {
        setIsSignInForm(!isSignInForm);
    }
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/9d3533b2-0e2b-40b2-95e0-ecd7979cc88b/a3873901-5b7c-46eb-b9fa-12fea5197bd3/IN-en-20240311-popsignuptwoweeks-perspective_alpha_website_large.jpg" alt="background image" />
            </div>
            <form action="" className="bg-black absolute p-12 w-3/12 my-24 mx-auto left-0 right-0 text-white rounded-lg bg-opacity-80">
                <h1 className="text-3xl font-bold py-4 ">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
                {isSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-800" />}
                <input type="text" placeholder="Email Address" className="p-4 my-4 w-full bg-gray-800" />
                <input type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-800" />
                <button className="p-4 my-6 bg-red-700 w-full rounded-lg" >{isSignInForm ? "Sign In" : "Sign Up"}</button>
                <p className="py-4 cursor-pointer" onClick={() => toggleSignInForm()}>
                    {isSignInForm ? "New to MovieFy ? Sign Up Now" : "Already Registered User ? Sign In"}</p>
            </form>
        </div>
    );
};

export default Login;