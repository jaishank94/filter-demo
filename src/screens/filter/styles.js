import styled from "styled-components";

export const FilterWrapper = styled.div``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;
  flex-wrap: wrap;
  @media (max-width: 400px) {
    flex-direction: column;
    width: fit-content;
  }
`;

export const FilterButton = styled.button`
  display: flex;
  align-items: center;
  background-color: ${(props) =>
    props.showFilters ? "#1967FF" : "transparent"};
  color: ${(props) => (props.showFilters ? "white" : "#1967FF")};
  border: 1px solid ${(props) => (props.showFilters ? "#1967FF" : "#344054")};
  border-radius: 8px;
  padding: 8px;
  letter-spacing: 0.5px;
  font-size: 16px;
  cursor: pointer;
`;

export const Container = styled.div`
  background-color: #1d2939;
  color: white;
  border: 1px #6c6a61;
  width: 300px;
  padding: 16px;
  border-radius: 14px;
  font-size: 18px;
  @media (max-width: 300px) {
    width: auto;
  }
`;

export const FilterDataWithReset = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ResetButton = styled.button`
  background-color: transparent;
  color: #4785ff;
  border: 0;
  margin-top: 4px;
  padding-left: 0;
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
`;
