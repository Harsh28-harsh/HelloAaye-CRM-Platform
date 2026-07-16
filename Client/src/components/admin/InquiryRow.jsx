import { FaTrash, FaRegEye } from "react-icons/fa";

const InquiryRow = ({ inquiry, index, onDelete , onView }) => {
  const formattedDate = new Date(
    inquiry.createdAt
  ).toLocaleDateString("en-IN", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  return (
    <tr>
      <td>{index + 1}</td>

      <td>{inquiry.fullName}</td>

      <td>{inquiry.companyName}</td>

      <td>{inquiry.email}</td>

      <td>{inquiry.phone}</td>

      <td>{inquiry.country}</td>

      <td>{inquiry.industry}</td>

      <td>{inquiry.companySize}</td>

      <td>{formattedDate}</td>

      <td className="action-buttons">
        <button
          className="view-btn"
          onClick={() => onView(inquiry)}
        >
          <FaRegEye />
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(inquiry._id)}
        >
          <FaTrash />
        </button>
      </td>
    </tr>
  );
};

export default InquiryRow;