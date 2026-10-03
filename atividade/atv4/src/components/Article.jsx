function Article({ titulo, autor, data, conteudo }) {
  return (
    <article id="artigo" className="post">
      <p className="kicker">Preparação</p>
      <h1>{titulo}</h1>
      <p className="meta">
        Por <span className="author">{autor}</span>
        <time>{data}</time>
      </p>
      {conteudo.map((paragrafo) => (
        <p key={paragrafo}>{paragrafo}</p>
      ))}
    </article>
  );
}

export default Article;
