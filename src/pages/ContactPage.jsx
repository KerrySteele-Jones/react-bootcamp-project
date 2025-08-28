export default function ContactPage() {
  return (
    <section style={{ padding: "56px 0" }}>
      <p className="eyebrow">Say hello</p>
      <h1 className="display-title">Contact Me</h1>

      <form className="form" noValidate>
        <div className="field">
          <label htmlFor="name">Name<span aria-hidden="true"> *</span></label>
          <input id="name" name="name" type="text" placeholder="Your full name" required />
          <small className="help">Please share your full name so I can address you correctly.</small>
        </div>

        <div className="field">
          <label htmlFor="email">Email<span aria-hidden="true"> *</span></label>
          <input id="email" name="email" type="email" placeholder="name@example.com" required />
          <small className="help">I’ll use this only to respond to your enquiry.</small>
        </div>

        <div className="field">
          <label htmlFor="message">Message<span aria-hidden="true"> *</span></label>
          <textarea
            id="message"
            name="message"
            rows={6}
            minLength={20}
            placeholder="Goals, audience, timing, and any useful links."
            required
          />
          <small className="help">A concise brief is perfect (20+ characters).</small>
        </div>

        <p className="muted" style={{ fontSize: "14px" }}>
          By sending this form you agree I may contact you about your enquiry. I don’t share your details with anyone.
        </p>

        <button type="submit" className="btn">Send message</button>
      </form>
    </section>
  );
}
