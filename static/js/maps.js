ymaps.ready(init);

function init() {
    ymaps.geolocation.get();
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
                hintContent: "Свято-Троицкий храм",
                balloonContentHeader: "Свято-Троицкий храм",
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
                hintContent: "Гусевской хрустальный заводм",
                balloonContentHeader: "Гусевской хрустальный завод",
                balloonContentBody: "ул. Калинина, д.28",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject2 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.634348, 40.689810]
            },
            properties: {
                hintContent: "ФГБУ Национальный парк Мещёра",
                balloonContentHeader: "ФГБУ Национальный парк Мещёра",
                balloonContentBody: "Интернациональная ул., 111",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject3 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.625530, 40.700490]
            },
            properties: {
                hintContent: "парк Сказка",
                balloonContentHeader: "парк Сказка",
                balloonContentBody: "ул. Пролетарская",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject4 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.625530, 40.700490]
            },
            properties: {
                hintContent: "Железнодорожная станция Гусь-Хрустальный",
                balloonContentHeader: "Железнодорожная станция Гусь-Хрустальный",
                balloonContentBody: "ул. Вокзальная ул., 1",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject5 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.609868, 40.670896]
            },
            properties: {
                hintContent: "Стекольный рынок",
                balloonContentHeader: "Стекольный рынок",
                balloonContentBody: "ул. Рудницкой, 10",
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
                balloonContentHeader: "Торговые ряды",
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
                balloonContentHeader: "Гусь-Хрустальный историко-художественный музей",
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
                balloonContentHeader: "Часовня Св. Варвары",
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
                hintContent: "Администрация г. Гусь-Хрустальный",
                balloonContentHeader: "Администрация г. Гусь-Хрустальный",
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
                balloonContentHeader: "Городское озеро",
                balloonContentBody: "ул. Калинина",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject11 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.614927, 40.670335]
            },
            properties: {
                hintContent: "Площадь свободы",
                balloonContentHeader: "Площадь свободы",
                balloonContentBody: "ул. Калинина",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject12 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.612599, 40.665880]
            },
            properties: {
                hintContent: "Памятник гусю",
                balloonContentHeader: "Памятник гусю",
                balloonContentBody: "ул. Рудницкой, в районе 2-го дома",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject13 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.570552, 40.182595]
            },
            properties: {
                hintContent: "Музейный комплекс под открытым небом ФГБУ Национального парка Мещёра Русское подворье",
                balloonContentHeader: "Музейный комплекс под открытым небом ФГБУ Национального парка Мещёра Русское подворье",
                balloonContentBody: "Южная ул., 19, поселок Тасинский (Перхурово)",
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
                balloonContentHeader: "Гусевский текстильный комбинат",
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
                balloonContentHeader: "Мальцовские дома",
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
                balloonContentHeader: "Православная гимназия",
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
                balloonContentHeader: "Военный комиссариат города Гусь-Хрустальный и Гусь-Хрустального района Владимирской области",
                balloonContentBody: "ул. Васильева, 23",
            }
        },
        {
            strokeColor: "ff0000"
        });
    const myGeoObject18 = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [55.617488, 40.678467]
            },
            properties: {
                hintContent: "Больничный городок",
                balloonContentHeader: "Больничный городок",
                balloonContentBody: "Октябрьская ул., 39",
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
}