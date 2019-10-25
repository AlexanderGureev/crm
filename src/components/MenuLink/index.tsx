import React from 'react';

import { LinkProps } from '../DashboardMenu/types';
import { Link } from 'react-router-dom';

const MenuLink: React.FC<LinkProps> = ({ className, children, to }) => {
  return (
    <Link to={to} className={className}>
      {children}
    </Link>
  );
};

export { MenuLink };
