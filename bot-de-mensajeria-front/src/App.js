import './App.css';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import User from './components/User';

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
      <div className='contenedor-principal'>
        <div className='contenedor-categoria'></div>
        <div className='contenedor-titulo'>
          <div className='titulo'>
            <h1>Bienvenido/a</h1>
            <p>
              Puedes configurar los mensajes por categoría y usuario, aquí
              tienes una lista de mensajes predeterminados
            </p>
          </div>
          <div className='contenedor-usuarios'>
            <h2>PERFIL</h2>
            <User name='Joaquín' email='joaquin@example.com' isAdmin={true} />
            <h2>USUARIOS</h2>
            <User
              name='Gustavo Fring'
              email='gusfring@example.com'
              isAdmin={false}
            />
            <User
              name='Philip J. Fry'
              email='philipfry@example.com'
              isAdmin={false}
            />
            <User
              name='Walter White'
              email='walt@example.com'
              isAdmin={false}
            />
            <User name='Mom' email='mommy1@example.com' isAdmin={false} />
            <User name='Boss' email='boss@example.com' isAdmin={false} />
            <User name='Lawyer' email='mylawyer@example.com' isAdmin={false} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
