import React, { useState } from 'react';

function ImageComponent({ imageUrl }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <img src={imageUrl} alt="عکس" onClick={openModal} />
      {isModalOpen && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal">
            <img src={imageUrl} alt="تصویر بزرگ" />
            <button onClick={closeModal}>بستن</button>
          </div>
        </div>
      )}
    </div>
  );
}

export default ImageComponent;
