import React, { useState } from 'react';
import { SipPhoneDashboard, SipPhoneSetting } from './components';

function App() {
  const [isOpenSipPhoneSetting, setIsOpenSipPhoneSetting] = useState(false);
  return (
    <div className="App">
      <SipPhoneDashboard onClickSetting={() => setIsOpenSipPhoneSetting(true)}/>
      <SipPhoneSetting open={isOpenSipPhoneSetting} handleClose={() => setIsOpenSipPhoneSetting(false)}/>
    </div>
  );
}

export default App;
