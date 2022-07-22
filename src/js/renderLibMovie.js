import { markUpWithGenres } from './cardListWithGenres';
import { removeSceletonLoad } from './sceletonLoad';

//containers for render, design changes
const libraryContainer = document.querySelector('.library-container');
const libList = document.querySelector('.library-list');

//btn accent
const active_type = 'header__btn-active';

//listerners
const btnOpenWatched = document.querySelector('.js-watched-btn');
const btnOpenQue = document.querySelector('.js-queue-btn');

//data parsed
const queueStorage = localStorage.getItem('queue-list');
const watchedStorage = localStorage.getItem('watched-list');
const arrValuesOfQueue = JSON.parse(queueStorage);
const arrValuesOfWatched = JSON.parse(watchedStorage);

window.onload = () => {
    libList.innerHTML = markUpWithGenres(arrValuesOfQueue);
    funnyGuyOnBg();
}

//queue btn is active on load
btnOpenQue?.addEventListener('click', openQueue);
btnOpenWatched?.addEventListener('click', openWatched);


function openQueue() {
    libList.innerHTML = markUpWithGenres(arrValuesOfQueue);
    funnyGuyOnBg();
    removeSceletonLoad();
    btnOpenQue.classList.add(active_type);
    btnOpenWatched.classList.remove(active_type);
}

function openWatched() {
    libList.innerHTML = markUpWithGenres(arrValuesOfWatched);
    funnyGuyOnBg();
    removeSceletonLoad();
    btnOpenQue.classList.remove(active_type);
    btnOpenWatched.classList.add(active_type);
}

export function funnyGuyOnBg() {
    libList.firstChild == null ? libraryContainer.classList.add('lib-bg-img') : libraryContainer.classList.remove('lib-bg-img');
}






