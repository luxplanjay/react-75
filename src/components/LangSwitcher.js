import { useSelector, useDispatch } from 'react-redux';
import { changeLang } from 'redux/localeSlice';

export const LangSwitcher = () => {
  const dispatch = useDispatch();
  const lang = useSelector(state => state.locale.lang);

  return (
    <select
      value={lang}
      onChange={evt => dispatch(changeLang(evt.target.value))}
    >
      <option value="en">EN</option>
      <option value="ua">UA</option>
      <option value="pl">PL</option>
    </select>
  );
};
