import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./SecondaryButton.module.scss";

interface SecondaryButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  size?: "small" | "default" | "large";
  fullWidth?: boolean;
  href?: string;
  className?: string;
  onClick?: () => void;
}

export const SecondaryButton = ({
  children,
  size = "default",
  fullWidth = false,
  href,
  className = "",
  disabled = false,
  onClick,
  ...props
}: SecondaryButtonProps) => {
  const buttonClasses = [
    styles.secondaryButton,
    size === "small" && styles.small,
    size === "large" && styles.large,
    fullWidth && styles.fullWidth,
    disabled && styles.disabled,
    className,
  ]
    .filter(Boolean)
    .join(" ");

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        {children}
      </a>
    );
  }

  return (
    <button
      className={buttonClasses}
      disabled={disabled}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  );
};
