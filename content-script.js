(function() {

    var l = location, q = l.search, utmRe = /[?&]utm_[a-z]+=[^&]+/;

    if (utmRe.test(q)) {
        console.log("UTM OK");
        while (utmRe.test(q)) q = q.replace(utmRe, "");
        q = q.replace(/^[&?]+/, '');

        var url = l.href.substr(0, l.href.length - l.search.length) + ((q == "") ? "" : "?" + q);

        history.replaceState(null, "", url);
    }

})();

