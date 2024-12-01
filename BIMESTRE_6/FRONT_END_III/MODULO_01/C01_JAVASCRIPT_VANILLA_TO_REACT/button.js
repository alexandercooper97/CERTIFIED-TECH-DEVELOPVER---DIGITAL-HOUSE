//Este metodo nos permite crear elementos dentro de React
const e = React.createElement;

// !Esto es un componente React ! 
const Button = () => e(
    'button',
    {onClick: () => alert("Has hecho click")},
    'Haz Click'
);

const domContainer = document.querySelector('#button_container');

//Aqui llamamos un metodo de React que crea la base
//para poder utilizar la libreria dentro de nuestro <div>.
const root = ReactDOM.createRoot(domContainer);

//Con el metodo render vamos a mostrar el componente Button
root.render(e(Button))