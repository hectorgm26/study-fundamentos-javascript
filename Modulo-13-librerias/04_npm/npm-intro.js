// npm es el gestor de paquetes de Node.js que nos permite administrar las dependencias de nuestro proyecto, incluyendo librerias externas y herramientas de desarrollo.

// npm se instala automáticamente al instalar Node.js, y se puede usar desde la línea de comandos para instalar, actualizar y eliminar paquetes.

// Diferencias entre instalacion Local vs Global

// - Local: Se instalan en la carpeta node_modules de tu proyecto y se utilizan solo en ese proyecto. Se instalan con el comando npm install nombre_paquete
// - Global: Se instalan en una ubicación global en tu sistema y se pueden usar en cualquier proyecto en el PC. Se instalan con el comando npm install -g nombre_paquete (se añade el atributo -g antes del nombre del paquete).

// En ambas instalaciones, npm registrara la instalacion en package.json, pero en la instalacion local lo hara en la seccion de dependencias y en la instalacion global lo hara en la seccion de devDependencies.

// Tambien de paso se crea un package-lock.json, que es un archivo que contiene la version exacta de cada paquete instalado y sus dependencias, junto a sus detalles. Esto asegura que todos los desarrolladores del proyecto tengan las mismas versiones de los paquetes instalados, evitando problemas de compatibilidad.