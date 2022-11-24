const inputRooms = document.querySelector("#inputRooms")
const inputMtsMin = document.querySelector("#inputMtsMin")
const inputMtsMax = document.querySelector("#inputMtsMax")
const propiedades = document.querySelector(".propiedades")
const btn = document.querySelector(".btn")
const spanTotal = document.querySelector("#spanTotal")
const formulario = document.querySelector("#formulario")

const propiedadesJSON = [
    {
      name: "Casa de campo",
      description: "Un lugar ideal para descansar de la ciudad",
      src:
        "https://www.construyehogar.com/wp-content/uploads/2020/02/Dise%C3%B1o-casa-en-ladera.jpg",
      rooms: 2,
      m: 170
    },
    {
      name: "Casa de playa",
      description: "Despierta tus días oyendo el oceano",
      src:
        "https://media.chvnoticias.cl/2018/12/casas-en-la-playa-en-yucatan-2712.jpg",
      rooms: 2,
      m: 130
    },
    {
      name: "Casa en el centro",
      description: "Ten cerca de ti todo lo que necesitas",
      src:
        "https://fotos.perfil.com/2018/09/21/trim/950/534/nueva-york-09212018-366965.jpg",
      rooms: 1,
      m: 80
    },
    {
      name: "Casa rodante",
      description: "Conviertete en un nómada del mundo sin salir de tu casa",
      src:
        "https://cdn.bioguia.com/embed/3d0fb0142790e6b90664042cbafcb1581427139/furgoneta.jpg",
      rooms: 1,
      m: 6
    },
    {
      name: "Departamento",
      description: "Desde las alturas todo se ve mejor",
      src:
        "https://www.adondevivir.com/noticias/wp-content/uploads/2016/08/depto-1024x546.jpg",
      rooms: 3,
      m: 200
    },
    {
      name: "Mansión",
      description: "Vive una vida lujosa en la mansión de tus sueños",
      src:
        "https://nupcias.mx/wp-content/uploads/2021/04/Casa-a-la-venta.jpg",
      rooms: 5,
      m: 500
    }
  ];


  formulario.addEventListener('submit', (e) => {
    e.preventDefault()
    if (inputRooms.value=="" || inputMtsMin.value=="" || inputMtsMax.value=="") {
      alert("Faltan campos por llenar");

      return
    } 
    else if (inputRooms.value <=0 || inputMtsMin.value <= 0 || inputMtsMax.value <=0) {
      alert("Ingrese datos válidos");
   
      return
    } 
    propiedades.innerHTML = ""
   const min = inputMtsMin.value
   const max = inputMtsMax.value


   for (let propi of propiedadesJSON)  {
    if (propi.m >= min && propi.m <= max){


        propiedades.innerHTML += `
        
      </h4><div class="propiedades">
        <div class="propiedad">
          <div
            class="img"
            style="background-image: url(${(propi.src)});"
          ></div>
          <section>
            <h5>${(propi.name)}</h5>
            <div class="d-flex justify-content-between">
              <p>Cuartos: ${(propi.rooms)}</p>
              <p>Metros: ${(propi.m)}</p>
            </div>
            <p class="my-3">${(propi.description)}</span></p>
            <button class="btn btn-info">Ver más</button>
          </section>
        </div>
      </div>`

      console.log(propiedadesJSON.length)
      inputMtsMin.value = ""
      inputMtsMax.value = ""
      inputRooms.value = ""  
      
   }
   else 

   inputMtsMin.value = ""
   inputMtsMax.value = ""
   inputRooms.value = ""  

  }})