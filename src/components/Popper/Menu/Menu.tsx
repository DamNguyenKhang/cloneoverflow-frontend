import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import Tippy, { TippyProps } from '@tippyjs/react/headless';
import { Wrapper as PopperWrapper } from '~/components/Popper/';
import MenuItem from './MenuItem';
import { ReactNode } from 'react';
import { IMenuItem } from '~/types/Menu';
import UserInfo from './UserInfo';

interface MenuProps {
  menu: IMenuItem;
  children: ReactNode;
}

const cx = classNames.bind(styles);

function Menu({ menu, children }: MenuProps) {
  const rendermenu = () => {
    return (
      <>
        {menu.user && <UserInfo user={menu.user} />}
        {menu.data?.map((item, index) => (
          <MenuItem key={index} data={item} />
        ))}
      </>
    );
  };

  const renderResult: TippyProps['render'] = (attrs) => (
    <div className={cx('menu-list')} tabIndex={-1} {...attrs}>
      <PopperWrapper className={cx('menu-popper')}>
        <div className={cx('menu-body')}>{rendermenu()}</div>
      </PopperWrapper>
    </div>
  );

  return (
    <Tippy interactive offset={[0, 0]} placement="bottom-start" render={renderResult}>
      <span>{children}</span>
    </Tippy>
  );
}

export default Menu;
