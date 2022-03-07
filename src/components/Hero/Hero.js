import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
        Hi, I am Siddhant! <br />
        And I build things for the web.
      </SectionTitle>
      <SectionText>
        I specialize in jumping off a cliff and building a plane on the way down.
        <br /> <br />
        Tech | Motorsport Enthusiast | Learner 
      </SectionText>
      <Button href="mailto:hi@siddhant.work">Let's Chat</Button>
    </LeftSection>
  </Section>
);

export default Hero;