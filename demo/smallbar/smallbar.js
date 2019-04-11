document.addEventListener('DOMContentLoaded', () => {
    Array.from(
        document.getElementById('smallbar').getElementsByClassName('opener')
    ).forEach((i) => {
        i.addEventListener('click', () => {
            document.getElementById('smallbar').classList.toggle('open');
        })
    });

    Array.from(
        document.getElementById('smallbar').getElementsByClassName('subnav')
    ).forEach((i) => {
        i.style.setProperty('--smallbar-subnav-height-full', window.getComputedStyle(i).getPropertyValue('height'));
        i.style.setProperty('--smallbar-subnav-height', 0);
    });
});
