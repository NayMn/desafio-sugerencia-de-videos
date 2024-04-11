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

class Multimedia {
    constructor(url) {
        this._url = url;
    }
    get getUrl() {
        return this._url;
    }
    setInicio() {
        return 'Este metodo es para realizar un cambio en la URL del video'
    }
};

class Reproductor extends Multimedia {
    constructor(id, url) {
        super(url);
        this._id = id;
    }
    playMultimedia() {
        funcionAutomatica.funcionPublica(this._url, this._id)
    }
    setInicio(tiempo) {
        this._id.setAttribute('src', `${this._url}?start=${tiempo}`);

    }

};
