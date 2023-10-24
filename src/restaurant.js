/* eslint-disable max-len */
// Siga as orientações do README!

const createMenu = (object) => {
    let menu = {
        fetchMenu: () => object,
        consumption: [],
        order: (obj) => {
            if (obj in object.food || obj in object.drinks) {
                menu.consumption.push(obj);
                return menu.consumption;
            }
            return 'Item indisponível';
        },
        pay: () => {
            let totalValue = 0;
            menu.consumption.forEach((food) => {
                if (object.food[food]) {
                    totalValue += object.food[food];
                } else if (object.drinks[food]) {
                    totalValue += object.drinks[food];
                }
            });
            return totalValue + (totalValue * 0.1);
        },
    };
    return menu;
};
    console.log(createMenu());
module.exports = createMenu;
