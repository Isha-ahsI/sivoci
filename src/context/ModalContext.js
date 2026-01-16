import React, { createContext, useContext, useState } from "react";

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
  const [showSignup, setShowSignup] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showInfo, setShowInfo] = useState(false);
  const [selectedUserIndex, setSelectedUserIndex] = useState(null);

  const handleShowInfo = (index) => {
    setSelectedUserIndex(index);
  setShowInfo(true);
  };

  const handleSignupOpen = () => {
    setShowLogin(false);
    setShowSignup(true);
  };

  const handleLoginOpen = () => {
    setShowSignup(false);
    setShowLogin(true);
  };



  const handleClose = () => {
    setShowSignup(false);
    setShowLogin(false);
    setShowInfo(false);
    setSelectedUserIndex(null);
  };

  return (
    <ModalContext.Provider
      value={{
        showSignup,
        showLogin,
        showInfo,
        handleSignupOpen,
        handleLoginOpen,
        handleClose,
        handleShowInfo,
        selectedUserIndex,
        setSelectedUserIndex

      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

// Custom hook for easy use
export const useModal = () => useContext(ModalContext);
