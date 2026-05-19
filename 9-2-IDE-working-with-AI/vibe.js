const orb = document.getElementById("orb");
const button = document.getElementById("changeButton");
const message = document.getElementById("message");

const moods = [
    {
        color: "#7c3aed",
        text: "היום הוא יום רגיל לחלוטין."
    },
    {
        color: "#22c55e",
        text: "משהו קטן וטוב עומד לקרות."
    },
    {
        color: "#f97316",
        text: "העיגול החליט שהוא דרמטי היום."
    },
    {
        color: "#38bdf8",
        text: "אין סיבה מיוחדת, אבל זה נראה נחמד."
    },
    {
        color: "#ef4444",
        text: "לחיצה אחת יותר מדי, ועדיין הכול בסדר."
    },
    {
        color: "#facc15",
        text: "האורב במצב אופטימי באופן חשוד."
    }
];

let currentMoodIndex = 0;

button.addEventListener("click", () => {
    currentMoodIndex = (currentMoodIndex + 1) % moods.length;
    const currentMood = moods[currentMoodIndex];

    orb.style.background = currentMood.color;
    orb.style.boxShadow = `0 0 45px ${currentMood.color}`;

    message.style.opacity = 0;

    setTimeout(() => {
        message.textContent = currentMood.text;
        message.style.opacity = 1;
    }, 180);

    orb.classList.add("pulse");

    setTimeout(() => {
        orb.classList.remove("pulse");
    }, 250);
});
