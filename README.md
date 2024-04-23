#Plushie Management System

Este proyecto es un sistema de gestión de usuarios y personalización de muñecos de peluche. Permite a los usuarios registrarse, iniciar sesión, y personalizar muñecos de peluche seleccionando diferentes colores y accesorios. Además, incluye un ranking de los muñecos más populares basado en las personalizaciones realizadas por los usuarios.

## Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para propósitos de desarrollo y pruebas.

### Pre requisitos

Necesitas tener instalado Node.js, npm y MongoDB en tu máquina local. 

```bash
# Instala Node.js y npm desde https://nodejs.org/
# Instala MongoDB desde https://www.mongodb.com/try/download/community
```

### Instalación

Clona el repositorio y instala las dependencias del proyecto.

```bash
git clone https://github.com/Plushie-Management-System.git
cd Plushie-Management-System
npm install
```

### Configuración

Crea un archivo `.env` en la raíz del proyecto con las siguientes variables de entorno:

```plaintext
JWT_SECRET=tu_clave_secreta
MONGODB_URI=tu_uri_de_mongodb
```

## Uso

Para iniciar el servidor, ejecuta:

```bash
npm start
```

### Endpoints

- **Registrar Usuario**
  - `POST /users/register`: Registra un nuevo usuario.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "email": "ejemplo@correo.com",
        "name": "Nombre",
        "lastname": "Apellido",
        "password": "contraseña"
      }
      ```

- **Iniciar Sesión**
  - `POST /users/login`: Inicia sesión y obtén un token JWT.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "email": "ejemplo@correo.com",
        "password": "contraseña"
      }
      ```

- **Obtener Todos los Usuarios**
  - `GET /users`: Devuelve una lista de todos los usuarios. Requiere autorización.
  
- **Obtener Usuario por ID**
  - `GET /users/:id`: Obtiene los detalles de un usuario específico. Requiere autorización.
  
- **Actualizar Usuario**
  - `PUT /users/:id`: Actualiza la información de un usuario. Requiere autorización.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "email": "actualizado@correo.com",
        "name": "Actualizado",
        "lastname": "Usuario"
      }
      ```

- **Eliminar Usuario**
  - `DELETE /users/:id`: Elimina un usuario específico. Requiere autorización.

#### Gestión de Muñecos de Peluche

- **Obtener Todos los Muñecos**
  - `GET /plushies`: Devuelve una lista de todos los muñecos disponibles.

- **Añadir Nuevo Muñeco**
  - `POST /plushies`: Añade un nuevo muñeco de peluche. Requiere autorización.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "name": "Teddy",
        "imageUrl": "http://example.com/teddy.jpg"
      }
      ```

- **Actualizar Muñeco**
  - `PUT /plushies/:id`: Actualiza la información de un muñeco existente. Requiere autorización.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "name": "Updated Teddy",
        "imageUrl": "http://example.com/updated_teddy.jpg"
      }
      ```

- **Eliminar Muñeco**
  - `DELETE /plushies/:id`: Elimina un muñeco específico. Requiere autorización.

#### Personalización de Muñecos

- **Crear Personalización**
  - `POST /customizations`: Crea una nueva personalización de muñeco. Requiere autorización.
    - Ejemplo de cuerpo de solicitud:
      ```json
      {
        "userId": "<USER_ID>",
        "plushieId": "<PLUSHIE_ID>",
        "color": "red",
        "accessory": "hat"
      }
      ```

#### Ranking de Muñecos

- **Obtener Ranking de Muñecos**
  - `GET /rankings`: Obtiene el ranking de los muñecos más populares.

## Desarrollado con

- [Node.js](https://nodejs.org/) - Entorno de ejecución para JavaScript
- [Express](https://expressjs.com/) - Framework de aplicación web para Node.js
- [MongoDB](https://www.mongodb.com/) - Base de datos NoSQL
- [JWT](https://jwt.io/) - Tokens de JSON Web Token para autenticación

## Licencia

Este proyecto está bajo la Licencia MIT - vea el archivo [LICENSE.md](LICENSE.md) para detalles.

## Autores

- **Lautaro De Angelis** - *Trabajo inicial* - https://github.com/lautaroda/


```