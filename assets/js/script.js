const funcionAutomatica = (() => {
    const funcionPrivada = (url, idDelElemento) => {
        const iframe = document.getElementById(idDelElemento);
        iframe.setAttribute('src', url);
    }
    return {
        funcionPublica: (url, id) => {
            funcionPrivada(url, id);
        }
    }
})();


