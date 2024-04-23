import { useState } from 'react';
import { IoClose } from "react-icons/io5";
import { FaFacebook, FaGoogle, FaApple } from "react-icons/fa";
import { MdOutlineEmail } from "react-icons/md";
import './App.css';

const Button = ({icon: Icon, title})=>{
  return(
    <button className='sign-in'>
      {Icon && <Icon />}
      {title}
    </button>
  )
}

function App() {
  const [showModal, setShowModal] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleEmail = (e)=>{
    setEmail(e.target.value)
  }

  const handlePassword = (e)=>{
    setPassword(e.target.value)
  }


  return(
    <div className='App'>
      <button onClick={()=> setShowModal(true)}>Show Modal</button>

      <div className={`modal-container ${showModal && 'modal-active'}`}>
        <div className='modal'>

          <div className='header'>
            <h3>Log in or sign up</h3>
            <div className='close' onClick={()=> setShowModal(false)}>
              <IoClose />
            </div>
          </div>

          <div className='content'>
            <h1 className='title'>Welcome to Airbnb</h1>

            <div className='email'>
              <input
                placeholder=' '
                type='email'
                className='email-input'
                onChange={handleEmail}
                autocomplete="off"
              ></input>
              <label className={`email-label ${email.length > 0 ? 'email-label-active' : ''}`}>Email</label>
            </div>

            <div className='password'>
              <input
                placeholder=' '
                type='password'
                className='password-input'
                onChange={handlePassword}
                autocomplete="new-password"
              ></input>
              <label className={`password-label ${password.length > 0 ? 'password-label-active' : ''}`}>Password</label>
            </div>

            <button className='continue'>Continue</button>

            <div className='or'>
              <span></span>
              <h5>or</h5>
            </div>

            <Button icon={FaFacebook} title="Continue with Facebook" />
            <Button icon={FaGoogle} title="Continue with Google" />
            <Button icon={FaApple} title="Continue with Apple" />
            <Button icon={MdOutlineEmail} title="Continue with Email" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default App;
