import React, { useState } from "react";

const CustomApp = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
      setIsModalOpen(true);
    };
  
    const closeModal = () => {
      setIsModalOpen(false);
    };
  
  return (
    <>
      <Button onClick={openModal}>Open Modal</Button>
      <Modal isOpen={isModalOpen} onClose={closeModal}>
        <h1 className="text-xl font-semibold mb-4">Modal Title</h1>
        <p className="mb-4">This is the modal content.</p>
        <Button onClick={closeModal}>Close Modal</Button>
      </Modal>
    </>
  );
};

const Button: React.FC<{ onClick: () => void }> = ({ children, onClick }) => {
    return (
      <button
        onClick={onClick}
        className="px-4 py-2 bg-blue-500 text-white font-semibold rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
      >
        {children}
      </button>
    );
  };

export default CustomApp;

const Modal: React.FC<{ isOpen: boolean; onClose: () => void; children: React.ReactNode }> = ({ isOpen, onClose, children }) => {
    if (!isOpen) return null;
  
    return (
      <>
        <div className="fixed `inset`-0 bg-gray-500 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-sm w-full relative">
            <button
              onClick={onClose}
              className="absolute top-2 right-2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              &times;
            </button>
            {children}
          </div>
        </div>
      </>
    );
  };
  