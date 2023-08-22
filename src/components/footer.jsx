import styled from "styled-components";
function Footer() {
  return (
    <StFooter>
      <p>지원 및 기타 문의</p>
      <p>ewhaevision@gmail.com</p>
    </StFooter>
  );
}

export default Footer;

const StFooter = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  padding: 5rem;

  background-color: black;

  p {
    font-size: 20px;
    line-height: 30px;
    color: #cccccc;
  }
`;
