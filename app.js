// Route data extracted from your spreadsheet (Destination + Tender Schedule + Transfer Point).
// hub = Transfer Point (CMH or SWF)
// schedule[pickupDay] = arrival day
const ROUTES = {
  "ABE": {"hub":"SWF","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "ABQ": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"TUESDAY"}},
  "ALB": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "AMA": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "ATL": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "AUS": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "AVL": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "AVP": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "BDL": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "BGR": {"hub":"SWF","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "BHM": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "BIL": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "BIS": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "BNA": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "BOI": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "BOS": {"hub":"SWF","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "BPT": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "BUF": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "BWI": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "BZN": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "CAE": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "CAK": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "CHA": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "CHS": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "CID": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "CLE": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "CLT": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "CMH": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "COS": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"TUESDAY"}},
  "CRP": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "CVG": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "DAB": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "DAL": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "DAY": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "DCA": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "DEN": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"TUESDAY"}},
  "DFW": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "DSM": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "DTW": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "ECP": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "ELP": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"TUESDAY"}},
  "ERI": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "EUG": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "EVV": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "EWR": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "FAR": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "FAY": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "FLL": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "FNT": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "FSD": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "FSM": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "FWA": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "GNV": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "GRB": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "GRR": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "GSO": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "GSP": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "HNL": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "HOU": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "HPN": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "HSV": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "IAD": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "IAH": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "ICT": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "IND": {"hub":"CMH","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "JAC": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "JAN": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "JAX": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "JFK": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "LAS": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "LAX": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "LBB": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "LEX": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "LFT": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "LGA": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "LIT": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "LNK": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "MCI": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MCO": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MDW": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MEM": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MHT": {"hub":"SWF","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MGM": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MIA": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MKE": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "MSN": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "MSO": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "MSP": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "MSY": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "MTJ": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "OKC": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "OMA": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "ONT": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "ORF": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "ORD": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "PBI": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "PDX": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "PHL": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "PHX": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "PIT": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "PNS": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "PSP": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "RDU": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "ROA": {"hub":"CMH","schedule":{"MONDAY":"WEDNESDAY","TUESDAY":"THURSDAY","WEDNESDAY":"FRIDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "RNO": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}},
  "RSW": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "SEA": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "SFO": {"hub":"CMH","schedule":{"MONDAY":"MONDAY","TUESDAY":"MONDAY","WEDNESDAY":"TUESDAY","THURSDAY":"WEDNESDAY","FRIDAY":"THURSDAY"}},
  "SWF": {"hub":"SWF","schedule":{"MONDAY":"TUESDAY","TUESDAY":"WEDNESDAY","WEDNESDAY":"THURSDAY","THURSDAY":"FRIDAY","FRIDAY":"MONDAY"}},
  "TPA": {"hub":"CMH","schedule":{"MONDAY":"THURSDAY","TUESDAY":"FRIDAY","WEDNESDAY":"MONDAY","THURSDAY":"MONDAY","FRIDAY":"MONDAY"}},
  "TUS": {"hub":"CMH","schedule":{"MONDAY":"FRIDAY","TUESDAY":"MONDAY","WEDNESDAY":"MONDAY","THURSDAY":"TUESDAY","FRIDAY":"WEDNESDAY"}}
};

const DAY_NAMES = ["SUNDAY","MONDAY","TUESDAY","WEDNESDAY","THURSDAY","FRIDAY","SATURDAY"];

const LOG_KEY = "route_checker_log_v1";
const MAX_LOG_ROWS = 500;

// prevent double logging when you type 3 letters then click check
let lastAutoCheckedDest = "";
let lastAutoCheckedAt = 0;

const els = {
  destInput: document.getElementById("destInput"),
  checkBtn: document.getElementById("checkBtn"),
  todayOverride: document.getElementById("todayOverride"),
  dayHint: document.getElementById("dayHint"),
  result: document.getElementById("result"),
  error: document.getElementById("error"),
  pillDest: document.getElementById("pillDest"),
  pillPickup: document.getElementById("pillPickup"),
  pillArrival: document.getElementById("pillArrival"),
  hubValue: document.getElementById("hubValue"),
  holdValue: document.getElementById("holdValue"),
  noteText: document.getElementById("noteText"),
  logTbody: document.getElementById("logTbody"),
  clearLogBtn: document.getElementById("clearLogBtn"),
};

function titleCaseDay(s){ return s.charAt(0) + s.slice(1).toLowerCase(); }
function normalizeDest(s){ return (s || "").trim().toUpperCase().replace(/[^A-Z]/g, "").slice(0,3); }

function getTodayName(){
  const override = els.todayOverride.value;
  if (override && override !== "AUTO") return override;
  return DAY_NAMES[new Date().getDay()];
}
function getTomorrowName(todayName){
  const idx = DAY_NAMES.indexOf(todayName);
  return DAY_NAMES[(idx + 1) % 7];
}

function setHint(){
  const today = getTodayName();
  const tomorrow = getTomorrowName(today);
  els.dayHint.textContent =
    `Today: ${titleCaseDay(today)} • Shipping (tomorrow): ${titleCaseDay(tomorrow)} • “Hold overnight” = arrival day is Monday`;
}

function showError(msg){
  els.error.textContent = msg;
  els.error.classList.remove("hidden");
  els.result.classList.add("hidden");
}

function showResult(dest, pickupDay, arrivalDay, hub, canHold){
  els.error.classList.add("hidden");
  els.result.classList.remove("hidden");

  els.pillDest.textContent = `DEST: ${dest}`;
  els.pillPickup.textContent = `Pickup day: ${titleCaseDay(pickupDay)}`;
  els.pillArrival.textContent = arrivalDay ? `Arrival day: ${titleCaseDay(arrivalDay)}` : `Arrival day: (not listed)`;

  const hubClean = (hub === "CMH" || hub === "SWF") ? hub : "UNKNOWN";
  els.hubValue.textContent = hubClean;

  if (!arrivalDay){
    els.holdValue.textContent = "UNKNOWN";
    els.holdValue.style.color = "inherit";
    els.noteText.textContent =
      "This lane does not have an arrival day listed for tomorrow’s pickup day, so hold-overnight cannot be determined.";
    return;
  }

  els.holdValue.textContent = canHold ? "HOLD" : "LOAD";
  els.holdValue.style.color = canHold ? "var(--bad)" : "var(--good)";
  els.noteText.textContent =
    canHold
      ? "Since shipping tomorrow still arrives on Monday, this freight can be held overnight."
      : "Since shipping tomorrow would arrive before/after Monday, treat this as not hold-overnight (per your rule).";
}

// ---------- LOG ----------
function loadLog(){
  try{
    const raw = localStorage.getItem(LOG_KEY);
    if (!raw) return [];
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  }catch{ return []; }
}
function saveLog(rows){
  try{ localStorage.setItem(LOG_KEY, JSON.stringify(rows)); }catch{}
}
function formatTime(ts){
  try{ return new Date(ts).toLocaleString(); }catch{ return String(ts); }
}
function badge(text, kind){
  const cls = kind ? `badge ${kind}` : "badge";
  return `<span class="${cls}">${text}</span>`;
}
function renderLog(){
  const rows = loadLog();
  els.logTbody.innerHTML = rows.map(r => {
    const holdKind = r.hold === "HOLD" ? "bad" : r.hold === "LOAD" ? "good" : "";
    const tpKind = (r.transferPoint === "CMH" || r.transferPoint === "SWF") ? "good" : "";
    return `
      <tr>
        <td>${formatTime(r.time)}</td>
        <td><b>${r.dest}</b></td>
        <td>${badge(r.transferPoint, tpKind)}</td>
        <td>${badge(r.hold, holdKind)}</td>
      </tr>
    `;
  }).join("");
}
function addLogEntry({ dest, transferPoint, hold }){
  const rows = loadLog();
  rows.unshift({ time: Date.now(), dest, transferPoint, hold });
  if (rows.length > MAX_LOG_ROWS) rows.length = MAX_LOG_ROWS;
  saveLog(rows);
  renderLog();
}
// ---------- END LOG ----------

// Main check. If source === "auto", it will suppress duplicates for the same dest typed repeatedly.
function check(source = "manual"){
  setHint();

  const dest = normalizeDest(els.destInput.value);
  els.destInput.value = dest;

  // Only auto-check when we have 3 letters.
  if (dest.length !== 3){
    // don't spam errors while typing
    els.error.classList.add("hidden");
    els.result.classList.add("hidden");
    return;
  }

  // If auto fired for the same 3 letters very recently, do nothing.
  if (source === "auto"){
    const now = Date.now();
    if (dest === lastAutoCheckedDest && (now - lastAutoCheckedAt) < 750) return;
    lastAutoCheckedDest = dest;
    lastAutoCheckedAt = now;
  }

  const lane = ROUTES[dest];
  if (!lane){
    showError(`No lane found for destination "${dest}".`);
    addLogEntry({ dest, transferPoint: "UNKNOWN", hold: "UNKNOWN" });
    return;
  }

  const today = getTodayName();
  const pickupDay = getTomorrowName(today);
  const arrivalDay = lane.schedule[pickupDay];
  const canHold = (arrivalDay === "MONDAY");
  const hubClean = (lane.hub === "CMH" || lane.hub === "SWF") ? lane.hub : "UNKNOWN";

  showResult(dest, pickupDay, arrivalDay, lane.hub, canHold);

  const holdText = arrivalDay ? (canHold ? "HOLD" : "LOAD") : "UNKNOWN";
  addLogEntry({ dest, transferPoint: hubClean, hold: holdText });
}

// Button still works
els.checkBtn.addEventListener("click", () => check("manual"));

// Enter still works, but not required
els.destInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") check("manual");
});

// Auto-check as soon as 3 letters are present
els.destInput.addEventListener("input", () => check("auto"));

// If "today" changes, recompute current 3-letter input (and log it once)
els.todayOverride.addEventListener("change", () => {
  setHint();
  if (normalizeDest(els.destInput.value).length === 3) check("manual");
});

els.clearLogBtn.addEventListener("click", () => {
  saveLog([]);
  renderLog();
});

setHint();

renderLog();
