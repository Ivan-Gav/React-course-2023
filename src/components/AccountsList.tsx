import { useSelector } from 'react-redux';
import { RootState } from '../state/store';

export default function AccountsList() {
  const accounts = useSelector((state: RootState) => state.accounts);

  return (
    <>
      <div className="mainpage">Main page content</div>
      {!!accounts.length && (
        <ul>
          {accounts.map((account, i) => (
            <li key={`${i}:_${account.name}`}>{account.name}</li>
          ))}
        </ul>
      )}
    </>
  );
}
