import React from "react";
import LoginButton from "./LoginButton";
import RegisterButton from "./RegisterButton";
import SignupButton from "./SignupButton";

export default function NavbarbuttonGroup(){
    return(
        <div className="flex flex-row justify-center gap-4 text-[18px] max-sm:text-[16px]">
            {/* <RegisterButton/> */}
            <LoginButton/>
            <SignupButton/>
        </div>
    );
}