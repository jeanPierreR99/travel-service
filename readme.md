# MICROSERVICIO de Cotizaciones

## Descripción del Proyecto

Este Microservicio permite gestionar cotizaciones de servicios ofrecidos por proveedores. Los usuarios pueden solicitar cotizaciones que incluyen múltiples servicios, cada uno perteneciente a una categoría específica, la cotización se maneja en 3 estados creado, reserva, reserva cancelada, en el estado de reserva el usuario puede generar el pdf de su cotización y poder descargarlo.

El microservicio está diseñado utilizando **Clean Architecture**, lo que asegura una separación clara de preocupaciones y una independencia entre la lógica de negocio y los detalles de implementación
![db](/images/db.png)

## Entidades

### 1. Provider (Proveedor)

- **Descripción**: Representa a los proveedores que ofrecen servicios.
- **Atributos**:
  - `id`: Identificador único del proveedor.
  - `name`: Nombre del proveedor.
  - `services`: Lista de servicios ofrecidos por el proveedor.

### 2. User (Usuario)

- **Descripción**: Representa a los usuarios que solicitan cotizaciones.
- **Atributos**:
  - `id`: Identificador único del usuario.
  - `dni`: DNI del usuario.
  - `name`: Nombre del usuario.
  - `email`: Correo electrónico del usuario.
  - `phone_number`: Numero de telefono del usuario.

### 3. Quotation (Cotización)

- **Descripción**: Representa una solicitud de cotización realizada por un usuario.
- **Atributos**:
  - `id`: Identificador único de la cotización.
  - `status`: estado de la cotización (creado, reserva, reserva cancelada).
  - `userId`: ID del usuario que solicita la cotización.
  - `services`: Lista de servicios incluidos en la cotización.

### 4. Service (Servicio)

- **Descripción**: Representa un servicio específico ofrecido por un proveedor.
- **Atributos**:
  - `id`: Identificador único del servicio.
  - `name`: Nombre del servicio.
  - `description`: Descripción del servicio.
  - `price`: Precio del servicio.
  - `providerId`: ID del proveedor que ofrece el servicio.
  - `categoryId`: ID de la categoría a la que pertenece el servicio.

### 5. Category (Categoría)

- **Descripción**: Representa las categorías a las que pertenecen los servicios.
- **Atributos**:
  - `id`: Identificador único de la categoría.
  - `name`: Nombre de la categoría.

## Tecnologías Utilizadas

- **Node.js**: Entorno de ejecución para JavaScript en el servidor.
- **Express**: Framework web para Node.js que facilita la creación de APIs.
- **TypeScript**: Superset de JavaScript que añade tipos estáticos y otras características para mejorar el desarrollo y mantenimiento del código.
- **TypeORM**: ORM (Object-Relational Mapping) para trabajar con bases de datos SQL en TypeScript/JavaScript.
- **MySQL**: Sistema de gestión de bases de datos relacional utilizado para almacenar los datos.
- **Swagger**: Interfaz para visualizar una Documentación de la API.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.
- **Clean Architecture**: Enfoque arquitectónico que promueve la separación de preocupaciones, facilitando la mantenibilidad, escalabilidad y testabilidad del código.

## Instalación

1. Para instalar y ejecutar esta API en tu entorno local, sigue estos pasos:

   ```bash
   git clone https://github.com/jeanPierreR99/travel-service.git

   cd travel-service
   ```

2. Asegúrate de tener Docker instalado y ejecutándose en tu máquina.

3. Construye y ejecuta el contenedor Docker:

   ```bash
   docker-compose up --build
   ```

4. Accede a la API en http://localhost:3000

5. Accede a la Documentación en http://localhost:3000/api-docs

![swagger](/images/swagger.png)
![pdf](/images/pdf.png)

