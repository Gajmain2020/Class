import { useParams } from "react-router-dom";

export default function UserDetails() {
  const { userId } = useParams();

  return (
    <div className="bg-green-400">
      The user details will be shown here
      <div>the user id is :: {userId}</div>
    </div>
  );
}
