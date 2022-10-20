import css from './App.module.css';
import NavBarForm from './components/NavBarForm';
import Sidebar from './components/Sidebar';
import ContentAPI from './components/ContentAPI';

function App() {
  return (
    <div className={css.App}>
      {/* Add your components here */}
      <NavBarForm />
      <Sidebar />
      <ContentAPI />
    </div>
  );
}

export default App;