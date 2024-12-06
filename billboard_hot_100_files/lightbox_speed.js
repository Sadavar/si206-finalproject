var DIGIOH_LOADER = DIGIOH_LOADER || {};
(function (digioh_loader) {

    if (digioh_loader.loaded) { return; }
    digioh_loader.loaded = true;

    var isMainLoaded = false;

    function loadMain()
    {
        if (!isMainLoaded)
        {
            isMainLoaded = true;

            try
            {
                localStorage.setItem('digishum', 'yes');
            } catch (e)
            {
            }

            window.setTimeout(function ()
            {
                var e = document.createElement('script'); e.type = 'text/javascript'; e.async = true;
                e.src = '//www.lightboxcdn.com/vendor/91b6ec18-0587-49d9-b35b-c8d05a934805/user' + ((window.sessionStorage.getItem('xdibx_boxqamode') == 1 || window.location.href.indexOf('boxqamode') > 0)  ? '_qa' : '') + '.js?cb=638321932212901963';
                var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(e, s);
            }, 10);
        }
    };

    try
    {
        var hn = 'empty';
        if (window && window.location && window.location.hostname)
        {
            hn = window.location.hostname;
        }

        var i = document.createElement("img");
        i.width = 1;
        i.height = 1;
        i.src = ('https://www.lightboxcdn.com/z9g/digibox.gif?c=' + (new Date().getTime()) + '&h=' + encodeURIComponent(hn) + '&e=p&u=43617');

        window.SENT_LIGHTBOX_PV = true;
    }
    catch (e)
    {
    }

    var bypassListeners = false;
    try
    {
        var ish = localStorage.getItem('digishum');
        if (typeof ish === 'string' && ish === 'yes')
        {
            bypassListeners = true;
            loadMain();
        }
    } catch (e)
    {
    }

    if (!bypassListeners)
    {
        var addListener, removeListener;
        if (document.addEventListener)
        {
            addListener = function (evt, f)
            {
                try
                {
                    return document.addEventListener(evt, f, false);
                }
                catch (e)
                {
                    return false;
                }
            };
            removeListener = function (evt, f)
            {
                try
                {
                    return document.removeEventListener(evt, f, false);
                }
                catch (e)
                {
                    return false;
                }
            };
        } else
        {
            addListener = function (evt, f)
            {
                try
                {
                    return document.attachEvent('on' + evt, f);
                }
                catch (e)
                {
                    return false;
                }
            };
            removeListener = function (evt, f)
            {
                try
                {
                    return document.detachEvent('on' + evt, f);
                }
                catch (e)
                {
                    return false;
                }
            };
        }

        function scrollListener()
        {
            removeListener('scroll', scrollListener);
            loadMain();
        };

        function mouseMoveListener()
        {
            removeListener('mousemove', mouseMoveListener);
            loadMain();
        };

        function mouseDownListener()
        {
            removeListener('mousedown', mouseDownListener);
            loadMain();
        };

        function mouseUpListener()
        {
            removeListener('mouseup', mouseUpListener);
            loadMain();
        };

        function clickListener()
        {
            removeListener('click', clickListener);
            loadMain();
        };

        function touchStartListener()
        {
            removeListener('touchstart', touchStartListener);
            loadMain();
        };

        function touchMoveListener()
        {
            removeListener('touchmove', touchMoveListener);
            loadMain();
        };

        function touchEndListener()
        {
            removeListener('touchend', touchEndListener);
            loadMain();
        };

        function touchCancelListener()
        {
            removeListener('touchcancel', touchCancelListener);
            loadMain();
        };

        addListener('scroll', scrollListener);
        addListener('mousemove', mouseMoveListener);
        addListener('mousedown', mouseDownListener);
        addListener('mouseup', mouseUpListener);
        addListener('click', clickListener);
        addListener('touchstart', touchStartListener);
        addListener('touchmove', touchMoveListener);
        addListener('touchend', touchEndListener);
        addListener('touchcancel', touchCancelListener);
    }
})(DIGIOH_LOADER);