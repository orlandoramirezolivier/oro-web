// Investigaciones de servicio — Verticales L y M
// Oro Constructores · Madrid

export const invServicesLM = [
  {
    codigo: 'L01',
    slug: 'retirada-escombros-contenedor-madrid',
    titulo: 'Retirada de escombros con contenedor en Madrid',
    subtitulo: 'Gestión completa de residuos de obra grande, desde la clasificación hasta el certificado.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'La retirada de escombros con contenedor es el método estándar para obras de reforma media y grande en Madrid. Implica la colocación de un contenedor homologado en vía pública o en el interior del inmueble, la carga de los residuos clasificados por tipo, el transporte a planta autorizada y la emisión de la documentación acreditativa exigida por la Ley 7/2022. Oro Constructores gestiona todo el proceso como parte de cada reforma, sin que el cliente tenga que coordinar con empresas externas.',

    stats: [
      { valor: '40 kg/m²', label: 'de residuos genera de media una reforma de vivienda en Madrid' },
      { valor: '150–280€', label: 'coste de contenedor de 7m³ en Madrid capital' },
      { valor: 'Ley 7/2022', label: 'obliga a documentar la gestión de residuos en todas las obras de construcción' },
    ],

    contexto: 'La gestión de residuos de construcción y demolición (RCDs) en Madrid está regulada por la Ley 7/2022 de residuos y suelos contaminados, el Real Decreto 105/2008 y las ordenanzas municipales del Ayuntamiento de Madrid. Cualquier obra que genere más de una tonelada de escombros — umbral que se alcanza con facilidad en una reforma de baño o cocina — está obligada a contar con un Plan de Gestión de RCDs y a acreditar que los residuos han ido a una planta autorizada. El incumplimiento puede suponer multas de hasta 45.000€ para el promotor o el propietario, no solo para la empresa constructora. Madrid capital exige además permiso municipal para colocar contenedor en vía pública, con tasas que varían según la zona y la duración.\n\nCuando la gestión no se documenta correctamente, el propietario queda expuesto a sanciones administrativas aunque haya pagado a una empresa de construcción. La responsabilidad recae sobre quien genera los residuos, no solo sobre quien los transporta. El vertido ilegal en descampados, obras abandonadas o contenedores municipales es una infracción grave que puede acarrear multas de 10.000 a 100.000€ y obliga a pagar el coste de la limpieza. Además, los residuos especiales como fibrocemento con amianto tienen régimen propio: su retirada ilegal es una infracción muy grave.\n\nOro Constructores integra la gestión de residuos en cada reforma desde el primer día. Clasificamos en obra, gestionamos el permiso de contenedor, coordinamos con la planta autorizada y entregamos la documentación completa junto con la liquidación de la obra. El cliente no tiene que hacer nada ni preocuparse por el cumplimiento normativo.',

    perfiles: [
      { tipo: 'Propietario que reforma su vivienda', descripcion: 'Quiere que la obra termine limpia y sin problemas administrativos. No sabe que existe la obligación de documentar los residuos ni que puede ser sancionado si no se hace. Le preocupa el coste adicional del contenedor y si va a necesitar permiso para ponerlo en la calle. Prefiere que la empresa de reformas lo gestione todo incluido en el presupuesto, sin tener que llamar a ningún sitio.' },
      { tipo: 'Administrador de fincas que coordina la reforma de una comunidad', descripcion: 'Gestiona obras en edificios con propietarios exigentes. Necesita documentación acreditativa de la gestión de residuos para el archivo de la comunidad y para responder ante cualquier inspección. Valora que la empresa de reformas entregue el certificado de planta autorizada sin que él tenga que pedirlo.' },
    ],

    trabajoDetalle: 'Gestionar correctamente los residuos de obra implica cuatro acciones encadenadas: clasificar en origen, transportar con empresa autorizada, depositar en planta autorizada y documentar cada paso. La clasificación en origen es clave porque los residuos inertes (hormigón, ladrillo, cerámica, mortero) se pueden llevar a plantas de reciclaje con menor coste, mientras que los residuos mixtos sin clasificar tienen tarifa más alta y menor posibilidad de valorización. Una obra que clasifica bien ahorra entre un 20% y un 40% en tasas de vertido.\n\nExiste una distinción fundamental entre tres categorías de residuos. Los residuos inertes son materiales sin componentes peligrosos: escombros, cerámica, piedra, hormigón. Los residuos especiales incluyen cualquier material con amianto (uralita, fibrocemento antiguo), pinturas con plomo o tierras contaminadas — su gestión requiere empresa RERA certificada y documentación específica. Los residuos voluminosos son muebles, electrodomésticos y maderas que no caben en contenedor estándar o que tienen valorización diferente. Mezclar estas categorías encarece la gestión y puede generar responsabilidad legal.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Clasificación en obra', descripcion: 'Durante la demolición y los trabajos, separamos los residuos por tipo: escombros inertes en un área, maderas y metales en otra, residuos voluminosos aparte. Esta clasificación en origen reduce el coste de vertido y es requisito del Plan de Gestión de RCDs.' },
      { numero: '02', titulo: 'Solicitud de permiso y colocación del contenedor', descripcion: 'Gestionamos el permiso municipal de ocupación de vía pública cuando el contenedor va a la calle. Coordinamos la colocación con la empresa transportista y verificamos que el contenedor tiene las señalizaciones reglamentarias exigidas por el Ayuntamiento de Madrid.' },
      { numero: '03', titulo: 'Carga y transporte a planta autorizada', descripcion: 'Una vez lleno, coordinamos la recogida con empresa de transporte de RCDs inscrita en el Registro de Productores y Gestores de Residuos de la Comunidad de Madrid. El transporte se realiza con vehículo cubierto o con los residuos bien fijados para evitar derrames.' },
      { numero: '04', titulo: 'Documentación acreditativa', descripcion: 'Recibimos el ticket de entrada en planta autorizada y lo incorporamos al expediente de la obra. Al finalizar, entregamos al cliente el certificado de gestión de RCDs con el desglose por tipo de residuo, peso y planta receptora, cumpliendo las exigencias de la Ley 7/2022.' },
    ],

    materiales: [
      { tipo: 'Escombros inertes (hormigón, ladrillo, cerámica)', tecnica: 'Contenedor 7m³ o transporte directo', cuandoUsarla: 'Obras de reforma estándar. Se puede reutilizar o llevar a planta de reciclaje con menor tarifa.' },
      { tipo: 'Residuos mixtos de obra sin clasificar', tecnica: 'Contenedor con separación mínima', cuandoUsarla: 'Cuando la clasificación en obra no es viable. Tarifa más alta en planta.' },
      { tipo: 'Residuos voluminosos (muebles, electrodomésticos)', tecnica: 'Retirada directa sin contenedor o contenedor específico', cuandoUsarla: 'Vaciados de piso previos a reforma. Ver servicio L05.' },
      { tipo: 'Residuos especiales (amianto, fibrocemento, uralita)', tecnica: 'Empresa RERA certificada con documentación específica', cuandoUsarla: 'Obligatorio para cualquier material con amianto. Ver servicio L06.' },
      { tipo: 'Metales y ferralla', tecnica: 'Chatarrero o punto limpio', cuandoUsarla: 'Tiene valor de recuperación. Separar del resto reduce el coste neto de gestión.' },
    ],

    queIncluye: [
      'Gestión del permiso de ocupación de vía pública para contenedor (cuando aplica)',
      'Coordinación de colocación y recogida del contenedor con empresa transportista autorizada',
      'Clasificación de residuos en obra por categorías (inertes, mixtos, voluminosos)',
      'Transporte a planta de tratamiento autorizada inscrita en el Registro de la CM',
      'Ticket de planta y certificado de gestión de RCDs para el expediente del cliente',
      'Limpieza del espacio de acopio al finalizar la carga',
    ],
    queNoIncluye: [
      'Gestión de residuos especiales con amianto (requiere empresa RERA — ver L06)',
      'Tasas municipales de ocupación de vía pública (se repercuten al cliente al coste)',
      'Más de un contenedor por obra — obras muy grandes pueden requerir vaciados múltiples con coste adicional',
    ],

    precios: [
      { trabajo: 'Contenedor 7m³ completo (escombros inertes)', precio: '150–280€', nota: 'Sin IVA. Incluye colocación, recogida y transporte a planta. No incluye tasas municipales.' },
      { trabajo: 'Contenedor 10–12m³ (obra grande)', precio: '250–400€', nota: 'Para reformas integrales de piso de 80–120m².' },
      { trabajo: 'Vacío adicional del mismo contenedor (segunda carga)', precio: '120–200€', nota: 'Cuando la obra genera más de un contenedor.' },
      { trabajo: 'Tasa municipal de ocupación de vía pública Madrid', precio: '30–80€/semana', nota: 'Varía por zona y temporada. Se repercute al coste.' },
      { trabajo: 'Gestión documental RCDs incluida en reforma Oro', precio: 'Sin cargo adicional', nota: 'La documentación de residuos está incluida en todas las reformas ejecutadas por Oro Constructores.' },
    ],
    preciosContexto: 'El coste de la gestión de residuos varía principalmente por el volumen de escombros, el tipo de material (los inertes clasificados son más baratos que los mixtos), la zona de Madrid donde se coloca el contenedor y el número de vaciados necesarios. En obras de reforma integral de un piso de 80m² es habitual necesitar dos contenedores de 7m³. Las obras con materiales especiales (amianto, pintura de plomo) tienen un coste de gestión significativamente mayor, con mínimos de 500€ independientemente del volumen.',

    errores: [
      { error: 'Verter escombros en contenedor municipal o solar abandonado', consecuencia: 'Es una infracción grave tipificada en la Ley 7/2022 y en la ordenanza municipal de Madrid. Las multas van de 10.000 a 100.000€ para el responsable (propietario o empresa). Además, la administración puede exigir la restitución del espacio afectado a cargo del infractor. Los vertidos ilegales son cada vez más detectados mediante denuncia ciudadana y cámaras municipales.' },
      { error: 'No solicitar permiso de contenedor en vía pública', consecuencia: 'El Ayuntamiento de Madrid puede retirar el contenedor no autorizado y multar al responsable con entre 300 y 3.000€. Además, el contenedor sin permiso no tiene señalización reglamentaria, lo que genera responsabilidad civil en caso de accidente de tráfico o daño a un vehículo.' },
      { error: 'Mezclar residuos especiales (amianto) con escombros ordinarios', consecuencia: 'Contaminación de toda la carga. La planta rechaza el contenedor o cobra tarifa especial. El transportista y el propietario pueden ser denunciados por infracción muy grave bajo el Reglamento de residuos peligrosos. La gestión a posteriori de un contenedor contaminado con amianto puede costar entre 2.000 y 8.000€.' },
      { error: 'No documentar la gestión de residuos al finalizar la obra', consecuencia: 'Sin el certificado de planta autorizada, el propietario no puede acreditar el cumplimiento normativo ante una inspección. En obras con licencia, la falta de documentación de RCDs puede impedir la obtención del certificado final de obra y el registro de la reforma en el catastro.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-file-shield', titulo: 'Documentación sin que el cliente la pida', texto: 'En cada reforma entregamos el certificado de gestión de RCDs con el resumen de la obra. No es algo que el cliente tenga que recordarnos: es parte del proceso estándar. Muchas empresas no lo hacen porque implica coordinación adicional que prefieren evitar.' },
      { icon: 'fa-solid fa-layer-group', titulo: 'Clasificación en origen desde el primer día', texto: 'Separamos los residuos desde la demolición, no al final cuando todo está mezclado. Esto reduce el coste de vertido y maximiza el material que va a reciclaje, cumpliendo los objetivos de valorización que exige la Ley 7/2022.' },
      { icon: 'fa-solid fa-handshake', titulo: 'Una sola empresa para todo', texto: 'El cliente no tiene que buscar empresa de contenedor, solicitar el permiso municipal, coordinar la recogida y pedir el certificado a la planta. Oro Constructores lo gestiona todo desde el presupuesto inicial hasta la entrega de documentación final.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Planificación de residuos en el presupuesto', descripcion: 'Antes de empezar la obra estimamos el volumen de escombros por tipo de trabajo — demolición de tabiques, retirada de pavimento, cambio de instalaciones. Dimensionamos el número de contenedores necesarios y lo incluimos en el presupuesto cerrado.' },
      { numero: '02', titulo: 'Gestión del permiso y colocación', descripcion: 'Solicitamos el permiso de ocupación de vía pública al Ayuntamiento de Madrid cuando el contenedor va a la calle. Coordinamos la fecha de colocación con la empresa transportista para que coincida con el inicio de la demolición.' },
      { numero: '03', titulo: 'Carga y recogida coordinada', descripcion: 'Durante la obra cargamos el contenedor de forma organizada, clasificando por tipo. Cuando está lleno coordinamos la recogida y el segundo vaciado si es necesario, sin interrumpir el ritmo de trabajo.' },
      { numero: '04', titulo: 'Entrega de documentación al cliente', descripcion: 'Al finalizar la obra entregamos al cliente el expediente completo: ticket de planta autorizada, certificado de gestión de RCDs y copia del permiso municipal. El cliente tiene todo lo necesario para acreditar el cumplimiento normativo.' },
    ],

    faq: [
      { pregunta: '¿Necesito permiso para poner un contenedor en la calle en Madrid?', respuesta: 'Sí, siempre que el contenedor ocupe vía pública. El Ayuntamiento de Madrid exige solicitud previa con al menos 5 días hábiles de antelación. Oro Constructores gestiona este permiso como parte del servicio. Si el contenedor va en el interior del edificio (garaje, patio), no es necesario permiso municipal.' },
      { pregunta: '¿Qué tamaño de contenedor necesito para una reforma de baño o cocina?', respuesta: 'Para una reforma de baño o cocina de tamaño medio (6–10m²) suele ser suficiente un contenedor de 3–5m³. Para una reforma integral de piso de 80–100m² se necesitan habitualmente uno o dos contenedores de 7m³. Lo estimamos en el presupuesto con los datos de tu obra.' },
      { pregunta: '¿Puedo tirar muebles viejos en el contenedor de obra?', respuesta: 'Técnicamente sí, pero no es lo más eficiente. Los muebles ocupan mucho volumen y la planta de RCDs los gestiona como residuos mixtos con tarifa más alta. Lo más económico es gestionarlos por separado con el servicio de vaciado de enseres (ver L05), donde se puede aprovechar el valor de recuperación de algunos materiales.' },
      { pregunta: '¿Qué documentación entregáis al final?', respuesta: 'Entregamos el ticket de pesaje de la planta autorizada, el certificado de gestión de RCDs con el desglose por tipo de residuo, y copia del permiso municipal si aplica. Esta documentación es válida para acreditar el cumplimiento ante el Ayuntamiento de Madrid, la Comunidad de Madrid o cualquier aseguradora.' },
      { pregunta: '¿Qué pasa si durante la obra aparecen materiales con amianto?', respuesta: 'Paramos inmediatamente el trabajo en esa zona y activamos el protocolo de residuos especiales. Contactamos con una empresa RERA certificada para el análisis y la retirada. Es un proceso regulado que tiene coste adicional, pero es obligatorio y no admite improvisaciones. Ver el servicio L06 para el detalle completo.' },
    ],

    ctaTitulo: 'La obra termina limpia y con toda la documentación.',
    ctaDescripcion: 'Gestionamos los residuos de tu reforma de principio a fin. Presupuesto cerrado, sin sorpresas.',
  },

  {
    codigo: 'L02',
    slug: 'retirada-escombros-obra-pequena-madrid',
    titulo: 'Retirada de escombros sin contenedor en obra pequeña — Madrid',
    subtitulo: 'Evacuamos los escombros de obras pequeñas en furgoneta, sin contenedor en la calle.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'Para obras de pequeño volumen — reforma de baño sin tocar tabiques, cambio de pavimento en una habitación, reparación de humedades — el contenedor en calle es innecesario y costoso. Oro Constructores retira los escombros directamente en furgoneta o sacos normalizados, los lleva a planta autorizada y entrega el justificante de gestión. Es la solución más ágil para obras que generan menos de 2m³ de residuos.',

    stats: [
      { valor: '< 2m³', label: 'de residuos generan la mayoría de las obras pequeñas de baño o pavimento' },
      { valor: '80–200€', label: 'coste de retirada sin contenedor para obras pequeñas en Madrid' },
      { valor: '5 días hábiles', label: 'de antelación mínima exige el Ayuntamiento de Madrid para solicitar permiso de contenedor en calle' },
    ],

    contexto: 'No toda obra necesita un contenedor de 7m³ en la calle. Para trabajos de reforma parcial — cambio de sanitarios, sustitución de pavimento en una estancia, reparación de grietas o humedades, instalación eléctrica sin demolición — el volumen de residuos es manejable con sacos normalizados o carga directa en furgoneta. En Madrid, colocar un contenedor en vía pública requiere permiso municipal, tasas semanales y señalización reglamentaria. Para obras que terminan en uno o dos días, este proceso es desproporcionado.\n\nLa retirada sin contenedor no significa gestión informal. Los residuos siguen yendo a planta autorizada inscrita en el Registro de la Comunidad de Madrid, y el cliente recibe el mismo justificante de gestión que en una obra grande. La diferencia es logística: en lugar de un contenedor estacionado varios días, hacemos una o dos salidas en furgoneta cargada.\n\nOro Constructores ofrece este servicio integrado en las obras pequeñas que ejecuta, sin que el cliente tenga que coordinar nada adicional. También lo prestamos de forma independiente cuando un particular o una empresa ha generado escombros y necesita retirarlos de forma legal y documentada.',

    perfiles: [
      { tipo: 'Propietario que hace una reforma pequeña', descripcion: 'Ha reformado el baño o cambiado el suelo de una habitación. Le quedan escombros que no puede tirar en el contenedor del edificio ni en el de la calle. Necesita una solución rápida, legal y sin complicaciones. No quiere esperar a la semana siguiente ni pagar por un contenedor grande que no necesita.' },
      { tipo: 'Empresa de reformas que no tiene vehículo de carga', descripcion: 'Pequeñas empresas o autónomos de reformas que hacen trabajos parciales y no tienen logística de residuos propia. Contratan la retirada a Oro Constructores como servicio independiente para cumplir con la normativa sin asumir el coste de tener vehículo y gestión de residuos propios.' },
    ],

    trabajoDetalle: 'La retirada sin contenedor implica cargar los escombros directamente desde el punto de generación hasta el vehículo de transporte. Los residuos se pueden embalar en sacos normalizados de polipropileno (tipo big-bag de 0,5m³) o cargarse a granel en furgoneta con caja cerrada. Los sacos tienen la ventaja de que se pueden ir llenando durante la obra sin interrumpir los trabajos, y se recogen en una sola visita al finalizar.\n\nEl proceso requiere que el acceso al inmueble permita el paso de los sacos cargados: escalera con anchura suficiente, ascensor con capacidad de carga o acceso desde garaje. En edificios sin ascensor y con varios pisos, el coste de mano de obra de bajada de sacos se incluye en el presupuesto. Al igual que con el contenedor, el destino final es siempre una planta de RCDs autorizada, y se emite el mismo justificante de gestión.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Estimación del volumen y planificación', descripcion: 'Antes de la obra estimamos el volumen de escombros a generar según el tipo de trabajo. Dimensionamos el número de sacos o viajes necesarios y lo incluimos en el presupuesto. Para volúmenes inciertos, se puede presupuestar por saco o por m³ transportado.' },
      { numero: '02', titulo: 'Embolsado o carga directa en obra', descripcion: 'Durante la demolición o al finalizar, colocamos los residuos en sacos normalizados clasificando por tipo cuando es posible. Si el acceso lo permite, cargamos directamente en furgoneta sin embolsar para mayor rapidez.' },
      { numero: '03', titulo: 'Bajada y carga en vehículo', descripcion: 'Bajamos los sacos o cargamos la furgoneta con medios propios. En escaleras de difícil acceso usamos carretilla de escaleras o bajamos manualmente. El coste de mano de obra de carga y bajada está incluido en el precio.' },
      { numero: '04', titulo: 'Transporte a planta y entrega de justificante', descripcion: 'Transportamos los residuos a planta de RCDs autorizada y recogemos el ticket de pesaje. Lo entregamos al cliente junto con un albarán de servicio que acredita la gestión correcta de los residuos.' },
    ],

    materiales: [
      { tipo: 'Escombros inertes pequeño volumen (< 1m³)', tecnica: 'Sacos big-bag de 0,5m³', cuandoUsarla: 'Reforma de baño, cambio de pavimento parcial, reparaciones puntuales.' },
      { tipo: 'Escombros inertes volumen medio (1–2m³)', tecnica: 'Furgoneta con caja cerrada', cuandoUsarla: 'Reforma de cocina sin tirar tabiques, rehabilitación de una estancia.' },
      { tipo: 'Residuos mixtos (material de obra + embalajes)', tecnica: 'Carga mixta en furgoneta con separación básica', cuandoUsarla: 'Cuando la obra genera distintos tipos de material en pequeño volumen.' },
      { tipo: 'Tierra y materiales pesados', tecnica: 'Furgoneta reforzada o viajes múltiples', cuandoUsarla: 'Trabajos de solado sobre arena, rebaje de pavimento existente.' },
    ],

    queIncluye: [
      'Estimación del volumen de residuos y planificación logística',
      'Embolsado en sacos normalizados o carga directa según acceso',
      'Mano de obra de carga y bajada desde el piso hasta el vehículo',
      'Transporte a planta de RCDs autorizada inscrita en el Registro de la CM',
      'Ticket de planta y albarán de servicio para el cliente',
    ],
    queNoIncluye: [
      'Residuos especiales con amianto (ver servicio L06)',
      'Muebles y enseres voluminosos (ver servicio L05)',
      'Volúmenes superiores a 2m³ — se recomienda contenedor (ver L01)',
    ],

    precios: [
      { trabajo: 'Retirada hasta 0,5m³ (1 saco big-bag)', precio: '80–120€', nota: 'Sin IVA. Incluye carga, bajada, transporte y justificante de planta.' },
      { trabajo: 'Retirada de 0,5 a 1m³ (2 sacos o carga furgoneta)', precio: '120–180€', nota: 'Sin IVA. Para reformas pequeñas de baño o cocina sin demolición de tabiques.' },
      { trabajo: 'Retirada de 1 a 2m³ (carga furgoneta grande)', precio: '160–250€', nota: 'Sin IVA. Para reformas con pequeña demolición o cambio de pavimento en 20–40m².' },
    ],
    preciosContexto: 'El precio varía principalmente por el volumen de residuos, el número de plantas que hay que bajar los sacos (sin ascensor el coste de mano de obra es mayor) y el tipo de material (los escombros pesados como solados de piedra generan más peso por m³ que los escombros ligeros de tabiquería de pladur). Para volúmenes inciertos, presupuestamos por saco o por viaje de furgoneta.',

    errores: [
      { error: 'Tirar escombros en el contenedor del edificio o en la calle', consecuencia: 'Los contenedores municipales no están autorizados para residuos de construcción. El Ayuntamiento de Madrid puede identificar al infractor y multar con entre 300 y 3.000€ por vertido de RCDs en contenedor de RSU. Además, el administrador de fincas puede reclamar al propietario el sobrecoste de gestión generado a la comunidad.' },
      { error: 'Dejar los sacos de escombros en el portal o en la calle sin recoger', consecuencia: 'Es considerado ocupación irregular de vía pública. El servicio de limpieza puede retirarlos con cargo al propietario y la policía municipal puede levantar acta. En comunidades de vecinos puede generar conflictos y reclamaciones.' },
      { error: 'No documentar la gestión aunque el volumen sea pequeño', descripcion: 'Sin justificante de planta, el propietario no puede acreditar la gestión legal de los residuos ante una inspección. Para obras con licencia municipal, la falta de documentación de RCDs puede bloquear la tramitación final del expediente.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-truck', titulo: 'Sin contenedor en la calle, sin permisos, sin esperas', texto: 'Para obras pequeñas, el proceso de contenedor — solicitud, permiso, señalización, recogida — es más costoso que la propia retirada. Nuestra furgoneta propia elimina todo ese proceso: llegamos, cargamos y lo llevamos a planta el mismo día.' },
      { icon: 'fa-solid fa-file-lines', titulo: 'Documentación igual que en obra grande', texto: 'El justificante de planta autorizada que entregamos a un cliente de obra pequeña es exactamente el mismo que entregamos en una reforma integral. No hay retiradas informales ni gestión sin papeles.' },
      { icon: 'fa-solid fa-calendar-day', titulo: 'Retirada el mismo día o al día siguiente', texto: 'No dejamos los escombros acumulando días en el piso. Planificamos la retirada para que coincida con el final de la demolición o el último día de obra, dejando el espacio limpio y listo para la siguiente fase.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Estimación y presupuesto', descripcion: 'Con los datos del trabajo — tipo de reforma, superficie, materiales a retirar — estimamos el volumen de residuos y el coste de retirada. Lo incluimos en el presupuesto cerrado de la obra o lo presupuestamos como servicio independiente si nos llaman solo para retirar escombros.' },
      { numero: '02', titulo: 'Embolsado durante la obra', descripcion: 'Si somos nosotros quienes hacemos la reforma, vamos embolsando los escombros a medida que avanzamos. Si el cliente tiene ya los escombros acumulados, llegamos, los embolsamos y los bajamos en una sola visita.' },
      { numero: '03', titulo: 'Carga y transporte', descripcion: 'Cargamos la furgoneta o atamos los sacos en la parte trasera y los transportamos directamente a la planta de RCDs autorizada más cercana. El transporte se hace con vehículo tapado para evitar derrames en vía pública.' },
      { numero: '04', titulo: 'Entrega de justificante', descripcion: 'Al finalizar enviamos al cliente el ticket de planta con el peso y tipo de material depositado. Es el documento que acredita la gestión legal de los residuos.' },
    ],

    faq: [
      { pregunta: '¿Puedo llamaros solo para retirar escombros, sin que hayáis hecho la obra?', respuesta: 'Sí. Prestamos el servicio de retirada de escombros de forma independiente para particulares y empresas. Si ya tienes los escombros acumulados en el piso, venimos a buscarlos, los bajamos y los llevamos a planta. Necesitamos saber el volumen aproximado y el número de plantas sin ascensor para presupuestar.' },
      { pregunta: '¿Cuánto tarda en organizarse la retirada?', respuesta: 'Habitualmente podemos organizar la retirada en 24–48 horas desde que confirmamos el pedido. Para obras en curso que gestionamos nosotros, la retirada está planificada desde el inicio.' },
      { pregunta: '¿Cuánto pesa un m³ de escombros?', respuesta: 'Depende del material. Los escombros de cerámica y hormigón pesan entre 1.200 y 1.800 kg/m³. Los escombros de pladur y materiales ligeros pesan entre 400 y 700 kg/m³. Las plantas de RCDs cobran por peso, no por volumen, así que el coste final depende del tipo de material.' },
      { pregunta: '¿Podéis retirar también los embalajes y restos de materiales nuevos?', respuesta: 'Sí, dentro del mismo servicio retiramos embalajes de materiales de construcción (cajas de azulejo, bolsas de cemento, restos de tubería). Si hay cartón, plástico y madera en cantidad, lo separamos para facilitar la gestión en planta.' },
    ],

    ctaTitulo: 'Escombros recogidos hoy. Sin contenedor, sin permisos, con justificante.',
    ctaDescripcion: 'Llámanos o escríbenos por WhatsApp. Presupuesto en el acto.',
  },

  {
    codigo: 'L03',
    slug: 'limpieza-final-obra-madrid',
    titulo: 'Limpieza final de obra en Madrid',
    subtitulo: 'Entregamos el espacio listo para vivir o abrir: sin polvo, sin restos, sin obras.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'La limpieza final de obra es la última fase de cualquier reforma: el momento en que el espacio pasa de estar terminado constructivamente a estar listo para su uso. Elimina el polvo de obra acumulado en superficies, marcos, instalaciones y rincones; retira restos de adhesivo, mortero y pintura de vidrios, grifería y suelos; y deja el espacio en condiciones de entrega. Oro Constructores la incluye en todas sus reformas integrales y la presta como servicio independiente cuando el cliente ha trabajado con otra empresa.',

    stats: [
      { valor: '2–4 horas', label: 'dura de media la limpieza final de un piso de 80m² tras reforma integral' },
      { valor: '150–350€', label: 'coste de la limpieza final como servicio independiente en Madrid' },
      { valor: '100%', label: 'de las reformas integrales de Oro Constructores incluyen limpieza final antes de la entrega' },
    ],

    contexto: 'Una obra genera polvo de obra en cada superficie, incluso en habitaciones que no se han tocado. El polvo de cemento, yeso y escayola es abrasivo y se adhiere a vidrios, espejos, grifería y encimeras si no se retira correctamente. Limpiar una vivienda después de una reforma no es lo mismo que la limpieza doméstica ordinaria: requiere productos específicos para eliminar residuos de construcción sin dañar los acabados nuevos.\n\nEn obras de hostelería, la limpieza final es también una exigencia sanitaria. Antes de la inspección de apertura, el local debe estar sin rastro de obra: sin polvo en cocinas, sin restos de adhesivo en barras, sin manchas de pintura en equipamiento. La limpieza post-obra en hostelería suele incluir zonas de cocina y almacenamiento donde el estándar de limpieza es más exigente.\n\nOro Constructores realiza la limpieza final con medios propios como parte del proceso de entrega. No subcontratamos empresas de limpieza externas para esta fase: el mismo equipo que ha ejecutado la obra conoce los puntos de riesgo — donde puede quedar mortero en la grifería, dónde el azulejo nuevo necesita tratamiento especial — y los afronta correctamente.',

    perfiles: [
      { tipo: 'Propietario que recibe la vivienda tras reforma integral', descripcion: 'Ha estado fuera durante las obras y quiere entrar en una vivienda lista para vivir, no en una obra recién terminada. No tiene tiempo ni medios para limpiar los restos de obra él mismo. Espera que la empresa de reformas entregue el espacio impecable, no solo constructivamente terminado.' },
      { tipo: 'Propietario de local que ha contratado otra empresa de obras', descripcion: 'Ha trabajado con una constructora que no incluye limpieza final en su servicio. Necesita que el local quede listo para la apertura o para la visita del inspector sanitario. Contrata la limpieza final a Oro Constructores como servicio independiente.' },
    ],

    trabajoDetalle: 'La limpieza final de obra tiene tres fases diferenciadas. La primera es la limpieza gruesa: retirada de restos de obra que quedan tras la evacuación de escombros — bolsas de cemento vacías, retales de cable, embalajes de material, restos de silicona, cinta adhesiva de protección. La segunda es la limpieza de polvo de obra: aspirado y fregado de todas las superficies horizontales y verticales, limpieza de marcos, puertas, rodapiés, enchufes e interruptores. La tercera es el acabado fino: eliminación de restos de adhesivo y mortero en vidrios y sanitarios, limpieza de grifería y herrajes con producto no abrasivo, repaso de rincones y juntas.\n\nEl orden importa. No se puede fregar el suelo antes de limpiar el techo y las paredes, porque el polvo que cae arruina lo que ya se ha limpiado. Un proceso mal secuenciado obliga a repetir fases y alarga el tiempo de trabajo. Oro Constructores sigue una secuencia de arriba hacia abajo y del fondo hacia la salida, que garantiza que cada superficie se limpia una sola vez.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Retirada de restos de obra y protecciones', descripcion: 'Retiramos plásticos de protección, cintas adhesivas, embalajes de materiales, sacos vacíos y cualquier elemento de obra que quede en el espacio. Esta fase prepara el terreno para la limpieza de polvo sin mezclar residuos sólidos con polvo.' },
      { numero: '02', titulo: 'Limpieza de polvo en techos, paredes y carpinterías', descripcion: 'Aspiramos y limpiamos de arriba hacia abajo: techo, cornisas, marcos de ventanas y puertas, puertas, zócalos y rodapiés. El polvo de obra es abrasivo — usamos paños húmedos y no materiales abrasivos para no rayar los acabados nuevos.' },
      { numero: '03', titulo: 'Limpieza de suelos y sanitarios', descripcion: 'Fregamos los suelos con producto adecuado al tipo de pavimento. En sanitarios limpiamos el interior de la bañera o plato de ducha, el inodoro y el lavabo, retirando restos de adhesivo de silicona y mortero que hayan quedado en las juntas o en la grifería.' },
      { numero: '04', titulo: 'Acabado fino: vidrios, grifería y herrajes', descripcion: 'Limpiamos vidrios y espejos con producto específico para eliminar el velo de polvo de obra sin dejar rayaduras. Limpiamos grifería y herrajes con producto no abrasivo. Repasamos juntas de azulejo donde haya quedado lechada superficial.' },
    ],

    materiales: [
      { tipo: 'Polvo de obra en superficies horizontales', tecnica: 'Aspirado + fregado con producto neutro', cuandoUsarla: 'Todas las obras. El polvo de yeso y cemento daña los suelos nuevos si se frota en seco.' },
      { tipo: 'Restos de adhesivo en azulejos y vidrios', tecnica: 'Espátula de plástico + disolvente específico', cuandoUsarla: 'Tras alicatado o colocación de carpinterías. No usar cuchillas metálicas en vidrio tintado.' },
      { tipo: 'Lechada superficial en juntas de azulejo', tecnica: 'Paño húmedo en las primeras 24h; ácido diluido si ha fraguado', cuandoUsarla: 'Habitualmente al día siguiente del rejuntado. La lechada fraguada requiere producto ácido diluido con precaución.' },
      { tipo: 'Pintura en vidrios y carpinterías', tecnica: 'Cuchilla de pintor + disolvente agua o aguarrás según tipo de pintura', cuandoUsarla: 'Cuando el equipo de pintura no ha protegido correctamente los vidrios.' },
      { tipo: 'Cal y mortero en grifería y sanitarios', tecnica: 'Producto descalcificante + paño suave', cuandoUsarla: 'Grifería instalada antes de los trabajos de alicatado o enfoscado.' },
    ],

    queIncluye: [
      'Retirada de plásticos de protección, cintas y embalajes de materiales',
      'Limpieza de polvo de obra en techos, paredes, carpinterías y rodapiés',
      'Fregado de suelos con producto adecuado al tipo de pavimento',
      'Limpieza de sanitarios (bañera, plato de ducha, inodoro, lavabo)',
      'Eliminación de restos de adhesivo y lechada en azulejos y vidrios',
      'Limpieza de grifería y herrajes con producto no abrasivo',
      'Limpieza de vidrios interiores con producto específico',
    ],
    queNoIncluye: [
      'Limpieza de fachada exterior o zonas comunes del edificio',
      'Limpieza de muebles o electrodomésticos que el cliente haya introducido después de la obra',
      'Limpieza de alfombras o tapicerías (requiere empresa especializada)',
    ],

    precios: [
      { trabajo: 'Limpieza final incluida en reforma integral Oro', precio: 'Sin cargo adicional', nota: 'Forma parte del proceso estándar de entrega de obra.' },
      { trabajo: 'Limpieza final servicio independiente — piso hasta 60m²', precio: '150–220€', nota: 'Sin IVA. Para reformas parciales o cuando el cliente ha trabajado con otra empresa.' },
      { trabajo: 'Limpieza final servicio independiente — piso 60–100m²', precio: '200–300€', nota: 'Sin IVA. Reforma integral o reforma de varios baños y cocina.' },
      { trabajo: 'Limpieza final local hostelería (cocina + sala)', precio: '250–400€', nota: 'Sin IVA. Estándar sanitario. Incluye cocina industrial y zona de almacenamiento.' },
    ],
    preciosContexto: 'El coste varía según la superficie, el estado del espacio tras la obra (una obra bien gestionada genera menos restos que limpiar), el tipo de pavimento y si hay zonas de cocina industrial que requieren mayor dedicación. Las obras con mucho trabajo de azulejos o alicatado dejan más lechada superficial que limpiar. En locales de hostelería el estándar de limpieza es más exigente y el tiempo de trabajo mayor.',

    errores: [
      { error: 'Entregar la obra sin limpieza final o con limpieza superficial', consecuencia: 'El cliente percibe la obra como no terminada aunque constructivamente esté correcta. El polvo de obra sobre los suelos nuevos, la lechada en los azulejos o las manchas de pintura en los vidrios generan reclamaciones y reparaciones que cuestan más que haber hecho la limpieza desde el principio. Una entrega sucia deteriora la relación con el cliente y daña la reputación.' },
      { error: 'Fregar el suelo nuevo antes de limpiar techos y paredes', consecuencia: 'El polvo que cae de techos y paredes durante la limpieza cae sobre el suelo ya fregado, obligando a repetir la operación. Un proceso mal secuenciado multiplica el tiempo de trabajo y puede generar rayaduras si se frota polvo abrasivo sobre pavimento ya húmedo.' },
      { error: 'Usar productos abrasivos en acabados nuevos', consecuencia: 'Los polvos de limpieza abrasivos, las estropajos de metal y los productos ácidos sin diluir pueden rayar azulejos nuevos, dañar la grifería de latón o atacar el silicona recién aplicado. Los daños en acabados nuevos durante la limpieza son responsabilidad de quien hace la limpieza.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-broom', titulo: 'La limpieza la hace el mismo equipo que ha hecho la obra', texto: 'No subcontratamos una empresa de limpieza externa que no sabe lo que hay debajo de cada protección o qué producto usar en cada acabado. El equipo que ha construido la obra conoce cada rincón y cada material, y limpia con conocimiento de causa.' },
      { icon: 'fa-solid fa-star', titulo: 'Entrega al nivel de obra nueva', texto: 'El estándar de entrega de Oro Constructores es que el cliente entre en su espacio y no perciba que ha habido una obra. Polvo cero, restos cero, manchas cero. Es lo mínimo que se puede esperar de una reforma bien hecha.' },
      { icon: 'fa-solid fa-clock', titulo: 'Limpieza incluida en el plazo acordado', texto: 'No añadimos días extra para la limpieza. La planificamos dentro del plazo de obra para que la entrega sea en la fecha acordada, con el espacio limpio y en condiciones de uso inmediato.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Planificación en el calendario de obra', descripcion: 'La limpieza final se planifica en el último día o los últimos dos días de obra, después de que todos los trabajos constructivos estén terminados. No se hace con obra en curso porque sería inútil.' },
      { numero: '02', titulo: 'Retirada de protecciones y restos', descripcion: 'Empezamos retirando todos los elementos de protección: plásticos en suelos, cintas en carpinterías, protecciones en sanitarios. Después recogemos los restos de materiales y embalajes que no se hayan evacuado aún.' },
      { numero: '03', titulo: 'Limpieza de arriba abajo', descripcion: 'Seguimos la secuencia correcta: techo y cornisas primero, luego paredes y carpinterías, después mobiliario fijo instalado, finalmente suelos. Cada estancia se termina completamente antes de pasar a la siguiente.' },
      { numero: '04', titulo: 'Revisión final y entrega', descripcion: 'Hacemos una revisión con el responsable de obra antes de llamar al cliente para la entrega. Repasamos puntos críticos: vidrios, grifería, juntas de azulejo. Solo cuando todo está correcto convocamos la visita de entrega.' },
    ],

    faq: [
      { pregunta: '¿La limpieza final está incluida en el precio de la reforma?', respuesta: 'En todas las reformas ejecutadas por Oro Constructores, la limpieza final está incluida en el precio. No hay coste adicional. Si nos llamas solo para la limpieza final de una obra que ha hecho otra empresa, la presupuestamos como servicio independiente.' },
      { pregunta: '¿Cuándo se hace la limpieza final?', respuesta: 'Se hace cuando todos los trabajos constructivos están terminados: pintura seca, silicona curada, grifería instalada, suelo terminado. No tiene sentido limpiar con obra en curso. En una reforma de 3 semanas, la limpieza es el penúltimo o último día.' },
      { pregunta: '¿Qué pasa con los restos de lechada en los azulejos?', respuesta: 'La lechada superficial en azulejos se elimina mejor en las primeras 24 horas después del rejuntado, con paño húmedo. Si ha fraguado, hay que usar producto ácido diluido con mucho cuidado para no dañar las juntas. Si el alicatador ha dejado lechada sin limpiar varios días, la limpieza es más laboriosa pero se puede resolver.' },
      { pregunta: '¿Podéis hacer la limpieza de un local de hostelería antes de la apertura?', respuesta: 'Sí, es uno de los servicios que más prestamos. La limpieza de un local de hostelería antes de la inspección sanitaria o de la apertura requiere atención especial en cocina: sin grasa en campanas, sin polvo en conducciones, sin restos de obra en zona de preparación de alimentos. Lo hacemos con el estándar que exige la normativa sanitaria.' },
    ],

    ctaTitulo: 'La reforma termina cuando el espacio está listo para usarse.',
    ctaDescripcion: 'Limpieza final incluida en todas nuestras reformas. Sin sorpresas.',
  },

  {
    codigo: 'L04',
    slug: 'gestion-documental-rcds-madrid',
    titulo: 'Gestión documental de residuos RCDs en Madrid',
    subtitulo: 'Toda la documentación de residuos de obra en regla, sin que el cliente tenga que ocuparse.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'La Ley 7/2022 y el Real Decreto 105/2008 obligan a elaborar un Plan de Gestión de RCDs antes de iniciar cualquier obra que genere más de una tonelada de residuos, y a acreditar documentalmente que esos residuos han llegado a una planta autorizada. Oro Constructores gestiona toda esta documentación como parte de cada reforma: Plan de Gestión previo, seguimiento en obra, certificados de planta y entrega del expediente completo al cliente.',

    stats: [
      { valor: 'RD 105/2008', label: 'obliga a elaborar Plan de Gestión de RCDs en obras con más de 1 tonelada de residuos' },
      { valor: '45.000€', label: 'multa máxima por incumplimiento grave de la normativa de gestión de RCDs en Madrid' },
      { valor: '8 categorías', label: 'de residuos de construcción diferenciadas en la clasificación oficial europea (Lista Europea de Residuos)' },
    ],

    contexto: 'El marco normativo de los residuos de construcción y demolición en España es uno de los más exigentes de Europa. El Real Decreto 105/2008 establece que el productor de residuos — en la práctica, el promotor o propietario — es responsable de elaborar un Plan de Gestión de RCDs antes del inicio de las obras y de garantizar que los residuos generados llegan a instalaciones autorizadas. La Ley 7/2022 de residuos y suelos contaminados reforzó estas obligaciones e incorporó objetivos de valorización: en 2025, al menos el 70% en peso de los RCDs no peligrosos deben ser preparados para la reutilización o reciclado. En Madrid capital, el Ayuntamiento puede exigir la presentación del Plan de Gestión junto con la solicitud de licencia de obra mayor.\n\nEl incumplimiento de la normativa de RCDs tiene consecuencias en dos ámbitos. Administrativamente, las sanciones van de 300€ por infracciones leves hasta 45.000€ por infracciones graves, con posibilidad de inhabilitación para contratar con la Administración. En el ámbito civil, la falta de documentación puede bloquear el certificado final de obra, impedir la inscripción registral de reformas y generar problemas con las aseguradoras en caso de siniestro en la vivienda.\n\nOro Constructores trata la documentación de RCDs como parte del proceso de obra, no como un trámite adicional. Generamos el Plan de Gestión antes de empezar, hacemos el seguimiento durante la ejecución y entregamos el expediente completo con los certificados de planta al finalizar. Es un servicio invisible para el cliente porque lo integramos en nuestro flujo de trabajo, pero tiene valor real en caso de inspección o tramitación posterior.',

    perfiles: [
      { tipo: 'Promotor de obra que tramita licencia mayor', descripcion: 'Necesita el Plan de Gestión de RCDs para adjuntarlo a la solicitud de licencia en el Ayuntamiento de Madrid. Si no lo presenta, la licencia no se concede. Busca una empresa que lo elabore correctamente y que después cumpla lo que dice el Plan durante la ejecución de la obra.' },
      { tipo: 'Propietario particular que reforma sin licencia', descripcion: 'Aunque no tramite licencia, sigue siendo responsable de la gestión de los residuos. Si en una inspección posterior no puede acreditar que los RCDs de su reforma se gestionaron correctamente, puede ser sancionado. La documentación que entregamos le cubre ante esa contingencia.' },
    ],

    trabajoDetalle: 'El Plan de Gestión de RCDs es un documento técnico que describe la estimación del volumen y tipo de residuos que va a generar la obra, los procedimientos de clasificación en origen, los transportistas autorizados que se van a usar y las plantas de destino. Debe elaborarse antes del inicio de la obra y, en obras con licencia mayor en Madrid, presentarse al Ayuntamiento. El Plan no es un formulario estándar: debe adaptarse a cada obra porque el tipo y volumen de residuos depende del tipo de trabajo.\n\nLa documentación de seguimiento se genera durante la obra: albaranes de transporte, tickets de pesaje en planta, anotaciones de volúmenes clasificados. Al finalizar, con todos estos documentos, se elabora el certificado de gestión de RCDs que acredita que el Plan se ha cumplido. Este certificado es el que el promotor archiva y presenta ante cualquier requerimiento administrativo posterior.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Estimación de residuos y redacción del Plan', descripcion: 'Antes de iniciar la obra estimamos el tipo y volumen de residuos por unidades de obra: cuánto escombro de tabiquería, cuánto de solado, cuánto de instalaciones. Redactamos el Plan de Gestión de RCDs con la clasificación según la Lista Europea de Residuos (LER) y los gestores autorizados previstos.' },
      { numero: '02', titulo: 'Presentación a la administración cuando aplica', descripcion: 'En obras con licencia mayor en Madrid capital, adjuntamos el Plan de Gestión de RCDs a la documentación de solicitud de licencia. Coordinamos con el arquitecto director de obra cuando hay proyecto técnico de por medio.' },
      { numero: '03', titulo: 'Seguimiento documental durante la obra', descripcion: 'Conservamos los albaranes de transporte y los tickets de pesaje de cada carga que sale de la obra. Registramos los volúmenes clasificados por tipo para acreditar el cumplimiento de los objetivos de valorización.' },
      { numero: '04', titulo: 'Elaboración y entrega del certificado final', descripcion: 'Al finalizar la obra, consolidamos toda la documentación de seguimiento en el certificado de gestión de RCDs: volúmenes por tipo, plantas de destino, pesos acreditados. Lo entregamos al cliente junto con la liquidación de la obra.' },
    ],

    materiales: [
      { tipo: 'Residuos inertes (LER 17 01)', tecnica: 'Gestión en planta de RCDs autorizada', cuandoUsarla: 'Hormigón, ladrillos, tejas, cerámica, piedra. La categoría más voluminosa en reformas de vivienda.' },
      { tipo: 'Residuos de madera, vidrio y plástico (LER 17 02)', tecnica: 'Punto limpio o gestor autorizado', cuandoUsarla: 'Carpinterías retiradas, embalajes, restos de instalaciones.' },
      { tipo: 'Residuos metálicos (LER 17 04)', tecnica: 'Chatarrero o punto limpio', cuandoUsarla: 'Ferralla, tuberías de cobre y acero, perfiles metálicos. Tienen valor de recuperación.' },
      { tipo: 'Residuos peligrosos (LER 17 06)', tecnica: 'Gestor de residuos peligrosos autorizado', cuandoUsarla: 'Materiales con amianto (uralita, fibrocemento), pinturas con plomo, tierras contaminadas. Ver L06.' },
      { tipo: 'Residuos mixtos sin clasificar (LER 17 09)', tecnica: 'Planta de RCDs con triaje', cuandoUsarla: 'Cuando la clasificación en obra no es viable. Tarifa más alta y menor valorización.' },
    ],

    queIncluye: [
      'Elaboración del Plan de Gestión de RCDs previo al inicio de obra',
      'Clasificación de residuos por categorías LER en el Plan',
      'Seguimiento documental durante la ejecución: albaranes y tickets de planta',
      'Certificado de gestión de RCDs al finalizar la obra',
      'Asesoramiento sobre obligaciones normativas del promotor',
    ],
    queNoIncluye: [
      'Honorarios de arquitecto o aparejador cuando la obra requiere proyecto técnico',
      'Tasas administrativas de tramitación de licencia (son tasas municipales)',
      'Gestión de residuos peligrosos con amianto (ver L06 — requiere empresa RERA)',
    ],

    precios: [
      { trabajo: 'Gestión documental incluida en reforma Oro', precio: 'Sin cargo adicional', nota: 'Incluida en todas las obras ejecutadas por Oro Constructores.' },
      { trabajo: 'Plan de Gestión de RCDs independiente (obra sin licencia)', precio: '150–350€', nota: 'Para promotores que necesitan el Plan sin que Oro ejecute la obra.' },
      { trabajo: 'Plan de Gestión de RCDs para obra con licencia mayor', precio: '300–600€', nota: 'Coordinado con el equipo técnico. Precio varía según complejidad de la obra.' },
    ],
    preciosContexto: 'El coste de la gestión documental de RCDs como servicio independiente depende de la complejidad de la obra, el número de categorías de residuos y si hay que coordinarse con un arquitecto para la tramitación de licencia. En obras ejecutadas por Oro Constructores, este servicio está incluido en el precio de la reforma porque lo integramos en nuestro proceso estándar sin coste adicional de gestión.',

    errores: [
      { error: 'No elaborar el Plan de Gestión de RCDs antes de iniciar la obra', consecuencia: 'En obras con licencia, la administración puede paralizar la obra al no poder acreditar el Plan. En obras sin licencia, la falta del Plan es una infracción administrativa. Si durante la obra hay una inspección, el promotor no puede demostrar que la gestión de residuos está planificada, lo que agrava la sanción.' },
      { error: 'Conservar solo el ticket de planta sin llevar seguimiento durante la obra', consecuencia: 'El Plan de Gestión de RCDs exige acreditar no solo el destino final de los residuos, sino también los procedimientos de clasificación durante la obra. Un ticket de planta solo prueba que algo llegó allí, no que la clasificación se hizo correctamente. En una inspección detallada, esto puede considerarse cumplimiento incompleto.' },
      { error: 'No entregar el expediente de RCDs al cliente al finalizar la obra', consecuencia: 'El cliente pierde la documentación que le protege ante futuras inspecciones, litigios con vecinos por daños o trámites de venta o herencia de la vivienda. Reconstruir la documentación años después de la obra es difícil o imposible.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-folder-open', titulo: 'Expediente completo al finalizar', texto: 'Al cerrar cada obra entregamos al cliente un expediente que incluye el Plan de Gestión, los albaranes de transporte y el certificado de planta. No hay que pedírnoslo: es parte de la liquidación estándar de la obra.' },
      { icon: 'fa-solid fa-scale-balanced', titulo: 'Conocemos la normativa de Madrid', texto: 'La normativa de RCDs tiene matices entre obras con licencia y sin licencia, entre la normativa estatal y la municipal de Madrid capital, y entre las distintas categorías de residuos. Llevamos años gestionando esta documentación y sabemos qué exige cada tipo de obra.' },
      { icon: 'fa-solid fa-shield-halved', titulo: 'El cliente queda protegido', texto: 'La documentación que entregamos protege al cliente ante inspecciones, reclamaciones de vecinos, trámites con aseguradoras y futuras transmisiones de la vivienda. No es solo un papel: es la prueba de que la obra se hizo bien y de forma legal.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Análisis de la obra y estimación de residuos', descripcion: 'Antes de presupuestar la obra, identificamos los trabajos que van a generar residuos y estimamos el volumen y tipo por categorías LER. Esto permite dimensionar correctamente el Plan de Gestión.' },
      { numero: '02', titulo: 'Redacción del Plan y gestores autorizados', descripcion: 'Redactamos el Plan de Gestión de RCDs con la identificación de los gestores autorizados que vamos a usar: planta de RCDs para inertes, gestor de peligrosos para especiales si aplica. El Plan es el documento que entregamos antes de empezar.' },
      { numero: '03', titulo: 'Seguimiento y archivo durante la obra', descripcion: 'Durante la ejecución archivamos cada albarán de transporte y cada ticket de planta. Este seguimiento documental es la prueba de que el Plan se está cumpliendo, no solo de que existe.' },
      { numero: '04', titulo: 'Certificado final y entrega al cliente', descripcion: 'Al finalizar consolidamos la documentación en el certificado de gestión de RCDs y lo entregamos junto con la liquidación de la obra. El cliente recibe todo en formato digital y papel.' },
    ],

    faq: [
      { pregunta: '¿Qué es el Plan de Gestión de RCDs y quién tiene que hacerlo?', respuesta: 'El Plan de Gestión de RCDs es un documento que debe elaborar el productor de los residuos — en la práctica, el promotor o propietario — antes de iniciar la obra. Describe los tipos de residuos que va a generar, cómo se van a clasificar y a qué instalaciones autorizadas van a ir. El Real Decreto 105/2008 lo exige para obras que generen más de una tonelada de residuos.' },
      { pregunta: '¿Necesito el Plan si mi reforma no tiene licencia?', respuesta: 'Sí. La obligación de gestionar correctamente los RCDs no depende de que la obra tenga o no licencia de obras. Depende del volumen de residuos generado. Si tu reforma genera más de una tonelada de escombros — lo que ocurre con facilidad en una reforma de baño o cocina — el Plan es obligatorio independientemente de si tienes licencia.' },
      { pregunta: '¿Para qué sirve el certificado de gestión de RCDs que entregáis?', respuesta: 'El certificado acredita que los residuos generados en tu obra han llegado a una planta autorizada y que la gestión se ha hecho conforme a la normativa. Sirve para acreditar el cumplimiento ante una inspección administrativa, para trámites con el Ayuntamiento (certificado final de obra), para el seguro de la vivienda y para la transmisión de la propiedad.' },
      { pregunta: '¿Podéis elaborar el Plan si la obra la hace otra empresa?', respuesta: 'Sí, lo elaboramos como servicio independiente. En ese caso necesitamos información detallada sobre los trabajos a realizar, los materiales actuales y la superficie. Coordinamos con el arquitecto si hay proyecto técnico.' },
    ],

    ctaTitulo: 'Tu reforma cumple con la normativa de residuos desde el primer día.',
    ctaDescripcion: 'Plan de Gestión, seguimiento y certificado final incluidos en todas nuestras obras.',
  },

  {
    codigo: 'L05',
    slug: 'retirada-muebles-enseres-madrid',
    titulo: 'Retirada de muebles y enseres en Madrid',
    subtitulo: 'Vaciamos el piso antes de la reforma. Rápido, sin traslados para el cliente.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'Antes de empezar una reforma integral es habitual necesitar vaciar el espacio: retirar muebles antiguos, electrodomésticos, enseres acumulados durante años. Oro Constructores ofrece el vaciado de piso como servicio previo a la reforma, coordinado con el inicio de los trabajos para que el equipo de obra encuentre el espacio libre desde el primer día. También se presta como servicio independiente para pisos heredados, propiedades de alquiler o locales que cambian de uso.',

    stats: [
      { valor: '200–500€', label: 'coste de vaciado de piso de 60–90m² en Madrid' },
      { valor: '1–2 días', label: 'tiempo necesario para vaciar un piso con contenido completo en Madrid' },
      { valor: '4 vías', label: 'de destino de los enseres: donación, venta, reciclaje y vertedero autorizado' },
    ],

    contexto: 'El vaciado de un piso antes de una reforma es un trabajo físicamente intenso que implica desmontar muebles, bajar decenas de objetos por escalera, clasificar lo que tiene valor y lo que no, y gestionar la retirada de cada categoría de enseres de forma correcta. Muchos propietarios lo intentan hacer ellos mismos y lo subestiman: un piso de 80m² con mobiliario completo puede tener entre 3 y 8 toneladas de contenido, y su retirada ocupa entre 1 y 3 días de trabajo a varias personas.\n\nEn Madrid existe el servicio municipal de recogida de muebles y enseres voluminosos, pero tiene limitaciones: se recoge en la calle, hay que bajarlo todo, el plazo puede ser de varios días y no admite grandes volúmenes. Para un vaciado completo de piso antes de una reforma, este servicio no es una solución real. La alternativa eficiente es una empresa que coordine la bajada, clasifique y gestione cada tipo de objeto por el canal correcto.\n\nOro Constructores integra el vaciado como servicio previo a la reforma cuando el cliente lo necesita. Lo coordinamos para que el piso esté vacío la víspera del inicio de la obra, sin que el cliente tenga que organizar nada. También lo prestamos de forma independiente: pisos heredados que hay que vaciar antes de reformar o vender, locales que cambian de uso, propiedades de alquiler entre inquilinos.',

    perfiles: [
      { tipo: 'Propietario que va a hacer una reforma integral', descripcion: 'Tiene el piso con mobiliario antiguo que no quiere en la nueva reforma. No quiere ni trasladar ni almacenar los muebles: prefiere que desaparezcan antes de que empiece la obra. Necesita que el vaciado se coordine con el inicio de los trabajos para no tener el piso vacío semanas antes.' },
      { tipo: 'Heredero que necesita vaciar un piso antes de venderlo', descripcion: 'Ha heredado un piso con décadas de contenido acumulado. No tiene tiempo de organizarlo él mismo, no quiere guardar casi nada y necesita que el proceso sea rápido y legal. Le preocupa qué hacer con los objetos de valor y cómo gestionar lo que no sirve.' },
    ],

    trabajoDetalle: 'El vaciado de un piso implica trabajar en cuatro flujos paralelos: objetos con valor de reventa o donación, objetos reciclables por categoría (metales, electrónica, ropa), muebles y voluminosos que van a planta de RCDs o punto limpio, y residuos ordinarios. Hacer todos estos flujos bien requiere clasificar mientras se baja, no después. Si todo va mezclado al contenedor, el coste aumenta y se pierde el valor de recuperación de lo que podría donarse o venderse.\n\nEl volumen es el factor más determinante del tiempo y el coste. Un piso de 60m² con mobiliario básico puede vaciarse en medio día con dos personas. Un piso de 100m² con décadas de acumulación puede necesitar dos días y un equipo de tres o cuatro personas. La presencia de sótano o trastero multiplica el tiempo de trabajo. En pisos sin ascensor, la bajada manual de muebles grandes (armarios, sofás, camas de matrimonio) requiere experiencia y a veces desmontaje previo.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Visita de valoración y presupuesto', descripcion: 'Visitamos el piso antes de presupuestar. El volumen de contenido, el número de plantas sin ascensor y el estado de los objetos determinan el coste. En la visita identificamos si hay algún objeto de valor que el cliente quiera conservar o gestionar de forma diferente.' },
      { numero: '02', titulo: 'Clasificación durante el vaciado', descripcion: 'Durante el vaciado clasificamos los objetos: lo que el cliente quiere conservar (lo apilamos en zona acordada o lo bajamos a un vehículo), lo que puede donarse a ONG o centros sociales, lo reciclable por categorías, y lo que va a planta de residuos. Esta clasificación reduce el coste de gestión y maximiza la reutilización.' },
      { numero: '03', titulo: 'Bajada y carga en vehículo o contenedor', descripcion: 'Bajamos todo el contenido, ya sea a furgoneta para retiradas parciales o a contenedor colocado en la calle para volúmenes grandes. Los muebles grandes que no pasan por escalera se desmontan antes de bajar.' },
      { numero: '04', titulo: 'Gestión por destino y justificante', descripcion: 'Llevamos cada categoría a su destino: planta de RCDs, punto limpio, chatarrero o donación. Entregamos al cliente el justificante de gestión de los residuos llevados a planta y la confirmación de donación cuando aplica.' },
    ],

    materiales: [
      { tipo: 'Muebles de madera (armarios, camas, sofás)', tecnica: 'Contenedor de voluminosos o planta de RCDs', cuandoUsarla: 'La mayoría del volumen de un vaciado de piso estándar.' },
      { tipo: 'Electrodomésticos (nevera, lavadora, horno)', tecnica: 'Punto limpio o gestor de RAEE autorizado', cuandoUsarla: 'Los electrodomésticos son RAEE (Residuos de Aparatos Eléctricos y Electrónicos) con obligación legal de gestión específica.' },
      { tipo: 'Electrónica, informática y pequeño electrodoméstico', tecnica: 'Punto limpio RAEE', cuandoUsarla: 'Televisores, ordenadores, impresoras. Contienen componentes peligrosos que no pueden ir a vertedero.' },
      { tipo: 'Ropa, libros, menaje en buen estado', tecnica: 'Donación a ONG o centros sociales', cuandoUsarla: 'Cuando el material está en condiciones de uso. Reducimos el volumen a planta y generamos valor social.' },
      { tipo: 'Metales (ferralla, herramientas, tuberías viejas)', tecnica: 'Chatarrero', cuandoUsarla: 'Tienen valor de recuperación. Separarlos reduce el coste neto de gestión.' },
    ],

    queIncluye: [
      'Visita de valoración previa y presupuesto cerrado',
      'Mano de obra de desmontaje de muebles grandes cuando es necesario',
      'Bajada de todo el contenido desde el piso al vehículo o contenedor',
      'Clasificación por destino: donación, reciclaje, planta de residuos',
      'Transporte a planta autorizada, chatarrero o punto limpio según categoría',
      'Justificante de gestión de residuos entregado al cliente',
    ],
    queNoIncluye: [
      'Gestión de residuos especiales con amianto (ver L06)',
      'Almacenaje o mudanza de objetos que el cliente quiere conservar (se puede añadir)',
      'Limpieza final del piso vacío (se puede añadir como servicio L03)',
    ],

    precios: [
      { trabajo: 'Vaciado parcial (habitación o zona específica)', precio: '150–300€', nota: 'Sin IVA. Para limpiezas puntuales o preparación de una zona.' },
      { trabajo: 'Vaciado de piso completo hasta 60m²', precio: '200–350€', nota: 'Sin IVA. Con ascensor y contenido estándar.' },
      { trabajo: 'Vaciado de piso completo 60–100m²', precio: '300–500€', nota: 'Sin IVA. Con ascensor. Sin ascensor añadir 100–200€.' },
      { trabajo: 'Vaciado de piso grande o con sótano/trastero', precio: '500–900€', nota: 'Sin IVA. Presupuesto cerrado tras visita previa.' },
      { trabajo: 'Vaciado de local comercial o almacén', precio: 'Presupuesto a medida', nota: 'Varía mucho según el tipo de contenido y el acceso.' },
    ],
    preciosContexto: 'El coste del vaciado depende principalmente del volumen de contenido, el número de plantas sin ascensor y el tipo de objetos — los electrodomésticos y los muebles grandes requieren más mano de obra que objetos pequeños. Los pisos sin ascensor de más de tres plantas con muebles grandes son los casos más costosos en mano de obra. La clasificación correcta puede reducir el coste neto porque el valor del metal y de los RAEE recuperados puede descontarse del precio.',

    errores: [
      { error: 'Tirar electrodomésticos en el contenedor de obra o municipal', consecuencia: 'Los electrodomésticos son RAEE y tienen prohibición expresa de ir a vertedero sin tratamiento previo. Su eliminación incorrecta es una infracción grave bajo la normativa de RAEE (RD 110/2015). El propietario puede ser sancionado, y los componentes peligrosos (gases refrigerantes, mercurio, baterías) generan daños ambientales que no están cubiertos por los seguros.' },
      { error: 'Tirar todo sin clasificar por ganar tiempo', consecuencia: 'Mezclar madera, metales, electrodomésticos y ropa en un único contenedor encarece la gestión en planta y destruye el valor de recuperación de los materiales reciclables. En un vaciado grande, la diferencia entre clasificar y no clasificar puede suponer 100–300€ adicionales en tasas de planta.' },
      { error: 'No hacer visita previa y presupuestar por metros cuadrados sin ver el contenido', consecuencia: 'El volumen real de un piso puede variar enormemente según la acumulación de décadas. Un piso de 80m² puede estar casi vacío o puede tener sótano, trastero y 40 años de objetos. Sin visita previa, cualquier presupuesto es una estimación que puede quedar muy lejos de la realidad.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-arrows-down-to-line', titulo: 'Lo bajamos, lo clasificamos y lo gestionamos', texto: 'No dejamos el trabajo a medias. Bajamos todo, clasificamos por destino, coordinamos el transporte a cada tipo de instalación y entregamos el justificante de gestión. El cliente no tiene que hacer ninguna gestión adicional.' },
      { icon: 'fa-solid fa-calendar-check', titulo: 'Coordinado con el inicio de la reforma', texto: 'Cuando el vaciado es previo a una reforma que también ejecutamos nosotros, coordinamos las fechas para que el piso esté vacío el día anterior al inicio de la obra. Sin días de espera, sin piso vacío semanas antes.' },
      { icon: 'fa-solid fa-recycle', titulo: 'Clasificación que reduce el coste neto', texto: 'Separamos metales, electrónica y material donable antes de cargar. El valor de recuperación de lo que va a chatarrero o donación puede compensar parte del coste del servicio. Lo hacemos porque es lo correcto, no solo para reducir el precio.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Visita y presupuesto cerrado', descripcion: 'Visitamos el piso antes de presupuestar. En la visita evaluamos el volumen, el tipo de contenido, el acceso (ascensor, escalera, rampa) y el estado general. Con esta información elaboramos un presupuesto cerrado sin sorpresas.' },
      { numero: '02', titulo: 'Planificación del vaciado', descripcion: 'Acordamos la fecha y el equipo necesario según el volumen. Organizamos el contenedor si hace falta o la logística de furgoneta. Si hay objetos para donar, contactamos con la entidad receptora para coordinar la recogida.' },
      { numero: '03', titulo: 'Ejecución del vaciado', descripcion: 'El equipo trabaja de arriba abajo y de dentro hacia la salida. Clasificamos mientras bajamos para no mezclar categorías. Los objetos pesados o voluminosos que no pasan por la escalera se desmontan o se bajan por la ventana con maquinaria adecuada cuando es necesario.' },
      { numero: '04', titulo: 'Gestión de residuos y entrega de justificante', descripcion: 'Al terminar el vaciado, llevamos cada categoría a su destino. Entregamos al cliente el justificante de planta y, cuando hay donación, la confirmación de la entidad receptora. El piso queda vacío y la documentación en manos del cliente.' },
    ],

    faq: [
      { pregunta: '¿Qué hacéis con los muebles y enseres que tienen valor?', respuesta: 'Antes de empezar el vaciado el cliente nos indica qué objetos quiere conservar. El resto lo clasificamos: lo que tiene valor de reventa y está en buen estado puede donarse a ONG, Cáritas u otras entidades. No vendemos objetos de los clientes — los donamos o los gestionamos por el canal de reciclaje correcto.' },
      { pregunta: '¿Podéis hacer el vaciado y la reforma en el mismo encargo?', respuesta: 'Sí, es el modo de trabajo más eficiente. Coordinamos el vaciado para los días previos al inicio de la reforma y el equipo de obra encuentra el espacio libre desde el primer día. Lo presupuestamos todo junto con un único presupuesto cerrado.' },
      { pregunta: '¿Qué pasa con los electrodomésticos? ¿Los podéis gestionar?', respuesta: 'Sí. Los electrodomésticos son RAEE y tienen que ir a un punto limpio o gestor de RAEE autorizado. Los llevamos nosotros, con el justificante de entrega correspondiente. No van ni al contenedor de obras ni al punto municipal de voluminosos.' },
      { pregunta: '¿Hacéis vaciados de pisos en toda la Comunidad de Madrid?', respuesta: 'Operamos en Madrid capital y área metropolitana. Para municipios del área metropolitana puede aplicarse un recargo de desplazamiento que incluimos en el presupuesto tras la visita.' },
    ],

    ctaTitulo: 'El piso vacío y listo el día que empieza la obra.',
    ctaDescripcion: 'Coordinamos el vaciado con el inicio de la reforma. Presupuesto tras visita gratuita.',
  },

  {
    codigo: 'L06',
    slug: 'gestion-residuos-uralita-amianto-madrid',
    titulo: 'Gestión de residuos de fibrocemento y uralita con amianto — Madrid',
    subtitulo: 'Retirada legal y documentada de materiales con amianto. Sin riesgo para los trabajadores ni para el cliente.',
    vertical: { codigo: 'L', nombre: 'Gestión de Residuos y Limpieza', invSlug: 'residuos-obra-madrid' },
    abstract: 'El amianto en sus distintas formas — fibrocemento, uralita, planchas de cubierta, revestimientos de tuberías — es el residuo de obra con mayor regulación en España. Su retirada está prohibida para empresas no inscritas en el Registro de Empresas con Riesgo de Amianto (RERA) y requiere Plan de Trabajo aprobado por la autoridad laboral antes de iniciar cualquier actuación. Oro Constructores identifica la presencia de amianto en la obra, suspende los trabajos en la zona afectada y coordina con empresa RERA certificada la retirada correcta y su documentación completa.',

    stats: [
      { valor: 'RERA', label: 'Registro de Empresas con Riesgo de Amianto — obligatorio para cualquier empresa que retire materiales con amianto' },
      { valor: '500–3.000€', label: 'coste mínimo de retirada de amianto según volumen, en Madrid' },
      { valor: 'RD 396/2006', label: 'regula las disposiciones mínimas de seguridad para la retirada de amianto en España' },
    ],

    contexto: 'El amianto fue ampliamente utilizado en la construcción española hasta su prohibición en 2002. Aparece en forma de fibrocemento (planchas de uralita en cubiertas y bajantes), revestimiento de tuberías de calefacción, suelos de vinilo de los años 70–80, falsos techos de determinados materiales y paneles de aislamiento en locales industriales. En Madrid, la mayoría de edificios construidos antes de 1980 contienen algún material con amianto en algún punto de la estructura o de las instalaciones.\n\nSu presencia no implica riesgo inmediato mientras el material esté en buen estado y no se manipule. El riesgo aparece cuando se interviene sobre él: al cortar, perforar, lijar o demoler materiales con amianto se liberan fibras que, inhaladas, causan mesotelioma y asbestosis — enfermedades graves sin tratamiento eficaz. Por eso cualquier actuación sobre materiales que puedan contener amianto requiere análisis previo, y si el análisis es positivo, la retirada solo puede hacerla una empresa RERA con Plan de Trabajo aprobado.\n\nOro Constructores no retira amianto con medios propios porque la normativa lo prohíbe a empresas no inscritas en el RERA. Lo que sí hacemos es identificar los materiales sospechosos antes de empezar a trabajar, detener los trabajos si aparece algo no previsto, coordinar el análisis y contratar la empresa RERA correcta, y supervisar que el proceso documental se completa correctamente. El cliente no tiene que buscar quién gestiona el amianto: lo resolvemos nosotros.',

    perfiles: [
      { tipo: 'Propietario de vivienda construida antes de 1980', descripcion: 'Está reformando el baño o cambiando tuberías y aparece un material que podría ser amianto. No sabe si lo es, qué hacer con él ni quién puede retirarlo. Necesita que alguien identifique el material, le explique las opciones y coordine la retirada si es necesaria, sin que tenga que entender la normativa por sí mismo.' },
      { tipo: 'Propietario de local con cubierta de uralita', descripcion: 'Tiene un local industrial o comercial con cubierta de fibrocemento que hay que sustituir antes de una reforma o por deterioro. Sabe que el fibrocemento puede contener amianto y necesita un presupuesto de retirada legal que incluya toda la documentación para el expediente del local.' },
    ],

    trabajoDetalle: 'La gestión de amianto tiene dos fases previas antes de cualquier retirada. La primera es la identificación: no todo el fibrocemento contiene amianto — el fibrocemento fabricado después de 1984 puede ser libre de amianto. Para confirmarlo se toma una muestra y se envía a laboratorio acreditado. El resultado del análisis determina si hay que activar el protocolo de amianto o si el material puede tratarse como escombro ordinario. La segunda fase es la planificación: si el análisis es positivo, la empresa RERA redacta un Plan de Trabajo que describe los equipos de protección, los métodos de confinamiento, el procedimiento de retirada y la documentación de trazabilidad hasta el vertedero autorizado. Este Plan debe ser aprobado por la autoridad laboral (Inspección de Trabajo o Consejería de Trabajo de la CM) antes de empezar.\n\nLa retirada propiamente dicha se hace con equipos de protección individual completos (traje, máscara con filtro P3, guantes), confinamiento de la zona, humedecimiento de los materiales para evitar la liberación de fibras y embalaje en sacos o bidones homologados para residuos peligrosos. Los materiales retirados van a vertedero autorizado para residuos peligrosos, con documentación de trazabilidad que acredita el destino final.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Identificación visual y toma de muestra', descripcion: 'Antes de tocar el material, lo identificamos visualmente. Si hay sospecha razonable de que contiene amianto (construcción anterior a 1984, aspecto característico del fibrocemento), tomamos muestra y la enviamos a laboratorio acreditado. Coste aproximado del análisis: 80–150€. El resultado llega en 3–5 días laborables.' },
      { numero: '02', titulo: 'Activación del protocolo y contratación de empresa RERA', descripcion: 'Si el análisis es positivo, suspendemos los trabajos en la zona afectada y contactamos con empresa RERA inscrita en el Registro de la Comunidad de Madrid. Solicitamos Plan de Trabajo y presupuesto de retirada. Gestionamos la aprobación del Plan por la autoridad laboral.' },
      { numero: '03', titulo: 'Retirada por empresa RERA certificada', descripcion: 'La empresa RERA ejecuta la retirada según el Plan de Trabajo aprobado: confinamiento de la zona, equipos de protección completos, embalaje en sacos o bidones homologados, transporte a vertedero autorizado para residuos peligrosos. Nosotros supervisamos la ejecución y la documentación.' },
      { numero: '04', titulo: 'Documentación completa y reanudación de la obra', descripcion: 'La empresa RERA emite el certificado de desamiantado y el justificante de vertedero. Integramos estos documentos en el expediente de la obra y reanudamos los trabajos en la zona afectada una vez acreditada la eliminación del riesgo.' },
    ],

    materiales: [
      { tipo: 'Fibrocemento / uralita en cubierta (planchas onduladas)', tecnica: 'Retirada manual por empresa RERA, embalaje en sacos FIBCs o bidones', cuandoUsarla: 'El caso más frecuente en locales industriales y edificios de Madrid anteriores a los 90.' },
      { tipo: 'Tuberías con revestimiento de amianto (calefacción, vapor)', tecnica: 'Confinamiento y retirada por empresa RERA', cuandoUsarla: 'Instalaciones de calefacción por vapor en edificios de viviendas de los años 60–70.' },
      { tipo: 'Suelo de vinilo con amianto en la capa de adherencia', tecnica: 'Encapsulado o retirada controlada por empresa RERA', cuandoUsarla: 'Suelos de vinilo de los años 70–80 en viviendas. El amianto está en la capa inferior, no en la superficie visible.' },
      { tipo: 'Paneles de aislamiento en locales industriales', tecnica: 'Retirada total por empresa RERA con Plan de Trabajo específico', cuandoUsarla: 'Cámaras frigoríficas, locales industriales y almacenes de los años 60–80.' },
    ],

    queIncluye: [
      'Identificación visual de materiales sospechosos antes de iniciar la obra',
      'Coordinación de análisis de muestra en laboratorio acreditado',
      'Gestión de empresa RERA certificada para la retirada',
      'Supervisión de la ejecución y del proceso documental',
      'Integración del certificado de desamiantado en el expediente de la obra',
      'Reanudación de la obra una vez acreditada la eliminación del riesgo',
    ],
    queNoIncluye: [
      'La retirada del amianto en sí (la ejecuta empresa RERA — Oro Constructores coordina y supervisa)',
      'El coste del análisis de laboratorio (se repercute al coste, típicamente 80–150€)',
      'El coste de la empresa RERA (varía según volumen, se presupuesta por separado)',
    ],

    precios: [
      { trabajo: 'Análisis de laboratorio de muestra de fibrocemento', precio: '80–150€', nota: 'Por muestra. Resultado en 3–5 días laborables. Si el análisis es negativo, no hay más actuación.' },
      { trabajo: 'Retirada de planchas de uralita en cubierta (< 50m²)', precio: '500–1.500€', nota: 'Precio empresa RERA. Sin IVA. Incluye Plan de Trabajo, retirada y vertedero autorizado.' },
      { trabajo: 'Retirada de tuberías con amianto (local de hasta 200m²)', precio: '800–2.500€', nota: 'Precio empresa RERA. Varía según longitud de tubería y accesibilidad.' },
      { trabajo: 'Retirada de suelo de vinilo con amianto (< 80m²)', precio: '600–1.800€', nota: 'Precio empresa RERA. Incluye encapsulado alternativo si el material está en buen estado.' },
      { trabajo: 'Coordinación y supervisión Oro Constructores', precio: 'Incluida en la obra', nota: 'No cobramos por coordinar la gestión del amianto cuando somos la empresa de reformas.' },
    ],
    preciosContexto: 'El coste de la gestión de amianto varía principalmente por el volumen de material a retirar, la accesibilidad (cubiertas en altura, espacios confinados), el tipo de material (suelto vs. compacto — el amianto suelto o flockado es más peligroso y costoso de gestionar) y el tiempo de tramitación del Plan de Trabajo. En Madrid, el tiempo de aprobación del Plan por la autoridad laboral puede ser de 1–3 semanas, lo que hay que prever en el planning de la obra.',

    errores: [
      { error: 'Demoler materiales con amianto sin análisis previo ni empresa RERA', consecuencia: 'Es una infracción muy grave bajo el RD 396/2006 y la Ley de Prevención de Riesgos Laborales. La empresa puede ser sancionada con multas de hasta 820.000€ y la obra paralizada por la Inspección de Trabajo. Además, los trabajadores quedan expuestos a fibras de amianto con riesgo de enfermedades profesionales graves e irreversibles. El propietario también puede incurrir en responsabilidad penal si sabía o debía saber que el material contenía amianto.' },
      { error: 'Contratar una empresa no RERA para la retirada de amianto', consecuencia: 'La empresa no inscrita en el RERA no puede legalmente realizar trabajos con amianto. La retirada realizada sin certificación RERA no está documentada, los trabajadores no llevan protección adecuada, y el material retirado puede acabar en vertedero no autorizado. El propietario sigue siendo responsable de la correcta gestión del residuo aunque lo haya pagado a una empresa.' },
      { error: 'No incluir el coste de gestión de amianto en el presupuesto de obra', consecuencia: 'Cuando el amianto aparece durante la obra sin haberse previsto, el cliente se enfrenta a un sobrecoste inesperado y a un parón de obra de 2–4 semanas mientras se tramita el Plan de Trabajo. Identificar los materiales sospechosos antes de presupuestar permite incluir el coste real o al menos avisar al cliente de la contingencia.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-magnifying-glass', titulo: 'Identificamos el amianto antes de que sea un problema', texto: 'En cualquier obra en edificio anterior a 1984, hacemos una revisión de materiales sospechosos antes de empezar. Identificar el amianto antes de la demolición evita el parón de obra, la exposición de los trabajadores y el sobrecoste de gestionar una emergencia.' },
      { icon: 'fa-solid fa-network-wired', titulo: 'Red de empresas RERA de confianza en Madrid', texto: 'Trabajamos con empresas RERA certificadas con las que tenemos trayectoria en Madrid. Sabemos cuánto tardan en aprobar el Plan de Trabajo, qué documentación generan y cómo integrarla en el expediente de la obra. No buscamos una empresa nueva para cada caso.' },
      { icon: 'fa-solid fa-file-shield', titulo: 'El expediente de amianto queda en manos del cliente', texto: 'Al finalizar entregamos al cliente el certificado de desamiantado, el justificante de vertedero autorizado y la aprobación del Plan de Trabajo. Esta documentación es imprescindible si el cliente vende o alquila la propiedad en el futuro.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Inspección previa de materiales sospechosos', descripcion: 'Antes de presupuestar la reforma, identificamos visualmente todos los materiales que podrían contener amianto: cubiertas, bajantes de fibrocemento, aislamiento de tuberías, suelos de vinilo. Si hay sospecha fundada, recomendamos el análisis antes de iniciar la obra.' },
      { numero: '02', titulo: 'Análisis y resultado de laboratorio', descripcion: 'Tomamos muestra del material sospechoso y la enviamos a laboratorio acreditado. En 3–5 días laborables tenemos el resultado. Si es negativo, la obra continúa normalmente. Si es positivo, activamos el protocolo de amianto.' },
      { numero: '03', titulo: 'Tramitación del Plan de Trabajo y ejecución RERA', descripcion: 'Contactamos con empresa RERA, gestionamos el Plan de Trabajo y su aprobación por la autoridad laboral. Supervisamos la ejecución de la retirada para que se haga según el Plan y la documentación sea correcta.' },
      { numero: '04', titulo: 'Certificado de desamiantado y reanudación de obra', descripcion: 'Una vez retirado el amianto y documentado el vertido en instalación autorizada, integramos el certificado en el expediente y reanudamos la obra. El planning se ajusta para recuperar el tiempo perdido en la tramitación.' },
    ],

    faq: [
      { pregunta: '¿Cómo sé si mi piso tiene amianto?', respuesta: 'Si el edificio es anterior a 1984 y hay planchas de fibrocemento en cubierta o bajantes, es probable que contengan amianto. Los suelos de vinilo tipo baldosa pequeña de los años 70–80 también pueden tener amianto en la capa de adherencia. No se puede confirmar sin análisis de laboratorio: el aspecto visual no es suficiente.' },
      { pregunta: '¿Qué pasa si aparece amianto durante la obra que no se había previsto?', respuesta: 'Suspendemos inmediatamente los trabajos en la zona afectada. El resto de la obra puede continuar si la zona está aislada. Activamos el protocolo de análisis y tramitación del Plan de Trabajo. El parón en la zona afectada es obligatorio hasta que la empresa RERA haya completado la retirada.' },
      { pregunta: '¿Puedo dejar el amianto en su sitio si está en buen estado?', respuesta: 'En muchos casos sí. El amianto compacto (como el fibrocemento en buen estado, sin roturas ni degradación) no representa riesgo mientras no se manipule. La opción de encapsulado — recubrir el material sin retirarlo — es legal y más económica cuando el estado lo permite. Lo evaluamos caso a caso.' },
      { pregunta: '¿Cuánto tiempo tarda el proceso de retirada de amianto?', respuesta: 'El análisis de laboratorio tarda 3–5 días. La redacción del Plan de Trabajo por la empresa RERA y su aprobación por la autoridad laboral tarda entre 1 y 3 semanas en Madrid, dependiendo de la carga administrativa. La ejecución de la retirada es habitualmente de 1–3 días según el volumen. En total, hay que prever entre 3 y 6 semanas desde la detección hasta la reanudación de la obra.' },
    ],

    ctaTitulo: 'El amianto no detiene la obra si se detecta a tiempo.',
    ctaDescripcion: 'Identificamos y coordinamos la gestión de amianto. Sin riesgos, con toda la documentación.',
  },

  {
    codigo: 'M01',
    slug: 'fuga-urgente-agua-vivienda-madrid',
    titulo: 'Fuga de agua urgente en vivienda — Madrid',
    subtitulo: 'Fontanero el mismo día. Localizamos y cerramos la fuga antes de que el daño se extienda.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Una fuga de agua en vivienda es una urgencia real: cada hora que pasa, el agua se filtra al forjado, empapa el aislamiento, pudre la madera, mancha los techos del vecino de abajo y multiplica el coste de la reparación. Oro Constructores atiende urgencias de fontanería en viviendas de Madrid capital y área metropolitana el mismo día, con fontanero propio. Localizamos el origen exacto, lo reparamos y dejamos el agua funcionando en una sola visita.',

    stats: [
      { valor: '< 2h', label: 'tiempo de respuesta de Oro Constructores en Madrid capital para urgencias de fontanería' },
      { valor: '3x', label: 'se puede multiplicar el coste de reparación por cada 24 horas adicionales sin actuar en una fuga activa' },
      { valor: '80%', label: 'de las fugas en vivienda se localizan y reparan en una sola visita cuando se actúa el mismo día' },
    ],

    contexto: 'Una fuga de agua no detectable a simple vista puede llevar días o semanas activa antes de que aparezca la mancha en el techo. Cuando el síntoma es visible, el daño en el interior del forjado o la pared ya es significativo. El agua que no sale al exterior se queda en el interior de la estructura, generando humedad estructural, oxidación de armaduras en forjados de hormigón y colonias de moho que afectan a la calidad del aire interior. Una fuga activa de un milímetro de diámetro en tubería a 3 bares de presión puede filtrar entre 30 y 100 litros de agua al día al interior del forjado sin que el propietario lo note en el contador.\n\nEl primer error que comete la mayoría de los propietarios al detectar una fuga es esperar: esperan a ver si mejora, esperan al fontanero que venga más barato, esperan al lunes siguiente. Cada hora de espera incrementa el daño. En forjados unidireccionales de viguetas de madera, una fuga activa puede hacer irrecuperable la vigueta en 48–72 horas. En forjados de hormigón, la humedad sostenida genera eflorescencias y, a largo plazo, corrosión de la armadura. El coste de reparar el daño estructural supera habitualmente en 5–10 veces el coste de haber reparado la fuga a tiempo.\n\nOro Constructores responde el mismo día porque sabemos que la urgencia de fontanería es real, no percibida. Nuestro fontanero propio — sin empresa de guardia subcontratada — llega con las herramientas de diagnóstico adecuadas (detector de humedad, cámara endoscópica cuando hace falta) y la experiencia de 30 años en el parque de instalaciones de Madrid: plomo, galvanizado, cobre, multicapa — sabemos qué encontrar en cada época de construcción y cómo repararlo.',

    perfiles: [
      { tipo: 'Propietario que detecta agua donde no debería haber', descripcion: 'Ha encontrado la mancha en el techo, escucha agua correr con todo cerrado, o el vecino de abajo ha llamado porque le gotea. Está nervioso porque no sabe de dónde viene, no sabe si tiene que cortar el agua general del edificio y no sabe a quién llamar primero. Necesita que alguien llegue rápido, le explique qué está pasando y lo resuelva sin montar una obra.' },
      { tipo: 'Administrador de fincas que gestiona la reclamación de un vecino', descripcion: 'Recibe el aviso de un vecino que tiene el techo mojado y necesita actuar rápido para frenar el daño y documentar la intervención. Necesita un informe técnico de la avería para tramitar el parte con el seguro de la comunidad o de la vivienda.' },
    ],

    trabajoDetalle: 'El diagnóstico de una fuga de agua empieza por el síntoma — dónde aparece el agua — y trabaja hacia atrás para encontrar el origen. El origen rara vez está justo debajo de donde aparece la mancha: el agua recorre el interior del forjado o la pared hasta encontrar el punto de menor resistencia. Un fontanero sin experiencia abre donde aparece la mancha y no encuentra nada. Uno con experiencia entiende la distribución de la instalación, la presión de red, el tipo de tubería y los puntos de fallo más frecuentes según la edad del edificio.\n\nLas herramientas de diagnóstico no invasivo — detector de humedad capacitivo, cámara termográfica, detector de sonido de fuga — permiten localizar el origen con mucha más precisión antes de abrir ninguna pared. Esto reduce la zona de rotura y el coste posterior de reparación de alicatado o enlucido. En instalaciones antiguas de plomo o galvanizado, el diagnóstico incluye también evaluar el estado general de la red para anticipar próximas averías.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Llegada y corte del suministro', descripcion: 'A la llegada cerramos la llave de paso de la vivienda para detener el flujo de agua y evitar que el daño continúe. Evaluamos el estado visual: dónde aparece el agua, qué superficies están afectadas, qué instalaciones hay en la zona.' },
      { numero: '02', titulo: 'Diagnóstico del origen', descripcion: 'Usamos detector de humedad para mapear la extensión de la zona húmeda y estrechamos la zona de búsqueda. Si la fuga está en tubería empotrada sin acceso visible, usamos cámara endoscópica o analizamos la distribución de la instalación para identificar el punto más probable.' },
      { numero: '03', titulo: 'Reparación del punto de fuga', descripcion: 'Una vez localizado el origen, abrimos la mínima superficie necesaria para acceder a la tubería y reparamos: sustitución de junta, reparación de tubería, cambio de llave de paso o grifería defectuosa. Usamos materiales homologados para instalaciones de agua potable.' },
      { numero: '04', titulo: 'Prueba de estanqueidad y entrega de informe', descripcion: 'Abrimos el suministro y verificamos la estanqueidad en el punto reparado y en los tramos adyacentes. Emitimos informe técnico de la intervención con descripción de la avería, causa, trabajo realizado y materiales, válido para el seguro.' },
    ],

    materiales: [
      { tipo: 'Tubería de cobre', tecnica: 'Soldadura blanda o racor de presión', cuandoUsarla: 'El material más común en viviendas madrileñas de los años 70–2000. Fiable y durable si se repara correctamente.' },
      { tipo: 'Tubería multicapa (PEX-AL-PEX)', tecnica: 'Racor de compresión o prensado', cuandoUsarla: 'Instalaciones de menos de 20 años. La reparación más rápida y sin necesidad de llama.' },
      { tipo: 'Tubería de plomo o galvanizado', tecnica: 'Sustitución del tramo afectado', cuandoUsarla: 'Instalaciones anteriores a 1980. La reparación parcial no es recomendable — el resto de la red está en el mismo estado.' },
      { tipo: 'Llave de paso o grifería defectuosa', tecnica: 'Sustitución del elemento', cuandoUsarla: 'Cuando el problema es el elemento de corte, no la tubería. Habitualmente más rápido y económico que reparar una junta de tubería.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Diagnóstico completo: detección de humedad y localización del origen',
      'Reparación del punto de fuga con materiales homologados',
      'Prueba de estanqueidad post-reparación',
      'Informe técnico de la intervención para el seguro',
    ],
    queNoIncluye: [
      'Obras de albañilería para cierre de rozas o reposición de alicatado (presupuesto aparte)',
      'Reparación de daños causados por el agua en paredes, techos o mobiliario',
      'Revisión completa de la instalación de fontanería (se presupuesta aparte)',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico', precio: '150–250€', nota: 'Sin IVA. En horario laboral (L–V 8:00–18:00).' },
      { trabajo: 'Recargo por urgencia fuera de horario (18:00–22:00)', precio: '+75–150€', nota: 'Sobre el precio base de desplazamiento.' },
      { trabajo: 'Recargo fin de semana y festivos', precio: '+50–100%', nota: 'Sobre la tarifa base total.' },
      { trabajo: 'Reparación de fuga en tubería vista o accesible', precio: '200–500€', nota: 'Incluye materiales estándar. Aparte del desplazamiento.' },
      { trabajo: 'Reparación de fuga en tubería empotrada (apertura de pared)', precio: '600–2.000€', nota: 'Varía según profundidad y longitud afectada. Cierre de roza aparte.' },
    ],
    preciosContexto: 'El coste total de una urgencia de fontanería tiene dos componentes: el desplazamiento (fijo, cubre la llegada y el diagnóstico) y la reparación (variable según lo que se encuentre). No es posible saber el coste de la reparación antes de diagnosticar. Lo que sí garantizamos es que no empezamos ningún trabajo sin aprobación previa del cliente con el precio claro. El recargo de fin de semana y festivos existe porque implica disponibilidad fuera del horario laboral habitual.',

    errores: [
      { error: 'Esperar a ver si la fuga se para sola', consecuencia: 'Las fugas en tuberías a presión no se paran solas. Una microfisura por fatiga del material crece con el tiempo bajo la presión de la red. Cada hora de espera aumenta el volumen de agua filtrado al interior de la estructura. En 24 horas una fuga pequeña puede haber empapado el interior de un tabique de doble hoja o comprometido 2–3m² de forjado.' },
      { error: 'Abrir la pared donde aparece la mancha sin diagnosticar el origen', consecuencia: 'La mancha de humedad raramente está justo donde está la fuga — el agua viaja por el interior de la estructura hasta el punto más bajo. Abrir sin diagnosticar puede suponer abrir 3 m² de pared para no encontrar nada, mientras el origen real está en otra habitación. Esto eleva el coste de reparación y prolonga la obra innecesariamente.' },
      { error: 'No documentar la avería antes de reparar para el seguro', consecuencia: 'Los seguros de hogar requieren documentación de la avería para tramitar el siniestro: fotografías del daño, informe técnico de la causa y descripción del trabajo de reparación. Si se repara sin documentar, la reclamación al seguro puede ser denegada por falta de prueba del origen de los daños.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-clock', titulo: 'Menos de 2 horas en Madrid capital', texto: 'No somos una empresa de guardia que subcontrata a quien tenga disponible. Nuestro fontanero propio atiende las urgencias con su furgoneta, sus herramientas de diagnóstico y 30 años de experiencia en instalaciones de Madrid. El tiempo de respuesta real es de menos de 2 horas en Madrid capital.' },
      { icon: 'fa-solid fa-magnifying-glass', titulo: 'Diagnóstico antes de abrir nada', texto: 'Localizamos el origen exacto con detector de humedad y análisis de la instalación antes de hacer ninguna rotura. Esto minimiza la zona afectada y el coste de la reparación de albañilería posterior.' },
      { icon: 'fa-solid fa-file-medical', titulo: 'Informe técnico para el seguro', texto: 'Emitimos informe técnico de cada intervención de urgencia: causa de la avería, trabajo realizado, materiales empleados y valoración del daño. Es el documento que el cliente necesita para tramitar el parte con su aseguradora.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Llamada o WhatsApp — respuesta inmediata', descripcion: 'Cuando nos llamas por una urgencia de fontanería confirmamos la disponibilidad en el mismo momento. Te damos un tiempo de llegada real, no estimado. Si hay algún trabajo anterior en curso, te decimos cuándo podemos estar.' },
      { numero: '02', titulo: 'Llegada, diagnóstico y presupuesto', descripcion: 'A la llegada cortamos el suministro si es necesario y diagnosticamos el origen. Antes de empezar la reparación te explicamos qué hemos encontrado y te damos el precio de la reparación. Sin sorpresas en la factura.' },
      { numero: '03', titulo: 'Reparación y prueba', descripcion: 'Reparamos el punto de fuga, probamos la estanqueidad y verificamos que el resto de la instalación visible está en buen estado. Si detectamos otros puntos de riesgo, te lo comunicamos para que puedas decidir si actuar ahora o después.' },
      { numero: '04', titulo: 'Informe y factura', descripcion: 'Al finalizar emitimos el informe técnico de la intervención y la factura. Puedes pagar con transferencia o efectivo. El informe lo enviamos también por email para que lo tengas disponible para el seguro o para el archivo de la vivienda.' },
    ],

    faq: [
      { pregunta: '¿Qué hago mientras espero al fontanero?', respuesta: 'Cierra la llave de paso de tu vivienda — habitualmente está bajo el fregadero, en el baño o en el armario de contadores. Si no la encuentras o no cierra bien, cierra la llave general del piso de la columna (en el rellano o en la entrada). Retira los objetos que puedan dañarse por el agua (muebles, electrónica, ropa). Pon toallas o cubos para recoger el agua que gotea. No enciendas enchufes ni interruptores en zonas mojadas.' },
      { pregunta: '¿Hay que cortar el agua del edificio?', respuesta: 'Solo si la fuga está en la columna general o en un tramo de tubería del que no hay llave de corte independiente. En ese caso coordinamos con el administrador de fincas o con el presidente de la comunidad. Si la llave de paso de la vivienda cierra correctamente, el edificio puede seguir con agua mientras reparamos.' },
      { pregunta: '¿Cuánto tarda la reparación?', respuesta: 'Una fuga en tubería visible o accesible se repara en 1–2 horas. Una fuga en tubería empotrada que requiere abrir pared puede llevar 3–5 horas, dependiendo de la accesibilidad y el material. Te damos una estimación de tiempo cuando diagnosticamos el origen.' },
      { pregunta: '¿La reparación incluye cerrar la pared o el alicatado?', respuesta: 'La reparación de la tubería está incluida. El cierre de la roza (enfoscado, alicatado, pintura) es un trabajo adicional que se presupuesta aparte. Podemos hacerlo nosotros en una segunda visita cuando la zona esté seca, o puedes hacerlo tú si tienes otro especialista.' },
      { pregunta: '¿Podéis venir un sábado o en festivo?', respuesta: 'Sí, atendemos urgencias los siete días de la semana. Hay un recargo de fin de semana y festivo que comunicamos cuando llamas y que aparece desglosado en la factura.' },
    ],

    ctaTitulo: 'La fuga parada hoy. El daño que no sigue creciendo.',
    ctaDescripcion: 'Fontanero propio. Mismo día. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M02',
    slug: 'fuga-urgente-agua-hosteleria-madrid',
    titulo: 'Fuga de agua urgente en local de hostelería — Madrid',
    subtitulo: 'Cada hora cerrado es pérdida directa. Resolvemos la fuga antes de que abra el servicio.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'En hostelería, una fuga de agua no es solo un problema de fontanería: es un cierre de actividad con coste por hora. Un bar de 50 cubiertos puede perder entre 800 y 3.000€ en un servicio de mediodía cerrado. Oro Constructores atiende urgencias de fontanería en locales hosteleros de Madrid el mismo día — incluso antes de la hora de apertura — con fontanero propio que conoce las instalaciones industriales de cocina.',

    stats: [
      { valor: '800–3.000€', label: 'pérdida estimada por servicio perdido en un restaurante de 50 cubiertos en Madrid' },
      { valor: '< 2h', label: 'tiempo de respuesta de Oro Constructores para urgencias en hostelería Madrid capital' },
      { valor: '6:00h', label: 'hora desde la que podemos estar en un local si el aviso llega la noche anterior' },
    ],

    contexto: 'Una cocina industrial tiene una red de instalaciones mucho más densa que una vivienda: agua fría y caliente para maquinaria, vapor para hornos y marmitas, desagüe forzado, trampa de grasa, conexión a lavavajillas industrial, grifo de limpieza de suelos y conexión a la campana de extracción. Cualquiera de estos puntos puede fallar. Cuando falla, la cocina se convierte en un espacio insalubre que no puede operar, y el servicio de ese día está en riesgo.\n\nEl coste real de una urgencia de fontanería en hostelería no es solo la reparación: es la suma de la reparación más los ingresos no generados durante el cierre. Un restaurante que cierra el servicio del mediodía pierde entre 800 y 3.000€ dependiendo del tamaño y el precio medio. Un bar de desayunos y tapas que no puede abrir el sábado por la mañana pierde la que habitualmente es su jornada más rentable. Cuanto antes se resuelve la urgencia, menor es la pérdida total.\n\nOro Constructores prioriza los avisos de hostelería porque entendemos este contexto. Si nos avisan la noche anterior, organizamos la visita para antes de la hora de apertura. Si el aviso llega durante el servicio, intentamos estar en menos de dos horas. Nuestro fontanero tiene experiencia en instalaciones de cocina industrial: sabe maniobrar con llave de gas cerca, trabajar en espacios reducidos de cocina y reparar conexiones a maquinaria sin dañarla.',

    perfiles: [
      { tipo: 'Gerente o encargado de restaurante que encuentra agua al abrir', descripcion: 'Llega al local por la mañana y hay agua en la cocina. La fuente no es evidente. Tiene el servicio del mediodía en riesgo. Necesita que alguien llegue inmediatamente, encuentre el origen y lo resuelva antes de que llegue el personal de cocina. No puede permitirse esperar a una empresa que dé cita para mañana.' },
      { tipo: 'Propietario de bar que recibe llamada del vecino durante la noche', descripcion: 'Le llaman a medianoche porque hay agua saliendo del local. No puede ir en ese momento pero necesita saber si debe cerrar el suministro de agua del local y cómo preparar la apertura del día siguiente con la reparación resuelta.' },
    ],

    trabajoDetalle: 'Las fugas en locales hosteleros tienen particularidades respecto a las viviendas. La presión de red suele ser mayor porque la instalación está dimensionada para maquinaria industrial. Las tuberías son de mayor diámetro. Los puntos de conexión a maquinaria (lavavajillas, cafetera, marmita) son puntos de fallo frecuentes porque someten la instalación a ciclos de temperatura y presión más intensos. La trampa de grasa y los desagüe forzados tienen también sus puntos débiles específicos.\n\nEl diagnóstico en un local de hostelería es más complejo que en una vivienda porque hay más redes paralelas y más puntos de conexión. La estrategia es la misma — localizar el origen antes de abrir nada — pero requiere conocer el esquema de la instalación de cocina y saber qué llave de paso controla qué zona. En muchos locales, el plano de instalaciones no existe: hay que hacer el diagnóstico a partir de la inspección visual de lo que es accesible.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Corte selectivo del suministro y evaluación del daño', descripcion: 'A la llegada identificamos qué red está afectada (agua fría, caliente, vapor) y cerramos solo la llave que controla esa zona, dejando el resto del local operativo si es posible. Evaluamos si el daño a la maquinaria o al suelo requiere actuaciones adicionales inmediatas.' },
      { numero: '02', titulo: 'Diagnóstico del origen en instalación de cocina', descripcion: 'Inspeccionamos la red de la cocina siguiendo el trazado de las tuberías desde el punto de acometida hasta los elementos de consumo. Identificamos el punto de fuga sin abrir innecesariamente: conexiones a maquinaria, racores, válvulas de bola, paso de tubería por techo o pared.' },
      { numero: '03', titulo: 'Reparación con materiales aptos para uso alimentario', descripcion: 'Reparamos el punto de fuga con materiales homologados para instalaciones de agua en contacto con alimentos cuando aplica. En conexiones a maquinaria usamos racores y juntas de calidad industrial para resistir los ciclos de temperatura y presión de un servicio intensivo.' },
      { numero: '04', titulo: 'Prueba de presión y verificación antes de abrir', descripcion: 'Antes de dar la reparación por terminada, probamos la instalación a presión de red durante al menos 15 minutos. Verificamos que no hay humedad residual en puntos adyacentes. Emitimos informe para el seguro del local si el cliente lo necesita.' },
    ],

    materiales: [
      { tipo: 'Conexiones a maquinaria de hostelería (lavavajillas, cafetera)', tecnica: 'Racores industriales de latón o acero inoxidable con junta EPDM', cuandoUsarla: 'Punto de fallo más frecuente en cocinas industriales por los ciclos de temperatura.' },
      { tipo: 'Tuberías de acero galvanizado (locales antiguos)', tecnica: 'Sustitución del tramo por cobre o multicapa', cuandoUsarla: 'Locales de más de 30 años con instalación original no renovada.' },
      { tipo: 'Válvulas de bola industriales', tecnica: 'Sustitución del elemento', cuandoUsarla: 'Las válvulas de bola industriales de baja calidad fallan frecuentemente en instalaciones con uso intensivo.' },
      { tipo: 'Desagüe forzado o conexión a trampa de grasa', teccion: 'Reparación o sustitución del elemento defectuoso', cuandoUsarla: 'Las fugas en desagüe son menos urgentes que las de red a presión, pero generan riesgo sanitario inmediato.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Diagnóstico en instalación de agua fría, caliente y desagüe industrial',
      'Reparación del punto de fuga con materiales aptos para uso alimentario cuando aplica',
      'Prueba de presión y verificación antes de reanudar la actividad',
      'Informe técnico para el seguro del local',
    ],
    queNoIncluye: [
      'Reparación de maquinaria dañada por el agua (requiere técnico especializado en la marca)',
      'Obras de albañilería para cierre de rozas o solado (presupuesto aparte)',
      'Revisión y mantenimiento preventivo completo de la instalación',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico (horario laboral)', precio: '150–250€', nota: 'Sin IVA. L–V 8:00–18:00.' },
      { trabajo: 'Recargo urgencia fuera de horario o madrugada', precio: '+75–150€', nota: 'Para aperturas tempranas o avisos nocturnos.' },
      { trabajo: 'Recargo fin de semana y festivo', precio: '+50–100%', nota: 'Sobre tarifa base. Los fines de semana son los días más rentables en hostelería.' },
      { trabajo: 'Reparación de fuga en tubería vista o conexión a maquinaria', precio: '200–500€', nota: 'Materiales incluidos.' },
      { trabajo: 'Reparación de fuga en tubería empotrada o bajo solado', precio: '600–2.000€', nota: 'Cierre de roza aparte.' },
    ],
    preciosContexto: 'En hostelería, el coste de la reparación debe compararse con el coste del cierre. Una reparación de 600€ que evita cerrar el servicio del mediodía en un restaurante de 50 cubiertos tiene un retorno de inversión inmediato. Los recargos de madrugada y fin de semana existen porque implican disponibilidad fuera del horario habitual, pero en hostelería son precisamente los horarios en que más se necesitan.',

    errores: [
      { error: 'Esperar a la mañana siguiente para llamar al fontanero', consecuencia: 'En una fuga activa de red a presión, las horas de la noche son horas de daño continuo. Al día siguiente, lo que habría sido una reparación de 400€ puede ser una reparación de 1.200€ más la sustitución del suelo de la cocina dañado por la humedad. En locales con cámara frigorífica, el agua puede dañar la instalación de frío y añadir un sobrecoste de varios miles de euros.' },
      { error: 'Cerrar el agua general del local sin identificar qué zona está afectada', consecuencia: 'Cerrar el suministro general detiene la fuga pero también deja sin agua el bar de sala, los baños y la barra. Si hay forma de aislar la zona afectada con una llave de corte sectorial, el resto del local puede seguir operando mientras se espera al fontanero. No conocer el esquema de llaves de corte del local es un riesgo operativo que se paga en el peor momento.' },
      { error: 'No documentar el daño para el seguro antes de limpiar', consecuencia: 'Los seguros de hostelería requieren documentación fotográfica del daño antes de la limpieza y reparación. Si limpias el suelo y quitas el agua antes de que llegue el fontanero y de hacer fotos, el seguro puede denegar la cobertura por falta de prueba del siniestro.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-bolt', titulo: 'Antes de que abra el servicio', texto: 'Cuando el aviso llega la noche anterior, organizamos la visita para antes de las 8:00. Nuestro objetivo es que la fuga esté resuelta antes de que llegue el personal de cocina, sin afectar al servicio del día.' },
      { icon: 'fa-solid fa-utensils', titulo: 'Conocemos las cocinas industriales', texto: 'Nuestro fontanero tiene experiencia en instalaciones de hostelería: sabe identificar la trampa de grasa, conoce los esquemas de conexión a maquinaria industrial y sabe trabajar en el espacio reducido de una cocina sin interferir con el equipamiento.' },
      { icon: 'fa-solid fa-shield-halved', titulo: 'Reparación que aguanta el uso intensivo', texto: 'Las reparaciones de fontanería en hostelería están sometidas a más ciclos de presión y temperatura que en vivienda. Usamos materiales de calidad industrial y técnicas de unión apropiadas para ese nivel de exigencia.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y confirmación de llegada', descripcion: 'Cuando recibes el aviso — noche anterior, primera hora o durante el servicio — llámanos o escríbenos por WhatsApp. Confirmamos la disponibilidad y damos un tiempo de llegada real. Para locales que necesitan apertura temprana, el equipo sale antes del amanecer si es necesario.' },
      { numero: '02', titulo: 'Diagnóstico rápido y corte selectivo', descripcion: 'A la llegada evaluamos la situación en menos de 10 minutos: qué red está afectada, qué llave de corte la controla, qué daño ya hay. Cortamos solo lo necesario para dejar el máximo del local operativo mientras trabajamos.' },
      { numero: '03', titulo: 'Reparación y prueba', descripcion: 'Reparamos el punto de fuga, probamos la estanqueidad y verificamos que la maquinaria afectada está en condiciones de operar. Si hay daño en la maquinaria, te avisamos y coordinamos con el servicio técnico de la marca.' },
      { numero: '04', titulo: 'Informe y alta del servicio', descripcion: 'Emitimos el informe técnico de la intervención y la factura. El local puede reanudar la actividad. Si el seguro del local cubre siniestros de agua, el informe tiene el formato que necesitan las aseguradoras.' },
    ],

    faq: [
      { pregunta: '¿Podéis venir antes de que abra el local?', respuesta: 'Sí. Si nos avisas la noche anterior, podemos organizar la visita para estar a las 7:00 o incluso antes. La condición es que el aviso llegue con suficiente antelación para que el fontanero pueda organizarse. Para avisos de madrugada, aplicamos el recargo de horario nocturno.' },
      { pregunta: '¿Qué hago mientras espero al fontanero si hay agua en la cocina?', respuesta: 'Cierra la llave de paso del local. Si no sabes cuál es, cierra la llave general de la acometida. Retira los alimentos del suelo y ponlos en zona seca. Desconecta los equipos eléctricos que estén en la zona mojada. Haz fotos del daño antes de limpiar — las necesitarás para el seguro.' },
      { pregunta: '¿Trabajáis con seguros de hostelería?', respuesta: 'Sí. Emitimos informe técnico con descripción de la avería, causa probable, trabajo realizado y materiales, en el formato que requieren las aseguradoras. Si el seguro de tu local cubre daños por agua, el informe es el documento principal para la tramitación.' },
      { pregunta: '¿Podéis hacer el mantenimiento preventivo de la instalación para evitar urgencias?', respuesta: 'Sí. Ofrecemos contratos de mantenimiento preventivo para locales de hostelería que incluyen revisión periódica de la red de fontanería, las conexiones a maquinaria y el estado de las válvulas. Los clientes con contrato de mantenimiento tienen prioridad en las urgencias y tarifa reducida.' },
    ],

    ctaTitulo: 'Resolvemos la fuga antes de que abra el servicio.',
    ctaDescripcion: 'Fontanero con experiencia en cocinas industriales. El mismo día, siempre.',
  },

  {
    codigo: 'M03',
    slug: 'averia-electrica-urgente-cuadro-madrid',
    titulo: 'Avería eléctrica urgente — corte de luz y cuadro en Madrid',
    subtitulo: 'Sin luz en casa o en el local. Electricista el mismo día para diagnóstico y reparación.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Un corte eléctrico total o parcial — cuadro que salta y no recupera, diferencial que no conecta, instalación que huele a quemado — es una urgencia que no puede esperar. Sin electricidad no hay luz, no hay calefacción, no hay neveras, no hay cámaras de seguridad. En hostelería, sin electricidad no hay servicio. Oro Constructores atiende averías eléctricas urgentes en Madrid capital y área metropolitana el mismo día, con electricista propio.',

    stats: [
      { valor: '< 2h', label: 'tiempo de respuesta de Oro Constructores para urgencias eléctricas en Madrid capital' },
      { valor: '60%', label: 'de los cortes eléctricos domésticos en Madrid son resolubles en una sola visita' },
      { valor: '500€+', label: 'pérdida mínima estimada por hora de cierre en un local de hostelería sin electricidad' },
    ],

    contexto: 'La mayoría de los cortes eléctricos totales en vivienda tienen una causa simple: sobrecarga, cortocircuito o diferencial que salta por humedad. El problema es que cuando el diferencial o el magnetotérmico saltan y no recuperan al reponerlos, o cuando el cuadro tiene humo o olor a quemado, la intervención requiere un electricista porque hay un problema real en la instalación que no se resuelve solo. En Madrid, muchas viviendas de los años 60–80 tienen instalaciones eléctricas de tubo de acero con cableado de aluminio que han llegado al límite de su vida útil. Una avería en una instalación antigua puede ser el síntoma de que toda la red necesita revisión.\n\nEn hostelería el riesgo eléctrico es mayor porque las instalaciones están sometidas a más carga: hornos de convección, planchas industriales, freidoras, lavavajillas industrial, cámaras frigoríficas — todo conectado a la vez en hora punta. Un cortocircuito en una instalación subdimensionada o con conexiones en mal estado puede provocar un incendio, no solo un corte de luz. El olor a quemado en el cuadro o en un enchufe es una señal de alarma que no puede ignorarse.\n\nOro Constructores atiende averías eléctricas con electricista propio — no con empresa subcontratada. Nuestro electricista trabaja en Madrid desde hace décadas y conoce los tipos de instalación habituales en cada época de construcción: tubo de acero y cable de aluminio en edificios de los 60–70, tubo corrugado y cable de cobre desde los 80, caja ICP y cuadro de protecciones moderno desde los 90. Este conocimiento acelera el diagnóstico y evita intervenciones innecesarias.',

    perfiles: [
      { tipo: 'Propietario de vivienda sin luz total o parcial', descripcion: 'El cuadro ha saltado y no recupera, o hay una zona del piso que no tiene luz aunque el resto funciona. Tiene nevera conectada con comida dentro, y en invierno sin calefacción el piso se enfría rápido. Necesita que alguien llegue ese día para diagnosticar y resolver.' },
      { tipo: 'Gerente de local hostelero con avería en cuadro', descripcion: 'La cocina ha perdido potencia parcialmente — la plancha o el horno no arranca. O hay un diferencial que salta al conectar la cámara frigorífica. Sin saber qué hacer, el local no puede abrir o tiene que operar a mitad de capacidad. Necesita un electricista con experiencia en instalaciones industriales que lo resuelva antes del servicio.' },
    ],

    trabajoDetalle: 'Una avería eléctrica urgente tiene diagnóstico progresivo: primero se identifica si el corte es total o parcial y si viene de la red de la compañía (corte de suministro) o de la instalación interior (cuadro, circuito o punto concreto). Si el suministro de la compañía está activo pero el cuadro no recupera, el problema está en la instalación interior. El siguiente paso es identificar qué circuito está fallando y qué está conectado a él.\n\nLas causas más frecuentes de cortes que no recuperan son: aparato defectuoso que genera cortocircuito al conectarlo (se identifica desconectando todos los aparatos y reconectando de uno en uno), humedad en el diferencial o en un punto de la instalación (el diferencial detecta la corriente de fuga y salta al reponerse), o instalación con sobrecarga estructural (se ha añadido más consumo del que la instalación puede soportar). En todos los casos, el diagnóstico requiere instrumentación eléctrica: multímetro, pinza amperimétrica y, en algunos casos, verificador de aislamiento.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Verificación del suministro y estado del cuadro', descripcion: 'Comprobamos que el corte es de la instalación interior, no de la red de la compañía. Inspeccionamos el cuadro de protecciones: estado visual de los magnetotérmicos y el diferencial, olor a quemado, señales de sobrecalentamiento.' },
      { numero: '02', titulo: 'Identificación del circuito o elemento defectuoso', descripcion: 'Desconectamos los aparatos del circuito afectado y probamos a reponer el magnetotérmico. Si recupera sin carga, el problema está en uno de los aparatos conectados. Si no recupera con todo desconectado, el problema está en la instalación (aislamiento degradado, cortocircuito en cableado, humedad en caja de derivación).' },
      { numero: '03', titulo: 'Reparación o derivación temporal', descripcion: 'Reparamos el punto defectuoso: sustitución del aparato protector, reparación de la conexión defectuosa, sustitución del tramo de cable con aislamiento degradado. Si la reparación definitiva requiere más tiempo del disponible, instalamos una derivación temporal segura para restablecer el suministro.' },
      { numero: '04', titulo: 'Prueba de carga y recomendaciones', descripcion: 'Probamos la instalación con carga real para verificar que la reparación es estable. Si detectamos otros puntos de riesgo en la instalación (sobrecargas, conexiones en mal estado, cuadro obsoleto), lo comunicamos al cliente con un presupuesto de mejora.' },
    ],

    materiales: [
      { tipo: 'Interruptores automáticos (magnetotérmicos)', tecnica: 'Sustitución del elemento', cuandoUsarla: 'Cuando el magnetotérmico no recupera o ha sufrido sobrecalentamiento visible.' },
      { tipo: 'Interruptor diferencial', tecnica: 'Sustitución del elemento', cuandoUsarla: 'Diferencial que salta con humedad o con corrientes de fuga mínimas por envejecimiento.' },
      { tipo: 'Cableado con aislamiento degradado', tecnica: 'Sustitución del tramo afectado', cuandoUsarla: 'Cable de aluminio de instalaciones antiguas o cableado con aislamiento quemado o resquebrajado.' },
      { tipo: 'Cajas de derivación con conexiones en mal estado', tecnica: 'Revisión y reapriete o sustitución de empalmes', cuandoUsarla: 'Origen frecuente de fallos intermitentes que son difíciles de reproducir en el diagnóstico.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Diagnóstico completo del cuadro y de la instalación afectada',
      'Reparación del elemento defectuoso (aparato de protección, empalme, tramo de cable)',
      'Prueba de carga post-reparación',
      'Informe de la avería y recomendaciones de mejora si hay riesgo adicional',
    ],
    queNoIncluye: [
      'Reparación de electrodomésticos o aparatos dañados por la avería eléctrica',
      'Renovación completa del cuadro o de la instalación (se presupuesta aparte)',
      'Averías en la red de la compañía suministradora (hay que llamar a Endesa/Iberdrola)',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico', precio: '150–250€', nota: 'Sin IVA. Horario laboral L–V 8:00–18:00.' },
      { trabajo: 'Recargo urgencia fuera de horario', precio: '+75–150€', nota: 'Sobre el precio base.' },
      { trabajo: 'Recargo fin de semana y festivo', precio: '+50–100%', nota: 'Sobre la tarifa base total.' },
      { trabajo: 'Sustitución de diferencial o magnetotérmico', precio: '100–250€', nota: 'Incluye material. Aparte del desplazamiento.' },
      { trabajo: 'Reparación de cableado o empalme defectuoso', precio: '150–500€', nota: 'Según accesibilidad y longitud del tramo afectado.' },
    ],
    preciosContexto: 'El coste de una urgencia eléctrica tiene el mismo esquema que la fontanería: desplazamiento fijo más reparación variable según lo que se encuentre. La mayor parte de las averías urgentes de cuadro se resuelven con la sustitución de un elemento de protección o la reparación de un empalme — trabajos de 1–2 horas. Las averías que requieren renovación parcial de la instalación se presupuestan tras el diagnóstico.',

    errores: [
      { error: 'Intentar reponer el diferencial repetidamente sin identificar la causa', consecuencia: 'El diferencial salta porque detecta una fuga de corriente real. Reponer varias veces sin identificar la causa puede dañar el aparato de protección y, si hay un problema grave de aislamiento, puede provocar un incendio. Cada reposición fallida es una señal de que hay algo que requiere diagnóstico profesional.' },
      { error: 'Ignorar el olor a quemado en el cuadro o en un enchufe', consecuencia: 'El olor a quemado en instalación eléctrica es la señal más grave: indica que hay un punto donde el cable está sobrecalentándose, quizás hasta el punto de quemar el aislamiento. Un cable con aislamiento quemado en el interior de la pared puede provocar un incendio sin signos visibles previos. Es la urgencia eléctrica que no puede esperar ni una hora.' },
      { error: 'Conectar todos los aparatos al mismo circuito tras una avería por sobrecarga', consecuencia: 'Si el magnetotérmico saltó por sobrecarga, volver a conectar la misma carga lo hará saltar de nuevo o, peor, degradará el elemento hasta que deje de funcionar correctamente. La solución real es redistribuir la carga entre circuitos o ampliar la capacidad del cuadro.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-bolt', titulo: 'Electricista propio en menos de 2 horas', texto: 'No enviamos empresa subcontratada: nuestro electricista propio conoce el parque de instalaciones de Madrid y llega con el instrumental de diagnóstico adecuado. En Madrid capital el tiempo de respuesta es habitualmente inferior a dos horas.' },
      { icon: 'fa-solid fa-magnifying-glass', titulo: 'Diagnóstico que va a la causa raíz', texto: 'No sustituimos el diferencial y nos vamos. Identificamos por qué saltó para que no vuelva a saltar mañana. Si el problema es estructural — instalación sobrecargada, cableado de aluminio degradado — te lo decimos con un presupuesto de mejora.' },
      { icon: 'fa-solid fa-triangle-exclamation', titulo: 'Seguridad antes que rapidez', texto: 'No restablecemos el suministro si no está claro que es seguro hacerlo. Preferimos dejar una derivación temporal y volver al día siguiente para la reparación definitiva que reestablecer una instalación que puede provocar un incendio horas después.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y tiempo de llegada', descripcion: 'Cuando recibes la avería llámanos. Confirmamos disponibilidad y damos tiempo de llegada. Para urgencias con olor a quemado o riesgo de incendio, priorizamos sobre cualquier otro trabajo en curso.' },
      { numero: '02', titulo: 'Diagnóstico sin abrir nada innecesariamente', descripcion: 'Empezamos por el cuadro y por la identificación del circuito afectado. Usamos multímetro y pinza para medir sin abrir paredes. Solo cuando el diagnóstico apunta a un punto específico realizamos la apertura necesaria.' },
      { numero: '03', titulo: 'Reparación o solución transitoria', descripcion: 'Reparamos el punto defectuoso. Si la reparación definitiva requiere materiales que no tenemos en la furgoneta o más tiempo del disponible, instalamos una solución transitoria segura y acordamos la visita de reparación definitiva.' },
      { numero: '04', titulo: 'Prueba y recomendaciones', descripcion: 'Probamos con carga real durante al menos 15 minutos antes de dar la reparación por cerrada. Si hay otros puntos de riesgo en la instalación, te los comunicamos y te presupuestamos la mejora.' },
    ],

    faq: [
      { pregunta: '¿Qué hago cuando salta el diferencial y no recupera?', respuesta: 'Primero desconecta todos los aparatos de los enchufes del circuito afectado — incluidos los que están en standby. Luego intenta reponer el diferencial. Si recupera, ve conectando aparatos de uno en uno hasta que vuelva a saltar: el que lo hace saltar es el defectuoso. Si no recupera aunque desconectes todo, hay un problema en la instalación que requiere un electricista.' },
      { pregunta: '¿Cuándo es una emergencia real (llamar de madrugada) y cuándo puede esperar al día siguiente?', respuesta: 'Es emergencia inmediata si hay olor a quemado, chispas o humo visible en cualquier punto de la instalación, o si hay agua en contacto con instalación eléctrica. Puede esperar al día siguiente si el corte es parcial (una zona sin luz pero el resto funciona), la nevera y los equipos críticos siguen operativos y no hay señales de calor o quemado.' },
      { pregunta: '¿Podéis renovar el cuadro eléctrico si es muy antiguo?', respuesta: 'Sí. Si en el diagnóstico de la urgencia detectamos que el cuadro es obsoleto o que la instalación tiene déficits estructurales, te presupuestamos la renovación completa. Es un trabajo que se puede planificar para hacerlo sin urgencia, con presupuesto cerrado y en la fecha que mejor te convenga.' },
      { pregunta: '¿Cubren las averías eléctricas en locales de hostelería?', respuesta: 'Sí. Nuestro electricista tiene experiencia en instalaciones trifásicas de uso industrial, cuadros de hostelería con alta densidad de protecciones y conexiones a maquinaria. El diagnóstico en un local es más complejo que en una vivienda, pero el proceso es el mismo.' },
    ],

    ctaTitulo: 'Sin luz no hay servicio. Electricista el mismo día.',
    ctaDescripcion: 'Diagnóstico y reparación urgente. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M04',
    slug: 'atasco-urgente-sumidero-vivienda-madrid',
    titulo: 'Atasco urgente de sumidero en vivienda — Madrid',
    subtitulo: 'El desagüe de baño o cocina bloqueado, resuelto el mismo día sin obras.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Un atasco en el desagüe de baño o cocina de una vivienda puede ser un problema menor o el síntoma de un bloqueo en la columna general del edificio. Oro Constructores diagnostica el origen del atasco — si está en el ramal de la vivienda o en la bajante — lo desatasca con maquinaria profesional y verifica que el desagüe fluye correctamente antes de salir. Atendemos en Madrid el mismo día.',

    stats: [
      { valor: '1–3h', label: 'tiempo habitual de resolución de un atasco de vivienda con maquinaria profesional' },
      { valor: '70%', label: 'de los atascos de vivienda están en los primeros 3 metros del ramal, accesibles sin obras' },
      { valor: '150–350€', label: 'coste habitual de desatasco profesional de vivienda en Madrid' },
    ],

    contexto: 'Los atascos en vivienda se acumulan lentamente: grasa, jabón, pelo, restos de alimentos. La señal de alarma es cuando el desagüe empieza a ir lento antes de bloquearse completamente. Cuando el bloqueo es total — el agua no baja o reflota — es una urgencia porque el baño o la cocina quedan inutilizables. En edificios con columna compartida, un bloqueo en la bajante puede afectar a varias viviendas a la vez y requiere intervención en el ramal general.\n\nLa diferencia entre un atasco en el ramal de la vivienda y un bloqueo en la columna general es importante para saber quién paga y quién actúa. El ramal interior de la vivienda es responsabilidad del propietario. La columna general y los colectores son responsabilidad de la comunidad. Diagnosticar correctamente el origen del atasco antes de actuar evita que el propietario pague un trabajo que corresponde a la comunidad, o viceversa.\n\nOro Constructores desatasca con maquinaria profesional — espiral mecánica e hidrojetting — no con productos químicos que dañan las tuberías y solo desplazan el problema. La maquinaria permite alcanzar atascos a 10–15 metros de profundidad en el ramal sin abrir nada, y el hidrojetting limpia las paredes interiores de la tubería eliminando la capa de grasa que genera los atascos recurrentes.',

    perfiles: [
      { tipo: 'Propietario con baño o cocina bloqueada', descripcion: 'El desagüe no baja o el inodoro no descarga. No puede usar el baño. Ha intentado el émbolo o el producto químico y no funciona. Necesita que alguien llegue hoy con maquinaria real para resolverlo.' },
      { tipo: 'Administrador de fincas con atasco en columna general', descripcion: 'Varios vecinos del mismo montante tienen el desagüe lento o bloqueado. Es un problema de comunidad que requiere intervención en la bajante, no en las viviendas individuales. Necesita un servicio que actúe en las zonas comunes y documente la intervención para el acta de la comunidad.' },
    ],

    trabajoDetalle: 'El desatasco profesional de vivienda empieza por el diagnóstico del origen. Si el atasco es en el ramal de la cocina o el baño de la propia vivienda, se actúa con espiral mecánica desde el sumidero o el sifón. Si el atasco está más profundo — en la columna o en el colector — se necesita acceder desde el punto de inspección (arqueta o registro de limpieza). En edificios sin registro accesible, la espiral puede introducirse desde el propio sumidero de la vivienda hasta alcanzar el bloqueo.\n\nEl hidrojetting es la solución más efectiva para atascos de grasa consolidada y para prevenir la recurrencia. A diferencia de la espiral, que perfora el bloqueo pero deja restos en las paredes de la tubería, el agua a presión limpia la sección completa de la tubería. Es especialmente útil en bajantes de edificios donde la grasa acumulada durante años va estrechando progresivamente la sección hasta bloquearla.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Diagnóstico del origen del atasco', descripcion: 'Verificamos si el problema está en el ramal de la vivienda o en la columna general. Si varios vecinos tienen el mismo problema en el mismo montante, es columna. Si solo lo tiene esta vivienda, es ramal interior. Esta distinción determina quién actúa y quién paga.' },
      { numero: '02', titulo: 'Desatasco con espiral mecánica', descripcion: 'Introducimos la espiral mecánica desde el sumidero más cercano al bloqueo. La espiral rompe el tapón y arrastra los residuos que lo forman. Verificamos que el agua fluye libremente antes de retirar la espiral.' },
      { numero: '03', titulo: 'Limpieza con agua a presión si hay acumulación de grasa', descripcion: 'Si el atasco es de grasa o si la tubería tiene historial de atascos recurrentes, aplicamos hidrojetting para limpiar las paredes interiores de la tubería. Esto reduce significativamente la probabilidad de que el atasco vuelva en pocas semanas.' },
      { numero: '04', titulo: 'Verificación del desagüe y recomendaciones', descripcion: 'Probamos el desagüe con caudal real durante varios minutos. Si detectamos signos de rotura o deformación en la tubería, lo comunicamos al cliente con las opciones de reparación. Recomendamos medidas preventivas para evitar atascos recurrentes.' },
    ],

    materiales: [
      { tipo: 'Atasco en sifón o primeros metros del ramal', tecnica: 'Espiral manual o eléctrica de 6mm', cuandoUsarla: 'La mayoría de atascos de pelo y jabón en baño. Rápido y sin equipo especializado pesado.' },
      { tipo: 'Atasco profundo en ramal (3–10m)', tecnica: 'Espiral eléctrica de mayor calibre', cuandoUsarla: 'Atascos que no ceden con espiral de baño. Requiere equipo más potente.' },
      { tipo: 'Atasco por grasa consolidada en bajante', tecnica: 'Hidrojetting (agua a presión 100–200 bar)', cuandoUsarla: 'Bajantes de edificios con historial de atascos recurrentes. Limpia la sección completa.' },
      { tipo: 'Bloqueo en colector o arqueta exterior', tecnica: 'Espiral de gran calibre o camión cuba', cuandoUsarla: 'Atascos en red horizontal de saneamiento del edificio. Normalmente trabajo de comunidad.' },
    ],

    queIncluye: [
      'Diagnóstico del origen del atasco (ramal de vivienda o columna general)',
      'Desatasco con espiral mecánica hasta resolver el bloqueo',
      'Hidrojetting de limpieza si hay acumulación de grasa (incluido en precio)',
      'Verificación del desagüe con caudal real antes de salir',
      'Recomendaciones para evitar atascos recurrentes',
    ],
    queNoIncluye: [
      'Reparación de tuberías rotas o deformadas (presupuesto aparte)',
      'Actuación en columna general del edificio (corresponde a la comunidad)',
      'Trabajos en red exterior (arquetas, colectores) — presupuesto aparte',
    ],

    precios: [
      { trabajo: 'Desatasco de baño o cocina (atasco en ramal de vivienda)', precio: '150–250€', nota: 'Sin IVA. Incluye espiral mecánica e hidrojetting básico.' },
      { trabajo: 'Recargo urgencia fuera de horario o fin de semana', precio: '+75–150€', nota: 'Sobre el precio base.' },
      { trabajo: 'Desatasco de bajante general (trabajo de comunidad)', precio: '300–600€', nota: 'Según longitud y accesibilidad del montante.' },
      { trabajo: 'Hidrojetting de limpieza profunda de bajante', precio: '400–800€', nota: 'Para bajantes con historial de atascos recurrentes. Limpia la sección completa.' },
    ],
    preciosContexto: 'El coste del desatasco varía principalmente por la profundidad del bloqueo y la maquinaria necesaria. Un atasco de pelo en el sifón del baño es barato y rápido. Un bloqueo en la bajante a 15 metros de profundidad con grasa consolidada requiere más tiempo y maquinaria específica. El hidrojetting tiene un coste inicial más alto pero reduce los atascos recurrentes durante 2–5 años.',

    errores: [
      { error: 'Usar productos químicos de desatasco de forma continuada', consecuencia: 'Los productos ácidos o básicos de desatasco dañan las tuberías de PVC y los juntas de goma a largo plazo. Además, solo disuelven parcialmente el bloqueo — los restos quedan en las paredes de la tubería y aceleran el siguiente atasco. Son una solución de emergencia de corto plazo, no un mantenimiento.' },
      { error: 'No identificar si el atasco es de ramal o de columna antes de actuar', consecuencia: 'Si el propietario paga un desatasco de su ramal cuando el problema está en la columna general (que es responsabilidad de la comunidad), el atasco volverá en días. Y si la comunidad actúa en la columna cuando el problema está en el ramal de una vivienda, la columna queda limpia pero la vivienda sigue bloqueada.' },
      { error: 'Ignorar los atascos recurrentes como señal de problema estructural en la red', consecuencia: 'Un atasco que vuelve cada 2–3 meses en el mismo punto indica que hay un problema estructural: rotura, deformación, raíces de árbol, pendiente insuficiente. El desatasco repetido sin resolver la causa raíz es un coste acumulado que supera el de una reparación definitiva.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-wrench', titulo: 'Maquinaria profesional, no émbolos ni químicos', texto: 'Trabajamos con espiral mecánica profesional e hidrojetting. La diferencia con los productos de bricolaje o los químicos es que la maquinaria alcanza donde está el bloqueo real y limpia la tubería, no solo abre un agujero que se cierra en semanas.' },
      { icon: 'fa-solid fa-magnifying-glass', titulo: 'Diagnóstico de ramal vs. columna antes de actuar', texto: 'Identificamos si el problema está en tu vivienda o en la columna general antes de hacer ningún trabajo. Esto evita que pagues un trabajo que corresponde a la comunidad o que el trabajo se haga en el sitio equivocado.' },
      { icon: 'fa-solid fa-calendar-check', titulo: 'El mismo día, con garantía de resultado', texto: 'Garantizamos que el desagüe queda funcionando antes de salir. Si el bloqueo requiere más de una intervención, volvemos sin coste adicional de desplazamiento hasta resolverlo.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y diagnóstico telefónico', descripcion: 'Cuando llamas, te preguntamos por los síntomas: cuántos desagües están afectados, si es solo esta vivienda o hay más vecinos, desde cuándo. Con esta información podemos estimar si es ramal o columna y dimensionar el equipo necesario.' },
      { numero: '02', titulo: 'Llegada y diagnóstico in situ', descripcion: 'Confirmamos el diagnóstico in situ con prueba de caudal en los distintos puntos de la vivienda. Si hay sospecha de bloqueo en columna, coordinamos con el administrador de fincas para la actuación en zonas comunes.' },
      { numero: '03', titulo: 'Desatasco y limpieza', descripcion: 'Introducimos la espiral desde el punto más cercano al bloqueo. Una vez resuelto, aplicamos hidrojetting si hay acumulación de grasa o si el cliente quiere una limpieza profunda preventiva.' },
      { numero: '04', titulo: 'Verificación y recomendaciones', descripcion: 'Probamos el desagüe con caudal real y verificamos que todos los puntos de la vivienda funcionan correctamente. Si detectamos señales de rotura o problema estructural en la red, lo comunicamos con las opciones de reparación.' },
    ],

    faq: [
      { pregunta: '¿Cómo sé si el atasco está en mi vivienda o en la columna del edificio?', respuesta: 'Si solo está afectado un desagüe de tu vivienda (el baño, la cocina), es casi seguro que el problema está en tu ramal. Si están afectados varios desagües a la vez, o si los vecinos del mismo montante también tienen el problema, es la columna general. Llámanos y con los síntomas que nos describes podemos orientarte antes de ir.' },
      { pregunta: '¿Los productos de desatasco del supermercado funcionan?', respuesta: 'Para atascos de pelo y jabón en el sifón del baño, sí pueden funcionar como solución temporal. Para atascos de grasa en la cocina o bloqueos profundos en el ramal, no son efectivos y con el tiempo dañan las tuberías. Si el producto no ha funcionado en 24 horas, es señal de que el bloqueo requiere maquinaria.' },
      { pregunta: '¿Qué es el hidrojetting y cuándo lo necesito?', respuesta: 'El hidrojetting es agua a presión muy alta (100–200 bar) que limpia las paredes interiores de la tubería. Es más efectivo que la espiral para atascos de grasa y para la limpieza preventiva de tuberías con tendencia a atascarse. Si tienes atascos recurrentes en el mismo punto, el hidrojetting es la solución que los elimina durante años.' },
      { pregunta: '¿Podéis actuar en sábado o domingo?', respuesta: 'Sí, atendemos urgencias los siete días de la semana. Los fines de semana tienen un recargo que comunicamos al confirmar la visita.' },
    ],

    ctaTitulo: 'El desagüe funcionando hoy, sin esperas ni productos químicos.',
    ctaDescripcion: 'Desatasco profesional con maquinaria. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M05',
    slug: 'atasco-urgente-grasa-hosteleria-madrid',
    titulo: 'Atasco de cocina industrial por grasa — hostelería Madrid',
    subtitulo: 'La trampa de grasa colapsada paraliza la cocina. La limpiamos y la dejamos operativa.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'La cocina industrial de un restaurante genera más grasa en una semana que una vivienda en un año. La trampa de grasa y el ramal de desagüe de cocina se colmatan con una velocidad que muchos propietarios subestiman. Cuando la cocina pierde el desagüe, el suelo se inunda, el servicio se detiene y la inspección sanitaria puede obligar al cierre. Oro Constructores desatasca y limpia la red de desagüe de cocinas industriales en Madrid el mismo día, con maquinaria de hidrojetting de uso profesional.',

    stats: [
      { valor: '1/semana', label: 'frecuencia mínima de limpieza de trampa de grasa recomendada en cocinas de alta rotación' },
      { valor: '400–800€', label: 'coste de limpieza profesional de trampa de grasa e hidrojetting de ramal en cocina industrial Madrid' },
      { valor: '100%', label: 'de los locales hosteleros con cocina de producción están obligados a instalar trampa de grasa (Ordenanza Madrid)' },
    ],

    contexto: 'La trampa de grasa es un elemento obligatorio en todas las cocinas industriales de Madrid según la Ordenanza Municipal de Saneamiento. Retiene la grasa antes de que entre en la red de alcantarillado, donde podría causar bloqueos en la red municipal. El problema es que la trampa de grasa tiene que limpiarse con regularidad — entre una vez por semana y una vez al mes según el volumen de producción — y muchos locales no tienen un protocolo de limpieza establecido hasta que la trampa colapsa.\n\nCuando la trampa de grasa colapsa, la grasa acumulada empieza a pasar a la red de desagüe aguas abajo, donde se solidifica y forma tapones que pueden extenderse varios metros dentro del ramal. A diferencia de un atasco de vivienda, los atascos de grasa en cocina industrial son compactos y resistentes: no ceden con espiral estándar y requieren hidrojetting a alta presión para disolver y arrastrar la grasa solidificada.\n\nEn Madrid, la Agencia de Actividades puede sancionar a locales que no tienen trampa de grasa en buen estado de funcionamiento o que vierten grasa a la red sin tratamiento previo. La sanción puede incluir el precinto del local hasta que se acredite el buen funcionamiento del sistema de separación de grasas.',

    perfiles: [
      { tipo: 'Jefe de cocina que encuentra el desagüe bloqueado en hora de preparación', descripcion: 'Está preparando el servicio y el suelo de la cocina empieza a inundarse. El desagüe de la cocina no tira. Necesita que alguien llegue inmediatamente y lo resuelva antes de que empiece el servicio. No puede permitirse tener el servicio parado.' },
      { tipo: 'Propietario de restaurante con multa de inspección sanitaria por trampa de grasa', descripcion: 'Ha recibido una notificación de la Agencia de Actividades por la trampa de grasa en mal estado. Necesita limpiarla, dejar constancia documental y establecer un protocolo de mantenimiento para acreditar el cumplimiento en la próxima inspección.' },
    ],

    trabajoDetalle: 'El desatasco de cocina industrial tiene dos partes diferenciadas que habitualmente deben hacerse juntas. La primera es la limpieza de la trampa de grasa: vaciado del contenido, limpieza interior de los compartimentos y verificación del buen estado de las juntas y la tapa. La segunda es la limpieza del ramal de desagüe aguas abajo de la trampa: el hidrojetting elimina la grasa que ha pasado más allá de la trampa y se ha adherido a las paredes de la tubería.\n\nSi solo se limpia la trampa sin limpiar el ramal, el atasco en el ramal puede persistir. Y si solo se desatasca el ramal sin limpiar la trampa, la grasa de la trampa llena el ramal de nuevo en días. Las dos actuaciones son complementarias. Además, la inspección visual de la trampa durante la limpieza permite identificar si tiene algún defecto estructural — juntas en mal estado, tapa rota — que podría causar problemas en la siguiente inspección sanitaria.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Vaciado y limpieza de la trampa de grasa', descripcion: 'Vaciamos la trampa de grasa con medios manuales o con bomba de vacío según el volumen. Limpiamos los compartimentos interiores y las superficies de separación. Verificamos el estado de las juntas y la tapa. El contenido va a gestor de residuos autorizado para grasas de cocina.' },
      { numero: '02', titulo: 'Hidrojetting del ramal de desagüe', descripcion: 'Introducimos la boquilla de hidrojetting en el ramal de desagüe de la cocina, aguas abajo de la trampa. El agua a alta presión disuelve la grasa solidificada en las paredes de la tubería y la arrastra hacia la red municipal. Trabajamos hasta que el caudal fluye libremente.' },
      { numero: '03', titulo: 'Verificación del desagüe con caudal real', descripcion: 'Probamos el desagüe con el caudal real de la cocina: agua caliente de todos los puntos de fregado a la vez durante varios minutos. Si el desagüe fluye libremente, la intervención es correcta. Si no, repetimos el hidrojetting en el tramo que aún resiste.' },
      { numero: '04', titulo: 'Recomendaciones de mantenimiento y registro', descripcion: 'Recomendamos la frecuencia de limpieza de la trampa según el volumen de producción del local y entregamos el albarán de servicio. Para locales con contrato de mantenimiento, programamos la próxima limpieza en el calendario.' },
    ],

    materiales: [
      { tipo: 'Trampa de grasa bajo fregadero (hasta 50L)', tecnica: 'Vaciado manual + limpieza interior', cuandoUsarla: 'Locales pequeños con producción limitada. Limpieza semanal o quincenal.' },
      { tipo: 'Trampa de grasa enterrada (100–500L)', tecnica: 'Vaciado con bomba de vacío', cuandoUsarla: 'Restaurantes de mediana y gran producción. Limpieza mensual o más frecuente.' },
      { tipo: 'Ramal de desagüe con grasa adherida (PVC o fundición)', tecnica: 'Hidrojetting 150–200 bar', cuandoUsarla: 'Siempre tras la limpieza de trampa de grasa si hay historial de atascos.' },
      { tipo: 'Colector general del local con acumulación de grasa', tecnica: 'Hidrojetting de mayor potencia o camión cuba', cuandoUsarla: 'Locales con mucha antigüedad o sin mantenimiento de saneamiento durante años.' },
    ],

    queIncluye: [
      'Vaciado y limpieza de la trampa de grasa (hasta 200L de capacidad)',
      'Hidrojetting del ramal de desagüe de cocina hasta la bajante',
      'Verificación del desagüe con caudal real antes de finalizar',
      'Albarán de servicio con fecha, descripción del trabajo y estado de la trampa',
      'Recomendaciones de frecuencia de mantenimiento',
    ],
    queNoIncluye: [
      'Gestión de la grasa retirada como residuo (se puede añadir con gestor autorizado)',
      'Reparación o sustitución de trampa de grasa en mal estado estructural (presupuesto aparte)',
      'Hidrojetting de colector general del edificio (trabajo de comunidad o presupuesto aparte)',
    ],

    precios: [
      { trabajo: 'Limpieza de trampa de grasa hasta 50L + hidrojetting ramal', precio: '300–500€', nota: 'Sin IVA. Para locales pequeños y tramos de hasta 10m.' },
      { trabajo: 'Limpieza de trampa de grasa 50–200L + hidrojetting ramal', precio: '400–800€', nota: 'Sin IVA. Para restaurantes de mediana producción.' },
      { trabajo: 'Urgencia fuera de horario o fin de semana', precio: '+50–100%', nota: 'Sobre la tarifa base.' },
      { trabajo: 'Contrato de mantenimiento trimestral (4 limpiezas/año)', precio: '900–1.600€/año', nota: 'Tarifa reducida y prioridad en urgencias.' },
    ],
    preciosContexto: 'El coste de la limpieza de trampa de grasa varía según el volumen de la trampa y la longitud y estado del ramal de desagüe. Los locales con historial de falta de mantenimiento tienen ramal más obstruido y tardan más en limpiar. Con contrato de mantenimiento, el coste por limpieza se reduce entre un 20% y un 40% respecto a la intervención puntual.',

    errores: [
      { error: 'No limpiar la trampa de grasa hasta que colapsa', consecuencia: 'Una trampa colapsada no retiene grasa: la deja pasar directamente a la red de saneamiento municipal, lo que agrava el bloqueo en el ramal y puede generar una denuncia al Ayuntamiento de Madrid. Además, el coste de la intervención de urgencia cuando hay bloqueo es entre dos y tres veces mayor que el de una limpieza de mantenimiento preventivo.' },
      { error: 'Verter agua caliente y detergente para disolver la grasa como sustituto de la limpieza', consecuencia: 'El agua caliente y el detergente desplazan la grasa más abajo en el ramal pero no la eliminan. La grasa se enfría y se solidifica en un punto diferente, habitualmente donde hay un cambio de dirección en la tubería. El tapón aparece igualmente, pero en un lugar más difícil de acceder.' },
      { error: 'No documentar las limpiezas de la trampa de grasa', consecuencia: 'La Agencia de Actividades de Madrid puede exigir el registro de mantenimiento de la trampa de grasa en una inspección. Sin registros, el local no puede acreditar el cumplimiento de la ordenanza aunque haya hecho las limpiezas. Una sanción por falta de documentación puede suponer multa y requerimiento de mejora con plazo.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-droplet', titulo: 'Hidrojetting profesional, no espiral ni químicos', texto: 'Los atascos de grasa industrial no ceden con espiral estándar. El hidrojetting a 150–200 bar disuelve y arrastra la grasa solidificada en toda la sección de la tubería, no solo abre un agujero que se cierra en semanas.' },
      { icon: 'fa-solid fa-calendar-check', titulo: 'Contratos de mantenimiento que evitan las urgencias', texto: 'Los clientes con contrato de mantenimiento de trampa de grasa nunca tienen urgencias de atasco en cocina. Programamos las limpiezas preventivas y el local sabe que la trampa siempre está en buen estado para una inspección.' },
      { icon: 'fa-solid fa-file-lines', titulo: 'Registro documental para la inspección', texto: 'Emitimos albarán en cada limpieza con fecha, descripción del trabajo y estado de la trampa. Este registro es el que la Agencia de Actividades exige para acreditar el mantenimiento correcto de la instalación.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y priorización del servicio', descripcion: 'Los avisos de cocina industrial con desagüe bloqueado tienen prioridad por el impacto en el servicio. Confirmamos disponibilidad y damos tiempo de llegada real. Para locales con apertura temprana, podemos llegar antes de las 8:00 si el aviso llega la noche anterior.' },
      { numero: '02', titulo: 'Evaluación de la trampa y del ramal', descripcion: 'Inspeccionamos la trampa de grasa y el ramal de desagüe. Evaluamos el nivel de obstrucción y el estado de la trampa para determinar si la intervención es solo limpieza o si hay elementos dañados que requieren sustitución.' },
      { numero: '03', titulo: 'Limpieza de trampa e hidrojetting del ramal', descripcion: 'Vaciamos la trampa, la limpiamos interiormente y aplicamos hidrojetting al ramal de desagüe. El trabajo se hace en el orden correcto: trampa primero, ramal después, para no recontaminar el ramal limpio con la grasa de la trampa.' },
      { numero: '04', titulo: 'Verificación y entrega de documentación', descripcion: 'Probamos el desagüe con caudal real. Entregamos el albarán de servicio con la descripción completa del trabajo. Si el estado de la trampa o del ramal indica que hay que actuar estructuralmente, lo presupuestamos en ese momento.' },
    ],

    faq: [
      { pregunta: '¿Con qué frecuencia hay que limpiar la trampa de grasa?', respuesta: 'Depende del volumen de producción. Un bar con cocina de tapas puede necesitar limpieza mensual. Un restaurante de alta rotación o con producción intensa puede necesitar limpieza semanal. La señal de que hay que limpiarla antes de que se programe es cuando el desagüe empieza a ir lento.' },
      { pregunta: '¿La trampa de grasa es obligatoria en todos los locales?', respuesta: 'Sí, en todos los locales de hostelería con cocina en Madrid según la Ordenanza Municipal de Saneamiento. Sin trampa de grasa operativa, el local puede ser sancionado por la Agencia de Actividades y se le puede exigir la instalación antes de reanudar la actividad.' },
      { pregunta: '¿Podéis hacer un contrato de mantenimiento para el local?', respuesta: 'Sí, es nuestra recomendación para locales con producción regular. El contrato de mantenimiento incluye limpiezas preventivas programadas, prioridad en urgencias y tarifa reducida. El coste anual del contrato es menor que el de dos urgencias de bloqueo.' },
      { pregunta: '¿Qué documentación entregáis para la inspección sanitaria?', respuesta: 'Entregamos albarán de servicio en cada intervención con fecha, descripción del trabajo, volumen de grasa retirado y estado de la trampa. Este documento es suficiente para acreditar el mantenimiento ante la Agencia de Actividades de Madrid.' },
    ],

    ctaTitulo: 'La cocina limpia y el desagüe operativo antes del servicio.',
    ctaDescripcion: 'Limpieza de trampa de grasa e hidrojetting. El mismo día. Con documentación para la inspección.',
  },

  {
    codigo: 'M06',
    slug: 'campana-extraccion-averiada-hosteleria-madrid',
    titulo: 'Campana de extracción averiada en hostelería — Madrid',
    subtitulo: 'Sin extracción la cocina no puede operar. Diagnóstico y reparación el mismo día.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Una cocina industrial sin campana de extracción operativa no puede abrir al público. Los humos se acumulan en sala, la temperatura sube y la normativa prohíbe operar sin extracción activa. Cada hora que la cocina no extrae es una hora de servicio perdido. Oro Constructores diagnostica y repara averías de campana de extracción en locales hosteleros de Madrid el mismo día, con técnico propio que conoce las instalaciones industriales de cocina.',

    stats: [
      { valor: 'Obligatoria', label: 'la extracción en cocinas industriales según normativa de apertura de locales en Madrid' },
      { valor: '85%', label: 'de las averías de campana industrial se deben a motor, filtros o problema eléctrico — todos reparables en el día' },
      { valor: '2–48h', label: 'rango de tiempo de reparación según si hay pieza disponible o hay que pedirla' },
    ],

    contexto: 'La campana de extracción en una cocina industrial no es un elemento opcional. Es una exigencia de la normativa de actividades de Madrid y una condición imprescindible para que la cocina funcione de forma segura. Sin extracción, los vapores de grasa se acumulan en el ambiente, el calor se dispara y los humos llegan a la sala. Operar sin campana no solo es una infracción administrativa — en caso de incendio, la falta de extracción puede constituir una negligencia con consecuencias legales graves.\n\nLas causas de avería en campanas industriales siguen un patrón claro. La causa más frecuente son los filtros de grasa saturados: cuando no se limpian con regularidad, la acumulación de grasa reduce el caudal hasta detenerlo y convierte la campana en un riesgo de incendio. El motor es la segunda causa: los motores de campana industrial trabajan con grasa en el ambiente y se desgastan. La correa de transmisión (en modelos con mando indirecto) y los problemas eléctricos completan el cuadro de averías habituales.\n\nOro Constructores diagnostica y repara averías de campana en Madrid el mismo día. No somos servicio técnico de fabricante, pero sí somos instaladores con experiencia en campanas industriales y conocemos las causas de avería más frecuentes. Si la reparación requiere una pieza específica que no tenemos en furgoneta, lo comunicamos con el tiempo real de espera y buscamos soluciones provisionales mientras llega.',

    perfiles: [
      { tipo: 'Cocinero o encargado que llega y la campana no arranca', descripcion: 'Ha encendido la cocina y la campana no responde. El servicio del mediodía está en riesgo. Necesita saber en menos de una hora si la avería se puede resolver hoy o si hay que preparar un plan alternativo. No puede esperar a que un técnico de fabricante le dé cita para la semana que viene.' },
      { tipo: 'Propietario de restaurante con campana que extrae poco', descripcion: 'Los cocineros llevan semanas quejándose del calor y del olor en sala. La campana funciona pero no extrae bien. Sabe que en cualquier momento la inspección puede levantar un acta. Necesita que alguien revise la campana, identifique el problema y lo resuelva de forma definitiva.' },
    ],

    queEs: 'La avería de campana industrial es cualquier situación en que el sistema de extracción de una cocina profesional no funciona correctamente: sin caudal de aire, con caudal reducido, con ruido anormal o con indicaciones de avería en el panel. Incluye averías en el motor, en los filtros, en la instalación eléctrica de la campana y en los conductos de evacuación accesibles.',

    trabajoDetalle: 'El diagnóstico de una campana averiada sigue un orden lógico. Primero se verifica si la avería es eléctrica: si la campana no arranca en absoluto, el problema puede estar en el interruptor, en el fusible de la línea o en el motor. Si arranca pero extrae poco, el problema está casi siempre en los filtros saturados o en el motor con el rodamiento desgastado. Si hay ruido anormal, el problema puede ser la correa de transmisión o un desequilibrio en el rodete del motor.\n\nLos filtros de grasa son el punto de mantenimiento más ignorado en cocinas industriales. Un filtro metálico de acero inoxidable saturado de grasa tiene una resistencia al paso del aire que puede reducir el caudal al 20% del nominal. Esto no solo inutiliza la extracción sino que convierte el filtro en una mecha potencial en caso de fuego en la cocina. La limpieza de filtros es una intervención de mantenimiento que Oro Constructores recomienda incorporar al protocolo semanal de la cocina.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Diagnóstico eléctrico y mecánico', descripcion: 'Verificamos si la campana recibe tensión, si el motor arranca y si el selector de velocidades funciona. Inspeccionamos los filtros de grasa y el estado visual del motor y la correa. En 15–20 minutos tenemos la causa probable de la avería.' },
      { numero: '02', titulo: 'Limpieza de filtros si es la causa o parte del problema', descripcion: 'Desmontamos los filtros metálicos, los limpiamos con desengrasante industrial y los volvemos a colocar. Si los filtros están dañados o deformados, los sustituimos. Esta operación por sí sola resuelve la mayoría de los casos de extracción reducida.' },
      { numero: '03', titulo: 'Reparación o sustitución del elemento defectuoso', descripcion: 'Motor averiado: evaluamos si se puede reparar in situ o requiere sustitución. Problema eléctrico: reparamos la línea, el interruptor o el regulador. Correa rota: sustitución inmediata si tenemos el repuesto, o provisional si hay que pedir la medida exacta.' },
      { numero: '04', titulo: 'Prueba de caudal y verificación antes del servicio', descripcion: 'Encendemos la campana a todas las velocidades y verificamos el caudal de extracción. Comprobamos que no hay ruidos anormales. Si la reparación es provisional por falta de pieza, comunicamos el plazo de la reparación definitiva y lo que el local puede hacer mientras tanto.' },
    ],

    materiales: [
      { tipo: 'Filtros de grasa saturados (acero inoxidable)', tecnica: 'Limpieza con desengrasante industrial o sustitución', cuandoUsarla: 'Causa más frecuente de extracción reducida. Se identifican por el color y el peso al desmontarlos.' },
      { tipo: 'Motor de campana averiado', tecnica: 'Sustitución del motor por equivalente', cuandoUsarla: 'Cuando el motor no arranca o tiene rodamiento roto. El motor es la pieza que más tarda en llegar si no está en stock.' },
      { tipo: 'Correa de transmisión rota (campanas con mando indirecto)', tecnica: 'Sustitución de la correa por medida exacta', cuandoUsarla: 'Campanas con motor separado del rodete. Fallo repentino y ruidoso. Pieza rápida de sustituir si se tiene en stock.' },
      { tipo: 'Regulador de velocidad o interruptor defectuoso', tecnica: 'Sustitución del elemento', cuandoUsarla: 'Cuando la campana no responde al mando o funciona solo a una velocidad.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Diagnóstico completo: eléctrico, mecánico y de filtros',
      'Limpieza de filtros de grasa si es parte de la avería o causa directa',
      'Reparación del elemento defectuoso (interruptor, regulador, correa, motor si disponible)',
      'Prueba de caudal a todas las velocidades antes de finalizar',
      'Informe de la avería y recomendaciones de mantenimiento preventivo',
    ],
    queNoIncluye: [
      'Instalación de campana nueva si la avería lo requiere (presupuesto aparte)',
      'Limpieza de conductos de extracción (servicio aparte — conductos de chapa requieren empresa especializada)',
      'Piezas que no están en stock y hay que pedir al fabricante (se comunica el plazo)',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico + limpieza de filtros', precio: '200–400€', nota: 'Sin IVA. Resuelve la mayoría de los casos de extracción reducida.' },
      { trabajo: 'Sustitución de regulador o interruptor', precio: '150–300€', nota: 'Aparte del desplazamiento. Incluye material.' },
      { trabajo: 'Sustitución de correa de transmisión', precio: '100–250€', nota: 'Aparte del desplazamiento. Si hay que pedir correa, se presupuesta el tiempo de espera.' },
      { trabajo: 'Sustitución de motor de campana', precio: '400–900€', nota: 'Según potencia y modelo. Incluye material y mano de obra de sustitución.' },
      { trabajo: 'Recargo urgencia fuera de horario o fin de semana', precio: '+50–100%', nota: 'Sobre la tarifa base.' },
    ],
    preciosContexto: 'El coste de la reparación de campana depende de la causa de la avería. La limpieza de filtros y la sustitución de elementos de mando (interruptores, reguladores) son las intervenciones más económicas y resuelven la mayoría de los casos. La sustitución del motor es la intervención más cara y puede requerir esperar la pieza si no está en stock local. En todos los casos, el coste de la reparación debe compararse con el coste de tener la cocina sin extracción un día más.',

    errores: [
      { error: 'No limpiar los filtros de grasa con regularidad', consecuencia: 'Los filtros saturados son la causa más frecuente de avería de campana y, simultáneamente, el mayor riesgo de incendio en una cocina industrial. Un filtro lleno de grasa es combustible acumulado justo encima de los fogones. La limpieza semanal o quincenal de filtros es la medida de prevención más rentable que puede hacer una cocina.' },
      { error: 'Operar con campana averiada o con extracción reducida', consecuencia: 'Además del riesgo de incendio por filtros saturados, operar sin extracción puede ser causa de sanción en una inspección de la Agencia de Actividades. En caso de incendio con filtros en mal estado, el seguro puede denegar la cobertura si se acredita que la campana no estaba en mantenimiento correcto.' },
      { error: 'Llamar al servicio técnico del fabricante para una avería urgente', consecuencia: 'Los servicios técnicos de fabricante tienen plazos de cita habitualmente de 3–7 días. Una cocina industrial no puede esperar una semana sin extracción. Para la urgencia, la solución es un instalador con experiencia en campanas industriales que pueda diagnosticar y reparar el mismo día con las piezas más habituales.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-clock', titulo: 'El mismo día, sin cita previa de fabricante', texto: 'Los servicios técnicos de fabricante dan cita para la semana que viene. Nosotros llegamos el mismo día. Para una cocina industrial sin extracción, la diferencia es la diferencia entre abrir o no abrir.' },
      { icon: 'fa-solid fa-magnifying-glass', titulo: 'Diagnóstico completo, no solo el síntoma', texto: 'No venimos solo a sustituir la pieza que falla. Revisamos los filtros, el motor, la instalación eléctrica y el estado general de la campana. Si hay un problema secundario que va a causar la próxima avería, te lo comunicamos antes de que lo haga.' },
      { icon: 'fa-solid fa-shield-halved', titulo: 'Reparación que cumple normativa', texto: 'Trabajamos con materiales aptos para instalaciones de cocina industrial y dejamos la campana en condiciones de superar una inspección de actividades. No hacemos chapuzas provisionales que te crean un problema administrativo en la próxima inspección.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y confirmación de llegada', descripcion: 'Cuando llamas, confirmamos disponibilidad y damos tiempo de llegada real. Si el aviso llega la noche anterior, podemos organizar la visita para antes de la apertura del local.' },
      { numero: '02', titulo: 'Diagnóstico en 20 minutos', descripcion: 'A la llegada verificamos el estado eléctrico, el motor y los filtros. En 20 minutos tenemos la causa de la avería y te comunicamos si se puede resolver ese mismo día o si hay que esperar alguna pieza.' },
      { numero: '03', titulo: 'Reparación y prueba', descripcion: 'Reparamos el elemento defectuoso, limpiamos los filtros si es necesario y probamos la campana a todas las velocidades. Solo damos la reparación por terminada cuando el caudal es correcto.' },
      { numero: '04', titulo: 'Informe y recomendaciones de mantenimiento', descripcion: 'Emitimos informe de la avería con descripción de la causa, trabajo realizado y materiales. Te recomendamos la frecuencia de mantenimiento de filtros y revisión del motor para evitar la próxima urgencia.' },
    ],

    faq: [
      { pregunta: '¿Podemos operar con la campana averiada mientras esperamos la reparación?', respuesta: 'No es recomendable y en muchos casos no es legal. Sin extracción, la cocina acumula vapores de grasa que son inflamables y que llegan a la sala. Si la avería es de filtros saturados, operar supone riesgo de incendio. Si es de motor, la cocina queda sin ventilación. Lo correcto es suspender la actividad de cocina o limitarla a elaboraciones sin fritura ni plancha hasta que la campana esté operativa.' },
      { pregunta: '¿Con qué frecuencia hay que limpiar los filtros de la campana?', respuesta: 'En cocinas de alta producción (restaurantes con servicio de mediodía y noche), los filtros deben limpiarse semanalmente. En cocinas de menor producción (bares de tapas, desayunos), quincenalmente o mensualmente. La señal de que hay que limpiarlos antes de lo previsto es el goteo de grasa desde la campana durante el servicio.' },
      { pregunta: '¿Y si la pieza que necesita la campana no está disponible?', respuesta: 'Si la avería requiere una pieza que no tenemos en furgoneta y hay que pedirla al fabricante, te lo comunicamos inmediatamente con el plazo real. Buscamos soluciones provisionales que permitan operar con la menor limitación posible mientras llega la pieza. El plazo habitual para piezas de motor es de 1–3 días laborables.' },
      { pregunta: '¿Hacéis también la limpieza de los conductos de extracción?', respuesta: 'La limpieza de conductos de chapa de gran longitud requiere empresa especializada con equipo específico. Nosotros limpiamos la campana, los filtros y el arranque de conducto accesible, pero para la limpieza completa del conducto de extracción desde la cocina hasta la salida de cubierta recomendamos una empresa especializada en limpieza de conductos de cocina industrial, que debe hacerse al menos una vez al año.' },
    ],

    ctaTitulo: 'La campana averiada no puede esperar al técnico de fabricante.',
    ctaDescripcion: 'Diagnóstico y reparación el mismo día. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M07',
    slug: 'banos-fuera-servicio-hostelero-madrid',
    titulo: 'Baños fuera de servicio en local hostelero — Madrid',
    subtitulo: 'Sin baños no se puede abrir. Lo resolvemos antes de que el servicio empiece.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Un restaurante o bar con los baños fuera de servicio no puede abrir al público. La normativa sanitaria lo exige: sin instalaciones sanitarias operativas, el local no está en condiciones de actividad. Y si los baños se averían durante el servicio, el local queda en una situación embarazosa que acaba antes o después en queja o en llamada de inspección. Oro Constructores resuelve averías de baños en locales hosteleros de Madrid el mismo día, sea un atasco, una fuga o una grifería que no para.',

    stats: [
      { valor: 'Obligatorios', label: 'los aseos para clientes en establecimientos hosteleros según la normativa sanitaria de Madrid' },
      { valor: '35%', label: 'de las sanciones sanitarias en hostelería madrileña están relacionadas con instalaciones sanitarias deficientes' },
      { valor: '< 2h', label: 'tiempo de respuesta de Oro Constructores para urgencias de baños en hostelería Madrid capital' },
    ],

    contexto: 'La normativa sanitaria de establecimientos hosteleros en Madrid exige que el local disponga de aseos para clientes en condiciones higiénicas correctas. Sin baños operativos, el local no puede abrir — y si intenta abrir, queda expuesto a sanciones de la Agencia de Actividades que pueden incluir el cierre cautelar. La presión adicional es que los baños de un local hostelero están sometidos a un uso intensivo que multiplica la probabilidad de averías respecto a los de una vivienda.\n\nLas causas más frecuentes de baños fuera de servicio en hostelería son: atasco total (inodoro o sumidero bloqueado sin posibilidad de descarga), tubería reventada por presión o por golpe, cisterna que no funciona (no carga o no descarga) y grifería que no corta el agua. En todos los casos, la urgencia es máxima porque sin baños no hay servicio.\n\nOro Constructores ha visto todas estas situaciones en 30 años de trabajo en hostelería madrileña. La ventaja de trabajar con nosotros en una urgencia de baños es que venimos con herramientas para resolver el problema más frecuente, no a hacer un diagnóstico y volver mañana. La mayoría de las averías de baños en hostelería se resuelven en una sola visita.',

    perfiles: [
      { tipo: 'Gerente que llega al local y los baños están inundados o bloqueados', descripcion: 'Llega por la mañana para preparar la apertura y encuentra los baños con agua en el suelo, o el inodoro desbordado, o el grifo corriendo sin que nada lo pare. Tiene el servicio del mediodía en riesgo. Necesita que alguien llegue antes de la apertura y lo resuelva.' },
      { tipo: 'Propietario que recibe queja de clientes durante el servicio', descripcion: 'El camarero le avisa de que el baño no tira. O peor: un cliente ha salido y ha dicho que hay agua en el suelo. El local sigue con clientes pero los baños son inutilizables. Necesita solución inmediata o sabe que las quejas van a ir escalando.' },
    ],

    queEs: 'Urgencia de baños en hostelería es cualquier situación que deja los aseos del local total o parcialmente fuera de servicio: atasco de inodoro o sumidero, fuga activa en tubería de baño, cisterna que no descarga o que no para de correr, grifería que no cierra, o daño en cualquier elemento sanitario que impida el uso correcto del baño.',

    trabajoDetalle: 'Las averías de baños en hostelería tienen cuatro causas principales con soluciones diferentes. El atasco de inodoro es la más frecuente: se resuelve con espiral mecánica o émbolo profesional en la mayoría de los casos. La tubería reventada requiere cortar el suministro de agua, localizar el punto de rotura y repararlo — en baños de hostelería, las tuberías suelen ser accesibles porque los baños tienen trasdosados o falsos techos desmontables. La cisterna defectuosa se repara en la mayoría de los casos con la sustitución del flotador, la válvula de llenado o la válvula de descarga — piezas estándar que se tienen en furgoneta. La grifería que no corta requiere sustituir la cartucho o, si el daño es mayor, la pieza completa.\n\nLa particularidad de los baños de hostelería es el uso intensivo: un baño de restaurante puede recibir entre 50 y 200 usos diarios, lo que equivale a años de uso doméstico en pocas semanas. Esto significa que las piezas se desgastan más rápido y que las averías son más frecuentes. También significa que una avería que en casa daría días para resolver, en hostelería necesita solución en horas.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Diagnóstico rápido de la causa', descripcion: 'Inspeccionamos los baños del local para identificar la causa exacta: atasco, fuga, cisterna o grifería. En menos de 10 minutos tenemos claro qué hay que hacer y te comunicamos si se puede resolver en esa misma visita.' },
      { numero: '02', titulo: 'Corte del suministro si hay agua corriendo', descripcion: 'Si hay agua que no para — grifería rota, cisterna que no cierra o tubería reventada — cortamos el suministro de la zona afectada para detener el daño. Si hay agua en el suelo, evaluamos el alcance antes de actuar.' },
      { numero: '03', titulo: 'Reparación del elemento defectuoso', descripcion: 'Atasco: espiral mecánica o émbolo profesional hasta resolver el bloqueo. Fuga en tubería: reparación del punto de rotura con material homologado. Cisterna: sustitución de las piezas defectuosas (flotador, válvula, mecanismo). Grifería: sustitución del cartucho o de la pieza completa.' },
      { numero: '04', titulo: 'Prueba y verificación antes del servicio', descripcion: 'Probamos todos los elementos reparados con uso real: descarga completa del inodoro, apertura y cierre del grifo, verificación de que no hay fugas residuales. Solo damos la avería por resuelta cuando el baño está en condiciones de uso para clientes.' },
    ],

    materiales: [
      { tipo: 'Inodoro bloqueado (atasco)', tecnica: 'Émbolo profesional o espiral mecánica', cuandoUsarla: 'El caso más frecuente. Normalmente resuelto en 15–30 minutos si el bloqueo está en el sifón del inodoro.' },
      { tipo: 'Cisterna que no carga o no descarga', tecnica: 'Sustitución de flotador, válvula de llenado o mecanismo de descarga', cuandoUsarla: 'Piezas estándar disponibles en furgoneta. Reparación de 30–60 minutos.' },
      { tipo: 'Grifería que no corta', tecnica: 'Sustitución del cartucho cerámico o de la pieza completa', cuandoUsarla: 'Grifería de hostelería con uso intensivo. El cartucho cerámico tiene vida útil limitada a alta frecuencia de uso.' },
      { tipo: 'Tubería reventada o con fuga', tecnica: 'Reparación del punto de rotura o sustitución del tramo afectado', cuandoUsarla: 'Menos frecuente pero más grave. Requiere corte de suministro y acceso a la tubería.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Diagnóstico de todos los baños del local',
      'Reparación del elemento defectuoso (atasco, cisterna, grifería o fuga)',
      'Prueba con uso real antes de finalizar',
      'Informe técnico de la intervención para el seguro si aplica',
    ],
    queNoIncluye: [
      'Obras de albañilería o alicatado para acceso a tuberías empotradas (presupuesto aparte)',
      'Sustitución completa del inodoro, lavabo o grifería por nueva (presupuesto aparte)',
      'Reparación de daños causados por el agua en suelos o paredes (presupuesto aparte)',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico', precio: '150–250€', nota: 'Sin IVA. Horario laboral L–V 8:00–18:00.' },
      { trabajo: 'Desatasco de inodoro en hostelería', precio: '150–400€', nota: 'Según profundidad del bloqueo. Ver también M05 para atascos de grasa.' },
      { trabajo: 'Reparación de cisterna (flotador, válvula, mecanismo)', precio: '100–250€', nota: 'Incluye material estándar. Aparte del desplazamiento.' },
      { trabajo: 'Sustitución de grifería en baño de hostelería', precio: '150–300€', nota: 'Incluye pieza estándar de hostelería. Grifería especial a consultar.' },
      { trabajo: 'Reparación de fuga en tubería de baño (accesible)', precio: '200–500€', nota: 'Según accesibilidad. Tuberías empotradas a presupuestar aparte.' },
      { trabajo: 'Recargo fuera de horario y fin de semana', precio: '+50–100%', nota: 'Sobre la tarifa base total.' },
    ],
    preciosContexto: 'El coste de la urgencia de baños varía según la causa de la avería. Los atascos de inodoro y las reparaciones de cisterna son las intervenciones más económicas. Las fugas en tubería empotrada o los trabajos que requieren abrir trasdosados tienen un coste mayor. En todos los casos, el coste de la reparación es significativamente menor que el coste de cerrar el local hasta que se resuelva.',

    errores: [
      { error: 'Intentar abrir el local con los baños fuera de servicio', consecuencia: 'Si un inspector de sanidad o de la Agencia de Actividades visita el local y encuentra los baños sin funcionar, puede levantar acta y ordenar el cierre cautelar del local hasta que se acredite la corrección. La sanción administrativa puede ser superior al coste de la reparación urgente.' },
      { error: 'Usar el baño de personal como alternativa para los clientes', consecuencia: 'Es una solución temporal que crea más problemas de los que resuelve: el baño de personal no suele cumplir los requisitos de accesibilidad y condiciones exigidas para baños de clientes. Si hay una inspección, la situación puede considerarse más grave.' },
      { error: 'No documentar la avería y la reparación para el seguro', consecuencia: 'Si hay daños por agua en el suelo o en la zona adyacente, el seguro del local puede cubrir parte de los daños. Para reclamar, necesitas el informe técnico de la avería y las fotografías del daño. Si limpias sin documentar, pierdes la posibilidad de reclamar.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-bolt', titulo: 'Antes de que abra el servicio', texto: 'Cuando el aviso llega la noche anterior o a primera hora, podemos estar en el local antes de la apertura. El objetivo es que el local abra con los baños operativos, sin que los clientes sepan que ha habido una incidencia.' },
      { icon: 'fa-solid fa-toolbox', titulo: 'Furgoneta con piezas para las averías más frecuentes', texto: 'Viajamos con cisternas, cartuchos de grifería, material de fontanería y herramientas de desatasco. La mayoría de las averías de baños en hostelería se resuelven en una sola visita sin esperar a pedir piezas.' },
      { icon: 'fa-solid fa-file-medical', titulo: 'Informe técnico para el seguro y para la inspección', texto: 'Emitimos informe de cada intervención de urgencia con descripción de la avería, causa y trabajo realizado. Sirve tanto para tramitar el parte con la aseguradora como para acreditar ante la Agencia de Actividades que la incidencia se ha resuelto.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y confirmación de llegada', descripcion: 'Cuando llamas, describimos el síntoma por teléfono para orientar el diagnóstico y venimos con el material más probable. Confirmamos tiempo de llegada real.' },
      { numero: '02', titulo: 'Diagnóstico y comunicación al propietario', descripcion: 'A la llegada inspeccionamos los baños y comunicamos la causa y la solución prevista. Si la avería se puede resolver en esa visita, empezamos inmediatamente. Si requiere material que no tenemos, comunicamos el plazo real.' },
      { numero: '03', titulo: 'Reparación y prueba', descripcion: 'Reparamos el elemento defectuoso y probamos con uso real: descarga completa, apertura y cierre de grifo, verificación de ausencia de fugas. El baño queda en condiciones de uso para clientes.' },
      { numero: '04', titulo: 'Informe y factura', descripcion: 'Emitimos el informe técnico de la intervención y la factura. El local puede reanudar la actividad con los baños operativos.' },
    ],

    faq: [
      { pregunta: '¿Podéis venir antes de que abra el local si la avería es la noche anterior?', respuesta: 'Sí. Si nos avisas la noche anterior, organizamos la visita para antes de la apertura. Para avisos recibidos después de las 22:00, la visita se organiza para primera hora de la mañana siguiente o de madrugada si el local abre muy temprano.' },
      { pregunta: '¿Qué hacemos si los baños se averían en pleno servicio?', respuesta: 'Si la avería ocurre durante el servicio y los baños quedan totalmente fuera de uso, el local está en una situación difícil. Llámanos inmediatamente. En Madrid capital podemos estar en menos de dos horas. Mientras esperáis, colocad un cartel en los baños indicando que están temporalmente fuera de servicio y disculpad las molestias.' },
      { pregunta: '¿Cómo evitamos que esto vuelva a pasar?', respuesta: 'Las causas más recurrentes son el uso intensivo de inodoros sin mantenimiento de la cisterna y la grifería de bajo coste que falla rápido con uso intensivo. Recomendamos revisión periódica de cisternas (el flotador desgastado provoca cisterna que corre sin parar y también fallos en la descarga) y grifería de calidad para hostelería, diseñada para miles de usos diarios.' },
      { pregunta: '¿Las obras de baños accesibles obligatorias las hacéis vosotros?', respuesta: 'Sí. Si en la urgencia detectamos que los baños del local no cumplen los requisitos de accesibilidad obligatorios según la normativa, podemos presupuestaros la adecuación. Es un trabajo diferente a la urgencia, planificado y con presupuesto cerrado, pero conviene abordarlo para evitar problemas en futuras inspecciones.' },
    ],

    ctaTitulo: 'Sin baños no se abre. Con nosotros, los baños vuelven a funcionar hoy.',
    ctaDescripcion: 'Urgencias de baños en hostelería. El mismo día. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M08',
    slug: 'grifo-valvula-rota-urgente-madrid',
    titulo: 'Grifo o válvula rota con agua corriendo — Madrid',
    subtitulo: 'El agua no para. Cada minuto suma en la factura y en el riesgo de inundación.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'El grifo que no cierra o la válvula que no corta no es una molestia menor: es agua corriendo sin control, factura creciendo por minutos y riesgo real de inundación si el nivel sube. Un grifo abierto puede gastar entre 6 y 12 litros por minuto. En 24 horas: hasta 17.000 litros y una factura de agua de 60€ — sin contar el daño si el desagüe no da abasto. Oro Constructores repara grifos y válvulas rotas en Madrid el mismo día.',

    stats: [
      { valor: '6–12 L/min', label: 'gasto de agua de un grifo que no cierra correctamente' },
      { valor: '17.280 L', label: 'volumen máximo de agua que puede gastar en 24 horas un grifo de cierre automático roto' },
      { valor: '30–60€', label: 'coste mínimo de la factura de agua de 24 horas con un grifo que no cierra — sin contar daños por inundación' },
    ],

    contexto: 'Un grifo roto o una válvula que no cierra es una de las urgencias de fontanería que más subestiman los propietarios. La razón es que, a diferencia de una fuga visible, el agua se va por el desagüe y no se ve el daño inmediato. Pero el contador sigue sumando. En tarifa de bloque progresiva como la que aplica el Canal de Isabel II en Madrid, los excesos de consumo tienen un coste por m³ que puede multiplicar por 5 o por 10 el precio del agua normal. Un día con un grifo abierto puede equivaler al consumo mensual de una familia.\n\nEl riesgo mayor aparece cuando la capacidad de desagüe no es suficiente para el caudal que entra. Si el grifo vierte en un lavabo y el sifón tiene una pequeña obstrucción parcial, el nivel puede subir hasta desbordar. En una vivienda en planta superior, eso significa filtración al vecino de abajo. En un local hostelero, significa inundación del baño o de la cocina mientras el negocio está cerrado por la noche.\n\nLas causas más frecuentes son tres: el cartucho cerámico del grifo desgastado (que ya no sella cuando se cierra), la válvula de paso que no cierra completamente por cal acumulada o por desgaste del asiento, y el flotador de cisterna defectuoso que deja entrar agua continuamente aunque la cisterna esté llena. En todos los casos, la reparación es puntual y rápida cuando se tiene la pieza adecuada.',

    perfiles: [
      { tipo: 'Propietario que descubre el grifo corriendo al llegar a casa', descripcion: 'Ha llegado a casa y lleva horas corriendo. No sabe exactamente cuánto tiempo pero la factura ya está hecha. Necesita que alguien lo repare hoy mismo y que le diga si hay riesgo de daño adicional. La preocupación inmediata es parar el agua.' },
      { tipo: 'Gerente de hostelería que recibe aviso de que hay agua corriendo en el local cerrado', descripcion: 'Le llama el vecino o el sistema de alarma. Hay agua en el suelo del baño o de la cocina. No puede ir inmediatamente pero necesita alguien que llegue, diagnostique y resuelva sin que él tenga que estar presente.' },
    ],

    queEs: 'Urgencia de grifo o válvula rota es cualquier situación en que el agua no puede cortarse correctamente: grifo de apertura que no cierra al girar el mando, válvula de paso que no corta el suministro, flotador de cisterna que no para de llenar, o válvula de seguridad que ha abierto y no cierra. En todos los casos, el agua corre sin control y no hay forma de pararla sin intervención técnica.',

    trabajoDetalle: 'La reparación de un grifo o una válvula que no cierra empieza por cortar el suministro del tramo afectado para detener el flujo de agua. Luego se desmonta el elemento defectuoso para identificar la pieza que ha fallado: el cartucho cerámico en grifos monomando, la junta de goma en grifos antiguos de dos mandos, el asiento de la válvula de paso o el mecanismo del flotador de cisterna.\n\nEn la mayoría de los casos, la reparación consiste en sustituir la pieza defectuosa. Los cartuchos cerámicos de grifería estándar son piezas universales que se tienen en furgoneta. Los flotadores de cisterna también son piezas estándar. Las válvulas de paso con asiento desgastado pueden repararse o sustituirse según el estado. El tiempo de reparación habitual es de 30 a 90 minutos.\n\nLa complicación aparece cuando la grifería es de diseño especial o de marca con piezas no estándar — en ese caso puede ser necesario pedir la pieza. En estos casos buscamos una solución provisional que corte el agua mientras se espera la pieza definitiva.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Corte del suministro y evaluación del daño', descripcion: 'A la llegada cortamos la llave de paso más próxima al elemento defectuoso para detener el flujo de agua. Evaluamos si hay agua acumulada y el riesgo de daño adicional (desbordamiento, filtración a vecino).' },
      { numero: '02', titulo: 'Diagnóstico del elemento defectuoso', descripcion: 'Desmontamos el grifo o la válvula para identificar la pieza que ha fallado: cartucho cerámico, junta de goma, asiento de válvula o mecanismo de flotador. Verificamos si tenemos la pieza en furgoneta o si hay que pedirla.' },
      { numero: '03', titulo: 'Sustitución de la pieza defectuosa', descripcion: 'Sustituimos la pieza con material de calidad equivalente o superior al original. Si la pieza no está disponible, instalamos una solución provisional que permita cortar el agua mientras llega la pieza definitiva.' },
      { numero: '04', titulo: 'Prueba de estanqueidad y verificación', descripcion: 'Abrimos el suministro y verificamos que el grifo o la válvula cierra correctamente en todos los rangos de apertura. Comprobamos que no hay fugas residuales en las juntas de montaje. Emitimos informe si se necesita para el seguro.' },
    ],

    materiales: [
      { tipo: 'Cartucho cerámico de grifería monomando', tecnica: 'Sustitución por cartucho equivalente', cuandoUsarla: 'Causa más frecuente en grifería moderna. El cartucho cerámico dura entre 5 y 15 años según la calidad del agua.' },
      { tipo: 'Junta de goma en grifo antiguo de dos mandos', tecnica: 'Sustitución de la junta o del conjunto', cuandoUsarla: 'Grifería anterior a los años 90. Las juntas de goma se endurecen con el tiempo y dejan de sellar.' },
      { tipo: 'Válvula de paso con asiento desgastado', tecnica: 'Sustitución de la válvula completa', cuandoUsarla: 'Válvulas de cierre que no cortan completamente. Más frecuente en válvulas de más de 20 años.' },
      { tipo: 'Flotador de cisterna defectuoso', tecnica: 'Sustitución del flotador o de la válvula de llenado', cuandoUsarla: 'Cisterna que no para de llenar aunque esté al nivel correcto. Señal: agua que corre constantemente por el rebosadero.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Corte del suministro para detener el flujo de agua',
      'Diagnóstico del elemento defectuoso',
      'Sustitución de la pieza defectuosa con material estándar',
      'Prueba de estanqueidad post-reparación',
      'Informe técnico si se necesita para el seguro',
    ],
    queNoIncluye: [
      'Sustitución de grifería completa de diseño especial (presupuesto aparte)',
      'Reparación de daños causados por el agua acumulada (presupuesto aparte)',
      'Piezas de grifería de importación o de fabricante que hay que pedir (se comunica el plazo)',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico + reparación estándar', precio: '150–350€', nota: 'Sin IVA. Incluye sustitución de cartucho, junta o flotador estándar. Horario laboral.' },
      { trabajo: 'Sustitución de válvula de paso', precio: '150–300€', nota: 'Aparte del desplazamiento. Incluye material. Varía según diámetro y accesibilidad.' },
      { trabajo: 'Recargo urgencia fuera de horario', precio: '+75–150€', nota: 'Para avisos de tarde-noche o madrugada.' },
      { trabajo: 'Recargo fin de semana y festivos', precio: '+50–100%', nota: 'Sobre la tarifa base total.' },
    ],
    preciosContexto: 'La reparación de un grifo o válvula rota es habitualmente una intervención rápida y económica cuando la pieza está disponible. El coste total depende de la hora del aviso (hay recargos fuera de horario), la accesibilidad de la válvula de corte y el tipo de pieza a sustituir. Grifería de diseño o de importación puede requerir pedir pieza, lo que añade días de espera.',

    errores: [
      { error: 'Dejar el grifo corriendo hasta el día siguiente por no querer pagar el recargo nocturno', consecuencia: 'Un grifo abierto durante 12 horas de noche puede gastar entre 4.000 y 8.000 litros de agua. En tarifa progresiva de Canal de Isabel II, eso puede equivaler a 2–3 meses de consumo facturado en una noche. El ahorro del recargo nocturno no compensa la factura de agua del día siguiente. Y si el desagüe se satura, añade el coste del daño por inundación.' },
      { error: 'Intentar cerrar la válvula a la fuerza cuando no cierra', consecuencia: 'Las válvulas de paso con el asiento desgastado no se pueden cerrar a la fuerza: el esfuerzo puede romper el vástago o deformar el cuerpo de la válvula, convirtiendo un problema de no-cierre en una rotura con escape libre. El procedimiento correcto es cerrar la válvula de corte anterior y llamar al fontanero.' },
      { error: 'No avisar a los vecinos de abajo si hay agua acumulada en el suelo', consecuencia: 'Si hay agua en el suelo de la vivienda o del local y el vecino de abajo empieza a ver humedades en su techo, la responsabilidad es del propietario de arriba. Avisar al vecino y documentar la situación desde el primer momento reduce el conflicto y facilita la tramitación con el seguro.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-clock', titulo: 'El agua parada en horas, no mañana', texto: 'Un grifo que no cierra no puede esperar a que abra la ferretería o a que el fontanero tenga hueco en la semana. Atendemos la urgencia el mismo día porque sabemos que cada hora con el agua corriendo tiene un coste real.' },
      { icon: 'fa-solid fa-toolbox', titulo: 'Furgoneta con las piezas más habituales', texto: 'Llevamos cartuchos cerámicos de los formatos más habituales, flotadores de cisterna, juntas de goma y válvulas de paso estándar. La mayoría de las averías de grifo se resuelven en una sola visita sin esperar piezas.' },
      { icon: 'fa-solid fa-file-medical', titulo: 'Informe para el seguro si hay daños por agua', texto: 'Si el agua acumulada ha generado daños en suelo, paredes o en el vecino de abajo, emitimos informe técnico de la avería con descripción de la causa. Es el documento que las aseguradoras necesitan para tramitar el siniestro.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y llegada el mismo día', descripcion: 'Cuando llamas, confirmamos disponibilidad y damos tiempo de llegada real. Para avisos de agua corriendo sin control, priorizamos sobre trabajos no urgentes.' },
      { numero: '02', titulo: 'Corte del suministro y diagnóstico', descripcion: 'A la llegada cortamos el suministro del tramo afectado para detener el flujo. Desmontamos el elemento defectuoso y verificamos la pieza que hay que sustituir.' },
      { numero: '03', titulo: 'Reparación con pieza disponible', descripcion: 'Si tenemos la pieza en furgoneta, la sustituimos inmediatamente. Si la pieza hay que pedirla, instalamos una solución provisional que corta el agua con seguridad mientras llega la definitiva.' },
      { numero: '04', titulo: 'Verificación y factura', descripcion: 'Probamos la estanqueidad del elemento reparado y verificamos que no hay fugas residuales. Emitimos informe si se necesita para el seguro y factura con el desglose del trabajo.' },
    ],

    faq: [
      { pregunta: '¿Qué hago mientras espero al fontanero si el grifo no para?', respuesta: 'Cierra la llave de paso del tramo afectado. Si no puedes cerrarla o no la encuentras, cierra la llave de paso general de la vivienda o del local. Si hay agua en el suelo, retira los objetos que puedan dañarse y pon toallas para contener el agua. No intentes cerrar la válvula a la fuerza si nota resistencia excesiva.' },
      { pregunta: '¿Cuánto me puede costar la factura de agua si el grifo lleva horas corriendo?', respuesta: 'Depende del caudal y del tiempo. Un grifo de cocina abierto al mínimo puede gastar 6 litros por minuto. En 4 horas son 1.440 litros — el consumo de varios días de una persona. En tarifa progresiva del Canal de Isabel II, los bloques altos pueden costar 3–5€/m³, así que 1.400 litros pueden facturarse a 4–7€ de agua, más cuota fija. Para calcular el daño exacto, el Canal de Isabel II puede aplicar una bonificación si acreditas con factura del fontanero que fue una avería y no consumo voluntario.' },
      { pregunta: '¿El seguro del hogar cubre la factura de agua por grifo roto?', respuesta: 'Depende del seguro. Algunos seguros de hogar incluyen cobertura de daños por escape de agua y pueden cubrir parte del sobreconsumo en factura si se acredita que fue una avería. Lo más importante es documentar la avería con el informe del fontanero antes de reclamar. Consulta las condiciones de tu póliza o habla con tu corredor de seguros.' },
      { pregunta: '¿Podéis venir de noche si el grifo no para y no está el suministro cortado?', respuesta: 'Sí, atendemos urgencias los siete días de la semana en cualquier horario. Hay un recargo nocturno que comunicamos al confirmar la visita. Para avisos de agua corriendo sin forma de cortarla, priorizamos la urgencia independientemente de la hora.' },
    ],

    ctaTitulo: 'El agua no espera. Tampoco nosotros.',
    ctaDescripcion: 'Reparación de grifo o válvula rota el mismo día. Madrid capital y área metropolitana.',
  },

  {
    codigo: 'M09',
    slug: 'averia-nevera-industrial-camara-frigorifica-madrid',
    titulo: 'Avería de nevera industrial o cámara frigorífica — Madrid',
    subtitulo: 'La cámara no enfría. La mercancía está en riesgo. Primer respondedor en horas.',
    vertical: { codigo: 'M', nombre: 'Urgencias', invSlug: 'urgencias-hosteleria-madrid' },
    abstract: 'Cuando la cámara frigorífica deja de enfriar, el reloj corre en contra. Por encima de 4ºC empieza el riesgo de contaminación alimentaria. Un día sin cámara operativa puede significar tirar todo el género: entre 500 y 5.000€ de pérdida según el tamaño. Oro Constructores actúa como primer respondedor: diagnosticamos la avería, implementamos soluciones provisionales de frío y coordinamos con técnico de frío certificado F-Gas para la reparación del sistema de refrigeración.',

    stats: [
      { valor: '4ºC', label: 'temperatura a partir de la cual empieza el riesgo de contaminación alimentaria según normativa APPCC' },
      { valor: '500–5.000€', label: 'pérdida potencial en género por avería de cámara en un restaurante de tamaño medio' },
      { valor: 'F-Gas obligatorio', label: 'certificación que exige la normativa europea para intervenir en sistemas de refrigeración con gases fluorados' },
    ],

    contexto: 'La cámara frigorífica es uno de los equipos más críticos de un local hostelero. Todo lo que no se puede perder está dentro: el género del día, las reservas de la semana, los productos de mayor valor. Cuando la cámara falla, la urgencia es doble: salvar el género y recuperar el frío lo antes posible.\n\nLa particularidad de las averías de refrigeración es que la reparación del sistema de frío propiamente dicha — compresores, gas refrigerante, circuito frigorífico — está regulada por el Reglamento F-Gas (EU 517/2014) y solo puede ejecutarla un técnico con certificación F-Gas. Esta no es una normativa burocrática: los gases refrigerantes son sustancias con potencial de calentamiento global muy alto y su manipulación incorrecta tiene consecuencias medioambientales y sanciones graves. Oro Constructores no trabaja con gas refrigerante porque no tiene la certificación F-Gas requerida.\n\nLo que sí hacemos es actuar como primer respondedor: llegamos a diagnosticar si la avería es del sistema de refrigeración (en cuyo caso coordinamos inmediatamente con técnico F-Gas certificado) o si es de otro elemento — termostato, compresor por problema eléctrico, condensador sucio, puerta que no cierra correctamente — que puede resolverse sin tocar el circuito de gas. Simultáneamente, implementamos soluciones provisionales para preservar el género el máximo tiempo posible mientras llega el técnico de frío.',

    perfiles: [
      { tipo: 'Cocinero o encargado que llega y la cámara no enfría', descripcion: 'Llega por la mañana y la cámara está a 12ºC. El género del día está en riesgo. Necesita saber inmediatamente qué puede salvarse, qué hay que tirar y cuándo va a poder tener la cámara operativa. No conoce la diferencia entre un problema de termostato y un problema de gas, pero sabe que tiene que actuar ya.' },
      { tipo: 'Propietario de restaurante que recibe la alarma de temperatura alta de la cámara', descripcion: 'Su sistema de monitorización de temperaturas le ha mandado una alerta de madrugada: la cámara está por encima de la temperatura de seguridad. Necesita que alguien vaya al local, evalúe la situación y tome las decisiones de emergencia para el género.' },
    ],

    queEs: 'Urgencia de cámara frigorífica es cualquier situación en que el sistema de refrigeración no mantiene la temperatura correcta: cámara que sube de temperatura progresivamente, cámara que no arranca, cámara que hace ruido anormal, o cámara que no responde al termostato. También incluye averías en neveras industriales de mostrador, vitrinas refrigeradas y cámaras de congelación.',

    trabajoDetalle: 'El diagnóstico de una cámara frigorífica averiada tiene varias posibles causas con soluciones muy diferentes. Las causas que no requieren técnico F-Gas y que podemos resolver directamente son: termostato defectuoso, problema eléctrico en el compresor o en el ventilador, condensador sucio que no evacúa el calor correctamente, puerta que no cierra herméticamente por junta deteriorada, o equipo que ha hecho un ciclo de deshielo y no ha arrancado de nuevo. Estas causas representan un porcentaje significativo de las averías.\n\nLas causas que requieren técnico F-Gas certificado son: fuga de gas refrigerante (la más frecuente en cámaras de más de 5 años), compresor averiado mecánicamente, válvula de expansión defectuosa o problemas en el circuito frigorífico. En estos casos, nuestra actuación es el diagnóstico inicial y la coordinación con el técnico certificado, que en Madrid puede estar disponible en pocas horas para urgencias.\n\nMientras se espera la reparación definitiva, las medidas provisionales para preservar el género son: cajas isotérmicas con hielo para los productos más sensibles, traslado del género a otra instalación de frío si está disponible, y minimizar la apertura de la cámara para conservar el frío residual.',

    pasosEjecucion: [
      { numero: '01', titulo: 'Evaluación del género y medidas de emergencia', descripcion: 'A la llegada verificamos la temperatura actual y el tiempo estimado que lleva la avería. Clasificamos el género por riesgo: lo que está por encima de 4ºC y ha estado más de 2 horas necesita decisión inmediata. Implementamos medidas provisionales de frío: cajas isotérmicas, hielo, traslado a otra instalación.' },
      { numero: '02', titulo: 'Diagnóstico de la causa de la avería', descripcion: 'Inspeccionamos el equipo: estado del compresor, limpieza del condensador, funcionamiento del termostato, estado de la junta de puerta y verificación eléctrica del sistema. Identificamos si la causa es resoluble sin gas refrigerante o si requiere técnico F-Gas.' },
      { numero: '03', titulo: 'Reparación directa o coordinación con técnico F-Gas', descripcion: 'Si la avería está en el termostato, el condensador, la junta de puerta o en el sistema eléctrico, lo reparamos directamente. Si la causa es el gas refrigerante o el compresor, contactamos inmediatamente con técnico F-Gas certificado de nuestra red en Madrid y coordinamos la llegada más rápida posible.' },
      { numero: '04', titulo: 'Verificación de temperatura y documentación', descripcion: 'Una vez reparada la avería, verificamos que la cámara alcanza la temperatura correcta y que se estabiliza. Emitimos informe de la intervención con descripción de la causa, trabajo realizado y temperatura de recuperación. Este informe puede ser necesario para el seguro o para el registro APPCC del local.' },
    ],

    materiales: [
      { tipo: 'Termostato defectuoso', tecnica: 'Sustitución por termostato equivalente', cuandoUsarla: 'La cámara tiene frío pero no regula correctamente, o no arranca aunque la temperatura sea alta. Resoluble sin técnico F-Gas.' },
      { tipo: 'Condensador sucio', tecnica: 'Limpieza con compresor de aire y desengrasante', cuandoUsarla: 'Cámara que no enfría eficientemente pero el compresor arranca. El condensador sucio es la causa más frecuente de rendimiento reducido y no requiere F-Gas.' },
      { tipo: 'Junta de puerta deteriorada', tecnica: 'Sustitución de la junta perimetral', cuandoUsarla: 'La cámara trabaja continuamente pero no mantiene la temperatura. La junta rota o deformada permite la entrada de aire caliente.' },
      { tipo: 'Gas refrigerante fugado o bajo nivel', tecnica: 'Detección de fuga + recarga por técnico F-Gas certificado', cuandoUsarla: 'Requiere técnico certificado. Oro Constructores diagnostica y coordina — no manipula el gas.' },
    ],

    queIncluye: [
      'Desplazamiento urgente el mismo día en Madrid capital y área metropolitana',
      'Evaluación del género en riesgo y medidas provisionales de frío',
      'Diagnóstico completo: eléctrico, mecánico y de los elementos no frigoríficos',
      'Reparación directa de los elementos que no requieren F-Gas (termostato, condensador, junta, eléctrico)',
      'Coordinación inmediata con técnico F-Gas certificado cuando la avería lo requiere',
      'Informe de la intervención con temperatura de recuperación',
    ],
    queNoIncluye: [
      'Manipulación de gas refrigerante — requiere técnico F-Gas certificado (Oro Constructores coordina y supervisa)',
      'Sustitución de compresor mecánico (requiere técnico especializado en refrigeración)',
      'Reposición del género perdido por la avería',
    ],

    precios: [
      { trabajo: 'Desplazamiento urgente + diagnóstico + medidas provisionales de frío', precio: '200–400€', nota: 'Sin IVA. Incluye evaluación del género, implementación de cajas isotérmicas si disponibles y diagnóstico completo.' },
      { trabajo: 'Reparación directa (termostato, condensador, junta, eléctrico)', precio: '150–500€', nota: 'Aparte del desplazamiento. Según el elemento defectuoso.' },
      { trabajo: 'Técnico F-Gas subcontratado (avería de gas o compresor)', precio: '300–800€', nota: 'Coste del técnico externo. Variable según la avería y la pieza. Gestionado por Oro Constructores.' },
      { trabajo: 'Solución provisional de frío (cajas isotérmicas y hielo)', precio: '50–150€', nota: 'Para preservar el género mientras se espera la reparación definitiva.' },
      { trabajo: 'Recargo urgencia fuera de horario y fin de semana', precio: '+50–100%', nota: 'Sobre la tarifa base total.' },
    ],
    preciosContexto: 'El coste total de una urgencia de cámara frigorífica depende de la causa de la avería. Las causas reparables directamente (termostato, condensador, eléctrico) son las más económicas. Las averías de gas refrigerante o de compresor tienen un coste mayor porque requieren técnico F-Gas externo más el coste de las piezas. En todos los casos, el coste de la intervención debe compararse con el valor del género en riesgo.',

    errores: [
      { error: 'No actuar hasta el día siguiente pensando que la cámara se recuperará sola', consecuencia: 'Una cámara que falla no se recupera sola. Si la causa es una fuga de gas, la temperatura seguirá subiendo hasta igualar la del ambiente. Cada hora de retraso aumenta el volumen de género comprometido. Actuar en las primeras 2 horas puede salvar todo el género; actuar 12 horas después puede significar tirar todo.' },
      { error: 'Intentar reparar la avería de refrigeración sin técnico F-Gas', consecuencia: 'La manipulación de gas refrigerante sin certificación F-Gas es una infracción grave del Reglamento EU 517/2014, con sanciones de hasta 600.000€ para empresas. Además, una recarga de gas mal hecha puede dañar irreparablemente el compresor. No hay ahorro posible que justifique el riesgo legal y técnico.' },
      { error: 'No documentar las temperaturas para el registro APPCC', consecuencia: 'Los locales hosteleros están obligados por la normativa APPCC a llevar registro de temperaturas de cámaras. Una avería en la que la temperatura ha superado los límites debe documentarse: cuándo ocurrió, hasta qué temperatura llegó, qué género se afectó y qué medidas se tomaron. Sin esta documentación, el local puede tener problemas en la siguiente auditoría sanitaria.' },
    ],

    porQueOro: [
      { icon: 'fa-solid fa-bolt', titulo: 'Primer respondedor en horas, no días', texto: 'No somos el técnico de frío que tarda 3 días en dar cita. Somos el primer respondedor que llega el mismo día, evalúa el género, implementa medidas provisionales y diagnostica la causa. Si la avería requiere técnico F-Gas, lo coordinamos inmediatamente desde nuestra red de confianza en Madrid.' },
      { icon: 'fa-solid fa-box-open', titulo: 'Preservación del género como prioridad', texto: 'Lo primero que hacemos al llegar no es mirar el motor: es evaluar el estado del género y tomar medidas para preservar lo que todavía se puede salvar. Cajas isotérmicas, hielo, traslado a otro equipo de frío — actuamos sobre el problema real antes que sobre el equipo.' },
      { icon: 'fa-solid fa-file-lines', titulo: 'Documentación para el seguro y para el registro APPCC', texto: 'Emitimos informe de cada intervención con la temperatura registrada, el tiempo estimado de avería, el género afectado y el trabajo realizado. Esta documentación es válida para el registro APPCC del local y para reclamar al seguro si la póliza cubre pérdida de género.' },
    ],

    proceso: [
      { numero: '01', titulo: 'Aviso y evaluación telefónica del género', descripcion: 'Cuando llamas, te preguntamos la temperatura actual de la cámara y cuánto tiempo lleva así. Con esta información evaluamos la urgencia del género y te damos instrucciones de medidas inmediatas mientras llegamos.' },
      { numero: '02', titulo: 'Llegada, evaluación del género y medidas provisionales', descripcion: 'Lo primero al llegar es evaluar el estado del género. Clasificamos lo que se puede salvar de lo que hay que tirar. Implementamos medidas de frío provisional: cajas isotérmicas, hielo, traslado si hay otra instalación disponible.' },
      { numero: '03', titulo: 'Diagnóstico y reparación o coordinación', descripcion: 'Diagnosticamos la causa de la avería. Si es resoluble sin gas refrigerante, lo hacemos en el acto. Si requiere técnico F-Gas, contactamos con nuestro técnico de red más disponible y coordinamos la llegada más rápida posible.' },
      { numero: '04', titulo: 'Verificación de temperatura y documentación', descripcion: 'Una vez reparada la avería, monitorizamos la bajada de temperatura hasta confirmar que la cámara alcanza la temperatura correcta. Emitimos informe con todos los datos de la intervención.' },
    ],

    faq: [
      { pregunta: '¿Qué hago con el género mientras espero al técnico?', respuesta: 'Minimiza la apertura de la cámara para conservar el frío residual. Si tienes cajas isotérmicas o neveras portátiles, traslada los productos más sensibles (carne, pescado, lácteos) y ponles hielo. Si tienes otro equipo de frío en el local, traslada el género más valioso. Anota la temperatura actual y la hora — lo necesitarás para el informe.' },
      { pregunta: '¿Vosotros podéis recargar el gas de la cámara?', respuesta: 'No. La recarga de gas refrigerante requiere certificación F-Gas que Oro Constructores no tiene. Lo que sí hacemos es diagnosticar si la avería es de gas y coordinar inmediatamente con técnico F-Gas certificado de nuestra red en Madrid. Es la forma más rápida de tener a alguien competente en tu local.' },
      { pregunta: '¿El seguro cubre la pérdida de género por avería de cámara?', respuesta: 'Depende de la póliza. Algunos seguros de hostelería incluyen cobertura de pérdida de mercancías refrigeradas por avería del equipo. Para reclamar, necesitas el informe técnico de la avería, el registro de temperaturas si lo tienes y la valoración del género perdido. Consulta las condiciones de tu póliza con tu corredor de seguros.' },
      { pregunta: '¿Cuánto tarda en llegar el técnico F-Gas si la avería lo requiere?', respuesta: 'Depende de la disponibilidad y del momento del aviso. En Madrid capital, en horario laboral y con nuestra red de técnicos de confianza, el tiempo habitual es de 2–4 horas desde que confirmamos que la avería requiere F-Gas. En fin de semana o festivos puede ser algo más largo, pero siempre comunicamos el tiempo real desde el primer momento.' },
    ],

    ctaTitulo: 'La cámara averiada tiene un reloj en contra. Nosotros llegamos antes de que se pare.',
    ctaDescripcion: 'Primer respondedor para urgencias de cámara frigorífica. Madrid capital y área metropolitana.',
  },
]
