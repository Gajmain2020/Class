function Card({ user }) {
  return (
    <div className="card">
      <h3>User Information</h3>
      <p>
        <b>Name:</b>
        {user.name}
      </p>
      <p>
        <b>Email:</b>
        {user.email}
      </p>
      <p>
        <b>Age:</b>
        {user.age}
      </p>
    </div>
  );
}

export default Card;
