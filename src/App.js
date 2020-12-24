import './App.css';
import ContactsContextProvider from './Contexts/ContactsContext';
import Routes from './Routes';

function App() {
  return (
    <ContactsContextProvider>
      <Routes/>
    </ContactsContextProvider>
  );
}

export default App;
