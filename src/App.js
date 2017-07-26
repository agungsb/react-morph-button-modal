import React, { Component } from 'react';
import logo from './logo.svg';
import styles from './App.css';
import MorphButtonModal from './components/MorphButtonModal';

class App extends Component {
  render() {
    return (
      <div className={styles.App}>
        <div className={styles.AppHeader}>
          <img src={logo} className={styles.AppLogo} alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className={styles.AppIntro}>
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <div className={styles.AppIntro}>
          <MorphButtonModal id={2} label="Login">
            <form onSubmit={event => event.preventDefault()}>
              <p><label>Email</label><input type="text" /></p>
              <p><label>Password</label><input type="password" /></p>
              <button className={styles.AppButton}>Submit</button>
            </form>
          </MorphButtonModal>
          <h2> Or </h2>
          <MorphButtonModal id={1} label="Sign Up">
            <form onSubmit={event => event.preventDefault()}>
              <p><label>Email</label><input type="text" /></p>
              <p><label>Password</label><input type="password" /></p>
              <p><label>Repeat Password</label><input type="password" /></p>
              <button className={styles.AppButton}>Submit</button>
            </form>
          </MorphButtonModal>
        </div>
      </div>
    );
  }
}

export default App;
