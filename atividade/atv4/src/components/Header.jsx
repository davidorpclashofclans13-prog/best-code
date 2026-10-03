function Header({ titulo }) {
  return (
    <header className="site-header">
      <p className="brand-mark">{titulo}</p>
      <p className="brand-tag">notas de um ritual diário</p>
    </header>
  );
}

export default Header;
