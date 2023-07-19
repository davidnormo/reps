export default function Card({ children, onClose }) {
  return (
    <div className="block relative max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow">
      {onClose && (
        <div className="absolute top-2 right-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            width="25"
            height="25"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </div>
      )}
      {children}
    </div>
  );
}
