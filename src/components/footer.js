import React from 'react';
import styled from 'styled-components';
import { theme, mixins } from '../styles';
const { colors, fontSizes, fonts } = theme;

const FooterContainer = styled.footer`
  ${mixins.flexCenter};
  flex-direction: column;
  padding: 15px;
  background-color: ${colors.darkGrey};
  color: ${colors.slate};
  text-align: center;
  height: auto;
`;
const Copy = styled.p`
  margin: 5px 0 3px;
`;
const CopyRight = styled.a`
  color: ${colors.slate};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
`;
const GithubLink = styled.a`
  color: ${colors.slate};
  font-family: ${fonts.SFMono};
  font-size: ${fontSizes.xsmall};
`;

const Footer = () => (
  <FooterContainer>
    <Copy>
      <GithubLink
        href="https://github.com/jcindavid933/portfolio"
        target="_blank"
        rel="nofollow noopener noreferrer">
        Developed by David Nam
      </GithubLink>
    </Copy>
  </FooterContainer>
);

export default Footer;
