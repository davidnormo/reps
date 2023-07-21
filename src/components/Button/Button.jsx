export default function Button({ children, bgColor = "bg-primary", ...props }) {
  if (!Array.isArray(children)) {
    children = [children];
  }
  return (
    <button
      type="submit"
      className={`text-white ${bgColor} focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center`}
      {...props}
    >
      {children.map((child) =>
        typeof child === "string" ? child.toUpperCase() : child,
      )}
    </button>
  );
}
