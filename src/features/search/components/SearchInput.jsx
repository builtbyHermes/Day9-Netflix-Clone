import styles from "./SearchInput.module.css";


function SearchInput({
  value,
  onChange
}) {

  return (
    <div className={styles.container}>

      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search movies..."
      />

    </div>
  );
}


export default SearchInput;