const projectFilters = document.querySelector(".project-filters");
const projectGrid = document.querySelector(".project-grid");

if (projectFilters && projectGrid) {
  const filterButtons = Array.from(projectFilters.querySelectorAll(".filter-chip"));
  const projectCards = Array.from(projectGrid.querySelectorAll(".project-card"));

  const applyFilter = (filterValue) => {
    filterButtons.forEach((button) => {
      const isActive = button.dataset.filter === filterValue;
      button.classList.toggle("active", isActive);
      button.setAttribute("aria-pressed", String(isActive));
    });

    projectCards.forEach((card) => {
      const matches = filterValue === "all" || card.dataset.category === filterValue;
      card.classList.toggle("is-hidden", !matches);
      card.setAttribute("aria-hidden", String(!matches));
    });
  };

  projectFilters.addEventListener("click", (event) => {
    const button = event.target.closest(".filter-chip");
    if (!button) {
      return;
    }

    applyFilter(button.dataset.filter || "all");
  });

  applyFilter("all");
}
