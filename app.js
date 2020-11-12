---
layout: compress
# Nilson v2.2
# https://nilsonsoft.github.io/
# © 2021 Nilson
# MIT Licensed
---

/* Registering Service Worker */
if('serviceWorker' in navigator) {
  navigator.serviceWorker.register('{{ "/sw.js" | relative_url }}');
};
