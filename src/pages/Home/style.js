import { Link as LinkRouter} from 'react-router-dom';
import styled from 'styled-components';

const black = '#1B2431';
const border = '2px solid #4c5563';
const blue = '#069AF3';

export const Container = styled.main`
  width: 100vw;
  height: 100vh;
  
  display: flex;
  margin: 0 auto;
`;

export const Menu = styled.div`
  display: none;
  width: 30px;
  position: fixed;
  left: 10px;
  top: 10px;
  z-index: 100;
  cursor: pointer;

  &> span {
    display: block;
    width: 100%;
    height: 4px;
    border-radius: 4px;
    background: ${(props) => props.color};
  }
  &> span:not(:first-child) {
    margin-top: 3px;
  }

  @media screen and (max-width: 605px) {
    display: block;
  }
`;

export const SideBar = styled.aside`
  background: ${black};
  height: 100%;
  width: 40%;
  max-width: 21.875rem;
  min-width: 15.625rem;
  border-right: ${border};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  left: 0;

  @media screen and (max-width: 605px) {
    left: ${({menu}) => menu ? '0' : '-100%'};
  }
`;

export const TitleSideBar = styled.h1`
  position: absolute;
  top: 10px;
  width: 90%;
  margin: 0 auto;
  color: white;
  font-size: 3rem;
`;

export const Link = styled(LinkRouter)`
  position: relative;
  color: white;
  width: 90%;
  padding: 0.2rem 0;
  padding-left: 1.5rem;
  background: rgba(255,255,255,0.2);
  border-radius: 3px;
  margin-top: 1rem;
  text-decoration: none;
  cursor: pointer;
  user-select: none;
  transition: all 150ms linear;

  &:before {
    position: absolute;
    content: '';
    width: 1rem;
    height: 100%;
    top: 0;
    left: 0;
    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
    background: springgreen;
    transition: all 150ms linear;
  }
  &:hover {
    color: springgreen;
  }
  &:hover:before {
    background: ${blue};
  }
`;

export const Center = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  overflow-y: auto;
`;

export const Content = styled.section`
  width: 100%;
  height: 70%;
  padding: 1rem;
  min-height: 395px;
  overflow-y: auto;
`;

export const Footer = styled.footer`
  background: ${black};
  border-top: ${border};
  width: 100%;
  height: 30%;
  min-height: 137px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Aside = styled.aside`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Wrapper = styled.div`
  width: 80%;
  text-align: left;
  display: flex;
  flex-direction: column;
`;

export const Social = styled.a`
  text-decoration: none;
  color: white;
  width: fit-content;
  cursor: pointer;
  
  display: flex;
  align-items: center;

  &:hover {
    color: ${blue};
  }

  &:not(:first-child) {
    margin-top: 1rem;
  }
`;

export const D = styled.p`
  font-weight: bold;
  color: white;
`;
