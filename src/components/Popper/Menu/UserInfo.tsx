import React from 'react';
import classNames from 'classnames/bind';
import styles from './Menu.module.scss';
import { IUserMenu } from '~/types/User';
import Image from '~/components/commons/Image';

const cx = classNames.bind(styles);

interface UserInfoProps {
  user: IUserMenu;
}

const UserInfo: React.FC<UserInfoProps> = ({ user }) => {
  return (
    <div className={cx('user-info')}>
      <div className={cx('avatar')}>
        <Image src={user.avatar} alt={user.username} />
      </div>
      <div className={cx('details')}>
        <h3 className={cx('username')}>{user.username}</h3>
        <p className={cx('info')}>
          <span>FUO Point: {user.point}</span>
          <span>Bài viết: {user.post}</span>
          <span>Level: {user.level}</span>
          <span>Reaction score: {user.reactionScore}</span>
        </p>
      </div>
    </div>
  );
};

export default UserInfo;
