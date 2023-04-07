# maqueta-vw

He puesto como color por defecto el 484848, pero no tengo suficiente contexto, así que debería confirmarlo con diseño.

Read View --> tiene un tono de gris distinto en cada vista con muy poca diferencia, lo he unificado, pero lo hubiera hablado con diseño para confirmar si realmente debía ser distinto o podía unificarse.
Pasa lo mismo con su fuente, pasa de 13 a 14 y vuelve a 13 en las cards. Lo he mantenido así, pero hubiera preguntado a diseño si realmente se quería esa pequeña diferencia.

Exclusive - Bonus up tp $200 --> estos textos también los he unificado todos a 17 en desktop aunque hay algunas variaciones a 16, que habría consultado con diseño.

He puesto un outline rojo sobre los elementos clicables para pdoer ver el foco accediendo con el tabulador, sólo a modo de ejemplo.

He usado para los colores variables de sass aunque se podrian haber usado perfectamente variables css.

He usado SASS para poder crear una estructura de ficheros de estilos básica, basada en componentes.

No he usado ningún framework como Bootstrap o Tailwind, he preferido hacerlo a mano para que veais coómo me manejo con css sin frameworks. Pero supongo que habitualmente trabajais con algun framework y no hay problema en usar el que haga falta. Yo últimamente usaba uiKit, pero había usado mucho tiempo Bootstrap. No he usado todavía en ningún proyecto Tailwind, pero lo he trasteado.

En cuanto a JS, he usado vanilla JS porque era suficiente para lo básico qeu se pedia, y puesto que sé que no usais React, tampoco he querido meterme con él. De hecho, en realidad, entiendo que las cargas de los listados y sus ordenaciones se harian con AJAX desde WordPress, así que aquí sólo he hecho algo muy básico para ordenar los elementos del dom, algo que he tenido que buscar en google, porque de entrada no tenía ni idea de cómo hacerlo. ;)

En cuanto a la animación de pasar de cards a lista, como la propiedad flex-direction no es animable en CSS, he probado animando el height, que es lo que he dejado, pero no queda muy bien. Así que habría que hacerlo con JS. He encontrado un plugin con el que se podría animar, pero ya no me da tiempo de implmentarlo. Es este plugin: https://greensock.com/docs/v3/Plugins/Flip/ y aquí un ejemplo: https://codepen.io/GreenSock/pen/zYqLjre

El otro punto que no he llegado a implementar porqué no lo he entendido es el del anchor.
