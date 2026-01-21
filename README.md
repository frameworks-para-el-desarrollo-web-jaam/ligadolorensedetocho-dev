# ligadolorensedetocho-dev 

## Autor
Juan Abel Anzo Méndez

## Descripcion

Esta es un desarrollo web basado en React para mostrar el sitio web de una liga deportiva de flag football
 ## Contexto y Justificación del Proyecto
 Una liga deportiva de flagfootball quiere ofrecer a sus usuarios un sitio web donde puedan estar públicas las plantillas de jugadores de cada equipo. Las planillas cambian con cada temporada(cada seis meses), algunos equipos se desacen otros nuevos se conforman. Usaremos react para entregar dos flujos diferentes, un flujo de administrador que permita el CRUD de los equipos y jugadores y otro flujo para la vista del cliente.

 ## Requerimientos Funcionales
> * RF1: Navegar entre equipos filtrando por nombre de equipo, categoría, o nombre de jugador.
> * RF2: El Administrador debe ser capaz de agregar, eliminar, consultar y actualizar datos en planillas de equipos y jugadores.
> * RF3: Visualizar el listado de equipos junto con sul logo y las fotos de los jugadores
> * RF4: Cambiar entre modos de visualización para vistas de carrusel y listado.
> * RF5: Acceder a un Login para el administrador de la liga.
> * RF6 Barrar de navegación para navegar entre EQUIPOS, JUGADORES, CALENDARIOS, CONTACTO

## Requerimientos no funcionales.
> * El sistema debe contar con animaciones al desplazarse entre fotos dentro del carrusel
> * El sitema depe ser responsivol y desplegarse con flex en móbiles y escritorios
> * El fondo de pantalla debe cambiar de color en relación con los colores del Equipo.

# Tecnológias y Herramientas del Ecosistema
> ### Manejo de estado Global
>  Se elegió react por la simplicidad que tiene para implementarse en desarrollos pequeños y el buen respaldo de la comunidad de desarrolladores.
> ### Manejo de los Datos
>  Axios es el encargado de consumir las peticiones del forntend por la buena relación que tiene con react y su ompatibilidad con NodeJS
> ### Estilizado
> Tailwind es el elegido por su rapidez en el desarrollo, ya que ofrece clases utilitarias predefinidas que permiten construir interfaces de usuario más agiles.
> ### Despliegue
> Se elecciono Vercel como plataforma para el despliegue debido a su integracion nativa con React lo que facilita la publicación de la aplicación. Ademásd e que ofrece despliegues automaticos viculados a repositorios de Git.
> Para despliegues locales y pruebas se utilizará Docker

### Flujos en Mermaid 
https://mermaid.live/edit#pako:eNp1kt1umzAUx1_F8lUrJSmQhFIuJq3Jsg913dRMvRjk4hR7xBrYzJhuGckj9aqP0BfbsSFRMm1I-OP49_f5ckszxTiNaa6hWpMv81QS_JYGtDk7ey9FJtT5ORkOX5EbkEzIPHmnSr7qsN7kjm_h8QF0ew1aA2Hc7nkOmXh5lruO7saOs5Lt3SLckjc_GlGpOlnyzMF7w-rf-IcmB6Y0PxIcTP-RfDIa759BwSUDLRS5IDMlDWRGrY4j6x27bBaiMFzXiZ1RHZNbVT5ofjEDw3OlX56gl_agE73VgiU3ojYYji3BaSbdaBkHz7kBUSR2KgqOeNHzJ3hHWf5e8J8fsVft3WISE1w5F_fWW1_fPeEyn2EfmpoXW4IrZVfJ3kQyJclrKUrsjpKHsp3IXRZbYqfjjBbKYIE2ZA7mr7wOTXDJLTnobJ1cN3VmraTCv6tgL-oAx34uYMM1BsdshMy66S_DRlmHKzrA5ykYjY1u-ICWXJdgt7S1l6XUrHnJUxrjEhv8PaWp3KGmAvlVqXIvwyrkaxp_g6LGXVMxbOVcAD788mDV-EQwFtVIQ2Pf9yJ3C41b-gv3UTQKvDDwxpE_jcbBBE83NB4GV_7ICydhGATeVTj2ot2A_naO_ZGPZBRcTifjYBqF4eXuD3gOHjM
