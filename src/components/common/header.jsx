import { NavLink } from "react-router-dom";
import styled from "styled-components";

const Header = ({ isLogin, setIsLogin }) => {
  const logout = () => {
    localStorage.clear();
    window.location.replace("/");
  };

  if (localStorage.getItem("grade") === "5") {
    //로그인 & admin
    return (
      <>
        <HeaderBlock>
          <Logo>
            <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
              EVI$ION
            </NavLink>
          </Logo>
          <Wrapper>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
              <NavStyle to="/h8Jd62Ks">
                <Menu>Admin</Menu>
              </NavStyle>
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/mypage"}>
                <Menu>MyPage</Menu>
              </NavStyle>
              <LoginButton onClick={logout}>
                <StLogout to={"/"}>
                  <Menu>Logout</Menu>
                </StLogout>
              </LoginButton>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
      </>
    );
  } else if (localStorage.getItem("grade") === "1") {
    //로그인 & adminX
    return (
      <>
        <HeaderBlock>
          <Logo>
            <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
              EVI$ION
            </NavLink>
          </Logo>
          <Wrapper>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/mypage"}>
                <Menu>MyPage</Menu>
              </NavStyle>
              <LoginButton onClick={logout}>
                <StLogout to={"/"}>
                  <Menu>Logout</Menu>
                </StLogout>
              </LoginButton>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
      </>
    );
  } else {
    return (
      <>
        <HeaderBlock>
          <Logo>
            <NavLink style={{ color: "white", textDecoration: "none" }} to="/">
              EVI$ION
            </NavLink>
          </Logo>
          <Wrapper>
            <MenusBlock>
              {menus.map((m) => (
                <NavStyle key={m.link} to={m.link}>
                  <Menu key={m.link}>{m.name}</Menu>
                </NavStyle>
              ))}
            </MenusBlock>
            <LoginBlock>
              <NavStyle to={"/signup"}>
                <Menu>Signup</Menu>
              </NavStyle>
              <NavStyle to={"/login"}>
                <Menu>Login</Menu>
              </NavStyle>
            </LoginBlock>
          </Wrapper>
        </HeaderBlock>
      </>
    );
  }
};

export default Header;

// const menus = [
//   { name: "Curriculum", link: "/curriculum" },
//   { name: "Recruit", link: "/recruit" },
//   { name: "Board", link: "/board" },
// ];

const menus = [
  { name: "Curriculum", link: "/curriculum" },
  { name: "Board", link: "/board" },
];

const Logo = styled.div`
  font-size: 4rem;
  color: white;
  @media (max-width: 700px) {
    font-size: 3.5rem;
  }
`;

const HeaderBlock = styled.div`
  display: flex;
  position: fixed;
  width: 100%;
  background: black;
  z-index: 10;
  padding-left: 3rem;
  padding-top: 2rem;
  padding-bottom: 3rem;
`;

const Wrapper = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  @media (max-width: 700px) {
    height: 4rem;
  }
`;

const MenusBlock = styled.div`
  padding-left: 0.5rem;
  display: flex;

  @media (max-width: 700px) {
    display: none;
  }
`;

const NavStyle = styled(NavLink)`
  color: gray;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
  &.active {
    color: white;
    position: relative;
  }
`;

const Menu = styled.div`
  font-size: 30px;
  display: flex;
  align-items: center;
  cursor: pointer;
  padding-left: 3rem;
`;

const LoginBlock = styled.div`
  padding-right: 3rem;
  display: flex;
  align-items: center;
  @media (max-width: 700px) {
    display: none;
  }
`;
const LoginButton = styled.button`
  font-size: 30px;
  display: flex;
`;

const StLogout = styled(NavLink)`
  color: gray;
  &:link {
    transition: 0.5s;
    text-decoration: none;
  }
  &:hover {
    color: white;
  }
`;
