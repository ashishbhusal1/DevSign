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

export default {
  Notification,
  CompleteTaskItem,
};
