import React from "react";
import {Adinkra} from "react-adinkra";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Section from "./components/Section";

let articleData = [
  {
    author: "Kobina Otchere",
    titleOfArti: "Urban culture.",
    date: "04/04/2014",
    content: "Master cleanse jean shorts vaporware, banh mi franzen next level green juice typewriter succulents fam tote bag pour-over microdosing ethical cardigan. Asymmetrical meh succulents fanny pack. Mlkshk listicle franzen blue bottle butcher. Kombucha chambray hammock paleo readymade hexagon shabby chic shaman poke bitters next level. Poke small batch health goth mlkshk kickstarter. Vape yr cred chambray. Cronut gentrify readymade chicharrones VHS bitters snackwave kickstarter slow-carb af four loko lyft hexagon poke sartorial. Brunch coloring book street art, polaroid cred humblebrag ugh vaporware occupy. Lomo coloring book literally lumbersexual keffiyeh. Af normcore pickled schlitz food truck hammock yr tilde everyday carry readymade church-key meh. Unicorn chambray knausgaard butcher kogi. Chambray fashion axe farm-to-table artisan.",
    image: "https://www.urban-culture.fr/images/portfolios/l-europe-du-hip-hop-troisieme-/europe-du-hip-hop-6.jpg"
  }, {
    author: "Esi Otchere",
    titleOfArti: "Rural culture.",
    date: "04/04/2014",
    content: "Master cleanse jean shorts vaporware, banh mi franzen next level green juice typewriter succulents fam tote bag pour-over microdosing ethical cardigan. Asymmetrical meh succulents fanny pack. Mlkshk listicle franzen blue bottle butcher. Kombucha chambray hammock paleo readymade hexagon shabby chic shaman poke bitters next level. Poke small batch health goth mlkshk kickstarter. Vape yr cred chambray. Cronut gentrify readymade chicharrones VHS bitters snackwave kickstarter slow-carb af four loko lyft hexagon poke sartorial. Brunch coloring book street art, polaroid cred humblebrag ugh vaporware occupy. Lomo coloring book literally lumbersexual keffiyeh. Af normcore pickled schlitz food truck hammock yr tilde everyday carry readymade church-key meh. Unicorn chambray knausgaard butcher kogi. Chambray fashion axe farm-to-table artisan.",
    image: "https://c.pxhere.com/photos/b5/0c/grandparents_grandmother_people_happy_family_senior_outdoors_portrait-1283525.jpg!d"
  }, {
    author: "Banyan Otchere",
    titleOfArti: "Teen culture.",
    date: "04/04/2014",
    content: "Master cleanse jean shorts vaporware, banh mi franzen next level green juice typewriter succulents fam tote bag pour-over microdosing ethical cardigan. Asymmetrical meh succulents fanny pack. Mlkshk listicle franzen blue bottle butcher. Kombucha chambray hammock paleo readymade hexagon shabby chic shaman poke bitters next level. Poke small batch health goth mlkshk kickstarter. Vape yr cred chambray. Cronut gentrify readymade chicharrones VHS bitters snackwave kickstarter slow-carb af four loko lyft hexagon poke sartorial. Brunch coloring book street art, polaroid cred humblebrag ugh vaporware occupy. Lomo coloring book literally lumbersexual keffiyeh. Af normcore pickled schlitz food truck hammock yr tilde everyday carry readymade church-key meh. Unicorn chambray knausgaard butcher kogi. Chambray fashion axe farm-to-table artisan.",
    image: "https://peuplesivoiriens.files.wordpress.com/2014/04/dessin-et-feutre-histoires-de-voir-reprc3a9sentation-du-continent.jpg"
  }, {
    author: "Aba Otchere",
    titleOfArti: "Baby culture.",
    date: "04/04/2014",
    content: "Master cleanse jean shorts vaporware, banh mi franzen next level green juice typewriter succulents fam tote bag pour-over microdosing ethical cardigan. Asymmetrical meh succulents fanny pack. Mlkshk listicle franzen blue bottle butcher. Kombucha chambray hammock paleo readymade hexagon shabby chic shaman poke bitters next level. Poke small batch health goth mlkshk kickstarter. Vape yr cred chambray. Cronut gentrify readymade chicharrones VHS bitters snackwave kickstarter slow-carb af four loko lyft hexagon poke sartorial. Brunch coloring book street art, polaroid cred humblebrag ugh vaporware occupy. Lomo coloring book literally lumbersexual keffiyeh. Af normcore pickled schlitz food truck hammock yr tilde everyday carry readymade church-key meh. Unicorn chambray knausgaard butcher kogi. Chambray fashion axe farm-to-table artisan.",
    image: "http://france.fr/sites/default/files/marche_cirt_studio_lumiere_31mai2016_2000.jpg"
  }
]

let navLinks = [
  {
    name: "Home",
    local: "http://www.google.com"
  }, {
    name: "Aboout",
    local: "http://www.yahoo.com"
  }, {
    name: "Articles",
    local: "http://www.redit.com"
  }
];

let socialLinks = [
  {
    iconName: "facebook",
    url: "http://facebook.com/"
  },
  {
    iconName: "linkedin",
    url: "http://www.linkedin.com"
  },
  {
    iconName: "reddit",
    url:"http://reddit.com"
  }
]

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar links={navLinks} search="Search"/>
        <Header title="L'Afrique " titleCont=" En Europe" caption="Comme C'est belle 'la vie'"/>

        <Section data={articleData}/> {/* <Section titleOfArti="Content Avec La Vie" image="https://c.pxhere.com/photos/b5/0c/grandparents_grandmother_people_happy_family_senior_outdoors_portrait-1283525.jpg!d" author="By Jean Batist" date="20/6/16" content="Synth letterpress ennui, vaporware lumbersexual stumptown tumeric cred mustache etsy. Af master cleanse ethical, banjo gochujang williamsburg migas. Poutine ennui twee post-ironic lomo crucifix pitchfork pok pok flannel. Succulents freegan bicycle rights, tumblr pinterest sriracha hashtag before they sold out 90's copper mug beard lo-fi master cleanse. Paleo keffiyeh taxidermy put a bird on it cold-pressed humblebrag. Keffiyeh fashion axe tousled tofu. Trust fund fixie shoreditch bespoke next level humblebrag tofu wayfarers cred pour-over viral man braid unicorn. Neutra pinterest knausgaard, tumblr banjo cardigan synth twee art party irony. Cardigan coloring book gochujang brooklyn slow-carb hoodie vexillologist mixtape. Vape pabst poutine put a bird on it raclette vexillologist. Subway tile umami meh bicycle rights, godard brooklyn retro raclette drinking vinegar 90's selvage venmo. Bushwick taiyaki food truck adaptogen kombucha tacos swag. Coloring book viral hot chicken master cleanse. VHS offal yr gochujang pickled health goth you probably haven't heard of them raw denim helvetica YOLO pug slow-carb. Offal post-ironic unicorn, blue bottle chambray semiotics street art synth mlkshk iPhone copper mug echo park."/>

        <Section titleOfArti="L'Art De Chez Nous" image="" author="By Piere Mambo" date="17/10/2016" content="Direct trade four loko artisan schlitz banh mi, bespoke fixie hexagon health goth art party retro live-edge humblebrag wolf. Vinyl authentic shabby chic, before they sold out wayfarers kinfolk cold-pressed. Godard master cleanse leggings vape direct trade post-ironic. Tote bag dreamcatcher offal thundercats selvage franzen coloring book celiac art party meggings kale chips man braid. Craft beer chia pour-over lomo slow-carb. Celiac plaid tumeric drinking vinegar fashion axe fam, polaroid snackwave fixie whatever hexagon venmo la croix. Banjo poutine taxidermy small batch, asymmetrical kogi ramps bushwick cray fam brooklyn. Meditation VHS knausgaard viral. Coloring book bicycle rights cornhole farm-to-table master cleanse, cardigan tbh gentrify narwhal retro etsy."/>

        <Section titleOfArti="La Depenese aux Clope" image="http://www.vapyou.com/wp-content/uploads/2015/11/vapoteurs-reprenez-la-clope-1080x675.jpg" author="By Apauline Du Bois" date="05/01/2017" content="La croix pitchfork sartorial paleo keffiyeh. Air plant readymade glossier, pug fingerstache letterpress quinoa vice waistcoat keytar man braid selfies food truck disrupt. Pour-over palo santo health goth lyft meh, trust fund slow-carb heirloom yr iceland lumbersexual single-origin coffee. Heirloom aesthetic synth quinoa taxidermy photo booth. Hashtag microdosing live-edge jianbing leggings cliche iceland portland scenester. Bespoke ethical locavore unicorn church-key literally chartreuse humblebrag. Photo booth squid disrupt shaman post-ironic godard shabby chic fixie wolf aesthetic raclette cardigan single-origin coffee. Mumblecore succulents retro af. Shaman beard air plant cliche literally, mumblecore plaid scenester four dollar toast. Sustainable echo park mustache post-ironic shaman meh helvetica retro wolf tumblr prism bespoke gluten-free farm-to-table lomo."/>

        <Section titleOfArti="Commement Va Le Grand Noir?" image="https://pbs.twimg.com/media/B1HzcUjIYAA5FZq.png" author="By Michelle Lemumba" date="12/05/17" content="Keffiyeh lumbersexual helvetica before they sold out taiyaki listicle live-edge, bespoke humblebrag. Jianbing chambray brooklyn, affogato meditation mixtape knausgaard trust fund dreamcatcher YOLO subway tile. Truffaut la croix trust fund, intelligentsia waistcoat food truck celiac migas pug. Tattooed offal raclette iPhone kombucha. Hell of ennui before they sold out, tumeric taiyaki church-key vegan. Health goth jean shorts cardigan YOLO bushwick pug fashion axe helvetica pop-up taxidermy church-key viral hell of meggings. Taxidermy DIY mumblecore brooklyn beard selfies meggings polaroid banjo pork belly fam. IPhone freegan blog paleo craft beer kombucha banjo copper mug gastropub knausgaard thundercats +1. Truffaut you probably haven't heard of them godard man braid man bun wolf."/>

        <Section titleOfArti="Tours De Lile" image="" author="By Jerome La Ghat" date="01/02/2015" content="Messenger bag forage listicle live-edge. Etsy fingerstache salvia, tbh leggings stumptown knausgaard 3 wolf moon bicycle rights twee selfies semiotics quinoa activated charcoal pitchfork. Photo booth next level iceland synth. Thundercats DIY biodiesel, PBR&B tattooed selvage poke ethical synth asymmetrical four loko marfa. Pinterest fam blue bottle polaroid. Food truck thundercats dreamcatcher art party kale chips. Master cleanse chambray skateboard fam, cray sustainable gastropub. Humblebrag cold-pressed meh plaid chillwave cloud bread, leggings poutine pork belly. Hell of unicorn YOLO whatever synth chillwave seitan chicharrones hammock vexillologist jean shorts. Unicorn paleo migas synth schlitz viral taiyaki activated charcoal bushwick selvage locavore tbh fashion axe. Everyday carry fixie photo booth PBR&B godard. Meggings chartreuse butcher jianbing, VHS chillwave literally la croix 8-bit DIY twee. Four loko pok pok echo park bitters cloud bread, pour-over taiyaki knausgaard. Yuccie narwhal cliche cray ugh, pork belly meh copper mug cloud bread."/>

        <Section titleOfArti="La Fete de Fete" image="http://www.jeuneafrique.com/medias/2013/01/04/photo_1357309607694-1-0-512x296.jpg" author="By Marco Polo" date="06/03/2014" content="Master cleanse jean shorts vaporware, banh mi franzen next level green juice typewriter succulents fam tote bag pour-over microdosing ethical cardigan. Asymmetrical meh succulents fanny pack. Mlkshk listicle franzen blue bottle butcher. Kombucha chambray hammock paleo readymade hexagon shabby chic shaman poke bitters next level. Poke small batch health goth mlkshk kickstarter. Vape yr cred chambray. Cronut gentrify readymade chicharrones VHS bitters snackwave kickstarter slow-carb af four loko lyft hexagon poke sartorial. Brunch coloring book street art, polaroid cred humblebrag ugh vaporware occupy. Lomo coloring book literally lumbersexual keffiyeh. Af normcore pickled schlitz food truck hammock yr tilde everyday carry readymade church-key meh. Unicorn chambray knausgaard butcher kogi. Chambray fashion axe farm-to-table artisan."/> */}

        <Footer social={socialLinks} brandname="Eleaf" copyRight="copyRight 2017"/>
      </div>
    );
  }
}

export default App;
