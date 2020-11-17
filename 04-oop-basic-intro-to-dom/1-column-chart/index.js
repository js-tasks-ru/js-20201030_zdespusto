export default class ColumnChart {
    chartHeight = 50 ;
    subElements = {} ;

    constructor({
        data = [],
        label =  '',
        link =  '',
        value =  0
    } = {}) {
        this.data = data;
        this.label = label;
        this.link = link;
        this.value = value ; 

        this.render();

    }
    get charHeight() {
        return this.charHeight;
    }

    // get element() {
    //     return this.render();
    // }

    getColumns(data) {
        const MaxValue = Math.max(...data);
        const scale = this.chartHeight / MaxValue;
        
        return data.map(
            item => {
                const percent = (item / MaxValue * 100).toFixed();
                return `<div style="--value: ${Math.floor(item * scale)}" data-tooltip=${percent}%></div>`
            }
        ).join('');

      }

      getLink() {
          return this.link ? `<a class="column-chart__link" href=${this.link}>View all</a>` : '' ; 
      }


      get template() {
         return  `
            <div class="column-chart column-chart_loading" style="--chart-height: ${this.chartHeight}">
                <div class="column-chart__title">
                    Total ${this.label}
                    ${this.getLink}
                </div>
                <div class="column-chart__container">
                    <div data-element="header" class="column-chart__header">
                        ${this.value}
                    </div>
                    <div data-element="body" class="column-chart__chart">
                        ${this.getColumns(this.data)}
                    </div>
                </div>
            </div>
         `;
      }


    
    render() {
        
        const tmplElement = document.createElement('div');
        tmplElement.innerHTML = this.template ; 

        this.element = tmplElement.firstElementChild;

        if (this.data.length) {
            this.element.classList.remove('column-chart_loading');
        }



        this.subElements = this.getSubElements(this.element);
    }

    getSubElements(element) {
        const data_elements = element.querySelectorAll('[data-element]');

        return [...data_elements].reduce((accum, current_el) => {
            accum[current_el.dataset.element] = current_el;
            return accum;
        }, {});

    }

    update(data) {
        this.subElements.body.innerHTML = this.getColumns(data);
    }

    remove() {
        this.element.remove() //remove node from DOM 
    }

    destroy() {
        this.remove();
        this.element = null;
        this.subElements= {} ;
    }


}
