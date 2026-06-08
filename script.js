// COUNTDOWN DETIK
const target = new Date("2027-04-25").getTime();

setInterval(()=>{
  const now = new Date().getTime();
  const d = target - now;

  const days = Math.floor(d / (1000*60*60*24));
  const h = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  const m = Math.floor((d%(1000*60*60))/(1000*60));
  const s = Math.floor((d%(1000*60))/1000);

  document.getElementById("countdown").innerHTML =
    `⏳ ${days}h ${h}j ${m}m ${s}d`;
},1000);

// PROGRESS
const start = new Date("2026-01-01");
const end = new Date("2026-05-01");
const today = new Date();

const total = (end-start)/(1000*60*60*24);
const passed = (today-start)/(1000*60*60*24);
const percent = Math.min((passed/total)*100,100);

document.getElementById("fill").style.width = percent+"%";
document.getElementById("dayText").innerHTML =
  `Hari ke-${Math.floor(passed)} dari ${Math.floor(total)} hari`;

//   Hamburger
function toggleMenu() {
  const menu = document.getElementById("navLinks");
  menu.classList.toggle("active")};
