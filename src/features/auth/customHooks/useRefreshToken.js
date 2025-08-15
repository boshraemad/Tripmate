import { showErrorToast, showSuccessToast } from '../../../utils/toast';
import { useQuery } from '@tanstack/react-query';
import { userRefreshToken } from '../../../services/auth.api';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';
import axios from 'axios';
import { useEffect } from 'react';

export const useRefreshToken = () => {
  const navigate = useNavigate();
  const { refreshToken, accessToken, setAccessToken, setRefreshToken } = useAuth();

  const query = useQuery({
    queryKey: ['refreshToken'],
    queryFn: async () => {
      if (!refreshToken) {
        throw new Error('No refresh token available');
      }
      const response = await userRefreshToken({ refreshToken });
      if (!response.data) {
        throw new Error('Invalid token response');
      }
      return response.data; 
    },
    refetchInterval: 59 * 60 * 1000,
    refetchIntervalInBackground: true,
    staleTime: Infinity,
    retry: false,
    enabled: !!refreshToken, 
  });

  useEffect(() => {
    if (query.data) {
      const { accessToken: newAccessToken, refreshToken: newRefreshToken } = query.data;
      axios.defaults.headers.common['Authorization'] = `Bearer ${newAccessToken}`;
      setAccessToken(newAccessToken);
      setRefreshToken(newRefreshToken);
      localStorage.setItem("accessToken", newAccessToken);
      localStorage.setItem("refreshToken", newRefreshToken);
    }
  }, [query.data, setAccessToken, setRefreshToken]);

  useEffect(() => {
    if (query.error) {
      const errorMessage = query.error?.response?.data?.errors?.[0] || "Your session ended, please login";
      showErrorToast(errorMessage);
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("accessToken");
      setAccessToken(null);
      setRefreshToken(null);
      navigate("/login");
    }
  }, [query.error, navigate, setAccessToken, setRefreshToken]);

  return query;
};