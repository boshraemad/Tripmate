import { BrowserRouter , Routes , Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import Discover from "./pages/Discover";
import HomePageLayout from "./pages/HomePageLayout";
import { QueryClient , QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import VerifyEmail from "./pages/verifyEmail";
import ForgetPassword from "./pages/ForgetPassword";
import ResetPassword from "./pages/ResetPassword";
import AuthProvider from "./features/auth/components/AuthContext";
import { useRefreshToken } from "./features/auth/customHooks/useRefreshToken";
import ProtectedRoute from "./pages/ProtectedRoute";

const queryClient = new QueryClient();

function App() {
  return (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
    <ReactQueryDevtools open={false}/>
        <BrowserRouter>
        <AppRefresher/>
      <Routes>
        <Route path="/" element={<ProtectedRoute><HomePage/></ProtectedRoute>}>
          <Route index element={<HomePageLayout/>}/>
          <Route path="discover" element={<Discover/>}/>
        </Route>
        <Route path="/login" element={<LoginPage/>}/>
        <Route path="/register" element={<RegisterPage/>}/>
        <Route path="/verify" element={<VerifyEmail/>}/>
        <Route path="/forgot-password" element={<ForgetPassword/>}/>
        <Route path="/reset-password" element={<ResetPassword/>}/>
      </Routes>
    </BrowserRouter>
    </AuthProvider>
  </QueryClientProvider>
  )
}

const AppRefresher=()=>{
  useRefreshToken();
}
export default App
