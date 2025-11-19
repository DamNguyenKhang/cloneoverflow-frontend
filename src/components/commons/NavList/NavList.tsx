import classNames from 'classnames/bind';
import styles from './NavList.module.scss';
import NavItem from './NavItem';
import Menu from '~/components/Popper/Menu';
import { IMenuItem } from '~/types/Menu';
import { ReactNode } from 'react';
const cx = classNames.bind(styles);

interface INavItem {
  to: string;
  title?: string,
  icon?: ReactNode;
  menu?: IMenuItem;
}

interface INavListProps {
  list: INavItem[];
}

function NavList({ list }: INavListProps) {
  return (
    <nav className={cx('navbar')}>
      {list.map((item, index) => {

        const navItem = (
          <NavItem
            key={index}
            to={item.to}
            icon={item.icon}
            title={item.title}
            img={item.menu?.user?.avatar}
          />
        );

        if (!item.menu) return navItem;

        return <Menu menu={item.menu}>{navItem}</Menu>;
      })}
    </nav>
  );
}

export default NavList;
