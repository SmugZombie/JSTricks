// Reloads the page on hash change

if ("onhashchange" in window) { // event supported?
        window.onhashchange = function () {
            location.reload();
        }
    }
    else { // event not supported:
        var storedHash = window.location.hash;
        window.setInterval(function () {
            if (window.location.hash != storedHash) {
                storedHash = window.location.hash;
                location.reload();
            }
        }, 100);
    }
