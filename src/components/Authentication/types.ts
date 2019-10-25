import { FormComponentProps } from 'antd/lib/form/Form';

export type FormValues = {
  email: string;
  password: string;
};

export type Props = FormComponentProps<FormValues>;
