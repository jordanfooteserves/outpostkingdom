'use client';
import Script from 'next/script';

const PDF_URL = '/downloads/The-Two-Roads-Exercise.pdf';

export default function TwoRoads() {
  return (
    <div className="wrap">
      <p className="crumb"><a href="/hearing">← Hearing</a></p>

      <div className="card hero green">
        <h1>The Two Roads</h1>
        <p className="lead">A prayerful decision-making exercise for when you&rsquo;re at a crossroads and you&rsquo;re not sure where God is leading you next. Instead of only reasoning your way to an answer, you bring the decision to God and let him meet you in it.</p>
        <a className="btn btn-gold" href={PDF_URL} download>Download the exercise — free</a>
      </div>

      <div className="card">
        <h2>Watch: The Two Roads</h2>
        <p className="muted2">A walkthrough of the exercise — watch first, then take the guide with you.</p>
        <div className="videowrap">
          <iframe
            src="https://www.youtube-nocookie.com/embed/6Fn4P3PKoxk"
            title="The Two Roads Exercise"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      </div>

      <div className="card">
        <h2>Stay connected</h2>
        <p>Want more tools like this as they come? Leave your name and email and I&rsquo;ll send new resources as they&rsquo;re ready.</p>
        <form action="https://app.kit.com/forms/9706393/subscriptions" method="post"
          className="seva-form formkit-form kitform" data-sv-form="9706393" data-uid="f17966718a" data-format="inline" data-version="5">
          <ul className="formkit-alert formkit-alert-error" data-element="errors" data-group="alert"></ul>
          <div data-element="fields" className="seva-fields formkit-fields formrow">
            <input className="formkit-input" name="fields[first_name]" placeholder="First name" type="text" />
            <input className="formkit-input" name="email_address" placeholder="Email address" required type="email" />
            <button data-element="submit" className="formkit-submit btn"><span>Keep me posted</span></button>
          </div>
        </form>
        <p className="fine">Double opt-in: you&rsquo;ll get a quick email to confirm. No spam, ever.</p>
      </div>

      <div className="card foot">
        by Jordan Foote · Foote Global · <a href="mailto:jordan@footeglobal.com">jordan@footeglobal.com</a>
      </div>

      <Script src="https://f.convertkit.com/ckjs/ck.5.js" strategy="afterInteractive" />
    </div>
  );
}
