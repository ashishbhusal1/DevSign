function Skeleton() {
  let User = [1, 2, 3];

  return (
    <ul className="skeletion" style={{ width: "320px" }}>
      {User.map((user) => {
        return (
          <li key={user}>
            <div className="sk-image">
              <span className="skgreylight"></span>
            </div>
            <div className="sk-content">
              <div className="sk-title">
                <span className="skgreydark"></span>
              </div>
              <div className="sk-title-long">
                <span className="skgreylight"></span>
              </div>
            </div>
          </li>
        );
      })}
    </ul>
  );
}

export default Skeleton;
