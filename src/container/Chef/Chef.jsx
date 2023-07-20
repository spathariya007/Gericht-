import React from 'react';


import './Chef.css';
import {SubHeading} from './../../components';
import { images } from '../../constants';
// import images from ''

const Chef = () => (
  <div className='app__bg app__wrapper section__padding'>
     <div className='app__wrapper_img app__wrapper_img-reverse'>
      <img src={images.chef} alt="chef" />
     </div>

     <div className='app__wrapper_info'>
      <SubHeading title="Chef's Word "/>
      <h1 className="headtext__cormorant" style={{color: 'var(--color-golden)'}}>What We Believe In</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum Dolor sit Amet, Consecturen Adipiscing Elit Auctor sit</p>
        </div>
        <p className='p__opensans'>Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Auctor Sit. Auctor Sit laculis In Arcu. Vulputate Nulla Lobortis Mauris Eget Sit. 
        Nulla Scelerisque Scelerisque Congue Ac Consequat, Aliquam Molestie Lectus Eu. Congue laculis Integer Curabitur Semper Sit Nunc</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="" />
      </div>
     </div>
  </div>
);

export default Chef;
