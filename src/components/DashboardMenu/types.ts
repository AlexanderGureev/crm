import { Menu as AntdMenu } from 'antd';
import { IconProps, IconComponent } from 'antd/lib/icon';

export type LinkProps = {
  to: string;
  className?: string;
};

export type MenuType = typeof AntdMenu & {
  Item: typeof AntdMenu.Item;
  Link: React.FC<LinkProps>;
  Text: React.FC;
  Icon: React.FC<IconProps>;
};
