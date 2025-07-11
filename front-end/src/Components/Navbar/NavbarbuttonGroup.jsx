import React, { useContext } from "react";
import LoginButton from "./LoginButton";
import SignupButton from "./SignupButton";
import AdminPanel from "./AdminPanel";
import LogOut from "./LogOut"; // import your logout component
import { AuthContext } from "../../contexts/authContext"; // adjust path as needed

export default function NavbarbuttonGroup(){
  const { isLoggedIn, user } = useContext(AuthContext);

  return(
    <div className="flex flex-row justify-center gap-4 text-[18px] max-sm:text-[16px]">
      {isLoggedIn? (
        <>
          <span className="font-medium">Welcome, {user?.username}</span>
          {user.role == "admin" ?(<>
            <AdminPanel/>
            <LogOut />
            </>)
            :(
            <LogOut />
            )}
        </>
      ) : (
        <>
          <LoginButton/>
          <SignupButton/>
        </>
      )}
    </div>
  );
}
