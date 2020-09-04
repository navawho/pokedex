import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div``;

export const Button = styled.div`
  display: flex;
  align-items: center;

  background-color: #fff;
  box-shadow: 0px 0px 15px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  padding: 12px;

  cursor: pointer;

  margin-bottom: 12px;

  :last-child {
    margin: 0;
  }

  transition: 0.3s;

  :hover {
    background-color: ${shade(0.2, '#fff')};
  }
`;

export const Icon = styled.div`
  background: #D7DDF3;
  border-radius: 50%;
  width: 24px;
  height: 24px;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-right: 6px;
`;