import { useState, useEffect } from "react";
import axios from "axios";

// components
import { Header, RowHeader, Row, Skeleton } from "../components";

// import Header from "../components/Header";
// import RowHeader from "../components/RowHeader";
// import Row from "../components/Row";
// import Skeleton from "../components/Skeleton";

function Contacts() {
  const [Users, setUsers] = useState([]);
  const [canDelete, setCanDelete] = useState(false);

  // when user/contact is selected or deselected
  const ContactSelected = (user) => {
    setUsers(
      Users.map((element) => {
        if (element.id == user.id) {
          element.selected = !element.selected;
        }
        return element;
      })
    );
    userCanBeDeleted();
  };
  const userCanBeDeleted = () => {
    setCanDelete(
      Users.some((user) => {
        if (user.selected == true) return true;
      })
    );
  };

  //delete selected users
  const deleteSelectedUsers = () => {
    const filteredUsers = Users.filter((user) => !user.selected);
    setUsers(filteredUsers);
  };

  // load contacts function
  const GetAllContacts = async () => {
    try {
      const response = await axios.get("https://dummyjson.com/users?limit=15");
      setUsers(response.data.users);
    } catch (error) {
      console.error(error);
    }
  };

  // load contacts on mounted
  useEffect(() => {
    GetAllContacts();
  }, []);

  return (
    <div className="contacts-page">
      <Header
        count={Users.length}
        del={canDelete}
        onDelete={deleteSelectedUsers}
      />

      {Users.length === 0 ? (
        <Skeleton />
      ) : (
        <div className="contacts-table">
          <RowHeader />
          {Users.map((user) => {
            return (
              <Row
                key={user.id}
                user={user}
                onSelect={() => ContactSelected(user)}
              />
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Contacts;
