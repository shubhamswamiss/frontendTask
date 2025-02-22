function show(e) {
    const hidden = document.querySelectorAll(".hidden-section").forEach(tag => {
        tag.style.display = 'none';
    })

    const selected = document.getElementById(e);
    selected.style.display = 'block';
    const parentBox = selected.closest(".offer-box");

    if (parentBox) {
        const radioBtn = parentBox.querySelector(".radioBtn");
        if (radioBtn) {
            radioBtn.checked = true;
        }
    }


}    
