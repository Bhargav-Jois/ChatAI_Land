import React from 'react'
import './header.css';
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'

const Header = () => {
  return (
    <div className='gpt3__header section__padding' id="home">
      <div className='gpt3__header-content'>
        <h1 className='gradient__text'>Let's Build Something amazing with OpenAI's GPT-3 </h1>
        <p>Chat GPT version 3 is an natural language processing model that helps us create and learn
           new things using it. It understands our language and it can answer
            our questions through the prompts we give. The prompts we give have to be clear for 
            it to understand hence giving prompts to AI is also an ART.</p>
        <div className='gpt3__header-content__input'>
          <input type="email" placeholder='Your Email Address....' />
          <button type='button'>Get Started</button>
        </div>
        <div className='gpt3__header-content__people'>
          <img src={people} alt="people" />
          <p>1,600 people requested access.</p>
        </div>
      </div>
      <div className='gpt3__header-image'>
        <img src={ai} alt='ai' />
      </div>
    </div>
  )
}

export default Header
