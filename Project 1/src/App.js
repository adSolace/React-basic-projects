import React from 'react';
import { Data } from './Data';
import { useState } from 'react';

function App() {
  const [Birth, setBirth] = useState(Data);

  const clearAll = () => {
    setBirth([]);
  };

  const removeBirth = (id) => {
    let newBirthday = Birth.filter((birth) => {
      return birth.id !== id;
    });
    console.log(newBirthday);
    setBirth(newBirthday);
  };
  return (
    <section>
      <article className='card'>
        <h3>5 Birthdays</h3>
        {Birth.map((birth) => {
          const { Age, Image, id, name } = birth;
          return (
            <div key={id} className='profile'>
              <img src={Image} alt='' />
              <div className='profile-content'>
                <h4>{name}</h4>
                <small>{Age}</small>
              </div>
              <button
                className='deleteBtn'
                onClick={() => {
                  removeBirth(id);
                }}
              >
                Delete
              </button>
            </div>
          );
        })}
        <button className='btn' onClick={clearAll}>
          Clear All
        </button>
      </article>
    </section>
  );
}

export default App;
