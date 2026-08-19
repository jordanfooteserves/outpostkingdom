const ROUTINES = [
  { name: 'The Anchor', blurb: 'Tap a truth into your body.', url: 'https://www.youtube.com/watch?v=U-s8yLGTfbU' },
  { name: 'Depression & Pain', blurb: 'The simplest routine, for a low, heavy, or painful day.', url: 'https://www.youtube.com/watch?v=EO-xa8qwbCo' },
  { name: 'Calm', blurb: 'For anxiety, nerves, or fear.', url: 'https://www.youtube.com/watch?v=V4tPZjLIP4o' },
  { name: 'Release', blurb: 'To process loss, rejection, or grief.', url: 'https://www.youtube.com/watch?v=6lWdgB-pvNs' },
  { name: 'Trauma', blurb: 'For a specific painful memory or a deeper hurt.', url: 'https://www.youtube.com/watch?v=9--osgTK6Xo' },
  { name: 'Confidence', blurb: 'To prime peak performance.', url: 'https://www.youtube.com/watch?v=t8dMfe7Q1cw' },
];

export default function Tapping() {
  return (
    <div className="wrap">
      <p className="crumb"><a href="/">← Outpost Kingdom</a></p>

      <div className="card hero green">
        <h1>Tapping Routines</h1>
        <p className="lead">A simple body-and-mind tool for calm, confidence, and more — on the course or off. A companion to <a href="/golf/peace">Peace Over the Putt</a>.</p>
      </div>

      <div className="card">
        <h2>How it works</h2>
        <p>Each routine combines three things at once: lightly tapping a short sequence of points, holding a thought in mind, and adding a gentle left-right motion. Rate the feeling 1–10, run a 30-second round, and repeat until it settles.</p>
      </div>

      <div className="card">
        <h2>Start here — How Tapping Works</h2>
        <p className="muted2">A short primer on the three parts and the tapping points before you try a routine.</p>
        <div className="shortwrap">
          <div className="videowrap">
            <iframe
              src="https://www.youtube-nocookie.com/embed/aR8WXKCxiWc"
              title="How Tapping Works — Jordan Foote"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      </div>

      <div className="card">
        <h2>The routines</h2>
        <p className="muted2">Watch each one done, then use it whenever you need it. Every routine finishes the same way — by tapping it in.</p>
        <ul className="routines">
          {ROUTINES.map((r) => (
            <li key={r.name}>
              <span><b>{r.name}</b> — {r.blurb}</span>
              <a className="watch" href={r.url} target="_blank" rel="noopener noreferrer">Watch</a>
            </li>
          ))}
        </ul>
      </div>

      <div className="card">
        <h2>Go deeper</h2>
        <p>These routines pair with the full workbook, a faith-rooted guide to quieting the fear over the ball and freeing your true game.</p>
        <a className="btn btn-gold" href="/golf/peace">See Peace Over the Putt</a>
      </div>

      <div className="card foot">by Jordan Foote · Foote Global</div>
    </div>
  );
}
