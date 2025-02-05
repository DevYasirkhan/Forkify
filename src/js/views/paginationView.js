import icons from '../../img/icons.svg'; // Parcel 2
import View from './view.js';

class PaginationView extends View {
  _parentElement = document.querySelector('.pagination');

  addHandlerClick(handler) {
    this._parentElement.addEventListener('click', function (e) {
      const btn = e.target.closest('.btn--inline');

      if (!btn) return;

      const goTOPage = +btn.dataset.goto;
      handler(goTOPage);
    });
  }

  _generateMarkup() {
    const curPage = this._data.page;

    // results is 53
    const numPages = Math.ceil(
      this._data.results.length / this._data.resultsPerpage
    );

    // Page 1, and there are other pages
    if (curPage === 1 && numPages > 1) {
      return `
       <p class="pagination__para--test">
        <span>Total ${numPages}</span>
       </p>
       <button data-goto="${
         curPage + 1
       }" class="btn--inline pagination__btn--next">
         <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
      </button> 
      `;
    }

    // Last page
    if (curPage === numPages && numPages > 1) {
      return `
       <button data-goto="${
         curPage - 1
       }" class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-left"></use>
         </svg>
         <span>Page ${curPage - 1}</span>
       </button>
       <p class="pagination__para--test">
        <span>Total ${numPages}</span>
       </p>
      `;
    }

    // Other pages
    if (curPage < numPages) {
      return `
       <button data-goto="${
         curPage - 1
       }"  class="btn--inline pagination__btn--prev">
         <svg class="search__icon">
           <use href="${icons}#icon-arrow-left"></use>
         </svg>
         <span>Page ${curPage - 1}</span>
       </button>
       <p class="pagination__para--test">
        <span>Total ${numPages}</span>
       </p>
        <button data-goto="${
          curPage + 1
        }" class="btn--inline pagination__btn--next">
         <span>Page ${curPage + 1}</span>
          <svg class="search__icon">
           <use href="${icons}#icon-arrow-right"></use>
         </svg>
      </button>
      `;
    }

    // Page 1, and there are No ohter pages
    return '';
  }
}

export default new PaginationView();
