import { useEffect, useMemo, useState } from "react";
import { toast } from "react-toastify";
import InquiryModal from "../components/admin/InquiryModal";
import {
  getAllInquiries,
  deleteInquiry,
} from "../services/inquiryApi";

import Loader from "../components/common/Loader";
import InquiryTable from "../components/admin/InquiryTable";
import SearchBar from "../components/admin/SearchBar";
import StatsCard from "../components/admin/StatsCard";

import "../styles/admin.css";

const AdminDashboard = () => {
  const [inquiries, setInquiries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
const [selectedInquiry, setSelectedInquiry] = useState(null);
  const fetchInquiries = async () => {
    try {
      setLoading(true);

      const res = await getAllInquiries();

      setInquiries(res.data.data);
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Failed to fetch inquiries."
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchInquiries();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this inquiry?"
    );

    if (!confirmDelete) return;

    try {
      await deleteInquiry(id);

      toast.success("Inquiry deleted successfully.");

      setInquiries((prev) =>
        prev.filter((item) => item._id !== id)
      );
    } catch (error) {
      toast.error(
        error.response?.data?.message ||
          "Delete failed."
      );
    }
  };

  const filteredInquiries = useMemo(() => {
    const keyword = search.toLowerCase();

    return inquiries.filter((item) => {
      return (
        item.fullName.toLowerCase().includes(keyword) ||
        item.companyName.toLowerCase().includes(keyword) ||
        item.email.toLowerCase().includes(keyword)
      );
    });
  }, [search, inquiries]);

  if (loading) {
    return <Loader />;
  }

  return (
    <section className="admin-page">

      <div className="container">

        <div className="admin-header">

          <div>
            <h1>Admin Dashboard</h1>
            <p>Manage all customer inquiries.</p>
          </div>

          <StatsCard
            title="Total Inquiries"
            value={filteredInquiries.length}
          />

        </div>

        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        {filteredInquiries.length === 0 ? (
          <div className="empty-state">
            No inquiries found.
          </div>
        ) : (
          <InquiryTable
    inquiries={filteredInquiries}
    onDelete={handleDelete}
    onView={setSelectedInquiry}
/>

        )}
        <InquiryModal
    inquiry={selectedInquiry}
    onClose={() => setSelectedInquiry(null)}
/>

      </div>

    </section>
  );
};

export default AdminDashboard;