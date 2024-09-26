export const Nav = ({ id, name, currentNav, setCurrentNav }) => {
  return (
    <li className="nav-item">
      <a
        className={`nav-link ${currentNav === id ? "active" : ""}`}
        aria-current="page"
        href="#"
        onClick={() => {
          setCurrentNav(id);
        }}
      >
        {name}
      </a>
    </li>
  );
};
