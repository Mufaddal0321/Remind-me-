const reminderList = document.getElementById("reminder-list");

let reminders = [];

function renderReminders() {
  reminderList.innerHTML = "";
  reminders.forEach((r, i) => {
    const div = document.createElement("div");
    div.className = "reminder";
    div.innerHTML = `
      <b>${r.text}</b><br>
      Time: ${r.time}<br>
      <label>
        <input type="checkbox" ${r.enabled ? "checked" : ""} 
          onchange="toggleReminder(${i})"> Active
      </label>
    `;
    reminderList.appendChild(div);
  });
}

function addReminder() {
  const text = prompt("Enter reminder text:");
  const time = prompt("Enter time (HH:MM, 24hr):");
  if (text && time) {
    reminders.push({ text, time, enabled: true });
    renderReminders();
  }
}

function addDefaultReminders() {
  reminders = [
    { text: "🌞 Good Morning", time: "06:20", enabled: true },
    { text: "💊 Medicine Time", time: "07:00", enabled: true },
    { text: "📩 Text Him", time: "10:20", enabled: true },
    { text: "💤 Nap Time", time: "17:00", enabled: true },
  ];
  renderReminders();
}

function toggleReminder(i) {
  reminders[i].enabled = !reminders[i].enabled;
  renderReminders();
}

// Service Worker registration
if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("service-worker.js");
}
