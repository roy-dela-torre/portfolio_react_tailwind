"use client";

import { useState, type ChangeEvent, type FormEvent } from "react";
import { siteConfig } from "@/data/content";
import { containsSpamKeywords, hasExcessiveLinks } from "@/lib/spamFilter";

type FieldValues = { name: string; email: string; message: string };
type FieldErrors = Partial<Record<keyof FieldValues, string>>;
type SubmitState = "idle" | "submitting" | "success" | "network-error";

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate({ name, email, message }: FieldValues): FieldErrors {
  const errors: FieldErrors = {};

  const trimmedName = name.trim();
  if (!trimmedName) {
    errors.name = "Please enter your name.";
  } else if (trimmedName.length < 2) {
    errors.name = "Name is too short.";
  } else if (trimmedName.length > 100) {
    errors.name = "Name is too long.";
  } else if (/https?:\/\/|www\./i.test(trimmedName)) {
    errors.name = "Name can't contain a link.";
  } else if (containsSpamKeywords(trimmedName)) {
    errors.name = "This looks like spam and wasn't sent.";
  }

  const trimmedEmail = email.trim();
  if (!trimmedEmail) {
    errors.email = "Please enter your email.";
  } else if (trimmedEmail.length > 254 || !EMAIL_PATTERN.test(trimmedEmail)) {
    errors.email = "Enter a valid email address.";
  }

  const trimmedMessage = message.trim();
  if (!trimmedMessage) {
    errors.message = "Please enter a message.";
  } else if (trimmedMessage.length < 10) {
    errors.message = "Add a bit more detail (at least 10 characters).";
  } else if (trimmedMessage.length > 2000) {
    errors.message = "Message is too long (max 2000 characters).";
  } else if (containsSpamKeywords(trimmedMessage)) {
    errors.message = "This looks like spam and wasn't sent.";
  } else if (hasExcessiveLinks(trimmedMessage)) {
    errors.message = "Too many links — please remove some and try again.";
  }

  return errors;
}

export default function ContactForm() {
  const [values, setValues] = useState<FieldValues>({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState<FieldErrors>({});
  const [attempted, setAttempted] = useState(false);
  const [status, setStatus] = useState<SubmitState>("idle");

  function handleChange(event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    const { name, value } = event.target;
    const nextValues = { ...values, [name]: value };
    setValues(nextValues);
    if (attempted) setErrors(validate(nextValues));
  }

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setAttempted(true);

    const fieldErrors = validate(values);
    setErrors(fieldErrors);
    if (Object.keys(fieldErrors).length > 0) return;

    const form = event.currentTarget;
    const data = new FormData(form);
    setStatus("submitting");

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: { Accept: "application/json" },
      });
      if (response.ok) {
        setStatus("success");
        form.reset();
        setValues({ name: "", email: "", message: "" });
        setAttempted(false);
      } else {
        setStatus("network-error");
      }
    } catch {
      setStatus("network-error");
    }
  }

  if (status === "success") {
    return (
      <p role="status" className="mx-auto max-w-md text-base text-white/70">
        Thanks for reaching out — I&apos;ll get back to you soon.
      </p>
    );
  }

  return (
    <form
      action={siteConfig.formspreeEndpoint}
      method="POST"
      onSubmit={handleSubmit}
      noValidate
      className="mx-auto max-w-md space-y-5 text-left"
    >
      <div>
        <label htmlFor="contact-name" className="mb-2 block text-sm text-white/70">
          Name
        </label>
        <input
          id="contact-name"
          name="name"
          type="text"
          value={values.name}
          onChange={handleChange}
          aria-invalid={Boolean(errors.name)}
          aria-describedby={errors.name ? "contact-name-error" : undefined}
          autoComplete="name"
          placeholder="Your name"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
        />
        {errors.name && (
          <p id="contact-name-error" role="alert" className="mt-2 text-sm text-red-400">
            {errors.name}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-email" className="mb-2 block text-sm text-white/70">
          Email
        </label>
        <input
          id="contact-email"
          name="email"
          type="email"
          value={values.email}
          onChange={handleChange}
          aria-invalid={Boolean(errors.email)}
          aria-describedby={errors.email ? "contact-email-error" : undefined}
          autoComplete="email"
          placeholder="you@example.com"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
        />
        {errors.email && (
          <p id="contact-email-error" role="alert" className="mt-2 text-sm text-red-400">
            {errors.email}
          </p>
        )}
      </div>

      <div>
        <label htmlFor="contact-message" className="mb-2 block text-sm text-white/70">
          Message
        </label>
        <textarea
          id="contact-message"
          name="message"
          value={values.message}
          onChange={handleChange}
          aria-invalid={Boolean(errors.message)}
          aria-describedby={errors.message ? "contact-message-error" : undefined}
          rows={5}
          placeholder="What are you looking to build?"
          className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white outline-none transition-colors placeholder:text-white/30 focus:border-accent"
        />
        {errors.message && (
          <p id="contact-message-error" role="alert" className="mt-2 text-sm text-red-400">
            {errors.message}
          </p>
        )}
      </div>

      {/* Honeypot — hidden from real visitors, Formspree drops submissions where this is filled in */}
      <input type="text" name="_gotcha" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />

      <button
        type="submit"
        disabled={status === "submitting"}
        className="w-full rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-black transition-colors duration-300 hover:bg-accent disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "submitting" ? "Sending…" : "Send Message"}
      </button>

      {status === "network-error" && (
        <p role="alert" className="text-sm text-red-400">
          Something went wrong — please try again, or email me directly.
        </p>
      )}
    </form>
  );
}
