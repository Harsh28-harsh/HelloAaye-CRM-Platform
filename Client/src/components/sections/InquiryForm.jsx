import { useState } from "react";
import { toast } from "react-toastify";
import { validateEmail, validatePhone, isEmpty } from "../../utils/validation";
import { createInquiry } from "../../services/inquiryApi";

import "../../styles/form.css";

const initialState = {
  fullName: "",
  companyName: "",
  email: "",
  phone: "",
  country: "",
  industry: "",
  companySize: "",
  message: "",
};

const InquiryForm = () => {
  const [formData, setFormData] = useState(initialState);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const {
      fullName,
      companyName,
      email,
      phone,
      country,
      industry,
      companySize,
      message,
    } = formData;

    if (
      isEmpty(fullName) ||
      isEmpty(companyName) ||
      isEmpty(email) ||
      isEmpty(phone) ||
      isEmpty(country) ||
      isEmpty(industry) ||
      isEmpty(companySize) ||
      isEmpty(message)
    ) {
      toast.error("Please fill all fields.");
      return false;
    }

    if (!validateEmail(email)) {
      toast.error("Please enter a valid email.");
      return false;
    }

    if (!validatePhone(phone)) {
      toast.error("Phone number must be 10 digits.");
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    try {
      setLoading(true);

      await createInquiry(formData);

      toast.success("Inquiry submitted successfully 🚀");

      setFormData(initialState);
    } catch (error) {
      toast.error(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="contact section" id="contact"  data-aos="fade-up">
      <div className="container">
        <div className="section-title">
          <span>Contact Sales</span>

          <h2>Let's grow your business together</h2>

          <p>Submit your inquiry and our team will contact you shortly.</p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={formData.fullName}
            onChange={handleChange}
          />

          <input
            type="text"
            name="companyName"
            placeholder="Company Name"
            value={formData.companyName}
            onChange={handleChange}
          />

          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
          />

          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />

          <input
            type="text"
            name="country"
            placeholder="Country"
            value={formData.country}
            onChange={handleChange}
          />

          <select
            name="industry"
            value={formData.industry}
            onChange={handleChange}
          >
            <option value="">Select Industry</option>

            <option>Technology</option>

            <option>Healthcare</option>

            <option>Finance</option>

            <option>Education</option>

            <option>Other</option>
          </select>

          <select
            name="companySize"
            value={formData.companySize}
            onChange={handleChange}
          >
            <option value="">Company Size</option>

            <option>1-10 Employees</option>

            <option>11-50 Employees</option>

            <option>51-200 Employees</option>

            <option>200+ Employees</option>
          </select>

          <textarea
            name="message"
            placeholder="Tell us about your requirement"
            rows="5"
            value={formData.message}
            onChange={handleChange}
          />

          <button type="submit" disabled={loading}>
            {loading ? "Submitting..." : "Submit Inquiry"}
          </button>
        </form>
      </div>
    </section>
  );
};
export default InquiryForm;
