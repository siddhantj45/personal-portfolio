import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { projects } from '../../constants/constants';

const Projects = () => (
  <Section id="work">
    <SectionTitle main>Works</SectionTitle>
    <GridContainer>
      {projects.map(({ id, image, title, description, tags, }) => (
        <BlogCard key={id}>
          <Img src={image} />
          <TitleContent>
            <HeaderThree title>{title}</HeaderThree>
            <Hr />
            <CardInfo description>{description}</CardInfo>
          </TitleContent>
          <div>
            <br />
            <TitleContent>Tech Stack / Services</TitleContent>
            <TagList>
              {tags.map((tag, i) => (
                <Tag key={i}>{tag}</Tag>
              ))}
            </TagList>
          </div>
        </BlogCard>
      ))}
    </GridContainer>
  </Section>
);

export default Projects;