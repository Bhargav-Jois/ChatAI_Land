import React from 'react'
import './blog.css';
import { Article } from '../../components';
import { blog1,blog2,blog3,blog4,blog5 } from './imports'; 

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>
          We are blogging about it.
        </h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container_groupA'>
          < Article imgUrl={blog1} date="May 11, 2022" title="OpenAI's ChatGPT is the Future, Let's Explore How!" />
        </div>
        <div className='gpt3__blog-container_groupB'>
          < Article imgUrl={blog2} date="June 25, 2022" title="OpenAI's ChatGPT is the Future, Let's Explore How!"  />
          < Article imgUrl={blog3} date="June 30, 2022" title="OpenAI's ChatGPT is the Future, Let's Explore How!"  />
          < Article imgUrl={blog4} date="August 15, 2022" title="OpenAI's ChatGPT is the Future, Let's Explore How!"  />
          < Article imgUrl={blog5} date="Sep 28, 2022" title="OpenAI's ChatGPT is the Future, Let's Explore How!"  />
        </div>
      </div>
    </div>
  )
}

export default Blog
