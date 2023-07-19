import useNav from "../../hooks/useNav";

export default function Link({ href, children, state = {} }) {
  const { setHistoryState } = useNav();
  const onClick = (e) => {
    e.preventDefault();
    window.history.pushState({ ...state, page: href }, href, `#${href}`);
    setHistoryState({ ...state, page: href });
    return false;
  };

  return (
    <a onClick={onClick} href={`#${href}`}>
      {children}
    </a>
  );
}
