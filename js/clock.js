// Referencing https://www.youtube.com/watch?app=desktop&v=5tC46h022YE

// full clock.js example
document.addEventListener('DOMContentLoaded', () => {
  const clockEl = document.getElementById('clock');
  const locationText = 'Vancouver, BC';
  const zoneText = 'Pacific Standard Time';

  function updateClock() {
    const now = new Date();
    const opts = {
      timeZone: 'America/Vancouver',
      hour12: true,
      hour:   '2-digit',
      minute: '2-digit',
      second: '2-digit'
    };
    const formatted = new Intl.DateTimeFormat('en-US', opts).format(now);

    clockEl.textContent = formatted;
    clockEl.setAttribute('datetime', now.toISOString());

    clockEl.setAttribute(
        'aria-label',
        `${locationText}, ${formatted}, ${zoneText}`
    );
  }

  updateClock();
  setInterval(updateClock, 1000);
});
