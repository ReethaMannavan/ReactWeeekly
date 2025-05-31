
import  { useState } from "react";

const FormValidationApp=()=> {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: ""
  });

  const [touched, setTouched] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validateForm = (data) => {
    const newErrors = {};

    if (!data.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (data.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!data.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      newErrors.email = "Email is invalid.";
    }

    if (!data.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^\d{10}$/.test(data.phone)) {
      newErrors.phone = "Phone must be 10 digits.";
    }

    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));

    setTouched((prev) => ({
      ...prev,
      [name]: true
    }));

    const newErrors = validateForm({
      ...formData,
      [name]: value
    });

    setErrors(newErrors);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateForm(formData);
    setErrors(validationErrors);
    setTouched({
      name: true,
      email: true,
      phone: true
    });

    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
    } else {
      setIsSubmitted(false);
    }
  };

  return (
    <div className="form-container1">
      <h2>3.Form Validation</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-group1">
          <label>Name:</label>
          <input
            name="name"
            type="text"
            className="form-input"
            value={formData.name}
            onChange={handleChange}
          />
          {touched.name && errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group1">
          <label>Email:</label>
          <input
            name="email"
            type="email"
             className="form-input"
            value={formData.email}
            onChange={handleChange}
          />
          {touched.email && errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group1">
          <label>Phone:</label>
          <input
            name="phone"
            type="text"
             className="form-input"
            value={formData.phone}
            onChange={handleChange}
          />
          {touched.phone && errors.phone && <span className="error">{errors.phone}</span>}
        </div>

        <button type="submit" className="form-btn">Submit</button>
      </form>

      {isSubmitted && <div className="success">Form submitted successfully!</div>}
    </div>
  );
}
export default FormValidationApp;