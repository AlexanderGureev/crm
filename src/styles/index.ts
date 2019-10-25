import styled from 'styled-components';
import { Button as AntdButton } from 'antd';

export const H2 = styled.h2`
  font-weight: 700;
  font-size: 26px;
  color: var(--gray7);
  margin: 0;
`;

export const Text = styled.span`
  color: var(--gray5);
`;

export const Button = styled(AntdButton)`
  && {
    padding: 5px 50px;
    height: 40px;
    font-size: 16px;
    border: none;
    box-shadow: 0 5px 25px var(--blue02);
  }
`;
