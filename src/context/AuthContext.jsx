"use client";

import { createContext, useContext, useEffect, useState, useCallback } from "react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { toast } from "react-toastify";

const API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/gallery`;
const AUTH_API_BASE_URL = `${process.env.NEXT_PUBLIC_API_URL}/api/auth`;

const AuthContext = createContext(null);

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [isAdmin, setIsAdmin] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  // Load auth state from localStorage and validate with backend on mount
  useEffect(() => {
    const restoreSession = async () => {
      const storedLogin = localStorage.getItem("isLoggedIn");
      const storedEmail = localStorage.getItem("userEmail");
      
      if (storedLogin === "true" && storedEmail) {
        try {
          // Validate session with backend
          const res = await axios.get(`${AUTH_API_BASE_URL}/me`, {
            headers: { "x-user-email": storedEmail },
          });
          
          if (res.data?.success) {
            setIsLoggedIn(true);
            setUserEmail(storedEmail);
            setIsAdmin(res.data.data.isAdmin || false);
          } else {
            // Session invalid, clear local storage
            localStorage.removeItem("isLoggedIn");
            localStorage.removeItem("userEmail");
          }
        } catch (error) {
          console.error("Session validation error:", error);
          // Session validation failed, clear local storage
          localStorage.removeItem("isLoggedIn");
          localStorage.removeItem("userEmail");
        }
      }
      
      setIsLoading(false);
    };

    restoreSession();
  }, []);

  const login = useCallback(async (email) => {
    let admin = false;
    try {
      const res = await axios.post(`${API_BASE_URL}/check-admin`, { email });
      admin = Boolean(res.data?.success);
    } catch (error) {
      console.error("Admin check error:", error);
    }

    localStorage.setItem("isLoggedIn", "true");
    localStorage.setItem("userEmail", email);
    setIsAdmin(admin);
    setUserEmail(email);
    setIsLoggedIn(true);
    toast.success(`Welcome: ${email}`);
  }, []);

  const googleLogin = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        const { data } = await axios.get(
          "https://www.googleapis.com/oauth2/v3/userinfo",
          { headers: { Authorization: `Bearer ${tokenResponse.access_token}` } }
        );
        if (!data?.email) throw new Error("No email returned by Google");
        await login(data.email);
      } catch (error) {
        console.error("Google popup login error:", error);
        toast.error("Failed to process login.");
      }
    },
    onError: () => {
      toast.error("Google Login Failed");
    },
  });

  const logout = useCallback(() => {
    googleLogout();
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userEmail");
    setIsLoggedIn(false);
    setUserEmail("");
    setIsAdmin(false);
    toast.info("Logged out successfully");
  }, []);

  const value = {
    isLoggedIn,
    userEmail,
    isAdmin,
    isLoading,
    login,
    googleLogin,
    logout,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
