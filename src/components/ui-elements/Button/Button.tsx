import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from "./Button.module.scss";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "default" | "outline";
  size?: "small" | "default" | "large";
  fullWidth?: boolean;
  href?: string;
  className?: string;
}

export const Button = ({
  children,
  variant = "default",
  size = "default",
  fullWidth = false,
  href,
  className = "",
  disabled = false,
  ...props
}: ButtonProps) => {
  const buttonClasses = [
    styles.button,
    variant === "outline" && styles.outline,
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
    <button className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};
