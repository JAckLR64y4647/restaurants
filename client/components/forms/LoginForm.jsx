import { useState } from 'react';
import Loader from '../common/Loader';
import InputField from '../common/InputField';

export default function LoginForm({ onSubmit }) {
  const [form, setForm] = useState({ email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const result = await onSubmit(form);
    if (result.error) {
      setError(result.error);
    }
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="email"
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Введите ваш email"
        required
        error={error}
      />
      <InputField
        type="password"
        label="Пароль"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Введите ваш пароль"
        required
      />
      <button type="submit" className="bg-blue-600 text-white w-full py-2 rounded hover:bg-blue-700">
        {loading ? <Loader size="sm" /> : 'Войти'}
      </button>
    </form>
  );
}
