import styled from "styled-components";
function Apply() {
  return (
    <StApply>
      <h2>APPLY (8/22~8/29)</h2>
      <p>하단 버튼을 누르면 폼 링크로 접속됩니다.</p>
      <StApplyBtn>지원하기</StApplyBtn>
    </StApply>
  );
}

export default Apply;

const StApply = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const StApplyBtn = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  font-size: 2rem;

  width: 20rem;
  margin: 2rem 0 5rem 0;
  padding: 0.2rem 0 0.2rem 0;

  border-radius: 0.8rem;
  cursor: pointer;
`;
