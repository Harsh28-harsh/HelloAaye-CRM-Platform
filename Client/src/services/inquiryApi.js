import api from "./axios";

export const createInquiry = (data) => {
  return api.post("/inquiry", data);
};

export const getAllInquiries = () => {
  return api.get("/inquiry");
};

export const deleteInquiry = (id) => {
  return api.delete(`/inquiry/${id}`);
};