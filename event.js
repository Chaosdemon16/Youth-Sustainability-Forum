const events = [{name: 'OPG Visit', Date: "21-7-2024 9:30am", summary: 'The OPG group is meeting to survey the OPG and decide which area they will start to look after as well as talk to Echo & Paul about what plants/weeds are in the gardens'}];
let allhtml = '';

function renderEvents() {
  console.log(allhtml)
  events.forEach(event => {
    let html = `<div class="initiative">
      <h3>${event.name}</h3>
      <h4>${event.Date}</h4>
      <p>${event.summary}</p>
    </div>`;
    allhtml += html;
  });
  
  document.querySelector('.js-events').innerHTML = allhtml;
}

renderEvents();
