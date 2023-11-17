import { useNavigate, useSearchParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import Content from '.././components/Content/Content';
import Search from '.././components/Search/Search';
import ListSettings from '.././components/ListSettings/ListSettings';
import { setPageSize } from '../store/pageSizeSlice';

function MainPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [params, setParams] = useSearchParams();

  const handleListSettings = (data: string) => {
    dispatch(setPageSize(data));
    navigate('/');
    setParams((prev) => {
      prev.set('page', '1');
      return prev;
    });
  };

  const handlePage = (data: number) => {
    setParams((prev) => {
      prev.set('page', data.toString());
      return prev;
    });
  };

  return (
    <>
      <h1>News Portal</h1>
      <Search />
      <br />
      <ListSettings onPageSizeChange={handleListSettings} />
      <hr />
      <Content
        onPageChange={handlePage}
        page={Number(params.get('page')) || 1}
      />
    </>
  );
}

export default MainPage;
