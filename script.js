const toggleShareMenuBtn = document.getElementById("toggle-share-menu");
const shareMenuDesktop = document.getElementById("share-menu-desktop");
const shareMenuMobile = document.getElementById("share-menu-mobile");

toggleShareMenuBtn.addEventListener("click", () => {
	if (toggleShareMenuBtn.getAttribute("aria-label") === "show share menu") {
		showShareMenu();
	} else if (
		toggleShareMenuBtn.getAttribute("aria-label") === "hide share menu"
	) {
		closeShareMenu();
	}
});

function showShareMenu() {
	shareMenuDesktop.classList.remove("invisible");
	shareMenuDesktop.setAttribute("aria-hidden", "false");
	shareMenuMobile.classList.remove("invisible");
	shareMenuMobile.setAttribute("aria-hidden", "false");
	toggleShareMenuBtn.setAttribute("aria-label", "hide share menu");
	toggleShareMenuBtn.setAttribute("data-state", "open");
}

function closeShareMenu() {
	shareMenuDesktop.classList.add("invisible");
	shareMenuDesktop.setAttribute("aria-hidden", "true");
	shareMenuMobile.classList.add("invisible");
	shareMenuMobile.setAttribute("aria-hidden", "true");
	toggleShareMenuBtn.setAttribute("aria-label", "show share menu");
	toggleShareMenuBtn.setAttribute("data-state", "closed");
}
