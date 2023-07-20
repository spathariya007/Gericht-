import React from 'react';

import images from '../../constants/images';
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
    <div className="app__aboutus-overlay flex__center">
      <img src={images.G} alt="g letter" />
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className='headtext__coemorant'style={{color:'var(--color-golden)'}}>About Us</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>LOrem ipsum dolor sit amet,consectetur adipiscing elit.Quist pharetra asdipisincg vuiputate posurer tristique,In sedodio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'> know More</button>
      </div>

      <div className='app__aboutus-content_knife flex__center'>
        <img src={images.knife} alt="about knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className='headtext__coemorant' style={{color:'var(--color-golden)'}}>Our History</h1>
        <img src={images.spoon} alt="about_spoon" className='spoon_img' />
        <p className='p__opensans'>LOrem ipsum dolor sit amet,consectetur adipiscing elit.Quist pharetra asdipisincg vuiputate posurer tristique,In sedodio nec aliquet eu proin mauris et.</p>
        <button type='button' className='custom__button'> know More</button>
      </div>


    </div>

  </div>
);

export default AboutUs;
