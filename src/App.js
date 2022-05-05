import { BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Footer from './component/Pages/Shared/Footer/Footer';
import Header from './component/Pages/Shared/Header/Header';
import AuthProvider from './hooks/AuthProvider/AuthProvider';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
