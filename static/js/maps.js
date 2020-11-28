ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map("map", {
        center: [55.614813, 40.665764],
        zoom: 14
    });

    function constructor(coord, content, content_h, content_b) {
        const myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: coord
            },
            properties: {
                hintContent: content,
                balloonContentHeader: content_h,
                balloonContentBody: content_b
            }
        }, {
            strokeColor: "ff0000",
            preset: "islands#blueLeisureCircleIcon"
        });
        myMap.geoObjects.add(myGeoObject);
    }

    const geolocation = ymaps.geolocation;
    constructor([55.619820, 40.658117],
        "Музей Хрусталя им. Мальцовых",
        "<a href='about_item/1' style='color:#000'>Музей Хрусталя им. Мальцовых</a>",
        "ул. Калинина, 2А");
    constructor([55.613656, 40.671539],
        "Церковь Иоакима и Анны",
        "<a href='about_item/18' style='color:#000'>Церковь Иоакима и Анны</a>",
        "ул. Люксембургская, 3");
    constructor([55.615304, 40.663793],
        "Гусевской хрустальный завод",
        "<a href='about_item/10' style='color:#000'>Гусевской хрустальный завод</a>",
        "ул. Калинина, д.28");
    constructor([55.618697, 40.650599],
        "Железнодорожная станция Гусь-Хрустальный",
        "<a href='about_item/11' style='color:#000'>Железнодорожная станция Гусь-Хрустальный</a>",
        "ул. Вокзальная ул., 1");
    constructor([55.614639, 40.670134],
        "Торговые ряды",
        "<a href='about_item/14' style='color:#000'>Торговые ряды</a>",
        "ул. Старых Большевиков, д.7");
    constructor([55.618883, 40.659677],
        "Гусь-Хрустальный историко-художественный музей",
        "<a href='about_item/20' style='color:#000'>Гусь-Хрустальный историко-художественный музей</a>",
        "ул. Калинина, 2");
    constructor([55.604197, 40.676754],
        "Часовня Св. Варвары",
        "<a href='about_item/5' style='color:#000'>Часовня Св. Варвары</a>",
        "ул. Пролетарская улица");
    constructor([55.619020, 40.657013],
        "Богадельня",
        "<a href='about_item/6' style='color:#000'>Богадельня</a>",
        "ул. Калинина, 1");
    constructor([55.626131, 40.665206],
        "Городское озеро",
        "<a href='about_item/12' style='color:#000'>Городское озеро</a>",
        "ул. Калинина");
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
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
            strokeColor: "ff0000",
            preset: "islands#redLeisureCircleIcon"
        });
    myMap.geoObjects.add(myGeoObject2);
    myMap.geoObjects.add(myGeoObject3);
    myMap.geoObjects.add(myGeoObject5);
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
        result.geoObjects.options.set('preset', 'islands#redCircleIcon');
        myMap.geoObjects.add(result.geoObjects);
    });
}