// Master JS file to be included by default in dev sites
// github.com/smugzombie

// Encode HTML Entities
function htmlEntities(str){ return String(str).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/'/g, '&#39;').replace(/</g, '&lt;').replace(/>/g, '&gt;'); }

// Decode HTML Entities
function htmlEntitiesDecode(str){ return String(str).replace(/&quot;/g, '"').replace(/&#39;/g, "'").replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); }

// Nuke Cookies
function nukeCookies(){ var cookies = document.cookie.split(";"); for (var i = 0; i < cookies.length; i++) {var cookie = cookies[i]; var eqPos = cookie.indexOf("="); var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie; document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";}}

// Get Local Storage (With Expiration)
function getLocalStorage(name){ now = parseInt(new Date() / 1000); expires = localStorage.getItem(name+"_expire"); if(!expires){ return localStorage.getItem(name); } else if(now >= expires){ localStorage.removeItem(name+"_expire"); localStorage.removeItem(name); return ""; } else{ return localStorage.getItem(name); }}

// Set Local Storage (With Expiration)
function setLocalStorage(name, value, minutes){ if(minutes == null){ localStorage.setItem(name, value); localStorage.removeItem(name+"_expire"); return true} else if(minutes == 0){ localStorage.removeItem(name); localStorage.removeItem(name+"_expire"); return true} else{ epochExpire = parseInt(new Date() / 1000 + (minutes * 60)); localStorage.setItem(name, value); localStorage.setItem(name+"_expire", epochExpire); return true; } return false; }

// Include Scripts via Injection
function include(type, source){ var head = document.getElementsByTagName('head')[0]; switch(type){ case 'js': { resource = document.createElement('script'); resource.type = 'text/javascript'; resource.src = source; break; } case 'css': { resource = document.createElement('link'); resource.rel = 'stylesheet'; resource.type = 'text/css'; resource.href = source; break; } } console.log('Included ' + type + ': ' + source); head.appendChild(resource); }
