export default function Input({ label, type = 'text', name, value, onChange, placeholder, required }) {
  return (
    <div className="flex flex-col gap-1">
      {label && <label htmlFor={name} className="text-sm font-medium">{label}</label>}
      <input
        type={type}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        required={required}
        className="border rounded p-2 w-full focus:ring-2 focus:ring-blue-500 outline-none"
      />
    </div>
  );
}
