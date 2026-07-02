@import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  --font-mono: "JetBrains Mono", "Fira Code", monospace;

  /* Custom Color Palette */
  --color-navy: #123A63;
  --color-navy-dark: #0A243F;
  --color-navy-light: #1E5083;
  --color-emerald: #3AA76D;
  --color-emerald-dark: #2A8F57;
  --color-emerald-light: #4EBD81;
  --color-sky: #6EC6FF;
  --color-sky-light: #9ADBFF;
  --color-surface: #F7F9FC;
}

/* Custom Base Styles */
html, body {
  background-color: #FFFFFF;
  color: #123A63; /* Use deep navy instead of dark black for a soft premium look */
  font-family: var(--font-sans);
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
}

/* Theme helper utility classes */
@utility hero-gradient {
  background: radial-gradient(circle at 80% 20%, rgba(110, 198, 255, 0.15) 0%, rgba(255, 255, 255, 0) 50%);
}

@utility emerald-pill {
  background: rgba(58, 167, 109, 0.1);
  color: #3AA76D;
}

@utility shadow-soft {
  box-shadow: 0 20px 40px -15px rgba(18, 58, 99, 0.08);
}

@utility glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.3);
}

/* Glassmorphism Classes */
.glass-panel {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.4);
}

.glass-panel-dark {
  background: rgba(18, 58, 99, 0.85);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  border: 1px solid rgba(255, 255, 255, 0.1);
}

/* Rounded Cards */
.premium-card {
  border-radius: 28px;
  background-color: #F7F9FC;
  border: 1px solid #FFFFFF;
  box-shadow: 0 20px 40px -15px rgba(18, 58, 99, 0.08);
  transition: all 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

.premium-card:hover {
  transform: translateY(-4px);
  border-color: rgba(58, 167, 109, 0.2);
  box-shadow: 0 20px 40px -15px rgba(18, 58, 99, 0.12);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #F7F9FC;
}

::-webkit-scrollbar-thumb {
  background: #D5DCE5;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #B4C1D2;
}
