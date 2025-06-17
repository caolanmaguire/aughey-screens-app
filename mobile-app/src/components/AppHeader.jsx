// components/AppHeader.jsx
import React from 'react';
import '../style/style.css';

const AppHeader = ({ title = "My App", onMenuClick, onSearchClick, onProfileClick }) => {
  return (
    <ons-toolbar modifier="material noshadow" className="toolbar toolbar--material toolbar--noshadow"><div className="left toolbar__left toolbar--material__left toolbar--noshadow__left"></div><div className="center toolbar__center toolbar__title toolbar--material__center toolbar--noshadow__center">Home</div><div className="right toolbar__right toolbar--material__right toolbar--noshadow__right">
      <ons-toolbar-button onclick="fn.toggleMenu()" modifier="material" ripple="" className="toolbar-button toolbar-button--material"><ons-ripple modifier="material" className="ripple--material ripple" center="" size="contain" background="transparent"><div className="ripple__wave ripple--material__wave"></div><div className="ripple__background ripple--material__background"></div></ons-ripple>
        <ons-icon icon="ion-ios-menu, material:md-menu" className="ons-icon zmdi zmdi-menu" modifier="material"></ons-icon>
        </ons-toolbar-button>
    </div></ons-toolbar>
  );
};

export default AppHeader;