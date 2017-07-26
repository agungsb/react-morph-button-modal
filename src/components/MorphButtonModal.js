/* eslint-disable */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
const styles = require('./MorphButtonModal.css');

export default class MorphButtonModal extends Component {
  static propTypes = {
    id: PropTypes.number
  }
  constructor(props) {
    super(props);
    this.state = {
      buttonPos: { left: 0, top: 0, right: 0, bottom: 0 },
      openDialog: false
    }
    this.close = this._close.bind(this);
    this.open = this._open.bind(this);
    this.setButtonPos = this._setButtonPos.bind(this);
  }
  componentDidMount() {
    setTimeout(() => {
      this.setButtonPos();
    }, 100);
    window.addEventListener('resize', this.setButtonPos);
    window.addEventListener('scroll', this.setButtonPos);
    // window.addEventListener('click', this.close);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.setButtonPos);
    window.removeEventListener('scroll', this.setButtonPos);
    // window.removeEventListener('click', this.close);
  }
  _setButtonPos() {
    const buttonPos = this._button.getBoundingClientRect();
    this.setState({ buttonPos });
  }
  _open() {
    this.setButtonPos();
    setTimeout(() => {
      this.setState({ openDialog: true });
    }, 100);
  }
  _close(event) {
    event.stopPropagation();
    this.setState({ openDialog: false });
  }
  render() {
    const { children, id, label } = this.props;
    const { buttonPos, openDialog } = this.state;
    let easing = styles.morphButtonModal1;
    let contentStyleForm = styles.contentStyleForm1;
    if (id === 2) {
      easing = styles.morphButtonModal2;
      contentStyleForm = styles.contentStyleForm2;
    } else if (id === 3) {
      easing = styles.morphButtonModal3;
    } else if (id === 4) {
      easing = styles.morphButtonModal4;
    }
    let inlineStyles = { zIndex: 10000, left: buttonPos.left, top: buttonPos.top };
    return (
      <div className={`${styles.morphButton} ${styles.morphButtonModal} ${easing} ${styles.morphButtonFixed} ${openDialog ? `${styles.active} ${styles.open}` : ''}`}>
        <button
          onClick={this.open}
          type="button" ref={ref => this._button = ref}>{label}</button>
        <div className={styles.morphContent} style={inlineStyles}>
          <div>
            <div className={`${styles.contentStyleForm} ${contentStyleForm}`}>
              <span className={`${styles.icon} ${styles.iconClose}`} onClick={this.close}>Close the dialog</span>
              <h2>{label}</h2>
              {children}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

