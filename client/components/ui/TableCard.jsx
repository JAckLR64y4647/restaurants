export default function TableCard({ table, selected, onSelect }) {
  return (
    <div
      onClick={() => onSelect(table.id)}
      className={`p-4 rounded-lg border transition cursor-pointer ${
        selected ? 'border-blue-500 bg-blue-50' : 'border-gray-200'
      }`}
    >
      <h4 className="font-bold">Стол #{table.number}</h4>
      <p className="text-sm text-gray-500">Мест: {table.seats}</p>
    </div>
  );
}
