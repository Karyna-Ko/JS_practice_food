function slider({container, slide, nextArrow, prevArrow, totalCounter, currentCounter}) {

    let slideIndex = 1;

    const slider = document.querySelector(container),
          slides = document.querySelectorAll(slide),
          prev = document.querySelector(prevArrow),
          next = document.querySelector(nextArrow),
          total = document.querySelector(totalCounter),
          current = document.querySelector(currentCounter);
    
    showSlides(slideIndex);

    if (slides.length < 10) {
        total.textContent = `0${slides.length}`;
    } else {
        total.textContent = slides.length;
    }

    function showSlides (n) {
        if (n > slides.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slides.length;
        }

        slides.forEach(item => item.style.display = "none");

        slides[slideIndex - 1].style.display = "block";

        if (slides.length < 10) {
            current.textContent = `0${slideIndex}`;
        } else {
            current.textContent = slideIndex;
        }
    }

    slider.style.position = 'relative';

    const dots = document.createElement('ol'),
          indicators = [];
        dots.classList.add('slider-dots');
        dots.style.cssText = `
            position: absolute;
            right: 0;
            bottom: 0;
            left: 0;
            z-index: 15;
            display: flex;
            justify-content: center;
            margin-right: 15%;
            margin-left: 15%;
            list-style: none;
        `;

    slider.append(dots);

    for (let i = 0; i < slides.length; i++) {
        const dot = document.createElement('li');
        dot.setAttribute('data-slide-to', i + 1);
        dot.style.cssText = `
            box-sizing: content-box;
            flex: 0 1 auto;
            width: 30px;
            height: 6px;
            margin-right: 3px;
            margin-left: 3px;
            cursor: pointer;
            background-color: #fff;
            background-clip: padding-box;
            border-top: 10px solid transparent;
            border-bottom: 10px solid transparent;
            opacity: .5;
            transition: opacity .6s ease;
        `;

        if( i == 0) {
            dot.style.opacity = 1;
        }
        dots.append(dot);
        indicators.push(dot);
    }

    function plusSlides (n) {
        showSlides(slideIndex +=n);
    }

    function showActiveIndicator() {
        indicators.forEach(dot => dot.style.opacity = '0.5');
        indicators[slideIndex -1].style.opacity = 1;
    }

    prev.addEventListener('click', () => {
        plusSlides(-1);
        showActiveIndicator();
    });

    next.addEventListener('click', () => {
        plusSlides(1);
        showActiveIndicator();
    });

    indicators.forEach( dot => {
        dot.addEventListener('click', (e) => {
            const slideTo = e.target.getAttribute('data-slide-to');
            slideIndex = slideTo;
            showSlides();
            showActiveIndicator();
        });
    });
}
export default slider;