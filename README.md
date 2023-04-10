# maqueta-vw

Hay que verlo con el servidor de node, para que las referencias de ficheros no fallen y no haya problemas de CORS.
En la carpeta:

npm i
npx serve

He usado SASS para poder crear una estructura de ficheros de estilos básica, basada en componentes. He usado para los colores variables de sass aunque se podrian haber usado perfectamente variables css.

No he usado ningún framework como Bootstrap o Tailwind, he preferido hacerlo a mano para que veais cómo me manejo con css sin frameworks. Pero supongo que habitualmente trabajais con algun framework y no hay problema en usar el que haga falta. Yo últimamente usaba uiKit, pero había usado mucho tiempo Bootstrap. No he usado todavía en ningún proyecto Tailwind, pero lo he trasteado.

En cuanto a JS, he usado vanilla JS porque era suficiente para lo básico que se pedia, y puesto que sé que no usais React, tampoco he querido meterme con él. De hecho, en realidad, entiendo que las cargas de los listados y sus ordenaciones se harian con AJAX desde WordPress, así que aquí sólo he hecho algo muy básico para ordenar los elementos del dom, aunque he tenido que buscarlo en google, porque de entrada no tenía ni idea de cómo hacerlo. ;)

En cuanto a la animación de pasar de cards a lista, como la propiedad flex-direction no es animable en CSS, he probado animando el height, que es lo que he dejado, pero no queda muy bien. Así que habría que hacerlo con JS. He encontrado un plugin con el que se podría animar, pero me puse al final con ésto y ya no tengo más tiempo.Es este plugin: https://greensock.com/docs/v3/Plugins/Flip/ y aquí un ejemplo: https://codepen.io/GreenSock/pen/zYqLjre.

El otro punto que no he llegado a implementar porqué no lo he entendido es el del anchor. Por si os referíais a que cada logo sea un anchor destino, le he puesto un id a cada uno, pero creo que no era eso. En todo caso, este punto lo habríamos aclarado.

He puesto como color por defecto el 484848, pero no tengo suficiente contexto, así que debería confirmarlo con diseño. De hecho los nombres de las variables de los colores seguramente no son las más adecuadas, porque dependen del diseño de toda la web.

He puesto un outline rojo sobre los elementos clicables para poder ver el foco accediendo con el tabulador, sólo a modo de ejemplo. Seguramente siempre quitáis el outline.

Read View --> en Figma tiene un tono de gris distinto en cada vista con muy poca diferencia, lo he unificado, pero lo hubiera hablado con diseño para confirmar si realmente debía ser distinto o podía unificarse.
Pasa lo mismo con su fuente, pasa de 13 a 14 y vuelve a 13 en las cards. Lo he mantenido así, pero hubiera preguntado a diseño si realmente se quería esa pequeña diferencia.

Exclusive - Bonus up tp $200 --> estos textos también los he unificado todos a 17 en desktop aunque hay algunas variaciones a 16 en Figma, que habría consultado con diseño.

En cuanto a las distancias, también habría consultado con diseño qué comportamiento debían tener los elementos en las medidas intermedias, para saber si había que ser más o menos estrictos con las distancias y los tamaños.

He puesto la imagen de fondo al final. Pensaba que iba a ser grande y iba a verse más allá de contenedor de 1064, pero está cortada la imagen. Lo habría consultado con diseño también, porque igual quiere decir que todo el diseño del site va dentro del contenedor de 1100 y fuera hay un fondo de otro color. Pero lo dejo así porque no dispongo de esa información.

Para la compilación de SASS he usado el propio paquete de SASS:
npm run sass-watch

Núria Ramoneda
