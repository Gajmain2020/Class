function Card({ student }) {
  const { name, imgUrl, ...bachaHua } = student; //destructure
  // ... is rest operator
  console.log("this is bacha hua", bachaHua);

  return (
    <div className="container">
      <div>
        <img src={imgUrl} alt="tis is image" />
      </div>
      <div>{name}</div>
      {/* <div>{student.rollNo}</div>
        <div>{student.dob}</div>
        <div>{student.blood}</div> */}
    </div>
  );
}

export default Card;
