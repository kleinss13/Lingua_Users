# Lingua Eng-Deu — PWA de vocabulario A1

Aplicación web instalable para practicar vocabulario español-alemán y español-inglés. Mantiene la interfaz y la lógica en HTML, CSS y JavaScript sin framework ni backend obligatorio.

## Funciones

- Cuatro perfiles locales: Maria del Mar, Claudia, Joel y Kevin (administrador).
- Recuerda el último perfil seleccionado en ese navegador.
- Guarda vocabulario, errores pendientes, estadísticas acumuladas y seguimiento por palabra por perfil e idioma.
- Vocabulario inicial integrado en `script.js`; no necesita Excel para empezar.
- Orden aleatorio de las tarjetas, modo de repaso de errores y validación tolerante a variantes habituales.
- Panel de resumen local para Kevin.
- Tema claro/oscuro, diseño adaptable y caché para uso offline tras la primera carga.

## Archivos principales

- `index.html`: estructura y textos de la aplicación.
- `style.css`: diseño adaptable y estilos.
- `script.js`: perfiles, vocabulario integrado, test, progreso y almacenamiento.
- `manifest.json`: metadatos de instalación PWA.
- `sw.js`: caché offline y actualización de recursos.
- `icons/`: iconos de instalación.

## Publicación en GitHub Pages

1. Descomprime el ZIP.
2. Sube **el contenido** del ZIP a la raíz del repositorio, manteniendo la carpeta `icons/`.
3. Sustituye los archivos antiguos cuando GitHub pregunte.
4. Espera a que termine la publicación de GitHub Pages.
5. Abre la web y haz `Ctrl + F5`. Si sigue apareciendo una versión antigua, cierra la PWA instalada y vuelve a abrirla después de recargar la web.

## Importante sobre la memoria y la privacidad

Esta versión guarda datos en `localStorage` del navegador. El perfil se recuerda en ese navegador y los datos se separan por nombre e idioma, pero **no se sincronizan entre dispositivos** y no son una autenticación segura: cualquiera con acceso al dispositivo puede elegir otro perfil. El panel de Kevin es una vista administrativa local, no un control de acceso del servidor.

Para sincronización real entre móviles y ordenadores hace falta configurar un backend (por ejemplo Supabase) con autenticación y políticas de acceso por usuario. No se incluye una configuración falsa ni claves públicas/privadas inventadas.

## Copias de seguridad

Los datos locales pueden borrarse si se limpian los datos del navegador, se cambia de navegador o se usa otro dispositivo. Antes de depender de la app como registro único, conviene implementar exportación/restauración completa de perfiles o sincronización con backend.
