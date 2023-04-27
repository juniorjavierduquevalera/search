import useSearch from "./useSearch";

const SearchComponent = () => {
  const { searcher, search, results } = useSearch();

  return (
    <div>
      <input
        value={search}
        onChange={searcher}
        type="text"
        placeholder="Search"
        className="form-control"
      />
      <table className="table table-striped table-hover mt-5 shadow-lg">
        <thead>
          <tr className="bg-curso text-white">
            <th>NAME</th>
            <th>USER NAME</th>
          </tr>
        </thead>
        <tbody>
          {results.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
export default SearchComponent;
