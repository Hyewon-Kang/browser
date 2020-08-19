const vertical = document.querySelector('.vertical');
const horizontal = document.querySelector('.horizontal');
const target = document.querySelector('.target');
const tag = document.querySelector('.tag');

addEventListener('load', () => {
    const targetRect = target.getBoundingClientRect();
    const targetHalfWidth = targetRect.width / 2;
    const targetHalfHeihgt = targetRect.height / 2;

    document.addEventListener('mousemove', event => {
        const x = event.clientX;
        const y = event.clientY;
        //left와 top을 이용하면 layout부터 발생해서 매우 나쁨 left와 top대신 translate를 이용해 composite만 발생할 수 있도록 개선하는 것이 좋음
        vertical.style.transform = `translateX(${x}px)`;
        horizontal.style.transform = `translateY(${y}px)`;
        target.style.transform = `translate(${x - targetHalfWidth}px, ${y - targetHalfWidth}px)`;
        tag.style.transform = `translate(${x + 20}px, ${y + 20}px)`;
        tag.innerHTML = `${x}px, ${y}px`;
    });
})