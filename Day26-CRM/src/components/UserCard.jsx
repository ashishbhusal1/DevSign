function UserCard ({ info }) {
      return (
            <div className="userbasic">
                  <div className="image">
                        <img src={info.image} alt={info.fname} />
                  </div>
                  <div className="info">
                        <h4>{ info.fname + ' ' + info.lname }</h4>
                        <p>{ info.email }</p>
                  </div>
            </div>
      );
}

export default UserCard;