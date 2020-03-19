import axios from "axios";

export default class ClothesServices {
  constructor() {
    this.service = axios.create({
      baseURL: `${process.env.REACT_APP_API_URL}`
    });
  }

  getAllClothes = () =>
    this.service.get("/closet").then(response => {
      return response.data;
    });
  getClothe = id =>
    this.service.get(`/closet/${id}`).then(response => response.data);

  addClothes = clothes =>
    this.service.post("/newclothes", clothes).then(response => response.data);

  //aqui tu le pasas el id de la ropa que quieres borrar
  deleteClothes = id =>
    this.service.delete(`/delete-clothes/${id}`).then(response => {
      return response.data;
    });

  searchClothes = () =>
    this.service.get("/search").then(response => response.data);
}
// y como le paso el id jajaja eso no lo hace solo al hacer el get all clothes?
// //para hacer la petición a axios,
// // luego llamamos a este componente desde donde queremos los datos y hacemos un constructor con un state.
// //(aqui pedimos los datos de las Clothes)
// this.ClothesService = new ClothesService();
// let Clothes = [] //para que no de error a la hora de renderizar por temas de sincronía.

// this.clothes
// //VA CON EL THIS PORQUE ES UNA CLASE

// //en el app (componente link to hacia el id)

// //tema de filtrado con el json  this.state.clothes.filter(clothes => clothes.categorty o nombre o id === valor) y para qued
