import styled from 'styled-components';

export const List = styled.ul`
  width: 300px;
  min-height: 200px;

  button {
    border: 1px solid gray;
    border-radius: 3px;
    background-color: rgb(225, 225, 203);
    box-shadow: 2px 3px 2px 0 rgb(0 0 0 / 0.2);
  }
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  margin: 5px 0;
  border: 1px solid gray;
  border-radius: 5px;
  background-color: beige;

  :hover {
    background-color: rgb(225, 225, 203);
    font-size: 15px;
  }
`;

export const Text = styled.p`
  margin-top: 0;
  margin-bottom: 0;
  margin-right: 10px;
`;
