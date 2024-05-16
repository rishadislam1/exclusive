import SignIn from "../../Components/SignIn/SignIn.jsx";

import {useEffect, useState} from "react";

const SignInPage = () => {

    const [user, setUser] = useState(false)

   useEffect(()=>{
       if(localStorage.getItem("login")){
           setUser(true);
       }
       else{
           setUser(false)
       }
   },[])
    return (
        <div>
            {user ? <h1 className="text-center">You are already login as user</h1>: <SignIn/>}

        </div>
    );
};

export default SignInPage;