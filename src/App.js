import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import './App.css';
import Footer from './component/Pages/Shared/Footer/Footer';
import Header from './component/Pages/Shared/Header/Header';
import AuthProvider from './hooks/AuthProvider/AuthProvider';
import Home from './component/Pages/Home/Home/Home';
import Blog from './component/Pages/Blog/Blog';
import ContactUs from './component/Pages/ContactUs/ContactUs';
import NotFound from './component/Pages/NotFound/NotFound';
import Login from './component/Pages/Login/Login';
import Register from './component/Pages/Register/Register';
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
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/blog">
           <Blog></Blog>
        </Route>
        <Route path="/contact-us">
          <ContactUs></ContactUs>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
        </Switch>
        <Footer></Footer>
      </Router>
    </AuthProvider>
    </div>
  );
}

export default App;
