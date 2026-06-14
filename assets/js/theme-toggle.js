(function () {
  var storageKey = "qirenwang-theme-preference";
  var legacyStorageKey = "qirenwang-theme";
  var systemMedia = window.matchMedia ? window.matchMedia("(prefers-color-scheme: dark)") : null;
  var root = document.documentElement;

  function getSystemTheme() {
    return systemMedia && systemMedia.matches ? "dark" : "light";
  }

  function isValidTheme(theme) {
    return theme === "dark" || theme === "light";
  }

  function getStoredTheme() {
    try {
      var theme = window.localStorage.getItem(storageKey);
      return isValidTheme(theme) ? theme : null;
    } catch (error) {
      return null;
    }
  }

  function storeTheme(theme) {
    try {
      window.localStorage.setItem(storageKey, theme);
    } catch (error) {
      return;
    }
  }

  function setTheme(theme) {
    if (!isValidTheme(theme)) {
      theme = getSystemTheme();
    }

    root.setAttribute("data-theme", theme);
    var button = document.getElementById("theme-toggle");
    if (button) {
      button.setAttribute("aria-pressed", theme === "dark" ? "true" : "false");
      button.setAttribute("aria-label", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    }
  }

  function clearLegacyTheme() {
    try {
      window.localStorage.removeItem(legacyStorageKey);
    } catch (error) {
      return;
    }
  }

  function applyPreferredTheme() {
    setTheme(getStoredTheme() || getSystemTheme());
  }

  function syncWithSystemTheme() {
    if (!getStoredTheme()) {
      setTheme(getSystemTheme());
    }
  }

  function watchSystemTheme() {
    if (!systemMedia) {
      return;
    }

    if (systemMedia.addEventListener) {
      systemMedia.addEventListener("change", syncWithSystemTheme);
    } else if (systemMedia.addListener) {
      systemMedia.addListener(syncWithSystemTheme);
    }
  }

  function init() {
    var button = document.getElementById("theme-toggle");
    clearLegacyTheme();
    applyPreferredTheme();
    watchSystemTheme();

    if (!button) {
      return;
    }

    button.addEventListener("click", function (event) {
      event.preventDefault();
      var nextTheme = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      setTheme(nextTheme);
      storeTheme(nextTheme);
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
