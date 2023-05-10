import css from 'css/App/App.module.css';
import { Profile } from 'components/Profile/Profile';
import user from 'user.json'; 
import { Statistics } from 'components/Statistics/Statistics';
import data from 'data.json';
import { FriendList } from 'components/FriendList/FriendList';
import friends from 'friends.json';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';
import items from 'transactions.json';

export const App = () => {
  return (
    <div className={css.container}>
      <Profile user={user}/>
      <Statistics data={data}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={items}/>
    </div>
  );
};