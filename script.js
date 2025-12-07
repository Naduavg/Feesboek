// Algemene tab wisselaar
function openPage(pageName, elmnt, color) {
  // Verberg alle tabbladen
  const tabcontent = document.getElementsByClassName("tabcontent");
  for (let i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }

  // Reset achtergrondkleur van alle tabknoppen
  const tablinks = document.getElementsByClassName("tablink");
  for (let i = 0; i < tablinks.length; i++) {
    tablinks[i].style.backgroundColor = "";
  }

  // Toon geselecteerd tabblad
  const selectedTab = document.getElementById(pageName);
  if (selectedTab) selectedTab.style.display = "block";

  // Geef de actieve knop een kleur
  if (elmnt) elmnt.style.backgroundColor = color;

  // Reset fotografie tab
  if (pageName === "fotografie") {
    resetFotografieTab();
  }

  // Verberg alle sub-content
  hideAllSubContent();
}

// Pagina standaard starten met home
window.onload = function () {
  document.getElementById("defaultOpen").click();
};


if (navigator && navigator.serviceWorker) {
  navigator.serviceWorker.register("../sw.js");
}

if ("Notification" in window) {

  document.querySelector("#btnEnableNotifications").style.display = "block";

  document
    .querySelector("#btnEnableNotifications")
    .addEventListener("click", askForNotificationPermission);
}

function displayFirstNotification() {
  document.querySelector("#btnEnableNotifications").style.display = "none";

  let options = {
    body: "Je hebt het hoofdstuk uit, deel je reactie met je vrienden!",
    icon: "/../icon/Logo_bookshook.png",

    vibrate: [
      500, 110, 500, 110, 450, 110, 200, 110, 170, 40, 450, 110, 200, 110, 170,
      40, 500,
    ],
  };

  navigator.serviceWorker.ready.then(function (registration) {
    registration.showNotification("Lekker gelezen!", options);
  });
}

function askForNotificationPermission() {

  Notification.requestPermission(function (result) {
    console.log("user Choice", result);
    if (result != "granted") {
      console.log("No permission granted");
    } else {
      console.log("Permission granted!!!");
      displayFirstNotification();
    }
  });
}

 

