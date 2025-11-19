import { IUserMenu } from './User';
import { ReactNode } from 'react';

export interface DataItem {
  to?: string;
  title?: string;
  icon?: ReactNode;
  header?: string;
  separate?: boolean;
  indent?: boolean;
}

export interface IMenuItem {
  header?: string;
  user?: IUserMenu;
  data?: DataItem[];
}
