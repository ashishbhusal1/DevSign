import { useEffect, useRef, useState } from "react";
import { VscSearch, VscClose } from "react-icons/vsc";

function AppSearch() {
  let [showSearch, setShowSearch] = useState(false);
  let search = useRef(null);
  useEffect(() => {
    if (showSearch) search.current.focus();
  }, [showSearch]);

  return (
    <div className="app-search">
      <h1>Todo List</h1>
      {showSearch ? null : <VscSearch onClick={() => setShowSearch(true)} />}
      {showSearch && (
        <div className="search-box">
          <input type="text" placeholder="Search" ref={search} />
          <VscClose onClick={() => setShowSearch(false)} />
        </div>
      )}
    </div>
  );
}

export default AppSearch;
