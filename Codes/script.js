
// THIS IS HERO BLUR ------------------------------------\\
function getScrolledInLvh() {
    const scrolledPixels = window.scrollY;
    const viewportHeight = window.innerHeight;
    return (scrolledPixels / viewportHeight) * 100;
}
function updateScrollPx() {
    const scrolledLvh = getScrolledInLvh();
    const scrolledPx = (scrolledLvh / 100) * 30;
    document.documentElement.style.setProperty('--scrolled-px', `${scrolledPx}px`);
}
window.addEventListener('scroll', updateScrollPx);
//-------------------------------------------------------\\

// CLASSES TO TAKE IDS FROM------------------------------\\
const classNames = ['aboutGif' , 'aboutText', 'achievementText', 'achievementList', 'journalText', 'journalList'];
//-------------------------------------------------------\\

//ELEMENTS FROM CLASS------------------------------------\\
const elementIds = [];
function addIdsToElementIds() {
    classNames.forEach(className => {
        const elements = document.querySelectorAll(`.${className} [id]`);
        elements.forEach(element => {
            elementIds.push(element.id);
        });
    });
} addIdsToElementIds();
//-------------------------------------------------------\\

