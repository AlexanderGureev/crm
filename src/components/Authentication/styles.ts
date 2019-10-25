import styled from 'styled-components';
import { Form as AntdForm, Input as AntdInput } from 'antd';

export type StyledForm = typeof AntdForm & {
  Header: React.FC;
  Input: React.FC;
};

export const FormContainer = styled.div`
  background-color: var(--white);
  border-radius: 10px;
  padding: 100px;
  box-shadow: 0 20px 50px var(--gray1);
`;

export const FormHeader = styled.span`
  margin-bottom: 24px;
  text-align: center;
`;

export const Form: StyledForm = styled(AntdForm)`
  display: flex;
  justify-content: center;
  flex-direction: column;

  .ant-form-explain {
    padding: 5px 0;
    text-align: center;
  }
  .ant-form-item-with-help {
    margin-bottom: 10px;
  }
` as any;

export const Input = styled(AntdInput)`
  && {
    .ant-input {
      font-size: 16px;
    }
    .ant-input:not(:first-child) {
      padding-left: 35px;
    }
    height: 45px;
    border-radius: 4px;
  }
`;

Form.Header = FormHeader;
