
import Profile from "./Profile/Profile";
import userData from './data/userData.json';
import friends from './data/friends.json';
import FriendList from "./FriendList/FriendList";
import transactions from './data/transactions.json';
import TransactionHistory from "./TransactionHistory/TransactionHistory";

export default function App() {
    return (<>
      <Profile userName={userData}/>
      <FriendList friends={friends}/>
      <TransactionHistory items={transactions}/>
      </>);
  }