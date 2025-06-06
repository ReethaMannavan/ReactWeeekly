import { useState } from "react";

const Checkbox = () => {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <form>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={(e) => setIsChecked(e.target.checked)}
        />
        Accept Terms & Conditions
      </label>
      <p>{isChecked ? "✅ Accepted" : "❌ Not Accepted"}</p>
    </form>
  );
};

export default Checkbox;
