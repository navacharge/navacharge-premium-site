const services = [
  {
    number: '01',
    title: 'EVSE diagnostics',
    copy: 'Level 2 charger checks, fault isolation, session behaviour review, power symptoms, firmware status, and repeat-issue documentation.',
    tags: ['Fault isolation', 'Session review', 'Field notes'],
  },
  {
    number: '02',
    title: 'RMA validation',
    copy: 'Returned unit intake, functional verification, issue reproduction, redeployment readiness, and evidence packs for technical teams.',
    tags: ['Issue proof', 'Test records', 'Redeploy ready'],
  },
  {
    number: '03',
    title: 'Uptime operations',
    copy: 'Site-level visibility, response prioritization, recurring issue tracking, monthly health reports, and reliability improvement actions.',
    tags: ['Uptime trend', 'Priority response', 'Health report'],
  },
  {
    number: '04',
    title: 'Cable management',
    copy: 'Physical inspection, cable flow, connector care, user experience friction, safety visibility, and site presentation improvement.',
    tags: ['Cable flow', 'Connector care', 'UX friction'],
  },
];

const portalRows = [
  ['Harbourview P1', '24 chargers', '96.8%', '2 flagged'],
  ['Lonsdale Retail', '12 chargers', '98.1%', '1 cable issue'],
  ['Fleet Depot North', '36 chargers', '97.4%', '4 RMA checks'],
];

const metrics = [
  ['24h', 'target response window'],
  ['4', 'reliability workstreams'],
  ['1', 'clear owner portal'],
];

export default function Home() {
  return (
    <main>
      <nav className="nav">
        <a className="brand" href="#top" aria-label="NavaCharge home">
          <span className="brandMark">N</span>
          <span>NavaCharge</span>
        </a>
        <div className="navLinks">
          <a href="#services">Services</a>
          <a href="#portal">Portal</a>
          <a href="#process">Process</a>
          <a href="#contact" className="navCta">Book site review</a>
        </div>
      </nav>

      <section id="top" className="hero sectionGrid">
        <div className="heroCopy">
          <p className="eyebrow">EV charging reliability, made visible</p>
          <h1>Turn charger problems into managed site performance.</h1>
          <p className="lead">
            NavaCharge helps property managers, operators, and technical teams see what is failing,
            what is repeatable, what must be repaired, and what can be returned to service.
          </p>
          <div className="heroActions">
            <a className="primaryBtn" href="#contact">Request reliability review</a>
            <a className="secondaryBtn" href="#portal">View portal concept</a>
          </div>
          <div className="metrics">
            {metrics.map(([value, label]) => (
              <div className="metric" key={label}>
                <strong>{value}</strong>
                <span>{label}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="heroVisual" aria-label="NavaCharge reliability dashboard preview">
          <div className="orb orbOne" />
          <div className="orb orbTwo" />
          <div className="dashboardGlass">
            <div className="dashTop">
              <span>Site reliability layer</span>
              <b>Live</b>
            </div>
            <div className="uptimeRing">
              <div>
                <strong>97.4%</strong>
                <span>portfolio uptime</span>
              </div>
            </div>
            <div className="signalGrid">
              <div><span>Diagnostics</span><b>12 open</b></div>
              <div><span>RMA queue</span><b>6 units</b></div>
              <div><span>Cable risk</span><b>3 sites</b></div>
              <div><span>Resolved</span><b>41 actions</b></div>
            </div>
          </div>
        </div>
      </section>

      <section className="statement">
        <p>
          Chargers do not fail only in hardware. They fail in visibility, ownership, cable condition,
          repeated symptoms, and slow decisions. NavaCharge closes that gap.
        </p>
      </section>

      <section id="services" className="services">
        <div className="sectionHeader">
          <p className="eyebrow">Reliability workstreams</p>
          <h2>One operating layer for diagnostics, RMA, uptime, and cable condition.</h2>
        </div>
        <div className="serviceGrid">
          {services.map((service) => (
            <article className="serviceCard" key={service.title}>
              <span className="serviceNumber">{service.number}</span>
              <h3>{service.title}</h3>
              <p>{service.copy}</p>
              <div className="tagRow">
                {service.tags.map((tag) => <span key={tag}>{tag}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="cableMap" aria-label="NavaCharge connected service path">
        <svg viewBox="0 0 1200 420" role="img" aria-labelledby="pathTitle">
          <title id="pathTitle">NavaCharge service path from site signal to stable charger operations</title>
          <path className="pathBase" d="M72 250 C230 72 410 98 520 210 S720 360 850 208 S1030 70 1130 172" />
          <path className="pathPulse" d="M72 250 C230 72 410 98 520 210 S720 360 850 208 S1030 70 1130 172" />
          <g className="node" transform="translate(72 250)"><circle r="16"/><text x="-42" y="52">Signal</text></g>
          <g className="node" transform="translate(520 210)"><circle r="16"/><text x="-68" y="52">Validation</text></g>
          <g className="node" transform="translate(850 208)"><circle r="16"/><text x="-48" y="52">Action</text></g>
          <g className="node" transform="translate(1130 172)"><circle r="16"/><text x="-74" y="52">Reliable site</text></g>
        </svg>
      </section>

      <section id="portal" className="portal sectionGrid reverse">
        <div className="portalMock">
          <div className="portalNav">
            <span>Customer Portal</span>
            <button>Export report</button>
          </div>
          <div className="portalHero">
            <div>
              <small>Network view</small>
              <strong>72 chargers monitored</strong>
            </div>
            <div className="healthPill">Reliability score 91</div>
          </div>
          <div className="portalCards">
            <div><span>Open diagnostics</span><b>12</b></div>
            <div><span>RMA validation</span><b>6</b></div>
            <div><span>Cable issues</span><b>3</b></div>
          </div>
          <div className="table">
            {portalRows.map((row) => (
              <div className="tableRow" key={row[0]}>
                {row.map((cell) => <span key={cell}>{cell}</span>)}
              </div>
            ))}
          </div>
        </div>
        <div>
          <p className="eyebrow">Customer portal concept</p>
          <h2>Give every site owner a clear view of condition, action, and accountability.</h2>
          <p className="bodyText">
            The portal is designed for non-technical owners and technical teams at the same time:
            uptime snapshots, open issues, RMA status, cable condition, repair notes, and monthly reliability reports.
          </p>
          <ul className="checkList">
            <li>Site health dashboard with simple status language.</li>
            <li>RMA evidence and redeployment readiness records.</li>
            <li>Monthly PDF-style reporting structure for managers.</li>
          </ul>
        </div>
      </section>

      <section id="process" className="process">
        <div className="sectionHeader narrow">
          <p className="eyebrow">Operating rhythm</p>
          <h2>Simple process. Hard accountability.</h2>
        </div>
        <div className="processGrid">
          {[
            ['Inspect', 'Physical site, cables, connectors, charger state, and visible user friction.'],
            ['Diagnose', 'Reproduce symptoms, separate hardware, software, network, and site-level causes.'],
            ['Validate', 'Confirm RMA logic, document evidence, and define return-to-service readiness.'],
            ['Report', 'Deliver owner-facing status, priority actions, and reliability trend visibility.'],
          ].map(([title, copy], index) => (
            <div className="processStep" key={title}>
              <span>{String(index + 1).padStart(2, '0')}</span>
              <h3>{title}</h3>
              <p>{copy}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="positioning">
        <div>
          <p className="eyebrow">Positioning</p>
          <h2>Not another installer. Not another network. A reliability partner between the site and the system.</h2>
        </div>
        <p>
          NavaCharge is built for the uncomfortable middle: chargers that are installed but not trusted,
          tickets that repeat, cables that create user failure, and owners who need proof instead of excuses.
        </p>
      </section>

      <section id="contact" className="contact">
        <div>
          <p className="eyebrow">Start with one site</p>
          <h2>Make the first reliability report impossible to ignore.</h2>
          <p className="bodyText">
            Send a site list, charger count, known issues, photos, and access constraints. NavaCharge will turn it into a diagnostic and uptime action plan.
          </p>
        </div>
        <form className="contactForm">
          <input placeholder="Name" aria-label="Name" />
          <input placeholder="Work email" aria-label="Work email" />
          <input placeholder="Site / company" aria-label="Site or company" />
          <textarea placeholder="Tell us about the chargers, issues, and site condition" aria-label="Message" />
          <button type="button">Prepare site review</button>
        </form>
      </section>

      <footer>
        <span>NavaCharge</span>
        <p>Reliable. Responsible. Ready.</p>
      </footer>
    </main>
  );
}
