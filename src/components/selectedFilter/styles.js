import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    margin-left: 12px;
    font-size: 14px;
    background-color: #344054;
    color: white;
    border: 1px #6C6A61;
    padding: 6px;
    padding-left:4px;
    padding-right:8px;
    border-radius: 8px;
    @media (max-width: 400px) {
        margin-top: 6px;
        margin-left: 0;
      }
`;