'use strict'

const browserInfo = `Browser name is ${navigator.appName}, browser version is ${navigator.appVersion}`;

const operatingSystem = `Operating system version is ${navigator.platform}`;

const screenWidth = `Screen width is ${window.screen.width}`;
const screenHeight = `Screen height is ${window.screen.height}`;

const availableWidth = `Available screen width is ${window.screen.availWidth}`;
const availableHeight = `Available screen height is ${window.screen.availHeight}`;

const date = new Date();
const options = { year: 'numeric', day: 'numeric', month: 'long', hour: '2-digit', minute: '2-digit' };
const fiLocal = date.toLocaleDateString('fi-FI', options);
const fiDate = `Current date (Finnish localization) and time is ${fiLocal}`;

function addElements (info) {
  const p = document.createElement('p');
  p.innerHTML = info;
  document.getElementById('target').appendChild(p);
}

addElements(browserInfo);
addElements(operatingSystem);
addElements(screenWidth);
addElements(screenHeight);
addElements(availableWidth);
addElements(availableHeight);
addElements(fiDate);
