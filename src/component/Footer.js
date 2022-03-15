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
  font-size: 2rem;
  background-color: pink;
`;

function Header() {
  return (
    <List>
      <Lists>Saiba Mais</Lists>
      <Lists>Contato</Lists>
    </List>
  );
}

export default Header;
