export default function Home() {
  return (
    <div className="wrap">
      <div className="card hero">
        <h1>Outpost Kingdom</h1>
        <p className="lead">[Your hub tagline goes here — the one-line vision for Outpost Kingdom.]</p>
      </div>

      <a className="spoke" href="/hearing">
        <h2 className="spoke-title">Hearing</h2>
        <p>Learning to recognize God&rsquo;s voice. Start with The Two Roads, a free decision-making exercise.</p>
      </a>

      <a className="spoke" href="/healing">
        <h2 className="spoke-title">Healing</h2>
        <p>Moving from barriers and burdens to breakthrough. New resources coming soon.</p>
      </a>

      <a className="spoke" href="/identity">
        <h2 className="spoke-title">Identity</h2>
        <p>Living from a whole and settled place. New resources coming soon.</p>
      </a>

      <a className="spoke" href="/golf">
        <h2 className="spoke-title">Golf</h2>
        <p>Faith-rooted tools for the mental game. Start with Peace Over the Putt.</p>
      </a>

      <a className="spoke" href="/tapping">
        <h2 className="spoke-title">Tapping Routines</h2>
        <p>A simple body-and-mind tool for calm, confidence, and more.</p>
      </a>
    </div>
  );
}
