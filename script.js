const email = "quentinjacksoncook@gmail.com";

document.querySelectorAll(".btn").forEach((button) => {
  button.addEventListener("click", () => {
    const work = button.dataset.work || "Artwork";
    const subject = encodeURIComponent(`Collection inquiry: ${work}`);
    const body = encodeURIComponent(
      `Hello,\n\nI would like to inquire about ${work}.\n\nBest regards,`
    );
    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  });
});
