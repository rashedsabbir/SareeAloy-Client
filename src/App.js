import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Pages/Shared/Footer/Footer';
import Header from './component/Pages/Shared/Header/Header';
import AuthProvider from './hooks/AuthProvider/AuthProvider';
import Home from './component/Pages/Home/Home/Home';

function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
