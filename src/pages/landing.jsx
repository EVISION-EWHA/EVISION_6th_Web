import styled from "styled-components";
import Login from "./login/Login";

function Landing() {
  return (
    <StLanding>
      <Login></Login>
    </StLanding>
  );
}

export default Landing;

const StLanding = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  //background-color: black;

  & > img {
    width: 25rem;
    margin: 4rem auto;
  }
  label {
    font-size: 30px;
    margin-bottom: 10px;
    margin-top: 25px;
  }
  input {
    font-size: 50px;
  }
  button {
    font-size: 30px;
    text-align: right;
  }
  h1 {
    color: black;
    font-size: 40px;
    margin-bottom: 3rem;
  }

  h2 {
    font-size: 35px;
    color: #ebeced;

    margin-top: 6rem;
    margin-bottom: 2rem;
  }

  p {
    font-size: 30px;
    line-height: 30px;
    color: black;
  }
`;
