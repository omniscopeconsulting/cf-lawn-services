"use client";

import { FormEvent, useState } from "react";

export default function QuoteForm() {
  const [error, setError] = useState("");

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const required = ["name", "phone", "address", "service"];
    if (required.some((key) => !String(data.get(key) || "").trim())) {
      setError("Please complete all required fields.");
      return;
    }
    setError("");
    const message = `Hi CF Lawn Services! I'd like a quote.\n\nName: ${data.get("name")}\nPhone: ${data.get("phone")}\nProperty: ${data.get("address")}\nService: ${data.get("service")}\nMessage: ${data.get("message") || "N/A"}`;
    window.location.href = `sms:9404532471?body=${encodeURIComponent(message)}`;
  }

  return <form onSubmit={submit} className="rounded-2xl bg-white p-6 text-left text-[#172018] shadow-premium sm:p-8" noValidate>
    <div className="mb-6"><p className="eyebrow">Tell us about your property</p><h2 className="display mt-2 text-2xl">Request your quote</h2></div>
    <div className="grid gap-4 sm:grid-cols-2">
      <label className="text-sm font-bold">Name *<input className="field mt-2" name="name" autoComplete="name" required /></label>
      <label className="text-sm font-bold">Phone Number *<input className="field mt-2" name="phone" type="tel" inputMode="tel" autoComplete="tel" required /></label>
      <label className="text-sm font-bold sm:col-span-2">Property Address *<input className="field mt-2" name="address" autoComplete="street-address" required /></label>
      <label className="text-sm font-bold sm:col-span-2">Service Needed *<select className="field mt-2" name="service" defaultValue="" required><option value="" disabled>Select a service</option><option>Lawn Mowing</option><option>Routine Lawn Care</option><option>Lawn Cleanup</option><option>Landscaping</option><option>Something Else</option></select></label>
      <label className="text-sm font-bold sm:col-span-2">Message<textarea className="field mt-2 min-h-28 resize-y" name="message" placeholder="Anything else we should know?" /></label>
    </div>
    {error && <p id="form-error" role="alert" className="mt-4 text-sm font-bold text-red-700">{error}</p>}
    <button className="btn btn-green mt-5 w-full" type="submit" aria-describedby={error ? "form-error" : undefined}>Request Quote <span aria-hidden>→</span></button>
    <p className="mt-3 text-center text-xs text-gray-500">This opens a pre-filled text message. Standard messaging rates may apply.</p>
  </form>;
}
