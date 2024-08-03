# Rocktica

- Es un proyecto del curso de ReactJS disctado por coderhouse
- La idea principal del proyecto es presentar un ecommerce basado en el rubro que me desarrolle y trabajo actualmente que es la optica
- Esta actualmente orientado a una marca especifica de anteojos con posibilidad de crecimiento y agregado de mas marcas y modelos

# Contenidos

## Aplicacion de HTML

- Actualmente el proyeco cuenta con la implementacion basica de HTML permitiendo la ejecucion de react y Bootstrap

## Aplicacion de CSS

- El proyecto cuenta con un CSS centralizado donde se importan los CSS individuales de los componentes creados durante el desarrollo
- En un futuro se buscara la posibilidad de adaptar el CSS a SCSS mediante SASS

## Aplicacion de JavaScript

- La aplicacion de JS esta hecha mediante React a traves del codificado en JSX a traves de todo el proyecto para mantener una consistencia en el estilo de codigo
- Se utilizo archivos JS siempre que fue necesario

## Aplicacion de ReactJS

- Todo el proyecto esta basado en ReactJS en el marco del aprendizaje a traves de Coderhouse con los agregados de calidad de codigo y consejos de los profesores y tutores

## Aplicacion de Bootstrap

- En mi caso particular preferi utilizar Bootstrap como Framework de diseño para poder dar un estilo basico a la pagina durante su desarrollo
- Se realizaron configuraciones de estilo propias a la base provista por Bootstrap
- Se utilizo principalmente para hacer Responsive la app en general

## Utilizacion de Firebase

- Como base de datos del proyecto se utilizo Firebase para proveer los beneficios del mismo para el manejo de datos de productos y ordenes generadas a traves del checkout

## Componentizacion de la webApp

- La web app creada esta componentizada en su mayoria para poder proveer con claridad una division y utilizar los fragmentos de codigo necesarios sin sobrecargar un componente de codigo extra

### Listado de componentes

#### Navbar

- Provee navegacion de la pagina general entre la pagina principal y las distintas categorias de productos ademas de proveer un link de acceso al carrito donde se utilizo rendering condicional

#### ProductContainer

- Componente principal de renderizado de productos y todos los componentes dependientes del mismo incluidos los productos filtrados por categoria y las funcionalidades de agregado de productos al carrito

#### ProductList

- Componente especializado a la renderizacion de la lista de productos donde se realiza un metodo .map del componente product para la generacion de las tarjetas de producto

#### Product

- Componente de generacion de tarjeta de producto con formato de la misma y capturado de los productos de la base de datos con cada uno de sus componentes

#### ProductCounter

- Componente donde se realiza la logica de agregado al carrito del producto donde se considera tambien la condicion de agregado permitiendo agregar solo una vez cada producto para evitar repeticiones en el carrito y el agregado de productos que ya no posean stock
- Ademas se puede definir la cantidad de cada producto a agregar

#### DetailContainer

- Contenedor del detalle de cada producto linkeado a cada imagen del producto donde se genera la descripcion

#### Detail

- Componente donde se formatea cada una de las descripciones del producto seleccionado con sus caracteristicas basicas

#### CartWidget

- Componente dedicado a mostrar la cantidad total de productos que hay en el carrito ubicado en el Navbar que tambien funciona como link hacia el carrito

#### CartContainer

- Componente donde se renderizara el listado de items en el carrito con un renderizado condicional que muestra un mensaje en caso de no tener ningun producto agregado al carrito

#### Cart

- Listado de productos en el carrito con funcionalidad para eliminar todos los productos en masa donde se genera a traves de un metodo .map cada uno de los productos en una lista y a traves de un boton permite acceder al checkout

#### CartItem

- Componente dedicado al formateo de cada producto incluido en el carrito donde se agrega un subtotal basado en el precio unitario de cada producto y ademas una funcionalidad de eliminacion de producto individual en el carrito

#### Checkout

- Componente donde se genera un formulario para que el cliente pueda completar sus datos para la finalizaciond e la compra de productos con una funcionalidad de generacion de una orden en la base de datos ademas de la funcionalidad provista por el mismo formulario de limpiarlo completamente

### Listado de Context

#### CartContext

- Contexto provisto donde se maneja toda la funcionalidad del carrito que incluye todas las formulas necesarias para el manejo del mismo exportadas a traves de un hook especifico

#### NotificationContext

- Contexto utilizado para la creacion de notificaciones dentro de la web app utilizado a lo largo de cada componente relevante donde puede haber alguna interaccion por parte del usuario tambien exportado a traves de un hook especifico ademas de poseer en el mismo archivo el formato y estilo de la notificacion en concreto

### Listado de Hooks

#### CartHook

- Utilizado unicamente para el exportado y la utilizacion del contexto de carrito donde es necesario

#### NotificationHook

- Utilizado unicamente para el exportado y la utilizacion del contexto de notificacion donde es necesario

#### useAsync

- Hook generico creado para la optimizacion de codigo en los componentes principales donde se maneja el uso de funciones asincronicas y estados necesarios en la app

### Listado de Services

#### Firebase

##### Index

- Service utilizado para la configuracion y utilizacion de Firebase como base de datos del proyecto

##### Firestore

- Carpeta donde se guarda la funcionalidad general de obtencion de datos a traves de Firebase

### Listado de Adicionales

#### Adapters

##### ProductAdapter

- Adaptador de productos de la base de datos de firestore en caso de cambio de alguna propiedad

#### Assets

- Cart.svg archivo SVG para utilizacion en el widget del carrito

# Agradecimientos

** Quiero extender mis agradecimientos a Adrian Gonzalez profesor del curso de ReactJS de Coderhouse por toda la enseñanza y consejos a la hora de codificar ademas de la informacion y enseñanzas extra no contempladas en el plan de estudios del curso **

** Tambien quiero agradecer a los tutores Luis Mera y Esteban Hirzfeld por la ayuda, el aclarado de dudas y el acompañamiento durante la cursada ayudando no solo a mi sino a todos lso integrantes del curso a mejorar con consejos y datos de relevancia a la hora de codificar y formatear, ademas de aportar al igual que Adrian toda su experiencia en el rubro para nuestro desarrollo **

### End
