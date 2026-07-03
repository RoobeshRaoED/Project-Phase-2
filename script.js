/* ======================================================================
   PROFILE MANAGEMENT DASHBOARD — Pure HTML / CSS / JS, no backend.
   All data is persisted to localStorage.
   ====================================================================== */

/* ---------------------------- DB LAYER ---------------------------- */
const DB_KEY = 'pmd_profile_v1';

function defaultProfile(){
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
    notifPrefs: { email: true, sms: false, push: true, newsletter: false },
    privacy: { profileVisible: true, showEmail: false, showMobile: false },
    createdAt: new Date().toISOString(),
    lastUpdated: new Date().toISOString()
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

function profileCompleteness(){
  const fields = [DB.name, DB.email, DB.mobile, DB.dob, DB.gender, DB.bio, DB.address, DB.city, DB.state, DB.pincode, DB.jobTitle, DB.company, DB.avatar];
  const filled = fields.filter(v => v && v.toString().trim().length).length;
  return Math.round((filled / fields.length) * 100);
}

/* ---------------------------- NAVIGATION ---------------------------- */
let currentView = 'dashboard';
const VIEWS = {
  dashboard: { render: viewDashboard, after: () => {} },
  profile: { render: viewProfile, after: afterProfile },
  security: { render: viewSecurity, after: () => {} },
  preferences: { render: viewPreferences, after: () => {} }
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
  $('#userNameTop').textContent = (DB.name || 'User').split(' ')[0];
  const av = $('#userInitials');
  av.innerHTML = DB.avatar ? `<img src="${DB.avatar}" alt="avatar">` : initialsOf(DB.name);
}

/* ================================================================
   DASHBOARD
   ================================================================ */
function viewDashboard(){
  const pct = profileCompleteness();
  return `
  <div class="page-head"><h1>Welcome back, ${escapeHtml((DB.name||'User').split(' ')[0])} 👋</h1><p>Here's a snapshot of your profile.</p></div>

  <div class="card">
    <div class="progress-label"><span>Profile Completeness</span><span>${pct}%</span></div>
    <div class="progress-track"><div class="progress-fill" style="width:${pct}%;"></div></div>
  </div>

  <div class="grid grid-4">
    <div class="card stat"><div class="lbl">Job Title</div><div class="val">${escapeHtml(DB.jobTitle || '—')}</div></div>
    <div class="card stat"><div class="lbl">Company</div><div class="val">${escapeHtml(DB.company || '—')}</div></div>
    <div class="card stat"><div class="lbl">City</div><div class="val">${escapeHtml(DB.city || '—')}</div></div>
    <div class="card stat"><div class="lbl">Last Updated</div><div class="val teal">${fmtDate(DB.lastUpdated)}</div></div>
  </div>

  <div class="grid grid-2">
    <div class="card">
      <h3>👤 Profile Snapshot</h3>
      <div class="profile-hero">
        <div class="avatar-big">${DB.avatar ? `<img src="${DB.avatar}" alt="avatar">` : initialsOf(DB.name)}</div>
        <div class="who">
          <h2>${escapeHtml(DB.name)}</h2>
          <p>${escapeHtml(DB.jobTitle || '')}${DB.company ? ' · ' + escapeHtml(DB.company) : ''}</p>
          <p>${escapeHtml(DB.email)}</p>
        </div>
      </div>
      <p style="font-size:13px;color:var(--text-mid);line-height:1.6;margin-top:16px;">${escapeHtml(DB.bio || 'No bio added yet.')}</p>
    </div>
    <div class="card">
      <h3>✅ Quick Actions</h3>
      <div class="quick-links">
        <a onclick="go('profile')">Edit Personal Information <span class="arrow">→</span></a>
        <a onclick="go('security')">Change Password <span class="arrow">→</span></a>
        <a onclick="go('preferences')">Notification &amp; Privacy Settings <span class="arrow">→</span></a>
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
  <div class="page-head"><h1>Profile Settings</h1><p>Manage your personal, contact and professional information.</p></div>

  <div class="card">
    <div class="profile-hero">
      <div class="avatar-big" id="avatarPreview">${DB.avatar ? `<img src="${DB.avatar}" alt="avatar">` : initialsOf(DB.name)}
        <label class="avatar-edit" title="Change photo">✎<input type="file" id="avatarInput" accept="image/*" onchange="handleAvatarUpload(event)"></label>
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
      <h3>👤 Personal Information</h3>
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
      <h3>📞 Contact Information</h3>
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
    <h3>💼 Professional Information</h3>
    <div class="grid grid-3">
      <div class="field"><label>Job Title</label><input id="pfJobTitle" value="${escapeHtml(DB.jobTitle||'')}"></div>
      <div class="field"><label>Company</label><input id="pfCompany" value="${escapeHtml(DB.company||'')}"></div>
      <div class="field"><label>Department</label><input id="pfDepartment" value="${escapeHtml(DB.department||'')}"></div>
    </div>
    <button class="btn btn-primary" onclick="saveProfessional()">Save Changes</button>
  </div>
  `;
}
function afterProfile(){}

function handleAvatarUpload(evt){
  const file = evt.target.files && evt.target.files[0];
  if(!file) return;
  if(!file.type.startsWith('image/')) return toast('Invalid File', 'Please choose an image file.', 'error');
  if(file.size > 2*1024*1024) return toast('File Too Large', 'Please choose an image under 2MB.', 'error');
  const reader = new FileReader();
  reader.onload = () => {
    DB.avatar = reader.result;
    saveDB();
    toast('Photo Updated', 'Your profile photo has been updated.', 'success');
    go('profile');
  };
  reader.readAsDataURL(file);
}
function removeAvatar(){
  DB.avatar = '';
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
  saveDB();
  toast('Contact Details Updated', 'Your contact information has been saved.', 'success');
  go('profile');
}

function saveProfessional(){
  DB.jobTitle = $('#pfJobTitle').value.trim();
  DB.company = $('#pfCompany').value.trim();
  DB.department = $('#pfDepartment').value.trim();
  saveDB();
  toast('Profile Updated', 'Your professional details have been saved.', 'success');
  go('profile');
}

/* ================================================================
   SECURITY (Change Password)
   ================================================================ */
function viewSecurity(){
  return `
  <div class="page-head"><h1>Security</h1><p>Keep your account secure by updating your password regularly.</p></div>
  <div class="grid grid-2">
    <div class="card">
      <h3>🔒 Change Password</h3>
      <div class="field"><label>Current Password</label><input type="password" id="cpCurrent"><div class="error hidden" id="err_cpCurrent"></div></div>
      <div class="field"><label>New Password</label><input type="password" id="cpNew"><div class="hint">Min 8 chars, with upper, lower, number &amp; special character.</div><div class="error hidden" id="err_cpNew"></div></div>
      <div class="field"><label>Confirm New Password</label><input type="password" id="cpNew2"><div class="error hidden" id="err_cpNew2"></div></div>
      <button class="btn btn-primary" onclick="changePassword()">Update Password</button>
    </div>
    <div class="card">
      <h3>ℹ️ Account Info</h3>
      <div class="field"><label>Member Since</label><input value="${fmtDate(DB.createdAt)}" disabled></div>
      <div class="field"><label>Last Updated</label><input value="${fmtDate(DB.lastUpdated)}" disabled></div>
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
  <div class="page-head"><h1>Preferences</h1><p>Control how you're notified and what others can see.</p></div>
  <div class="grid grid-2">
    <div class="card">
      <h3>🔔 Notification Preferences</h3>
      <label class="chk-row"><input type="checkbox" id="npEmail" ${np.email?'checked':''}> Email Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npSms" ${np.sms?'checked':''}> SMS Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npPush" ${np.push?'checked':''}> Push Notifications</label><br>
      <label class="chk-row"><input type="checkbox" id="npNewsletter" ${np.newsletter?'checked':''}> Newsletter &amp; Product Updates</label>
      <button class="btn btn-primary btn-sm" onclick="saveNotifPrefs()">Save Preferences</button>
    </div>
    <div class="card">
      <h3>🛡️ Privacy Settings</h3>
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
  saveDB();
  toast('Preferences Saved', 'Your notification settings have been updated.', 'success');
}
function savePrivacy(){
  DB.privacy = {
    profileVisible: $('#pvVisible').checked,
    showEmail: $('#pvEmail').checked,
    showMobile: $('#pvMobile').checked
  };
  saveDB();
  toast('Preferences Saved', 'Your privacy settings have been updated.', 'success');
}

/* ================================================================
   INIT
   ================================================================ */
(function init(){
  syncTopbar();
  go('dashboard');
})();
