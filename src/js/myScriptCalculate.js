const calculationSite = {
    typeSite: {
        ['визитка']: 5000,
        ['лендинг']: 7000,
        ['магазин до 100 товаров']: 15000,
        ['маркетплэйс']: 100000
    },
    design: {
        ['figma']: 10000,
        ['avacode']: 15000,
        ['photoshop']: 30000,
        ['персональный дизайн']: 50000
    },
    adaptive: {
        ['без адаптива']: 0,
        ['с адаптивом']: 15000
    }
};
let objectArraysKeys = {
    arrTypeKeys: Object.keys(calculationSite.typeSite),
    arrDesignKeys: Object.keys(calculationSite.design),
    arrAdaptiveKeys: Object.keys(calculationSite.adaptive)
};

let price = {
    clientType: '',
    clientDesign: '',
    clientAdaptive: ''
};
let finalPrice = 0;
while (true) {
    calculationPrice();
    let questionClient = confirm(`Подтвердите ваш заказ 
    Тип сайт ${price.clientType}
    Дизайн ${price.clientDesign}
    Адаптив ${price.clientAdaptive}
    Общая стоимость проекта ${finalPrice}`);
    if (questionClient) {
        break;
    } else {
        alert('Давайте попробуем снова');
        continue;
    }
}

function calculationPrice() {
    while (true) {
        type = prompt(
            `Какой тип сайта вы желаете? 
            1. ${objectArraysKeys.arrTypeKeys[0]}
            2. ${objectArraysKeys.arrTypeKeys[1]} 
            3. ${objectArraysKeys.arrTypeKeys[2]} 
            4. ${objectArraysKeys.arrTypeKeys[3]} 
                                            Введит название или номер`,
            'Визитка'
        );
        if (type <= objectArraysKeys.arrTypeKeys.length && type >= 1 && type.Object != String) {
            finalPrice += Number(calculationSite.typeSite[objectArraysKeys.arrTypeKeys[type - 1]]);
            price.clientType = objectArraysKeys.arrTypeKeys[type];
            alert(`Вы выбрали тип ${objectArraysKeys.arrTypeKeys[type]} 
                    Стоимость данной услуги составляет: ${calculationSite.typeSite[
                        objectArraysKeys.arrTypeKeys[type - 1]
                    ]}
                    Перейдём к выбору дизайна`);
        } else if (type.toLowerCase() in calculationSite.typeSite) {
            finalPrice += calculationSite.typeSite[type.toLowerCase()];
            price.clientType = type.toLowerCase();
            alert(`Вы выбрали тип ${type.toLowerCase()} 
                    Стоимость данной услуги составляет: ${calculationSite.typeSite[type.toLowerCase()]}
                    Перейдём к выбору дизайна`);
        } else {
            alert('Попробуйте ввести порядковый номер или значение из списка');
            continue;
        }
        break;
    }

    while (true) {
        design = prompt(
            `Какой дизайн сайта вы желаете? 
                1. ${objectArraysKeys.arrDesignKeys[0]}
                2. ${objectArraysKeys.arrDesignKeys[1]} 
                3. ${objectArraysKeys.arrDesignKeys[2]} 
                4. ${objectArraysKeys.arrDesignKeys[3]} 
                                                Введит название или номер`,
            'figma'
        );
        if (design <= objectArraysKeys.arrDesignKeys.length && design >= 1 && design.Object != String) {
            finalPrice += Number(calculationSite.design[objectArraysKeys.arrDesignKeys[design - 1]]);
            price.clientDesign = objectArraysKeys.arrDesignKeys[design];
            alert(`Вы выбрали дизайн ${objectArraysKeys.arrDesignKeys[design]} 
                        Стоимость данной услуги составляет: ${calculationSite.design[
                            objectArraysKeys.arrDesignKeys[design - 1]
                        ]}
                        На данный момент общая сумма проекта: ${finalPrice}
                        П1ерейдём к выбору адаптива`);
        } else if (design.toLowerCase() in calculationSite.design) {
            1;
            finalPrice += calculationSite.design[design.toLowerCase()];
            price.clientDesign = design.toLowerCase();
            alert(`Вы выбрали дизайн ${design.toLowerCase()} 
                        Стоимость данной услуги составляет: ${calculationSite.design[design.toLowerCase()]}
                        На данный момент общая сумма проекта: ${finalPrice}
                        Перейдём к выбору адаптива`);
        } else {
            alert('Попробуйте ввести порядковый номер или значение из списка');
            continue;
        }

        break;
    }

    while (true) {
        adaptive = prompt(
            `Какой адаптив сайта вы желаете? 
            1. ${objectArraysKeys.arrAdaptiveKeys[0]}
            2. ${objectArraysKeys.arrAdaptiveKeys[1]} 
                                            Введит название или номер`,
            'с адаптивом'
        );
        if (adaptive <= objectArraysKeys.arrAdaptiveKeys.length && adaptive >= 1 && adaptive.Object != String) {
            finalPrice += calculationSite.adaptive[objectArraysKeys.arrAdaptiveKeys[adaptive - 1]];
            price.clientAdaptive = objectArraysKeys.arrAdaptiveKeys[adaptive];
            alert(`Вы выбрали адаптив ${objectArraysKeys.arrAdaptiveKeys[adaptive]} 
                    Стоимость данной услуги составляет: ${calculationSite.adaptive[
                        objectArraysKeys.arrAdaptiveKeys[adaptive - 1]
                    ]}
                    На данный момент общая сумма проекта: ${finalPrice}
                    Перейдём к итогам`);
        } else if (adaptive.toLowerCase() in calculationSite.adaptive) {
            finalPrice += calculationSite.adaptive[adaptive.toLowerCase()];
            price.clientAdaptive = adaptive.toLowerCase();
            alert(`Вы выбрали адаптива ${adaptive.toLowerCase()} 
                    Стоимость данной услуги составляет: ${calculationSite.adaptive[adaptive.toLowerCase()]}
                    Общая сумма проекта: ${finalPrice}
                    Перейдём к итогам`);
        } else {
            alert('Попробуйте ввести порядковый номер или значение из списка');
            continue;
        }

        break;
    }
}
