/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import '../styles/NavItem.css';

function NavItem(props) {
  // eslint-disable-next-line eqeqeq
  if (props.href != undefined && props.isActivo) {
    return (
      <li className={`nav-item`}>
        <a
          className={
            `nav-link ${props.isActivo ? 'active' : ''}`.trimEnd() +
            ` ${props.isBrand ? 'brand' : ''}`.trimEnd()
          }
          href={undefined}
        >
          {props.children}
        </a>
      </li>
    );
  } else {
    return (
      <li className={`nav-item`}>
        <a
          className={
            `nav-link ${props.isActivo ? 'active' : ''}`.trimEnd() +
            ` ${props.isBrand ? 'brand' : ''}`.trimEnd()
          }
          href={props.href}
        >
          {props.children}
        </a>
      </li>
    );
  }
}

export default NavItem;
