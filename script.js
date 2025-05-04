const messages = {
  "05-04": "I love your smile, my love. The prettiest smile to have ever graced the face of the earth",
  "05-05": "I love your eyes.",
  "05-06": "Placeholder message for the next day, you mean everything. 💖",
  // Add more placeholder messages for the upcoming days.
};

function getTodayKey() {
  const today = new Date();
  const mm = String(today.getMonth() + 1).padStart(2, '0');
  const dd = String(today.getDate()).padStart(2, '0');
  return `${mm}-${dd}`;
}

function showDailyMessage() {
  const key = getTodayKey();
  const message = messages[key] || "No matter the date, my love for you never changes. ❤️";
  document.getElementById("daily-message").textContent = message;

  // Show today's date dynamically
  const today = new Date();
  const dateString = today.toLocaleDateString("en-US", {
    weekday: 'long', year: 'numeric', month: 'long', day: 'numeric'
  });
  document.getElementById("current-date").textContent = `${dateString}`;
}

showDailyMessage();
