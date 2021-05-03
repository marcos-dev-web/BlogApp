import React, { useState } from "react";
import InstagramIcon from "@material-ui/icons/Instagram";
import GitHubIcon from "@material-ui/icons/GitHub";
import EmailIcon from "@material-ui/icons/Email";
import {
  Container,
  Menu,
  SideBar,
  TitleSideBar,
  Link,
  Center,
  Content,
  Footer,
  Aside,
  Wrapper,
  Social,
  D,
} from "./style";

import "./style.css";

function Home() {
  const [color, setColor] = useState("white");
  const [menuIsOpen, setMenuIsOpen] = useState(true);

  const menu = {
    close() {
      setColor("#069AF3");
      setMenuIsOpen(false);
    },
    open() {
      setColor('white');
      setMenuIsOpen(true);
    }
  }

  function handleMenu() {
    if (menuIsOpen) {
      menu.close();
    } else {
      menu.open();
    }
  }

	window.addEventListener('resize', () => {
    if (window.innerWidth <= 605) {
      menu.close();
    }
    window.addEventListener('resize', () => {
      if (window.innerWidth > 605) {
        if (!menuIsOpen) {
          menu.open();
        }
			}
			if (window.innerWidth <= 605) {
        if (menuIsOpen) {
          menu.close();
        }
      }
    })
	});
  
  document.title = "Home - blog";

  return (
    <Container>
      <Menu color={color} onClick={handleMenu}>
        <span></span>
        <span></span>
        <span></span>
      </Menu>
      <SideBar className="sidebar" menu={menuIsOpen}>
        <TitleSideBar className="title_sidebar">Go to</TitleSideBar>
        <Link to="/all-posts">All posts</Link>
        <Link to="/">Posts By Topic</Link>
        <Link to="/">Search Post</Link>
        <Link to="/">Contact</Link>
      </SideBar>
      <Center calssName="center">
        <Content className="container_center">
          <h1 className="title">This is your blog app</h1>
          <div className="content_paragraph">
            <p className="paragraph">in this blog you will see posts</p>
            <p className="paragraph">about Tecnologies as: </p>
          </div>
          <ul className="list">
            <li>
              <a href="/">ReactJS</a>
            </li>
            <li>
              <a href="/">JavaScript</a>
            </li>
            <li>
              <a href="/">Python</a>
            </li>
            <li>
              <a href="/">HTML</a>
            </li>
            <li>
              <a href="/">CSS</a>
            </li>
          </ul>
        </Content>
        <Footer>
          <Aside>
            <Wrapper>
              <Social href="https://www.instagram.com/marcos.dev.web">
                <InstagramIcon /> &nbsp; Instagram
              </Social>
              <Social href="https://github.com/marcos-dev-web">
                <GitHubIcon /> &nbsp; GitHub
              </Social>
              <Social
                href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=marcos.dev.web.frontend@gmail.com"
                target="_blank"
              >
                <EmailIcon /> &nbsp; Email
              </Social>
            </Wrapper>
          </Aside>
          <Aside>
            <D className="copy">Todos os direitos reservados</D>
          </Aside>
        </Footer>
      </Center>
    </Container>
  );
}

export default Home;
