window.onload = async function() {
    window.setTimeout(loadMap ,10)
}

function loadMap() {
    const iframe = document.getElementById("address-google-map");
    iframe.src = iframe.dataset.src;
    iframe.hidden = false;
}