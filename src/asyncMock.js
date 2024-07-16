const products = [
    {
      id: "1",
      name: "Discuss",
      price: "$" + 76900,
      category: "sol",
      img: "https://vulkeyewear.com/img/productos/6669e723e4db5c23183ecec59.jpg",
      stock: 100,
      description: "Descubre los Discuss, disponibles en combinaciones de colores y lentes vanguardistas. Cada par está equipado con lentes de CR39 que ofrecen una buena protección solar.",
      frente: "FRENTE ARMAZÓN DE ACETATO ITALIANO BIODEGRADABLE",
      patilla: "PATILLA BISAGRAS DE ACERO INOXIDABLE",
      lente: "LENTE CR39 / 100% PROTECCIÓN UVA Y UVB",
    },
    {
      id: "2",
      name: "V.V",
      price: "$" + 103000,
      category: "sol",
      img: "https://vulkeyewear.com/img/productos/6581f9475439976aaf25b9227.jpg",
      stock: 100,
      description: "Descripcion de V.V",
    },
    {
      id: "3",
      name: "Sexyness by Samot",
      price: "$" + 83000,
      category: "sol",
      img: "https://vulkeyewear.com/img/productos/6669eb4fe00810c3c8290ec3c.jpg",
      stock: 100,
      description: "Descripcion de Sexyness by Samot",
    },
    {
        id: "4",
        name: "Dupils",
        price: "$" + 83000,
        category: "sol",
        img: "https://vulkeyewear.com/img/productos/6661b3f2a2c41b4b9905ef124.jpg",
        stock: 100,
        description: "Descripcion de Dupils",
      },
      {
        id: "5",
        name: "Collins",
        price: "$" + 180000,
        category: "sol",
        img: "https://vulkeyewear.com/img/productos/654a5ab45d0c73dbed9e6447f.jpg",
        stock: 100,
        description: "Descripcion de Sexyness by Samot",
      },
      {
        id: "6",
        name: "Pretend",
        price: "$" + 76900,
        category: "sol",
        img: "https://vulkeyewear.com/img/productos/637e3aed48e6a1de0de83fe6f.jpg",
        stock: 100,
        description: "Descripcion de Pretend",
      },
      {
        id: "7",
        name: "Thunver",
        price: "$" + 68500,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/65e0c7e76668b93fa5ca84290.jpg",
        stock: 100,
        description: "Descripcion de Thunver",
      },
      {
        id: "8",
        name: "Doct",
        price: "$" + 78900,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/65e0a2f34e0f03c870abddc88.jpg",
        stock: 100,
        description: "Descripcion de Doct",
      },
      {
        id: "9",
        name: "Dictation",
        price: "$" + 80000,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/65e095a5493fd1780184797bd.jpg",
        stock: 100,
        description: "Descripcion de Dictation",
      },
      {
        id: "10",
        name: "Discuss",
        price: "$" + 70000,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/65e092275729619c060bcb17a.jpg",
        stock: 100,
        description: "Descripcion de Discuss",
      },
      {
        id: "11",
        name: "I See Optical",
        price: "$" + 105000,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/6581a253babb5e7ee9d51676f.jpg",
        stock: 100,
        description: "Descripcion de I See Optical",
      },
      {
        id: "12",
        name: "Prevus",
        price: "$" + 95000,
        category: "receta",
        img: "https://vulkeyewear.com/img/productos/63f8dd2eecd2fa2ceafa58436.jpg",
        stock: 100,
        description: "Descripcion de Prevus",
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
  