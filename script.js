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

