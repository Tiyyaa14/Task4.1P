import React from 'react';
import './header.css'; 
import { Menu, Input } from 'semantic-ui-react';

function Header() {
  return (
    <Menu size="large" className="ui.menu">
      <Menu.Item name="home">DEV@Deakin</Menu.Item>
      <Menu.Menu position="right">
        <Menu.Item>
          <Input icon="search" placeholder="Search..." className="ui.input" />
        </Menu.Item>
        <Menu.Item name="post" className="item">Post</Menu.Item>
        <Menu.Item name="login" className="item">Login</Menu.Item>
      </Menu.Menu>
    </Menu>
  );
}

export default Header;
