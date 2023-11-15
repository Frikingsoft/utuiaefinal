let cursos = [
  {
    nombre:"Informática",
    tipo:"Bachillerato",
    duracion:"3 años",
    link_ingreso: "https://www.utu.edu.uy/educacion-media-tecnologica-informatica-enfasis-desarrollo-y-soporte-desarrollo-web-videojuegos",
    modalidad:"Presencial",
    perfil:"Realizar soporte al equipamiento informático detectando y reparando fallas en el hardware y software. Asesorar e instalar hardware, software de aplicación o productos existentes en el mercado.    Analizar, diseñar e implementar soluciones informáticas de pequeño y mediano porte utilizando diferentes modelos y lenguajes de desarrollo. Instalar redes de área local. Instalar y configurar Sistemas Operativos propietarios y open source. Integrar equipos de desarrollo para proyectos de porte superior. Ejecutar eficientemente tareas informáticas indicadas por un superior calificado. Conocer y aplicar metodologías de Proyecto. Contribuir en equipos interdisciplinarios en áreas relacionadas a su especialidad. Diseñar y mantener Sistemas de Gestión de Base de Datos de pequeño y mediano porte. Conocer y detectar riesgos de seguridad en la Instalación Eléctrica y la zona de trabajo. Diseñar e implementar páginas web estáticas.",
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/infor.jpg",
    ruta:"bachillerato_de_informatica"
  },
  {
    nombre:"Administración",
    tipo:"Bachillerato",
    duracion:"3 años",
    link_ingreso: "https://www.utu.edu.uy/educacion-media-tecnologica-administracion",
    modalidad:"Presencial",
    perfil:`Comprender el funcionamiento institucional y empresarial en el contexto económico social con sistemas complejos.
    Dominar los mecanismos administrativos y económicos internos de una organización y sus relaciones con el medio donde acciona.
    Utilizar eficazmente los instrumentos contables, tanto manuales como informáticos.
    Conocer el sustento jurídico que regula la actividad económica-empresarial.
    Aplicar adecuadamente las técnicas administrativas y la documentación utilizada en el ámbito administrativo-comercial.
    `,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/adm.jpg",
    ruta:"bachillerato_de_administracion"
  },
  {
    nombre:"Redes y Software",
    tipo:"Tecnicatura",
    duracion:"2 años",
    link_ingreso: "https://www.utu.edu.uy/curso-tecnico-terciario-redes-y-software",
    modalidad:"Presencial",
    perfil:`Instalar, configurar, administrar y mantener todo tipo de redes de área local, con todos sus servicios y software, conectados o no a Internet.
    Diseñar, implementar y gestionar bases de datos, instalando y administrando el software de gestión de datos, diseñando programas de software libre que permitan interactuar con datos locales y remotos.
    Enmarcar su trabajo dentro de un proyecto web con páginas estáticas y dinámicas.
    Ejecutar procedimientos para la recuperación de datos y aplicaciones ante fallos y pérdidas de datos en el sistema.
    Elaborar documentación técnica y administrativa del sistema, determinar presupuestos y asesorar al cliente.
    Los productos de software libre y propietario deben tener un adecuado balance, preparando al estudiante en ambos ambientes y obteniendo lo mejor de cada propuesta.`,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/redes.jpg",
    ruta:"tecnicatura_en_redes_y_software"
  },
  {
    nombre:"Administración",
    tipo:"Tecnicatura",
    duracion:"2 años",
    link_ingreso: "https://www.utu.edu.uy/curso-tecnico-terciario-administracion",
    modalidad:"Presencial",
    perfil:`Diseñar los planes de acción en organizaciones públicas o privadas, en áreas sustantivas o de apoyo, para cumplir con los lineamientos estratégicos.
    Asesorar y brindar apoyo técnico específico, en aspectos vinculados a los cometidos principales y secundarios en organizaciones públicas y privadas.
    Desarrollar los procesos técnicos requeridos para dar cumplimiento a los panes previamente definidos.
    Procesar, analizar y reportar datos e información relevante del contexto socioeconómico, para facilitar la toma de decisiones de los distintos agentes intervinientes en la gestión de organizaciones públicas o privadas.
    Aplicar técnicas específicas para la mejora continua de la planificación, organización, dirección, coordinación y control de los macro o microprocesos de trabajo, a nivel general de la organización, o en las diferentes unidades que la componen.
    Asistir a la gestión, a la formación y a la investigación para la formulación de normas y procedimientos de administración en cualquiera de las áreas de las organizaciones o en su área de especialización.
    Aplicar técnicas y prácticas profesionales en dichas áreas.`,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/adm.jpg",
    ruta:"tecnicatura_en_administracion"
  },
  {
    nombre:"Construcción Obra Seca",
    tipo:"Tecnicatura",
    duracion:"2 años",
    link_ingreso: "https://www.utu.edu.uy/curso-tecnico-terciario-construccion-enfasis-obra-seca",
    modalidad:"Presencial",
    perfil:`Conocer y supervisar los procedimientos constructivos del sistema de construcción racionalizada en acero y madera.
    Desplegar las operaciones necesarias para la ejecución de cimentaciones, estructura de perfilería, panelizado, tratamiento de terminación y revestimiento de acuerdo a las propiedades tecnológicas y físicas de los materiales de obra seca.
    Supervisar y ejecutar las unidades y conjuntos funcionales de la edificación.
    Ejecutar y supervisar terminaciones exteriores e interiores, para verificar estanquidad y estabilidad controlando en su ejecución y graficando detalles constructivos.
    Integrar equipos con otros profesionales y técnicos, para el estudio del predimensionado de los componentes constructivos pre-cálculo de estabilidad, subcontrato, manejo de los ROC, cómputos métricos y logística de obra.
    Duración`,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/obra.jpg",
    ruta:"construccion_obra_seca"
  },
  {
    nombre:"Marketing",
    tipo:"Tecnicatura",
    duracion:"2 años",
    link_ingreso: "https://www.utu.edu.uy/curso-tecnico-terciario-marketing",
    modalidad:"Presencial",
    perfil:`Actuar en los procesos de diseño de políticas y planes estratégicos de marketing de diferentes organizaciones.
    Implementar y gestionar las estrategias requeridas para ejecutar las políticas y planes estratégicos del marketing.
    Estructurar criterios y metodología específica para el análisis de los mercados en los que opere la organización.  
    Desarrollar propuestas de innovación de productos de acuerdo al análisis realizado de los mercados.
    Diseñar y ejecutar planes operativos de comunicación y medios para el mercado objetivo.
    Formular planes operativos de logística de ventas y distribución.
    Apoyar técnicamente en los estudios de fijación y actualización de precios con base en los estudios de costos y de mercado.
    Desempeñar funciones en una organización en forma independiente.`,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/marketing.jpg",
    ruta:"marketing"
  },
  {
    nombre:"Producción Equina",
    tipo:"Tecnólogo",
    duracion:"3 años",
    link_ingreso: "https://www.utu.edu.uy/noticias/utu-y-udelar-lanzan-primera-carrera-de-produccion-equina",
    modalidad:"Presencial",
    perfil:` será capaz de administrar, gestionar o crear una empresa equina, ya sea de esparcimiento o terapéutica, una cabaña de producción, un centro hípico o de entrenamiento de cualquier tipo de deporte.

    Tendrá conocimientos generales sobre anatomía y fisiología de un caballo y se formará sobre cría, genética, fundamentos fisiológicos, nutrición, bienestar animal, entrenamiento, administración, entre otros conceptos relevantes para el trabajo con estos animales.
    
    Obtendrá una base científica destinada a la producción de equinos, un compromiso con el desarrollo productivo donde podrá perfeccionar ideas que ya existen o crear nuevas iniciativas.
    
    Se insertará de forma crítica en las diferentes etapas de la producción; articulará conocimientos con otras profesiones y contará con responsabilidades éticas sobre el tema.`,
    botones:[
      {nombre:"duración"},
      {nombre: "materias"}

    ],
    flex:4,
    imagen:"/equinos.jpg",
    ruta:"produccion_equina"
  },
  
]

export {
  cursos
}