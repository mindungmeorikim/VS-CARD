document.addEventListener("DOMContentLoaded", () => {
  const card = document.querySelector(".card");
  const moreButton = document.querySelector(".more-button");
  const backButton = document.querySelector(".back-button");
  const copyButtons = document.querySelectorAll(".copy-button");

  moreButton.addEventListener("click", () => {
    card.classList.add("is-flipped");
  });

  backButton.addEventListener("click", () => {
    card.classList.remove("is-flipped");
  });

  copyButtons.forEach((button) => {
    const defaultText = button.textContent.trim();

    button.addEventListener("click", async () => {
      const copyText = button.dataset.copy;

      try {
        await navigator.clipboard.writeText(copyText);

        button.textContent = "완료";
        button.classList.add("is-copied");

        setTimeout(() => {
          button.textContent = defaultText;
          button.classList.remove("is-copied");
        }, 1200);
      } catch {
        button.textContent = "실패";

        setTimeout(() => {
          button.textContent = defaultText;
        }, 1200);
      }
    });
  });
});