let setColors = ()=>{
  let color = localStorage.getItem('Color') || 'teal';
  let theme = localStorage.getItem('Theme') || '#111';
  let bgImg = localStorage.getItem('Bg Image') || 'url(./images/background-dark.jpeg)'

  const root = document.documentElement;
  const mainBg = document.getElementById('main-bg');

  root.style.setProperty('--color1', theme);
  root.style.setProperty('--color2', color);
  mainBg.style.backgroundImage = bgImg;
}
setColors();

let showThemes = ()=>{
  const themeButtons = document.getElementById('toogle-themes');

  if (themeButtons.style.display == 'none'){
      themeButtons.style.display = 'block';
  } else {
      themeButtons.style.display = 'none';
  }
}

let changeTheme = (theme, bgImg)=>{
  const root = document.documentElement;

  root.style.setProperty('--color1', theme);

  const mainBg = document.getElementById('main-bg');

  mainBg.style.backgroundImage = bgImg;

  localStorage.setItem('Theme', theme);
  localStorage.setItem('Bg Image', bgImg);
}

let changeColor = (color)=>{
  const root = document.documentElement;

  root.style.setProperty('--color2', color);

  localStorage.setItem('Color', color);
}

// let skillElement = document.querySelector(".skills");

// for (let i = 0; i < skills.length; i++) {
//   const element = skills[i];
//   let skillBody = `
//   <div class="sbox">
//       <h2>${element.skillName}</h2>
//       <img class="${element.animation}" src="./images/${element.image}" alt="${element.alt}">
//   </div>
//   `;
//   skillElement.innerHTML += skillBody;
// }

// let certificateElement = document.querySelector('.certificates');

// for (let i = 0; i < certificates.length; i++) {
//   const element = certificates[i];
//   let certificateBody = `
//   <div class="cbox">
//       <h2>${element.certificateName}</h2>
//       <img src="./images/${element.image}" alt="${element.alt}">
//   </div>
//   `;
//   certificateElement.innerHTML += certificateBody;
// }

const skillElement = document.querySelector(".skills");
const certificateElement = document.querySelector(".certificates");

// Fetch both skills and certificates
Promise.all([
  fetch("./data/skills.json").then((response) => response.json()),
  fetch("./data/certificate.json").then((response) => response.json()),
])
  .then(([skills, certificates]) => {
    // Generate HTML for skills
    const skillsHTML = skills.skills
      .map(
        (element) => `
        <div class="sbox">
          <h2>${element.skillName}</h2>
          <img class="${element.animation}" src="./images/${element.image}" alt="${element.alt}">
        </div>
      `
      )
      .join("");

    // Generate HTML for certificates
    const certificatesHTML = certificates.certificates
      .map(
        (element) => `
        <div class="cbox">
          <h2>${element.certificateName}</h2>
          <img src="./images/${element.image}" alt="${element.alt}">
        </div>
      `
      )
      .join("");

    // Update the DOM
    skillElement.innerHTML = skillsHTML;
    certificateElement.innerHTML = certificatesHTML;
  })
  .catch((error) => console.error("Error fetching data:", error));
