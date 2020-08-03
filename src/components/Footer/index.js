import React from 'react';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <h2 id="jean">
        Jean Carlos De Meira
      </h2>
      <p>
        Orgulhosamente criado por
        {' '}
        <a href="https://github.com/JCDMeira">
          Jean,
        </a>
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          Imersão React da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
