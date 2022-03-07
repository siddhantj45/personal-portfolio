import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Box, Boxes, BoxNum, BoxText } from './StatsStyles';
import { StatsData } from '../../constants/constants';

const Stats = () => (
  <Section>
    <SectionTitle>Stats</SectionTitle>
    <Boxes>
      {StatsData.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}+`}</BoxNum>
          <BoxText>{card.text}</BoxText>
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Stats;