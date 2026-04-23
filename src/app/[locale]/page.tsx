export default function Home() {
  return (
    <main
      style={{
        backgroundColor: "#111110",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: "3rem 2rem",
        fontFamily: "-apple-system, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <style>{`
        @keyframes stir {
          0%   { transform: rotate(-20deg) translateY(0); }
          25%  { transform: rotate(10deg) translateY(-4px); }
          50%  { transform: rotate(-20deg) translateY(0); }
          75%  { transform: rotate(10deg) translateY(-4px); }
          100% { transform: rotate(-20deg) translateY(0); }
        }
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(10px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes blink {
          0%, 100% { opacity: 1; }
          50%      { opacity: 0; }
        }
        .spoon {
          animation: stir 2.4s ease-in-out infinite;
          transform-origin: 50% 80%;
          margin-bottom: 2.5rem;
        }
        .title {
          font-size: clamp(24px, 4vw, 38px);
          font-weight: 300;
          color: #f0ede6;
          letter-spacing: 0.06em;
          animation: fade-in 1s ease both 0.3s;
          opacity: 0;
          margin: 0 0 0.5rem;
        }
        .dot { animation: blink 1.2s step-end infinite; color: #f0ede6; }
        .dot:nth-child(2) { animation-delay: 0.2s; }
        .dot:nth-child(3) { animation-delay: 0.4s; }
        .divider {
          width: 32px;
          height: 1px;
          background: #2e2d2b;
          margin: 2rem auto;
        }
        .contacts {
          display: flex;
          gap: 2rem;
          flex-wrap: wrap;
          justify-content: center;
          animation: fade-in 1s ease both 1s;
          opacity: 0;
        }
        .contact-link {
          display: flex;
          align-items: center;
          gap: 8px;
          color: #6e6d6a;
          font-size: 13px;
          text-decoration: none;
          letter-spacing: 0.04em;
          transition: color 0.2s;
        }
        .contact-link:hover { color: #f0ede6; }
      `}</style>

      {/* Spoon icon */}
      <div className="spoon">
        <svg width="48" height="80" viewBox="0 0 48 80" fill="none">
          <ellipse cx="24" cy="16" rx="14" ry="16" fill="none" stroke="#c8c4bc" strokeWidth="2" />
          <line x1="24" y1="32" x2="24" y2="76" stroke="#c8c4bc" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </div>

      {/* Title */}
      <h1 className="title">
        Charlotte is cooking
        <span className="dot">.</span>
        <span className="dot">.</span>
        <span className="dot">.</span>
      </h1>

      <div className="divider" />

      {/* Contact links */}
      <div className="contacts">
        <a className="contact-link" href="mailto:contact@charlotte-dunand.com">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <rect x="1" y="3" width="12" height="8" rx="1.5" stroke="#6e6d6a" strokeWidth="1.2" />
            <path d="M1 4.5L7 8.5L13 4.5" stroke="#6e6d6a" strokeWidth="1.2" strokeLinecap="round" />
          </svg>
          contact@charlotte-dunand.com
        </a>
        <a className="contact-link" href="tel:+41783240133">
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path
              d="M3 2C3 1.5 3.5 1 4 1H5.5L6.5 4L5 5C5.8 6.8 7.2 8.2 9 9L10 7.5L13 8.5V10C13 10.5 12.5 11 12 11C6.5 11 2 6.5 2 2C2 1.5 2.5 1 3 1Z"
              stroke="#6e6d6a"
              strokeWidth="1.2"
              strokeLinejoin="round"
            />
          </svg>
          +41 78 324 01 33
        </a>
      </div>
    </main>
  );
}