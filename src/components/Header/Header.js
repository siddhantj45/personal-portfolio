import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
    <title>Siddhant.work</title>
      <Link href="/">
      <a style={{display: "flex", alignItems: "center", color: 'white', marginBottom: "20px"}} >
      <DiCssdeck size="3rem" /> <Span>Siddhant Jaiswal</Span>
      </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#work">
          <NavLink>Works</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
    </Div2>
    <Div3>
      <SocialIcons href="https://linkedin.com/in/siddhant-jaiswal" target="_blank">
      <AiFillLinkedin size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://github.com/siddhantj45" target="_blank">
      <AiFillGithub size="3rem" />
      </SocialIcons>
      <SocialIcons href="https://instagram.com/siddhantjaiswal45" target="_blank">
      <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
