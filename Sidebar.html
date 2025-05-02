<!DOCTYPE html>
<html>
  <head>
    <base target="_top">
    <?!= include('Stylesheet'); ?>
  </head>
  <body>

<div class="section">
  <h1 id="instructions-heading" style="cursor:pointer;">How to Use</h1>
  <div id="instructions-content">
    <h2 style="text-align:center">Getting Started</h2> 
    <ul>
      <p><b>Scene Headings</b>: Start each new scene with a heading like INT. HOUSE - DAY to indicate location and time.</p>
      <p><b>Scene Numbering</b>: Helpful for production, especially when revising or breaking down the script.</p>
      <p><b>Action Lines</b>: Describe what's happening visually in the scene, written in present tense.</p>
      <p><b>Character Names</b>: Center and capitalize character names above their dialogue.</p>
      <p><b>Dialogue</b>: Indent dialogue under the character name.</p>
      <p><b>Parentheticals</b>: Use sparingly to indicate how a line should be delivered or an action during dialogue.</p>
      <p><b>Transitions</b>: Use terms like CUT TO: or FADE OUT: to indicate scene changes.</p>
      <p><b>Page Length</b>: Aim for about one page per minute of screen time; typical feature scripts are 90-120 pages.</p>
      <p><b>Outline Your Story</b>: Plan your acts and key plot points before writing to keep your story focused.</p>
      <p><b>Keep It Visual</b>: Screenplays are blueprints for film-focus on what the audience sees and hears.</p>
      <h2 style="text-align:center">Tool Tips</h2>
      <p>Scenes can be navigated to directly via the document tabs.</p>
      <p>Use the Scene Elements buttons to indent the corresponding text to the correct indent.</p>
    </ul>
  </div>
</div>
<hr class="section-separator">

<!-- Format Button -->
  <button id="format-script">Format Script</button>

<!-- Title Page Button -->
  <button id="generate-title-page" class="full-width-btn" data-tooltip="Use on the first page to insert a title page">Generate Title Page</button>
<div id="title-page-form" style="display:none; margin-top:10px;">
  <input type="text" id="tp-title" class="input-field" placeholder="Title" /><br>
  <input type="text" id="tp-author" class="input-field" placeholder="Author" /><br>
  <input type="text" id="tp-contact" class="input-field" placeholder="Contact Info" /><br>
  <input type="text" id="tp-date" class="input-field" placeholder="Date" /><br>
  <div class="center-btn-row">
    <button id="insert-title-page" class="insert-btn">Insert Title Page</button>
    <button id="cancel-title-page" class="cancel-btn" type="button">Cancel</button>
  </div>
</div>

<!-- Intertitle Button -->
<div class="section">
  <hr class="section-separator">
  <h1>Intertitle</h1>
  <div class="intertitle-input-row">
    <input type="text" id="intertitle-input" placeholder="Enter intertitle" maxlength="60" />
    <button id="add-intertitle">Add Intertitle</button>
  </div>
</div>


<!-- Scene Elements -->
  <div class="section">
    <hr class="section-separator">
    <h1>Scene Elements</h1>
    <div class="button-column">
      <button class="indent-btn" data-type="SCENE">SCENE</button>
      <button class="indent-btn" data-type="ACTION">ACTION</button>
      <button class="indent-btn" data-type="ACTOR">ACTOR</button>
      <button class="indent-btn" data-type="PARENTHETICAL">PARENTHETICAL</button>
      <button class="indent-btn" data-type="DIALOGUE">DIALOGUE</button>
    </div>
  </div>

  <div class="section">
    <div class="scene-input-row">
      <input type="text" id="scene-input" placeholder="INT. OFFICE - DAY" maxlength="35" />
      <button id="add-scene">Add Scene</button>
    </div>
    <div id="scene-list"></div>
  </div>

  <div class="section">
    <div class="actor-input-row">
      <input type="text" id="actor-input" placeholder="Enter actor name" maxlength="25" />
      <button id="add-actor">Add Actor</button>
    </div>
    <div id="actor-list"></div>
  </div>

<!-- Transitions -->
  <div class="section">
    <hr class="section-separator">
    <h1>Transitions</h1>
    <div class="transition-grid">
      <button class="transition-btn" data-type="TRANSITION" data-text="FADE OUT:">FADE OUT:</button>
      <button class="transition-btn" data-type="FADE-IN" data-text="FADE IN:">FADE IN:</button>
      <button class="transition-btn" data-type="TRANSITION" data-text="MATCH CUT:">MATCH CUT:</button>
      <button class="transition-btn" data-type="TRANSITION" data-text="CUT TO:">CUT TO:</button>
      <button class="transition-btn" data-type="TRANSITION" data-text="DISSOLVE TO:">DISSOLVE TO:</button>
      <button class="transition-btn" data-type="TRANSITION" data-text="FLASHBACK:">FLASHBACK:</button>
    </div>
  </div>

<!-- SCRIPT BREAKDOWN -->
<div class="section">
  <hr class="section-separator">
  <h1>Script Breakdown</h1>
  <button id="props-highlight-btn">Props</button>
  <button id="cast-highlight-btn">Cast</button>
  <button id="sound-highlight-btn">Sound FX</button>
  <button id="specialfx-highlight-btn">Special FX</button>
  <button id="stunts-highlight-btn">Stunts</button>
  <button id="vehiclesandanimals-highlight-btn">Vehicles and Animals</button>
  <button id="wardrobe-highlight-btn">Wardrobe, Makeup, & Hair</button>
</div>

<!-- Breakdown Summary Button -->
<div class="section">
  <hr class="section-separator">
  <h1>Script Breakdown Summary</h1>
  <button id="insert-breakdown-summary" class="full-width-btn" data-tooltip="Use on the last page to insert a table">Insert Breakdown Summary</button>
</div>

<script>
// --- Instructional Dropdown ---
const heading = document.getElementById('instructions-heading');
const content = document.getElementById('instructions-content');

heading.onclick = function() {
  content.classList.toggle('expanded');
  heading.textContent = content.classList.contains('expanded')
    ? "How to Use"
    : "How to Use";
};


// --- Format Script Button ---
  document.getElementById('format-script').onclick = function() {
    google.script.run.formatScript();
};

// Insert title page handler
 document.getElementById('insert-title-page').onclick = function() {
  const title = document.getElementById('tp-title').value.trim();
  const author = document.getElementById('tp-author').value.trim();
  const contact = document.getElementById('tp-contact').value.trim();
  const date = document.getElementById('tp-date').value.trim();

  google.script.run.insertTitlePage(title, author, contact, date);

  // Hide and reset form
  document.getElementById('title-page-form').style.display = 'none';
  document.getElementById('tp-title').value = '';
  document.getElementById('tp-author').value = '';
  document.getElementById('tp-contact').value = '';
  document.getElementById('tp-date').value = '';
};

// --- Intertitle ---
document.getElementById('add-intertitle').onclick = function() {
  const input = document.getElementById('intertitle-input');
  let value = input.value.trim();
  if (value) {
    google.script.run.insertIntertitle(value);
    input.value = '';
  }
};

document.getElementById('intertitle-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('add-intertitle').click();
  }
});

// --- Scene Elements Indent Buttons ---
  document.querySelectorAll('.indent-btn').forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');
      const text = button.getAttribute('data-text') || '';
      if (type === 'transition') {
        google.script.run.insertTransition(text);
      } else {
        google.script.run.applyIndent(type);
    }
  });
});

// --- Scene Headings ---
  let scenes = [];

  function renderScenes() {
    const listDiv = document.getElementById('scene-list');
      listDiv.innerHTML = '';
      scenes.forEach((scene, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'scene-row';

        const btn = document.createElement('button');
        btn.textContent = scene.toUpperCase();
        btn.className = 'scene-btn';
        btn.onclick = () => {
          google.script.run.insertScreenplayElement('SCENE', scene.toUpperCase());
        };

        const delBtn = document.createElement('button');
        delBtn.textContent = '✕';
        delBtn.className = 'del-btn';
        delBtn.onclick = () => {
          scenes.splice(idx, 1);
          renderScenes();
          google.script.run.saveSceneHeadings(scenes);
        };

        wrapper.appendChild(btn);
        wrapper.appendChild(delBtn);
        listDiv.appendChild(wrapper);
      });
    }

    document.getElementById('add-scene').onclick = function() {
      const input = document.getElementById('scene-input');
      let scene = input.value.trim();
      if (scene && !scenes.includes(scene)) {
        scenes.push(scene);
        renderScenes();
        google.script.run.saveSceneHeadings(scenes);
        input.value = '';
      }
    };

    document.getElementById('scene-input').addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        document.getElementById('add-scene').click();
      }
    });

    // Load saved scenes on sidebar load
    google.script.run.withSuccessHandler(function(savedScenes) {
      scenes = savedScenes;
      renderScenes();
    }).loadSceneHeadings();

// --- Actors (not saved, just in memory) ---
    let actors = [];

  function renderActors() {
    const listDiv = document.getElementById('actor-list');
      listDiv.innerHTML = '';
      actors.forEach((actor, idx) => {
        const wrapper = document.createElement('div');
        wrapper.className = 'actor-row';

      const btn = document.createElement('button');
        btn.textContent = actor;
        btn.className = 'actor-btn';
        btn.onclick = () => {
        google.script.run.insertActorName(actor);
    };

      const delBtn = document.createElement('button');
        delBtn.textContent = '✕';
        delBtn.className = 'del-btn';
        delBtn.onclick = () => {
        actors.splice(idx, 1);
        renderActors();
        google.script.run.saveActors(actors); // <-- SAVE on delete
    };

    wrapper.appendChild(btn);
    wrapper.appendChild(delBtn);
    listDiv.appendChild(wrapper);
  });
}

document.getElementById('add-actor').onclick = function() {
  const input = document.getElementById('actor-input');
  let name = input.value.trim();
  if (name && !actors.includes(name)) {
    actors.push(name);
    renderActors();
    google.script.run.saveActors(actors); // <-- SAVE on add
    input.value = '';
  }
};

document.getElementById('actor-input').addEventListener('keyup', function(event) {
  if (event.key === 'Enter') {
    document.getElementById('add-actor').click();
  }
});

// Load saved actors on sidebar load
google.script.run.withSuccessHandler(function(savedActors) {
  actors = savedActors;
  renderActors();
}).loadActors();

// --- Transitions ---
  document.querySelectorAll('.transition-btn').forEach(button => {
    button.addEventListener('click', () => {
      const type = button.getAttribute('data-type');
      const text = button.getAttribute('data-text');
    google.script.run.insertScreenplayElement(type, text);
  });
});

    // Show/hide form handlers
 document.getElementById('generate-title-page').onclick = function() {
   document.getElementById('title-page-form').style.display = 'block';
};
 document.getElementById('cancel-title-page').onclick = function() {
   document.getElementById('title-page-form').style.display = 'none';
};

// --- Script Breakdown ---
document.getElementById('props-highlight-btn').onclick = function() {
  google.script.run.propsCapitalizeAndBrown();
};

document.getElementById('cast-highlight-btn').onclick = function() {
  google.script.run.soundCapitalizeAndRed();
};

document.getElementById('sound-highlight-btn').onclick = function() {
  google.script.run.soundCapitalizeAndPurple();
};

document.getElementById('vehiclesandanimals-highlight-btn').onclick = function() {
  google.script.run.vehiclesandanimalsCapitalizeAndPink();
};

document.getElementById('specialfx-highlight-btn').onclick = function() {
  google.script.run.specialfxCapitalizeAndBlue();
};

document.getElementById('stunts-highlight-btn').onclick = function() {
  google.script.run.stuntsCapitalizeAndOrange();
};

document.getElementById('wardrobe-highlight-btn').onclick = function() {
  google.script.run.wardrobeCapitalizeAndGreen();
};

// --- Script Breakdown Summary Table ---
document.getElementById('insert-breakdown-summary').onclick = function() {
  google.script.run.insertBreakdownSummaryTable();
  alert("Breakdown summary table inserted at the end of your document!");
};

function showSidebar() {
  var html = HtmlService.createHtmlOutputFromFile('Sidebar')
      .setTitle('My Sidebar');
  DocumentApp.getUi().showSidebar(html);
}
  </script>
  <div class="disclaimer">
    By Digital Phantoms. Thank you for using.
     <h1 style="font-size:15px">
      Privacy Policy
    </h1>
     <p>I don't collect anything. Google may do something with it though, were not affiliated. To opt-Out, Uninstall the add-on via Extensions > Add-ons > Manage Add-ons to disable data processing.</p>
     <p><a href="https://www.buymeacoffee.com/digitalphantoms/">Buy my a coffee if you like what you see </a></p>
  </div>
  </body>
</html>
