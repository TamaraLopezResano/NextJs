"use client";
import { useState } from 'react';

export default function Checkbox({ label, checked, onChange }) {
  const [isChecked, setIsChecked] = useState(checked || false);

  const handleCheckboxChange = (e) => {
    setIsChecked(e.target.checked);
    if (onChange) {
      onChange(e.target.checked); 
    }
  };

  return (
    <div>
      <label>
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        {label}
      </label>
    </div>
  );
}
