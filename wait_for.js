function wait_for(selector, cb) {
    const id = setInterval(() => {
        const elems = document.querySelectorAll(selector);
        if (elems.length >= 0) {
            console.log('# found elements. length: ' + elems.length);
            clearInterval(id);
            cb(elems);
        }
        console.log('# not found elements');
    }, 1000);
}
