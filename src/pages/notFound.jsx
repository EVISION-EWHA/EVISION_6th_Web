import styled from "styled-components";

function NotFound() {
  return (
    <StNotFound>
      <p>페이지를 찾을 수 없습니다.</p>
    </StNotFound>
  );
}

export default NotFound;

const StNotFound = styled.div`
  width: 100%;
`;
