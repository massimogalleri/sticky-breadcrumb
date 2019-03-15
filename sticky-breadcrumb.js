{

    function _sticky_breadcrumb() {

        const  _bar = document.getElementById('bar');

        let _windowScrollTop = window.pageYOffset,
            _docHeight = document.documentElement.scrollHeight,
            _windowHeight = window.innerHeight,
            _progress = (_windowScrollTop / (_docHeight - _windowHeight)) * 100;

        _bar.style.width = _progress + '%';

    }

    _sticky_breadcrumb();

    window.addEventListener('scroll', _sticky_breadcrumb);

}
