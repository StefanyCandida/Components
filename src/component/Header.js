import styled from "styled-components";

const Lists = styled.li`
  color: #000;
  color: gray;
  &:hover {
    color: #ff0000;
  }
`;

const List = styled.ul`
  height: 20vh;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  list-style: none;
  font-size: 3rem;
  background-color: pink;
`;
const Img = styled.img`
  height: 15vh;
  width: 15vw;
`;

function Header() {
  return (
    <List>
      <Img
        src="https://1.bp.blogspot.com/-iqeM0lNB84w/V9YGBs_HIFI/AAAAAAAAEqk/8BgZvAqMd6AddJtyWb6qvwNCpvw_87OnQCLcB/s1600/curso-completo-de-front-end-832011-MLB20455460617_102015-O.jpg"
        alt=""
      />
      <Lists>Inicio</Lists>
      <Lists>Galeria</Lists>
      <Lists>Sobre</Lists>
    </List>
  );
}

export default Header;
