import Login from "../components/Login";
import Browse from "../components/Browse";
import { RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase"
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";

const Body = () => {
    const dispatch = useDispatch();

    const appRouter = createBrowserRouter([
        {
            path: "/",
            element: <Login />,
        },
        {
            path: "/browse",
            element: <Browse />
        },
    ]);

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                // when user sign in
                const { uid, email, displayName, photoURL } = user.uid;
                dispatch(addUser({ uid: uid, email: email, displayName: displayName, photoURL: photoURL }));

                // ...
            } else {
                // User is signed out
                dispatch(removeUser());

            }
        });
    }, []);

    return (
        <div>
            <RouterProvider router={appRouter} />
        </div>
    );
};

export default Body;