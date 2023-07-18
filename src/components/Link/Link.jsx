export default function Link({
  href,
  children,
  onClick: onClickProp = () => {},
  state = {},
}) {
  const onClick = (e) => {
    e.preventDefault();
    onClickProp();
    window.history.pushState({ ...state, page: href }, href, `#${href}`);
    return false;
  };

  return <a onClick={onClick}>{children}</a>;
}
