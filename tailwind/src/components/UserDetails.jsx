import React from "react";

function UserDetails({ user }) {
  return (
    <div className="mt-6 p-4 bg-white border border-gray-300 rounded-lg">
      <h3 className="text-lg font-bold">User Details:</h3>
      <p className="mt-2">
        <span className="font-semibold">Name:</span> {user.name || "N/A"}
      </p>
      <p>
        <span className="font-semibold">Email:</span> {user.email || "N/A"}
      </p>
    </div>
  );
}

export default UserDetails;
