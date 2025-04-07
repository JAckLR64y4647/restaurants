export default function Footer() {
  return (
    <footer className="bg-gray-100 text-gray-600 text-sm mt-10 px-4 py-6">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
        <p>&copy; {new Date().getFullYear()} Резерват. Все права защищены.</p>
        <div className="flex gap-4">
          <a href="/terms" className="hover:underline">Условия</a>
          <a href="/privacy" className="hover:underline">Конфиденциальность</a>
        </div>
      </div>
    </footer>
  );
}
