<template>
  <section class="section-shell contact-section">
    <div class="eyebrow-badge">
      <AppIcon name="mail" size="0.95em" /> Contact & Collaboration
    </div>
    <h2>Let's Build Something Great</h2>
    <p>Whether you're starting a new project, scaling an existing system, or looking for an experienced software developer & Laravel specialist, I'd be happy to talk.</p>
    
    <div class="contact-actions">
      <a class="button primary" href="mailto:mrenochtetteh@outlook.com">
        <AppIcon name="mail" size="1.1em" style="margin-right: 0.4rem" />
        Start a Conversation
      </a>
      <a class="button secondary" href="tel:+233241372895">
        <AppIcon name="phone" size="1.1em" style="margin-right: 0.4rem" />
        Call +233 241 372 895
      </a>
    </div>

    <div class="contact-grid">
      <a href="mailto:mrenochtetteh@outlook.com">
        <div class="contact-icon-row">
          <AppIcon name="mail" size="1.2em" />
          <span>Email</span>
        </div>
        mrenochtetteh@outlook.com
      </a>

      <a href="tel:+233241372895">
        <div class="contact-icon-row">
          <AppIcon name="phone" size="1.2em" />
          <span>Primary Phone</span>
        </div>
        +233 241 372 895
      </a>

      <a href="tel:+233204152063">
        <div class="contact-icon-row">
          <AppIcon name="phone" size="1.2em" />
          <span>Secondary Line</span>
        </div>
        +233 204 152 063
      </a>

      <a href="https://github.com/paaqwesilowelltetteh" target="_blank" rel="noreferrer">
        <div class="contact-icon-row">
          <AppIcon name="github" size="1.2em" />
          <span>GitHub</span>
        </div>
        paaqwesilowelltetteh
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
