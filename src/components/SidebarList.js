import React from 'react';
import './SidebarList.css';

const SidebarList = ({items, openItem}) => {
  const listItems = items.map((item) =>
    <li key={item.key}>
      {openItem !== null
        ? <button onClick={(e) => openItem(item, e)}>{item}</button>
        : item
      }
    </li>
  );

  return (
    <ul className="sidebar__list">
      {listItems}
    </ul>
  )
};

export default SidebarList;
