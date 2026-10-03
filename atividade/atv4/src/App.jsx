import Header from "./components/Header.jsx";
import Navigation from "./components/Navigation.jsx";
import Article from "./components/Article.jsx";
import Sidebar from "./components/Sidebar.jsx";
import Footer from "./components/Footer.jsx";
import "./App.css";

function App() {
  const blog = {
    titulo: "Café de Casa",
  };

  const post = {
    titulo: "O ritual que cabe numa xícara",
    autor: "Marina Alves",
    data: "28 de agosto de 2026",
    conteudo: [
      "Durante anos eu tratava o café como combustível: cápsula, botão, primeira reunião. O gosto era o de sempre e a pressa também. O que mudou não foi um curso caro nem uma máquina nova. Foi perceber que o intervalo entre moer o grão e a primeira golada é o único pedaço do dia que ainda me pertence inteiro.",
      "Um café especial não precisa de teatro. Precisa de três coisas que cabem numa cozinha pequena: grão com data de torra, água na temperatura certa e atenção. Quando a água passa rápido demais, a xícara fica ácida e fina. Quando demora, fica amarga.",
      "Uso uma balança de cozinha, um filtro de papel e uma chaleira. A proporção que mais me agrada é 15 gramas de café para 250 ml de água, moagem média, água por volta de 92 °C. É um ponto de partida que eu repito até o sabor ficar familiar o bastante para eu notar quando algo saiu diferente.",
    ],
  };

  const links = [
    { href: "#artigo", texto: "Artigo" },
    { href: "#relacionados", texto: "Relacionados" },
  ];

  const relacionados = [
    { titulo: "Água: o ingrediente que ninguém fotografa", data: "12 de agosto de 2026" },
    { titulo: "Moagem fina demais e o amargor que aparece depois", data: "3 de agosto de 2026" },
    { titulo: "Como ler a data de torra no pacote", data: "21 de julho de 2026" },
  ];

  return (
    <>
      <Header titulo={blog.titulo} />
      <Navigation links={links} />
      <main className="layout">
        <Article
          titulo={post.titulo}
          autor={post.autor}
          data={post.data}
          conteudo={post.conteudo}
        />
        <Sidebar posts={relacionados} />
      </main>
      <Footer ano={2026} nome={blog.titulo} />
    </>
  );
}

export default App;
