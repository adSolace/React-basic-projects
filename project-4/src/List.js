import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

function List({ items, clearItems, editItem, removeItem }) {
  return (
    <section>
      {items.map((item) => {
        const { title, id } = item;

        return (
          <article className='grocery-list' key={id}>
            <p className='title'>{title}</p>
            <div className='grocery-buttons'>
              <button
                onClick={() => {
                  editItem(id);
                }}
              >
                <FaEdit />
              </button>
              <button
                onClick={() => {
                  removeItem(id);
                }}
              >
                <FaTrash />
              </button>
            </div>
          </article>
        );
      })}

      <button className='clear' onClick={clearItems}>
        Clear items
      </button>
    </section>
  );
}

export default List;
