type ListSettingsProps = {
  pageSize: number;
  onPageSizeChange: (p: number) => void;
};

function ListSettings(props: ListSettingsProps) {
  const { pageSize, onPageSizeChange } = props;

  return (
    <div>
      <label htmlFor="pagesize">News per page: </label>
      <input
        type="number"
        id="pagesize"
        defaultValue={pageSize}
        onChange={(e) => onPageSizeChange(Number(e.target.value))}
        min={1}
        max={30}
      />
    </div>
  );
}

export default ListSettings;
