import { useState, useEffect } from "react";
import axios from "axios";
import { Header, RowHeader, Row, Skeleton, ContactDetails } from "../components";

function Contacts() {
  const [users, setUsers] = useState([]);
  const [canDelete, setCanDelete] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    const fetchAllContacts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/users?limit=15");
        const usersWithSelected = response.data.users.map(user => ({
          ...user,
          selected: false
        }));
        setUsers(usersWithSelected);
      } catch (error) {
        console.error(error);
      }
    };
    fetchAllContacts();
  }, []);

  useEffect(() => {
    // Automatically update canDelete when users' selected state changes
    const anySelected = users.some(user => user.selected);
    setCanDelete(anySelected);
  }, [users]); // Dependency on users to recalculate on their update

  const handleUserSelect = (user) => {
    setSelectedUser(user);
    
  };

  const handleToggleSelect = (userId) => {
    const updatedUsers = users.map(user =>
      user.id === userId ? { ...user, selected: !user.selected } : user
    );
    setUsers(updatedUsers);
  };

  const handleCloseDetails = () => {
    setSelectedUser(null);
  };

  const deleteSelectedUsers = () => {
    setUsers(users.filter(user => !user.selected));
    setCanDelete(false);
    
  };

  if (selectedUser) {
    return <ContactDetails user={selectedUser} onClose={handleCloseDetails} />;
  }

  return (
    <div className="contacts-page">
      <Header count={users.length} del={canDelete} onDelete={deleteSelectedUsers} />
      {users.length === 0 ? <Skeleton /> : (
        <div className="contacts-table">
          <RowHeader />
          {users.map(user => (
            <Row
              key={user.id}
              user={user}
              onSelect={() => handleUserSelect(user)}
              onToggleSelect={handleToggleSelect}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Contacts;
