const scheduleList = document.querySelector('#schedule-list');
const tabs = document.querySelectorAll('.tab');
const contactGrid = document.querySelector('#contact-grid');
const activityList = document.querySelector('#activity-list');
const menuGrid = document.querySelector('#menu-grid');
const prayerGrid = document.querySelector('#prayer-grid');
const scoreGrid = document.querySelector('#score-grid');
const competitionGrid = document.querySelector('#competition-grid');
const highRopesGrid = document.querySelector('#high-ropes-grid');

function colorizeTeams(text) {
  let output = text;
  Object.entries(teamColors).forEach(([name, color]) => {
    output = output.replace(new RegExp(`\\b${name}\\b`, 'g'), `<span class="team-pill" style="--team:${color}">${name}</span>`);
  });
  return output;
}


function renderTeamBadge(team) {
  const color = teamColors[team] || '#555';
  return `<span class="team-pill matchup-pill" style="--team:${color}">${team}</span>`;
}

function renderMatchup(match) {
  const parts = match.split(/\s+v(?:s\.)?\s+/i).map(part => part.trim()).filter(Boolean);
  if (parts.length === 2) {
    return `<div class="matchup-row">${renderTeamBadge(parts[0])}<span class="matchup-vs">vs.</span>${renderTeamBadge(parts[1])}</div>`;
  }
  return `<div class="matchup-row matchup-row--text">${colorizeTeams(match.replace(/\bv\b/i, 'vs.'))}</div>`;
}

function renderSchedule(day) {
  scheduleList.innerHTML = schedule[day].map(([time, item]) => `
    <article class="schedule-item">
      <time>${time}</time>
      <p>${colorizeTeams(item)}</p>
    </article>
  `).join('');
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => {
    tabs.forEach(t => t.classList.remove('is-active'));
    tab.classList.add('is-active');
    renderSchedule(tab.dataset.day);
  });
});

contactGrid.innerHTML = contacts.map(contact => {
  const tel = contact.phone.replace(/[^0-9]/g, '');
  const initials = contact.name.split(' ').map(part => part[0]).join('').slice(0, 2);
  const photo = contact.photo
    ? `<img class="contact-photo" src="${contact.photo}" alt="${contact.name}" loading="lazy" onerror="this.replaceWith(Object.assign(document.createElement('div'), { className: 'photo-placeholder', textContent: '${initials}' }))" />`
    : `<div class="photo-placeholder">${initials}</div>`;
  return `
    <article class="contact-card">
      ${photo}
      <p class="role">${contact.role}</p>
      <h3>${contact.name}</h3>
      <a class="call-link" href="tel:${tel}">Call ${contact.phone}</a>
    </article>
  `;
}).join('');

scoreGrid.innerHTML = activityIntro.map(item => `
  <article>
    <strong>${item.title}</strong>
    <p>${item.body}</p>
  </article>
`).join('');

activityList.innerHTML = activityGroups.map(group => `
  <section class="activity-group">
    <div class="activity-group__header">
      <h3>${group.heading}</h3>
      <p>${group.note}</p>
    </div>
    <div class="accordion">
      ${group.items.map((activity, index) => `
        <details class="activity-card">
          <summary>
            <span>
              <strong>${activity.title}</strong>
              <small>${activity.label}</small>
              <em>${activity.quick}</em>
            </span>
            <span class="chevron">+</span>
          </summary>
          <div class="activity-body">
            ${activity.paragraphs.map(p => `<p>${p}</p>`).join('')}
            ${activity.bullets ? `<ul>${activity.bullets.map(b => `<li>${b}</li>`).join('')}</ul>` : ''}
          </div>
        </details>
      `).join('')}
    </div>
  </section>
`).join('');

document.querySelectorAll('details.activity-card').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details.activity-card').forEach(other => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

competitionGrid.innerHTML = competitionSchedule.map(day => `
  <article class="competition-day">
    <header>
      <p class="eyebrow">${day.day}</p>
      <h3>Dreams & Team Comps</h3>
    </header>
    <div class="dream-list">
      ${day.dreams.map(dream => `<div><strong>${dream.time} - ${dream.title}</strong><span>${dream.game} - ${dream.location}</span></div>`).join('')}
    </div>
    <h4>Team Competition Rotation</h4>
    ${day.teamComps.map(comp => `
      <div class="comp-card">
        <strong>${comp.game}</strong>
        <span>${comp.location}</span>
        <div class="matchup-list">${comp.matchups.map(match => renderMatchup(match)).join('')}</div>
      </div>
    `).join('')}
  </article>
`).join('');

highRopesGrid.innerHTML = highRopesSchedule.map(group => `
  <details class="high-ropes-card">
    <summary>
      <span>
        <strong>${group.day}</strong>
        <small>${group.time} - ${group.wristband}</small>
      </span>
      <span class="chevron">+</span>
    </summary>
    <div class="student-list">
      ${group.students.map(student => `
        <article>
          <strong>${student.name}</strong>
          <span>Cabin ${student.cabin}</span>
          <small>${student.church}</small>
        </article>
      `).join('')}
    </div>
  </details>
`).join('');

document.querySelectorAll('details.high-ropes-card').forEach(detail => {
  detail.addEventListener('toggle', () => {
    if (!detail.open) return;
    document.querySelectorAll('details.high-ropes-card').forEach(other => {
      if (other !== detail) other.removeAttribute('open');
    });
  });
});

function renderMealTimes(meal) {
  if (!meal.serviceTimes || !meal.serviceTimes.length) return `<span>${meal.time}</span>`;
  return `<div class="meal-times">${meal.serviceTimes.map(slot => `
    <div class="meal-time-row">
      <strong>${slot.time}</strong>
      <span class="meal-team-dots">${(slot.teams || []).map(team => `<span class="team-dot" style="--team:${teamColors[team]}" title="${team}">${team[0]}</span>`).join('')}</span>
    </div>
  `).join('')}</div>`;
}

menuGrid.innerHTML = menuDays.map(day => `
  <article class="menu-day">
    <header>
      <p class="eyebrow">${day.day}</p>
      <h3>${day.date}</h3>
    </header>
    ${day.meals.map(meal => `
      <div class="meal-card">
        <div class="meal-card__title">
          <strong>${meal.name}</strong>
          ${renderMealTimes(meal)}
        </div>
        <ul>${meal.items.map(item => `<li>${item}</li>`).join('')}</ul>
      </div>
    `).join('')}
  </article>
`).join('');

prayerGrid.innerHTML = prayerStations.map(station => `
  <a class="prayer-button" href="${station.url}" target="_blank" rel="noopener">${station.title}</a>
`).join('');

renderSchedule('day1');
