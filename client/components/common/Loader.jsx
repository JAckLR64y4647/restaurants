export default function Loader({ size = 'md', fullScreen = false }) {
  const sizes = {
    sm: 'w-4 h-4 border-2',
    md: 'w-6 h-6 border-4',
    lg: 'w-10 h-10 border-4',
  };

  const loader = (
    <div className={`${sizes[size]} border-gray-300 border-t-blue-500 rounded-full animate-spin`}></div>
  );

  if (fullScreen) {
    return (
      <div className="fixed inset-0 z-50 bg-white bg-opacity-60 flex items-center justify-center">
        {loader}
      </div>
    );
  }

  return <div className="flex items-center justify-center py-4">{loader}</div>;
}
