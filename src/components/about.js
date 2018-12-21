import React, { Component } from 'react';
import Gif from './react-gif';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import styled from 'styled-components';
import pic from "./dave.gif";
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors} = theme;

const AboutContainer = styled(Section)`
  position: relative;
`;
const FlexContainer = styled.div`
  ${mixins.flexBetween};
  align-items: flex-start;
  ${media.tablet`display: block;`};
`;
const ContentContainer = styled.div`
  width: 60%;
  max-width: 480px;
  ${media.tablet`width: 100%;`};
  a {
    ${mixins.inlineLink};
  }
`;
const Avatar = styled.img`
  position: relative;
  mix-blend-mode: multiply;
  border-radius: ${theme.borderRadius};
  transition: ${theme.transition};
`;
const PicContainer = styled.div`
  position: relative;
  width: 40%;
  max-width: 300px;
  margin-left: 60px;
  ${media.tablet`margin: 60px auto 0;`};
  ${media.phablet`width: 70%;`};
`;
const AvatarContainer = styled.div`
  width: 100%;
  position: relative;
  border-radius: ${theme.borderRadius};
  background-color: ${colors.slate};
  margin-left: -20px;
  &:hover,
  &:focus {
    background: transparent;
    &:after {
      top: 15px;
      left: 15px;
    }
    ${Avatar} {
      filter: none;
      mix-blend-mode: normal;
    }
  }
  &:before,
  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius};
    transition: ${theme.transition};
  }
  &:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${colors.navy};
    mix-blend-mode: screen;
  }
  &:after {
    border: 2px solid ${colors.dark};
    top: 20px;
    left: 20px;
    z-index: -1;
  }
`;

class About extends Component {

  constructor(props){
    super(props)
    this.state = {
      gif: pic,
      loaded: pic
    }
  }

  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  active = {
    activeTabId: 0,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.about, srConfig());
  }

  reloadGif = () => {
    this.setState({loaded: ''})
    setTimeout(() => {
      this.setState({loaded: this.state.gif})
    }, 0)
  }

  render() {
    const { data } = this.props;
    const { frontmatter, html } = data[0].node;
    const { title, avatar } = frontmatter;

    return (
      <AboutContainer id="about" ref={el => (this.about = el)}>
        <Heading>{title}</Heading>
        <FlexContainer>
          <ContentContainer>
            <p dangerouslySetInnerHTML={{ __html: html }} />
          </ContentContainer>
          <PicContainer>
            <AvatarContainer>
              <button onClick={this.reloadGif}><Avatar src={this.state.loaded}/> </button>
            </AvatarContainer>
          </PicContainer>
        </FlexContainer>
      </AboutContainer>
    );
  }
}
export default About;
