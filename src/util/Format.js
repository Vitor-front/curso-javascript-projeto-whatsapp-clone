class Format {

    //O método abaixo cria um elemento, retira o hifen e adiciona o modelo camelCase
    static getCamelCase(text){

        let div = document.createElement('div');
        div.innerHTML = `<div data-${text}="id"></div>`;

        return Object.keys(div.firstChild.dataset)[0];
    }

}