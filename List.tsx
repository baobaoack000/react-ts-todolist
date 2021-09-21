import React, { useState } from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';
import './List.scss';

export const List = ({ items, checkbox }) => {
  const onComplete = (e) => {
    //window.location.reload()
  };
  return (
    <div className="List">
      {/* Load to do list */}
      <h1>This is another To-Do dimension</h1>
      {items.map((item) => {
        // access id and title in item
        const { id, title, complete } = item;
        return (
          <article className="container" key={id}>
            <div className="title">
              <p className="para">
                <input
                  type="checkbox"
                  checked={complete}
                  onClick={() => checkbox(id)}
                  onChange={onComplete}
                />
                {title}
              </p>
            </div>
            <div className="buttons">
              <button className="edit">
                {' '}
                <FaEdit />{' '}
              </button>
            </div>
          </article>
        );
      })}
    </div>
  );
};
