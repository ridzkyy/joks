import styled from 'styled-components'

export const ImageContainer = styled.div`
  text-align: center;
  background-image: radial-gradient(50% 50% at 50% 50%, rgba(79, 108, 176, 0.25) 53.8%, rgba(79, 108, 176, 0) 100%);
  width: 100%;
  padding: 60px;
  margin-top: 48px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media ${props => props.theme.breakpoints.lg} {
    background-image: none;
    padding: 0;
    margin-top: 40px;
  }
  @media ${props => props.theme.breakpoints.md} {
    background-image: none;
    padding: 0;
    margin-top: 16px;
  }
`

export const MainImage = styled.img`
  width: 100%;
`

export const List = styled.ul`
  list-style-type: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px;
  margin: 3rem auto;
  max-width: 1040px;
  padding: 0;
  justify-content: center;
  align-items: stretch; // Make items stretch to match height

  @media ${props => props.theme.breakpoints.lg}{
    margin: 64px auto;
    padding: 0 20px;
  }

  @media ${props => props.theme.breakpoints.md}{
    grid-template-columns: 1fr;
    margin: 64px auto;
    gap: 24px;
    padding: 0 20px;
  }
  
  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    flex-direction: column;
    margin: 32px auto;
    padding: 0 15px;
  }
`

export const ListContainer = styled.div`
  display: flex;
  flex-direction: column;

  @media ${props => props.theme.breakpoints.sm}{
    display: flex;
    margin-left: 18px;
  }
`

export const ListTitle = styled.h4`
  font-weight: 700;
  font-size: 28px;
  line-height: 32px;
  letter-spacing: 0.02em;
  color: #FFFFFF;
  margin-bottom: 8px;

@media ${props => props.theme.breakpoints.md}{
  font-size: 24px;
  line-height: 28px;
}

@media ${props => props.theme.breakpoints.sm}{
  font-size: 20px;
  line-height: 28px;
  letter-spacing: 0.02em;
  margin-bottom: 4px;
}
`

export const ListParagraph = styled.p`
  font-size: 18px;
  line-height: 30px;
  color: rgba(255, 255, 255, 0.75);

  @media ${props => props.theme.breakpoints.md}{
    font-size: 16px;
    line-height: 28px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    font-size: 14px;
    line-height: 22px;
  }
`

export const ListItem = styled.li`
  max-width: 460px; // Increased max-width
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(255, 255, 255, 0.05); // Optional: adds subtle background
  padding: 20px;
  border-radius: 10px;
  height: 100%; // Makes all items same height
  justify-content: center;

  @media ${props => props.theme.breakpoints.md}{
    max-width: 203px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    margin-bottom: 14px;
    max-width: 320px;
    flex-direction: row;
    justify-content: flex-start;
    text-align: left;
  }
`

export const ListIcon = styled.img`
  display: block;
  width: 48px;
  height: 48px;
  margin-bottom: 10px;
  
  @media ${props => props.theme.breakpoints.md}{
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
  }

  @media ${props => props.theme.breakpoints.sm}{
    width: 32px;
    height: 32px;
    margin-bottom: 0px;
  }
`
