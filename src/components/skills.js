import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ScrollReveal from 'scrollreveal';
import { srConfig } from '../config';
import styled from 'styled-components';
import { theme, mixins, media, Section, Heading } from '../styles';
const { colors, fontSizes, fonts } = theme;

const SkillsContainer = styled(Section)`
  position: relative;
  max-width: 500px;
  margin-right: 30px;
`;
const TabsContainer = styled.div`
  display: flex;
  align-items: flex-start;
  position: relative;
  ${media.thone`display: block;`};
`;
const Tabs = styled.div`
  display: block;
  position: relative;
  width: max-content;
  z-index: 3;
  ${media.thone`
    display: flex;
    margin-bottom: 30px;
    width: 100%;
    overflow-x: scroll;
  `};
`;
const Tab = styled.button`
  ${mixins.link};
  display: flex;
  align-items: center;
  width: 100%;
  background-color: transparent;
  height: ${theme.tabHeight}px;
  padding: 0 20px 2px;
  transition: ${theme.transition};
  border-left: 2px solid ${colors.darkGrey};
  text-align: left;
  white-space: nowrap;
  font-family: ${fonts.Calibre};
  font-size: ${fontSizes.xlarge};
  color: ${props => (props.isActive ? colors.dark : colors.lightGrey)};
  ${media.tablet`padding: 0 15px 2px;`};
  ${media.thone`
    ${mixins.flexCenter};
    padding: 0 15px;
    text-align: center;
    border-left: 0;
    border-bottom: 2px solid ${colors.green};
    min-width: 120px;
  `};
  &:hover,
  &:focus {
    background-color: ${colors.transNavy};
  }
`;
const Highlighter = styled.span`
  display: block;
  background: ${colors.dark};
  width: 2px;
  height: ${theme.tabHeight}px;
  border-radius: ${theme.borderRadius};
  position: absolute;
  top: 0;
  left: 0;
  transition: ${theme.transition};
  transition-delay: 0.1s;
  z-index: 10;
  transform: translateY(
    ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabHeight : 0)}px
  );
  ${media.thone`
    width: 100%;
    max-width: ${theme.tabWidth}px;
    height: 2px;
    top: auto;
    bottom: 0;
    transform: translateX(
      ${props => (props.activeTabId > 0 ? props.activeTabId * theme.tabWidth : 0)}px
    );
  `};
`;
const ContentContainer = styled.div`
  position: relative;
  padding-left: 30px;
  flex-grow: 1;
  ${media.tablet`padding-left: 20px;`};
  ${media.thone`padding-left: 0;`};
`;
const TabContent = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  opacity: ${props => (props.isActive ? 1 : 0)};
  z-index: ${props => (props.isActive ? 2 : -1)};
  position: ${props => (props.isActive ? 'relative' : 'absolute')};
  visibility: ${props => (props.isActive ? 'visible' : 'hidden')};
  transition: ${theme.transition};
  transition-duration: ${props => (props.isActive ? '0.5s' : '0s')};
  ul {
    padding: 0;
    margin: 0;
    list-style: none;
    font-size: ${fontSizes.large};
    font-weight: bold;
    li {
      position: relative;
      padding-left: 30px;
      margin-bottom: 10px;
      &:before {
        position: absolute;
        left: 0;
        color: ${colors.dark};
        line-height: ${fontSizes.xlarge};
      }
    }
  }
  a {
    ${mixins.inlineLink};
  }
`;
class Skills extends Component {
  static propTypes = {
    data: PropTypes.array.isRequired,
  };

  state = {
    activeTabId: 0,
  };

  componentDidMount() {
    ScrollReveal().reveal(this.skills, srConfig());
  }

  isActive = id => this.state.activeTabId === id;

  setActiveTab = activeTabId => this.setState({ activeTabId });

  render() {
    const { activeTabId } = this.state;
    const { data } = this.props;

    return (
      <SkillsContainer id="skills" ref={el => (this.skills = el)}>
        <Heading>Technical Skills</Heading>
        <TabsContainer>
          <Tabs role="tablist">
            {data &&
              data.map(({ node }, i) => {
                const { title } = node.frontmatter;
                return (
                  <Tab
                    key={i}
                    isActive={this.isActive(i)}
                    onClick={e => this.setActiveTab(i, e)}
                    role="tab"
                    aria-selected={this.isActive(i) ? 'true' : 'false'}
                    aria-controls={`tab${i}`}
                    id={`tab${i}`}
                    tabIndex={this.isActive(i) ? '0' : '-1'}>
                    <span>{title}</span>
                  </Tab>
                );
              })}
            <Highlighter activeTabId={activeTabId} />
          </Tabs>
          <ContentContainer>
            {data &&
              data.map(({ node }, i) => {
                const { html } = node;
                return (
                  <TabContent
                    key={i}
                    isActive={this.isActive(i)}
                    id={`job${i}`}
                    role="tabpanel"
                    tabIndex="0"
                    aria-labelledby={`job${i}`}
                    aria-hidden={!this.isActive(i)}>
                    <p dangerouslySetInnerHTML={{ __html: html }} />
                  </TabContent>
                );
              })}
          </ContentContainer>
        </TabsContainer>
      </SkillsContainer>
    );
  }
}

export default Skills;
