
"use client";

import { useState, type FormEvent } from "react";

type SelectedKitten = {
  id: string;
  name: string;
  color: string;
};

type Props = {
  locale: "en" | "fr";
  selectedKitten: SelectedKitten | null;
};

export default function ContactForm({
  locale,
  selectedKitten,
}: Props) {
  const fr = locale === "fr";

  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");

    const form = e.currentTarget;
    const formData = new FormData(form);

    const payload = {
      name: String(formData.get("name") || ""),
      email: String(formData.get("email") || ""),
      phone: String(formData.get("phone") || ""),
      kittenId: selectedKitten?.id || "",
      message: String(formData.get("message") || ""),
      locale,
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Submission failed");
      }

      form.reset();
      setStatus("success");
    } catch {
      setStatus("error");
    }
  }

  const inputClass =
    "mt-2 w-full rounded-xl border border-[#DDD9CF] bg-white px-4 py-3 text-gray-800 outline-none transition focus:border-[#294C39] focus:ring-2 focus:ring-[#294C39]/10";

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      {/* Selected kitten details */}
      {selectedKitten && (
        <div className="rounded-2xl border border-[#EAE5DA] bg-[#FAF8F3] p-5">
          <h2 className="text-lg font-bold text-[#294C39]">
            {fr
              ? "Votre chaton d'intérêt"
              : "Your Kitten of Interest"}
          </h2>

          <div className="mt-3 space-y-2 text-sm text-gray-700">
            <p>
              <strong>{fr ? "ID du chaton :" : "Kitten ID:"}</strong>{" "}
              {selectedKitten.id}
            </p>

            <p>
              <strong>{fr ? "Nom :" : "Name:"}</strong>{" "}
              {selectedKitten.name}
            </p>

            <p>
              <strong>{fr ? "Couleur :" : "Color:"}</strong>{" "}
              {fr
                ? selectedKitten.color === "Cream"
                  ? "Crème"
                  : selectedKitten.color === "White"
                    ? "Blanc"
                    : selectedKitten.color === "Bi-color"
                      ? "Bicolore"
                      : selectedKitten.color
                : selectedKitten.color}
            </p>
          </div>
        </div>
      )}

      {/* Customer name */}
      <div>
        <label htmlFor="name" className="font-medium text-[#294C39]">
          {fr ? "Votre nom" : "Your Name"} *
        </label>

        <input
          id="name"
          name="name"
          type="text"
          autoComplete="name"
          maxLength={100}
          required
          className={inputClass}
          placeholder={fr ? "Votre nom complet" : "Your full name"}
        />
      </div>

      {/* Customer email */}
      <div>
        <label htmlFor="email" className="font-medium text-[#294C39]">
          {fr ? "Votre adresse e-mail" : "Your Email"} *
        </label>

        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          maxLength={254}
          required
          className={inputClass}
          placeholder="you@example.com"
        />
      </div>

      {/* Customer phone */}
      <div>
        <label htmlFor="phone" className="font-medium text-[#294C39]">
          {fr ? "Téléphone (facultatif)" : "Phone (optional)"}
        </label>

        <input
          id="phone"
          name="phone"
          type="tel"
          autoComplete="tel"
          maxLength={30}
          className={inputClass}
          placeholder={
            fr ? "Votre numéro de téléphone" : "Your phone number"
          }
        />
      </div>

      {/* Customer message */}
      <div>
        <label htmlFor="message" className="font-medium text-[#294C39]">
          {fr ? "Votre message" : "Your Message"} *
        </label>

        <textarea
          id="message"
          name="message"
          required
          minLength={10}
          maxLength={5000}
          rows={5}
          className={inputClass}
          placeholder={
            fr
              ? "Comment pouvons-nous vous aider ?"
              : "How can we help you?"
          }
        />
      </div>

      <p className="text-xs leading-5 text-gray-500">
        {fr
          ? "Les informations fournies seront utilisées pour répondre à votre demande."
          : "The information you provide will be used to respond to your inquiry."}
      </p>

      {/* Submit */}
      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full rounded-full bg-[#294C39] px-6 py-4 font-semibold text-white transition hover:bg-[#203C2D] disabled:cursor-not-allowed disabled:opacity-60 sm:w-auto"
      >
        {status === "sending"
          ? fr
            ? "Envoi en cours..."
            : "Sending..."
          : fr
            ? "Envoyer le message"
            : "Send Message"}
      </button>

      {/* Success */}
      {status === "success" && (
        <p
          role="status"
          className="rounded-xl bg-green-50 p-4 text-sm text-green-800"
        >
          {fr
            ? "Votre message a été envoyé. Merci de nous avoir contactés."
            : "Your message has been sent. Thank you for contacting us."}
        </p>
      )}

      {/* Error */}
      {status === "error" && (
        <p
          role="alert"
          className="rounded-xl bg-red-50 p-4 text-sm text-red-800"
        >
          {fr
            ? "Impossible d'envoyer votre message pour le moment. Veuillez réessayer."
            : "We couldn't send your message right now. Please try again."}
        </p>
      )}
    </form>
  );
}
