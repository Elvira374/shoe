'use strict';

window.addEventListener('load', function() {
    let elements = document.querySelectorAll('.element-animation');
    let options = {
        threshold: [0.5]
    };
    let observer = new IntersectionObserver(onEntry, options);

    function onEntry(entry) {
        entry.forEach(change => {
            if (change.isIntersecting) {
                change.target.classList.add('element-show');
            }
        });
    }
    for (let elem of elements) {
        observer.observe(elem);
    }

    //menu 
    function openNav() {
        if (window.innerWidth > 770) {
            document.getElementById("mySidenav").style.width = "50%";
        } else {
            document.getElementById("mySidenav").style.width = "100%";
        }
    }
    function closeNav() {
        document.getElementById("mySidenav").style.width = "0";
    }

    let openBtn = document.getElementById('openBtn');
    openBtn.addEventListener('click', openNav);

    let closeBtn = document.getElementById('closeBtn');
    closeBtn.addEventListener('click', closeNav);
});

