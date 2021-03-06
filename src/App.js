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
import InventoryPage from './component/Pages/InventoryPage/InventoryPage/InventoryPage';
import InventoryId from './component/Pages/InventoryPage/InventoryId/InventoryId';
import Delivered from './component/Pages/Delivered/Delivered';

import ManageAllItems from './component/Pages/ManageAllItems/ManageAllItems';
import MyItem from './component/Pages/MyItem/MyItem';
import AddItem from './component/Pages/AddItem/AddItem';


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
        <Route exact path="/inventory">
          <InventoryPage></InventoryPage>
        </Route>
        
        <PrivateRoute path="/booking-complete">
          <Delivered></Delivered>
        </PrivateRoute>
        <PrivateRoute path="/inventory/:id">
          <InventoryId></InventoryId>
        </PrivateRoute>
        <PrivateRoute path="/NewUser">
          <NewUser></NewUser>
        </PrivateRoute>
        <PrivateRoute path="/my-profile">
          <MyProfile></MyProfile>
        </PrivateRoute>
        <PrivateRoute path="/update-profile">
          <UpdateProfile></UpdateProfile>
        </PrivateRoute>
        <PrivateRoute path="/my-order">
          <MyItem></MyItem>
        </PrivateRoute>
        <PrivateRoute path="/add-services">
          <AddItem></AddItem>
        </PrivateRoute>
        <PrivateRoute path="/manage-items">
          <ManageAllItems></ManageAllItems>
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
