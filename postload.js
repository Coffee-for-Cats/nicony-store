window.onload = function() {
    const iframe = document.getElementById("address-google-map");
    iframe.src = iframe.dataset.src;
    iframe.hidden = false;
}