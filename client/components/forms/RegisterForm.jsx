import { useState } from 'react';
import Loader from '../common/Loader';

export default function RegisterForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="text" name="name" value={form.name} onChange={handleChange} placeholder="Имя" required className="w-full p-2 border rounded" />
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Пароль" required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
        {loading ? <Loader size="sm" /> : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
