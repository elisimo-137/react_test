import { Counter } from "./Counter";
import { Zival } from "./Zival";
import "./style/zival.css";

const animals = [
  {
    name: "Žirafa",
    desc: "Žiráfa je visok afriški sesalec. Natančneje, gre za sodoprstega kopitarja. Je najvišja živa kopenska žival in največji prežvekovalec na Zemlji. Tradicionalno je veljalo, da so žirafe ena vrsta, Giraffa camelopardalis, z devetimi podvrstami.",
    url: "https://sl.wikipedia.org/wiki/%C5%BDirafa",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/800px-Giraffe_standing.jpg",
  },
  {
    name: "Slon",
    desc: "Sloni so večja skupina sesalcev, ki tvorijo družina živali Elephantidae v redu trobčarjev. Danes so poznane tri živeče vrste, ki jim grozi izumrtje: afriški gozdni slon, afriški savanski slon in azijski slon. Sloni živijo v podsaharski Afriki, Južni Aziji in Jugovzhodni Aziji.",
    url: "https://sl.wikipedia.org/wiki/Slon",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Giraffe_standing.jpg/800px-Giraffe_standing.jpg",
  },
  {
    name: "Delfin",
    desc: "Delfini so vodni sesalci družine Delphinidae in so najbolj razširjena družina kitov. Poznamo 32 vrst delfinov. Najdemo jih v vseh oceanih in morjih, običajno pa živijo v plitvih vodah oziroma se zadržujejo blizu gladine. Hranijo se predvsem z ribami in lignji.",
    url: "https://sl.wikipedia.org/wiki/Delfini",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/Tursiops_truncatus_01.jpg/1024px-Tursiops_truncatus_01.jpg",
  },
];

export default function App() {
  return (
    <>
      <h4>Živalsko kraljestvo</h4>
      <p>Tukaj so predstavljene različne živalice</p>
      <Counter></Counter>
      <div className="grid grid-cols-3 gap-5 ">
        {animals.map((animal) => {
          return <Zival data={animal}></Zival>;
        })}
      </div>
    </>
  );
}
