import { useState, useEffect } from "react";
import axios from "axios";

// components
import { Header, RowHeader, Row, ViewContact, Skeleton,Modal, AddContact } from "../components";

function Contacts() {
  const [Users, setUsers] = useState([]);
  const [SelectedContact, setSelectedContact] = useState({});
  const [UserSelected, setUserSelected] = useState(false);
  const [UserDetailModal, setUserDetailModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [showAddContactModal,setShowAddContactModal]=useState(false);

  const UserSelectionHandler = (usr) => {
    setUsers(
      Users.map((user) => {
        if (user.id == usr.id) {
          user.selected = !user.selected;
        }
        return user;
      })
    );

    // if user are slected then we can set them to delete
    // check if contacts is selected and
    // set the button enable or disable
    setUserSelected(Users.some((user) => user.selected));
  };



  // view contact detail
  const ViewContactDetail = (user) => {
    setSelectedContact(user);
    setUserDetailModal(true);
  };

  const HideContactDetail = () => {
    setUserDetailModal(false);
  };

  const ShowDeleteModal = () => {
    setShowDeleteModal(!showDeleteModal);
  };

  const AddContactDetail=()=>{
    setShowAddContactModal(!showAddContactModal)
  }

  const promptDelete = () => {
    if (UserSelected) {
      ShowDeleteModal();
    }
  };

    // delete the selected contact
    const DeleteSelectedUser = () => {
      if (UserSelected) {
        setUsers(Users.filter((user) => !user.selected));
        ShowDeleteModal();
      }
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
    <>
      <div className="contacts-page">
        <Header
          count={Users.length}
          selected={UserSelected}
          Delete={promptDelete}
          Add={AddContactDetail}
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
                  onSelect={() => UserSelectionHandler(user)}
                  onView={() => ViewContactDetail(user)}
                />
              );
            })}
          </div>
        )}
      </div>

      {UserDetailModal && (
        <ViewContact selected={SelectedContact} close={HideContactDetail} />
      )}

      {showDeleteModal && (
        <Modal close={ShowDeleteModal} onConfirm={DeleteSelectedUser} />
      )}

      {showAddContactModal && (
        <AddContact />
      )}
    </>
  );
}

export default Contacts;
