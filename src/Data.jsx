import Arrival from './images/Arrival.jpg'
import Interstellar from './images/Interstellar.jpg'
import Joker from './images/Joker.jpg'
import TopGun from './images/Maverick.jpg'
import FordVFerrari from './images/Ford v Ferrari.jpg'

export const movies = [
    {
        id: 1,
        title: 'Arrival',
        image: Arrival,
        rating: "7.9",
        description: 'Dilbilimci Louise Banks, devasa uzay gemileri dünyanın çeşitli yerlerine indiğinde bir araştırma ekibine liderlik eder. Uluslar küresel savaşın eşiğine gelirken, Banks ve ekibi, dünya dışı ziyaretçilerle iletişim kurmanın bir yolunu bulmak zorundadır.',
        category: ['Alien Invasion', 'Psychological Drama', 'Sci-Fi Epic', 'Drama'],
        year: 2016
    },

    {
        id: 2,
        title: 'Interstellar',
        rating: "8.7",
        image: Interstellar,
        category: ['Adventure Epic', 'Epic', 'Quest', 'Sci-Fi Epic'],
        description: 'Gelecekte Dünya yaşanamaz hale geldiğinde, çiftçi ve eski NASA pilotu Joseph Cooper, insanlık için yeni bir gezegen bulmak üzere bir grup araştırmacıyla birlikte bir uzay gemisini pilotluk yapmakla görevlendirilir.',
        year: 2014
    },

    {
        id: 3,
        title: 'Joker',
        rating: "8.3",
        image: Joker,
        category: ['Psychological Drama', 'Psychological Thriller', 'Tragedy', 'Crime'],
        description: "Arthur Fleck, bir palyaço ve başarısız bir stand-up komedyeni olarak hasta annesiyle birlikte yoksul bir hayat sürmektedir. Ancak toplum onu dışlayıp bir ucube olarak damgaladığında, Gotham Şehri'nde kaos dolu bir hayatı benimsemeye karar verir.",
        year: 2019
    },

    {
        id: 4,
        title: 'Top Gun Maverick',
        image: TopGun,
        rating: "8.2",
        category: ['Action Epic', 'Epic', 'Action', 'Drama'],
        description: "Hikaye, Maverick'in tehlikeli bir görev için, aralarında merhum en yakın arkadaşının oğlunun da bulunduğu genç Top Gun mezunlarını eğitirken geçmişiyle yüzleşmesini konu alır.",
        year: 2022
    }
    ,
    {
        id: 5,
        title: 'Ford v Ferrari',
        image: FordVFerrari,
        rating: "8.1",
        category: ['Docudrama', 'Motorsport', 'Period Drama', 'Action'],
        description: "Amerikalı otomobil tasarımcısı Carroll Shelby ve sürücü Ken Miles, 1966'da Le Mans 24 Saat yarışında Ferrari'yi yenmek için Ford adına devrim niteliğinde bir yarış arabası inşa etmek amacıyla şirket müdahaleleriyle ve fizik kurallarıyla mücadele ederler.",
        year: 2019
    }
]

