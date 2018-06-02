import React from 'react';
import Mailto from 'react-mailto'

export default class Emails extends React.Component {

    render() {
        return (
          <Mailto email="call2suraj@gmail.com" obfuscate={true} headers={{
            bcc: 'bcc@example.de',
            cc: 'bcc@example.de',
            subject: 'Need Help',
            body: 'This is a demo for Ignite 3',
            
          }}>
          Email me!
        </Mailto>
        )
    }
}

