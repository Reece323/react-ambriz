import React from 'react';
import {
  SidebarContainer,
  Icon,
  CloseIcon,
  SidebarMenu,
  SidebarLink,
  SidebarRoute,
  SideBtnWrap
} from './SidebarElements';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarMenu>
        <SidebarLink to='/'>T-Shirts</SidebarLink>
        <SidebarLink to='/'>Hoodies</SidebarLink>
        <SidebarLink to='/'>Caps</SidebarLink>
        <SidebarLink to='/'>Cups/Mugs</SidebarLink>
        <SidebarLink to='/'>Cases</SidebarLink>
        <SidebarLink to='/'>Full Inventory</SidebarLink>
      </SidebarMenu>
      <SideBtnWrap>
        <SidebarRoute to='/'>Order Now</SidebarRoute>
      </SideBtnWrap>
    </SidebarContainer>
  );
};

export default Sidebar;
