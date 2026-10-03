function Navigation({ links }) {
  return (
    <nav className="site-nav" aria-label="Principal">
      <ul>
        {links.map((link) => (
          <li key={link.href}>
            <a href={link.href}>{link.texto}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
