import { RouteProps, RouteComponentProps } from 'react-router-dom';

export type PrivateRouteProps = RouteProps & {
  component:
    | React.ComponentType<RouteComponentProps<any>>
    | React.ComponentType<any>;
};
