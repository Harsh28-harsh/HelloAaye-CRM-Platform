import { FaTimes } from "react-icons/fa";

const InquiryModal = ({ inquiry, onClose }) => {
  if (!inquiry) return null;

  const formattedDate = new Date(inquiry.createdAt).toLocaleString("en-IN", {
    dateStyle: "medium",
    timeStyle: "short",
  });

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="close-btn" onClick={onClose}>
          <FaTimes />
        </button>

        <h2>Inquiry Details</h2>

        <div className="modal-grid">
          <p><strong>Name:</strong> {inquiry.fullName}</p>
          <p><strong>Company:</strong> {inquiry.companyName}</p>
          <p><strong>Email:</strong> {inquiry.email}</p>
          <p><strong>Phone:</strong> {inquiry.phone}</p>
          <p><strong>Country:</strong> {inquiry.country}</p>
          <p><strong>Industry:</strong> {inquiry.industry}</p>
          <p><strong>Company Size:</strong> {inquiry.companySize}</p>
          <p><strong>Created:</strong> {formattedDate}</p>
        </div>

        <div className="message-box">
          <h4>Message</h4>
          <p>{inquiry.message}</p>
        </div>
      </div>
    </div>
  );
};

export default InquiryModal;