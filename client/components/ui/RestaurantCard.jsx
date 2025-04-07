export default function RestaurantCard({ restaurant, onClick }) {
  return (
    <div
      onClick={onClick}
      className="bg-white rounded-xl shadow hover:shadow-md transition p-4 cursor-pointer"
    >
      <img src={restaurant.image} alt={restaurant.name} className="w-full h-40 object-cover rounded-lg" />
      <h3 className="text-lg font-semibold mt-2">{restaurant.name}</h3>
      <p className="text-sm text-gray-600">{restaurant.description}</p>
    </div>
  );
}
