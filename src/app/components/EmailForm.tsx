"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/navigation";

export default function EmailForm() {
  const form = useRef<HTMLFormElement>(null);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);
  const router = useRouter();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (form.current) {
      emailjs
        .sendForm(
          "service_yn9z0o4",
          "template_ukm78lo",
          form.current,
          "ocu90JyycMaz8k1-i"
        )
        .then(
          () => {
            setSuccess("Mensaje enviado.");
            setError(null);
            form.current?.reset();
          },
          (error) => {
            console.log("FAILED...", error.text);
            setError(
              "No se pudo enviar el correo electrónico. Inténtalo de nuevo."
            );
            setSuccess(null);
          }
        );
    }
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <div className="input-group">
        <div className="label mt-3">
          <label htmlFor="name">Nombre</label>
        </div>
        <input
          type="text"
          title="name"
          name="name"
          className="form-input border px-1 py-2 mt-2 md:w-96 w-full rounded-md"
        />
      </div>
      <div className="input-group">
        <div className="label mt-3">
          <label htmlFor="whatsapp_or_email">WhatsApp or Email</label>
        </div>
        <input
          type="text"
          title="email"
          name="email"
          className="form-input border px-1 py-2 mt-2 md:w-96 w-full rounded-md"
        />
      </div>
      <div className="input-group">
        <div className="label mt-3">
          <label htmlFor="message">Mensaje</label>
        </div>
        <textarea
          name="message"
          id="message"
          className="form-input border px-1 py-2 mt-2 w-full rounded-md"
          cols={30}
          rows={5}
        ></textarea>
      </div>
      <div className="btn-container text-right">
        <button
          type="submit"
          className="py-2 px-16 bg-black text-white rounded-md"
        >
          Enviar
        </button>
      </div>
      {error && <div className="error text-red-500 mt-2">{error}</div>}
      {success && <div className="success text-green-500 mt-2">{success}</div>}
    </form>
  );
}
