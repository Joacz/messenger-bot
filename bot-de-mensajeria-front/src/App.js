import './App.css';
import Nav from './components/Nav';
import NavItem from './components/NavItem';

function App() {
  return (
    <div className='App'>
      <Nav>
        <NavItem isActivo={false} isBrand={true} href={undefined}>
          MESSENGER/BOT
        </NavItem>
        <NavItem isActivo={true} isBrand={false} href='/'>
          INICIO
        </NavItem>
        <NavItem isActivo={false} isBrand={false} href='/categorias'>
          CATEGORIAS
        </NavItem>
      </Nav>
    </div>
  );
}

export default App;
