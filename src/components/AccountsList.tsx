import { useSelector } from 'react-redux';
import { RootState } from '../state/store';
import AccountCard from './AccountCard';

export default function AccountsList() {
  const accounts = useSelector((state: RootState) => state.accounts);

  return (
    <>
      <h2 className="mainpage">Main page content</h2>
      {!!accounts.length && (
        <div className="card-list">
          {accounts.toReversed().map((account, i) => (
            <AccountCard key={`${i}:_${account.name}`} {...account} />
          ))}
        </div>
      )}
    </>
  );
}
