import { useDispatch, useSelector } from "react-redux";
import { setNameFilter } from "../../redux/filters/slice";
import { selectNameFilter } from "../../redux/filters/selectors";
import css from "./Filter.module.css";

const Filter = () => {
  const dispatch = useDispatch();
  const value = useSelector(selectNameFilter);

  return (
    <label className={css.label}>
      Find contacts by name or number
      <input
        className={css.input}
        onChange={event => dispatch(setNameFilter(event.target.value))}
        type="text"
        value={value}
      />
    </label>
  );
};

export default Filter;
