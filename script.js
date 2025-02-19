//your JS code here. If required.
  const modal = document.getElementById("myModal");
        const openModal = document.getElementById("openModal");
        const closeModal = document.querySelector(".close-modal");
        
        openModal.addEventListener("click", () => {
            modal.style.display = "block";
        });
        
        closeModal.addEventListener("click", () => {
            modal.style.display = "none";
        });
        
        window.addEventListener("click", (e) => {
            if (e.target === modal) {
                modal.style.display = "none";
            }
        });