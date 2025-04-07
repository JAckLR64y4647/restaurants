import { useEffect, useState } from 'react';
import { CheckCircle, Info, AlertTriangle, XCircle, X } from 'lucide-react';

const icons = {
  info: <Info className="w-5 h-5" />,
  success: <CheckCircle className="w-5 h-5" />,
  warning: <AlertTriangle className="w-5 h-5" />,
  error: <XCircle className="w-5 h-5" />,
};

export default function Alert({ type = 'info', message, autoClose = 5000 }) {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const timer = autoClose && setTimeout(() => setVisible(false), autoClose);
    return () => clearTimeout(timer);
  }, [autoClose]);

  if (!visible) return null;

  return (
    <div className={`flex items-start p-4 rounded-md shadow-md mb-4 text-sm bg-${type === 'success' ? 'green' : type === 'error' ? 'red' : type === 'warning' ? 'yellow' : 'blue'}-100 text-${type === 'success' ? 'green' : type === 'error' ? 'red' : type === 'warning' ? 'yellow' : 'blue'}-700`}>
      {icons[type]}
      <div className="ml-3 flex-1">{message}</div>
      <button onClick={() => setVisible(false)} className="ml-4">
        <X className="w-4 h-4" />
      </button>
    </div>
  );
}
