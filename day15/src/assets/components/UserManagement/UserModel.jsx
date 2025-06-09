import  { useState } from "react";


function EditUserModal({ user, updateUser, closeModal }) {
  const [form, setForm] = useState({ name: user.name, email: user.email });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updateUser({ ...user, ...form });
  };

  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Edit User</h3>
        <form className="userform" onSubmit={handleSubmit}>
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Name"
          />
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <button type="submit">Update</button>
          <button type="button" onClick={closeModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditUserModal;