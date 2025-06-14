import React, { forwardRef } from "react";
import styles from "./GlassyInput.module.scss";

interface GlassyInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  buttonLabel?: string;
  onButtonClick?: () => void;
  buttonType?: "button" | "submit";
}

const GlassyInput = forwardRef<HTMLInputElement, GlassyInputProps>(
  (
    {
      className = "",
      buttonLabel = "Request Demo",
      onButtonClick,
      buttonType = "button",
      ...props
    },
    ref
  ) => (
    <div className={styles.glassyInputWrap}>
      <input
        ref={ref}
        className={`${styles.glassyInput} ${className}`}
        {...props}
      />
      <button
        type={buttonType}
        className={styles.button}
        // onClick={onButtonClick}
      >
        {buttonLabel}
      </button>
    </div>
  )
);

GlassyInput.displayName = "GlassyInput";

export default GlassyInput;
