import styled from "styled-components";

const Cashier = styled.ul`
  
  list-style: none;
  font-size: 1.3rem;
  background-color: LavenderBlush;
  line-height: 42px;
`;

function Main() {
  return (
    <Cashier>
      <h2>O que é um HTML?</h2>
      <p>
        Sigla para HyperText Markup Language — Linguagem de Marcação de
        Hipertexto —, o HTML é o componente base da web. Isso quer dizer que ele
        permite a construção de websites e a inserção de novos conteúdos, como
        imagens e vídeos, por meio dos hipertextos.{" "}
      </p>
      <h2>O que é o CSS?</h2>
      <p>
        CSS (Folha de Estilo em Cascata) é o código que você usa para dar estilo
        à sua página Web.
      </p>

      <h2>Para que serve em JS?</h2>
      <p>
        JavaScript é uma linguagem de programação que permite a você implementar
        itens complexos em páginas web — toda vez que uma página da web faz mais
        do que simplesmente mostrar a você informação estática — mostrando
        conteúdo que se atualiza em um intervalo de tempo, mapas interativos ou
        gráficos 2D/3D animados, etc.
      </p>
    </Cashier>
  );
}

export default Main;
