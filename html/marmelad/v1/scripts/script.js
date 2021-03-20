window.addEventListener("load", function () {
    document.querySelector(".popup").classList.remove("hidden");
    document.querySelector(".modal").classList.remove("hidden");
});

const navLinks = document.querySelectorAll('a[href*="#"]');

navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (e) => {
        e.preventDefault();

        const blockId = navLink.getAttribute("href").substr(1);

        let scrollToLink = "";
        blockId === "" ? (scrollToLink = "id-intro") : (scrollToLink = blockId);

        const header = document.querySelector(".section_header");

        const yOffSet = -header.offsetHeight - 5;
        const element = document.querySelector(`#${scrollToLink}`);
        const y =
            element.getBoundingClientRect().top + window.pageYOffset + yOffSet;

        window.scrollTo({
            top: y,
            behavior: "smooth",
        });
    });
});
