import img from "@/app/img/drinks.jpg";
import bebidas from "@/app/img/bebidas.png";
import sabritas from "@/app/img/sabritas.png";
import abarrotes from "@/app/img/abarrotes.png";
import lacteos from "@/app/img/lacteos.png";
import pan from "@/app/img/pan.png";
const categories = [
  {
    id: 1,
    name: "Bebidas",
    img: bebidas.src,
  },
  { id: 2, name: "Botanas", img: sabritas.src },
  { id: 3, name: "Abarrotes", img: abarrotes.src },
  { id: 4, name: "Lácteos", img: lacteos.src },
  { id: 5, name: "Panadería", img: pan.src },
  { id: 6, name: "Enlatados", img: "../app/img/drinks.jpg" },
  { id: 7, name: "Limpieza", img: "../app/img/drinks.jpg" },
  { id: 8, name: "Higiene Personal", img: "../app/img/drinks.jpg" },
  { id: 9, name: "Dulces", img: "../app/img/drinks.jpg" },
  { id: 10, name: "Otros", img: "../app/img/drinks.jpg" },
];

export default categories;
