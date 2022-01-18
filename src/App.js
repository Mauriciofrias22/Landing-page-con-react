import "./App.css";
import San_Felipe from "./assets/San_Felipe.jpg";
import Las_Bovedas from "./assets/Las_Bovedas.jpg";
import La_Popa from "./assets/La_Popa.jpg"
import Playa_Blanca_Baru from "./assets/Playa_Blanca_Baru.jpg";
import Plaza_de_los_Coches from "./assets/Plaza_de_los_Coches.jpg";
import Torre_del_Reloj from "./assets/Torre_del_Reloj.jpg";
import Plaza_San_Pedro_Claver from "./assets/Plaza_San_Pedro_Claver.jpg";
import Teatro_Heredia from "./assets/Teatro_Heredia.jpg";
import Cafe_del_mar from "./assets/Cafe_del_mar.jpg"
import Atardecer from "./assets/Atardecer.jpg";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Slider from "./components/Slider";

function App() {
  const navbarLinks = [
    { url: "http://www.lurecartagena.com/restaurantes-bares/", title: "Best Restaurants & Bars" },
    { url: "https://donde.co/es/", title: "What to do" },
    { url: "https://www.tripadvisor.co/Hotels-g297476-Cartagena_Cartagena_District_Bolivar_Department-Hotels.html", title: "Best Hotels" },
    { url: "https://www.aviarionacional.co/", title: "The Aviary" },
  ];

  return (
    <div className="App">
      <Navbar navbarLinks={navbarLinks} />
      <Hero imageSrc={La_Popa} />
      <Slider 
      imageSrc={San_Felipe} 
      title={"San Felipe de Barajas Castle"} 
      subtitle={
      "San Felipe de Barajas Castle is a fortification located on a hill called San Lázaro and was built in 1657 during the Spanish colonial era. It suffered constant attacks by the English and French, being the French commander Baron de Pointis who took the castle in mid-1697."
      }
    />
      <Slider 
      imageSrc={Las_Bovedas} 
      title={"Las Bovedas Market"} 
      subtitle={
      "Las Bovedas are a military building that is located in the San Diego sector, in the Historic Center of Cartagena de Indias. Its construction concluded in 1798 and it is considered the last colonial work in the city. It is built between the bastions of Santa Catalina and Santa Clara. Its structure consists of 47 arches and 23 vaults, built as a set that is proof against explosive attacks, in order to house the Spanish royal troops, store ammunition and defend the wall. It is currently a handicraft market where tourists can find and buy various pieces of traditional craftsmanship."
      }
    flipped={true}
    />
      <Slider 
      imageSrc={Playa_Blanca_Baru} 
      title={"Playa Blanca Baru"} 
      subtitle={
      "The Barú Peninsula (sometimes called Barú Island or simply Barú), is a coastal area located to the south and 45 minutes by boat from Cartagena, famous for its white beaches and turquoise water. It is separated from the territory by the Canal del Dique. Until 2014, the only way to cross it was by raft, or its variants. It was in that year when the so-called 'Puente de Barú' was inaugurated. Today it is a place of great tourist boom. Most of the beaches are private, owned by individuals or tourist enterprises, except for Playa Blanca, which is the only public beach."
      }
    />
      <Slider 
      imageSrc={Plaza_de_los_Coches} 
      title={"Plaza de los Coches"} 
      subtitle={
      "The Plaza de los Coches is another emblematic square in the Historic Center of Cartagena de Indias, surrounded by two tourist attractions that make visitors fall in love. The first is the Clock Tower, a 30-meter-high monument that steals the attention of everyone who approaches the square; and the second is the Portal de los Dulces, a place that offers wonders of Cartagena gastronomy, where you can find coconut cakes, milk dolls, tamarind balls, among others."
      }
    flipped={true}
    />
    <Slider 
      imageSrc={Torre_del_Reloj} 
      title={"The Clock Tower"} 
      subtitle={
      "The Clock Tower is an emblematic construction of 30 meters high that rises between the squares of Los Coches and La Paz. This beautiful monument, considered one of the five most beautiful public clocks in the world, keeps in itself the history of a city that was once protected by its gates. Built on a stretch of wall, the Cartagena Clock Tower is one of the obligatory steps to get to know the Historic Center of the city. Its first foundations were laid in 1601, when it was called La Puerta del Puente, due to the wooden viaduct that connected the island of Getsemaní with the Center, then known as Calamarí. This is how it became the main gate of the city since 1631, when the walled fence was completed."
      }
    />
    <Slider 
      imageSrc={Plaza_San_Pedro_Claver} 
      title={"Plaza San Pedro Claver"} 
      subtitle={
      "The name of this square is the same as the one of the church located in it, this place being the scene where the Spanish saint Pedro Claver fulfilled his evangelizing work with the slaves brought from Africa. In the past it was known as Plaza San Juan de Dios and then Plaza de San Ignacio, always adopting the name that the church had. In this square you can find a museum, restaurants and jewelry stores; In addition, visitors can admire the statue made by Enrique Grau in honor of San Pedro Claver and the pieces made from scrap metal by Edgardo Carmona."
      }
    flipped={true}
    />
    <Slider 
      imageSrc={Teatro_Heredia} 
      title={"Teatro Adolfo Mejia"} 
      subtitle={
      "With its 18th- and 19th-century European opera house style, the Heredia Theater, officially known as the Adolfo Mejía Theater, was built in the shape of a horseshoe, with boxes and balconies divided by lace-like cedar latticework. It was built on the old church of La Merced and was inaugurated in 1911 with the floral games. Inside there are stairs and sculptures made of Italian marble. The Adolfo Mejía Theater, located inside the Walled City and with a capacity of 643 people, is considered one of the most iconic places in Cartagena, not only for its history and architecture, but also for its importance in cultural development and inclusion. from the city."
      }
    />
    <Slider 
      imageSrc={Cafe_del_mar} 
      title={"Cafe del Mar "} 
      subtitle={
      "Located in the walled sector of Cartagena, Café del Mar is the only restaurant in La Heroica (another name for Cartagena) that never rests, it opens the 365 days of the year. Famous for its ambient, lounge, chill out, house and electronic music. This establishment is located in the Baluarte of Santo Domingo, where the construction of the 14 kilometers of Cartagena's walls began, and lasted 150 years. Thanks to its location, it has an spectacular view of the city and the sea, creating a very pleasant atmosphere in the best style of bars in Ibiza Spain, where there is another bar with the same name that is also a must when visiting the Spanish city. The place was founded on March 14, 2002 by Peter Hklir, a German citizen who is today in partnership with Carlos Sánchez, general manager, and since then it has operated 365 days a year, from 4:00 p.m. until 2:00 a.m. as a bar and as a restaurant."
      }
    flipped={true}
    />
    <Slider 
      imageSrc={Atardecer} 
      title={"Magical Sunsets"} 
      subtitle={
      "Bordering the Caribbean Sea, the city of Cartagena enjoys some of the most impressive sunsets. Every day, as the sun begins to set over the horizon, the sky changes into a myriad of spectacular colors and the entire bay turns harlequin with its reflection. Watching the sun set on the horizon is a must in Cartagena. The panoramas of the orange sky are so beautiful that it is not uncommon to see large crowds gathering to start watching the impressive spectacle."
      }
    />
    </div>
  );
}

export default App;
