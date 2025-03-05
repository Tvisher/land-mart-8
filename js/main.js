const submitBtn = document.querySelector('.submit-btn');
const formsContainer = [...document.querySelectorAll('.form-item')];
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
        console.log(finalType);
    }
});


[...document.querySelectorAll("input[type='radio']")].map(el => {
    el.addEventListener('input', e => {
        const formParent = e.target.closest('.form-item');
        formParent.classList.remove('err');
    })
})