import PropTypes from "prop-types";
import useTheme from "../context/Theme";
function Dropdown(props) {
  // { title, arr, set }
  Dropdown.propTypes = {
    title: PropTypes.string.isRequired,
    arr: PropTypes.array.isRequired,
    set: PropTypes.func.isRequired,
    setfilterSubRegion: PropTypes.func,
  };

  const { elementMode } = useTheme();
  return (
    <div className={`dropdown ${elementMode}`}>
      <select
        className={elementMode}
        onChange={(e) => {
          props.setfilterSubRegion
            ? props.setfilterSubRegion("Filter by SubRegion")
            : null;
          props.set(e.target.value);
        }}
      >
        <option
          value={`Filter by ${props.title}`}
        >{`Filter by ${props.title}`}</option>
        {props.arr.map((val) => (
          // eslint-disable-next-line react/jsx-key
          <option value={val}>{val}</option>
        ))}
      </select>
    </div>
  );
}

export default Dropdown;
