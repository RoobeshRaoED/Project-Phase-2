/* ======================================================================
   HLMS — DASHBOARD PAGE (Pure HTML/CSS/JS, no backend)
   Standalone build: only the Dashboard page is wired up.
   Other sidebar links show a "coming soon" toast.
   ====================================================================== */

/* ---------------------------- SAMPLE / MOCK DATA ---------------------------- */
const currentUser = {
  name: 'John Doe',
  email: 'john.doe@example.com',
  role: 'customer'
};

const WORKFLOW_STAGES = [
  'Application Submitted',
  'Document Verification',
  'Eligibility & Credit Check',
  'Mortgage / Property Verification',
  'Final Approval',
  'Disbursement'
];

const myApplications = [
  {
    id: 'APP-1001',
    trackingNo: 'HLMS-1001',
    loanType: 'Home Purchase Loan',
    loanAmount: 3500000,
    status: 'In Progress',
    stageIndex: 2
  }
];

const lastEligibility = { status: 'Eligible', cibil: 782 };

const notifications = [
  { title: 'Document Verified', body: 'Your income proof has been verified successfully.', read: false, channels: ['Email','SMS'], ts: Date.now() - 1000 * 60 * 30 },
  { title: 'Application Received', body: 'Your loan application HLMS-1001 has been submitted.', read: false, channels: ['Email'], ts: Date.now() - 1000 * 60 * 60 * 5 },
  { title: 'Eligibility Checked', body: 'You are eligible for a loan up to ₹35,00,000.', read: true, channels: ['App'], ts: Date.now() - 1000 * 60 * 60 * 24 }
];

/* ---------------------------- HELPERS ---------------------------- */
function $(sel) { return document.querySelector(sel); }
function $all(sel) { return document.querySelectorAll(sel); }

function fmtINR(n) {
  n = Math.round(n || 0);
  return '₹' + n.toLocaleString('en-IN');
}

function fmtDate(ts) {
  const d = new Date(ts);
  return d.toLocaleDateString('en-IN', { day: '2-digit', month: 'short', year: 'numeric' }) +
    ', ' + d.toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit' });
}

function escapeHtml(s) {
  return (s || '').toString().replace(/[&<>"']/g, c => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;'
  }[c]));
}

function unreadCount() {
  return notifications.filter(n => !n.read).length;
}

function toast(title, body, type) {
  const wrap = $('#toastWrap');
  const el = document.createElement('div');
  el.className = 'toast' + (type ? ' ' + type : '');
  el.innerHTML = `<strong>${escapeHtml(title)}</strong>${body ? escapeHtml(body) : ''}`;
  wrap.appendChild(el);
  setTimeout(() => el.remove(), 4000);
}

/* ---------------------------- SIDEBAR ---------------------------- */
const SIDEBAR_ITEMS = [
  { view: 'dashboard', ic: '▦', label: 'Dashboard' },
  { view: 'guidance', ic: '◷', label: 'Loan Guidance' },
  { view: 'eligibility', ic: '☑', label: 'Check Eligibility' },
  { view: 'apply', ic: '▤', label: 'Apply for Loan' },
  { view: 'tracking', ic: '↗', label: 'Loan Status Tracking' },
  { view: 'repayment', ic: 'Ⓡ', label: 'Repayment' },
  { view: 'postdisb', ic: '⌂', label: 'Post Disbursement' },
  { view: 'auction', ic: '☆', label: 'Auction Management' },
  { view: 'documents', ic: '▯', label: 'Documents', badge: 'NEW' },
  { view: 'profile', ic: '◍', label: 'Profile Settings' },
  { view: 'support', ic: '?', label: 'Support / Help' }
];

function renderSidebar() {
  const itemsHtml = SIDEBAR_ITEMS.map(it =>
    `<button class="nav-item" data-view="${it.view}" onclick="go('${it.view}')">
      <span class="ic">${it.ic}</span>${it.label}${it.badge ? `<span class="nav-badge">${it.badge}</span>` : ''}
    </button>`
  ).join('');
  $('#sidebar').innerHTML = itemsHtml +
    `<button class="nav-item" onclick="logout()" style="margin-top:14px;border-top:1px solid var(--border);padding-top:16px;color:var(--red);">
      <span class="ic" style="color:var(--red);">⏻</span>Log Out
    </button>`;
}

function setActiveNav(view) {
  $all('.nav-item').forEach(b => b.classList.toggle('active', b.dataset.view === view));
}

/* ---------------------------- ROUTER (Dashboard only) ---------------------------- */
function go(view) {
  if (view === 'dashboard') {
    $('#main').innerHTML = viewDashboard();
    setActiveNav('dashboard');
  } else {
    setActiveNav(view);
    toast('Coming Soon', 'The "' + labelFor(view) + '" page is not part of this demo build yet.', 'success');
  }
  // close sidebar on mobile after navigating
  $('#sidebar').classList.remove('open');
}
function labelFor(view) {
  const it = SIDEBAR_ITEMS.find(i => i.view === view);
  return it ? it.label : view;
}
function goMyProfile() { go('profile'); }
function logout() { toast('Logged Out', 'This is a demo — no backend session to end.'); }

/* ---------------------------- DASHBOARD VIEW ---------------------------- */
function viewDashboard() {
  const u = currentUser;
  const apps = myApplications;
  const active = apps.find(a => a.status !== 'Disbursed' && a.status !== 'Rejected') || apps[0];
  const disbursed = apps.filter(a => a.status === 'Disbursed');
  const elig = lastEligibility;

  return `
  <div class="page-head">
    <h1>Welcome back, ${escapeHtml(u.name.split(' ')[0])} 👋</h1>
    <p>Here's a quick overview of your housing loan journey.</p>
  </div>

  <div class="grid grid-4">
    <div class="card stat"><div class="lbl">Active Applications</div><div class="val teal">${apps.filter(a => a.status !== 'Disbursed' && a.status !== 'Rejected').length}</div></div>
    <div class="card stat"><div class="lbl">Disbursed Loans</div><div class="val teal">${disbursed.length}</div></div>
    <div class="card stat"><div class="lbl">Eligibility Status</div><div class="val">${elig ? elig.status : 'Not Checked'}</div></div>
    <div class="card stat"><div class="lbl">Unread Notifications</div><div class="val teal">${unreadCount()}</div></div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <h3>📋 Current Application</h3>
      ${active ? `
        <div class="stat" style="margin-bottom:10px;"><div class="lbl">Tracking No.</div><div class="val">${active.trackingNo}</div></div>
        <div class="grid grid-2" style="margin-bottom:14px;">
          <div class="stat"><div class="lbl">Loan Type</div><div class="val">${active.loanType}</div></div>
          <div class="stat"><div class="lbl">Amount</div><div class="val">${fmtINR(active.loanAmount)}</div></div>
          <div class="stat"><div class="lbl">Status</div><div class="val"><span class="badge badge-navy">${active.status}</span></div></div>
          <div class="stat"><div class="lbl">Current Stage</div><div class="val">${WORKFLOW_STAGES[active.stageIndex]}</div></div>
        </div>
        <div class="progress-track"><div class="progress-fill" style="width:${(active.stageIndex / (WORKFLOW_STAGES.length - 1) * 100).toFixed(0)}%"></div></div>
        <div style="margin-top:14px;"><button class="btn btn-teal btn-sm" onclick="go('tracking')">View Full Tracking →</button></div>
      ` : `<div class="empty-state"><div class="ic">📄</div>No applications yet. <br><button class="btn btn-primary btn-sm" style="margin-top:10px;" onclick="go('apply')">Apply for a Loan</button></div>`}
    </div>

    <div class="card">
      <h3>✅ Quick Actions</h3>
      <div class="quick-links">
        <a href="#" onclick="go('eligibility');return false;">Check Loan Eligibility <span class="arrow">→</span></a>
        <a href="#" onclick="go('apply');return false;">Apply for New Loan <span class="arrow">→</span></a>
        <a href="#" onclick="go('guidance');return false;">Explore Loan Products <span class="arrow">→</span></a>
        <a href="#" onclick="go('repayment');return false;">View Repayment Schedule <span class="arrow">→</span></a>
        <a href="#" onclick="go('documents');return false;">Manage Documents <span class="arrow">→</span></a>
        <a href="#" onclick="go('support');return false;">Get Support <span class="arrow">→</span></a>
      </div>
    </div>
  </div>

  <div class="card">
    <h3>🔔 Recent Notifications</h3>
    ${renderNotifList(3)}
  </div>
  `;
}

function renderNotifList(limit) {
  const list = notifications.slice(0, limit || 20);
  if (!list.length) return '<div class="empty-state"><div class="ic">🔕</div>No notifications yet.</div>';
  return '<table><tbody>' + list.map(n => `
    <tr>
      <td style="width:34px;">${n.read ? '📖' : '🔵'}</td>
      <td><strong>${escapeHtml(n.title)}</strong><br><span style="color:var(--text-gray);font-size:12px;">${escapeHtml(n.body)}</span></td>
      <td style="text-align:right;color:var(--text-gray);font-size:11.5px;">${n.channels.map(c => `<span class="badge badge-gray" style="margin-left:4px;">${c}</span>`).join('')}<br>${fmtDate(n.ts)}</td>
    </tr>`).join('') + '</tbody></table>';
}

function openNotifPanel() {
  notifications.forEach(n => n.read = true);
  refreshNotifBadge();
  showModal('🔔 Notifications', renderNotifList(30));
}

function refreshNotifBadge() {
  const c = unreadCount();
  const el = $('#notifCount');
  if (el) { el.textContent = c; el.style.display = c > 0 ? 'inline-block' : 'none'; }
}

/* ---------------------------- MODAL ---------------------------- */
function showModal(title, bodyHtml) {
  const overlay = document.createElement('div');
  overlay.className = 'modal-overlay';
  overlay.innerHTML = `<div class="modal-box"><h3>${title}</h3>${bodyHtml}<div style="text-align:right;margin-top:16px;"><button class="btn btn-outline btn-sm" onclick="this.closest('.modal-overlay').remove()">Close</button></div></div>`;
  overlay.addEventListener('click', (e) => { if (e.target === overlay) overlay.remove(); });
  document.body.appendChild(overlay);
}

/* ---------------------------- GLOBAL SEARCH ---------------------------- */
function handleGlobalSearch(val) {
  if (!val) return;
}
document.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && document.activeElement && document.activeElement.id === 'globalSearch') {
    const val = document.activeElement.value.toLowerCase();
    const hit = SIDEBAR_ITEMS.find(s => s.label.toLowerCase().includes(val));
    if (hit) go(hit.view); else toast('No Results', 'Try: dashboard, eligibility, apply, repayment...');
  }
});

/* ---------------------------- SIDEBAR TOGGLE (mobile) ---------------------------- */
function toggleSidebar() {
  $('#sidebar').classList.toggle('open');
}

/* ---------------------------- INIT ---------------------------- */
(function init() {
  $('#userInitials').textContent = currentUser.name.split(' ').map(p => p[0]).join('').toUpperCase().slice(0, 2);
  $('#userNameTop').textContent = currentUser.name;
  renderSidebar();
  refreshNotifBadge();
  go('dashboard');
})();
