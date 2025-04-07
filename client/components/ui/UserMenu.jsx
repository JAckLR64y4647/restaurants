import { useState } from 'react';
import { LogOut, User } from 'lucide-react';

export default function UserMenu({ user, onLogout }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 hover:bg-gray-100 p-2 rounded-full"
      >
        <img src={user.avatar || '/avatar.png'} alt="avatar" className="w-8 h-8 rounded-full" />
        <span className="hidden sm:inline">{user.name}</span>
      </button>

      {open && (
        <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg z-10">
          <button className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100">
            <User className="w-4 h-4 mr-2" />
            Профиль
          </button>
          <button
            onClick={onLogout}
            className="flex items-center w-full px-4 py-2 text-sm hover:bg-gray-100 text-red-500"
          >
            <LogOut className="w-4 h-4 mr-2" />
            Выйти
          </button>
        </div>
      )}
    </div>
  );
}
