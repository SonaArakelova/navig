
function initializePage() {

  const container = document.createElement("div");
  container.className = "container";

  const header = createHeader();
  const navBar = createNavBar();
  const contentArea1 = createContentArea("Content Area 1");
  const contentArea2 = createContentArea("Content Area 2");
  const footer = createFooter();

  document.body.appendChild(container);
  container.appendChild(navBar);
  container.appendChild(header);
  container.appendChild(contentArea1);
  container.appendChild(contentArea2);
  container.appendChild(footer);
}

function createHeader() {
  const header = document.createElement("header");

  const loginLink = document.createElement("a");
  loginLink.href = "#"; 
  loginLink.textContent = "Log In";
  loginLink.style.fontSize = '20px';
  header.appendChild(loginLink);
  loginLink.addEventListener('click', loginfunc);
  
  return header;
}

function loginfunc(event) {
  event.preventDefault(); 
  loadPage2();
}

function createNavBar() {
  const navBar = document.createElement("nav");
  return navBar;
}

function createContentArea(contentText) {
  const contentArea = document.createElement("section");
  return contentArea;
}

function createFooter() {
  const footer = document.createElement("footer");
  return footer;
}


function loadPage2() {
  document.body.innerHTML = '';

  const container = document.createElement("div");
  container.className = "container";

  const header = document.createElement("header");

  const loginForm = document.createElement("form");
  //loginForm.className = "login-form";

  const userNameInput = document.createElement("input");
  userNameInput.type = "text";
  userNameInput.placeholder = "User name";
  loginForm.appendChild(userNameInput);

  const passwordInput = document.createElement("input");
  passwordInput.type = "password";
  passwordInput.placeholder = "Password";
  loginForm.appendChild(passwordInput);

  const loginButton = document.createElement("button");
  loginButton.type = "submit";
  loginButton.textContent = "Log In";
  loginForm.appendChild(loginButton);

  container.appendChild(loginForm);

  const homeLink = document.createElement("a");
  homeLink.href = "#"; 
  homeLink.textContent = "Home";
  homeLink.style.fontSize = '20px';
  header.appendChild(homeLink);
  homeLink.addEventListener('click', function(event) {
      event.preventDefault();
      document.body.innerHTML = '';
      initializePage();
  });

  document.body.appendChild(container);
  container.appendChild(header);
}

//  first page on load
initializePage();
