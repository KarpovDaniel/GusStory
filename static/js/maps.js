ymaps.ready(init);

function init() {
    var geolocation = ymaps.geolocation;
    let myMap = new ymaps.Map("map", {
        center: [55.611813, 40.660774],
        zoom: 13
    });

    const myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.619820, 40.658117]
            },
            properties: {
                hintContent: "Музей Хрусталя им. Мальцовых",
                balloonContentHeader: "<a href='about_item/1' style='color:#000'>Музей Хрусталя им. Мальцовых</a>",
                balloonContentBody: "ул. Калинина, 2А",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject0 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.613656, 40.671539]
            },
            properties: {
                hintContent: "Церковь Иоакима и Анны",
                balloonContentHeader: "<a href='about_item/18' style='color:#000'>Церковь Иоакима и Анны</a>",
                balloonContentBody: "ул. Люксембургская, 3",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject1 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.615304, 40.663793]
            },
            properties: {
                hintContent: "Гусевской хрустальный завод",
                balloonContentHeader: "<a href='about_item/10' style='color:#000'>Гусевской хрустальный завод</a>",
                balloonContentBody: "ул. Калинина, д.28",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject4 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.618697, 40.650599]
            },
            properties: {
                hintContent: "Железнодорожная станция Гусь-Хрустальный",
                balloonContentHeader: "<a href='about_item/11' style='color:#000'>Железнодорожная станция Гусь-Хрустальный</a>",
                balloonContentBody: "ул. Вокзальная ул., 1",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject6 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.614639, 40.670134]
            },
            properties: {
                hintContent: "Торговые ряды",
                balloonContentHeader: "<a href='about_item/14' style='color:#000'>Торговые ряды</a>",
                balloonContentBody: "ул. Старых Большевиков, д.7",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject7 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.618883, 40.659677]
            },
            properties: {
                hintContent: "Гусь-Хрустальный историко-художественный музей",
                balloonContentHeader: "<a href='about_item/20' style='color:#000'>Гусь-Хрустальный историко-художественный музей</a>",
                balloonContentBody: "ул. Калинина, 2",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject8 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.604197, 40.676754]
            },
            properties: {
                hintContent: "Часовня Св. Варвары",
                balloonContentHeader: "<a href='about_item/5' style='color:#000'>Часовня Св. Варвары</a>",
                balloonContentBody: "ул. Пролетарская улица",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject9 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.619020, 40.657013]
            },
            properties: {
                hintContent: "Богадельня",
                balloonContentHeader: "<a href='about_item/6' style='color:#000'>Богадельня</a>",
                balloonContentBody: "ул. Калинина, 1",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject10 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.626131, 40.665206]
            },
            properties: {
                hintContent: "Городское озеро",
                balloonContentHeader: "<a href='about_item/12' style='color:#000'>Городское озеро</a>",
                balloonContentBody: "ул. Калинина",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject14 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.611645, 40.668197]
            },
            properties: {
                hintContent: "Гусевский текстильный комбинат",
                balloonContentHeader: "<a href='about_item/9' style='color:#000'>Гусевский текстильный комбинат</a>",
                balloonContentBody: "ул. Рудницкой, 6",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject15 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.616437, 40.678321]
            },
            properties: {
                hintContent: "Мальцовские дома",
                balloonContentHeader: "<a href='about_item/8' style='color:#000'>Мальцовские дома</a>",
                balloonContentBody: " ул. Октябрьская",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject16 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.619949, 40.678899]
            },
            properties: {
                hintContent: "Православная гимназия",
                balloonContentHeader: "<a href='about_item/2' style='color:#000'>Православная гимназия</a>",
                balloonContentBody: "Интернациональная ул., 52",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject17 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.611034, 40.658133]
            },
            properties: {
                hintContent: "Военный комиссариат города Гусь-Хрустальный и Гусь-Хрустального района Владимирской области",
                balloonContentHeader: "<a href='about_item/16' style='color:#000'>Военный комиссариат города Гусь-Хрустальный и Гусь-Хрустального района Владимирской области</a>",
                balloonContentBody: "ул. Васильева, 23",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject18 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.616965, 40.677815]
            },
            properties: {
                hintContent: "Городская больница",
                balloonContentHeader: "<a href='about_item/19' style='color:#000'>Городская больница</a>",
                balloonContentBody: "Октябрьская ул., 39",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject2 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.614354, 40.670724]
            },
            properties: {
                hintContent: "Памятник Комсомольцам",
                balloonContentHeader: "<a href='about_item/3' style='color:#000'>Памятник Комсомольцам</a>",
                balloonContentBody: "площадь Свободы",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject3 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.617119, 40.664703]
            },
            properties: {
                hintContent: "Узкоколейная железная дорога",
                balloonContentHeader: "<a href='about_item/4' style='color:#000'>Узкоколейная железная дорога</a>",
                balloonContentBody: "улица Калинина, 20",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject5 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.617810, 40.664254]
            },
            properties: {
                hintContent: "Завод &laquo;Стекловолокно&raquo;",
                balloonContentHeader: "<a href='about_item/7' style='color:#000'>Завод &laquo;Стекловолокно&raquo;</a>",
                balloonContentBody: "улица Калинина, 9",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject11 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.621394, 40.643527]
            },
            properties: {
                hintContent: "ДШИ",
                balloonContentHeader: "<a href='about_item/13' style='color:#000'>ДШИ</a>",
                balloonContentBody: "просп. 50 лет Советской Власти, 13",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject12 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.619496, 40.658481]
            },
            properties: {
                hintContent: "Памятник Акиму Мальцову",
                balloonContentHeader: "<a href='about_item/15' style='color:#000'>Памятник Акиму Мальцову</a>",
                balloonContentBody: "микрорайон Вокзал",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject13 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.615298, 40.670767]
            },
            properties: {
                hintContent: "Памятник Корсакову",
                balloonContentHeader: "<a href='about_item/17' style='color:#000'>Памятник Корсакову</a>",
                balloonContentBody: "микрорайон Центр",
            }
        },
        {
            strokeColor: "ff0000"
        });
    myMap.geoObjects.add(myGeoObject);
    myMap.geoObjects.add(myGeoObject0);
    myMap.geoObjects.add(myGeoObject1);
    myMap.geoObjects.add(myGeoObject2);
    myMap.geoObjects.add(myGeoObject3);
    myMap.geoObjects.add(myGeoObject4);
    myMap.geoObjects.add(myGeoObject5);
    myMap.geoObjects.add(myGeoObject6);
    myMap.geoObjects.add(myGeoObject7);
    myMap.geoObjects.add(myGeoObject8);
    myMap.geoObjects.add(myGeoObject9);
    myMap.geoObjects.add(myGeoObject10);
    myMap.geoObjects.add(myGeoObject11);
    myMap.geoObjects.add(myGeoObject12);
    myMap.geoObjects.add(myGeoObject13);
    myMap.geoObjects.add(myGeoObject14);
    myMap.geoObjects.add(myGeoObject15);
    myMap.geoObjects.add(myGeoObject16);
    myMap.geoObjects.add(myGeoObject17);
    myMap.geoObjects.add(myGeoObject18);

    geolocation.get({
        provider: 'browser'
    }).then(function (result) {
        // Синим цветом пометим положение, полученное через браузер.
        // Если браузер не поддерживает эту функциональность, метка не будет добавлена на карту.
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
}