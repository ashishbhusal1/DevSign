const Storage = window.localStorage;
function useStorage() {
  const GetItem = (key) => {
    let data = Storage.getItem(key);
    return JSON.parse(data);
  };
  const SetItem = (key, value) => {
    return Storage.setItem(key, JSON.stringify(value));
  };
  const RemoveItem = (key) => {
    return Storage.removeItem(key);
  };
  return [GetItem, SetItem, RemoveItem];
}
export default useStorage;
