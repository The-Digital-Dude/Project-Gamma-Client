"use client";

import { useState } from "react";
import { useConversation } from "@elevenlabs/react";

import styles from "./AiSupportPopup.module.scss";

export const AiSupportPopup = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isCallActive, setIsCallActive] = useState(false);

  const { startSession, endSession } = useConversation({
    apiKey: process.env.NEXT_PUBLIC_ELEVENLABS_API_KEY!,
    agentId: process.env.NEXT_PUBLIC_AGENT_ID!,
  });

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleConfirm = async () => {
    setIsModalOpen(false);
    setIsCallActive(true);
    try {
      await startSession();
    } catch (error) {
      console.error("Failed to start call:", error);
      setIsCallActive(false);
    }
  };

  const handleEndCall = async () => {
    try {
      await endSession();
    } finally {
      setIsCallActive(false);
    }
  };

  return (
    <>
      <div className={styles.popup}>
        <div className={styles.popupContent}>
          <p className={styles.message}>
            Need help? Talk to our AI Calling Support Agent
          </p>
          {!isCallActive ? (
            <button onClick={handleOpenModal} className={styles.callButton}>
              📞 Call Us
            </button>
          ) : (
            <button
              onClick={handleEndCall}
              className={`${styles.callButton} ${styles.endCall}`}
            >
              🔴 End Call
            </button>
          )}
        </div>
      </div>

      {isModalOpen && !isCallActive && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <h2 className={styles.modalTitle}>Confirm Call</h2>
            <p className={styles.modalMessage}>
              Do you want to start a call with our AI support agent?
            </p>
            <div className={styles.modalActions}>
              <button
                onClick={handleConfirm}
                className={`${styles.modalButton} ${styles.confirmButton}`}
              >
                Yes, Call Now
              </button>
              <button
                onClick={handleCloseModal}
                className={`${styles.modalButton} ${styles.cancelButton}`}
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AiSupportPopup;
