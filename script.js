const messages = {
  "05-04": "I love your smile, my love. The prettiest smile to have ever graced the face of the earth",
  "05-05": "I love your eyes. The sight of your beautiful eyes melt me completely.",
  "05-06": "I love the victory look you give after being right, I love your confidence whenever that shows.",
  "05-07": "I love your intelligence, you are so insightful and can pick up on the little-est of details.",
  "05-08": "I love the way you are brave and confident, you show me the light of the world. You're my everything.",
  "05-09": "I love your hands, the prettiest softest touch in the whole universe. I'm so much in love with you.",
  "05-10": "I love you.",
  "05-11": "I love your glow, you're my light in the universe.",
  "05-12": "I love your cooking skills, best rice I've ever tasted.",
  "05-13": "I love you, so damn much.",
  "05-14": "I love the way you say mar khabi, hehe",
  "05-15": "I love your touch",
  "05-16": "I love your nose.",
  "05-17": "I love the way you clench my hand, with the pinky always out. Hehe.",
  "05-18": "I love the way you randomly throw in words of foreign languages, oh my pretty polyglot",
  "05-19": "I love you",
  "05-20": "I love how real and transparent you are, you love me with everything but you always show me what I truly am and what I should be",
  "05-21": "I love your resilience, you're the strongest person with an unbreakable will. Always shine my love.",
  "05-22": "I love your touch",
  "05-23": "I love your nose.",
  "05-24": "I love the way you clench my hand, with the pinky always out. Hehe.",
  "05-25": "I love the way you randomly throw in words of foreign languages, oh my pretty polyglot",
  "05-26": "I love you",
  "05-27": "I love how real and transparent you are, you love me with everything but you always show me what I truly am and what I should be",
  "05-28": "I love your resilience, you're the strongest person with an unbreakable will. Always shine my love.",
  "05-29": "You always show me what's right, I love you for that",
  "05-30": "I love it when you take charge in anything, you deserve the world",
  "05-31": "You love me with everything, and I love you with everything",
  "06-01": "You can do whatever you set your mind to. Keep your chin high and I love you for inspiring me",
  "06-02": "You motivate me so much, I love you for that",
  "06-03": "I love you",
  "06-04": "I love you for the strong person you are, always be strong my love"
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
