import classNames from "classnames/bind";
import styles from './Menu.module.scss'

interface HeaderProps{
    title: string;
}

const cx = classNames.bind(styles);
function Header({ title }: HeaderProps) {
  return <header className={cx('header')}>
    <h3 className={cx('title')}>{title}</h3>
  </header>;
}

export default Header;
