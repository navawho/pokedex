import styled from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  height: 30px;

  background-color: #C59200;
  padding: 6px 24px;
  border-radius: 8px;

  h5 {
    color: #fff;
  }

  margin-bottom: 12px;

  :last-child {
    margin: 0;
  }

  transition: 0.3s;

  :hover {
    background-color: ${shade(0.2, '#C59200')};
  }

  cursor: pointer;
`;