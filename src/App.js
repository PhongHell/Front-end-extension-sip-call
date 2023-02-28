/* eslint-disable no-undef */
import React, { useState, useEffect } from 'react'
import LogoGithub from './components/LogoGithub';

import { store } from './utils'

function App() {
  const [name, setName] = useState('')
  const [data, setData] = useState([])

  const removeItem = async () => {
    const storeData = await store.get()
    if(!storeData) return
    if(storeData.name && storeData.name.trim() !== '') setName(storeData.name)

    if (!storeData.list) return
    if (storeData.list.length === 0) return

    storeData.list = storeData.list.filter(item => item.updated_at === (new Date()).getDate() || item.status === 'Open')
    
    setData([...storeData.list])
    store.set(storeData)
  }

  useEffect(() => {
    removeItem()
  }, [])

  const changeName = (e) => {
    const name = e.target.value;
    setName(name.trim())
  }

  const saveName = async () => {
    if (name.trim() === '') return

    const storeData = await store.get() || {}
    storeData.name = name

    store.set(storeData)
  }

  const clear = () => {
    store.clear()
    setName('')
    setData([])
  }

  return (
    <div className="App">
      SIP CALL WebRTC demo
    </div>
  );
}

export default App;
