import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './App.css';

function App() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_liy7c9g',
        'template_5tlpecw',
        form.current,
        'ri7gJjEoEDQ9HLTFW'
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };
  return (
    <div className='contact'>
      <form className='card' ref={form} onSubmit={sendEmail}>
        <label htmlFor=''>Name</label>
        <input type='text' name='to_name' />
        <label htmlFor=''>Email</label>
        <input type='text' name='from_name' />
        <textarea
          name='message'
          id=''
          cols='30'
          rows='10'
          placeholder='your message...'
        ></textarea>
        <input type='submit' value='send' />
      </form>
    </div>
  );
}

export default App;
