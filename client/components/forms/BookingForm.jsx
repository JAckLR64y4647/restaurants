import { useState } from 'react';
import Loader from '../common/Loader';
import DateTimePicker from './DateTimePicker';

export default function BookingForm({ onSubmit }) {
  const [form, setForm] = useState({
    name: '',
    guests: 1,
    date: new Date(),
  });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleDateChange = (date) => {
    setForm({ ...form, date });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Ваше имя" className="w-full p-2 border rounded" required />
      <input type="number" name="guests" value={form.guests} onChange={handleChange} min={1} max={10} className="w-full p-2 border rounded" required />
      <DateTimePicker value={form.date} onChange={handleDateChange} />
      <button type="submit" className="bg-indigo-600 text-white w-full py-2 rounded hover:bg-indigo-700">
        {loading ? <Loader size="sm" /> : 'Забронировать'}
      </button>
    </form>
  );
}
