import useNav from "../../hooks/useNav";

export default function Link({ href, children, state = {} }) {
  const { setHistoryState } = useNav();
  const onClick = (e) => {
    e.preventDefault();
    setHistoryState(state);
    window.history.pushState({ ...state, page: href }, href, `#${href}`);
    return false;
  };

  return <a onClick={onClick}>{children}</a>;
}
