const submitBtn = document.querySelector('.submit-btn');
const formsContainer = [...document.querySelectorAll('.form-item')];
const formsParent = document.querySelector('.forms');

let results = [];
submitBtn.addEventListener('click', e => {
    results = [];
    formsContainer.map(form => {
        const selectedRadio = form.querySelector("input[type='radio']:checked");
        if (!selectedRadio) {
            form.classList.add('err');
        } else {
            results.push(selectedRadio.value);

        }

    });
    const errorsItems = document.querySelectorAll('.form-item.err');
    if (errorsItems.length > 0) {
        errorsItems[0].scrollIntoView({ block: "center", behavior: "smooth" });
    } else {
        const freq = results.reduce((acc, el) => (acc[el] = (acc[el] || 0) + 1, acc), {});
        const max = Math.max(...Object.values(freq));
        const mostFrequent = Object.keys(freq).filter(el => freq[el] === max);
        const finalType = mostFrequent[0];
        const currentResult = document.querySelector(`[data-result="${finalType}"]`);
        currentResult.classList.add('show');
        formsParent.style.display = 'none';
    }
});


[...document.querySelectorAll("input[type='radio']")].map(el => {
    el.addEventListener('input', e => {
        const formParent = e.target.closest('.form-item');
        formParent.classList.remove('err');
    })
});



AOS.init({
    // Global settings:
    disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
    startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
    initClassName: "aos-init", // class applied after initialization
    animatedClassName: "aos-animate", // class applied on animation
    useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
    disableMutationObserver: false, // disables automatic mutations' detections (advanced)
    debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
    throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)

    // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
    offset: 50, // offset (in px) from the original trigger point
    delay: 0, // values from 0 to 3000, with step 50ms
    duration: 1200, // values from 0 to 3000, with step 50ms
    easing: "ease", // default easing for AOS animations
    once: true, // whether animation should happen only once - while scrolling down
    mirror: false, // whether elements should animate out while scrolling past them
    anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
});