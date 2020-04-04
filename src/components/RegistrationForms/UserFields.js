
import React, { Component } from 'react';
import ValidationError from '../../utilities/ValidationError';

export default class UserFields extends Component {
  state = {
    showPassword: 'password',
    showHide: 'show'
  }

  toggleShowPassword = () => {
    if (this.state.showPassword === 'password') {
      this.setState({
        showPassword: 'text',
        showHide: 'hide'
      })
    }
    else {
      this.setState({
        showPassword: 'password',
        showHide: 'show'
      })
    }
  }

  render() {
    const { emailError, passwordError1, passwordError2, passwordError3, passwordError4 } = this.props.errorProps
    return (
      <>
        <div className='inputContainer'>
          <input
            type='text'
            name='email'
            id='email'
            className='registrationInput'
            placeholder='Your Email'
            onChange={ev => this.props.addTempValidation('email', ev.target.value)}
            required
          />
        </div>
        {emailError && <ValidationError message={emailError} />}
        <div className='inputContainer'>
          <input
            type={this.state.showPassword}
            name='password'
            id='password'
            className='registrationInput passwordInput'
            placeholder='Password'
            onChange={ev => this.props.addTempValidation('password', ev.target.value)}
            required
          />
          <button
            type='button'
            className={`${this.state.showHide}RegistrationButton`}
            onClick={() => this.toggleShowPassword()}>
          </button>
        </div>
        {passwordError1 && <ValidationError message={passwordError1} />}
        {passwordError2 && <ValidationError message={passwordError2} />}
        {passwordError3 && <ValidationError message={passwordError3} />}
        {passwordError4 && <ValidationError message={passwordError4} />}
        <div className='inputContainer'>
          <input
            type='text'
            name='full_Name'
            id='full_Name'
            className='registrationInput'
            placeholder='Your Full Name'
            onChange={ev => this.props.addTempValue('full_name', ev.target.value)}
            required
          />
        </div>
      </>
    )
  }
}