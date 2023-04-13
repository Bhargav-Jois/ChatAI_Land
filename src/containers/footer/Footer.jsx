import React from 'react'
import './footer.css';
import gpt3Logo from '../../assets/logo.svg'

const footer = () => {
  return (
    <div className='gpt3__footer section__padding'>
      <div className='gpt3__footer-heading'>
        <h1 className='gradient__text'>
          Do you want to be in the future before others?
        </h1>
      </div>
      <div className='gpt3__footer-btn'>
        <p>Request Early Acess</p>
      </div>
      <div className='gpt3__footer-links'>
        <div className='gpt3__footer-links_logo'>
          <img src={gpt3Logo} alt='logo' />
          <p>&copy; ChatGPT3, 2022. All Rights Reserved</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>
            Links
          </h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contacts</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>
            Company
          </h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Company</p>
        </div>
        <div className='gpt3__footer-links_div'>
          <h4>
            Get in touch.
          </h4>
          <p>#221, 16th Main, Alt Road, Bangalore, Karnataka, India.</p>
          <p>698-458221</p>
          <p>chatgpt3@openai.com</p>
        </div>
      </div>
      <div className='gpt3__footer-copyright'>
        <p>&copy; ChatGPT3, 2022. All Rights Reserved</p>
      </div>
    </div>
  )
}

export default footer
