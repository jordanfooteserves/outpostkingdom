'use client';
import Script from 'next/script';

const GUMROAD_URL = 'https://outpostkingdom.gumroad.com/l/peaceovertheputt';

export default function PeaceOverThePutt() {
  return (
    <div className="wrap">
      <p className="crumb"><a href="/golf">← Golf</a></p>

      <div className="card hero green">
        <h1>Peace Over the Putt</h1>
        <p className="lead">Changing what runs through your mind over the ball — a faith-rooted guide to freedom from the fear, doubt, and self-talk that sabotage your stroke.</p>
        <a className="btn btn-gold" href={GUMROAD_URL}>Get the workbook — $27</a>
      </div>

      <div className="card">
        <h2>Watch: The Inheritance</h2>
        <p className="muted2">Before you go further — a word from Graham Cooke on who you already are.</p>
        <div className="videowrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/FgzXXKjaPZA?start=70"
            title="The Inheritance — Graham Cooke"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
        <p className="credit">Teaching by Graham Cooke · Brilliant Perspectives. Shared with gratitude.</p>
      </div>

      <div className="card">
        <h2>Stay connected</h2>
        <p>Want more tools like this as they come? Leave your name and email and I'll send new resources as they're ready.</p>
        <form action="https://app.kit.com/forms/9706393/subscriptions" method="post"
          className="seva-form formkit-form kitform" data-sv-form="9706393" data-uid="f17966718a" data-format="inline" data-version="5">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" className="seva-fields formkit-fields formrow">
            <input className="formkit-input" name="fields[first_name]" placeholder="First name" type="text" />
            <input className="formkit-input" name="email_address" placeholder="Email address" required type="email" />
            <button data-element="submit" className="formkit-submit btn"><span>Keep me posted</span></button>
          </div>
        </form>
        <p className="fine">Double opt-in: you'll get a quick email to confirm. No spam, ever.</p>
      </div>

      <div className="card foot">
        by Jordan Foote · Foote Global · <a href="mailto:jordan@footeglobal.com">jordan@footeglobal.com</a>
      </div>

      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
    </div>
  );
}
