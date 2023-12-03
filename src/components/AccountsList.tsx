import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { RootState } from '../state/store';
import AccountCard from './AccountCard';

export default function AccountsList() {
  const accounts = useSelector((state: RootState) => state.accounts);
  const location = useLocation();

  return (
    <>
      <h2 className="mainpage">Main page content</h2>
      {!!accounts.length && (
        <div className="card-list">
          {accounts.toReversed().map((account) => (
            <AccountCard
              new={location.state.id === account.id}
              key={account.id}
              account={account}
            />
          ))}
        </div>
      )}
    </>
  );
}
