import _ from 'lodash';

import { IUserListProps } from './UserList.types';

export const UserList: React.ComponentType<IUserListProps> = ({ data, setIndex, className }) => {
  const handleChangeOption = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setIndex(e.target.selectedIndex);
  };

  return (
    <select
      className={className}
      onChange={handleChangeOption}
    >
      {_.map(data, user => (
        <option key={user.username}>{user.username}</option>
      ))}
    </select>
  );
};
