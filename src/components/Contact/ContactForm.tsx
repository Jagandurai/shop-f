"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import styles from "./ContactForm.module.scss";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const [disabled, setDisabled] = useState(false);

  const onSubmit = async (data) => {
    try {
      setDisabled(true);

      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/email/contact`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
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
        throw new Error(result.error || "Failed to submit contact form.");
      }

      toast.success("Form submission was successful!");
      reset();
    } catch (e) {
      console.error(e);
      toast.error(
        e.message || "Uh oh. Something went wrong while sending the message."
      );
    } finally {
      setDisabled(false);
    }
  };

  return (
    <section className={styles.contactPage}>
      <div className={styles.overlay}></div>

      <div className={styles.contactContainer}>
        <div className={styles.contactInfo}>
          <span className={styles.badge}>Get In Touch</span>
          <h2>Contact Us</h2>
          <p className={styles.infoIntro}>
            We are here to help. Please get in touch with us using the form or
            the contact details below. Whether it is bridal makeup, beauty
            services, or general enquiries, our team would love to hear from
            you.
          </p>

          <div className={styles.infoCard}>
            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Mobile</span>
              <p>908799220</p>
            </div>

            <div className={styles.infoBlock}>
              <span className={styles.infoLabel}>Shop Opening Hours</span>
              <p>10:00 AM to 8:00 PM</p>
            </div>
          </div>
        </div>

        <div className={styles.contactForm}>
          <div className={styles.formCard}>
            <h3>Send us a Message</h3>

            <form id="contact-form" onSubmit={handleSubmit(onSubmit)} noValidate>
              <div className={styles.formRow}>
                <label className={styles.inputLabel}>Name</label>
                <input
                  type="text"
                  {...register("name", {
                    required: { value: true, message: "Please enter your name" },
                    maxLength: {
                      value: 30,
                      message: "Name must be 30 characters or less",
                    },
                  })}
                  className={styles.formControl}
                  placeholder="Enter your name"
                />
                {errors.name && (
                  <span className={styles.errorMessage}>
                    {errors.name.message}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <label className={styles.inputLabel}>Phone Number</label>
                <input
                  type="tel"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "Please enter your phone number",
                    },
                    pattern: {
                      value: /^[0-9]{10}$/,
                      message: "Please enter a valid 10-digit phone number",
                    },
                  })}
                  className={styles.formControl}
                  placeholder="Enter your phone number"
                />
                {errors.phone && (
                  <span className={styles.errorMessage}>
                    {errors.phone.message}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <label className={styles.inputLabel}>Subject</label>
                <input
                  type="text"
                  {...register("subject", {
                    required: { value: true, message: "Please enter a subject" },
                    maxLength: {
                      value: 75,
                      message: "Subject cannot exceed 75 characters",
                    },
                  })}
                  className={styles.formControl}
                  placeholder="Enter subject"
                />
                {errors.subject && (
                  <span className={styles.errorMessage}>
                    {errors.subject.message}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <label className={styles.inputLabel}>Message</label>
                <textarea
                  rows={4}
                  {...register("message", {
                    required: { value: true, message: "Please enter a message" },
                  })}
                  className={`${styles.formControl} ${styles.textarea}`}
                  placeholder="Write your message here..."
                />
                {errors.message && (
                  <span className={styles.errorMessage}>
                    {errors.message.message}
                  </span>
                )}
              </div>

              <div className={styles.formRow}>
                <button
                  className={styles.submitBtn}
                  disabled={disabled}
                  type="submit"
                >
                  {disabled ? "Submitting..." : "Submit Message"}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer position="top-right" autoClose={2500} hideProgressBar />
    </section>
  );
};

export default ContactForm;