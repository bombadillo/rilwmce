var a = document.getElementsByTagName('a');
for (var i = 0; i < a.length; i++){
    var link = a[i];
    p = /(i.)?imgur\.com\/([A-Za-z0-9]+)/;
    res = p.exec(link);
    if (res!=null) {
        link.href = 'http://kageurufu.net/imgur/?' + res[2] + '.jpg';
    }
}
