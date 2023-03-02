import React from 'react';
import { SipPhoneSignInButton, SipPhoneSignInContainer, SipPhoneSignInHeaderTextField } from "./SipPhoneSignIn.styles"

export const SipPhoneSignIn = ({onSignIn}) => {

  return (
    <SipPhoneSignInContainer>
        Domain
        <SipPhoneSignInHeaderTextField size="small" />
        Username
        <SipPhoneSignInHeaderTextField size="small" />
        Password
        <SipPhoneSignInHeaderTextField size="small" type="password" />
        
        <SipPhoneSignInButton onClick={onSignIn}>Sign in</SipPhoneSignInButton>
    </SipPhoneSignInContainer>
  )
}
