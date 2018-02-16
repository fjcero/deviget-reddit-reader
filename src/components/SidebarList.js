import React from 'react';
import './SidebarList.css';

const SidebarList = (props) => {
  const items = props.items;
  const listItems = items.map((item) =>
    <li key={item.key}>{item}</li>
  );

  return (
    <ul className="sidebar__list">
      {listItems}
    </ul>
  )
};

export default SidebarList;
