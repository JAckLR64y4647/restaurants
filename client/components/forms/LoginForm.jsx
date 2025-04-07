import { useState } from 'react';
import Loader from '../common/Loader';

export default function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="Email" required className="w-full p-2 border rounded" />
      <input type="password" name="password" value={form.password} onChange={handleChange} placeholder="Пароль" required className="w-full p-2 border rounded" />
      <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        {loading ? <Loader size="sm" /> : 'Войти'}
      </button>
    </form>
  );
}
