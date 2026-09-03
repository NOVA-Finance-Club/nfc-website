"use client";

import { useState, type FormEvent } from "react";
import { Send } from "lucide-react";

import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-data";
import { useT } from "@/lib/language";

const fieldClasses =
  "mt-2 w-full rounded-md border border-brand-cream/25 bg-brand-cream/95 px-4 py-3 text-base text-brand-navy outline-none placeholder:text-brand-navy/50 focus-visible:ring-2 focus-visible:ring-brand-cream/60";
const labelClasses = "text-sm font-medium text-brand-cream/90";

export function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const t = useT();

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const subject = encodeURIComponent(`Message from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— sent from ${name} (${email}) via the NFC website`);
    window.location.href = `mailto:${siteConfig.email}?subject=${subject}&body=${body}`;
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="text-left">
          <label htmlFor="contact-name" className={labelClasses}>
            {t("contact.yourName", "Your name")}
          </label>
          <input
            id="contact-name"
            type="text"
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder={t("contact.namePlaceholder", "Jane Doe")}
            className={fieldClasses}
          />
        </div>
        <div className="text-left">
          <label htmlFor="contact-email" className={labelClasses}>
            {t("contact.yourEmail", "Your email")}
          </label>
          <input
            id="contact-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className={fieldClasses}
          />
        </div>
      </div>
      <div className="text-left">
        <label htmlFor="contact-message" className={labelClasses}>
          {t("contact.message", "Message")}
        </label>
        <textarea
          id="contact-message"
          required
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t("contact.messagePlaceholder", "How can we help?")}
          className={`${fieldClasses} resize-none`}
        />
      </div>
      <div className="flex flex-col items-center gap-2 pt-2">
        <Button
          type="submit"
          size="lg"
          className="bg-brand-cream text-brand-navy hover:bg-brand-cream/90"
        >
          {t("contact.send", "Send Message")}
          <Send className="size-4" />
        </Button>
        <p className="text-xs text-brand-cream/70">
          {t("contact.opensEmailApp", "Opens your email app, addressed to {email}.", {
            email: siteConfig.email,
          })}
        </p>
      </div>
    </form>
  );
}
