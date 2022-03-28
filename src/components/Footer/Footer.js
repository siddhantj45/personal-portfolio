import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Send me an Email</LinkTitle>
          <LinkItem href="mailto:hi@siddhant.work">hi@siddhant.work</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Read my Blog</LinkTitle>
          <LinkItem href="https://blog.siddhant.work" target="_blank">Siddhant's Blog</LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Exploring & Getting lost is the process | Enjoy the Process</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href='https://linkedin.com/in/siddhant-jaiswal'>
          <AiFillLinkedin size="3rem" />
          </SocialIcons>
        <SocialIcons href='https://github.com/siddhantj45'>
          <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href='https://instagram.com/siddhantjaiswal45'>
          <AiFillInstagram size="3rem" />
        </SocialIcons>
      </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
