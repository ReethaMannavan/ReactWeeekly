import useForm from "../Hooks/useForm";

const CustomHookForm = () => {
  const { values, handleChange } = useForm({ name: "", email: "" });

  return (
    <form>
      <input
        type="text"
        name="name"
        value={values.name}
        onChange={handleChange}
        placeholder="Name"
      />
      <input
        type="email"
        name="email"
        value={values.email}
        onChange={handleChange}
        placeholder="Email"
      />
      <button type="submit">Submit</button>
    </form>
  );
};
export default CustomHookForm;
