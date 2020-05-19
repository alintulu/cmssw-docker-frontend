import React from "react";
import { Icon } from "semantic-ui-react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer-bottom">
      <span>Copyright © 2020 Adelina - peace out</span>
      <span className='links'>
      <a href={'/'} target="_blank" rel="noopener noreferrer">
          <Icon name="book"></Icon> Docs
        </a>
        <a href={'/'} target="_blank" rel="noopener noreferrer">
          <Icon name="discourse"></Icon> Forum
        </a>
      <a
          href={'/'}
          target="_blank"
          rel="noopener noreferrer"
        >
          <Icon name="conversation"></Icon> Chat
        </a>
      </span>
    </footer>
  );
}