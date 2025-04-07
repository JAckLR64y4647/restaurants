import { useState } from 'react';

export default function DateTimePicker({ value, onChange }) {
  const [localDate, setLocalDate] = useState(value.toISOString().slice(0, 16));

  const handleChange = e => {
    const newDate = new Date(e.target.value);
    setLocalDate(e.target.value);
    onChange(newDate);
  };

  return (
    <input
      type="datetime-local"
      value={localDate}
      onChange={handleChange}
      className="w-full p-2 border rounded"
      required
    />
  );
}
