import React from 'react';
import './Header.css';
import HeaderContent from './HeaderContent';
import HeaderTitle from './HeaderTitle';
import ImageThumbnail from './ImageThumbnail';

const HeaderContainer = () =>  {
    return (
        <div className="headerContainer">
        <ImageThumbnail />
        <div className="header-topcontainer">
        <HeaderTitle />
        <HeaderContent />
        </div>
        </div>
    )
}

export default HeaderContainer;