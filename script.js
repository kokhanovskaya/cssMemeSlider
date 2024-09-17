document.addEventListener('DOMContentLoaded', function() {
    const containers = document.querySelectorAll('.conteineer-mem');
    const texts = document.querySelectorAll('.text-mem');
    const buttons = document.querySelectorAll('.btn-mem');

    let activeIndex = 0;

    function setActiveSlide(newIndex) {
        containers[activeIndex].classList.remove('active');
        texts[activeIndex].classList.remove('active');
        buttons[activeIndex].classList.remove('active');

        activeIndex = newIndex;

        containers[activeIndex].classList.add('active');
        texts[activeIndex].classList.add('active');
        buttons[activeIndex].classList.add('active');
    }

    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            setActiveSlide(index);
        });
    });

    setActiveSlide(activeIndex);

    function goNextSlide() {
        let nextIndex = (activeIndex + 1) % containers.length;
        setActiveSlide(nextIndex);
    }

    function goPreviousSlide() {
        let prevIndex = (activeIndex - 1 + containers.length) % containers.length;
        setActiveSlide(prevIndex);
    }
});
