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
          {!isCallActive ? (
            <button
              onClick={handleOpenModal}
              className={styles.callButton}
              aria-label="Call Support"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.05.72 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.95.35 1.95.59 3 .72A2 2 0 0 1 22 16.92z"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="currentColor"
                />
              </svg>
              <span className={styles.buttonText}>Talk with our AI Agent</span>
            </button>
          ) : (
            <button
              onClick={handleEndCall}
              className={`${styles.callButton} ${styles.endCall}`}
              aria-label="End Call"
            >
              <svg
                width="32"
                height="32"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx="12" cy="12" r="12" fill="#e53e3e" />
                <path
                  d="M22 16.92v3a2 2 0 0 1-2.18 2A19.86 19.86 0 0 1 3.08 4.18 2 2 0 0 1 5 2h3a2 2 0 0 1 2 1.72c.13 1.05.37 2.05.72 3a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.95.35 1.95.59 3 .72A2 2 0 0 1 22 16.92z"
                  stroke="#fff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="#fff"
                />
              </svg>
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
