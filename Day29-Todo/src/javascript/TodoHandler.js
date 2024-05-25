/**
 * This function will show and hide notification
 * @param {String} title Notification title
 * @param {Integer} duration duration to show and hide notification in second
 * @param {Function} setFunc setShowNotification to update state
 * @returns {void} Noting return
 */
const Notification = (title, duration, setFunc) => {
  // show notification
  setFunc(title);

  // hide notification
  setTimeout(() => {
    setFunc("");
  }, duration * 1000);
};

/**
 * This function will complete selected task
 * @param {Object} todo selected todo
 * @param {Array} TodoList array of all task items -> state
 * @param {Function} setFunc state function to update state
 * @returns {void} Nothing to return
 */
const CompleteTaskItem = (todo, TodoList, setFunc, setNotiFunc) => {
  const toCompleteId = todo.id;
  setFunc(
    TodoList.map((item) => {
      if (item.id == toCompleteId) item.completed = !item.completed;
      return item;
    })
  );

  Notification("Task Updated", 3, setNotiFunc);
};

/**
 * This function opens modal of Edit Item
 * @param {Object} todo selected todo
 * @param {Array} TodoList array of all task items -> state
 * @param {Function} setFunc state function to update TodoList
 * @returns Updated List
 */
const EditTaskItem = (todo, TodoList, setFunc) => {
  setFunc(
    TodoList.map((item) => {
      if (item.id === todo.id) item.editMode = true;
      else item.editMode = false;
      return item;
    })
  );
};

/**
 * This function toggles delete modal
 * @param {Object} todo selected todo
 * @param {*} visible array of all task items -> state
 * @param {*} deleteModal initial modal state
 * @param {*} setDeleteModal function to update delete modal
 * @returns Boolean value of toggled modal
 */
const DeleteBoxToggle = (todo, visible, deleteModal, setDeleteModal) => {
  if (!deleteModal) {
    deleteModal = { show: false, todo: {} };
  }
  if (visible) {
    deleteModal.show = true;
    deleteModal.todo = todo;
  } else {
    deleteModal.show = false;
  }
  setDeleteModal({ ...deleteModal });
};

export default {
  Notification,
  CompleteTaskItem,
  EditTaskItem,
  DeleteBoxToggle,
};
