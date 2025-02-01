// add transition css class to body to prevent flash of unstyled content
setTimeout(() => {
    document.body.classList.add('transition');
}, 100); // 100 ms delay let everything else load first