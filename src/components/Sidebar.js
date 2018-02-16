import React from 'react';
import './Sidebar.css';

const Sidebar = (props) => (
 <aside className="sidebar">{props.children}</aside>
);

export default Sidebar;
