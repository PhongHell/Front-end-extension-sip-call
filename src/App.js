import React, { useState } from 'react';
import { SipPhoneDashboard, SipPhoneSetting, SipPhoneSignIn } from './components';

function App() {
  const [isOpenSipPhoneSetting, setIsOpenSipPhoneSetting] = useState(false);
  const [isSignedIn, setIsSignedIn] = useState(false);

  const handleLoginApp = (data) => {
    console.log(data);
    setIsSignedIn(true);
  };

  return (
    <div className="App">
      {isSignedIn ?  <SipPhoneDashboard onClickSetting={() => setIsOpenSipPhoneSetting(true)}/> : <SipPhoneSignIn onSignIn={handleLoginApp}/>}
      <SipPhoneSetting open={isOpenSipPhoneSetting} handleClose={() => setIsOpenSipPhoneSetting(false)}/>
    </div>
  );
}

export default App;
