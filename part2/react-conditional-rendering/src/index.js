import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Greeting from './components/Greeting'
import Mailbox from './components/Mailbox'
import Page from './components/Page'

const root = ReactDOM.createRoot(document.getElementById('root'))

const messages = [ 'React', 'Re: React', 'Re:Re: React' ]

root.render(
  <React.StrictMode>
    <>
        <Greeting />

        <Greeting isLoggedIn={false} />

        <Greeting isLoggedIn={true} />

        <Mailbox unreadMessages={messages} />

        <br />

        <Page />
    </>
  </React.StrictMode>
)
