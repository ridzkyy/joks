import React from 'react';
import { DiFirebase, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

import { FaVideo, FaRegLightbulb, FaTheaterMasks, FaEdit, FaCamera } from 'react-icons/fa';

const Technologies = () => (
  <Section id="tech">
    <SectionDivider divider />
    <SectionTitle>Skills</SectionTitle>
    <SectionText>
      I have experience in filmmaking and cinematography, working on various projects that involve creative storytelling, visual composition, and technical expertise in video production.
    </SectionText>
    <List>
      <ListItem>
        <picture>
          <FaRegLightbulb size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Directing</ListTitle>
          <ListParagraph>
            Expertise in leading creative projects and managing teams to bring visions to life.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaVideo size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Storytelling</ListTitle>
          <ListParagraph>
            Crafting compelling narratives and visual compositions for impactful storytelling.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaTheaterMasks size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Acting</ListTitle>
          <ListParagraph>
            Experience performing as a talent in various projects, bringing characters to life.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      <ListItem>
        <picture>
          <FaEdit size="3rem" />
        </picture>
        <ListContainer>
          <ListTitle>Video Editing</ListTitle>
          <ListParagraph>
            Proficiency in tools like Adobe Premiere Pro and Final Cut Pro for post-production.
          </ListParagraph>
        </ListContainer>
      </ListItem>
      
    </List>
    <SectionDivider colorAlt />
  </Section>
);

export default Technologies;
