export default function Button({ children, ...props }) {
  return (
    <button
      type="submit"
      className="text-white bg-primary focus:ring-4 focus:outline-none focus:ring-cyan-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      {...props}
    >
      {children.toUpperCase()}
    </button>
  );
}
