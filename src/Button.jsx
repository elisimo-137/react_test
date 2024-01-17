export function Button(props) {
  return (
    <a href={props.href}>
      <button>{props.children}</button>
    </a>
  );
}
