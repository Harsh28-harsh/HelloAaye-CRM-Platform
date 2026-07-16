export const validateEmail = (email) => {
  const regex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  return regex.test(email.trim());
};

export const validatePhone = (phone) => {
  return /^[0-9]{10}$/.test(phone.trim());
};

export const isEmpty = (value) => {
  return value.trim() === "";
};