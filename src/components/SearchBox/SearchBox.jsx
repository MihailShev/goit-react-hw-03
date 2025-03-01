import { useId } from "react";

import css from "./SearchBox.module.css";

function SearchBox({ onClick, state, setFilterValue }) {
  const filterId = useId();
  return (
    <form className={css.box}>
      <label htmlFor={filterId}>Find contacts dy name or number</label>

      <input
        className={css.input}
        id={filterId}
        value={state}
        onChange={(e) => setFilterValue(e.target.value)}
        type="text"
        name="filterValue"
      />

      <button className={css.button} onClick={onClick} type="reset">
        Clear
      </button>
    </form>
  );
}
export default SearchBox;
