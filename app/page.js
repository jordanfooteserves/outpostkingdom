'use client';

import { useEffect, useState } from 'react';

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('/api/example')
      .then((r) => r.json())
      .then(setData)
      .catch((e) => setError(e.message));
  }, []);

  const connected = data && !data.demo && !data.error;

  return (
    <div className="wrap">
      <div className="card">
        <h1>Your new project is running 🎉</h1>
        <div className="sub">Built on the standard Next.js + Airtable + Vercel framework.</div>
      </div>

      <div className="card">
        <h2>Data connection</h2>
        <span className={`status${connected ? ' live' : ''}`}>
          <span className="dot" />
          {error
            ? 'Error — check the console'
            : !data
            ? 'Checking…'
            : connected
            ? 'Connected to Airtable'
            : 'Running on demo data (add your Airtable keys in .env.local)'}
        </span>
        {data && data.items && (
          <ul className="items">
            {data.items.map((it) => (
              <li key={it.id}>{it.name || JSON.stringify(it)}</li>
            ))}
          </ul>
        )}
      </div>

      <div className="card">
        <h2>Get this project live — checklist</h2>
        <ul>
          <li className="check"><span className="box">1</span><span>Rename this folder and edit <code>package.json</code> name.</span></li>
          <li className="check"><span className="box">2</span><span>Run <code>npm install</code>, then <code>npm run dev</code>.</span></li>
          <li className="check"><span className="box">3</span><span>If it needs data: create an Airtable base + token, copy <code>.env.example</code> to <code>.env.local</code>, fill it in.</span></li>
          <li className="check"><span className="box">4</span><span>Create a GitHub repo and push.</span></li>
          <li className="check"><span className="box">5</span><span>Import the repo in Vercel — Framework Preset = <b>Next.js</b>. Add the same env vars.</span></li>
          <li className="check"><span className="box">6</span><span>Deploy. Attach your domain if you have one.</span></li>
        </ul>
      </div>

      <div className="card foot">
        Edit <code>app/page.js</code> to start building. See <code>README.md</code> and your New Project Foundation playbook for the full steps.
      </div>
    </div>
  );
}
