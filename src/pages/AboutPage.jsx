import React from "react";

export default function AboutPage() {
  return (
    <main className="container">
      {/* Page header */}
      <header className="page-header">
        <p className="page-eyebrow">About</p>
        <h1 className="page-title">
          I use technology to create meaningful experiences and help people learn
        </h1>
      </header>

      {/* Hero split */}
      <section className="about-hero">
        {/* Left: copy */}
        <div className="about-lede">
          <p>
            I’m a digital media creative who focuses on UX, interaction design, prototyping and XR.
            I like making things that feel clear, accessible and human, whether that’s in XR,
            on the web or on mobile.
          </p>

          <p>
            As a former Senior Lecturer in Digital Media, I saw up close how people first meet new technology. Access can be uneven, interfaces can be confusing and support is often missing. I now focus on clear onboarding, practical resources and small prototypes, using code and XR, so learners can try things, make progress and build confidence.
          </p>

          {/* Highlights */}
          <div className="highlights" role="list">
            <div className="highlight" role="listitem">
              <span className="highlight-dot" aria-hidden="true"></span>
              <span>XR onboarding</span>
            </div>
            <div className="highlight" role="listitem">
              <span className="highlight-dot" aria-hidden="true"></span>
              <span>Authoring tools</span>
            </div>
            <div className="highlight" role="listitem">
              <span className="highlight-dot" aria-hidden="true"></span>
              <span>Prototyping methods</span>
            </div>
            <div className="highlight" role="listitem">
              <span className="highlight-dot" aria-hidden="true"></span>
              <span>AI driven co creation</span>
            </div>
          </div>

          {/* Actions */}
          <div className="btn-row">
            <a href="/contact" className="btn">Let’s talk</a>
            <a href="/Kerry_Steele-Jones_CV.pdf" target="_blank" className="btn underline-link">Download CV</a>
          </div>
        </div>

        {/* Right: portraits */}
        <div className="about-media">
         

          <div className="portrait-photo" aria-label="Portrait photo">
            <img src="/images/kerry-photo.png" alt="Kerry Steele-Jones" />
          </div>
        </div>
      </section>
    </main>
  );
}
