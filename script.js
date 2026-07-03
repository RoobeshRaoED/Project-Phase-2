/* ======================================================================
   PROFILE MANAGEMENT SYSTEM — Pure HTML / CSS / JS, no backend.
   All data is persisted to localStorage.
   ====================================================================== */

/* ---------------------------- ICONS (inline SVG paths) ---------------------------- */
const ICONS = {
  checkCircle: '<svg viewBox="0 0 24 24"><path d="M9 12l2 2 4-4"/><circle cx="12" cy="12" r="9"/></svg>',
  shield: '<svg viewBox="0 0 24 24"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3z"/></svg>',
  list: '<svg viewBox="0 0 24 24"><path d="M8 6h12M8 12h12M8 18h12"/><circle cx="4" cy="6" r="1"/><circle cx="4" cy="12" r="1"/><circle cx="4" cy="18" r="1"/></svg>',
  clock: '<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="9"/><path d="M12 7v5l3.5 2"/></svg>',
  calendar: '<svg viewBox="0 0 24 24"><rect x="3.5" y="5" width="17" height="16" rx="2"/><path d="M8 3v4M16 3v4M3.5 10h17"/></svg>',
  user: '<svg viewBox="0 0 24 24"><circle cx="12" cy="8" r="3.5"/><path d="M5 20c0-3.87 3.13-6.5 7-6.5s7 2.63 7 6.5"/></svg>',
  edit: '<svg viewBox="0 0 24 24"><path d="M4 20h4L18.5 9.5a2 2 0 0 0-4-4L4 16v4z"/></svg>',
  lock: '<svg viewBox="0 0 24 24"><rect x="5" y="10.5" width="14" height="9.5" rx="1.5"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/></svg>',
  bell: '<svg viewBox="0 0 24 24"><path d="M6 8a6 6 0 0 1 12 0c0 5 2 6 2 6H4s2-1 2-6"/><path d="M10 20a2 2 0 0 0 4 0"/></svg>',
  sliders: '<svg viewBox="0 0 24 24"><path d="M4 6h9M17 6h3M4 12h3M11 12h9M4 18h13M21 18h-1"/><circle cx="13" cy="6" r="2"/><circle cx="7" cy="12" r="2"/><circle cx="17" cy="18" r="2"/></svg>',
  activity: '<svg viewBox="0 0 24 24"><path d="M3 12h4l2-7 4 14 2-7h6"/></svg>',
  camera: '<svg viewBox="0 0 24 24"><path d="M4 8h3l2-2.5h6L17 8h3a1 1 0 0 1 1 1v9a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z"/><circle cx="12" cy="13" r="3.5"/></svg>'
};

/* ---------------------------- DB LAYER ---------------------------- */
const DB_KEY = 'pms_profile_v2';

function defaultProfile(){
  const now = new Date();
  return {
    name: 'Aditi Sharma',
    email: 'aditi.sharma@example.com',
    mobile: '9876543210',
    dob: '1996-04-12',
    gender: 'Female',
    bio: 'Product-minded engineer who loves clean UI and clean code.',
    address: '204, Lotus Residency, Andheri West',
    city: 'Mumbai',
    state: 'Maharashtra',
    pincode: '400058',
    jobTitle: 'Senior Software Engineer',
    company: 'Nimbus Tech Pvt. Ltd.',
    department: 'Engineering',
    avatar: '',
    password: 'Passw0rd!',
    accountStatus: 'Active',
    notifPrefs: { email: true, sms: false, push: true, newsletter: false },
    privacy: { profileVisible: true, showEmail: false, showMobile: false },
    activityLog: [
      { title: 'Account created', detail: 'Welcome to your Profile Management dashboard.', ts: now.toISOString() }
    ],
    createdAt: now.toISOString(),
    lastLogin: now.toISOString(),
    lastUpdated: now.toISOString()
  };
}

function loadDB(){
  let raw = localStorage.getItem(DB_KEY);
  if(!raw){
    const fresh = defaultProfile();
    localStorage.setItem(DB_KEY, JSON.stringify(fresh));
    return fresh;
  }
  return JSON.parse(raw);
}
function saveDB(){ DB.lastUpdated = new Date().toISOString(); localStorage.setItem(DB_KEY, JSON.stringify(DB)); }
let DB = loadDB();

function logActivity(title, detail){
  DB.activityLog = DB.activityLog || [];
  DB.activityLog.unshift({ title, detail, ts: new Date().toISOString() });
  DB.activityLog = DB.activityLog.slice(0, 20);
}

function resetProfile(){
  if(!confirm('Reset all profile data back to the demo defaults?')) return;
  DB = defaultProfile();
  saveDB();
  toast('Demo Data Reset', 'Profile has been restored to defaults.', 'success');
  go(currentView || 'dashboard');
}

/* ---------------------------- HELPERS ---------------------------- */
function $(sel, root){ return (root || document).querySelector(sel); }
function $all(sel, root){ return Array.from((root || document).querySelectorAll(sel)); }
function escapeHtml(s){ return (s || '').toString().replace(/[&<>"']/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c])); }
function fmtDate(d){ if(!d) return '—'; const dt = new Date(d); return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short',year:'numeric'}); }
function fmtDateTime(d){ if(!d) return '—'; const dt = new Date(d); return dt.toLocaleDateString('en-IN',{day:'2-digit',month:'short'}) + ', ' + dt.toLocaleTimeString('en-IN',{hour:'2-digit',minute:'2-digit'}); }
function initialsOf(name){ return (name || 'U').trim().split(/\s+/).map(s => s[0]).join('').slice(0,2).toUpperCase(); }

function toast(title, msg, type){
  type = type || 'info';
  const el = document.createElement('div');
  el.className = 'toast ' + type;
  el.innerHTML = '<strong>' + escapeHtml(title) + '</strong>' + escapeHtml(msg || '');
  $('#toastWrap').appendChild(el);
  setTimeout(() => { el.style.opacity = '0'; el.style.transition = '.3s'; setTimeout(() => el.remove(), 300); }, 4200);
}

const REGEX = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  mobile: /^[6-9]\d{9}$/,
  pincode: /^\d{6}$/,
  password: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_\-+=]).{8,}$/
};
function fieldError(inputEl, msgEl, msg){
  inputEl.style.borderColor = 'var(--red)';
  if(msgEl){ msgEl.textContent = msg; msgEl.classList.remove('hidden'); }
  return false;
}
function fieldOk(inputEl, msgEl){
  inputEl.style.borderColor = 'var(--border)';
  if(msgEl){ msgEl.textContent = ''; msgEl.classList.add('hidden'); }
  return true;
}

const PROFILE_FIELDS = ['name','email','mobile','dob','gender','bio','address','city','state','pincode','jobTitle','company','avatar'];
function profileCompleteness(){
  const filled = PROFILE_FIELDS.filter(k => DB[k] && DB[k].toString().trim().length).length;
  return { pct: Math.round((filled / PROFILE_FIELDS.length) * 100), filled, total: PROFILE_FIELDS.length };
}

/* ---------------------------- NAVIGATION ---------------------------- */
let currentView = 'dashboard';
const VIEWS = {
  dashboard: { render: viewDashboard, after: () => {} },
  profile: { render: viewProfile, after: () => {} },
  security: { render: viewSecurity, after: () => {} },
  preferences: { render: viewPreferences, after: () => {} },
  activity: { render: viewActivity, after: () => {} }
};

function go(view){
  if(!VIEWS[view]) view = 'dashboard';
  currentView = view;
  $all('.nav-item').forEach(n => n.classList.toggle('active', n.dataset.view === view));
  $('#main').innerHTML = VIEWS[view].render();
  VIEWS[view].after();
  syncTopbar();
  if(window.innerWidth <= 880) $('#sidebar').classList.remove('open');
  window.scrollTo(0,0);
}
function toggleSidebar(){ $('#sidebar').classList.toggle('open'); }

function syncTopbar(){
  $('#userNameTop').textContent = DB.name || 'User';
  $('#userRoleTop').textContent = DB.jobTitle || 'Member';
  const av = $('#userInitials');
  av.innerHTML = DB.avatar ? `<img src="${DB.avatar}" alt="avatar">` : initialsOf(DB.name);
  $('#notifCount').textContent = 2;
}

/* ================================================================
   DASHBOARD
   ================================================================ */
function viewDashboard(){
  const comp = profileCompleteness();
  const ringDeg = Math.round(comp.pct * 3.6);

  return `
  <div class="page-head">
    <div>
      <h1>Welcome back, ${escapeHtml((DB.name||'User').split(' ')[0])}!</h1>
      <p>Here's an overview of your profile.</p>
    </div>
    <button class="btn btn-primary" onclick="go('profile')">${ICONS.edit.replace('viewBox="0 0 24 24"','viewBox="0 0 24 24" style="width:15px;height:15px;"')} Edit Profile</button>
  </div>

  <div class="grid grid-5">
    <div class="card stat-card">
      <div class="stat-ic">${ICONS.checkCircle}</div>
      <div><div class="stat-lbl">Profile Completion</div><div class="stat-val">${comp.pct}%</div></div>
      <a class="stat-link" onclick="go('profile')">View Details →</a>
    </div>
    <div class="card stat-card">
      <div class="stat-ic navy">${ICONS.shield}</div>
      <div><div class="stat-lbl">Account Status</div><div class="stat-val">${escapeHtml(DB.accountStatus)}</div></div>
      <a class="stat-link" onclick="go('security')">Manage →</a>
    </div>
    <div class="card stat-card">
      <div class="stat-ic purple">${ICONS.list}</div>
      <div><div class="stat-lbl">Fields Completed</div><div class="stat-val">${comp.filled}/${comp.total}</div></div>
      <a class="stat-link" onclick="go('profile')">Complete Now →</a>
    </div>
    <div class="card stat-card">
      <div class="stat-ic orange">${ICONS.clock}</div>
      <div><div class="stat-lbl">Last Login</div><div class="stat-val" style="font-size:15px;">${fmtDateTime(DB.lastLogin)}</div></div>
      <a class="stat-link" onclick="go('activity')">View Activity →</a>
    </div>
    <div class="card stat-card">
      <div class="stat-ic red">${ICONS.calendar}</div>
      <div><div class="stat-lbl">Member Since</div><div class="stat-val" style="font-size:15px;">${fmtDate(DB.createdAt)}</div></div>
      <a class="stat-link" onclick="go('security')">View Account →</a>
    </div>
  </div>

  <div class="grid grid-3">
    <div class="card">
      <div class="card-head"><h3>Profile Overview</h3><span class="badge badge-teal">${escapeHtml(DB.jobTitle ? 'PERSONAL' : 'PERSONAL')} • ${escapeHtml(DB.accountStatus.toUpperCase())}</span></div>
      <div class="overview-visual">${ICONS.user}</div>
      <div class="kv-row"><span class="k">Full Name</span><span class="v">${escapeHtml(DB.name)}</span></div>
      <div class="kv-row"><span class="k">Email</span><span class="v">${escapeHtml(DB.email)}</span></div>
      <div class="kv-row"><span class="k">Mobile</span><span class="v">${escapeHtml(DB.mobile)}</span></div>
      <div class="kv-row"><span class="k">Job Title</span><span class="v">${escapeHtml(DB.jobTitle||'—')}</span></div>
      <div class="kv-row"><span class="k">Company</span><span class="v">${escapeHtml(DB.company||'—')}</span></div>
    </div>

    <div class="card">
      <h3>Profile Completion</h3>
      <div class="ring-wrap">
        <div class="ring" style="background:conic-gradient(var(--teal) ${ringDeg}deg, var(--border) 0deg);">
          <div class="ring-inner"><div class="pct">${comp.pct}%</div><div class="cap">Complete</div></div>
        </div>
      </div>
      <div class="legend-row"><span class="legend-dot" style="background:var(--teal);"></span><span class="lbl">Fields Completed</span><span class="val">${comp.filled} (${comp.pct}%)</span></div>
      <div class="legend-row"><span class="legend-dot" style="background:var(--border);"></span><span class="lbl">Fields Remaining</span><span class="val">${comp.total - comp.filled} (${100-comp.pct}%)</span></div>
    </div>

    <div class="card">
      <h3>Quick Actions</h3>
      <div class="quick-links">
        <a onclick="go('profile')">Edit Personal Information <span class="arrow">→</span></a>
        <a onclick="go('security')">Change Password <span class="arrow">→</span></a>
        <a onclick="go('preferences')">Notification Settings <span class="arrow">→</span></a>
        <a onclick="go('preferences')">Privacy Settings <span class="arrow">→</span></a>
        <a onclick="go('activity')">View Activity Log <span class="arrow">→</span></a>
      </div>
    </div>
  </div>
  `;
}

/* ================================================================
   PROFILE SETTINGS
   ================================================================ */
function viewProfile(){
  return `
  <div class="page-head"><div><h1>Profile Settings</h1><p>Manage your personal, contact and professional information.</p></div></div>

  <div class="card">
    <div class="profile-hero">
      <div class="avatar-big" id="avatarPreview">${DB.avatar ? `<img src="${DB.avatar}" alt="avatar">` : initialsOf(DB.name)}
        <label class="avatar-edit" title="Change photo">${ICONS.camera}<input type="file" id="avatarInput" accept="image/*" onchange="handleAvatarUpload(event)"></label>
      </div>
      <div class="who">
        <h2>${escapeHtml(DB.name)}</h2>
        <p>${escapeHtml(DB.email)}</p>
        ${DB.avatar ? `<button class="btn btn-outline btn-sm" style="margin-top:8px;" onclick="removeAvatar()">Remove Photo</button>` : ''}
      </div>
    </div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <h3>Personal Information</h3>
      <div class="field"><label>Full Name</label><input id="pfName" value="${escapeHtml(DB.name)}"><div class="error hidden" id="err_pfName"></div></div>
      <div class="two-col">
        <div class="field"><label>Date of Birth</label><input type="date" id="pfDob" value="${DB.dob||''}"></div>
        <div class="field"><label>Gender</label>
          <select id="pfGender">
            <option ${DB.gender==='Female'?'selected':''}>Female</option>
            <option ${DB.gender==='Male'?'selected':''}>Male</option>
            <option ${DB.gender==='Other'?'selected':''}>Other</option>
          </select>
        </div>
      </div>
      <div class="field"><label>Bio</label><textarea id="pfBio" rows="3" placeholder="A short line about yourself...">${escapeHtml(DB.bio||'')}</textarea></div>
      <button class="btn btn-primary" onclick="savePersonal()">Save Changes</button>
    </div>

    <div class="card">
      <h3>Contact Information</h3>
      <div class="two-col">
        <div class="field"><label>Email</label><input id="pfEmail" value="${escapeHtml(DB.email)}"><div class="error hidden" id="err_pfEmail"></div></div>
        <div class="field"><label>Mobile</label><input id="pfMobile" value="${escapeHtml(DB.mobile)}"><div class="error hidden" id="err_pfMobile"></div></div>
      </div>
      <div class="field"><label>Address</label><input id="pfAddress" value="${escapeHtml(DB.address||'')}"></div>
      <div class="two-col">
        <div class="field"><label>City</label><input id="pfCity" value="${escapeHtml(DB.city||'')}"></div>
        <div class="field"><label>State</label><input id="pfState" value="${escapeHtml(DB.state||'')}"></div>
      </div>
      <div class="field"><label>Pincode</label><input id="pfPincode" value="${escapeHtml(DB.pincode||'')}"><div class="error hidden" id="err_pfPincode"></div></div>
      <button class="btn btn-primary" onclick="saveContact()">Save Changes</button>
    </div>
  </div>

  <div class="card">
    <h3>Professional Information</h3>
    <div class="grid grid-3">
      <div class="field"><label>Job Title</label><input id="pfJobTitle" value="${escapeHtml(DB.jobTitle||'')}"></div>
      <div class="field"><label>Company</label><input id="pfCompany" value="${escapeHtml(DB.company||'')}"></div>
      <div class="field"><label>Department</label><input id="pfDepartment" value="${escapeHtml(DB.department||'')}"></div>
    </div>
    <button class="btn btn-primary" onclick="saveProfessional()">Save Changes</button>
  </div>
  `;
}

function handleAvatarUpload(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')) return toast('Invalid File', 'Please choose an image file.', 'error');
  if(file.size > 2*1024*1024) return toast('File Too Large', 'Please choose an image under 2MB.', 'error');
  const reader = new FileReader();
  reader.onload = () => {
    DB.avatar = reader.result;
    logActivity('Profile photo updated', 'A new profile photo was uploaded.');
    saveDB();
    toast('Photo Updated', 'Your profile photo has been updated.', 'success');
    go('profile');
  };
  reader.readAsDataURL(file);
}
function removeAvatar(){
  DB.avatar = '';
  logActivity('Profile photo removed', 'The profile photo was removed.');
  saveDB();
  toast('Photo Removed', 'Your profile photo has been removed.', 'success');
  go('profile');
}

function savePersonal(){
  const nameEl = $('#pfName');
  let ok = true;
  if(!nameEl.value.trim()) ok = fieldError(nameEl, $('#err_pfName'), 'Name is required.') && ok;
  else fieldOk(nameEl, $('#err_pfName'));
  if(!ok) return;
  DB.name = nameEl.value.trim();
  DB.dob = $('#pfDob').value;
  DB.gender = $('#pfGender').value;
  DB.bio = $('#pfBio').value.trim();
  logActivity('Personal information updated', 'Name, date of birth, gender or bio changed.');
  saveDB();
  syncTopbar();
  toast('Profile Updated', 'Your personal information has been saved.', 'success');
  go('profile');
}

function saveContact(){
  const emailEl = $('#pfEmail'), mobileEl = $('#pfMobile'), pinEl = $('#pfPincode');
  let ok = true;
  if(!REGEX.email.test(emailEl.value.trim())) ok = fieldError(emailEl, $('#err_pfEmail'), 'Enter a valid email address.') && ok;
  else fieldOk(emailEl, $('#err_pfEmail'));
  if(!REGEX.mobile.test(mobileEl.value.trim())) ok = fieldError(mobileEl, $('#err_pfMobile'), 'Enter a valid 10-digit mobile number.') && ok;
  else fieldOk(mobileEl, $('#err_pfMobile'));
  if(pinEl.value.trim() && !REGEX.pincode.test(pinEl.value.trim())) ok = fieldError(pinEl, $('#err_pfPincode'), 'Enter a valid 6-digit pincode.') && ok;
  else fieldOk(pinEl, $('#err_pfPincode'));
  if(!ok) return;
  DB.email = emailEl.value.trim();
  DB.mobile = mobileEl.value.trim();
  DB.address = $('#pfAddress').value.trim();
  DB.city = $('#pfCity').value.trim();
  DB.state = $('#pfState').value.trim();
  DB.pincode = pinEl.value.trim();
  logActivity('Contact information updated', 'Email, mobile or address changed.');
  saveDB();
  toast('Contact Details Updated', 'Your contact information has been saved.', 'success');
  go('profile');
}

function saveProfessional(){
  DB.jobTitle = $('#pfJobTitle').value.trim();
  DB.company = $('#pfCompany').value.trim();
  DB.department = $('#pfDepartment').value.trim();
  logActivity('Professional information updated', 'Job title, company or department changed.');
  saveDB();
  toast('Profile Updated', 'Your professional details have been saved.', 'success');
  go('profile');
}

/* ================================================================
   SECURITY (Change Password)
   ================================================================ */
function viewSecurity(){
  return `
  <div class="page-head"><div><h1>Security</h1><p>Keep your account secure by updating your password regularly.</p></div></div>
  <div class="grid grid-2">
    <div class="card">
      <h3>Change Password</h3>
      <div class="field"><label>Current Password</label><input type="password" id="cpCurrent"><div class="error hidden" id="err_cpCurrent"></div></div>
      <div class="field"><label>New Password</label><input type="password" id="cpNew"><div class="hint">Min 8 chars, with upper, lower, number &amp; special character.</div><div class="error hidden" id="err_cpNew"></div></div>
      <div class="field"><label>Confirm New Password</label><input type="password" id="cpNew2"><div class="error hidden" id="err_cpNew2"></div></div>
      <button class="btn btn-primary" onclick="changePassword()">Update Password</button>
    </div>
    <div class="card">
      <h3>Account Info</h3>
      <div class="field"><label>Account Status</label><input value="${escapeHtml(DB.accountStatus)}" disabled></div>
      <div class="field"><label>Member Since</label><input value="${fmtDate(DB.createdAt)}" disabled></div>
      <div class="field"><label>Last Login</label><input value="${fmtDateTime(DB.lastLogin)}" disabled></div>
      <div class="field"><label>Last Updated</label><input value="${fmtDateTime(DB.lastUpdated)}" disabled></div>
    </div>
  </div>
  `;
}
function changePassword(){
  const cur = $('#cpCurrent'), n1 = $('#cpNew'), n2 = $('#cpNew2');
  let ok = true;
  if(cur.value !== DB.password) ok = fieldError(cur, $('#err_cpCurrent'), 'Current password is incorrect.') && ok;
  else fieldOk(cur, $('#err_cpCurrent'));
  if(!REGEX.password.test(n1.value)) ok = fieldError(n1, $('#err_cpNew'), 'Password must have upper, lower, number & special char (8+ chars).') && ok;
  else fieldOk(n1, $('#err_cpNew'));
  if(n1.value !== n2.value) ok = fieldError(n2, $('#err_cpNew2'), 'Passwords do not match.') && ok;
  else fieldOk(n2, $('#err_cpNew2'));
  if(!ok) return;
  DB.password = n1.value;
  logActivity('Password changed', 'Account password was updated.');
  saveDB();
  toast('Password Changed', 'Your password has been updated successfully.', 'success');
  cur.value = n1.value = n2.value = '';
}

/* ================================================================
   PREFERENCES (Notifications + Privacy)
   ================================================================ */
function viewPreferences(){
  const np = DB.notifPrefs, pv = DB.privacy;
  return `
  <div class="page-head"><div><h1>Preferences</h1><p>Control how you're notified and what others can see.</p></div></div>
  <div class="grid grid-2">
    <div class="card">
      <h3>Notification Preferences</h3>
      <label class="chk-row"><input type="checkbox" id="npEmail" ${np.email?'checked':''}> Email Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npSms" ${np.sms?'checked':''}> SMS Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npPush" ${np.push?'checked':''}> Push Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npNewsletter" ${np.newsletter?'checked':''}> Newsletter &amp; Product Updates</label>
      <button class="btn btn-primary btn-sm" onclick="saveNotifPrefs()">Save Preferences</button>
    </div>
    <div class="card">
      <h3>Privacy Settings</h3>
      <label class="chk-row"><input type="checkbox" id="pvVisible" ${pv.profileVisible?'checked':''}> Make my profile visible to others</label><br>
      <label class="chk-row"><input type="checkbox" id="pvEmail" ${pv.showEmail?'checked':''}> Show email on public profile</label><br>
      <label class="chk-row"><input type="checkbox" id="pvMobile" ${pv.showMobile?'checked':''}> Show mobile number on public profile</label>
      <button class="btn btn-primary btn-sm" onclick="savePrivacy()">Save Preferences</button>
    </div>
  </div>
  `;
}
function saveNotifPrefs(){
  DB.notifPrefs = {
    email: $('#npEmail').checked,
    sms: $('#npSms').checked,
    push: $('#npPush').checked,
    newsletter: $('#npNewsletter').checked
  };
  logActivity('Notification preferences updated', 'Notification channel settings changed.');
  saveDB();
  toast('Preferences Saved', 'Your notification settings have been updated.', 'success');
}
function savePrivacy(){
  DB.privacy = {
    profileVisible: $('#pvVisible').checked,
    showEmail: $('#pvEmail').checked,
    showMobile: $('#pvMobile').checked
  };
  logActivity('Privacy settings updated', 'Profile visibility settings changed.');
  saveDB();
  toast('Preferences Saved', 'Your privacy settings have been updated.', 'success');
}

/* ================================================================
   ACTIVITY LOG
   ================================================================ */
function viewActivity(){
  const log = DB.activityLog || [];
  return `
  <div class="page-head"><div><h1>Activity Log</h1><p>A history of recent changes made to your account.</p></div></div>
  <div class="card">
    <h3>Recent Activity</h3>
    ${!log.length ? '<div class="empty-state">No activity recorded yet.</div>' : log.map(item => `
      <div class="tl-item">
        <div class="tl-dot">${ICONS.activity}</div>
        <div class="tl-body">
          <h5>${escapeHtml(item.title)}</h5>
          <p>${escapeHtml(item.detail)} &nbsp;·&nbsp; ${fmtDateTime(item.ts)}</p>
        </div>
      </div>
    `).join('')}
  </div>
  `;
}

/* ================================================================
   NOTIFICATIONS (simple demo panel)
   ================================================================ */
function openNotifPanel(){
  toast('Notifications', 'Password strength check and profile completion reminder.', 'info');
}

/* ================================================================
   INIT
   ================================================================ */
(function init(){
  syncTopbar();
  go('dashboard');
})();
