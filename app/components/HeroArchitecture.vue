<template>
  <div
    class="hero-showcase reveal-up"
    aria-label="Professional profile and system capability map"
  >
    <div class="portrait-card">
      <img
        src="/images/enoch.jpg"
        alt="Enoch Tetteh, Full-Stack Software Developer"
        loading="eager"
        width="560"
        height="480"
      />
      <div class="rounded-2xl bg-white/70 p-4 backdrop-blur-sm dark:bg-gray-900/70">
        <strong class="block">Backend Architecture &amp; Laravel Specialist</strong>
        <span class="text-gray-600 dark:text-gray-300">
          PHP · Laravel · REST APIs · Redis · Nuxt 4
        </span>
      </div>
    </div>

    <div class="system-card">
      <div class="system-card-header">
        <span>Capability Map</span>
        <strong>Production Backend System</strong>
      </div>

      <div class="system-orbit-map">
        <svg
          class="orbit-bg-svg"
          viewBox="0 0 400 240"
          fill="none"
          aria-hidden="true"
        >
          <circle
            cx="200"
            cy="120"
            r="85"
            stroke="var(--line-bright)"
            stroke-dasharray="4 6"
            opacity="0.4"
          />
          <line
            x1="200"
            y1="120"
            x2="60"
            y2="40"
            stroke="var(--line)"
            stroke-width="1"
          />
          <line
            x1="200"
            y1="120"
            x2="340"
            y2="40"
            stroke="var(--line)"
            stroke-width="1"
          />
          <line
            x1="200"
            y1="120"
            x2="50"
            y2="190"
            stroke="var(--line)"
            stroke-width="1"
          />
          <line
            x1="200"
            y1="120"
            x2="350"
            y2="190"
            stroke="var(--line)"
            stroke-width="1"
          />
          <line
            x1="200"
            y1="120"
            x2="200"
            y2="20"
            stroke="var(--line)"
            stroke-width="1"
          />
        </svg>

        <!-- Central Core Hub Node -->
        <div class="core-hub-node">
          <AppIcon name="cpu" size="1.3em" aria-hidden="true" />
          <strong>Laravel Core</strong>
          <span>Backend Engine</span>
        </div>

        <!-- Orbit Floating System Nodes -->
        <div class="orbit-node node-1">
          <AppIcon name="code" size="0.95em" aria-hidden="true" />
          <span>REST APIs</span>
        </div>

        <div class="orbit-node node-2">
          <AppIcon name="server" size="0.95em" aria-hidden="true" />
          <span>Redis / Horizon</span>
        </div>

        <div class="orbit-node node-3">
          <AppIcon name="database" size="0.95em" aria-hidden="true" />
          <span>MySQL / Postgres</span>
        </div>

        <div class="orbit-node node-4">
          <AppIcon name="layers" size="0.95em" aria-hidden="true" />
          <span>Nuxt 4 / Vue</span>
        </div>

        <div class="orbit-node node-5">
          <AppIcon name="shield" size="0.95em" aria-hidden="true" />
          <span>Payments</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.system-orbit-map {
  min-height: 240px;
  position: relative;
  border-radius: var(--radius-lg);
  background: var(--panel-soft);
  border: 1px solid var(--line);
  overflow: hidden;
}

.orbit-bg-svg {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
}

.core-hub-node {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 1.1rem;
  border-radius: var(--radius-md);
  background: var(--bg-elevated);
  border: 1px solid var(--line-bright);
  color: var(--heading);
  box-shadow: var(--shadow-glow);
  z-index: 10;
  text-align: center;
  transition: background 0.3s, color 0.3s, border-color 0.3s, box-shadow 0.3s;
}

.core-hub-node strong {
  font-size: 0.9rem;
  margin-top: 0.2rem;
  color: var(--heading);
  transition: color 0.3s;
}

.core-hub-node span {
  font-size: 0.72rem;
  color: var(--accent-strong);
  text-transform: uppercase;
  font-weight: 700;
  transition: color 0.3s;
}

.orbit-node {
  position: absolute;
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.45rem 0.8rem;
  border-radius: var(--radius-full);
  background: var(--panel);
  border: 1px solid var(--line);
  color: var(--heading);
  font-weight: 700;
  font-size: 0.82rem;
  box-shadow: var(--shadow-soft);
  z-index: 10;
  animation: orbitFloat 5s ease-in-out infinite;
}

.orbit-node:hover {
  border-color: var(--accent);
  color: var(--accent-strong);
  transform: scale(1.05);
}

.node-1 {
  top: 12%;
  left: 8%;
  animation-delay: 0s;
}
.node-2 {
  top: 10%;
  right: 8%;
  animation-delay: -1s;
}
.node-3 {
  bottom: 12%;
  left: 6%;
  animation-delay: -2s;
}
.node-4 {
  bottom: 12%;
  right: 6%;
  animation-delay: -3s;
}
.node-5 {
  top: 4%;
  left: 38%;
  animation-delay: -4s;
}

@keyframes orbitFloat {
  0%,
  100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-6px);
  }
}
</style>
