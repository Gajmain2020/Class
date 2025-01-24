import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");

  function handleSubmit() {
    if (email === "") {
      alert("email to daal bsdk");
      return;
    }
    // if i have put something in email then go to that email
    navigate(`/user/${email}`);
    // navigate("/user/" + email);
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">Contact Us</h1>
      <input
        type="text"
        placeholder="Your Name"
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <input
        type="email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder="Your Email"
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <textarea
        placeholder="Your Message"
        className="block w-full p-2 border border-gray-300 rounded"
      />
      <button
        onClick={handleSubmit}
        className="bg-blue-500 text-white px-4 py-2 rounded"
      >
        Submit
      </button>
    </div>
  );
}

export default Contact;
