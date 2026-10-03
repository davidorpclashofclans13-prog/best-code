function Sidebar({ posts }) {
  return (
    <aside id="relacionados" className="sidebar">
      <h2>Posts relacionados</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.titulo}>
            <a href="#artigo">{post.titulo}</a>
            <span>{post.data}</span>
          </li>
        ))}
      </ul>
    </aside>
  );
}

export default Sidebar;
