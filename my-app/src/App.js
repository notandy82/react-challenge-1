import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
import ContentAPIHooks from './components/ContentAPIHooks';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <ContentAPIHooks />
    </div>
  );
}

export default App;