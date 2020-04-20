import './styles.css';
import api from './js/api';
import listItemTamplate from './tampeits/listItemTamplate.hbs';

const container = document.querySelector('.container');

Promise.all([api.fetchRatingFilms(), api.fetchGenre()])
  .then(result => {
    const films = [...result[0]];
    const ganres = result[1].genres;
    films.map(item => {
      const ganArr = item.genre_ids;
      const ganName = ganArr.map(gan => {
        const currGan = ganres.find(ganr => ganr.id === gan);
        return currGan.name;
      });
      return (item.genre_ids = [...ganName]);
    });
    function markup(films) {
      const ul = films.map(item => listItemTamplate(item)).join('');
      return ul;
    }
    container.insertAdjacentHTML('beforeend', markup(films));
  })
  .catch(err => console.log(err));