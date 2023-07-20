import React from 'react';

import {images} from '../../constants'
import './Header.css';
import SubHeading from './../../components/SubHeading/SubHeading';

const Header = () => (
  <div className='app__header app__wrapper section__padding' id='home'>
    <div className="app__wrapper_info">
      <SubHeading title ='chase the new flavour'/>
      <h1 className="app__header-h1"> The key to Fine Dining</h1>
      <p className="p__opensans" style={{margin:'2rem 0'}}>sit tellus lobortis senectus vivamus molestie. 
      Condimentum volupat moebi faxilisis quam sceleriasque sapien.
      Et,penatbus aliquam amet tellus</p>
      <button type='button' className='custom__button'>Explore Menu</button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>

  </div>
);

export default Header;
