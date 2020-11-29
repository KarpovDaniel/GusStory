ymaps.ready(init);

function init() {
    const myMap = new ymaps.Map('map', {
        center: [55.614813, 40.665764],
        controls: ['geolocationControl', 'routeButtonControl', 'typeSelector', 'fullscreenControl'],
        zoom: 14
    });

    function constructor(coord, content, content_header, content_body, icon) {
        const myGeoObject = new ymaps.Placemark(
            coord, {
                hintContent: content,
                balloonContentHeader: content_header,
                balloonContentBody: content_body
            }, {preset: icon});
        myMap.geoObjects.add(myGeoObject);
    }

    constructor([55.619820, 40.658117],
        "Музей Хрусталя им. Мальцовых",
        "<a href='about_item/1' style='color:#000'>Музей Хрусталя им. Мальцовых</a>",
        "ул. Калинина, 2А",
        "islands#blueLeisureIcon");
    constructor([55.613656, 40.671539],
        "Церковь Иоакима и Анны",
        "<a href='about_item/18' style='color:#000'>Церковь Иоакима и Анны</a>",
        "ул. Люксембургская, 3",
        "islands#blueChristianIcon");
    constructor([55.615304, 40.663793],
        "Гусевской хрустальный завод",
        "<a href='about_item/10' style='color:#000'>Гусевской хрустальный завод</a>",
        "ул. Калинина, д.28",
        "islands#blueFactoryIcon");
    constructor([55.618697, 40.650599],
        "Железнодорожная станция Гусь-Хрустальный",
        "<a href='about_item/11' style='color:#000'>Железнодорожная станция Гусь-Хрустальный</a>",
        "ул. Вокзальная ул., 1",
        "islands#blueRailwayIcon");
    constructor([55.614639, 40.670134],
        "Торговые ряды",
        "<a href='about_item/14' style='color:#000'>Торговые ряды</a>",
        "ул. Старых Большевиков, д.7",
        "islands#blueMoneyIcon");
    constructor([55.618883, 40.659677],
        "Гусь-Хрустальный историко-художественный музей",
        "<a href='about_item/20' style='color:#000'>Гусь-Хрустальный историко-художественный музей</a>",
        "ул. Калинина, 2",
        "islands#blueLeisureIcon");
    constructor([55.604197, 40.676754],
        "Часовня Св. Варвары",
        "<a href='about_item/5' style='color:#000'>Часовня Св. Варвары</a>",
        "ул. Пролетарская улица",
        "islands#blueChristianIcon");
    constructor([55.619020, 40.657013],
        "Богадельня",
        "<a href='about_item/6' style='color:#000'>Богадельня</a>",
        "ул. Калинина, 1",
        "islands#blueChristianIcon");
    constructor([55.626131, 40.665206],
        "Городское озеро",
        "<a href='about_item/12' style='color:#000'>Городское озеро</a>",
        "ул. Калинина",
        "islands#blueWaterParkIcon");
    constructor([55.611645, 40.668197],
        "Гусевский текстильный комбинат",
        "<a href='about_item/9' style='color:#000'>Гусевский текстильный комбинат</a>",
        "ул. Рудницкой, 6",
        "islands#blueFactoryIcon");
    constructor([55.616437, 40.678321],
        "Мальцовские дома",
        "<a href='about_item/8' style='color:#000'>Мальцовские дома</a>",
        "ул. Октябрьская",
        "islands#blueHomeIcon");
    constructor([55.619949, 40.678899],
        "Православная гимназия",
        "<a href='about_item/2' style='color:#000'>Православная гимназия</a>",
        "Интернациональная ул., 52",
        "islands#blueEducationIcon");
    constructor([55.611034, 40.658133],
        "Военный комиссариат города Гусь-Хрустальный и Гусь-Хрустального района Владимирской области",
        "<a href='about_item/16' style='color:#000'>Военный комиссариат города Гусь-Хрустальный и Гусь-Хрустального района Владимирской области</a>",
        "ул. Васильева, 23",
        "islands#blueInfoIcon");
    constructor([55.616965, 40.677815],
        "Городская больница",
        "<a href='about_item/19' style='color:#000'>Городская больница</a>",
        "Октябрьская ул., 39",
        "islands#blueMedicalIcon");
    constructor([55.614354, 40.670724],
        "Памятник Комсомольцам",
        "<a href='about_item/3' style='color:#000'>Памятник Комсомольцам</a>",
        "площадь Свободы",
        "islands#bluePersonIcon");
    constructor([55.617119, 40.664703],
        "Узкоколейная железная дорога",
        "<a href='about_item/4' style='color:#000'>Узкоколейная железная дорога</a>",
        "улица Калинина, 20",
        "islands#blueRailwayIcon");
    constructor([55.617810, 40.664254],
        "Завод &laquo;Стекловолокно&raquo",
        "<a href='about_item/7' style='color:#000'>Завод &laquo;Стекловолокно&raquo;</a>",
        "улица Калинина, 9",
        "islands#blueFactoryIcon");
    constructor([55.621394, 40.643527],
        "ДШИ",
        "<a href='about_item/13' style='color:#000'>ДШИ</a>",
        "просп. 50 лет Советской Власти, 13",
        "islands#blueEducationIcon");
    constructor([55.619496, 40.658481],
        "Памятник Акиму Мальцову",
        "<a href='about_item/15' style='color:#000'>Памятник Акиму Мальцову</a>",
        "микрорайон Вокзал",
        "islands#bluePersonIcon");
    constructor([55.615298, 40.670767],
        "Памятник Корсакову",
        "<a href='about_item/17' style='color:#000'>Памятник Корсакову</a>",
        "микрорайон Центр",
        "islands#bluePersonIcon");
    ymaps.geolocation.get().then(function (result) {
        myMap.geoObjects.add(result.geoObjects);
    });
}