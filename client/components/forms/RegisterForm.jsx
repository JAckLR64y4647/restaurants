import { useState } from 'react';
import Loader from '../common/Loader';
import InputField from '../common/InputField';
import validateEmail from '../utils/validateEmail';

export default function RegisterForm({ onSubmit }) {
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async e => {
    e.preventDefault();
    const emailError = validateEmail(form.email);
    if (emailError) {
      setError(emailError);
      return;
    }
    setError('');
    setLoading(true);
    await onSubmit(form);
    setLoading(false);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <InputField
        type="text"
        label="Имя"
        name="name"
        value={form.name}
        onChange={handleChange}
        placeholder="Имя"
        required
      />
      <InputField
        type="email"
        label="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
        placeholder="Email"
        required
        error={error}
      />
      <InputField
        type="password"
        label="Пароль"
        name="password"
        value={form.password}
        onChange={handleChange}
        placeholder="Пароль"
        required
      />
      <button type="submit" className="bg-green-600 text-white w-full py-2 rounded hover:bg-green-700">
        {loading ? <Loader size="sm" /> : 'Зарегистрироваться'}
      </button>
    </form>
  );
}
