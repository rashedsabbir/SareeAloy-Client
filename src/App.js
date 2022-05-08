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
import PrivateRoute from './component/Pages/PrivateRoute/PrivateRoute';
import MyProfile from './component/Pages/MyProfile/MyProfile';
import NewUser from './component/Pages/NewUser/NewUser';
import UpdateProfile from './component/Pages/UpdateProfile/UpdateProfile';
import GalleryPage from './component/Pages/Home/GalleryPage/GalleryPage';
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
        <PrivateRoute exact path="/home">
          <Home></Home>
        </PrivateRoute>
        <Route path="/register">
          <Register></Register>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
        <PrivateRoute path="/NewUser">
          <NewUser></NewUser>
        </PrivateRoute>
        <PrivateRoute path="/my-profile">
          <MyProfile></MyProfile>
        </PrivateRoute>
        <PrivateRoute path="/update-profile">
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
        <Route  path="/gallery">
          <GalleryPage></GalleryPage>
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
