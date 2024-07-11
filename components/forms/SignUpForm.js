"use client";

import React,{useState} from "react";
import CredentialsForm from "./CredentialsForm";
import OtpForm from "./OtpForm";

function SignUpForm() {

   const [credentialsEntered,setCredentialsEntered] = useState(false);

  return (
    <>
     {credentialsEntered?<OtpForm/>:<CredentialsForm onSubmit = {()=>setCredentialsEntered(true)}/>}
    </>
  );
}

export default SignUpForm;

