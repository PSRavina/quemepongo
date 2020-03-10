import axios from "axios";

export default class ClothesServices {
  constructor() {
    this.service = axios.create({
      baseURL: "http://localhost:3001/api"
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
    
  deleteExistingClothe(id) {
      axios.delete(`/delete-clothes/${id}`).then(response => response.data);
    }
}


// //para hacer la petición a axios,
// // luego llamamos a este componente desde donde queremos los datos y hacemos un constructor con un state.
// //(aqui pedimos los datos de las Clothes)
// this.ClothesService = new ClothesService();
// let Clothes = [] //para que no de error a la hora de renderizar por temas de sincronía.

// this.clothes
// //VA CON EL THIS PORQUE ES UNA CLASE

// //en el app (componente link to hacia el id)

// //tema de filtrado con el json  this.state.clothes.filter(clothes => clothes.categorty o nombre o id === valor) y para qued
