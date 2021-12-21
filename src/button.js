export default function button(id, link) {
  document.getElementById(id).addEventListener("click", (e) => {
    e.preventDefault();
    window.location.href = link;
  });
}
