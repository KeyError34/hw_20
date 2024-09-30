import styles from './styles.module.scss';
import { Avatar, List } from 'antd';
import { useSelector } from 'react-redux';
function UserList() {
  const users = useSelector(state => state.users_data.users);
  return (
    <div>
      <List
        itemLayout="horizontal"
        dataSource={users}
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar
                  src={`https://api.dicebear.com/7.x/miniavs/svg?seed=${index}`}
                />
              }
              title={<a href="#">{item.title}</a>}
              description={item.email}
            />
          </List.Item>
        )}
      />
    </div>
  );
}
export default UserList;
