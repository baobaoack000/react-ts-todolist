import React, { useState, useEffect } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { List } from './List';
import './style.scss';

//Getting local storage upon page update
// const getLocalStorage = () => {
//   let list = localStorage.getItem('list');
//   if (list) {
//     return (list = JSON.parse(localStorage.getItem('list')));
//   } else {
//     return [];
//   }
// };

function App() {
  //All the state list
  const [name, setName] = useState('');
  const [list, setList] = useState([
    { id: new Date().getTime().toString(), title: 'Task 1', complete: true },
  ]);

  //JS function
  const handleSubmit = (e) => {
    // anti refresh
    e.preventDefault();

    // test set list to local and state
    const newItem = {
      id: new Date().getTime().toString(),
      title: name,
      complete: false,
    };
    setList([...list, newItem]);
    setName('');
  };

  //checkbox
  const check = (id) => {
    const data = list.find((todo) => todo.id === id);
    if (data.complete) {
      data.complete = false;
    } else {
      data.complete = true;
    }
    setList([...list]);
    //localStorage.setItem('my-list', JSON.stringify(list));
  };

  //set locaol storage sync with the state
  useEffect(() => {
    const data = localStorage.getItem('my-list');
    if (data) {
      setList(JSON.parse(data));
    }
  }, []);

  // establise inner local storage to view
  useEffect(() => {
    localStorage.setItem('my-list', JSON.stringify(list));
  }, [list]);

  //test
  const sample = [
    { id: '1', title: 'none', complete: false },
    { id: '1', title: 'none 2', complete: true },
  ];

  return (
    <div className="Apps">
      <Hello name={'react'} />
      <p>Start editing to see some magic happen :)</p>
      <section>
        <form action="" onSubmit={handleSubmit}>
          {/* adding alert function componet */}
          {/* TO-DO alert state */}

          <h3>Todo List</h3>
          {/* Adding Form */}
          <div className="form-control">
            <input
              type="text"
              className="grocery"
              placeholder="Input your Todo List"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <button type="submit" className="submit-btn">
              {/* button switch edit OR submit */}
              {false ? 'edit' : 'Submit!'}
            </button>
          </div>
        </form>
        {/* TO-DO Load List */}
        <List items={list} checkbox={check} />
      </section>
    </div>
  );
}

render(<App />, document.getElementById('root'));
