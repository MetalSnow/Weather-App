import { main } from './dom-module';
import loadingIcon from '../icons/loading.gif';
export { displayLoadingIcon };

function displayLoadingIcon() {
  while (main.firstChild) {
    main.removeChild(main.firstChild);
  }

  const img = new Image();

  img.src = loadingIcon;

  img.style.width = '100px';

  main.appendChild(img);
}
