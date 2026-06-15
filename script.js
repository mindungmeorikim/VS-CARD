document.addEventListener("DOMContentLoaded", () => {
  const copyButtons = document.querySelectorAll(".copy-button");

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
      } catch (error) {
        button.textContent = "실패";

        setTimeout(() => {
          button.textContent = defaultText;
        }, 1200);
      }
    });
  });
});