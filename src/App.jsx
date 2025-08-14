import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Discover from "./pages/Discover";
import HomePageLayout from "./pages/HomePageLayout";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import VerifyEmail from "./pages/verifyEmail";

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <ReactQueryDevtools open={false}/>
        <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage/>}>
          <Route index element={<HomePageLayout/>}/>
          <Route path="discover" element={<Discover/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/verify" element={<VerifyEmail/>}/>
      </Routes>
    </BrowserRouter>
  </QueryClientProvider>
  )
}

export default App
