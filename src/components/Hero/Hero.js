import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Welcome To <br />
          My Personal Portfolio <br />
          Anggi Lestari Phaja
        </SectionTitle>
        <SectionText>
          I'm a filmaker and photographer based in Indonesia. I specialize in creating stunning visuals that tell compelling stories. My work spans various genres, including documentaries, commercials, and narrative films. I am passionate about capturing the essence of moments and bringing ideas to life through the lens.
        </SectionText>
        <Button onClick={props.handleClick}>Learn More</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;