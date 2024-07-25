const products = [
  {
    id: "1",
    name: "Discuss",
    price: "$" + 76900,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/6669e723e4db5c23183ecec59.jpg",
    stock: 0,
    description: "Descubre los Discuss, disponibles en combinaciones de colores y lentes vanguardistas. Cada par está equipado con lentes de CR39 que ofrecen una buena protección solar con un peso de solo 29 gramos",
    frente: "FRENTE: ARMAZÓN DE ACETATO ITALIANO BIODEGRADABLE",
    patilla: "PATILLA: ACETATO ITALIANO CON BISAGRAS DE ACERO INOXIDABLE",
    lente: "LENTE: CR39 / 100% PROTECCIÓN UVA Y UVB",
  },
  {
    id: "2",
    name: "V.V",
    price: "$" + 103000,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/6581f9475439976aaf25b9227.jpg",
    stock: 100,
    description: "Animate a renovar tu look, con el V.V un anteojo de sol de estilo deportivo futurista de un peso de solo 20,7 gramos disponible con cristales espejados rojos",
    frente: "FRENTE: ARMAZON G-FLEX",
    patilla: "PATILLA: BISAGRAS PLASTICAS / ULTRA LIVIANO / NASAL DE GOMA",
    lente: "LENTE: POLICARBONATO / 100% PROTECCION UVA Y UVB",
  },
  {
    id: "3",
    name: "Sexyness by Samot",
    price: "$" + 83000,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/6669eb4fe00810c3c8290ec3c.jpg",
    stock: 100,
    description: "En una nueva colaboracion con el diseñador Samot presentamos el Sexyness, un modelo en tres opciones de colores y combinaciones escogidas por el mismo Samot con un peso de solo 25,7 gramos",
    frente: "FRENTE: ARMAZÓN DE ACETATO ITALIANO BIODEGRADABLE",
    patilla: "PATILLA: ACETATO CON BISAGRAS Y ALMA DE ACERO INOXIDABLE",
    lente: "LENTE: CR39 / 100% PROTECCIÓN UVA Y UVB",
  },
  {
    id: "4",
    name: "Bold Look",
    price: "$" + 83000,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/6661b3f2a2c41b4b9905ef124.jpg",
    stock: 100,
    description: "BOLD LOOK- un anteojo con un diseño que ofrece durabilidad y confort. Con un diseño ergonómico para un ajuste perfecto pesando solo 56.8 gramos",
    frente: "FRENTE: ARMAZÓN DE ACETATO ITALIANO 8MM",
    patilla: "PATILLA: ACETATO CON BISAGRAS Y ALMA DE ACERO INOXIDABLE",
    lente: "LENTE: CR39 / 100% PROTECCIÓN UVA Y UVB",
  },
  {
    id: "5",
    name: "Collins",
    price: "$" + 180000,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/654a5ab45d0c73dbed9e6447f.jpg",
    stock: 100,
    description: "Un anteojo de estilo clasico modernizado, Collins esta disponible en siete colores clasicos con un peso de solo 27,5 gramos para mayor confort",
    frente: "FRENTE: MONEL",
    patilla: "PATILLA: MONEL",
    lente: "LENTE: POLICARBONATO / 100% PROTECCION UVA Y UVB",
  },
  {
    id: "6",
    name: "Pretend",
    price: "$" + 76900,
    category: "sol",
    img: "https://vulkeyewear.com/img/productos/637e3aed48e6a1de0de83fe6f.jpg",
    stock: 100,
    description: "Luci a la moda con este modelo de estilo popularizado por artistas del momento, pesando solo 31 gramos no vas a querer sacartelo nunca disponible en cinco atrevdos colores para resaltar mas tu look",
    frente: "FRENTE: ARMAZON DE G-FLEX",
    patilla: "PATILLA: G-FLEX",
    lente: "LENTE: CR39 / POLARIZADA 100% PROTECCION UVA Y UVB",
  },
  {
    id: "7",
    name: "Thunver",
    price: "$" + 68500,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/65e0c7e76668b93fa5ca84290.jpg",
    stock: 100,
    description: "Thunver un modelo de solo 25,4 gramos de diseño especial para mayor comodidad a la hora de usarlo durante largos dias, con su material semi traslucido luci una mirada y rostro limpios en todo momento",
    frente: "FRENTE: ARMAZON DE G-FLEX",
    patilla: "PATILLA: PATILLA DE ACETATO CON BISAGRA Y ALMA DE ACERO INOXIDABLE",
    lente: "LENTE: A ELECCION DEL PACIENTE",
  },
  {
    id: "8",
    name: "Doct",
    price: "$" + 78900,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/65e0a2f34e0f03c870abddc88.jpg",
    stock: 100,
    description: "Si buscas un estilo profesional y clasico Doct es para vos, con un peso de solo 15,2 gramos y un diseño sobrio pero moderno vas a sentir el confort de un diseño que nunca pasara de moda",
    frente: "FRENTE: BERILIO",
    patilla: "PATILLA: BERILIO CON TERMINAL PLASTICA",
    lente: "LENTE: A ELECCION DEL PACIENTE",
  },
  {
    id: "9",
    name: "Dictation",
    price: "$" + 80000,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/65e095a5493fd1780184797bd.jpg",
    stock: 100,
    description: "Dictation, un modelo atrevido con tres colores desde clasicos a modernos, pesando solo 23,8 gramos ofrece una comodidad inigualable manteniendo una mirada atrevida ante toda situacion",
    frente: "FRENTE: ARMAZON DE ACETATO",
    patilla: "PATILLA: PATILLA DE ACETATO CON BISAGRA Y ALMA DE ACERO INOXIDABLE",
    lente: "LENTE: A ELECCION DEL PACIENTE",
  },
  {
    id: "10",
    name: "Discuss Optical",
    price: "$" + 70000,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/65e092275729619c060bcb17a.jpg",
    stock: 100,
    description: "Descubri el modelo Discuss en su version optica para el montado de los cristales oftalmicos que necesites en tu dia a dia en una amplia variedad de colores vanguardistas pesando solo 29 gramos",
    frente: "FRENTE: ARMAZÓN DE ACETATO ITALIANO BIODEGRADABLE",
    patilla: "PATILLA: ACETATO ITALIANO CON BISAGRAS DE ACERO INOXIDABLE",
    lente: "LENTE: A ELECCION DEL PACIENTE",
  },
  {
    id: "11",
    name: "I See Optical",
    price: "$" + 105000,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/6581a253babb5e7ee9d51676f.jpg",
    stock: 100,
    description: "Rindiendo homenage a una de las bandas de rock mas importantes de la historia el modelo I See Optical luce unas lentes de CR39 de tributo facilmente sustituibles por los lentes oftalmicos que necesites y un diseño adornado por the Rolling Stones",
    frente: "FRENTE: ARMAZÓN DE ACETATO ITALIANO BIODEGRADABLE",
    patilla: "PATILLA: ACETATO ITALIANO CON BISAGRAS Y ALMA DE ACERO INOXIDABLE",
    lente: "LENTE: BLUE CUT TRIBUTE",
  },
  {
    id: "12",
    name: "Prevus",
    price: "$" + 95000,
    category: "receta",
    img: "https://vulkeyewear.com/img/productos/63f8dd2eecd2fa2ceafa58436.jpg",
    stock: 100,
    description: "Un clasico estilo unisex de acero inoxidable con un campo visual inigualable adaptable a todo tipo de rostro para lucir el mejor estilo en todo momento durante tus actividades diarias",
    frente: "FRENTE: ACERO INOXIDABLE",
    patilla: "PATILLA: ACERO INOXIDABLE CON TERMINAL PLASTICA",
    lente: "LENTE: A ELECCION DEL PACIENTE",
  },
];

export const getProducts = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products);
    }, 1000);
  });
};

export const getProductsByCategory = (categoryId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.filter((prod) => prod.category === categoryId));
    }, 1000);
  });
};

export const getProductById = (productoId) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(products.find((prod) => prod.id === productoId));
    }, 1000);
  });
};
