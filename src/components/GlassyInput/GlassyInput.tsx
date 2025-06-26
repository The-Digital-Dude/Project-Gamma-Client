import React, { forwardRef } from "react";
import styles from "./GlassyInput.module.scss";
import { Button } from "../ui-elements/Button/Button";

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
      <Button
        type={buttonType}
        className={styles.button}
        // onClick={onButtonClick}
      >
        {buttonLabel}
      </Button>
    </div>
  )
);

GlassyInput.displayName = "GlassyInput";

export default GlassyInput;
