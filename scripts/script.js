function setPosition(classActive) {
    const [classDesactive] = ['sign-up', 'sign-in'].filter(c => c !== classActive);

    const sign = document.querySelector('.sign');
    const signInfo = document.querySelector('.sign-info');

    if (classActive === 'sign-up') {
        sign.classList.add('move-left');
        signInfo.classList.add('move-right');
    } else {
        sign.classList.remove('move-left');
        signInfo.classList.remove('move-right');
    }

    document.querySelectorAll('.sign-in, .sign-up').forEach(e => {
        if(e.classList.contains(classActive)) {
            e.classList.remove('desactive');
            e.classList.add('active')
        }else {
            e.classList.add('desactive');
            e.classList.remove('active')
        }
    });
}