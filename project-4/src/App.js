import React from 'react';
import { useState, useEffect } from 'react';
import Alert from './Alert';
import List from './List';

const getLocalStorage = () => {
  let list = JSON.parse(localStorage.getItem('list'));
  if (list) {
    return list;
  } else {
    return [];
  }
};

function App() {
  const [value, setValue] = useState('');
  const [alert, setAlert] = useState({ show: false, type: '', msg: '' });
  const [list, setList] = useState(getLocalStorage());
  const [isEdit, setIsEdit] = useState(false);
  const [editFlag, setEditFlag] = useState(null);

  // function
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!value) {
      showAlert(true, 'danger', 'please enter a value');
    } else if (value && isEdit) {
      setList(
        list.map((item) => {
          if (item.id === editFlag) {
            return { ...item, title: value };
          }
          return item;
        })
      );

      setEditFlag(null);
      setIsEdit(false);
      setValue('');
      showAlert(true, 'success', 'value changed');
    } else {
      showAlert(true, 'success', 'item added successfuly');
      const newItem = { title: value, id: new Date().getTime().toString() };

      setList([...list, newItem]);
      setValue('');
    }
  };

  const editItem = (id) => {
    const specific = list.find((item) => {
      return item.id === id;
    });
    setIsEdit(true);
    setEditFlag(id);
    setValue(specific.title);
  };

  const removeItem = (id) => {
    const remove = list.filter((item) => {
      return item.id !== id;
    });
    setList(remove);
    showAlert(true, 'danger', 'item removed');
  };

  const showAlert = (show = false, type = '', msg = '') => {
    setAlert({ show, type, msg });
  };

  const clearItems = () => {
    showAlert(true, 'danger', 'empty list');
    return setList([]);
  };

  // useEffect
  useEffect(() => {
    localStorage.setItem('list', JSON.stringify(list));
  }, [list]);

  // end of function
  return (
    <article className='card'>
      {alert.show && <Alert {...alert} removeAlert={showAlert} />}

      <h3 className='heading'>Grocery Bud</h3>
      <form action='' onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='e.g. eggs'
          value={value}
          onChange={(e) => {
            setValue(e.target.value);
          }}
        />
        <button className='submit'>{isEdit ? 'edit' : 'submit'}</button>
      </form>
      {list.length > 0 && (
        <List
          items={list}
          clearItems={clearItems}
          editItem={editItem}
          removeItem={removeItem}
        />
      )}
    </article>
  );
}

export default App;
