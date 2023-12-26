import "./Rodape.css";

function Rodape() {
  return (
    <footer className="footer">
      <div className="redes">
        <img src="/imagens/fb.png" alt="facebook" />
        <img src="/imagens/tw.png" alt="twitter" />
        <img src="/imagens/ig.png" alt="instagram" />
      </div>
      <div className="logo">
        {" "}
        <img src="/imagens/logo.png" alt="logo" />
      </div>
      <div className="alura">
        <p>Desenvolvido por Alura</p>
      </div>
    </footer>
  );
}

export default Rodape;
