// Baroque
import bach from '../images/bach.jpg'
import vivaldi from '../images/vivaldi.jpg'
import handel from '../images/handel.jpg'
import monteverdi from '../images/monteverdi.jpg'
import purcell from '../images/purcell.jpg'
import telemann from '../images/telemann.jpg'
import corelli from '../images/corelli.jpg'
// Medieval
import arezzo from '../images/arezzo.png'
import liege from '../images/liege.jpg'
import bingen from '../images/bingen.jpg'
import chartres from '../images/chartres.jpg'
import leonin from '../images/leonin.webp'
import perotin from '../images/perotin.jpg'
import vitry from '../images/vitry.jpg'
// Renaissance
import byrd from '../images/byrd.png'
import prez from '../images/prez.jpg'
import dowland from '../images/dowland.jpg'
import giovanni from '../images/giovanni.jpg'
import clement from '../images/clement.jpg'
import lauss from '../images/lauss.jpg'
import ockeghen from '../images/ockeghen.jpg'
import pierluigi from '../images/pierluigi.jpg'
// Classicism
import mozart from '../images/mozart.jpg'
import haydn from '../images/haydn.jpg'
import schubert from '../images/schubert.jpg'
import boccherini from '../images/boccherini.jpg'
import bologne from '../images/bologne.jpg'
import gluck from '../images/gluck.jpg'
import salieri from '../images/salieri.jpg'
// Romanticism
import chopin from '../images/chopin.jpg'
import wagner from '../images/wagner.jpg'
import linszt from '../images/linszt.jpg'
import beethoven from '../images/beethoven.jpg'
import tchaikovsky from '../images/tchaikovsky.jpg'
import brahms from '../images/brahms.jpg'
import gomes from '../images/gomes.jpg'
import schumann from '../images/schumann.jpg'
import verdi from '../images/verdi.jpg'
// Modernism
import debussy from '../images/debussy.jpg'
import ravel from '../images/ravel.jpg'
import sibelius from '../images/sibelius.jpg'
import boulanger from '../images/boulanger.jpg'
import falla from '../images/falla.jpg'
import rachmaninoff from '../images/rachmaninoff.jpg'
import stravinsky from '../images/stravinsky.jpg'
import schostakovich from '../images/schostakovich.jpg'

const data = [
    // Baroque
    {
        id: 0,
        name: "Johann Sebastian Bach",
        era: "Baroque",
        born: "31-03-1685",
        died: "28-07-1750",
        nationality: "German",
        pic: bach,
        songs: [
            {
                id: 0,
                name: "Prelude in C Major",
                video: "https://www.youtube.com/watch?v=frxT2qB1POQ"
            },
            {
                id: 1,
                name: "Toccata and Fugue",
                video: "https://www.youtube.com/watch?v=ho9rZjlsyYY"
            },
            {
                id: 2,
                name: "Air On G String",
                video: "https://www.youtube.com/watch?v=CvglW3KNSsQ"
            },
            {
                id: 3,
                name: "Jesus, Joy of Man's Desiring",
                video: "https://www.youtube.com/watch?v=gRkSYNlmugs"
            },
            {
                id: 4,
                name: "Prelude & Fugue in C Minor",
                video: "https://www.youtube.com/watch?v=vcC4Thug-h8"
            }
        ]
    },
    {
        id: 1,
        name: "Antonio Vivaldi",
        era: "Baroque",
        born: "04-03-1678",
        died: "28-07-1741",
        nationality: "Italian",
        pic: vivaldi,
        songs: [
            {
                id: 0,
                name: "Winter",
                video: "https://www.youtube.com/watch?v=6El8B8hJ4Sg"
            },
            {
                id: 1,
                name: "Summer",
                video: "https://www.youtube.com/watch?v=H_3JiTfmuzg"
            },
            {
                id: 2,
                name: "Spring",
                video: "https://www.youtube.com/watch?v=jGFqtOdEIWk"
            },
            {
                id: 3,
                name: "Autumn",
                video: "https://www.youtube.com/watch?v=T3MLn4YJBlQ"
            }
        ]
    },
    {
        id: 2,
        name: "George Frideric Handel",
        era: "Baroque",
        born: "23-02-1685",
        died: "14-04-1759",
        nationality: "German-British",
        pic: handel,
        songs: [
            {
                id: 0,
                name: "The Arrival of the Queen of Sheba",
                video: "https://www.youtube.com/watch?v=-TGKJ9MgCOQ"
            },
            {
                id: 1,
                name: "Messiah",
                video: "https://www.youtube.com/watch?v=usfiAsWR4qU"
            },
            {
                id: 2,
                name: "La Rejouissance",
                video: "https://www.youtube.com/watch?v=p5jgSVw3nms"
            }
        ]
    },
    {
        id: 3,
        name: "Claudio Monteverdi",
        era: "Baroque",
        born: "09-05-1567",
        died: "29-11-1643",
        nationality: "Italian",
        pic: monteverdi,
        songs: [
            {
                id: 0,
                name: "Canzonette d'Amore",
                video: "https://www.youtube.com/watch?v=LZHtsoeUvds"
            },
            {
                id: 1,
                name: "Pur ti Miro",
                video: "https://www.youtube.com/watch?v=6eA7aDYflc4"
            },
            {
                id: 2,
                name: "La Fiera Vista",
                video: "https://www.youtube.com/watch?v=b_BhaX-GyGQ"
            }
        ]
    },
    {
        id: 4,
        name: "Henry Purcell",
        era: "Baroque",
        born: "10-09-1659",
        died: "21-11-1695",
        nationality: "English",
        pic: purcell,
        songs: [
            {
                id: 0,
                name: "Dido's Lament",
                video: "https://www.youtube.com/watch?v=S9xwlWfHWv4"
            },
            {
                id: 1,
                name: "Rondeau",
                video: "https://www.youtube.com/watch?v=I0mNAlPjmLA"
            }, 
            {
                id: 2,
                name: "The Fairy Queen - Prelude",
                video: "https://www.youtube.com/watch?v=8OIAB4_TOM8"
            }
        ]
    },
    {
        id: 5,
        name: "Georg Philipp Telemann",
        era: "Baroque",
        born: "24-03-1681",
        died: "25-06-1767",
        nationality: "German",
        pic: telemann,
        songs: [
            {
                id: 0,
                name: "Air de Trompette de Capo",
                video: "https://www.youtube.com/watch?v=odGELPE0IBQ"
            },
            {
                id: 1,
                name: "Allegro",
                video: "https://www.youtube.com/watch?v=fGgIqnKEXRA"
            },
            {
                id: 2,
                name: "Largo",
                video: "https://www.youtube.com/watch?v=9OyJXTowOo0"
            }
        ]
    },
    {
        id: 6,
        name: "Arcangelo Corelli",
        era: "Baroque",
        born: "17-02-1653",
        died: "08-01-1713",
        nationality: "Italian",
        pic: corelli,
        songs: [
            {
                id: 0,
                name: "Allegro Adagio",
                video: "https://www.youtube.com/watch?v=E3aANNK2WtY"
            },
            {
                id: 1,
                name: "Grave",
                video: "https://www.youtube.com/watch?v=TgxN2Zxz-KI"
            }
        ]
    },

    // Medieval
    
    {
        id: 7,
        name: "Guido of Arezzo",
        era: "Medieval",
        born: "XX-XX-991",
        died: "XX-XX-1033",
        nationality: "Italian",
        pic: arezzo,
        songs: [
            {
                id: 0,
                name: "Ut Queant Laxis",
                video: "https://www.youtube.com/watch?v=veJNu1fi8p4"
            }
        ]
    },
    {
        id: 8,
        name: "Stephen of Liege",
        era: "Medieval",
        born: "XX-XX-850",
        died: "XX-XX-920",
        nationality: "Belgian",
        pic: liege,
        songs: [
            {
                id: 0,
                name: "O Lux Beta",
                video: "https://www.youtube.com/watch?v=Qe9WFuFTS44"
            }
        ]
    },
    {
        id: 9,
        name: "Hildegard of Bingen",
        era: "Medieval",
        born: "XX-XX-1098",
        died: "17-09-1179",
        nationality: "German",
        pic: bingen,
        songs:
        [
            {
                id: 0,
                name: "Spiritus Sanctus Vivificans",
                video: "https://www.youtube.com/watch?v=u6WLdFV4mQA"
            },
            {
                id: 1,
                name: "O Virtus Sapientiae",
                video: "https://www.youtube.com/watch?v=C9K9PfjRjxM"
            }
        ]
    },
    {
        id: 10,
        name: "Fulbert of Chartres",
        era: "Medieval",
        born: "XX-XX-960",
        died: "10-04-1028",
        nationality: "French",
        pic: chartres,
        songs: [
            {
                id: 0,
                name: "De Luscinia",
                video: "https://www.youtube.com/watch?v=JNK9bxo2Xtg"
            }
        ]
    },
    {
        id: 11,
        name: "Leonin",
        era: "Medieval",
        born: "XX-XX-1135",
        died: "XX-XX-1201",
        nationality: "French",
        pic: leonin,
        songs: [
            {
                id: 0,
                name: "Viderunt Omnes",
                video: "https://www.youtube.com/watch?v=98dkUTvRKkw"
            }
        ]
    },
    {
        id: 12,
        name: "Perotin",
        era: "Medieval",
        born: "XX-XX-1160",
        died: "XX-XX-1230",
        nationality: "French",
        pic: perotin,
        songs: [
            {
                id: 0,
                name: "Beata Viscera",
                video: "https://www.youtube.com/watch?v=lbzw3B6jklU"
            }
        ]
    },
    {
        id: 13,
        name: "Philippe de Vitry",
        era: "Medieval",
        born: "31-10-1291",
        died: "09-06-1361",
        nationality: "French",
        pic: vitry,
        songs: [
            {
                id: 0,
                name: "Colla iugo subdere",
                video: "https://www.youtube.com/watch?v=OKOyl7pBQsw"
            }
        ]
    },

    // Renaissance

    {
        id: 14,
        name: "William Byrd",
        era: "Renaissance",
        born: "XX-XX-1543",
        died: "04-07-1628",
        nationality: "English",
        pic: byrd,
        songs: [
            {
                id: 0,
                name: "Ave Verum Corpus",
                video: "https://www.youtube.com/watch?v=Z2ckGcpx6xI"
            },
            {
                id: 1,
                name: "My Ladye Nevells Booke",
                video: "https://www.youtube.com/watch?v=93BpU4PRhm4"
            }
        ]
    },
    {
        id: 15,
        name: "Josquin des Prez",
        era: "Renaissance",
        born: "XX-XX-1450",
        died: "27-08-1521",
        nationality: "French",
        pic: prez,
        songs: [
            {
                id: 0,
                name: "In Te Domine Speravi",
                video: "https://www.youtube.com/watch?v=1c8rXLbHIkg"
            }
        ]
    },
    {
        id: 16,
        name: "John Dowland",
        era: "Renaissance",
        born: "02-01-1563",
        died: "20-02-1626",
        nationality: "English",
        pic: dowland,
        songs: [
            {
                id: 0,
                name: "The Frog Galliard",
                video: "https://www.youtube.com/watch?v=uyJVXPNIToc"
            },
            {
                id: 1,
                name: "Lady Rich",
                video: "https://www.youtube.com/watch?v=TZIZJ2JW1Gc"
            }
        ]
    },
    {
        id: 17,
        name: "Gabrieli Giovanni",
        era: "Reanissance",
        born: "XX-XX-1567",
        died: "12-08-1612",
        nationality: "Italian",
        pic: giovanni,
        songs: [
            {
                id: 0,
                name: "Sacrae Symphoniae Nos. 9, 13 & 16",
                video: "https://www.youtube.com/watch?v=xhLdiHHUlCs"
            }
        ]
    },
    {
        id: 18,
        name: "Janequin Clement",
        era: "Renaissance",
        born: "XX-XX-1485",
        died: "XX-XX-1558",
        nationality: "French",
        pic: clement,
        songs: [
            {
                id: 0,
                name: "L'Amour, la mort et la vie",
                video: "https://www.youtube.com/watch?v=VY8ZYC2qdd0"
            }
        ]
    },
    {
        id: 19,
        name: "Orlande de Lauss",
        era: "Renaissance",
        born: "XX-XX-1532",
        died: "14-06-1594",
        nationality: "German",
        pic: lauss,
        songs: [
            {
                id: 0,
                name: "Al Dolce Suon",
                video: "https://www.youtube.com/watch?v=1DLnsKcb1G0"
            }
        ]
    },
    {
        id: 20,
        name: "Johannes Ockeghen",
        era: "Renaissance",
        born: "XX-XX-1410",
        died: "06-02-1497",
        nationality: "French",
        pic: ockeghen,
        songs: [
            {
                id: 0,
                name: "Requiem - Kyrie",
                video: "https://www.youtube.com/watch?v=BO4eq9nLfYc"
            },
            {
                id: 1,
                name: "Deo Gratias",
                video: "https://www.youtube.com/watch?v=1bYGmISF3ME"
            }
        ]
    },
    {
        id: 21,
        name: "Giovanni Pierluigi",
        era: "Renaissance",
        born: "XX-XX-1525",
        died: "02-02-1594",
        nationality: "Italian",
        pic: pierluigi,
        songs: [
            {
                id: 0,
                name: "Missa Papae",
                video: "https://www.youtube.com/watch?v=YrjF3w7x-w4"
            }
        ]
    },

    // Classicism

    {
        id: 22,
        name: "Wolfgang Amadeus Mozart",
        era: "Classicism",
        born: "27-01-1756",
        died: "05-12-1791",
        nationality: "Austrian",
        pic: mozart,
        songs: [
            {
                id: 0,
                name: "Requiem",
                video: "https://www.youtube.com/watch?v=Zi8vJ_lMxQI&t=424s"
            },
            {
                id: 1,
                name: "eine kleine natchmusik",
                video: "https://www.youtube.com/watch?v=40ZbV6jmKlg"
            },
            {
                id: 2,
                name: "Sonata",
                video: "https://www.youtube.com/watch?v=qjk-YRuQZDE"
            },
            {
                id: 3,
                name: "The Marriage of Figaro",
                video: "https://www.youtube.com/watch?v=8OZCyp-LcGw"
            }
        ]
    },
    {
        id: 23,
        name: "Joseph Haydn",
        era: "Classicism",
        born: "31-03-1732",
        died: "31-05-1809",
        nationality: "Austrian",
        pic: haydn,
        songs: [
            {
                id: 0,
                name: "Surprise",
                video: "https://www.youtube.com/watch?v=tF5kr251BRs"
            },
            {
                id: 1,
                name: "Allegro from 12 Easy Pieces",
                video: "https://www.youtube.com/watch?v=4ZYa6QrDwvs"
            }
        ]
    },
    {
        id: 24,
        name: "Franz Schubert",
        era: "Classicism",
        born: "31-01-1797",
        died: "19-11-1828",
        nationality: "Austrian",
        pic: schubert,
        songs: [
            {
                id: 0,
                name: "Seranade",
                video: "https://www.youtube.com/watch?v=lv5xPlm6etI"
            },
            {
                id: 1,
                name: "Ave Maria",
                video: "https://www.youtube.com/watch?v=2H5rusicEnc"
            }
        ]
    },
    {
        id: 25,
        name: "Luigi Boccherini",
        era: "Classicism",
        born: "19-02-1793",
        died: "28-05-1805",
        nationality: "Italian",
        pic: boccherini,
        songs: [
            {
                id: 0,
                name: "Minuetto",
                video: "https://www.youtube.com/watch?v=kSE15tLBdso"
            },
            {
                id: 1,
                name: "Cello Concerto - Adagio",
                video: "https://www.youtube.com/watch?v=jNGtdWlM53A"
            }
        ]
    },
    {
        id: 26,
        name: "Joseph Bologne",
        era: "Classicism",
        born: "25-12-1745",
        died: "10-06-1799",
        nationality: "French",
        pic: bologne,
        songs: [
            {
                id: 0,
                name: "Symphony No. 2",
                video: "https://www.youtube.com/watch?v=jxoL3BlHfBs"
            }
        ]
    },
    {
        id: 27,
        name: "Christoph Willibald Gluck",
        era: "Classicism",
        born: "02-07-1714",
        died: "15-11-1787",
        nationality: "Austrian",
        pic: gluck,
        songs: [
            {
                id: 0,
                name: "Dance of the Blessed Spirits",
                video: "https://www.youtube.com/watch?v=tfDJLjrLND8"
            },
            {
                id: 1,
                name: "Symphony",
                video: "https://www.youtube.com/watch?v=HhGY5AuhItU"
            }
        ]
    },
    {
        id: 28,
        name: "Antonio Salieri",
        era: "Classicism",
        born: "18-08-1750",
        died: "07-05-1825",
        nationality: "Austrian",
        pic: salieri,
        songs: [
            {
                id: 0,
                name: "Symphony - La Veneziana",
                video: "https://www.youtube.com/watch?v=otVyyaLjvLE"
            },
            {
                id: 1,
                name: "De Profundis",
                video: "https://www.youtube.com/watch?v=ZWZDLnCJW_g"
            }
        ]
    },

    // Romanticism

    {
        id: 29,
        name: "Frederic Chopin",
        era: "Romanticism",
        born: "XX-XX-1810",
        died: "17-10-1849",
        nationality: "Polish",
        pic: chopin,
        songs: [
            {
                id: 0,
                name: "Nocturne",
                video: "https://www.youtube.com/watch?v=9E6b3swbnWg"
            },
            {
                id: 1,
                name: "Waltz",
                video: "https://www.youtube.com/watch?v=SUT_0c2QVzo"
            },
            {
                id: 2,
                name: "Fantasie-Impromptu",
                video: "https://www.youtube.com/watch?v=Gus4dnQuiGk"
            },
            {
                id: 3,
                name: "Etude - Tristesse",
                video: "https://www.youtube.com/watch?v=bzBH9Nm1BP8"
            }
        ]
    },
    {
        id: 30,
        name: "Richard Wagner",
        era: "Romanticism",
        born: "22-05-1813",
        died: "13-02-1883",
        nationality: "German",
        pic: wagner,
        songs: [
            {
                id: 0,
                name: "Ride of the Valkyries",
                video: "https://www.youtube.com/watch?v=GGU1P6lBW6Q&t=52s"
            },
            {
                id: 1,
                name: "Albumblatt",
                video: "https://www.youtube.com/watch?v=dpOtzK1fL2M"
            }
        ]
    },
    {
        id: 31,
        name: "Franz Linszt",
        era: "Romanticism",
        born: "22-10-1811",
        died: "31-07-1886",
        nationality: "Hungarian",
        pic: linszt,
        songs: [
            {
                id: 0,
                name: "Consolation",
                video: "https://www.youtube.com/watch?v=CS58YQaVIaA"
            },
            {
                id: 1,
                name: "liebestraum",
                video: "https://www.youtube.com/watch?v=MBOa-2b4uQQ"
            }
        ]
    },
    {
        id: 32,
        name: "Pyotr Ilyich Tchaikovsky",
        era: "Romanticism",
        born: "07-05-1840",
        died: "06-11-1893",
        nationality: "Russian",
        pic: tchaikovsky,
        songs: [
            {
                id: 0,
                name: "Waltz of the Flowers",
                video: "https://www.youtube.com/watch?v=QxHkLdQy5f0"
            },
            {
                id: 1,
                name: "Mamma",
                video: "https://www.youtube.com/watch?v=Dhx9oEa57jo"
            },
            {
                id: 2,
                name: "Swan Lake",
                video: "https://www.youtube.com/watch?v=9cNQFB0TDfY"
            },
            {
                id: 3,
                name: "Overture",
                video: "https://www.youtube.com/watch?v=u2W1Wi2U9sQ"
            },
            {
                id: 4,
                name: "Piano Concerto no. 1",
                video: "https://www.youtube.com/watch?v=82l3q15YfYQ"
            }
        ]
    },
    {
        id: 33,
        name: "Johannes Brahms",
        era: "Romanticism",
        born: "07-05-1833",
        died: "03-04-1897",
        nationality: "Austrian",
        pic: brahms,
        songs: [
            {
                id: 0,
                name: "Wiegenlied",
                video: "https://www.youtube.com/watch?v=EBIKYRXGz2k"
            },
            {
                id: 1,
                name: "Hungarian Dance",
                video: "https://www.youtube.com/watch?v=3X9LvC9WkkQ"
            }
        ]
    },
    {
        id: 34,
        name: "Ludwig van Beethoven",
        era: "Romanticism",
        born: "XX-12-1770",
        died: "26-03-1827",
        nationality: "German",
        pic: beethoven,
        songs: [
            {
                id: 0,
                name: "Symphony no. 5",
                video: "https://www.youtube.com/watch?v=8QorZ9fcg3o"
            },
            {
                id: 1,
                name: "Symphony no. 6",
                video: "https://www.youtube.com/watch?v=iMJPZ-mu-Ts"
            },
            {
                id: 2,
                name: "Fur Elise",
                video: "https://www.youtube.com/watch?v=wfF0zHeU3Zs"
            },
            {
                id: 3,
                name: "Ode to Joy",
                video: "https://www.youtube.com/watch?v=-kcOpyM9cBg"
            }
        ]
    },
    {
        id: 35,
        name: "Antonio Carlos Gomes",
        era: "Romanticism",
        born: "11-07-1836",
        died: "16-09-1896",
        nationality: "Brazilian",
        pic: gomes,
        songs: [
            {
                id: 0,
                name: " O Guarani",
                video: "https://www.youtube.com/watch?v=PTomUb3r1m0"
            },
            {
                id: 1,
                name: "Alvorada",
                video: "https://www.youtube.com/watch?v=t-fEVbqe5hA"
            }
        ]
    },
    {
        id: 36,
        name: "Robert Schumann",
        era: "Romanticism",
        born: "08-07-1810",
        died: "29-07-1856",
        nationality: "German",
        pic: schumann,
        songs: [
            {
                id: 0,
                name: "Traumerei",
                video: "https://www.youtube.com/watch?v=reOv-IBQi4I"
            }
        ]
    },
    {
        id: 37,
        name: "Giuseppe Verdi",
        era: "Romanticism",
        born: "10-10-1813",
        died: "27-01-1901",
        nationality: "Italian",
        pic: verdi,
        songs: [
            {
                id: 0,
                name: "Grand March",
                video: "https://www.youtube.com/watch?v=TX0qN6QEvGg"
            },
            {
                id: 1,
                name: "Requiem",
                video: "https://www.youtube.com/watch?v=_jBLyIQvNf0"
            }
        ]
    },

    // Modernism

    {
        id: 38,
        name: "Claude Debussy",
        era: "Modernism",
        born: "22-08-1862",
        died: "25-03-1918",
        nationality: "French",
        pic: debussy,
        songs: [
            {
                id: 0,
                name: "Clair de Lune",
                video: "https://www.youtube.com/watch?v=WNcsUNKlAKw"
            },
            {
                id: 1,
                name: "Reverie",
                video: "https://www.youtube.com/watch?v=_CUC2-S1NMI"
            },
            {
                id: 2,
                name: "Arabesque No. 1",
                video: "https://www.youtube.com/watch?v=cVYH-7QGE-A"
            },
            {
                id: 3,
                name: "Golliwog's Cakewalk",
                video: "https://www.youtube.com/watch?v=WwWf-eNxw1w"
            }
        ]
    },
    {
        id: 39,
        name: "Maurice Ravel",
        era: "Modernism",
        born: "07-03-1875",
        died: "28-12-1937",
        nationality: "French",
        pic: ravel,
        songs: [
            {
                id: 0,
                name: "Bolero",
                video: "https://www.youtube.com/watch?v=r30D3SW4OVw"
            },
            {
                id: 1,
                name: "La Valse",
                video: "https://www.youtube.com/watch?v=TMSgWhIENSk"
            },
            {
                id: 2,
                name: "Sonatine for Piano",
                video: "https://www.youtube.com/watch?v=Rd9-fRyCYf8"
            }
        ]
    },
    {
        id: 40,
        name: "Jean Sibelius",
        era: "Modernism",
        born: "08-12-1865",
        died: "20-12-1957",
        nationality: "Finnish",
        pic: sibelius,
        songs: [
            {
                id: 0,
                name: "Finland Awakens",
                video: "https://www.youtube.com/watch?v=F5zg_af9b8c"
            },
            {
                id: 1,
                name: "Karelia Suite",
                video: "https://www.youtube.com/watch?v=adKwG9ZuzFw"
            },
            {
                id: 2,
                name: "The Tempest",
                video: "https://www.youtube.com/watch?v=YGR8FXvyUQY"
            }
        ]
    },
    {
        id: 41,
        name: "Lili Boulanger",
        era: "Modernism",
        born: "21-08-1893",
        died: "15-03-1918",
        nationality: "French",
        pic: boulanger,
        songs: [
            {
                id: 0,
                name: "Pie Jesu",
                video: "https://www.youtube.com/watch?v=pO90hIjo0xE"
            },
            {
                id: 1,
                name: "Faust et Helene",
                video: "https://www.youtube.com/watch?v=Gxtrc3jfd8E"
            },
            {
                id: 2,
                name: "D'un Soir Triste",
                video: "https://www.youtube.com/watch?v=1OERJAjoHRY"
            },
            {
                id: 3,
                name: "Veille Priere Bouddhique",
                video: "https://www.youtube.com/watch?v=xF9SltYJAT8"
            }
        ]
    },
    {
        id: 42,
        name: "Manuel de Falla",
        era: "Modernism",
        born: "23-11-1876",
        died: "14-11-1946",
        nationality: "Spanish",
        pic: falla,
        songs: [
            {
                id: 0,
                name: "El Amor Brujo",
                video: "https://www.youtube.com/watch?v=V3XfmRZAQ-o"
            },
            {
                id: 1,
                name: "La Vida Breve",
                video: "https://www.youtube.com/watch?v=Os_dTG5q4sU"
            },
            {
                id: 2,
                name: "Nocturno",
                video: "https://www.youtube.com/watch?v=_X63lH1Dlik"
            }
        ]
    },
    {
        id: 43,
        name: "Sergei Rachnaninoff",
        era: "Modernism",
        born: "01-04-1873",
        died: "28-03-1943",
        nationality: "Russian",
        pic: rachmaninoff,
        songs: [
            {
                id: 0,
                name: "Piano Concerto No. 2",
                video: "https://www.youtube.com/watch?v=yJpJ8REjvqo"
            },
            {
                id: 1,
                name: "Piano Concerto No. 3",
                video: "https://www.youtube.com/watch?v=UKziGGumuEk"
            }
        ]
    },
    {
        id: 44,
        name: "Igor Stravinsky",
        era: "Modernism",
        born: "17-06-1882",
        died: "06-04-1971",
        nationality: "Russian",
        pic: stravinsky,
        songs: [
            {
                id: 0,
                name: "The Rite of Spring",
                video: "https://www.youtube.com/watch?v=rP42C-4zL3w"
            },
            {
                id: 1,
                name: "The Firebird",
                video: "https://www.youtube.com/watch?v=IrMGqAmjbug"
            }
        ]
    },
    {
        id: 45,
        name: "Dimitri Schostakovich",
        era: "Modernism",
        born: "25-09-1906",
        died: "09-08-1975",
        nationality: "Russian",
        pic: schostakovich,
        songs: [
            {
                id: 0,
                name: "Waltz No. 2",
                video: "https://www.youtube.com/watch?v=phBThlPTBEg"
            },
            {
                id: 1,
                name: "Leniingard's Symphony",
                video: "https://www.youtube.com/watch?v=HON-9Z1Greo"
            },
            {
                id: 2,
                name: "Symphony No. 4 - Kirill Kondrashin",
                video: "https://www.youtube.com/watch?v=uEqQgPcsS-Q"
            }
        ]
    }
]
export default data;