export const SortBy = ({ setSort, setOrder }) => {
  const handleClick = (sort) => {
    const [sortBy, order] = sort.split(" ");
    setSort(sortBy);
    setOrder(order);
  };

  return (
    <div>
      <label>
        <select
          className="sort_by"
          onChange={(event) => {
            handleClick(event.target.value);
          }}
        >
          <option value="" disabled selected>
            Sort By...
          </option>
          <option value="created_at asc">Oldest</option>
          <option value="created_at desc">Newest</option>
          <option value="votes asc">Least Votes</option>
          <option value="votes desc">Most Votes</option>
          {/* //add comment sort */}
        </select>
      </label>
    </div>
  );
};
