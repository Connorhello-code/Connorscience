// For experiment list pages: load experiments based on URL parameter
function loadExperiments() {
  const urlParams = new URLSearchParams(window.location.search);
  const gradeLevel = urlParams.get('grade'); // e.g., 'elementary', 'middle', 'high'
  const container = document.getElementById('experiment-list');

  const experimentsData = {
    elementary: [
      {
        id: 'volcano',
        title: 'Volcano Eruption',
        description: 'Learn about chemical reactions with a baking soda volcano.',
        videoUrl: 'assets/volcano.mp4'
      },
      {
        id: 'rainbow',
        title: 'Rainbow in a Glass',
        description: 'Explore density with colorful liquids.',
        videoUrl: 'assets/rainbow_glass.mp4'
      }
    ],
    middle: [
      {
        id: 'magnetic',
        title: 'Magnetic Fields',
        description: 'Visualize magnetic fields with iron filings.',
        videoUrl: 'assets/magnetic.mp4'
      },
      {
        id: 'solar_oven',
        title: 'Solar Oven',
        description: 'Build a simple solar oven to cook s\'mores.',
        videoUrl: 'assets/solar_oven.mp4'
      }
    ],
    high: [
      {
        id: 'induction',
        title: 'Electromagnetic Induction',
        description: 'Learn about how changing magnetic fields generate electricity.',
        videoUrl: 'assets/induction.mp4'
      },
      {
        id: 'chem_reaction',
        title: 'Chemical Reactions',
        description: 'Experiment with acids and bases.',
        videoUrl: 'assets/chem_reaction.mp4'
      }
    ]
  };

  if (experimentsData[gradeLevel]) {
    experimentsData[gradeLevel].forEach(exp => {
      const card = document.createElement('div');
      card.className = 'experiment-card';
      card.onclick = () => {
        window.location = `experiment.html?id=${exp.id}&grade=${gradeLevel}`;
      };
      card.innerHTML = `
        <div class="experiment-title">${exp.title}</div>
        <div>${exp.description}</div>
      `;
      container.appendChild(card);
    });
  } else {
    container.innerHTML = '<p>No experiments found.</p>';
  }
}

// For experiment detail page
function loadExperimentDetail() {
  const urlParams = new URLSearchParams(window.location.search);
  const experimentId = urlParams.get('id');
  const gradeLevel = urlParams.get('grade');

  const experimentsData = {
    elementary: [
      {
        id: 'volcano',
        title: 'Volcano Eruption',
        description: 'Learn about chemical reactions with a baking soda volcano.',
        videoUrl: 'assets/volcano.mp4'
      },
      {
        id: 'rainbow',
        title: 'Rainbow in a Glass',
        description: 'Explore density with colorful liquids.',
        videoUrl: 'assets/rainbow_glass.mp4'
      }
    ],
    middle: [
      {
        id: 'magnetic',
        title: 'Magnetic Fields',
        description: 'Visualize magnetic fields with iron filings.',
        videoUrl: 'assets/magnetic.mp4'
      },
      {
        id: 'solar_oven',
        title: 'Solar Oven',
        description: 'Build a simple solar oven to cook s\'mores.',
        videoUrl: 'assets/solar_oven.mp4'
      }
    ],
    high: [
      {
        id: 'induction',
        title: 'Electromagnetic Induction',
        description: 'Learn about how changing magnetic fields generate electricity.',
        videoUrl: 'assets/induction.mp4'
      },
      {
        id: 'chem_reaction',
        title: 'Chemical Reactions',
        description: 'Experiment with acids and bases.',
        videoUrl: 'assets/chem_reaction.mp4'
      }
    ]
  };

  let experiment = null;
  const experimentsArray = experimentsData[gradeLevel] || [];
  experiment = experimentsArray.find(e => e.id === experimentId);

  if (experiment) {
    document.getElementById('experiment-detail').innerHTML = `
      <h2>${experiment.title}</h2>
      <p>${experiment.description}</p>
      <video width="100%" controls>
        <source src="${experiment.videoUrl}" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <button class="back" onclick="window.history.back()">Back</button>
    `;
  } else {
    document.getElementById('experiment-detail').innerHTML = `
      <p>Experiment not found.</p>
      <button class="back" onclick="window.history.back()">Back</button>
    `;
  }
}

// Initialize pages based on URL
window.onload = () => {
  if (document.getElementById('experiment-list')) {
    loadExperiments();
  } else if (document.getElementById('experiment-detail')) {
    loadExperimentDetail();
  }
};
