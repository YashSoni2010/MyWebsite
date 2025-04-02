
//SCROLL TO FUNCTION-------------------------------------\\
function scrollToTarget(targetId) {
    const targetElement = document.getElementById(targetId);
    lenis.scrollTo(targetElement);
}
//-------------------------------------------------------\\

// THIS IS THE ELEMENT TRACKER---------------------------\\
let isChecking = false;
function isElementInView(element) {
    if (!element) {
        console.error('Element not found');
        return false;
    }
    const rect = element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    return (
        centerX >= 0 &&
        centerX <= (window.innerWidth || document.documentElement.clientWidth) &&
        centerY >= 0 &&
        centerY <= (window.innerHeight || document.documentElement.clientHeight)
    );
}
function checkElementsSequentially() {
    if (isChecking) return;
    isChecking = true;
    elementIds.forEach((elementId, index) => {
        setTimeout(() => {
            const element = document.getElementById(elementId);
            if (isElementInView(element)) {
                element.style.visibility = 'visible';
                element.classList.add('animate');
            }
        }, index * 100);
    });
    setTimeout(() => {
        isChecking = false;
    }, elementIds.length);
}
window.addEventListener('scroll', checkElementsSequentially);
//-------------------------------------------------------\\
