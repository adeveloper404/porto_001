const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const projectTitle = document.getElementById("project-title");
const projectDesc = document.getElementById("project-description");

const dataProject = {
    1: { title: "Project 1", desc: "Deskripsi lengkap project 1" },
    2: { title: "Project 2", desc: "Deskripsi lengkap project 2" },
    3: { title: "Project 3", desc: "Deskripsi lengkap project 3" },
    4: { title: "Project 4", desc: "Deskripsi lengkap project 4" },
    5: { title: "Project 5", desc: "Deskripsi lengkap project 5" },
    6: { title: "Project 6", desc: "Deskripsi lengkap project 6" }
};

document.querySelectorAll(".view-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        const id = btn.getAttribute("data-project");
        projectTitle.innerText = dataProject[id].title;
        projectDesc.innerText = dataProject[id].desc;
        popup.style.display = "flex";
    });
});

closePopup.addEventListener("click", () => {
    popup.style.display = "none";
});
