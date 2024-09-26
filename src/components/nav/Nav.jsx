export const Nav = ({ name, isActive, setActive }) => {
  return (
    <a
      className={`nav-link ${isActive ? "active" : ""}`}
      aria-current="page"
      href="#"
      onClick={setActive}
    >
      {name}
    </a>
  );
};
