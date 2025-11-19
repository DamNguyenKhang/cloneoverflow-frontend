import classNames from 'classnames/bind';
import styles from './Header.module.scss';
import { Link } from 'react-router-dom';

import images from '~/assets/images';
import Button from '~/components/commons/Button';
import NavList from '~/components/commons/NavList';
import { useState } from 'react';
import LoginModal from './LoginModal';
import { useAuth } from '~/hooks';
// import UserProfile from '../UserProfile';
import {
  AwardIcon,
  BellIcon,
  CourseraServiceIcon,
  CreditIcon,
  DocumentIcon,
  EnvelopeIcon,
  EyeIcon,
  EyeIconSlash,
  FileIcon,
  ForumIcon,
  IdBadgeIcon,
  MoneyIcon,
  MoneyWaveIcon,
  PaidMembershipIcon,
  SearchIcon,
  SearchPlusIcon,
  ShopIcon,
  ThumbTackIcon,
  UserIcon,
} from '~/components/Icons';

const cx = classNames.bind(styles);
function Header() {
  const userMenu = {
    username: 'khangdn6',
    avatar: images.defaultAvatar,
    post: '0',
    point: '5.145',
    level: '4',
    reactionScore: '0',
  };
  const navArrayLeft = [
    {
      to: '/',
      title: 'Diễn đàn',
      icon: <ForumIcon />,
      menu: {
        data: [
          {
            title: 'Bài mới',
            to: '/whats-new',
            icon: <SearchPlusIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/find-threads',
            title: 'Tìm chủ đề',
            icon: <SearchIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/find-threads',
            title: 'Chủ đề của bạn',
            icon: <UserIcon width="1.5rem" height="1.5rem" />,
            indent: true,
          },
          {
            to: '/watched',
            title: 'Đã theo dõi',
            icon: <EyeIcon width="1.5rem" height="1.5rem" />,
            separate: true,
          },
          {
            to: '/search',
            title: 'Tìm trong diễn đàn',
            icon: <SearchIcon width="1.5rem" height="1.5rem" />,
          },
          {
            title: 'đánh dấu đã đọc',
            icon: <EyeIconSlash width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/award-system',
            title: 'Danh Hiệu',
            icon: <AwardIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/award-system',
            title: 'Danh Hiệu của bạn',
            icon: <IdBadgeIcon width="1.5rem" height="1.5rem" />,
            indent: true,
          },
          {
            to: '/members',
            title: 'Thành Viên',
            icon: <UserIcon width="1.5rem" height="1.5rem" />,
            separate: true,
          },
        ],
      },
    },
    {
      to: '/document',
      title: 'Tài liệu',
      icon: <DocumentIcon />,
      menu: {
        data: [
          {
            to: '/categories/subjects',
            title: 'Đề thi các kì trước',
            icon: <FileIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/resources',
            title: 'Giáo trình - Slide - Code mẫu',
            icon: <FileIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/search',
            title: 'Tìm tài liệu',
            icon: <SearchIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/resources/authors',
            title: 'Tài liệu của tôi',
            icon: <UserIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/watched/resources',
            title: 'Đã xem',
            icon: <EyeIcon width="1.5rem" height="1.5rem" />,
          },
          {
            to: '/watched/media',
            title: 'Đang theo dõi',
            icon: <ThumbTackIcon width="1.5rem" height="1.5rem" />,
          },
        ],
      },
    },
    { to: '/membership', title: 'Thành viên trả phí', icon: <PaidMembershipIcon width="1.5rem" height="1.5rem" /> },
    { to: '/coursera', title: 'Dịch vụ coursera', icon: <CourseraServiceIcon width="1.5rem" height="1.5rem" /> },
    { to: '/shop', title: 'Shop', icon: <ShopIcon width="1.5rem" height="1.5rem" /> },
  ];

  const navArrayRight = [
    {
      to: '/@khangdn6',
      title: 'khangdn6',
      menu: {
        header: 'Tài khoản của bạn',
        user: userMenu,
        data: [
          { title: 'Dòng thời gian' },
          { title: 'Nội dung của bạn' },
          { title: 'Chi tiết tài khoản' },
          { title: 'Mật khẩu và bảo mật' },
          { title: 'Bảo mật cá nhân' },
          { title: 'Tùy chọn' },
          { title: 'Chữ ký' },
          { separate: true, title: 'Điểm tương tác nhận được' },
          { title: 'Thông báo' },
          { title: 'Thành viên trả phí' },
          { title: 'Kết nối tài khoản' },
          { title: 'Đang theo dõi' },
          { title: 'Phớt lờ' },
          { separate: true, title: 'Thoát' },
        ],
      },
    },
    {
      to: '/direct-message',
      icon: <EnvelopeIcon width="2rem" height="2rem" />,
      header: 'Direct messages',
      menu: { data: [] },
    },
    { to: '/account/alerts', icon: <BellIcon width="2rem" height="2rem" />, menu: { header: 'Thông báo', data: [] } },
    {
      to: '/dbtech-credits',
      icon: <MoneyIcon width="2rem" height="2rem" />,
      menu: {
        header: 'Ví FUO',
        data: [
          {
            title: 'Nạp tiền',
            icon: <CreditIcon width="1.5rem" height="1.5rem" />,
            to: '/fuo-banking',
          },
          {
            title: 'Nạp tiền',
            icon: <MoneyWaveIcon width="1.5rem" height="1.5rem" />,
            to: '/dbtech-credits',
          },
          {
            title: 'Giao dịch',
            icon: <EyeIcon width="1.5rem" height="1.5rem" />,
            to: '/dbtech-credits',
          },
          {
            title: 'FUO Point: 5,145',
          },
        ],
      },
    },
    { to: '/search', icon: <SearchIcon /> },
  ];
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const { user } = useAuth();
  return (
    <div className={cx('wrapper')}>
      <header className={cx('header-inner')}>
        <div className={cx('logo')}>
          <Link to="/">
            <img src={images.logo} alt="cloneoverflow" />
          </Link>
        </div>
        <NavList list={navArrayLeft} />
        <div className={cx('actions')}>
          {!user ? (
            <NavList list={navArrayRight} />
          ) : (
            <>
              <Button primary className={cx('custom-login')} onClick={() => setIsOpen(true)}>
                Log in
              </Button>
              <Button outline className={cx('custom-register')} onClick={() => setIsOpen(true)}>
                Register
              </Button>
              {isOpen && <LoginModal isOpen={isOpen} onClose={() => setIsOpen(false)} />}
            </>
          )}
        </div>
      </header>
    </div>
  );
}

export default Header;
