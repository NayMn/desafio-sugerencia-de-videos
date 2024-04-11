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
    constructor(url, id) {
        super(url);
        this._id = id;
    }
    playMultimedia() {
        funcionAutomatica.funcionPublica(this._url, this._id)
    }
    setInicio(tiempo) {
        const iframe = document.getElementById(this._id);
        iframe.setAttribute('src', `${this._url}&amp;start=${tiempo}`);
    }
};


let musica = new Reproductor('https://www.youtube.com/embed/4y5bw_Jpirs?si=ya9U_4C-FS5ZJfl4', 'musica')
let pelicula = new Reproductor('https://www.youtube.com/embed/zSWdZVtXT7E?si=aN6POcy2i6pvP9Ps', 'peliculas')
let serie = new Reproductor('https://www.youtube.com/embed/yyGetSp7CIc?si=K-KcC5Y9f-qHO2uT', 'series')

musica.playMultimedia();
pelicula.playMultimedia();
serie.playMultimedia();
pelicula.setInicio(15);



