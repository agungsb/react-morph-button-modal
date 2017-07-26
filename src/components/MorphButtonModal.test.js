import React from 'react';
import ReactDOM from 'react-dom';
import MorphButtonModal from './MorphButtonModal';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(
    <MorphButtonModal id={1} label="Login">
      <form>
        <p><label>Email</label><input type="text" /></p>
        <p><label>Password</label><input type="password" /></p>
        <button>Submit</button>
      </form>
    </MorphButtonModal>,
    div
  );
})