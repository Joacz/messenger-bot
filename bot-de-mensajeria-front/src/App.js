import './App.css';
import Nav from './components/Nav';
import NavItem from './components/NavItem';
import User from './components/User';
import Mensaje from './components/Mensaje';
import Categoria from './components/Categoria';

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
          CREAR
        </NavItem>
      </Nav>
      <div className='contenedor-principal'>
        <div className='contenedor-categorias'>
          <div className='contenedor-titulo-categorias'>
            <h2>MENSAJES</h2> <h2>CATEGORIAS</h2>
          </div>
          <div className='contenedor-mensaje'>
            <Mensaje contenido={'Hola ¿cómo andás?'} />
            <Categoria nombre={'Informales'} />
          </div>
          <div className='contenedor-mensaje'>
            <Mensaje contenido={'Hola, Disculpe si molesto...'} />
            <Categoria nombre={'Formales'} />
          </div>
          <div className='contenedor-mensaje'>
            <Mensaje contenido={'Te quiero mucho'} />
            <Categoria nombre={'Amor'} />
          </div>
          <div className='contenedor-mensaje'>
            <Mensaje contenido={'Hola grupo!'} />
            <Categoria nombre={'Grupales'} />
          </div>
        </div>
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
