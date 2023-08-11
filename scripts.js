const showAllButton = document.querySelector('.show-all');
const mapButton = document.querySelector('.map-all');
const sumAll = document.querySelector('.sum-all');
const list = document.querySelector('.list');
const filter = document.querySelector('.filter-vegan');

function format(value){
    return new Intl.NumberFormat('pt-br',{
        style: 'currency',
        currency: 'BRL'

    }).format(value)
}



function showAll(items){

    let newLi = ''
    console.log(items);
    items.forEach(item => {
        newLi = newLi + `
            <li>
                <img src="${item.src}">
                <p>${item.name}</p>
                <p class="price">${format(item.price)}</p>
            </li>
        `
    })

    list.innerHTML = newLi
}

function mapAll(){
    const newPrice = menuOptions.map(item => ({
        ...item,
        price: item.price * 0.9,
         //SPREAD OPERATOR
        // name: item.name,
        // price: item.price * 0.9,
        // vegan: item.vegan,
        // src: item.src
    }))

    showAll(newPrice);
}

function sumAllItems(){
    const totalValue = menuOptions.reduce((acc, cur) => {
        return acc + cur.price;

    }, 0)

    list.innerHTML = `
        <li> A Soma de todos os menus é: ${format(totalValue)} </l>
    
    ` 
}

function filterJustVegan(){
    const justVegan = menuOptions.filter(item => item.vegan === true)

    console.log(justVegan);

    showAll(justVegan);
}

showAllButton.addEventListener('click', () => showAll(menuOptions));
mapButton.addEventListener('click', mapAll);
sumAll.addEventListener('click', sumAllItems);
filter.addEventListener('click', filterJustVegan);

