"use client";

import React, { useState } from "react";
import { Dialog, DialogBackdrop, DialogPanel } from "@headlessui/react";
import { XMarkIcon } from "@heroicons/react/24/outline";
import { useBookingContext } from "./BookingContext";
import styles from "./Booking.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Booking = () => {
  const { showForm, toggleForm } = useBookingContext();

  const [formData, setFormData] = useState({
    firstName: "",
    phoneNumber: "",
    date: "",
    message: "",
    serviceName: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateForm = () => {
    const newErrors = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First Name is required";
    }

    if (!formData.phoneNumber.trim()) {
      newErrors.phoneNumber = "Phone Number is required";
    } else if (!/^\d{10}$/.test(formData.phoneNumber)) {
      newErrors.phoneNumber = "Phone number must be 10 digits";
    }

    if (!formData.date) {
      newErrors.date = "Date is required";
    }

    if (!formData.serviceName.trim()) {
      newErrors.serviceName = "Service Name is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      phoneNumber: "",
      date: "",
      message: "",
      serviceName: "",
    });
    setErrors({});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fix the errors in the form.");
      return;
    }

    try {
      setIsSubmitting(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/email/booking`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const contentType = response.headers.get("content-type");

      let result;
      if (contentType && contentType.includes("application/json")) {
        result = await response.json();
      } else {
        const text = await response.text();
        throw new Error(text || "Invalid server response");
      }

      if (!response.ok) {
        throw new Error(result.error || "Failed to submit booking.");
      }

      toast.success("Your booking has been submitted successfully!");
      resetForm();
      toggleForm();
    } catch (error) {
      console.error("Error sending booking:", error);
      toast.error(
        error.message ||
          "There was an error while submitting your booking. Please try again."
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleClose = () => {
    toggleForm();
  };

  return (
    <>
      <Dialog
        open={showForm}
        onClose={handleClose}
        className={styles.dialogRoot}
      >
        <DialogBackdrop className={styles.dialogBackdrop} />

        <div className={styles.dialogWrapper}>
          <div className={styles.dialogInner}>
            <DialogPanel className={styles.dialogPanel}>
              <button
                type="button"
                className={styles.modalCloseButton}
                onClick={handleClose}
                aria-label="Close booking form"
              >
                <XMarkIcon className={styles.closeIcon} />
              </button>

              <div className={styles.formContainer}>
                <div className={styles.imageContainer}>
                  <img
                    src="https://res.cloudinary.com/dtiaycw2o/image/upload/v1756199685/bookingform3_blcgfb.jpg"
                    alt="Booking form"
                    className={styles.image}
                  />
                </div>

                <div className={styles.formContent}>
                  <form onSubmit={handleSubmit}>
                    <h1 className={styles.heading}>BOOK NOW</h1>

                    <div className={styles.formRow}>
                      <div className={styles.nameField}>
                        <input
                          type="text"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          placeholder="First Name"
                        />
                        {errors.firstName && (
                          <p className={styles.errorMessage}>
                            {errors.firstName}
                          </p>
                        )}
                      </div>

                      <div className={styles.contactField}>
                        <input
                          type="tel"
                          name="phoneNumber"
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          placeholder="Phone Number"
                        />
                        {errors.phoneNumber && (
                          <p className={styles.errorMessage}>
                            {errors.phoneNumber}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={styles.formRow}>
                      <div className={styles.dateField}>
                        <input
                          type="date"
                          name="date"
                          value={formData.date}
                          onChange={handleChange}
                          min={new Date().toISOString().split("T")[0]}
                        />
                        {errors.date && (
                          <p className={styles.errorMessage}>{errors.date}</p>
                        )}
                      </div>

                      <div className={styles.serviceNameField}>
                        <input
                          type="text"
                          name="serviceName"
                          value={formData.serviceName}
                          onChange={handleChange}
                          placeholder="Service Name"
                        />
                        {errors.serviceName && (
                          <p className={styles.errorMessage}>
                            {errors.serviceName}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className={styles.messageField}>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        rows="4"
                      />
                    </div>

                    <div className={styles.buttonGroup}>
                      <button
                        type="submit"
                        className={styles.bookButton}
                        disabled={isSubmitting}
                      >
                        {isSubmitting ? "Submitting..." : "Book Now"}
                      </button>
                      
                    </div>
                  </form>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </>
  );
};

export default Booking;