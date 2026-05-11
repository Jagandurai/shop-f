"use client";

import { createContext, useContext, useState } from "react";

const BookingContext = createContext(null);

export const BookingProvider = ({ children }) => {
  const [showForm, setShowForm] = useState(false);

  const toggleForm = () => setShowForm((prev) => !prev);
  const openForm = () => setShowForm(true);
  const closeForm = () => setShowForm(false);

  return (
    <BookingContext.Provider
      value={{ showForm, toggleForm, openForm, closeForm }}
    >
      {children}
    </BookingContext.Provider>
  );
};

export const useBookingContext = () => {
  const context = useContext(BookingContext);

  if (!context) {
    throw new Error("useBookingContext must be used within BookingProvider");
  }

  return context;
};