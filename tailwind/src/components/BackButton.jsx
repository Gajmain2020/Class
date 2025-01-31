import { useNavigate } from "react-router-dom";

export default function BackButton() {
  const navigate = useNavigate();

  return (
    <button
      onClick={() => navigate(-1)}
      className="mb-4 bg-gray-300 py-2 px-4 rounded hover:bg-gray-400 transition"
    >
      Back
    </button>
  );
}
