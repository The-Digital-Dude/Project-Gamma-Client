"use client";

import React, { useState } from "react";
import { PLAN_DETAILS } from "@/config/stripe";
import styles from "./SignupForm.module.scss";

interface SignupFormProps {
  planType: "starter" | "pro" | "enterprise";
  onSubmit: (data: SignupFormData) => Promise<void>;
  isLoading: boolean;
  onClose: () => void;
}

export interface SignupFormData {
  companyName: string;
  abn: string;
  contactPerson: string;
  email: string;
  phone: string;
  region: string;
  compliance: string;
  password: string;
  confirmPassword: string;
  planType: string;
  billingPeriod: string;
}

const REGIONS = [
  "Sydney Metro",
  "Melbourne Metro",
  "Brisbane Metro",
  "Perth Metro",
  "Adelaide Metro",
  "Darwin Metro",
  "Hobart Metro",
  "Canberra Metro",
  "Regional NSW",
  "Regional VIC",
  "Regional QLD",
  "Regional WA",
  "Regional SA",
  "Regional NT",
  "Regional TAS",
];

const COMPLIANCE_OPTIONS = [
  "Basic Package",
  "Basic Compliance",
  "Standard Package",
  "Premium Package",
  "Full Package",
];

const SignupForm: React.FC<SignupFormProps> = ({
  planType,
  onSubmit,
  isLoading,
  onClose,
}) => {
  const [formData, setFormData] = useState<SignupFormData>({
    companyName: "",
    abn: "",
    contactPerson: "",
    email: "",
    phone: "",
    region: "",
    compliance: "",
    password: "",
    confirmPassword: "",
    planType,
    billingPeriod: "monthly",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }
  };

  const validateForm = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!formData.companyName.trim()) {
      newErrors.companyName = "Company name is required";
    }

    if (!formData.abn.trim()) {
      newErrors.abn = "ABN is required";
    } else if (!/^\d{11}$/.test(formData.abn)) {
      newErrors.abn = "ABN must be 11 digits";
    }

    if (!formData.contactPerson.trim()) {
      newErrors.contactPerson = "Contact person is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (
      !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!formData.region) {
      newErrors.region = "Please select a region";
    }

    if (!formData.compliance) {
      newErrors.compliance = "Please select a compliance package";
    }

    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      newErrors.password = "Password must be at least 8 characters";
    }

    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = "Passwords do not match";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    try {
      await onSubmit(formData);
    } catch (error) {
      console.error("Form submission error:", error);
    }
  };

  const selectedPlan = PLAN_DETAILS[planType];

  return (
    <div className={styles.signupModalOverlay}>
      <div className={styles.signupModal}>
        <div className={styles.signupModalHeader}>
          <h2>Start Your RentalEase Journey</h2>
          <p>
            Sign up for the <strong>{selectedPlan.name}</strong>
          </p>
          <button className={styles.closeButton} onClick={onClose}>
            ×
          </button>
        </div>

        <div className={styles.signupModalContent}>
          <div className={styles.planSummary}>
            <h3>{selectedPlan.name}</h3>
            <div className={styles.planPrice}>
              <span className={styles.amount}>{selectedPlan.price}</span>
              {selectedPlan.period && (
                <span className={styles.period}>/{selectedPlan.period}</span>
              )}
            </div>
            <ul className={styles.planFeatures}>
              {selectedPlan.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>

          <form onSubmit={handleSubmit} className={styles.signupForm}>
            <div className={styles.formSection}>
              <h4>Company Information</h4>

              <div className={styles.formGroup}>
                <label htmlFor="companyName">Company Name *</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className={errors.companyName ? styles.error : ""}
                />
                {errors.companyName && (
                  <span className={styles.errorMessage}>
                    {errors.companyName}
                  </span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="abn">ABN *</label>
                <input
                  type="text"
                  id="abn"
                  name="abn"
                  value={formData.abn}
                  onChange={handleChange}
                  placeholder="11 digit ABN"
                  maxLength={11}
                  className={errors.abn ? styles.error : ""}
                />
                {errors.abn && (
                  <span className={styles.errorMessage}>{errors.abn}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="contactPerson">Contact Person *</label>
                <input
                  type="text"
                  id="contactPerson"
                  name="contactPerson"
                  value={formData.contactPerson}
                  onChange={handleChange}
                  className={errors.contactPerson ? styles.error : ""}
                />
                {errors.contactPerson && (
                  <span className={styles.errorMessage}>
                    {errors.contactPerson}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="email">Email *</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? styles.error : ""}
                  />
                  {errors.email && (
                    <span className={styles.errorMessage}>{errors.email}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="phone">Phone *</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={errors.phone ? styles.error : ""}
                  />
                  {errors.phone && (
                    <span className={styles.errorMessage}>{errors.phone}</span>
                  )}
                </div>
              </div>

              <div className={styles.formRow}>
                <div className={styles.formGroup}>
                  <label htmlFor="region">Region *</label>
                  <select
                    id="region"
                    name="region"
                    value={formData.region}
                    onChange={handleChange}
                    className={errors.region ? styles.error : ""}
                  >
                    <option value="">Select Region</option>
                    {REGIONS.map((region) => (
                      <option key={region} value={region}>
                        {region}
                      </option>
                    ))}
                  </select>
                  {errors.region && (
                    <span className={styles.errorMessage}>{errors.region}</span>
                  )}
                </div>

                <div className={styles.formGroup}>
                  <label htmlFor="compliance">Compliance Package *</label>
                  <select
                    id="compliance"
                    name="compliance"
                    value={formData.compliance}
                    onChange={handleChange}
                    className={errors.compliance ? styles.error : ""}
                  >
                    <option value="">Select Package</option>
                    {COMPLIANCE_OPTIONS.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                  {errors.compliance && (
                    <span className={styles.errorMessage}>
                      {errors.compliance}
                    </span>
                  )}
                </div>
              </div>
            </div>

            <div className={styles.formSection}>
              <h4>Account Security</h4>

              <div className={styles.formGroup}>
                <label htmlFor="password">Password *</label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className={errors.password ? styles.error : ""}
                />
                {errors.password && (
                  <span className={styles.errorMessage}>{errors.password}</span>
                )}
              </div>

              <div className={styles.formGroup}>
                <label htmlFor="confirmPassword">Confirm Password *</label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className={errors.confirmPassword ? styles.error : ""}
                />
                {errors.confirmPassword && (
                  <span className={styles.errorMessage}>
                    {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            <div className={styles.formActions}>
              <button
                type="submit"
                className={styles.submitButton}
                disabled={isLoading}
              >
                {isLoading ? "Processing..." : "Continue to Payment"}
              </button>
            </div>

            <p className={styles.termsText}>
              By continuing, you agree to our{" "}
              <a href="/terms-of-service" target="_blank">
                Terms of Service
              </a>{" "}
              and{" "}
              <a href="/privacy-policy" target="_blank">
                Privacy Policy
              </a>
              . You'll start with a 14-day free trial.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
