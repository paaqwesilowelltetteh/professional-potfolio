<template>
  <footer class="site-footer">
    <div class="site-footer-inner">
      <div class="site-footer-brand">
        <strong>Enoch Tetteh</strong>
        <span>Full-Stack Software Developer &amp; Backend Laravel Specialist</span>
        <span>Ghana · Available for opportunities</span>
      </div>
      <div class="site-footer-right">
        <nav class="site-footer-links" aria-label="Footer navigation">
          <a href="https://github.com/paaqwesilowelltetteh" target="_blank" rel="noreferrer" aria-label="GitHub profile">
            <AppIcon name="github" size="1.1em" />
            GitHub
          </a>
          <a href="https://www.linkedin.com/in/enoch-tetteh-b1b6371bb" target="_blank" rel="noreferrer" aria-label="LinkedIn profile">
            <AppIcon name="linkedin" size="1.1em" />
            LinkedIn
          </a>
          <a href="mailto:mrenochtetteh@outlook.com" aria-label="Send email">
            <AppIcon name="mail" size="1.1em" />
            Email
          </a>
        </nav>
        <p class="site-footer-copy">© 2026 Enoch Tetteh. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.site-footer-links {
  display: flex;
  gap: 1.25rem;
  align-items: center;
}

.site-footer-links a {
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
}

.site-footer-links a:hover {
  color: var(--accent-strong);
}
</style>
