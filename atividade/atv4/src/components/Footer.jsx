function Footer({ ano, nome }) {
  return (
    <footer className="site-footer">
      <p>
        © {ano} {nome}. Todos os direitos reservados.
      </p>
    </footer>
  );
}

export default Footer;
