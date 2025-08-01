import { BrowserRouter , Routes , Route } from "react-router-dom";
import { Provider } from 'react-redux';
import { store } from "./rtk/store";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Discover from "./pages/Discover";
import HomePageLayout from "./pages/HomePageLayout";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<HomePageLayout/>}/>
          <Route path="discover" element={<Discover/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
      </Routes>
    </BrowserRouter>
    </Provider>
  )
}

export default App
