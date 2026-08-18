<template>
  <section class="section-shell contact-section">
    <div class="eyebrow-badge">
      <AppIcon name="mail" size="0.95em" aria-hidden="true" /> Contact &amp; Collaboration
    </div>
    <h2>Let's Build Something Great</h2>
    <p>Whether you're starting a new project, scaling an existing system, or looking for an experienced software developer &amp; Laravel specialist, I'd be happy to talk.</p>

    <div class="contact-actions">
      <a class="button primary" href="mailto:mrenochtetteh@outlook.com" aria-label="Send email to Enoch Tetteh">
        <AppIcon name="mail" size="1.1em" aria-hidden="true" />
        Start a Conversation
      </a>
      <a class="button secondary" href="/Enoch_Tetteh_CV.pdf" download aria-label="Download CV">
        <AppIcon name="arrow-top-right" size="1.1em" aria-hidden="true" />
        Download CV
      </a>
    </div>

    <div class="contact-grid">
      <a href="mailto:mrenochtetteh@outlook.com" aria-label="Email: mrenochtetteh@outlook.com">
        <div class="contact-icon-row">
          <AppIcon name="mail" size="1.2em" aria-hidden="true" />
          <span>Email</span>
        </div>
        mrenochtetteh@outlook.com
      </a>

      <a href="https://github.com/paaqwesilowelltetteh" target="_blank" rel="noreferrer" aria-label="GitHub profile: paaqwesilowelltetteh">
        <div class="contact-icon-row">
          <AppIcon name="github" size="1.2em" aria-hidden="true" />
          <span>GitHub</span>
        </div>
        paaqwesilowelltetteh
      </a>

      <a href="https://www.linkedin.com/in/enoch-tetteh-b1b6371bb" target="_blank" rel="noreferrer" aria-label="LinkedIn profile: Enoch Tetteh">
        <div class="contact-icon-row">
          <AppIcon name="linkedin" size="1.2em" aria-hidden="true" />
          <span>LinkedIn</span>
        </div>
        Enoch Tetteh
      </a>

      <a href="tel:+233241372895" aria-label="Call Enoch Tetteh: +233 241 372 895">
        <div class="contact-icon-row">
          <AppIcon name="phone" size="1.2em" aria-hidden="true" />
          <span>Phone</span>
        </div>
        +233 241 372 895
      </a>
    </div>
  </section>
</template>

<style scoped>
.contact-icon-row {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  color: var(--accent-strong);
  margin-bottom: 0.35rem;
}

.contact-icon-row span {
  margin-bottom: 0;
}
</style>
