export default function Button({ children, onClick, type = 'button', className = '', loading }) {
  return (
    <button
      onClick={onClick}
      type={type}
      disabled={loading}
      className={`bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition ${className}`}
    >
      {loading ? 'Загрузка...' : children}
    </button>
  );
}
