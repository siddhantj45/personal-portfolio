import React from 'react';
import { DiFirebase, DiReact, DiZend, DiTerminal } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id='tech'>
    <SectionDivider />
    <br />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      I am a Full Stack Developer with a passion for thoughtful UI Design, Learning on the way and exploring React, Python (Django) and Postgres at the moment.
    </SectionText>
    <List>
      <ListItem>
        <DiReact size="3rem"/> 
        <ListContainer>
          <ListTitle>Front-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            React.js & Angular.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiTerminal size="3rem"/>
        <ListContainer>
          <ListTitle>Back-End</ListTitle>
          <ListParagraph>
            Experience with <br />
            Node & Databases.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <DiFirebase size="3rem"/>
        <ListContainer>
          <ListTitle>Servers</ListTitle>
          <ListParagraph>
            Experience with <br />
            Cloud (AWS), ZFS, TrueNAS
          </ListParagraph>
        </ListContainer>
      </ListItem>
    </List>
  </Section>
);

export default Technologies;
