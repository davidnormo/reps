import { VNode } from "preact";
import useNav, { Page } from "../../hooks/useNav";

type RenderableChild = string | number | VNode<any>;

export default function Link({
  href,
  onClick: onClickProp = () => {},
  children,
  state = {},
  className = "",
}: {
  href: Page;
  onClick?: Function;
  children: RenderableChild | RenderableChild[];
  state?: any;
  className?: string;
}) {
  const { setHistoryState } = useNav();
  const onClick = (e: Event) => {
    e.preventDefault();
    onClickProp();
    window.history.pushState({ ...state, page: href }, href, `#${href}`);
    setHistoryState({ ...state, page: href });
    return false;
  };

  return (
    <a onClick={onClick} href={`#${href}`} className={className}>
      {children}
    </a>
  );
}
