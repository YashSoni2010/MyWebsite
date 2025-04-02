
//SCROLL TO FUNCTION-------------------------------------\\
function scrollToTarget(targetId) {
  // Find the element with the specified ID.
  const element = document.getElementById(targetId);

  // Check if the element exists in the document.
  if (element) {
    // Use scrollIntoView with smooth scrolling.
    element.scrollIntoView({ behavior: 'smooth' });
  } else {
    console.error(`Element with ID "${targetId}" not found.`);
  }
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
