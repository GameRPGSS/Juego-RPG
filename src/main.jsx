// import ReactDOM from 'react-dom/client' // Elimina esta línea si no la necesitas
import { Juego } from './juego.jsx';


// ReactDOM.createRoot(document.getElementById('root')).render(
//     <Juego/>
// );

// Inicializa el juego directamente
const initGame = () => {
    Juego.init();
};

// Llama a la función de inicialización del juego al cargar la página
document.addEventListener('DOMContentLoaded', initGame);

