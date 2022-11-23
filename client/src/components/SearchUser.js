import "./styles/SearchUser.css";

const SearchUser = (
  {setSearchString}
) => {
  return (
    <div className="SearchUser">
      <input placeholder="Search User" onChange={e => setSearchString(e.target.value)}/>
      {/* <input placeholder="Search User"/>  */}
    </div>
  );
}

export default SearchUser;