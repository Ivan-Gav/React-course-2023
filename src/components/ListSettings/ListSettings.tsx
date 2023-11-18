import { useSelector } from 'react-redux';

import { RootState } from '../../store/store';

type ListSettingsProps = {
  onPageSizeChange: (p: string) => void;
};

function ListSettings(props: ListSettingsProps) {
  const pageSize = useSelector((state: RootState) => state.pageSize.value);
  const { onPageSizeChange } = props;

  return (
    <div>
      <label htmlFor="pagesize">News per page: </label>
      <input
        type="number"
        id="pagesize"
        data-testid="pagesize"
        defaultValue={pageSize}
        onChange={(e) => onPageSizeChange(e.target.value)}
        min={1}
        max={30}
      />
    </div>
  );
}

export default ListSettings;
