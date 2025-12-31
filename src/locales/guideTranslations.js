// Guide translation mapping - maps guide IDs to translated content
export const guideTranslations = {
  es: {
    "cpr-adult": {
      title: "RCP para Adultos",
      whenToCall911:
        "Inmediatamente — activar EMS y obtener un DEA lo antes posible",
      steps: [
        {
          number: 1,
          instruction: "Realizar una inspección de la escena",
          tip: "Verificar peligros antes de acercarse",
        },
        {
          number: 2,
          instruction: "Evaluar la capacidad de respuesta",
        },
        {
          number: 3,
          instruction:
            "Si no hay respuesta, llamar a servicios médicos (usar altavoz si está en móvil) y enviar a alguien por un DEA",
          warning:
            "Si está solo y no tiene teléfono, busque ayuda y un DEA si está disponible",
        },
        {
          number: 4,
          instruction: "Realizar una inspección primaria",
          detail:
            "Abrir la vía aérea y verificar la respiración durante al menos 5 y no más de 10 segundos",
        },
        {
          number: 5,
          instruction:
            "Si el paciente no está respirando (o no respira efectivamente/agónica), coloque las manos en el centro del pecho superior con los hombros directamente sobre las manos",
          detail: "Mantenga los codos bloqueados",
        },
        {
          number: 6,
          instruction: "Dar 30 compresiones — empujar fuerte, empujar rápido",
          detail:
            "Presionar hacia abajo en el esternón 5–6 cm (2–2,4 pulg), permitir el retroceso completo y comprimir a 100–120/min",
          tip: "Contar en voz alta para mantener el ritmo",
        },
        {
          number: 7,
          instruction:
            "Abrir la vía aérea inclinando la cabeza y levantando la barbilla",
        },
        {
          number: 8,
          instruction: "Dar 2 respiraciones de rescate",
          detail:
            "Usar un dispositivo de barrera si está disponible; cada respiración ~1 segundo, solo lo suficiente para que el pecho suba",
        },
        {
          number: 9,
          instruction:
            "Este es un ciclo de 30:2 (30 compresiones a 2 ventilaciones) — continúe RCP hasta que se aplique un DEA, el paciente responda, otro rescatista/EMS tome el control, o esté demasiado agotado",
          warning: "Aplique el DEA tan pronto como llegue",
        },
      ],
      warnings: [
        "No realizar en persona consciente",
        "Detener si la persona comienza a respirar normalmente",
      ],
    },
    "cpr-child": {
      title: "RCP para Niños",
      whenToCall911:
        "Inmediatamente — activar EMS y obtener un DEA lo antes posible (si está solo sin teléfono: 2 minutos/5 ciclos primero)",
      steps: [
        {
          number: 1,
          instruction: "Realizar una inspección de la escena",
          tip: "Verificar peligros antes de acercarse",
        },
        {
          number: 2,
          instruction: "Evaluar la capacidad de respuesta",
        },
        {
          number: 3,
          instruction:
            "Si no hay respuesta, llamar a servicios médicos y obtener un DEA si está disponible",
          detail:
            "Si está solo sin teléfono, realizar 5 ciclos de RCP (aproximadamente 2 minutos), luego buscar ayuda; llevar al niño consigo si es posible",
        },
        {
          number: 4,
          instruction: "Realizar una inspección primaria",
          detail:
            "Abrir la vía aérea y verificar la respiración durante al menos 5 y no más de 10 segundos",
        },
        {
          number: 5,
          instruction:
            "Si el paciente no está respirando (o no respira efectivamente/agónica), coloque las manos en el centro del pecho superior con los hombros directamente sobre las manos",
          detail:
            "Mantenga los codos bloqueados; use una o dos manos dependiendo del tamaño del niño",
        },
        {
          number: 6,
          instruction: "Dar 30 compresiones — empujar fuerte, empujar rápido",
          detail:
            "Comprimir aproximadamente 1/3 de la profundidad del pecho (aproximadamente 5 cm / 2 pulg), permitir el retroceso completo y comprimir a 100–120/min",
          tip: "Contar en voz alta para mantener el ritmo",
        },
        {
          number: 7,
          instruction:
            "Abrir la vía aérea inclinando la cabeza y levantando la barbilla",
        },
        {
          number: 8,
          instruction: "Dar 2 respiraciones de rescate",
          detail:
            "Usar un dispositivo de barrera si está disponible; dar solo suficiente aire para que el pecho suba",
        },
        {
          number: 9,
          instruction:
            "Este es un ciclo de 30:2 (30 compresiones a 2 ventilaciones) — continúe RCP hasta que se aplique un DEA, el paciente responda, otro rescatista/EMS tome el control, o esté demasiado agotado",
          warning: "Aplique el DEA tan pronto como llegue",
        },
      ],
      warnings: [
        "Usar una o dos manos dependiendo del tamaño del niño",
        "Si está solo sin teléfono, realice aproximadamente 2 minutos (5 ciclos) de RCP antes de buscar ayuda",
        "Aplique un DEA tan pronto como llegue",
      ],
    },
    "choking-adult": {
      title: "Alivio de Asfixia (Adulto)",
      whenToCall911:
        "Inmediatamente para obstrucción grave o si la persona pierde el conocimiento; obtenga un DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar una inspección de la escena para garantizar la seguridad de usted y la víctima",
        },
        {
          number: 2,
          instruction:
            "Evaluar la gravedad — pregunte '¿Se está asfixiando?' y busque incapacidad para hablar, toser o respirar",
          warning:
            "Llamar al 911 inmediatamente si se sospecha una obstrucción grave",
        },
        {
          number: 3,
          instruction:
            "Si la persona puede toser fuertemente, hablar o respirar, anímela a seguir tosiendo",
          tip: "Busque ayuda médica si la obstrucción leve dura más de unos minutos",
        },
        {
          number: 4,
          instruction:
            "Si hay obstrucción grave: dar hasta 5 golpes en la espalda entre los omóplatos",
          detail: "Apoye a la persona mientras golpea con el talón de la mano",
        },
        {
          number: 5,
          instruction:
            "Si no se expulsa, colóquese detrás de la persona listo para apoyarla si pierde el conocimiento",
        },
        {
          number: 6,
          instruction:
            "Haga un puño y colóquelo a la altura del ombligo, por encima del ombligo y por debajo de la caja torácica",
          detail:
            "Alinearse con los huesos de la cadera; evitar la caja torácica inferior y el xifoides",
        },
        {
          number: 7,
          instruction:
            "Agarre el puño con la otra mano y realice 5 empujes abdominales rápidos hacia adentro y hacia arriba",
          detail: "Maniobra de Heimlich",
        },
        {
          number: 8,
          instruction:
            "Repita ciclos de 5 golpes en la espalda y 5 empujes abdominales hasta que se expulse el objeto",
          warning:
            "No dé comida ni bebida; continúe los ciclos hasta que sea efectivo o la persona pierda el conocimiento",
        },
        {
          number: 9,
          instruction:
            "Si la persona pierde el conocimiento, bájela al suelo y llame a servicios médicos y obtenga un DEA",
          warning: "Activar EMS inmediatamente",
        },
        {
          number: 10,
          instruction: "Comenzar compresiones torácicas inmediatamente",
        },
        {
          number: 11,
          instruction:
            "Después de las primeras 30 compresiones, abra la boca y retire cualquier objeto visible",
        },
        {
          number: 12,
          instruction:
            "Intente 2 respiraciones de rescate; si el aire no entra, continúe las compresiones y revise la boca antes de cada conjunto de ventilaciones",
        },
      ],
      warnings: [
        "Para obstrucción leve, no interfiera más allá de alentar la tos",
        "Los empujes abdominales pueden causar lesiones internas — busque evaluación médica después",
        "Si está inconsciente, priorice las compresiones y los controles de vías aéreas con extracción de objeto visible solo",
      ],
    },
    "choking-adult-self-help": {
      title: "Asfixia (Adulto) — Autoayuda",
      whenToCall911:
        "Inmediatamente si no puede respirar/hablar/toser, los síntomas empeoran, o después de que se expulse el objeto si tiene dolor persistente",
      steps: [
        {
          number: 1,
          instruction:
            "Si hay gente alrededor, llame su atención — no se aisle",
        },
        {
          number: 2,
          instruction: "Intente toser el objeto",
          tip: "Si puede toser fuertemente, siga tosiendo",
        },
        {
          number: 3,
          instruction:
            "Realice empujes abdominales hasta que pueda toser fuertemente, respirar o hablar",
          warning:
            "Si no puede respirar o se está debilitando, llame al 911 inmediatamente",
        },
        {
          number: 4,
          instruction:
            "Si es necesario, use un objeto sólido (respaldo de una silla, mesa o borde del mostrador) para entregar empujes",
          detail:
            "Colóquese para que el borde esté justo por encima de sus caderas",
        },
        {
          number: 5,
          instruction:
            "Presione firmemente contra el objeto para producir empujes abdominales",
          warning:
            "Detenga una vez que la respiración regrese; busque evaluación médica después",
        },
      ],
      warnings: [
        "Solo retire un objeto si es claramente visible y fácilmente accesible",
        "Los empujes abdominales pueden causar lesiones internas — busque evaluación médica después",
        "Si se marea, se debilita o pierde la conciencia, puede caer — intente permanecer cerca de otros",
      ],
    },
    "choking-child": {
      title: "Alivio de Asfixia (Niño)",
      whenToCall911:
        "Inmediatamente para obstrucción grave o si el niño pierde el conocimiento; obtenga un DEA",
      steps: [
        {
          number: 1,
          instruction: "Determinar si la asfixia es grave",
          warning: "No puede llorar, toser o hablar = grave",
        },
        {
          number: 2,
          instruction:
            "Para niño de 1-8 años: use golpes en la espalda e impulsos torácicos",
          detail: "Alternar 5 golpes en la espalda con 5 impulsos torácicos",
        },
        {
          number: 3,
          instruction: "Coloque el niño boca abajo en su antebrazo",
          tip: "Apoye la mandíbula y la barbilla",
        },
        {
          number: 4,
          instruction: "Dar 5 golpes agudos en la espalda entre los omóplatos",
        },
        {
          number: 5,
          instruction: "Girar el niño boca arriba y dar 5 impulsos torácicos",
          detail: "Use 2-3 dedos, presione 1-1,5 pulgadas de profundidad",
        },
        {
          number: 6,
          instruction:
            "Repita ciclos de 5 golpes en la espalda y 5 impulsos hasta que se expulse el objeto",
          warning: "Llame al 911 si no tiene éxito después de 2 minutos",
        },
        {
          number: 7,
          instruction:
            "Si el niño pierde el conocimiento, bájelo al suelo, llame a servicios médicos y obtenga un DEA",
        },
        {
          number: 8,
          instruction: "Comenzar compresiones torácicas inmediatamente",
        },
        {
          number: 9,
          instruction:
            "Después de las primeras 30 compresiones, revise la boca y retire cualquier objeto visible",
        },
        {
          number: 10,
          instruction:
            "Intente 2 respiraciones de rescate; si el aire no entra, continúe las compresiones y revise la boca antes de cada ventilación",
        },
      ],
      warnings: [
        "Para obstrucción leve, anime al niño a toser",
        "Los impulsos torácicos pueden causar lesiones internas — busque evaluación médica después",
        "Si está inconsciente, priorice las compresiones y los controles de vías aéreas",
      ],
    },
    "choking-baby": {
      title: "Alivio de Asfixia (Bebé)",
      whenToCall911:
        "Inmediatamente si el bebé no puede toser, llorar o respirar; obtenga un DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar una inspección de la escena y una inspección primaria",
          tip: "Asegurese de que el bebé esté seguro y responsivo",
        },
        {
          number: 2,
          instruction:
            "Si el bebé puede toser fuertemente o respirar, deje que el bebé intente expulsar el objeto",
          tip: "Si una obstrucción leve dura más de unos minutos, envíe por ayuda médica",
        },
        {
          number: 3,
          instruction:
            "Evalúe si el bebé no puede toser fuertemente, no puede respirar, hace ruido agudo al intentar respirar, o comienza a ponerse azul",
          warning:
            "Estos son signos de obstrucción grave — comience golpes en la espalda e impulsos torácicos inmediatamente",
        },
        {
          number: 4,
          instruction:
            "Asegurar al bebé entre los antebrazos y girar boca abajo",
          detail: "Sostenga la mandíbula y la barbilla",
        },
        {
          number: 5,
          instruction:
            "Dar 5 golpes agudos en la espalda entre los omóplatos con el talón de la mano",
        },
        {
          number: 6,
          instruction: "Girar al bebé boca arriba entre los brazos",
          detail: "Coloque el pulgar en el esternón, debajo de los pezones",
        },
        {
          number: 7,
          instruction: "Dar 5 empujes torácicos rápidos con dos dedos",
          detail: "Presione hacia adentro sobre el esternón",
        },
        {
          number: 8,
          instruction:
            "Repita ciclos de 5 golpes en la espalda y 5 empujes torácicos hasta que se expulse el objeto o el bebé pierda el conocimiento",
          warning:
            "Si no tiene éxito después de 1 minuto, llame al 911 o comience RCP",
        },
      ],
      warnings: [
        "Para obstrucción leve, deje que el bebé intente toser",
        "Los empujes torácicos pueden causar lesiones internas — busque evaluación médica después",
        "Si está inconsciente, comience RCP inmediatamente",
      ],
    },
    "severe-bleeding": {
      title: "Sangrado Severo",
      whenToCall911:
        "Inmediatamente para sangrado arterial o sangrado que no se detiene después de 10 minutos de presión",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar una inspección de la escena, luego hacer una inspección primaria",
          tip: "Asegurese de la seguridad de usted y la víctima antes de acercarse",
        },
        {
          number: 2,
          instruction:
            "Para controlar sangrado severo, aplicar presión directa en la herida",
          detail: "Use un paño limpio o vendaje y presione firmemente",
        },
        {
          number: 3,
          instruction: "Colocar al paciente en reposo",
          detail:
            "Mantenerlo tranquilo e inmóvil para minimizar la pérdida de sangre",
        },
        {
          number: 4,
          instruction:
            "Una vez que el sangrado está bajo control, continúe la inspección primaria, buscando otras lesiones que amenazan la vida",
          warning: "No se enfoque solo en la herida visible",
        },
        {
          number: 5,
          instruction:
            "Si el sangrado no se detiene después de 10 minutos de presión, o si es sangrado arterial (chorro o pulso rápido), aplique presión en el punto de presión más cercano",
          detail: "Los puntos de presión están en brazos y piernas",
        },
        {
          number: 6,
          instruction:
            "Cubrir la herida con un vendaje estéril una vez que el sangrado esté bajo control",
          detail: "No retire el paño original, simplemente agregue capas",
        },
        {
          number: 7,
          instruction:
            "Tratar el shock si está presente: elevar las piernas y mantener caliente",
          warning:
            "El sangrado severo puede llevar a shock — monitoree constantemente",
        },
      ],
      warnings: [
        "Sangrado arterial = emergencia inmediata",
        "Use equipo de protección (guantes) si está disponible",
        "El shock puede desarrollarse rápidamente — monitoree presión arterial y nivel de conciencia",
      ],
    },
    shock: {
      title: "Choque",
      whenToCall911: "Inmediatamente — el choque es potencialmente mortal",
      steps: [
        {
          number: 1,
          instruction:
            "Dar primeros auxilios por la lesión o enfermedad que causó el choque",
          detail:
            "Abordar la causa subyacente mientras se proporciona tratamiento del choque",
        },
        {
          number: 2,
          instruction: "Tranquilizar a la víctima frecuentemente",
          detail: "Mantenerla calma e informada sobre lo que está sucediendo",
        },
        {
          number: 3,
          instruction: "Minimizar el dolor manipulando la víctima suavemente",
          detail:
            "Evitar movimientos innecesarios y ser muy cuidadoso al trasladarla",
        },
        {
          number: 4,
          instruction: "Aflojar la ropa ajustada en el cuello, pecho y cintura",
          detail: "Esto mejora la circulación y la respiración",
        },
        {
          number: 5,
          instruction: "Mantener a la víctima abrigada, pero no sobrecalentada",
          detail:
            "Usar chaquetas, abrigos o mantas si las tiene. Evitar sobrecalentamiento",
        },
        {
          number: 6,
          instruction: "Humedecer los labios si la víctima se queja de sed",
          detail:
            "No dar nada de comer o beber. Si la atención médica se retrasa muchas horas, dar pequeñas cantidades de agua o líquidos claros — anotar qué se dio y cuándo",
        },
        {
          number: 7,
          instruction:
            "Colocar a la víctima en la mejor posición para su condición",
          detail:
            "Generalmente, acostar boca arriba con las piernas elevadas 8-12 pulgadas por encima del nivel del corazón, a menos que esto cause dolor o dificultad para respirar",
        },
      ],
      warnings: [
        "No dar comida o bebida a menos que sea absolutamente necesario después de un retraso prolongado",
        "No sobrecalentar a la víctima",
        "Manipular a la víctima suavemente para minimizar el dolor",
        "Vigilar cambios en la conciencia y la respiración",
        "El choque puede desarrollarse rápidamente y ser potencialmente mortal",
      ],
    },
    fainting: {
      title: "Desmayo",
      whenToCall911:
        "Si hay pérdida de conciencia prolongada, lesiones por caída, o si es la primera vez",
      steps: [
        {
          number: 1,
          instruction:
            "Asegurar un suministro de aire fresco y aflojar la ropa ajustada",
          detail:
            "Aflojar la ropa ajustada en el cuello, pecho y cintura para mejorar la respiración",
        },
        {
          number: 2,
          instruction:
            "Hacer cómoda a la víctima mientras recupera la conciencia",
          detail: "Mantenerla acostada durante 10 a 15 minutos",
        },
        {
          number: 3,
          instruction: "Continuar monitoreando la respiración y la conciencia",
          detail: "Vigilar cualquier cambio en su condición",
        },
        {
          number: 4,
          instruction:
            "Si la recuperación no es rápida o completa, permanecer con la víctima",
          detail:
            "No asumir que la persona simplemente se desmayó a menos que haya recuperación rápida. Permanecer con ella hasta que la atención médica se haga cargo",
        },
        {
          number: 5,
          instruction:
            "Si debe marcharse, girar a la víctima hacia la posición de recuperación",
          detail: "Ser tan cuidadoso como sea posible si hay lesiones",
        },
      ],
      warnings: [
        "No asumir recuperación rápida sin monitoreo",
        "No dejar desatendida a la víctima si la recuperación parece incompleta",
        "Si el desmayo es causado por otra condición, tratar la causa subyacente",
        "Vigilar cambios en la respiración o la conciencia",
      ],
    },
    "impending-faint": {
      title: "Desmayo Inminente",
      whenToCall911:
        "Si los síntomas no mejoran en 5 minutos o si ocurre pérdida de conciencia",
      steps: [
        {
          number: 1,
          instruction: "Acostar a la víctima boca arriba",
          detail: "Hacerlo tan pronto como reconozca los signos de advertencia",
        },
        {
          number: 2,
          instruction: "Asegurar un suministro de aire fresco",
          detail: "Abrir ventanas o puertas para proporcionar ventilación",
        },
        {
          number: 3,
          instruction: "Aflojar la ropa ajustada en el cuello, pecho y cintura",
          detail: "Esto mejora la circulación y la respiración",
        },
        {
          number: 4,
          instruction:
            "Permanecer con la víctima hasta que se recupere completamente",
          detail:
            "Monitorear su condición y estar listo para proporcionar más asistencia",
        },
      ],
      warnings: [
        "Los signos de advertencia incluyen: piel pálida, sudoración, sentirse mal o náuseas, mareos, o falta de equilibrio",
        "Actuar rápidamente cuando note estos signos para prevenir desmayos reales",
        "No dejar desatendida a la víctima durante la recuperación",
      ],
    },
    "burns-first-degree": {
      title: "Quemaduras de Primer Grado",
      whenToCall911: "Si la quemadura es grande o en áreas sensibles",
      steps: [
        {
          number: 1,
          instruction: "Detener el proceso de quemadura aplicando agua fría",
          detail: "Aplicar agua fría durante 10-20 minutos",
        },
        {
          number: 2,
          instruction:
            "Remover joyería o ropa ajustada cerca del área quemada antes de que se hinche",
          warning: "Esto debe hacerse rápidamente",
        },
        {
          number: 3,
          instruction: "Aplicar crema o loción calmante",
          detail: "Usar aloe vera o crema sin perfume",
        },
        {
          number: 4,
          instruction: "Tomar analgésicos de venta libre si es necesario",
          detail: "Acetaminofén o ibuprofeno para el dolor",
        },
        {
          number: 5,
          instruction: "Cubrir con ropa seca y suelta si es necesario",
          detail: "Proteger del aire para reducir el dolor",
        },
      ],
      warnings: [
        "No aplicar hielo directamente — puede causar más daño",
        "No aplicar mantequilla o aceite",
        "No reventar ampollas",
      ],
    },
    "burns-second-degree": {
      title: "Quemaduras de Segundo Grado",
      whenToCall911:
        "Inmediatamente si la quemadura cubre más del 10% del cuerpo o está en cara, manos, pies, genitales o articulaciones",
      steps: [
        {
          number: 1,
          instruction: "Detener el proceso de quemadura aplicando agua fría",
          detail: "Aplicar agua fría durante 15-20 minutos",
        },
        {
          number: 2,
          instruction:
            "Remover joyería, reloj y ropa ajustada cerca del área quemada",
          warning: "Hacerlo antes de que se hinche",
        },
        {
          number: 3,
          instruction:
            "Cubrir la quemadura con un vendaje estéril o paño limpio",
          detail: "Proteger de la suciedad y la contaminación",
        },
        {
          number: 4,
          instruction: "Elevar la zona quemada si es posible",
          detail: "Esto reduce la hinchazón",
        },
        {
          number: 5,
          instruction: "Dar analgésicos de venta libre para el dolor",
          detail: "Acetaminofén o ibuprofeno",
        },
      ],
      warnings: [
        "No aplicar mantequilla, aceite o cremas oleosas",
        "No reventar ampollas",
        "No aplicar hielo directamente",
        "Puede haber cicatrices — seguimiento médico recomendado",
      ],
    },
    "burns-third-degree": {
      title: "Quemaduras de Tercer Grado",
      whenToCall911: "Inmediatamente — quemadura potencialmente mortal",
      steps: [
        {
          number: 1,
          instruction: "Llamar al 911 inmediatamente",
          detail: "Las quemaduras de tercer grado son emergencias médicas",
        },
        {
          number: 2,
          instruction: "No remover la ropa que se adhiere a la piel",
          warning: "Hacerlo puede causar más daño",
        },
        {
          number: 3,
          instruction: "Cubrir con un paño limpio y seco",
          detail: "Mantener la temperatura corporal sin aplicar presión",
        },
        {
          number: 4,
          instruction: "Elevar las extremidades afectadas si es posible",
          detail: "Colocar sobre almohadas para reducir el shock",
        },
        {
          number: 5,
          instruction: "Monitorear las vías respiratorias y la respiración",
          detail: "Estar preparado para hacer RCP si es necesario",
        },
        {
          number: 6,
          instruction:
            "Dar sorbos pequeños de agua si la persona está consciente",
          warning: "Solo si no hay quemaduras en la boca o garganta",
        },
        {
          number: 7,
          instruction:
            "Mantener al paciente caliente pero sin calentar el área quemada",
          detail: "Usar mantas no adhesivas",
        },
      ],
      warnings: [
        "Esta es una emergencia que requiere atención médica inmediata",
        "Riesgo alto de shock — mantener elevado",
        "Riesgo de infección — no tocar el área",
        "Puede haber daño profundo aunque la piel se vea quemada",
        "Cicatrices y procedimientos quirúrgicos probables",
      ],
    },
    "allergic-reaction": {
      title: "Reacción Alérgica Grave",
      whenToCall911:
        "Inmediatamente para reacciones graves o si hay dificultad para respirar/tragar",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar encuesta de escena y encuesta primaria. Llamar a servicios de emergencia",
          warning: "Llamar al 911 inmediatamente para reacciones graves",
        },
        {
          number: 2,
          instruction:
            "Colocar al paciente en la posición más cómoda para respirar",
          detail:
            "Generalmente sentado erguido. Esta posición ayuda a abrir la vía respiratoria",
        },
        {
          number: 3,
          instruction:
            "Ayudar al paciente con su medicamento, generalmente un auto-inyector de epinefrina",
          detail: "Ayudarle a usar su EpiPen o similar según se indique",
        },
        {
          number: 4,
          instruction:
            "Para usar el auto-inyector: Sacar del tubo y sostener firmemente con la punta naranja hacia abajo",
          detail: "Remover el cierre de seguridad azul",
        },
        {
          number: 5,
          instruction:
            "Usar el auto-inyector en la parte carnuda del muslo medio-externo",
          detail: "Los auto-inyectores se pueden usar a través de ropa ligera",
        },
        {
          number: 6,
          instruction:
            "Presionar la punta naranja firmemente contra el muslo medio-externo hasta que se active",
          detail: "La inyección administrará la epinefrina automáticamente",
        },
        {
          number: 7,
          instruction:
            "Sostener el auto-inyector en su lugar durante varios segundos, luego extraerlo completamente",
          detail: "Asegurar que se haya administrado la dosis completa",
        },
        {
          number: 8,
          instruction:
            "Después de la inyección, mantener al paciente caliente y evitar esfuerzo",
          warning:
            "Llamar al 911 tan pronto como haya administrado la primera dosis",
        },
        {
          number: 9,
          instruction: "Proporcionar atención continua al paciente",
          detail:
            "Monitorear la respiración y los signos vitales, estar preparado para RCP si es necesario",
        },
      ],
      warnings: [
        "La anafilaxis es una emergencia que pone en peligro la vida",
        "Los síntomas incluyen: dificultad para respirar, estrechez de garganta, hinchazón, urticaria, mareos",
        "Llamar al 911 inmediatamente para reacciones graves",
        "Usar EpiPen tan pronto como se sospeche anafilaxis",
        "Llamar al 911 tan pronto como se administre la primera dosis",
        "Los síntomas pueden repetirse - buscar atención médica inmediata",
        "No elevar las piernas si hay dificultad para respirar",
        "No reinsertar la aguja en el auto-inyector después de su uso",
      ],
    },
    poisoning: {
      title: "Primeros Auxilios para Envenenamiento",
      whenToCall911:
        "Inmediatamente — llame al Centro de Control de Venenos (1-800-222-1222) o 911",
      steps: [
        {
          number: 1,
          instruction: "Realizar encuesta de escena y encuesta primaria",
          detail: "Recopilar cualquier información sobre el veneno sospechado",
        },
        {
          number: 2,
          instruction:
            "Si el paciente está consciente, llamar al Centro de Información sobre Venenos",
          detail:
            "Seguir sus consejos cuidadosamente. Guiarán el tratamiento basado en el veneno específico",
        },
        {
          number: 3,
          instruction:
            "Si el paciente está inconsciente o tiene convulsiones, llamar a servicios médicos",
          warning: "Llamar al 911 inmediatamente",
        },
        {
          number: 4,
          instruction:
            "Si el paciente está inconsciente pero respira, colocar en posición de recuperación",
          detail:
            "Mantener vía respiratoria abierta y monitorear la respiración",
        },
        {
          number: 5,
          instruction:
            "Proporcionar atención continua hasta que llegue la ayuda médica",
          detail:
            "Monitorear signos vitales, mantener caliente y estar preparado para RCP",
        },
      ],
      warnings: [
        "No inducir vómito a menos que lo aconseje el Centro de Información sobre Venenos",
        "No diluir venenos ingeridos a menos que lo indique el Centro de Información sobre Venenos",
        "Para venenos inhalados, asegurar su propia seguridad antes de ayudar",
        "Evaluar peligros con atención a gas o vapor venenoso",
        "Para venenos absorbidos, enjuagar con grandes cantidades de agua fría",
        "Para venenos inyectados, mantener miembro afectado por debajo del nivel del corazón",
        "El tiempo es crítico con el envenenamiento",
        "Muchos venenos causan síntomas retardados",
      ],
    },
    "poisoning-swallowed": {
      title: "Primeros Auxilios para Venenos Ingeridos",
      whenToCall911:
        "Inmediatamente — llame al Centro de Control de Venenos (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction:
            "Si se requiere RCP, revisar el área alrededor de la boca",
          detail:
            "Limpiar cualquier residuo venenoso. Siempre usar un dispositivo de barrera para protección adicional",
        },
        {
          number: 2,
          instruction: "Realizar encuesta de escena y encuesta primaria",
          detail: "Evaluar consciencia y respiración",
        },
        {
          number: 3,
          instruction: "No diluir el veneno dando fluidos",
          warning:
            "A menos que el Centro de Información sobre Venenos lo indique específicamente",
        },
        {
          number: 4,
          instruction:
            "Si consciente, limpiar residuo venenoso o corrosivo de la cara",
          detail: "Enjuagar o limpiar cuidadosamente la boca",
        },
        {
          number: 5,
          instruction:
            "Nunca inducir vómito excepto por consejo del Centro de Información sobre Venenos",
          warning: "Muchos venenos causan más daño cuando se vomitan",
        },
      ],
      warnings: [
        "No diluir sin consejo del Centro de Información sobre Venenos",
        "No inducir vómito sin consejo del Centro de Información sobre Venenos",
        "Muchos venenos corrosivos dañarán la boca y garganta si se vomitan",
        "Siempre protegerse con dispositivo de barrera si se da RCP",
      ],
    },
    "poisoning-inhaled": {
      title: "Primeros Auxilios para Venenos Inhalados",
      whenToCall911: "Inmediatamente — mueva a aire fresco y llame al 911",
      steps: [
        {
          number: 1,
          instruction: "Realizar encuesta de escena y encuesta primaria",
          detail:
            "Evaluar peligros con particular atención a la posible presencia de gas o vapor venenoso. Asegurar su seguridad",
        },
        {
          number: 2,
          instruction: "Mover a la persona a aire fresco lejos de la fuente",
          warning: "Solo hacerlo si es seguro para usted",
        },
        {
          number: 3,
          instruction: "Si la respiración no está presente, comenzar RCP",
          detail:
            "Si el veneno podría afectarlo mientras da primeros auxilios, usar máscara facial o escudo con válvula de una dirección",
        },
        {
          number: 4,
          instruction:
            "Si el paciente vomita, mantener vía respiratoria abierta",
          detail:
            "Limpiar la boca y colocar al paciente en posición de recuperación",
        },
        {
          number: 5,
          instruction: "Si el paciente tiene convulsiones, prevenir lesiones",
          detail: "Protegerlo de objetos que golpeen",
        },
        {
          number: 6,
          instruction: "Proporcionar atención continua y obtener ayuda médica",
          detail: "Monitorear respiración y consciencia",
        },
      ],
      warnings: [
        "Asegurar su propia seguridad antes de ayudar - no entrar en áreas peligrosas",
        "Usar equipo de protección (máscara, escudo) si está disponible",
        "Mover a aire fresco inmediatamente",
        "Vigilar síntomas respiratorios retardados",
        "Estar preparado para vómito o convulsiones",
      ],
    },
    "poisoning-absorbed": {
      title: "Primeros Auxilios para Venenos Absorbidos",
      whenToCall911:
        "Inmediatamente — llame al Centro de Control de Venenos (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction: "Realizar encuesta de escena y encuesta primaria",
          detail: "Evaluar la situación y extensión de la exposición",
        },
        {
          number: 2,
          instruction:
            "Enjuagar el área afectada con grandes cantidades de agua fría",
          detail:
            "Si la sustancia venenosa es un polvo, cepillar cantidades excesivas con un paño seco antes de enjuagar",
        },
        {
          number: 3,
          instruction:
            "Remover cualquier ropa que haya estado en contacto con el veneno",
          warning: "No tocar la ropa hasta que haya sido completamente lavada",
        },
        {
          number: 4,
          instruction: "Lavar la piel afectada minuciosamente con jabón y agua",
          detail: "Continuar lavando durante varios minutos",
        },
        {
          number: 5,
          instruction:
            "Proporcionar atención continua hasta que llegue la ayuda médica",
          detail:
            "Monitorear signos de absorción sistémica y buscar atención médica",
        },
      ],
      warnings: [
        "Algunos químicos absorbidos a través de la piel pueden causar emergencias que amenazan la vida",
        "Cepillar polvo antes de enjuagar para evitar dispersión",
        "No tocar ropa contaminada con manos desnudas",
        "Vigilar síntomas de envenenamiento sistémico incluso después del tratamiento inicial",
        "La dermatitis de contacto incluye enrojecimiento, picazón y ampollas",
      ],
    },
    "poisoning-injected": {
      title: "Primeros Auxilios para Venenos Inyectados",
      whenToCall911:
        "Inmediatamente — llame al 911 o Centro de Control de Venenos",
      steps: [
        {
          number: 1,
          instruction: "Seguir primeros auxilios generales para envenenamiento",
          detail:
            "Realizar encuesta de escena y encuesta primaria, llamar a ayuda si es necesario",
        },
        {
          number: 2,
          instruction: "Colocar al paciente en reposo",
          detail:
            "Mantener miembro afectado por debajo del nivel del corazón para ralentizar la circulación del veneno",
        },
        {
          number: 3,
          instruction: "Inmovilizar el miembro afectado",
          detail: "Esto retrasa la circulación del veneno a través del cuerpo",
        },
        {
          number: 4,
          instruction:
            "Si pinchazo de aguja con posible contaminación de enfermedad, frotar vigorosamente",
          detail: "Usar Yodo o desinfectante similar en el sitio de inyección",
        },
        {
          number: 5,
          instruction: "Obtener atención médica",
          warning:
            "Los venenos inyectados requieren evaluación y tratamiento médico profesional",
        },
      ],
      warnings: [
        "Mantener miembro afectado inmovilizado y por debajo del nivel del corazón",
        "No mover el miembro afectado más de lo necesario",
        "Para lesiones por pinchazo de aguja, buscar atención médica inmediata",
        "Los síntomas sistémicos pueden ser retardados",
        "Siempre obtener evaluación médica profesional",
      ],
    },
    "shock-treatment": {
      title: "Tratar el Shock",
      whenToCall911: "Inmediatamente",
      steps: [
        {
          number: 1,
          instruction: "Llamar al 911 inmediatamente",
          warning: "El shock pone en peligro la vida",
        },
        {
          number: 2,
          instruction: "Identificar la causa del shock si es posible",
          detail:
            "Lesión grave, pérdida de sangre, enfermedad grave, reacción alérgica",
        },
        {
          number: 3,
          instruction:
            "Acostar a la persona con las piernas elevadas 12 pulgadas",
          detail: "A menos que se sospeche lesión en la cabeza o espina dorsal",
        },
        {
          number: 4,
          instruction: "Mantener a la persona abrigada con mantas",
          tip: "Prevenir pérdida adicional de calor",
        },
        {
          number: 5,
          instruction: "No dar comida o agua",
          warning: "Puede atragantar o vomitar",
        },
        {
          number: 6,
          instruction: "Monitorear la respiración y el pulso",
          detail: "Estar preparado para comenzar RCP",
        },
        {
          number: 7,
          instruction: "Tranquilizar a la persona y mantenerla calma",
          tip: "El apoyo emocional ayuda a reducir la severidad del shock",
        },
      ],
      warnings: [
        "Señales: piel pálida, fría, pegajosa, debilidad, pulso rápido/débil",
        "Puede ser fatal si no se trata",
        "Monitorear continuamente hasta que llegue la ayuda",
      ],
    },
    fracture: {
      title: "Fractura",
      whenToCall911:
        "Si hay fragmentos óseos visibles, deformidad o sospechas de fractura en cuello/espalda",
    },
    "asthma-attack": {
      title: "Ataque de Asma Grave",
      whenToCall911:
        "Inmediatamente si el inhalador no funciona, hay dificultad severa para respirar o los labios se vuelven azules",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar encuesta de escena y encuesta primaria; pedir ayuda médica",
          detail:
            "Llamar al 911 o servicios de emergencia inmediatamente para un ataque grave",
        },
        {
          number: 2,
          instruction:
            "Colocar al paciente en la posición más cómoda para respirar",
          detail:
            "Generalmente sentado erguido con brazos descansando sobre una mesa",
        },
        {
          number: 3,
          instruction: "Ayudar al paciente a tomar medicamento prescrito",
          detail:
            "Asistir con inhalador de rescate o medicamentos para el asma prescritos",
        },
        {
          number: 4,
          instruction: "Si después de 5 minutos no hay mejora, llamar al 911",
          detail: "Estar preparado para RCP si la respiración se detiene",
        },
        {
          number: 5,
          instruction: "Mantener al paciente calmado y tranquilo",
          warning: "La ansiedad puede empeorar los ataques de asma",
        },
      ],
      warnings: [
        "Dificultad severa para respirar, labios azules, confusión requieren atención inmediata",
        "El paciente puede estar muy asustado - proporcionar apoyo emocional",
        "Si hay sibilancias o pulmones completamente silenciosos (muy malos), llamar 911",
        "Estar preparado para hacer RCP",
      ],
    },
    "mdi-inhaler": {
      title: "Asistencia con Inhalador de Dosis Medida",
      whenToCall911:
        "Si los síntomas de ataque de asma empeoran o no mejoran después del uso de medicamento",
      steps: [
        {
          number: 1,
          instruction: "Agitar el contenedor, luego quitar la tapa",
          detail:
            "Preparar el inhalador de dosis medida (MDI o 'puffer') para usar",
        },
        {
          number: 2,
          instruction: "Decirle al paciente que respire completamente",
          detail: "Vaciar sus pulmones de aire antes de inhalar la medicación",
        },
        {
          number: 3,
          instruction:
            "Decirle al paciente que respire lentamente y profundamente",
          detail:
            "Mientras lo hace, presionar el MDI para soltar la medicación. El MDI puede estar en la boca o justo frente a la boca",
        },
        {
          number: 4,
          instruction:
            "Decirle al paciente que retenga la respiración durante 10 segundos",
          detail:
            "Esto permite que la medicación se dispersione en los pulmones. Luego decirle que respire normalmente. Si se necesitan más dosis, esperar al menos 30-60 segundos antes de repetir",
        },
      ],
      warnings: [
        "Seguir las instrucciones prescritas del paciente para su inhalador específico",
        "Algunos inhaladores requieren un dispositivo espaciador para entrega adecuada",
        "No agitar el inhalador mientras el paciente está inhalando",
        "Asegurar que el paciente entienda la técnica",
        "Si los síntomas no mejoran después de 15 minutos, buscar ayuda médica",
      ],
    },
    seizure: {
      title: "Convulsión",
      whenToCall911:
        "Inmediatamente para la primera convulsión o convulsiones que duran más de 5 minutos",
    },
    stroke: {
      title: "Accidente Cerebrovascular/AIT",
      whenToCall911:
        "Inmediatamente — el tiempo es crítico (RÁPIDO: Rostro, Brazos, Habla, Tiempo)",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar encuesta de escena, luego encuesta primaria; realizar evaluación RÁPIDA",
          detail:
            "R.Á.P.I.D.O. = Rostro caído, Brazos débiles, Habla dificultosa, Tiempo de inicio. Buscar estos signos inmediatamente",
        },
        {
          number: 2,
          instruction: "Llamar a servicios médicos",
          warning:
            "Llamar al 911 inmediatamente — el tiempo es crítico, el tratamiento debe comenzar dentro de horas",
        },
        {
          number: 3,
          instruction: "Colocar al paciente en posición semi-sentada",
          detail: "Esta posición ayuda con la respiración y circulación",
        },
        {
          number: 4,
          instruction: "No dar nada por boca, especialmente aspirina",
          warning:
            "El paciente puede tener dificultad para tragar y la aspirina está contraindicada en algunos tipos de accidente cerebrovascular",
        },
        {
          number: 5,
          instruction: "Dar cuidados continuos",
          detail:
            "Monitorear respiración y consciencia, mantenerlo calmado y tranquilizado, estar preparado para RCP si es necesario",
        },
      ],
      warnings: [
        "Rostro caído en un lado",
        "Debilidad o entumecimiento de brazo en un lado",
        "Dificultad del habla o arrastrada",
        "Problemas de visión o pérdida",
        "Pérdida de equilibrio o mareos",
        "Dolor de cabeza severo sin causa conocida",
        "No dar comida o agua - riesgo de asfixia",
        "No dar aspirina - puede empeorar algunos tipos de accidente cerebrovascular",
        "Los minutos = muerte de células cerebrales - actuar RÁPIDO",
      ],
    },
    "heart-attack": {
      title: "Infarto/Angina",
      whenToCall911: "Inmediatamente — no espere, llame al 911 primero",
      steps: [
        {
          number: 1,
          instruction: "Realizar encuesta de escena, luego encuesta primaria",
          detail:
            "Hacer preguntas al paciente: '¿Puede mostrarme dónde le duele?' '¿Ha tenido este dolor antes?' '¿Tiene medicamento para este dolor?'",
        },
        {
          number: 2,
          instruction: "Llamar a servicios médicos y obtener un desfibrilador",
          warning: "Llamar al 911 inmediatamente — el tiempo es crítico",
        },
        {
          number: 3,
          instruction: "Colocar al paciente en posición semi-sentada",
          detail:
            "La posición semi-sentada es generalmente la mejor opción, y tranquilizar al paciente",
        },
        {
          number: 4,
          instruction:
            "Ayudar al paciente consciente a tomar su medicamento prescrito",
          detail:
            "Generalmente nitroglicerina. Si el paciente no tiene medicamento prescrito, o la primera dosis es inefectiva, preguntar si tiene alergia a la aspirina. Si el paciente cree que puede tomarla, sugerir que mastique una tableta de aspirina regular (o dos tabletas de dosis baja). La aspirina puede reducir los efectos de un infarto debido a sus propiedades anticoagulantes",
        },
        {
          number: 5,
          instruction:
            "Si el paciente pierde consciencia y deja de respirar, comenzar RCP",
          warning: "Estar preparado para realizar RCP inmediatamente",
        },
      ],
      warnings: [
        "Dolor, presión u opresión en el pecho requieren atención médica inmediata",
        "El dolor puede irradiarse al brazo, mandíbula o espalda",
        "Preguntar sobre alergias a la aspirina antes de administrar",
        "Las mujeres pueden tener síntomas atípicos",
        "Llamar al 911 inmediatamente — cada minuto cuenta",
      ],
    },
    shock: {
      title: "Primeros Auxilios para el Shock",
      whenToCall911: "Inmediatamente — el shock es una emergencia médica",
      steps: [
        {
          number: 1,
          instruction:
            "Dar primeros auxilios para la lesión o enfermedad que causó el shock",
          detail:
            "Trate la causa subyacente mientras brinda cuidados para el shock",
        },
        {
          number: 2,
          instruction: "Tranquilizar a la víctima con frecuencia",
          detail: "Manténgala calmada e informada de lo que está ocurriendo",
        },
        {
          number: 3,
          instruction:
            "Minimizar el dolor manipulando a la víctima con cuidado",
          detail:
            "Evite movimientos innecesarios y tenga mucho cuidado al moverla",
        },
        {
          number: 4,
          instruction: "Aflojar la ropa ajustada en cuello, pecho y cintura",
          detail: "Esto mejora la circulación y la respiración",
        },
        {
          number: 5,
          instruction: "Mantener a la víctima abrigada, pero sin sobrecalentar",
          detail:
            "Use chaquetas, abrigos o mantas si están disponibles. Evite el exceso de calor",
        },
        {
          number: 6,
          instruction: "Humedezca los labios si tiene sed",
          detail:
            "No le dé nada de comer ni beber. Si la ayuda se retrasa muchas horas, puede dar pequeñas cantidades de agua o líquidos claros; anote qué se dio y cuándo",
        },
        {
          number: 7,
          instruction:
            "Coloque a la víctima en la mejor posición según su condición",
          detail:
            "Generalmente, acostada boca arriba con las piernas elevadas 20–30 cm, a menos que cause dolor o dificultad para respirar",
        },
      ],
      warnings: [
        "No dar comida ni bebida a menos que sea absolutamente necesario tras una demora prolongada",
        "No sobrecalentar a la víctima",
        "Manipular con cuidado para minimizar el dolor",
        "Vigilar cambios en consciencia y respiración",
        "El shock puede desarrollarse rápidamente y ser mortal",
      ],
    },
    fainting: {
      title: "Primeros Auxilios para el Desmayo",
      whenToCall911:
        "Si la recuperación no es rápida/completa, o si el desmayo se debe a lesión, dolor en el pecho o desmayos repetidos",
      steps: [
        {
          number: 1,
          instruction: "Asegurar aire fresco y aflojar la ropa ajustada",
          detail:
            "Afloje la ropa en el cuello, pecho y cintura para mejorar la respiración",
        },
        {
          number: 2,
          instruction:
            "Hacer que la víctima esté cómoda mientras regresa la consciencia",
          detail: "Manténgala acostada durante 10–15 minutos",
        },
        {
          number: 3,
          instruction: "Continuar monitoreando respiración y consciencia",
          detail: "Observe cualquier cambio en su condición",
        },
        {
          number: 4,
          instruction:
            "Si la recuperación no es rápida o completa, quédese con la víctima",
          detail:
            "No asuma que alguien 'solo se desmayó' sin una recuperación rápida. Quédese hasta que llegue ayuda médica",
        },
        {
          number: 5,
          instruction:
            "Si debe irse, coloque a la víctima en posición de recuperación",
          detail: "Sea lo más cuidadoso posible si hay lesiones",
        },
      ],
      warnings: [
        "No asumir recuperación rápida sin vigilancia",
        "No dejar a la víctima sola si la recuperación parece incompleta",
        "Si el desmayo se debe a otra condición, trate la causa subyacente",
        "Vigilar cambios en respiración o consciencia",
      ],
    },
    poisoning: {
      title: "Primeros Auxilios Generales para Envenenamiento",
      whenToCall911:
        "Llame al centro de toxicología o al 911 inmediatamente si hay síntomas graves, pérdida de consciencia, convulsiones o dificultad para respirar",
      steps: [
        {
          number: 1,
          instruction:
            "Asegure su seguridad y la de la víctima; retire la fuente si es seguro",
        },
        {
          number: 2,
          instruction: "Identifique la sustancia si es posible",
          detail:
            "Lleve el envase/etiqueta o anote la cantidad, la hora y la vía de exposición",
        },
        {
          number: 3,
          instruction:
            "Llame al centro de toxicología o a emergencias y siga sus instrucciones",
          tip: "En EE. UU.: 1-800-222-1222",
        },
        {
          number: 4,
          instruction:
            "No provoque el vómito ni administre comida/bebida a menos que se lo indiquen",
          warning: "Algunas sustancias pueden causar más daño al vomitar",
        },
        {
          number: 5,
          instruction: "Monitoree respiración y consciencia",
          detail:
            "Comience RCP si deja de respirar y use posición de recuperación si está inconsciente pero respira",
        },
      ],
      warnings: [
        "No dar nada por vía oral si la persona está somnolienta o inconsciente",
        "No mezclar remedios caseros (leche, carbón, etc.) sin indicación profesional",
        "Evite la exposición secundaria (ventile, use guantes si puede)",
      ],
    },
    fracture: {
      title: "Primeros Auxilios para una Convulsión o Crisis",
      whenToCall911:
        "Llame al 911 si dura más de 5 minutos, hay lesiones, dificultad para respirar, la persona está embarazada/diabética, o es la primera convulsión",
      steps: [
        {
          number: 1,
          instruction: "Mantenga la calma y permanezca con la persona",
        },
        {
          number: 2,
          instruction: "Proteja la cabeza y retire objetos peligrosos cercanos",
        },
        {
          number: 3,
          instruction:
            "No sujete a la persona ni intente detener los movimientos",
        },
        {
          number: 4,
          instruction: "No ponga nada en la boca",
          warning: "No puede 'tragarse la lengua'",
        },
        {
          number: 5,
          instruction: "Cronometre la convulsión",
          detail: "Anote duración y tipo de movimientos",
        },
        {
          number: 6,
          instruction: "Cuando termine, coloque en posición de recuperación",
          detail: "Asegúrese de que respira normalmente",
        },
        {
          number: 7,
          instruction:
            "Revise lesiones y tranquilice a la persona mientras se recupera",
        },
        {
          number: 8,
          instruction: "Permita descanso y privacidad",
          detail: "Puede sentirse confundida o cansada",
        },
      ],
      warnings: [
        "No sujetar ni restringir",
        "No poner objetos en la boca",
        "Alejar peligros y proteger la cabeza",
      ],
    },
    stroke: {
      title: "Primeros Auxilios para Accidente Cerebrovascular/AIT",
      whenToCall911:
        "Inmediatamente — cada minuto cuenta (use FAST: cara, brazo, habla, tiempo)",
      steps: [
        {
          number: 1,
          instruction: "Reconozca los signos de FAST",
          detail:
            "Cara caída, debilidad en brazo, dificultad para hablar — Tiempo de llamar",
        },
        {
          number: 2,
          instruction: "Llame al 911 de inmediato",
          warning: "No conduzca — use ambulancia",
        },
        {
          number: 3,
          instruction: "Anote la hora de inicio de los síntomas",
          detail: "Esto afecta el tratamiento",
        },
        {
          number: 4,
          instruction: "Mantenga a la persona segura y cómoda",
          detail:
            "Si está consciente, posición semi-sentada; si vomita o está somnolienta, considere posición de recuperación",
        },
        {
          number: 5,
          instruction: "No le dé comida, bebida ni medicamentos",
          warning: "Riesgo de atragantamiento",
        },
      ],
      warnings: [
        "El ictus es una emergencia médica",
        "Actuar rápido mejora los resultados",
        "Observe cambios en respiración y consciencia",
      ],
    },
  },
  fr: {
    "cpr-adult": {
      title: "RCP pour Adultes",
      whenToCall911:
        "Immédiatement — activez les services d'urgence et obtenez un DEA dès que possible",
      steps: [
        {
          number: 1,
          instruction: "Effectuer une évaluation de la scène",
          tip: "Vérifiez les dangers avant de vous approcher",
        },
        {
          number: 2,
          instruction: "Évaluer la réactivité",
        },
        {
          number: 3,
          instruction:
            "S'il n'y a pas de réaction, appelez les secours (haut-parleur si téléphone) et envoyez quelqu'un chercher un DEA",
          warning:
            "Si vous êtes seul et sans téléphone, allez chercher de l'aide et un DEA si disponible",
        },
        {
          number: 4,
          instruction: "Effectuer une évaluation primaire",
          detail:
            "Ouvrez les voies aériennes et vérifiez la respiration pendant au moins 5 et au maximum 10 secondes",
        },
        {
          number: 5,
          instruction:
            "Si la victime ne respire pas (ou respire mal/agonalement), placez vos mains au centre de la partie supérieure de la poitrine, épaules au-dessus des mains",
          detail: "Gardez les coudes verrouillés",
        },
        {
          number: 6,
          instruction: "Faites 30 compressions — appuyez fort, appuyez vite",
          detail:
            "Appuyez verticalement sur le sternum de 5–6 cm (2–2,4 po), laissez le thorax revenir complètement et comprimez à 100–120/min",
          tip: "Comptez à voix haute pour garder le rythme",
        },
        {
          number: 7,
          instruction:
            "Ouvrez les voies aériennes en inclinant la tête et en soulevant le menton",
        },
        {
          number: 8,
          instruction: "Donnez 2 insufflations",
          detail:
            "Utilisez un dispositif de barrière si disponible; chaque insufflation ~1 seconde, juste assez pour faire monter la poitrine",
        },
        {
          number: 9,
          instruction:
            "Ceci constitue un cycle de 30:2 (30 compressions pour 2 insufflations) — continuez la RCP jusqu'à l'application d'un DEA, la reprise de réaction, la relève par un autre sauveteur/les secours, ou l'épuisement",
          warning: "Appliquez le DEA dès son arrivée",
        },
      ],
      warnings: [
        "Ne pas pratiquer sur une personne consciente",
        "Arrêtez si la personne recommence à respirer normalement",
        "Appliquez un DEA dès qu'il est disponible",
      ],
    },
    "cpr-child": {
      title: "RCP pour Enfants",
      whenToCall911:
        "Immédiatement — activez les services d'urgence et obtenez un DEA dès que possible (si seul sans téléphone : 2 minutes/5 cycles d'abord)",
      steps: [
        {
          number: 1,
          instruction: "Effectuer une inspection des lieux",
          tip: "Vérifier les dangers avant de s'approcher",
        },
        {
          number: 2,
          instruction: "Évaluer la réactivité",
        },
        {
          number: 3,
          instruction:
            "S'il n'y a pas de réaction, appelez les secours et obtenez un DEA si disponible",
          detail:
            "Si vous êtes seul sans téléphone, effectuez 5 cycles de RCP (environ 2 minutes), puis allez chercher de l'aide; transportez l'enfant avec vous si possible",
        },
        {
          number: 4,
          instruction: "Effectuer une inspection primaire",
          detail:
            "Ouvrir les voies aéreennes et vérifier la respiration pendant au moins 5 et au maximum 10 secondes",
        },
        {
          number: 5,
          instruction:
            "Si l'enfant ne respire pas (ou ne respire pas efficacement/agonique), placez les mains au centre de la poitrine supérieure avec les épaules directement au-dessus des mains",
          detail:
            "Maintenez les coudes verrouillés; utilisez une ou deux mains selon la taille de l'enfant",
        },
        {
          number: 6,
          instruction: "Donner 30 compressions — appuyez fort, appuyez vite",
          detail:
            "Comprimer environ 1/3 de la profondeur de la poitrine (environ 5 cm / 2 pouces), permettre un rebond complet et compresser à 100–120/min",
          tip: "Compter à voix haute pour maintenir le rythme",
        },
        {
          number: 7,
          instruction:
            "Ouvrir les voies aéreennes en penchant la tête et en levant le menton",
        },
        {
          number: 8,
          instruction: "Donner 2 respirations de secours",
          detail:
            "Utiliser un dispositif de barrière si disponible; donner juste assez d'air pour faire monter la poitrine",
        },
        {
          number: 9,
          instruction:
            "C'est un cycle de 30:2 (30 compressions à 2 ventilations) — continuer la RCP jusqu'à l'application d'un DEA, la réaction de l'enfant, la prise en charge par un autre sauveteur/EMS, ou l'épuisement",
          warning: "Appliquer le DEA dès son arrivée",
        },
      ],
      warnings: [
        "Utiliser une ou deux mains selon la taille de l'enfant",
        "Si vous êtes seul sans téléphone, effectuez environ 2 minutes (5 cycles) de RCP avant d'aller chercher de l'aide",
        "Appliquer un DEA dès son arrivée",
      ],
    },
    "choking-adult": {
      title: "Soulagement de l'Étouffement (Adulte)",
      whenToCall911:
        "Immédiatement pour une obstruction grave ou si la personne perd conscience ; obtenez un DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer une inspection des lieux pour assurer la sécurité pour vous et la victime",
        },
        {
          number: 2,
          instruction:
            "Évaluer la gravité — demandez « Êtes-vous en train de vous étouffer ? » et recherchez l'incapacité à parler, tousser ou respirer",
          warning:
            "Appelez le 911 immédiatement si une obstruction grave est suspectée",
        },
        {
          number: 3,
          instruction:
            "Si la personne peut tousser fort, parler ou respirer, encouragez-la à continuer à tousser",
          tip: "Cherchez une aide médicale si l'obstruction légère dure plus que quelques minutes",
        },
        {
          number: 4,
          instruction:
            "Si obstruction grave : donner jusqu'à 5 coups dans le dos entre les omoplates",
          detail: "Soutenir la personne en frappant avec le talon de la main",
        },
        {
          number: 5,
          instruction:
            "Si pas d'expulsion, placez-vous derrière la personne prêt à la soutenir si elle perd conscience",
        },
        {
          number: 6,
          instruction:
            "Fermez le poing et placez-le au niveau du nombril, au-dessus du nombril et sous la cage thoracique",
          detail:
            "Alignez avec les os de la hanche ; évitez la cage thoracique inférieure et l'appendice xiphoïde",
        },
        {
          number: 7,
          instruction:
            "Saisissez le poing avec votre autre main et effectuez 5 poussées abdominales rapides vers l'intérieur et vers le haut",
          detail: "Manœuvre de Heimlich",
        },
        {
          number: 8,
          instruction:
            "Répétez les cycles de 5 coups dans le dos et 5 poussées abdominales jusqu'à l'expulsion de l'objet",
          warning:
            "Ne donnez pas de nourriture ni de boisson ; continuez les cycles jusqu'à efficacité ou perte de conscience",
        },
        {
          number: 9,
          instruction:
            "Si la personne perd conscience, allongez-la au sol et appelez les secours et obtenez un DEA",
          warning: "Activez les services d'urgence immédiatement",
        },
        {
          number: 10,
          instruction: "Commencer les compressions thoraciques immédiatement",
        },
        {
          number: 11,
          instruction:
            "Après les 30 premières compressions, ouvrez la bouche et retirez tout objet visible",
        },
        {
          number: 12,
          instruction:
            "Tentez 2 respirations de secours ; si l'air n'entre pas, continuez les compressions et vérifiez la bouche avant chaque ensemble de ventilations",
        },
      ],
      warnings: [
        "Pour obstruction légère, n'intervenez pas au-delà d'encourager la toux",
        "Les poussées abdominales peuvent causer des blessures internes — cherchez une évaluation médicale après",
        "Si inconscient, priorisez les compressions et les vérifications des voies aéreuses avec extraction d'objet visible seulement",
      ],
    },
    "choking-adult-self-help": {
      title: "Étouffement (Adulte) — Auto-assistance",
      whenToCall911:
        "Immédiatement si vous ne pouvez pas respirer/parler/tousser, les symptômes s'aggravent, ou après l'expulsion de l'objet si vous avez une douleur persistante",
      steps: [
        {
          number: 1,
          instruction:
            "S'il y a des gens à proximité, attirez leur attention — ne vous isolez pas",
        },
        {
          number: 2,
          instruction: "Essayez de tousser l'objet",
          tip: "Si vous pouvez tousser fort, continuez à tousser",
        },
        {
          number: 3,
          instruction:
            "Donnez-vous des poussées abdominales jusqu'à ce que vous puissiez tousser fort, respirer ou parler",
          warning:
            "Si vous ne pouvez pas respirer ou vous affaiblissez, appelez le 911 immédiatement",
        },
        {
          number: 4,
          instruction:
            "Si nécessaire, utilisez un objet solide (dossier d'une chaise, table ou bord du comptoir) pour effectuer des poussées",
          detail:
            "Positionnez-vous de sorte que le bord soit juste au-dessus de vos hanches",
        },
        {
          number: 5,
          instruction:
            "Appuyez fermement contre l'objet pour produire des poussées abdominales",
          warning:
            "Arrêtez une fois la respiration revenue; cherchez une évaluation médicale après",
        },
      ],
      warnings: [
        "Ne retirez un objet que s'il est clairement visible et facilement accessible",
        "Les poussées abdominales peuvent causer des blessures internes — cherchez une évaluation médicale après",
        "Si vous devenez étourdi, faible ou perdez conscience, vous pourriez tomber — essayez de rester près d'autres",
      ],
    },
    "choking-child": {
      title: "Soulagement de l'Étouffement (Enfant)",
      whenToCall911:
        "Immédiatement pour une obstruction grave ou si l'enfant perd conscience ; obtenez un DEA",
      steps: [
        {
          number: 1,
          instruction: "Déterminer si l'étouffement est grave",
          warning: "Ne peut pas pleurer, tousser ou parler = grave",
        },
        {
          number: 2,
          instruction:
            "Pour enfant âgé de 1-8 ans : utilisez des coups dans le dos et des poussées thoraciques",
          detail: "Alternez 5 coups dans le dos avec 5 poussées thoraciques",
        },
        {
          number: 3,
          instruction: "Placez l'enfant face vers le bas sur votre avant-bras",
          tip: "Soutenir la mâchoire et le menton",
        },
        {
          number: 4,
          instruction: "Donner 5 coups aigus dans le dos entre les omoplates",
        },
        {
          number: 5,
          instruction:
            "Tournez l'enfant face vers le haut et donnez 5 poussées thoraciques",
          detail: "Utilisez 2-3 doigts, appuyez 1-1,5 pouces de profondeur",
        },
        {
          number: 6,
          instruction:
            "Répétez les cycles de 5 coups dans le dos et 5 poussées jusqu'à l'expulsion de l'objet",
          warning: "Appelez le 911 s'il n'y a pas de succès après 2 minutes",
        },
        {
          number: 7,
          instruction:
            "Si l'enfant perd conscience, allongez-le au sol, appelez les secours et obtenez un DEA",
        },
        {
          number: 8,
          instruction: "Commencer les compressions thoraciques immédiatement",
        },
        {
          number: 9,
          instruction:
            "Après les 30 premières compressions, vérifiez la bouche et retirez tout objet visible",
        },
        {
          number: 10,
          instruction:
            "Tentez 2 respirations de secours ; si l'air n'entre pas, continuez les compressions et vérifiez la bouche avant chaque ventilation",
        },
      ],
      warnings: [
        "Pour obstruction légère, encouragez l'enfant à tousser",
        "Les poussées thoraciques peuvent causer des blessures internes — cherchez une évaluation médicale après",
        "Si inconscient, priorisez les compressions et les vérifications des voies aéreuses",
      ],
    },
    "choking-baby": {
      title: "Soulagement de l'Étouffement (Bébé)",
      whenToCall911:
        "Immédiatement si le bébé ne peut pas tousser, pleurer ou respirer ; obtenez un DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer une inspection des lieux et une inspection primaire",
          tip: "Assurez-vous que le bébé est en sécurité et réactif",
        },
        {
          number: 2,
          instruction:
            "Si le bébé peut tousser fort ou respirer, laissez le bébé essayer d'expulser l'objet",
          tip: "Si une obstruction légère dure plus que quelques minutes, appelez les secours",
        },
        {
          number: 3,
          instruction:
            "Évaluer si le bébé ne peut pas tousser fort, ne peut pas respirer, fait un bruit aigu en essayant de respirer, ou commence à devenir bleu",
          warning:
            "Ce sont des signes d'obstruction grave — commencez les coups dans le dos et les poussées thoraciques immédiatement",
        },
        {
          number: 4,
          instruction:
            "Assurez le bébé entre vos avant-bras et tournez-le face vers le bas",
          detail: "Soutenir la mâchoire et le menton",
        },
        {
          number: 5,
          instruction:
            "Donner 5 coups aigus dans le dos entre les omoplates avec le talon de la main",
        },
        {
          number: 6,
          instruction: "Tournez le bébé face vers le haut entre les bras",
          detail: "Placez le pouce sur le sternum, sous les mamelons",
        },
        {
          number: 7,
          instruction: "Donner 5 poussées thoraciques rapides avec deux doigts",
          detail: "Appuyez vers l'intérieur sur le sternum",
        },
        {
          number: 8,
          instruction:
            "Répétez les cycles de 5 coups dans le dos et 5 poussées thoraciques jusqu'à l'expulsion de l'objet ou la perte de conscience du bébé",
          warning:
            "S'il n'y a pas de succès après 1 minute, appelez le 911 ou commencez la RCP",
        },
      ],
      warnings: [
        "Pour obstruction légère, laissez le bébé essayer de tousser",
        "Les poussées thoraciques peuvent causer des blessures internes — cherchez une évaluation médicale après",
        "Si inconscient, commencez la RCP immédiatement",
      ],
    },
    "severe-bleeding": {
      title: "Saignement Grave",
      whenToCall911:
        "Immédiatement pour saignement artériel ou saignement qui ne s'arrête pas après 10 minutes de pression",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer une inspection des lieux, puis une inspection primaire",
          tip: "Assurez-vous de la sécurité pour vous et la victime avant d'approcher",
        },
        {
          number: 2,
          instruction:
            "Pour contrôler un saignement grave, appliquer une pression directe sur la plaie",
          detail:
            "Utilisez un linge propre ou un pansement et appuyez fermement",
        },
        {
          number: 3,
          instruction: "Placer la victime au repos",
          detail: "Gardez-la calme et immobile pour minimiser la perte de sang",
        },
        {
          number: 4,
          instruction:
            "Une fois le saignement sous contrôle, continuer l'inspection primaire, recherchant d'autres blessures qui menacent la vie",
          warning: "Ne vous concentrez pas uniquement sur la plaie visible",
        },
        {
          number: 5,
          instruction:
            "Si le saignement ne s'arrête pas après 10 minutes de pression, ou s'il y a saignement artériel (jet ou pulsations rapides), appliquer une pression au point de pression le plus proche",
          detail: "Les points de pression sont sur les bras et les jambes",
        },
        {
          number: 6,
          instruction:
            "Couvrir la plaie avec un pansement stérile une fois le saignement sous contrôle",
          detail:
            "Ne retirez pas le linge original, ajoutez simplement des couches",
        },
        {
          number: 7,
          instruction:
            "Traiter le choc s'il est présent : élever les jambes et garder au chaud",
          warning:
            "Le saignement grave peut entraîner un choc — surveillez constamment",
        },
      ],
      warnings: [
        "Saignement artériel = urgence immédiate",
        "Utilisez un équipement de protection (gants) s'il est disponible",
        "Le choc peut se développer rapidement — surveillez la pression artérielle et le niveau de conscience",
      ],
    },
    shock: {
      title: "Choc",
      whenToCall911: "Immédiatement — le choc met la vie en danger",
      steps: [
        {
          number: 1,
          instruction:
            "Donner les premiers secours pour la blessure ou la maladie qui a causé le choc",
          detail:
            "Traiter la cause sous-jacente tout en fournissant un traitement du choc",
        },
        {
          number: 2,
          instruction: "Rassurer souvent la victime",
          detail: "La maintenir calme et informée de ce qui se passe",
        },
        {
          number: 3,
          instruction:
            "Minimiser la douleur en manipulant la victime avec douceur",
          detail:
            "Éviter les mouvements inutiles et être très prudent lors du déplacement",
        },
        {
          number: 4,
          instruction:
            "Desserrer les vêtements serrés au cou, à la poitrine et à la taille",
          detail: "Cela améliore la circulation et la respiration",
        },
        {
          number: 5,
          instruction:
            "Garder la victime au chaud, mais ne pas la surcharuffer",
          detail:
            "Utiliser des vestes, des manteaux ou des couvertures si vous en avez. Éviter la surchauffe",
        },
        {
          number: 6,
          instruction:
            "Humidifier les lèvres si la victime se plaint d'avoir soif",
          detail:
            "Ne rien donner à manger ou à boire. Si l'aide médicale est retardée de nombreuses heures, donner de petites quantités d'eau ou de liquides clairs — noter ce qui a été donné et quand",
        },
        {
          number: 7,
          instruction:
            "Placer la victime dans la meilleure position pour son état",
          detail:
            "Généralement, la coucher à plat avec les jambes surélevées de 8 à 12 pouces au-dessus du niveau du cœur, sauf si cela cause de la douleur ou des difficultés respiratoires",
        },
      ],
      warnings: [
        "Ne pas donner de nourriture ou de boisson sauf si absolument nécessaire après un délai prolongé",
        "Ne pas surcharuffer la victime",
        "Manipuler la victime avec douceur pour minimiser la douleur",
        "Surveiller les changements de conscience et de respiration",
        "Le choc peut se développer rapidement et être potentiellement mortel",
      ],
    },
    fainting: {
      title: "Évanouissement",
      whenToCall911:
        "Si perte de conscience prolongée, blessures à la chute, ou première fois",
      steps: [
        {
          number: 1,
          instruction:
            "Assurer un approvisionnement en air frais et desserrer les vêtements serrés",
          detail:
            "Desserrer les vêtements serrés au cou, à la poitrine et à la taille pour améliorer la respiration",
        },
        {
          number: 2,
          instruction:
            "Mettre la victime à l'aise lors du retour de la conscience",
          detail: "La maintenir allongée pendant 10 à 15 minutes",
        },
        {
          number: 3,
          instruction: "Continuer à surveiller la respiration et la conscience",
          detail: "Surveiller tout changement dans son état",
        },
        {
          number: 4,
          instruction:
            "Si la récupération n'est pas rapide ou complète, rester avec la victime",
          detail:
            "Ne pas supposer qu'une personne s'est « simplement évanouie » sauf s'il y a récupération rapide. Rester avec elle jusqu'à ce que l'aide médicale prenne en charge",
        },
        {
          number: 5,
          instruction:
            "Si vous devez partir, tourner la victime dans la position de récupération",
          detail: "Être aussi prudent que possible s'il y a des blessures",
        },
      ],
      warnings: [
        "Ne pas supposer une récupération rapide sans surveillance",
        "Ne pas laisser la victime sans surveillance si la récupération semble incomplète",
        "Si l'évanouissement est dû à une autre condition, traiter la cause sous-jacente",
        "Surveiller les changements de respiration ou de conscience",
      ],
    },
    "impending-faint": {
      title: "Évanouissement Imminent",
      whenToCall911:
        "Si les symptômes ne s'améliorent pas en 5 minutes ou si perte de conscience",
      steps: [
        {
          number: 1,
          instruction: "Placer la victime sur le dos",
          detail:
            "Faire cela dès que vous reconnaissez les signes d'avertissement",
        },
        {
          number: 2,
          instruction: "Assurer un approvisionnement en air frais",
          detail:
            "Ouvrir les fenêtres ou les portes pour fournir une ventilation",
        },
        {
          number: 3,
          instruction:
            "Desserrer les vêtements serrés au cou, à la poitrine et à la taille",
          detail: "Cela améliore la circulation et la respiration",
        },
        {
          number: 4,
          instruction:
            "Rester avec la victime jusqu'à la récupération complète",
          detail:
            "Surveiller son état et être prêt à fournir une assistance supplémentaire",
        },
      ],
      warnings: [
        "Les signes d'avertissement incluent : peau pâle, transpiration, nausées, vertiges ou instabilité",
        "Agir rapidement lorsque vous remarquez ces signes pour prévenir l'évanouissement réel",
        "Ne pas laisser la victime sans surveillance pendant la récupération",
      ],
    },
    "burns-first-degree": {
      title: "Brûlures au Premier Degré",
      whenToCall911: "Si la brûlure est grande ou dans des zones sensibles",
      steps: [
        {
          number: 1,
          instruction:
            "Arrêter le processus de brûlure en appliquant de l'eau froide",
          detail: "Appliquer de l'eau froide pendant 10-20 minutes",
        },
        {
          number: 2,
          instruction:
            "Retirer les bijoux ou les vêtements serrés près de la zone brûlée avant que le gonflement ne se produise",
          warning: "Cela doit être fait rapidement",
        },
        {
          number: 3,
          instruction: "Appliquer une crème ou une lotion apaisante",
          detail: "Utiliser de l'aloe vera ou une crème sans parfum",
        },
        {
          number: 4,
          instruction: "Prendre des analgésiques en vente libre si nécessaire",
          detail: "Acétaminophène ou ibuprofène pour la douleur",
        },
        {
          number: 5,
          instruction:
            "Couvrir avec des vêtements secs et amples si nécessaire",
          detail: "Protéger de l'air pour réduire la douleur",
        },
      ],
      warnings: [
        "Ne pas appliquer de glace directement — cela peut causer plus de dégâts",
        "Ne pas appliquer de beurre ou d'huile",
        "Ne pas crever les cloques",
      ],
    },
    "burns-second-degree": {
      title: "Brûlures au Deuxième Degré",
      whenToCall911:
        "Immédiatement si la brûlure couvre plus de 10 % du corps ou est sur le visage, les mains, les pieds, les organes génitaux ou les articulations",
      steps: [
        {
          number: 1,
          instruction:
            "Arrêter le processus de brûlure en appliquant de l'eau froide",
          detail: "Appliquer de l'eau froide pendant 15-20 minutes",
        },
        {
          number: 2,
          instruction:
            "Retirer les bijoux, la montre et les vêtements serrés près de la zone brûlée",
          warning: "Le faire avant le gonflement",
        },
        {
          number: 3,
          instruction:
            "Couvrir la brûlure avec un pansement stérile ou un tissu propre",
          detail: "Protéger de la saleté et de la contamination",
        },
        {
          number: 4,
          instruction: "Surélever la zone brûlée si possible",
          detail: "Cela réduit le gonflement",
        },
        {
          number: 5,
          instruction: "Donner des analgésiques en vente libre pour la douleur",
          detail: "Acétaminophène ou ibuprofène",
        },
      ],
      warnings: [
        "Ne pas appliquer de beurre, d'huile ou de crèmes grasses",
        "Ne pas crever les ampoules",
        "Ne pas appliquer de glace directement",
        "Des cicatrices peuvent apparaître — suivi médical recommandé",
      ],
    },
    "burns-third-degree": {
      title: "Brûlures au Troisième Degré",
      whenToCall911: "Immédiatement — brûlure potentiellement mortelle",
      steps: [
        {
          number: 1,
          instruction: "Appeler le 911 immédiatement",
          detail: "Les brûlures au troisième degré sont des urgences médicales",
        },
        {
          number: 2,
          instruction: "Ne pas retirer les vêtements adhérents à la peau",
          warning: "Cela peut causer des dommages supplémentaires",
        },
        {
          number: 3,
          instruction: "Couvrir avec un tissu propre et sec",
          detail: "Maintenir la température corporelle sans appuyer",
        },
        {
          number: 4,
          instruction: "Surélever les membres affectés si possible",
          detail: "Placer sur des oreillers pour réduire le choc",
        },
        {
          number: 5,
          instruction: "Surveiller les voies respiratoires et la respiration",
          detail: "Être prêt à faire la RCP si nécessaire",
        },
        {
          number: 6,
          instruction: "Donner de petites gorgées d'eau si conscient",
          warning:
            "Seulement s'il n'y a pas de brûlures à la bouche ou la gorge",
        },
        {
          number: 7,
          instruction:
            "Garder le patient au chaud mais sans réchauffer la zone brûlée",
          detail: "Utiliser des couvertures non adhérentes",
        },
      ],
      warnings: [
        "C'est une urgence nécessitant une attention médicale immédiate",
        "Risque élevé de choc — surélever",
        "Risque d'infection — ne pas toucher la zone",
        "Il peut y avoir des dommages profonds même si la peau semble brûlée",
        "Cicatrices et interventions chirurgicales probables",
      ],
    },
    "allergic-reaction": {
      title: "Réaction Allergique Grave",
      whenToCall911:
        "Immédiatement pour réactions graves ou difficultés respiratoires/déglutition",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer un relevé de scène et un relevé primaire. Appeler les services d'urgence",
          warning: "Appeler le 911 immédiatement pour les réactions graves",
        },
        {
          number: 2,
          instruction:
            "Placer la victime dans la position la plus confortable pour respirer",
          detail:
            "Généralement assis droit. Cette position aide à ouvrir les voies respiratoires",
        },
        {
          number: 3,
          instruction:
            "Aider la victime avec ses médicaments, généralement un auto-injecteur d'épinéphrine",
          detail:
            "L'aider à utiliser son EpiPen ou un auto-injecteur similaire selon les instructions",
        },
        {
          number: 4,
          instruction:
            "Pour utiliser l'auto-injecteur: Retirer du tube de rangement et tenir fermement avec l'embout orange vers le bas",
          detail: "Retirer la sécurité bleue",
        },
        {
          number: 5,
          instruction:
            "Utiliser l'auto-injecteur sur la partie charnue de la cuisse mi-externe",
          detail:
            "Les auto-injecteurs peuvent être utilisés sur les vêtements légers",
        },
        {
          number: 6,
          instruction:
            "Appuyer fermement l'embout orange sur la cuisse mi-externe jusqu'à l'activation",
          detail: "L'injection délivrera l'épinéphrine automatiquement",
        },
        {
          number: 7,
          instruction:
            "Maintenir l'auto-injecteur en place pendant plusieurs secondes, puis le retirer d'un coup sec",
          detail: "S'assurer que la dose complète a été administrée",
        },
        {
          number: 8,
          instruction:
            "Après injection, garder la victime au chaud et éviter tout effort",
          warning:
            "Appeler le 911 dès que vous avez administré la première dose",
        },
        {
          number: 9,
          instruction: "Fournir des soins continus à la victime",
          detail:
            "Surveiller la respiration et les signes vitaux, être prêt à faire la RCP si nécessaire",
        },
      ],
      warnings: [
        "L'anaphylaxie est une urgence menaçant le pronostic vital",
        "Les symptômes incluent: difficulté respiratoire, resserrement de la gorge, gonflement, urticaire, étourdissements",
        "Appeler le 911 immédiatement pour les réactions graves",
        "Utiliser l'EpiPen dès que l'anaphylaxie est soupçonnée",
        "Appeler le 911 dès que la première dose est administrée",
        "Les symptômes peuvent récidiver - chercher une attention médicale immédiate",
        "Ne pas surélever les jambes en cas de difficulté respiratoire",
        "Ne pas réintroduire l'aiguille dans l'auto-injecteur après utilisation",
      ],
    },
    poisoning: {
      title: "Premiers Secours pour l'Empoisonnement",
      whenToCall911:
        "Immédiatement — appelez le Centre de Contrôle des Poisons (1-800-222-1222) ou le 911",
      steps: [
        {
          number: 1,
          instruction: "Effectuer un relevé de scène et un relevé primaire",
          detail: "Recueillir toute information sur le poison soupçonné",
        },
        {
          number: 2,
          instruction:
            "Si la victime est consciente, appeler le Centre d'Information sur les Poisons",
          detail:
            "Suivre leurs conseils attentivement. Ils guideront le traitement en fonction du poison spécifique",
        },
        {
          number: 3,
          instruction:
            "Si la victime est inconsciente ou a des convulsions, appeler les services médicaux",
          warning: "Appeler le 911 immédiatement",
        },
        {
          number: 4,
          instruction:
            "Si la victime est inconsciente mais respire, placer en position de récupération",
          detail:
            "Garder les voies respiratoires ouvertes et surveiller la respiration",
        },
        {
          number: 5,
          instruction:
            "Fournir des soins continus jusqu'à l'arrivée de l'aide médicale",
          detail:
            "Surveiller les signes vitaux, garder au chaud et être prêt pour la RCP",
        },
      ],
      warnings: [
        "Ne pas induire de vomissements sauf sur avis du Centre d'Information sur les Poisons",
        "Ne pas diluer les poisons ingérés sauf indication du Centre d'Information sur les Poisons",
        "Pour les poisons inhalés, assurer votre sécurité avant d'aider",
        "Évaluer les dangers en tenant compte de la présence possible de gaz ou de vapeur toxique",
        "Pour les poisons absorbés, rincer avec de grandes quantités d'eau froide",
        "Pour les poisons injectés, garder le membre affecté en dessous du niveau du cœur",
        "Le temps est critique en cas d'empoisonnement",
        "Beaucoup de poisons causent des symptômes retardés",
      ],
    },
    "poisoning-swallowed": {
      title: "Premiers Secours pour les Poisons Ingérés",
      whenToCall911:
        "Immédiatement — appelez le Centre de Contrôle des Poisons (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction:
            "Si la RCP est requise, vérifier la zone autour de la bouche",
          detail:
            "Essuyer tout résidu toxique. Toujours utiliser un dispositif barrière pour une protection supplémentaire",
        },
        {
          number: 2,
          instruction: "Effectuer un relevé de scène et un relevé primaire",
          detail: "Évaluer la conscience et la respiration",
        },
        {
          number: 3,
          instruction: "Ne pas diluer le poison en donnant des fluides",
          warning:
            "Sauf indication spécifique du Centre de Contrôle des Poisons",
        },
        {
          number: 4,
          instruction:
            "Si conscient, essuyer tout résidu toxique ou corrosif du visage",
          detail: "Rincer ou nettoyer soigneusement la bouche",
        },
        {
          number: 5,
          instruction:
            "Ne jamais induire de vomissements sauf sur avis du Centre de Contrôle des Poisons",
          warning:
            "Beaucoup de poisons causent plus de dommages lorsqu'ils sont vomis",
        },
      ],
      warnings: [
        "Ne pas diluer sans avis du Centre de Contrôle des Poisons",
        "Ne pas induire de vomissements sans avis du Centre de Contrôle des Poisons",
        "Beaucoup de poisons corrosifs endommageront la bouche et la gorge s'ils sont vomis",
        "Toujours protéger avec un dispositif barrière si la RCP est donnée",
      ],
    },
    "poisoning-inhaled": {
      title: "Premiers Secours pour les Poisons Inhalés",
      whenToCall911:
        "Immédiatement — déplacez-vous à l'air frais et appelez le 911",
      steps: [
        {
          number: 1,
          instruction: "Effectuer un relevé de scène et un relevé primaire",
          detail:
            "Évaluer les dangers en tenant compte de la possible présence de gaz ou de vapeur toxique. Assurer votre sécurité",
        },
        {
          number: 2,
          instruction: "Déplacer la personne à l'air frais loin de la source",
          warning: "Ne le faire que s'il est sûr pour vous",
        },
        {
          number: 3,
          instruction: "Si la respiration n'est pas présente, commencer la RCP",
          detail:
            "Si le poison pourrait vous affecter lors de la réanimation, utiliser un masque facial ou un écran avec une valve unidirectionnelle",
        },
        {
          number: 4,
          instruction:
            "Si la victime vomit, garder les voies respiratoires ouvertes",
          detail:
            "Nettoyer la bouche et mettre la victime en position de récupération",
        },
        {
          number: 5,
          instruction:
            "Si la victime a des convulsions, prévenir les blessures",
          detail: "La protéger des objets qui pourraient la frapper",
        },
        {
          number: 6,
          instruction:
            "Fournir des soins continus et obtenir de l'aide médicale",
          detail: "Surveiller la respiration et la conscience",
        },
      ],
      warnings: [
        "Assurer votre propre sécurité avant d'aider - ne pas entrer dans les zones dangereuses",
        "Utiliser l'équipement de protection (masque, écran) s'il est disponible",
        "Déplacer à l'air frais immédiatement",
        "Surveiller les symptômes respiratoires retardés",
        "Être prêt pour les vomissements ou les convulsions",
      ],
    },
    "poisoning-absorbed": {
      title: "Premiers Secours pour les Poisons Absorbés",
      whenToCall911:
        "Immédiatement — appelez le Centre de Contrôle des Poisons (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction: "Effectuer un relevé de scène et un relevé primaire",
          detail: "Évaluer la situation et l'étendue de l'exposition",
        },
        {
          number: 2,
          instruction:
            "Rincer la zone affectée avec de grandes quantités d'eau froide",
          detail:
            "Si la substance toxique est une poudre, brosser les quantités excessives avec un chiffon sec avant de rincer",
        },
        {
          number: 3,
          instruction:
            "Retirer tous les vêtements qui ont été en contact avec le poison",
          warning:
            "Ne pas toucher les vêtements jusqu'à ce qu'ils aient été complètement lavés",
        },
        {
          number: 4,
          instruction:
            "Laver la peau affectée minutieusement avec du savon et de l'eau",
          detail: "Continuer à laver pendant plusieurs minutes",
        },
        {
          number: 5,
          instruction:
            "Fournir des soins continus jusqu'à l'arrivée de l'aide médicale",
          detail:
            "Surveiller les signes d'absorption systémique et chercher une aide médicale",
        },
      ],
      warnings: [
        "Certains produits chimiques absorbés par la peau peuvent causer des urgences mortelles",
        "Brosser la poudre avant de rincer pour éviter la propagation",
        "Ne pas toucher les vêtements contaminés à mains nues",
        "Surveiller les symptômes d'empoisonnement systémique même après le traitement initial",
        "La dermatite de contact comprend rougeur, démangeaisons et ampoules",
      ],
    },
    "poisoning-injected": {
      title: "Premiers Secours pour les Poisons Injectés",
      whenToCall911:
        "Immédiatement — appelez le 911 ou le Centre de Contrôle des Poisons",
      steps: [
        {
          number: 1,
          instruction:
            "Suivre les premiers secours généraux pour l'empoisonnement",
          detail:
            "Effectuer relevé de scène et relevé primaire, appeler à l'aide si nécessaire",
        },
        {
          number: 2,
          instruction: "Placer la victime au repos",
          detail:
            "Garder le membre affecté en dessous du niveau du cœur pour ralentir la circulation du poison",
        },
        {
          number: 3,
          instruction: "Immobiliser le membre affecté",
          detail: "Cela retarde la circulation du poison dans le corps",
        },
        {
          number: 4,
          instruction:
            "Si piqûre d'aiguille avec possible contamination par maladie, frotter vigoureusement",
          detail:
            "Utiliser de l'iode ou un désinfectant similaire sur le site d'injection",
        },
        {
          number: 5,
          instruction: "Obtenir une aide médicale",
          warning:
            "Les poisons injectés nécessitent une évaluation et un traitement médicaux professionnels",
        },
      ],
      warnings: [
        "Garder le membre affecté immobilisé et en dessous du niveau du cœur",
        "Ne pas bouger le membre affecté plus que nécessaire",
        "Pour les blessures par piqûre d'aiguille, chercher une aide médicale immédiate",
        "Les symptômes systémiques peuvent être retardés",
        "Toujours obtenir une évaluation médicale professionnelle",
      ],
    },
    "shock-treatment": {
      title: "Traiter le Choc",
      whenToCall911: "Immédiatement",
      steps: [
        {
          number: 1,
          instruction: "Appeler le 911 immédiatement",
          warning: "Le choc met la vie en danger",
        },
        {
          number: 2,
          instruction: "Identifier la cause du choc si possible",
          detail:
            "Blessure grave, perte de sang, maladie grave, réaction allergique",
        },
        {
          number: 3,
          instruction:
            "Allonger la personne avec les jambes surélevées de 12 pouces",
          detail: "Sauf si lésion à la tête ou colonne vertébrale soupçonnée",
        },
        {
          number: 4,
          instruction: "Garder la personne au chaud avec des couvertures",
          tip: "Prévenir la perte supplémentaire de chaleur",
        },
        {
          number: 5,
          instruction: "Ne pas donner de nourriture ou d'eau",
          warning: "Peut causer l'étouffement ou vomissements",
        },
        {
          number: 6,
          instruction: "Surveiller la respiration et le pouls",
          detail: "Être prêt à commencer la RCP",
        },
        {
          number: 7,
          instruction: "Rassurer la personne et la garder calme",
          tip: "Le soutien émotionnel aide à réduire la gravité du choc",
        },
      ],
      warnings: [
        "Signes: peau pâle, froide, moite, faiblesse, pouls rapide/faible",
        "Peut être fatal s'il n'est pas traité",
        "Surveiller continuellement jusqu'à l'arrivée de l'aide",
      ],
    },
    fracture: {
      title: "Fracture",
      whenToCall911:
        "Si fragments osseux visibles, déformation ou suspicion de fracture de la colonne vertébrale/cou",
    },
    "asthma-attack": {
      title: "Crise d'Asthme Grave",
      whenToCall911:
        "Immédiatement si l'inhalateur ne fonctionne pas, difficultés respiratoires graves ou lèvres bleues",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer un relevé de scène et un relevé primaire; demander une aide médicale",
          detail:
            "Appeler le 911 ou les services d'urgence immédiatement pour une crise grave",
        },
        {
          number: 2,
          instruction:
            "Placer la victime dans la position la plus confortable pour respirer",
          detail:
            "Généralement assis droit avec les bras reposant sur une table",
        },
        {
          number: 3,
          instruction: "Aider la victime à prendre ses médicaments prescrits",
          detail:
            "L'aider avec son inhalateur de secours ou ses médicaments prescrits pour l'asthme",
        },
        {
          number: 4,
          instruction:
            "Si après 5 minutes il n'y a pas d'amélioration, appeler le 911",
          detail: "Être prêt à faire la RCP si la respiration s'arrête",
        },
        {
          number: 5,
          instruction: "Garder la victime calme et tranquille",
          warning: "L'anxiété peut aggraver les crises d'asthme",
        },
      ],
      warnings: [
        "Difficultés respiratoires graves, lèvres bleues, confusion nécessitent une attention immédiate",
        "La victime peut être très effrayée - fournir un soutien émotionnel",
        "S'il y a des sifflements ou des poumons complètement silencieux (très grave), appeler 911",
        "Être prêt à faire la RCP",
      ],
    },
    "mdi-inhaler": {
      title: "Assistance avec Inhalateur à Dose Mesurée",
      whenToCall911:
        "Si les symptômes de crise d'asthme s'aggravent ou ne s'améliorent pas après l'utilisation de médicament",
      steps: [
        {
          number: 1,
          instruction: "Agiter le récipient, puis retirer le capuchon",
          detail:
            "Préparer l'inhalateur à dose mesurée (IDM ou 'puff') pour utilisation",
        },
        {
          number: 2,
          instruction: "Dire à la victime d'expirer complètement",
          detail: "Vider les poumons d'air avant d'inhaler le médicament",
        },
        {
          number: 3,
          instruction: "Dire à la victime d'inhaler lentement et profondément",
          detail:
            "Pendant ce temps, appuyer sur l'IDM pour libérer le médicament. L'IDM peut être dans la bouche ou juste devant la bouche",
        },
        {
          number: 4,
          instruction:
            "Dire à la victime de retenir sa respiration pendant 10 secondes",
          detail:
            "Cela permet au médicament de se disperser dans les poumons. Puis lui dire de respirer normalement. Si d'autres doses sont nécessaires, attendre au moins 30-60 secondes avant de répéter",
        },
      ],
      warnings: [
        "Suivre les instructions prescrites de la victime pour son inhalateur spécifique",
        "Certains inhalateurs nécessitent un dispositif espaceur pour une bonne diffusion",
        "Ne pas agiter l'inhalateur pendant que la victime inhale",
        "S'assurer que la victime comprend la technique",
        "Si les symptômes ne s'améliorent pas après 15 minutes, chercher une aide médicale",
      ],
    },
    seizure: {
      title: "Convulsion",
      whenToCall911:
        "Immédiatement pour la première convulsion ou convulsions durant plus de 5 minutes",
    },
    stroke: {
      title: "Accident Vasculaire Cérébral/AVC",
      whenToCall911:
        "Immédiatement — le temps est critique (RAPIDE : Rface, Armes, Parole, Dempo)",
      steps: [
        {
          number: 1,
          instruction:
            "Effectuer un relevé de scène, puis un relevé primaire; effectuer l'évaluation RAPIDE",
          detail:
            "R.A.P.I.D.E. = Rface qui s'affaisse, Armes faibles, Parole difficile, Début identifié. Vérifier ces signes immédiatement",
        },
        {
          number: 2,
          instruction: "Appeler une aide médicale",
          warning:
            "Appeler le 911 immédiatement — le temps est critique, le traitement doit commencer dans les heures",
        },
        {
          number: 3,
          instruction: "Placer la victime en position semi-assise",
          detail: "Cette position aide à la respiration et à la circulation",
        },
        {
          number: 4,
          instruction: "Ne rien donner par la bouche, surtout pas d'aspirine",
          warning:
            "La victime peut avoir de la difficulté à avaler et l'aspirine est contre-indiquée dans certains types d'AVC",
        },
        {
          number: 5,
          instruction: "Fournir des soins continus",
          detail:
            "Surveiller la respiration et la conscience, la garder calme et rassurée, être prêt à faire la RCP si nécessaire",
        },
      ],
      warnings: [
        "Rface qui s'affaisse d'un côté",
        "Faiblesse ou engourdissement du bras d'un côté",
        "Difficulté de parole ou parole traînante",
        "Problèmes visuels ou perte de vision",
        "Perte d'équilibre ou vertiges",
        "Mal de tête grave sans cause connue",
        "Ne pas donner de nourriture ou d'eau — risque d'étouffement",
        "Ne pas donner d'aspirine — peut aggraver certains types d'AVC",
        "Minutes = cellules cérébrales mourantes — agir RAPIDEMENT",
      ],
    },
    "heart-attack": {
      title: "Crise Cardiaque/Angine",
      whenToCall911: "Immédiatement — n'attendez pas, appelez le 911 d'abord",
      steps: [
        {
          number: 1,
          instruction: "Effectuer un relevé de scène, puis un relevé primaire",
          detail:
            "Poser des questions à la victime : 'Pouvez-vous me montrer où ça fait mal?' 'Avez-vous déjà ressenti cette douleur?' 'Avez-vous un médicament pour cette douleur?'",
        },
        {
          number: 2,
          instruction: "Appeler une aide médicale et obtenir un défibrillateur",
          warning: "Appeler le 911 immédiatement — le temps est critique",
        },
        {
          number: 3,
          instruction: "Placer la victime au repos en position semi-assise",
          detail:
            "La position semi-assise est généralement la meilleure option, et rassurer",
        },
        {
          number: 4,
          instruction:
            "Aider la victime consciente à prendre ses médicaments prescrits",
          detail:
            "Généralement la nitroglycérine. Si la victime n'a pas de médicament prescrit, ou si la première dose est inefficace, demander si elle a des allergies à l'ASA, ou si un médecin lui a dit de ne pas la prendre. Si la victime croit pouvoir la prendre, suggérer de mâcher un comprimé d'ASA régulier (ou deux comprimés à faible dose). L'ASA peut réduire les effets d'une crise cardiaque en raison de ses propriétés anticoagulantes",
        },
        {
          number: 5,
          instruction:
            "Si la victime perd conscience et arrête de respirer, commencer la RCP",
          warning: "Être prêt à faire la RCP immédiatement",
        },
      ],
      warnings: [
        "Douleur, pression ou lourdeur thoracique nécessitent une attention médicale immédiate",
        "La douleur peut irradier vers le bras, la mâchoire ou le dos",
        "Demander à propos des allergies à l'ASA avant d'administrer",
        "Les femmes peuvent avoir des symptômes atypiques",
        "Appeler le 911 immédiatement — chaque minute compte",
      ],
    },

    shock: {
      title: "Premiers Secours en cas de Choc",
      whenToCall911: "Immédiatement — le choc est une urgence médicale",
      steps: [
        {
          number: 1,
          instruction:
            "Donner les premiers secours pour la blessure ou la maladie à l'origine du choc",
          detail:
            "Traitez la cause sous-jacente tout en prenant en charge le choc",
        },
        {
          number: 2,
          instruction: "Rassurer souvent la victime",
          detail: "Gardez-la calme et informée de ce qui se passe",
        },
        {
          number: 3,
          instruction: "Minimiser la douleur en la manipulant doucement",
          detail:
            "Éviter les mouvements inutiles et être très prudent si vous devez la déplacer",
        },
        {
          number: 4,
          instruction:
            "Desserrer les vêtements serrés au cou, à la poitrine et à la taille",
          detail: "Cela améliore la circulation et la respiration",
        },
        {
          number: 5,
          instruction: "Garder la victime au chaud, sans la surchauffer",
          detail:
            "Utilisez des vestes, manteaux ou couvertures si disponibles. Évitez la surchauffe",
        },
        {
          number: 6,
          instruction: "Humidifier les lèvres si la victime se plaint de soif",
          detail:
            "Ne rien donner à manger ou à boire. Si l'aide est retardée de nombreuses heures, de petites quantités d'eau ou de liquides clairs peuvent être données — notez quoi et quand",
        },
        {
          number: 7,
          instruction:
            "Placer la victime dans la meilleure position selon son état",
          detail:
            "Généralement allongée, jambes surélevées de 20–30 cm, sauf si cela provoque douleur ou gêne respiratoire",
        },
      ],
      warnings: [
        "Ne pas donner de nourriture ou de boisson sauf nécessité absolue après un très long délai",
        "Ne pas surchauffer la victime",
        "Manipuler doucement pour minimiser la douleur",
        "Surveiller l'état de conscience et la respiration",
        "Le choc peut évoluer rapidement et être mortel",
      ],
    },
    fainting: {
      title: "Premiers Secours en cas d'Évanouissement",
      whenToCall911:
        "Si le rétablissement n'est pas rapide/complet, ou si l'évanouissement est lié à une blessure, une douleur thoracique ou des épisodes répétés",
      steps: [
        {
          number: 1,
          instruction: "Assurer de l'air frais et desserrer les vêtements",
          detail:
            "Desserrer les vêtements au cou, à la poitrine et à la taille pour améliorer la respiration",
        },
        {
          number: 2,
          instruction:
            "Mettre la victime à l'aise pendant le retour à la conscience",
          detail: "La laisser allongée 10 à 15 minutes",
        },
        {
          number: 3,
          instruction:
            "Continuer à surveiller la respiration et l'état de conscience",
          detail: "Observer tout changement de son état",
        },
        {
          number: 4,
          instruction:
            "Si le rétablissement n'est pas rapide ou complet, rester avec la victime",
          detail:
            "Ne pas supposer que la personne a 'juste fait un malaise' sans récupération rapide. Rester jusqu'à la prise en charge médicale",
        },
        {
          number: 5,
          instruction:
            "Si vous devez partir, placer la victime en position latérale de sécurité",
          detail: "Soyez aussi prudent que possible s'il y a des blessures",
        },
      ],
      warnings: [
        "Ne pas présumer d'un rétablissement rapide sans surveillance",
        "Ne pas laisser la victime seule si la récupération est incomplète",
        "Traiter la cause sous-jacente si l'évanouissement est secondaire à une autre condition",
        "Surveiller la respiration et l'état de conscience",
      ],
    },
    poisoning: {
      title: "Premiers Secours Généraux en cas d'Empoisonnement",
      whenToCall911:
        "Appelez le centre antipoison ou le 911 immédiatement en cas de symptômes graves, perte de conscience, convulsions ou difficulté respiratoire",
      steps: [
        {
          number: 1,
          instruction:
            "Assurez votre sécurité et celle de la victime; éloignez la source si c'est sans danger",
        },
        {
          number: 2,
          instruction: "Identifier la substance si possible",
          detail:
            "Gardez le contenant/étiquette et notez quantité, heure et voie d'exposition",
        },
        {
          number: 3,
          instruction:
            "Appeler le centre antipoison ou les urgences et suivre les instructions",
        },
        {
          number: 4,
          instruction:
            "Ne pas faire vomir et ne rien donner à manger/boire sauf indication",
          warning:
            "Certaines substances peuvent causer plus de dommages en cas de vomissement",
        },
        {
          number: 5,
          instruction: "Surveiller la respiration et l'état de conscience",
          detail:
            "Commencer la RCP si la respiration s'arrête; PLS si inconsciente mais respirant",
        },
      ],
      warnings: [
        "Ne rien donner par la bouche si la personne est somnolente ou inconsciente",
        "Éviter les 'remèdes' maison sans avis professionnel",
        "Éviter l'exposition secondaire (aérer, gants si possible)",
      ],
    },
    fracture: {
      title: "Premiers Secours en cas de Crise Convulsive",
      whenToCall911:
        "Appelez le 911 si la crise dure plus de 5 minutes, s'il y a blessure, difficulté respiratoire, grossesse/diabète, ou première crise",
      steps: [
        { number: 1, instruction: "Rester calme et rester avec la personne" },
        {
          number: 2,
          instruction: "Protéger la tête et éloigner les objets dangereux",
        },
        {
          number: 3,
          instruction:
            "Ne pas retenir la personne et ne pas essayer d'arrêter les mouvements",
        },
        {
          number: 4,
          instruction: "Ne rien mettre dans la bouche",
          warning: "On ne peut pas 'avaler sa langue'",
        },
        {
          number: 5,
          instruction: "Chronométrer la crise",
          detail: "Noter la durée et le type de mouvements",
        },
        {
          number: 6,
          instruction:
            "Après la crise, mettre en position latérale de sécurité",
          detail: "Vérifier que la respiration redevient normale",
        },
        {
          number: 7,
          instruction:
            "Vérifier les blessures et rassurer pendant la récupération",
        },
        {
          number: 8,
          instruction:
            "Laisser la personne se reposer et préserver son intimité",
          detail: "Elle peut être confuse ou très fatiguée",
        },
      ],
      warnings: [
        "Ne pas retenir",
        "Ne rien mettre dans la bouche",
        "Éloigner les dangers et protéger la tête",
      ],
    },
    stroke: {
      title: "Premiers Secours en cas d'AVC/AIT",
      whenToCall911:
        "Immédiatement — chaque minute compte (FAST : visage, bras, parole, temps)",
      steps: [
        {
          number: 1,
          instruction: "Reconnaître les signes FAST",
          detail:
            "Visage affaissé, faiblesse d'un bras, trouble de la parole — Temps d'appeler",
        },
        {
          number: 2,
          instruction: "Appeler le 911 immédiatement",
          warning: "Ne pas conduire — ambulance",
        },
        {
          number: 3,
          instruction: "Noter l'heure de début des symptômes",
          detail: "Cela influence le traitement",
        },
        {
          number: 4,
          instruction: "Garder la personne en sécurité et confortable",
          detail:
            "Si consciente: position semi-assise. Si vomissements/somnolence: envisager la PLS",
        },
        {
          number: 5,
          instruction: "Ne pas donner à manger, boire ou médicaments",
          warning: "Risque d'étouffement",
        },
      ],
      warnings: [
        "L'AVC est une urgence médicale",
        "Agir vite améliore les chances de récupération",
        "Surveiller la respiration et l'état de conscience",
      ],
    },
  },
  pt: {
    "cpr-adult": {
      title: "RCP para Adultos",
      whenToCall911:
        "Imediatamente — ative o EMS e obtenha um DEA o mais rápido possível",
      steps: [
        {
          number: 1,
          instruction: "Realizar uma avaliação da cena",
          tip: "Verifique perigos antes de se aproximar",
        },
        {
          number: 2,
          instruction: "Avaliar a responsividade",
        },
        {
          number: 3,
          instruction:
            "Se não houver resposta, ligue para emergência (use viva-voz no celular) e envie alguém para buscar um DEA",
          warning:
            "Se você estiver sozinho e sem telefone, vá buscar ajuda e um DEA (se disponível)",
        },
        {
          number: 4,
          instruction: "Realizar uma avaliação primária",
          detail:
            "Abra as vias aéreas e verifique a respiração por pelo menos 5 e no máximo 10 segundos",
        },
        {
          number: 5,
          instruction:
            "Se a vítima não estiver respirando (ou não respirar efetivamente/de forma agônica), posicione as mãos no centro da parte superior do peito com os ombros diretamente acima das mãos",
          detail: "Mantenha os cotovelos travados",
        },
        {
          number: 6,
          instruction: "Faça 30 compressões — empurre forte, empurre rápido",
          detail:
            "Comprima o esterno 5–6 cm (2–2,4 pol), permita retorno completo e comprima a 100–120/min",
          tip: "Conte em voz alta para manter o ritmo",
        },
        {
          number: 7,
          instruction:
            "Abra as vias aéreas inclinando a cabeça e levantando o queixo",
        },
        {
          number: 8,
          instruction: "Dê 2 respirações de resgate",
          detail:
            "Use um dispositivo de barreira se disponível; cada respiração ~1 segundo, apenas o suficiente para fazer o peito subir",
        },
        {
          number: 9,
          instruction:
            "Isto é um ciclo de 30:2 (30 compressões para 2 ventilações) — continue a RCP até aplicar um DEA, a vítima responder, outro socorrista/EMS assumir, ou você ficar exausto",
          warning: "Aplique o DEA assim que ele chegar",
        },
      ],
    },
    "cpr-child": {
      title: "RCP para Crianças",
      whenToCall911:
        "Imediatamente — ative o EMS e obtenha um DEA o mais rápido possível (se estiver sozinho sem telefone: 2 minutos/5 ciclos primeiro)",
      steps: [
        {
          number: 1,
          instruction: "Realizar uma avaliação da cena",
          tip: "Verificar perigos antes de se aproximar",
        },
        {
          number: 2,
          instruction: "Avaliar a responsividade",
        },
        {
          number: 3,
          instruction:
            "Se não houver resposta, ligue para emergência e obtenha um DEA se disponível",
          detail:
            "Se estiver sozinho sem telefone, realize 5 ciclos de RCP (aproximadamente 2 minutos), depois procure ajuda; leve a criança consigo se possível",
        },
        {
          number: 4,
          instruction: "Realizar uma avaliação primária",
          detail:
            "Abrir as vias aéreas e verificar a respiração por pelo menos 5 e no máximo 10 segundos",
        },
        {
          number: 5,
          instruction:
            "Se a criança não está respirando (ou não respira efetivamente/agônica), coloque as mãos no centro do peito superior com os ombros diretamente acima das mãos",
          detail:
            "Mantenha os cotovelos bloqueados; use uma ou duas mãos dependendo do tamanho da criança",
        },
        {
          number: 6,
          instruction: "Dar 30 compressões — empurre com força, empurre rápido",
          detail:
            "Comprimir aproximadamente 1/3 da profundidade do peito (aproximadamente 5 cm / 2 polegadas), permitir recuo completo e comprimir a 100–120/min",
          tip: "Conte em voz alta para manter o ritmo",
        },
        {
          number: 7,
          instruction:
            "Abrir as vias aéreas inclinando a cabeça e levantando o queixo",
        },
        {
          number: 8,
          instruction: "Dar 2 respirações de resgate",
          detail:
            "Use um dispositivo de barreira se disponível; dê apenas ar suficiente para fazer o peito subir",
        },
        {
          number: 9,
          instruction:
            "Este é um ciclo de 30:2 (30 compressões a 2 ventilações) — continue RCP até a aplicação de um DEA, resposta da criança, outro socorrista/EMS assumir, ou estar muito cansado",
          warning: "Aplique o DEA assim que chegar",
        },
      ],
      warnings: [
        "Usar uma ou duas mãos dependendo do tamanho da criança",
        "Se estiver sozinho sem telefone, realize aproximadamente 2 minutos (5 ciclos) de RCP antes de procurar ajuda",
        "Aplique um DEA assim que chegar",
      ],
    },
    "choking-adult": {
      title: "Alívio de Asfixia (Adulto)",
      whenToCall911:
        "Imediatamente para obstrução grave ou se a pessoa perder a consciência; obtenha um DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar uma avaliação de cena para garantir segurança para você e a vítima",
        },
        {
          number: 2,
          instruction:
            "Avaliar a gravidade — pergunte 'Você está asfixiado?' e procure incapacidade de falar, tossir ou respirar",
          warning:
            "Ligue para 911 imediatamente se houver suspeita de obstrução grave",
        },
        {
          number: 3,
          instruction:
            "Se a pessoa puder tossir com força, falar ou respirar, incentive-a a continuar tossindo",
          tip: "Procure ajuda médica se a obstrução leve durar mais que alguns minutos",
        },
        {
          number: 4,
          instruction:
            "Se obstrução grave: dar até 5 golpes nas costas entre as omoplatas",
          detail: "Apoiar a pessoa enquanto bate com a base da mão",
        },
        {
          number: 5,
          instruction:
            "Se não expulsar, coloque-se atrás da pessoa pronto para apoiá-la se perder a consciência",
        },
        {
          number: 6,
          instruction:
            "Feche o punho e coloque-o ao nível do umbigo, acima do umbigo e abaixo da caixa torácica",
          detail:
            "Alinhe com os ossos do quadril; evite a caixa torácica inferior e o apêndice xifóide",
        },
        {
          number: 7,
          instruction:
            "Agarre o punho com a outra mão e realize 5 impulsos abdominais rápidos para dentro e para cima",
          detail: "Manobra de Heimlich",
        },
        {
          number: 8,
          instruction:
            "Repita ciclos de 5 golpes nas costas e 5 impulsos abdominais até a expulsão do objeto",
          warning:
            "Não dê comida ou bebida; continue os ciclos até ser efetivo ou a pessoa perder a consciência",
        },
        {
          number: 9,
          instruction:
            "Se a pessoa perder a consciência, deite-a no chão e chame por ajuda médica e obtenha um DEA",
          warning: "Ative os serviços de emergência imediatamente",
        },
        {
          number: 10,
          instruction: "Começar as compressões torácicas imediatamente",
        },
        {
          number: 11,
          instruction:
            "Após as primeiras 30 compressões, abra a boca e remova qualquer objeto visível",
        },
        {
          number: 12,
          instruction:
            "Tente 2 respirações de resgate; se o ar não entrar, continue as compressões e verifique a boca antes de cada conjunto de ventilações",
        },
      ],
      warnings: [
        "Para obstrução leve, não interfira além de incentivar a tosse",
        "Impulsos abdominais podem causar lesões internas — procure avaliação médica depois",
        "Se inconsciente, priorize as compressões e verificações de vias aéreas com remoção de objeto visível apenas",
      ],
    },
    "choking-adult-self-help": {
      title: "Asfixia (Adulto) — Auto-ajuda",
      whenToCall911:
        "Imediatamente se não conseguir respirar/falar/tossir, os sintomas piorarem, ou após a expulsão do objeto se tiver dor persistente",
      steps: [
        {
          number: 1,
          instruction:
            "Se há pessoas por perto, chame sua atenção — não se isole",
        },
        {
          number: 2,
          instruction: "Tente tossir o objeto",
          tip: "Se conseguir tossir com força, continue tossindo",
        },
        {
          number: 3,
          instruction:
            "Dê a si mesmo impulsos abdominais até conseguir tossir com força, respirar ou falar",
          warning:
            "Se não conseguir respirar ou estiver ficando fraco, ligue para 911 imediatamente",
        },
        {
          number: 4,
          instruction:
            "Se necessário, use um objeto sólido (encosto de uma cadeira, mesa ou borda do balcão) para entregar impulsos",
          detail:
            "Posicione-se para que a borda fique logo acima de seus quadris",
        },
        {
          number: 5,
          instruction:
            "Pressione firmemente contra o objeto para produzir impulsos abdominais",
          warning:
            "Pare assim que a respiração retorna; procure avaliação médica depois",
        },
      ],
      warnings: [
        "Remova um objeto apenas se for claramente visível e facilmente acessível",
        "Impulsos abdominais podem causar lesões internas — procure avaliação médica depois",
        "Se ficar tonto, fraco ou perder a consciência, você pode cair — tente permanecer perto de outros",
      ],
    },
    "choking-child": {
      title: "Alívio de Asfixia (Criança)",
      whenToCall911:
        "Imediatamente para obstrução grave ou se a criança perder a consciência; obtenha um DEA",
      steps: [
        {
          number: 1,
          instruction: "Determinar se a asfixia é grave",
          warning: "Não consegue chorar, tossir ou falar = grave",
        },
        {
          number: 2,
          instruction:
            "Para criança com 1-8 anos: use golpes nas costas e impulsos no peito",
          detail: "Alterne 5 golpes nas costas com 5 impulsos no peito",
        },
        {
          number: 3,
          instruction:
            "Coloque a criança com o rosto para baixo no seu antebraço",
          tip: "Suporte a mandíbula e o queixo",
        },
        {
          number: 4,
          instruction: "Dar 5 golpes agudos nas costas entre as omoplatas",
        },
        {
          number: 5,
          instruction:
            "Vire a criança com o rosto para cima e dê 5 impulsos no peito",
          detail: "Use 2-3 dedos, pressione 1-1,5 polegadas de profundidade",
        },
        {
          number: 6,
          instruction:
            "Repita ciclos de 5 golpes nas costas e 5 impulsos até a expulsão do objeto",
          warning: "Ligue para 911 se não tiver sucesso após 2 minutos",
        },
        {
          number: 7,
          instruction:
            "Se a criança perder a consciência, coloque-a no chão, chame por ajuda médica e obtenha um DEA",
        },
        {
          number: 8,
          instruction: "Começar as compressões no peito imediatamente",
        },
        {
          number: 9,
          instruction:
            "Após as primeiras 30 compressões, verifique a boca e remova qualquer objeto visível",
        },
        {
          number: 10,
          instruction:
            "Tente 2 respirações de resgate; se o ar não entrar, continue as compressões e verifique a boca antes de cada ventilação",
        },
      ],
      warnings: [
        "Para obstrução leve, encoraje a criança a tossir",
        "Impulsos no peito podem causar lesões internas — procure avaliação médica depois",
        "Se inconsciente, priorize as compressões e verificações de vias aéreas",
      ],
    },
    "choking-baby": {
      title: "Alívio de Asfixia (Bebê)",
      whenToCall911:
        "Imediatamente se o bebê não conseguir tossir, chorar ou respirar; obtenha um DEA",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar uma avaliação da cena e uma avaliação primária",
          tip: "Certifique-se de que o bebê está seguro e responsivo",
        },
        {
          number: 2,
          instruction:
            "Se o bebê puder tossir com força ou respirar, deixe o bebê tentar expulsar o objeto",
          tip: "Se uma obstrução leve durar mais de alguns minutos, procure ajuda médica",
        },
        {
          number: 3,
          instruction:
            "Avalie se o bebê não consegue tossir com força, não consegue respirar, faz som agudo ao tentar respirar, ou começa a ficar azul",
          warning:
            "Estes são sinais de obstrução grave — comece os golpes nas costas e impulsos no peito imediatamente",
        },
        {
          number: 4,
          instruction:
            "Segure o bebê entre seus antebraços e vire-o com o rosto para baixo",
          detail: "Suporte a mandíbula e o queixo",
        },
        {
          number: 5,
          instruction:
            "Dar 5 golpes agudos nas costas entre as omoplatas com a base da mão",
        },
        {
          number: 6,
          instruction: "Vire o bebê com o rosto para cima entre os braços",
          detail: "Coloque o polegar no esterno, abaixo dos mamilos",
        },
        {
          number: 7,
          instruction: "Dar 5 impulsos no peito rápidos com dois dedos",
          detail: "Pressione para dentro no esterno",
        },
        {
          number: 8,
          instruction:
            "Repita ciclos de 5 golpes nas costas e 5 impulsos no peito até a expulsão do objeto ou perda de consciência do bebê",
          warning:
            "Se não tiver sucesso após 1 minuto, ligue para 911 ou comece RCP",
        },
      ],
      warnings: [
        "Para obstrução leve, deixe o bebê tentar tossir",
        "Impulsos no peito podem causar lesões internas — procure avaliação médica depois",
        "Se inconsciente, comece RCP imediatamente",
      ],
    },
    "severe-bleeding": {
      title: "Sangramento Grave",
      whenToCall911:
        "Imediatamente para sangramento arterial ou sangramento que não para após 10 minutos de pressão",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar uma avaliação de cena, depois uma avaliação primária",
          tip: "Certifique-se da segurança para você e a vítima antes de se aproximar",
        },
        {
          number: 2,
          instruction:
            "Para controlar sangramento grave, aplicar pressão direta na ferida",
          detail: "Use um pano limpo ou curativo e pressione com força",
        },
        {
          number: 3,
          instruction: "Colocar a vítima em repouso",
          detail: "Mantenha-a calma e imóvel para minimizar a perda de sangue",
        },
        {
          number: 4,
          instruction:
            "Uma vez que o sangramento está sob controle, continue a avaliação primária, procurando outras lesões que ameaçam a vida",
          warning: "Não se concentre apenas na ferida visível",
        },
        {
          number: 5,
          instruction:
            "Se o sangramento não parar após 10 minutos de pressão, ou se houver sangramento arterial (jato ou pulsações rápidas), aplicar pressão no ponto de pressão mais próximo",
          detail: "Os pontos de pressão estão nos braços e pernas",
        },
        {
          number: 6,
          instruction:
            "Cobrir a ferida com um curativo estéril uma vez que o sangramento está sob controle",
          detail: "Não remova o pano original, simplesmente adicione camadas",
        },
        {
          number: 7,
          instruction:
            "Tratar o choque se presente: elevar as pernas e manter aquecido",
          warning:
            "O sangramento grave pode levar ao choque — monitore constantemente",
        },
      ],
      warnings: [
        "Sangramento arterial = emergência imediata",
        "Use equipamento de proteção (luvas) se disponível",
        "O choque pode se desenvolver rapidamente — monitore pressão arterial e nível de consciência",
      ],
    },
    shock: {
      title: "Choque",
      whenToCall911: "Imediatamente — o choque é potencialmente fatal",
      steps: [
        {
          number: 1,
          instruction:
            "Dar primeiros socorros para a lesão ou doença que causou o choque",
          detail:
            "Abordar a causa subjacente enquanto se fornece tratamento do choque",
        },
        {
          number: 2,
          instruction: "Tranquilizar a vítima frequentemente",
          detail: "Mantê-la calma e informada sobre o que está acontecendo",
        },
        {
          number: 3,
          instruction: "Minimizar a dor manipulando a vítima com cuidado",
          detail:
            "Evitar movimentos desnecessários e ter muito cuidado ao movê-la",
        },
        {
          number: 4,
          instruction: "Afrouxar roupas apertadas no pescoço, peito e cintura",
          detail: "Isso melhora a circulação e a respiração",
        },
        {
          number: 5,
          instruction: "Manter a vítima aquecida, mas não superaquecida",
          detail:
            "Use jaquetas, casacos ou cobertores se tiver. Evite superaquecimento",
        },
        {
          number: 6,
          instruction: "Umidificar os lábios se a vítima reclamar de sede",
          detail:
            "Não dê nada para comer ou beber. Se a ajuda médica for atrasada muitas horas, dê pequenas quantidades de água ou líquidos claros — anote o que foi dado e quando",
        },
        {
          number: 7,
          instruction: "Colocar a vítima na melhor posição para sua condição",
          detail:
            "Geralmente, deite-a deitada com as pernas elevadas 8-12 polegadas acima do nível do coração, a menos que isso cause dor ou dificuldade para respirar",
        },
      ],
      warnings: [
        "Não dê comida ou bebida a menos que seja absolutamente necessário após atraso prolongado",
        "Não superaqueça a vítima",
        "Manipule a vítima com cuidado para minimizar a dor",
        "Monitore mudanças na consciência e na respiração",
        "O choque pode se desenvolver rapidamente e ser potencialmente fatal",
      ],
    },
    fainting: {
      title: "Desmaio",
      whenToCall911:
        "Se houver perda prolongada de consciência, lesões por queda, ou se for a primeira vez",
      steps: [
        {
          number: 1,
          instruction:
            "Garantir um suprimento de ar fresco e afrouxar roupas apertadas",
          detail:
            "Afrouxe roupas apertadas no pescoço, peito e cintura para melhorar a respiração",
        },
        {
          number: 2,
          instruction:
            "Tornar a vítima confortável conforme a consciência retorna",
          detail: "Mantê-la deitada por 10 a 15 minutos",
        },
        {
          number: 3,
          instruction: "Continuar monitorando a respiração e a consciência",
          detail: "Observar qualquer mudança em sua condição",
        },
        {
          number: 4,
          instruction:
            "Se a recuperação não for rápida ou completa, permanecer com a vítima",
          detail:
            "Não assuma que uma pessoa simplesmente desmaiar a menos que haja recuperação rápida. Fique com ela até que o atendimento médico assuma",
        },
        {
          number: 5,
          instruction:
            "Se você deve partir, vire a vítima para a posição de recuperação",
          detail: "Seja tão cuidadoso quanto possível se houver ferimentos",
        },
      ],
      warnings: [
        "Não assuma recuperação rápida sem monitoramento",
        "Não deixe a vítima desatendida se a recuperação parecer incompleta",
        "Se o desmaio for causado por outra condição, trate a causa subjacente",
        "Observe mudanças na respiração ou na consciência",
      ],
    },
    "impending-faint": {
      title: "Desmaio Iminente",
      whenToCall911:
        "Se os sintomas não melhorarem em 5 minutos ou se houver perda de consciência",
      steps: [
        {
          number: 1,
          instruction: "Coloque a vítima em posição deitada",
          detail: "Faça isso assim que reconhecer os sinais de aviso",
        },
        {
          number: 2,
          instruction: "Garantir um suprimento de ar fresco",
          detail: "Abra janelas ou portas para fornecer ventilação",
        },
        {
          number: 3,
          instruction: "Afrouxar roupas apertadas no pescoço, peito e cintura",
          detail: "Isso melhora a circulação e a respiração",
        },
        {
          number: 4,
          instruction: "Fique com a vítima até a recuperação completa",
          detail:
            "Monitore sua condição e esteja pronto para fornecer assistência adicional",
        },
      ],
      warnings: [
        "Os sinais de aviso incluem: pele pálida, transpiração, sentir-se mal ou náuseas, tontura ou instabilidade",
        "Agir rapidamente ao notar esses sinais para prevenir desmaio real",
        "Não deixe a vítima desatendida durante a recuperação",
      ],
    },
    "burns-first-degree": {
      title: "Queimaduras de Primeiro Grau",
      whenToCall911: "Se a queimadura for grande ou em áreas sensíveis",
      steps: [
        {
          number: 1,
          instruction: "Parar o processo de queimadura aplicando água fria",
          detail: "Aplicar água fria por 10-20 minutos",
        },
        {
          number: 2,
          instruction:
            "Remover jóias ou roupas apertadas perto da área queimada antes do inchaço",
          warning: "Isso deve ser feito rapidamente",
        },
        {
          number: 3,
          instruction: "Aplicar creme ou loção calmante",
          detail: "Use aloe vera ou creme sem perfume",
        },
        {
          number: 4,
          instruction: "Tomar analgésicos sem receita se necessário",
          detail: "Acetaminofeno ou ibuprofeno para a dor",
        },
        {
          number: 5,
          instruction: "Cobrir com roupas secas e soltas se necessário",
          detail: "Proteger do ar para reduzir a dor",
        },
      ],
      warnings: [
        "Não aplique gelo diretamente — pode causar mais danos",
        "Não aplique manteiga ou óleo",
        "Não estoure bolhas",
      ],
    },
    "burns-second-degree": {
      title: "Queimaduras de Segundo Grau",
      whenToCall911:
        "Imediatamente se a queimadura cobrir mais de 10% do corpo ou estiver no rosto, mãos, pés, genitais ou articulações",
      steps: [
        {
          number: 1,
          instruction: "Parar o processo de queimadura aplicando água fria",
          detail: "Aplicar água fria durante 15-20 minutos",
        },
        {
          number: 2,
          instruction:
            "Remover jóias, relógio e roupas apertadas perto da área queimada",
          warning: "Fazer isso antes do inchaço",
        },
        {
          number: 3,
          instruction:
            "Cobrir a queimadura com uma atadura estéril ou pano limpo",
          detail: "Proteger da sujeira e contaminação",
        },
        {
          number: 4,
          instruction: "Elevar a área queimada se possível",
          detail: "Isso reduz o inchaço",
        },
        {
          number: 5,
          instruction: "Dar analgésicos de venda livre para a dor",
          detail: "Acetaminofeno ou ibuprofeno",
        },
      ],
      warnings: [
        "Não aplicar manteiga, óleo ou cremes oleosos",
        "Não estourar bolhas",
        "Não aplicar gelo diretamente",
        "Podem formar cicatrizes — acompanhamento médico recomendado",
      ],
    },
    "burns-third-degree": {
      title: "Queimaduras de Terceiro Grau",
      whenToCall911: "Imediatamente — queimadura potencialmente fatal",
      steps: [
        {
          number: 1,
          instruction: "Ligar para 911 imediatamente",
          detail: "Queimaduras de terceiro grau são emergências médicas",
        },
        {
          number: 2,
          instruction: "Não remover roupas aderentes à pele",
          warning: "Isso pode causar mais danos",
        },
        {
          number: 3,
          instruction: "Cobrir com um pano limpo e seco",
          detail: "Manter a temperatura corporal sem apertar",
        },
        {
          number: 4,
          instruction: "Elevar os membros afetados se possível",
          detail: "Colocar sobre almofadas para reduzir o choque",
        },
        {
          number: 5,
          instruction: "Monitorar as vias respiratórias e a respiração",
          detail: "Estar preparado para fazer RCP se necessário",
        },
        {
          number: 6,
          instruction: "Dar pequenos goles de água se consciente",
          warning: "Apenas se não houver queimaduras na boca ou garganta",
        },
        {
          number: 7,
          instruction:
            "Manter o paciente aquecido, mas sem aquecer a área queimada",
          detail: "Usar cobertores que não sejam aderentes",
        },
      ],
      warnings: [
        "Esta é uma emergência que requer atenção médica imediata",
        "Alto risco de choque — manter elevado",
        "Risco de infecção — não tocar na área",
        "Pode haver dano profundo mesmo que a pele pareça queimada",
        "Cicatrizes e procedimentos cirúrgicos prováveis",
      ],
    },
    "allergic-reaction": {
      title: "Reação Alérgica Grave",
      whenToCall911:
        "Imediatamente para reações graves ou dificuldade para respirar/engolir",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar inspeção de cena e inspeção primária. Chamar serviços de emergência",
          warning: "Ligar para 911 imediatamente para reações graves",
        },
        {
          number: 2,
          instruction:
            "Colocar a vítima na posição mais confortável para respirar",
          detail:
            "Geralmente sentada ereta. Esta posição ajuda a abrir as vias respiratórias",
        },
        {
          number: 3,
          instruction:
            "Ajudar a vítima com seu medicamento, geralmente um auto-injetor de epinefrina",
          detail:
            "Ajudá-la a usar seu EpiPen ou auto-injetor similar conforme orientado",
        },
        {
          number: 4,
          instruction:
            "Para usar o auto-injetor: Remover do tubo de armazenamento e segurar firmemente com a ponta laranja para baixo",
          detail: "Remover o travão de segurança azul",
        },
        {
          number: 5,
          instruction:
            "Usar o auto-injetor na parte carnuda da parte média externa da coxa",
          detail: "Os auto-injetores podem ser usados através de roupas leves",
        },
        {
          number: 6,
          instruction:
            "Pressionar a ponta laranja firmemente na parte média externa da coxa até ativar",
          detail: "A injeção administrará a epinefrina automaticamente",
        },
        {
          number: 7,
          instruction:
            "Manter o auto-injetor no lugar durante vários segundos e depois puxar para fora",
          detail: "Garantir que a dose completa foi administrada",
        },
        {
          number: 8,
          instruction:
            "Depois da injeção, manter a vítima aquecida e evitar esforço",
          warning: "Ligar para 911 assim que administrar a primeira dose",
        },
        {
          number: 9,
          instruction: "Fornecer atendimento contínuo à vítima",
          detail:
            "Monitorar respiração e sinais vitais, estar preparado para RCP se necessário",
        },
      ],
      warnings: [
        "Anafilaxia é uma emergência que ameaça a vida",
        "Os sintomas incluem: dificuldade para respirar, aperto na garganta, inchaço, urticária, tontura",
        "Ligar para 911 imediatamente para reações graves",
        "Usar EpiPen assim que a anafilaxia for suspeita",
        "Ligar para 911 assim que a primeira dose for administrada",
        "Os sintomas podem recorrer - buscar atendimento médico imediato",
        "Não elevar as pernas se houver dificuldade para respirar",
        "Não reinserir a agulha no auto-injetor após uso",
      ],
    },
    poisoning: {
      title: "Primeiros Socorros para Envenenamento",
      whenToCall911:
        "Imediatamente — ligue para o Centro de Controle de Intoxicações (1-800-222-1222) ou 911",
      steps: [
        {
          number: 1,
          instruction: "Realizar inspeção de cena e inspeção primária",
          detail: "Reunir qualquer informação sobre o veneno suspeito",
        },
        {
          number: 2,
          instruction:
            "Se a vítima estiver consciente, ligar para o Centro de Informações sobre Venenos",
          detail:
            "Seguir seus conselhos cuidadosamente. Eles guiarão o tratamento baseado no veneno específico",
        },
        {
          number: 3,
          instruction:
            "Se a vítima estiver inconsciente ou tendo convulsões, ligar para ajuda médica",
          warning: "Ligar para 911 imediatamente",
        },
        {
          number: 4,
          instruction:
            "Se a vítima estiver inconsciente mas respirando, colocar em posição de recuperação",
          detail: "Manter vias aéreas abertas e monitorar a respiração",
        },
        {
          number: 5,
          instruction:
            "Fornecer atendimento contínuo até a chegada da ajuda médica",
          detail:
            "Monitorar sinais vitais, manter aquecido e estar preparado para RCP",
        },
      ],
      warnings: [
        "Não induza vômito a menos que aconselhado pelo Centro de Informações sobre Venenos",
        "Não dilua venenos ingeridos a menos que indicado pelo Centro de Informações sobre Venenos",
        "Para venenos inalados, garantir sua própria segurança antes de ajudar",
        "Avaliar perigos com atenção particular à possível presença de gás ou vapor venenoso",
        "Para venenos absorvidos, enxaguar com grandes quantidades de água fria",
        "Para venenos injetados, manter membro afetado abaixo do nível do coração",
        "O tempo é crítico com envenenamento",
        "Muitos venenos causam sintomas retardados",
      ],
    },
    "poisoning-swallowed": {
      title: "Primeiros Socorros para Venenos Ingeridos",
      whenToCall911:
        "Imediatamente — ligue para o Centro de Controle de Intoxicações (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction:
            "Se RCP for necessária, verificar a área ao redor da boca",
          detail:
            "Limpar qualquer resíduo venenoso. Sempre usar um dispositivo de barreira para proteção adicional",
        },
        {
          number: 2,
          instruction: "Realizar inspeção de cena e inspeção primária",
          detail: "Avaliar consciência e respiração",
        },
        {
          number: 3,
          instruction: "Não diluir o veneno dando fluidos",
          warning:
            "A menos que especificamente indicado pelo Centro de Controle de Intoxicações",
        },
        {
          number: 4,
          instruction:
            "Se consciente, limpar resíduo venenoso ou corrosivo do rosto",
          detail: "Enxaguar ou limpar cuidadosamente a boca",
        },
        {
          number: 5,
          instruction:
            "Nunca induza vômito exceto por conselho do Centro de Controle de Intoxicações",
          warning: "Muitos venenos causam mais dano quando vomitados",
        },
      ],
      warnings: [
        "Não dilua sem conselho do Centro de Controle de Intoxicações",
        "Não induza vômito sem conselho do Centro de Controle de Intoxicações",
        "Muitos venenos corrosivos danificarão a boca e a garganta se vomitados",
        "Sempre se proteger com dispositivo de barreira ao dar RCP",
      ],
    },
    "poisoning-inhaled": {
      title: "Primeiros Socorros para Venenos Inalados",
      whenToCall911: "Imediatamente — mude-se para ar fresco e ligue 911",
      steps: [
        {
          number: 1,
          instruction: "Realizar inspeção de cena e inspeção primária",
          detail:
            "Avaliar perigos com atenção especial à possível presença de gás ou vapor venenoso. Garantir sua segurança",
        },
        {
          number: 2,
          instruction: "Mover a pessoa para ar fresco longe da fonte",
          warning: "Apenas se for seguro para você",
        },
        {
          number: 3,
          instruction: "Se a respiração não estiver presente, começar RCP",
          detail:
            "Se o veneno pudesse afetá-lo ao dar primeiros socorros, usar máscara facial ou escudo com válvula unidirecional",
        },
        {
          number: 4,
          instruction: "Se a vítima vomitar, manter as vias aéreas abertas",
          detail: "Limpar a boca e colocar a vítima em posição de recuperação",
        },
        {
          number: 5,
          instruction: "Se a vítima entrar em convulsões, prevenir lesões",
          detail: "Protegê-la de objetos que possam machucá-la",
        },
        {
          number: 6,
          instruction: "Fornecer atendimento contínuo e obter ajuda médica",
          detail: "Monitorar respiração e consciência",
        },
      ],
      warnings: [
        "Garantir sua própria segurança antes de ajudar - não entrar em áreas perigosas",
        "Usar equipamento de proteção (máscara, escudo) se disponível",
        "Mover para ar fresco imediatamente",
        "Observar sintomas respiratórios retardados",
        "Estar preparado para vômito ou convulsões",
      ],
    },
    "poisoning-absorbed": {
      title: "Primeiros Socorros para Venenos Absorvidos",
      whenToCall911:
        "Imediatamente — ligue para o Centro de Controle de Intoxicações (1-800-222-1222)",
      steps: [
        {
          number: 1,
          instruction: "Realizar inspeção de cena e inspeção primária",
          detail: "Avaliar a situação e a extensão da exposição",
        },
        {
          number: 2,
          instruction:
            "Enxaguar a área afetada com grandes quantidades de água fria",
          detail:
            "Se a substância venenosa for um pó, escovar as quantidades excessivas com um pano seco antes de enxaguar",
        },
        {
          number: 3,
          instruction:
            "Remover qualquer roupa que tenha entrado em contato com o veneno",
          warning: "Não tocar a roupa até que tenha sido completamente lavada",
        },
        {
          number: 4,
          instruction: "Lavar a pele afetada minuciosamente com sabão e água",
          detail: "Continuar lavando por vários minutos",
        },
        {
          number: 5,
          instruction:
            "Fornecer atendimento contínuo até a chegada da ajuda médica",
          detail:
            "Monitorar sinais de absorção sistêmica e buscar atendimento médico",
        },
      ],
      warnings: [
        "Alguns produtos químicos absorvidos pela pele podem causar emergências que ameaçam a vida",
        "Escovar o pó antes de enxaguar para evitar dispersão",
        "Não tocar em roupas contaminadas com as mãos nuas",
        "Observar sintomas de envenenamento sistêmico mesmo após tratamento inicial",
        "A dermatite de contato inclui vermelhidão, coceira e bolhas",
      ],
    },
    "poisoning-injected": {
      title: "Primeiros Socorros para Venenos Injetados",
      whenToCall911:
        "Imediatamente — ligue 911 ou Centro de Controle de Intoxicações",
      steps: [
        {
          number: 1,
          instruction: "Seguir primeiros socorros gerais para envenenamento",
          detail:
            "Realizar inspeção de cena e inspeção primária, chamar ajuda se necessário",
        },
        {
          number: 2,
          instruction: "Colocar a vítima em repouso",
          detail:
            "Manter membro afetado abaixo do nível do coração para desacelerar a circulação do veneno",
        },
        {
          number: 3,
          instruction: "Imobilizar o membro afetado",
          detail: "Isso atrasa a circulação do veneno pelo corpo",
        },
        {
          number: 4,
          instruction:
            "Se picada de agulha com possível contaminação por doença, esfregar vigorosamente",
          detail: "Usar iodo ou desinfetante similar no local da injeção",
        },
        {
          number: 5,
          instruction: "Obter atendimento médico",
          warning:
            "Venenos injetados requerem avaliação e tratamento médico profissional",
        },
      ],
      warnings: [
        "Manter membro afetado imobilizado e abaixo do nível do coração",
        "Não mover o membro afetado mais do que o necessário",
        "Para lesões por picada de agulha, buscar atendimento médico imediato",
        "Sintomas sistêmicos podem ser retardados",
        "Sempre obter avaliação médica profissional",
      ],
    },
    "shock-treatment": {
      title: "Tratar o Choque",
      whenToCall911: "Imediatamente",
      steps: [
        {
          number: 1,
          instruction: "Ligar para 911 imediatamente",
          warning: "O choque ameaça a vida",
        },
        {
          number: 2,
          instruction: "Identificar a causa do choque se possível",
          detail: "Lesão grave, perda de sangue, doença grave, reação alérgica",
        },
        {
          number: 3,
          instruction: "Deitar a pessoa com as pernas elevadas 12 polegadas",
          detail: "A menos que se suspeite de lesão na cabeça ou coluna",
        },
        {
          number: 4,
          instruction: "Manter a pessoa aquecida com cobertores",
          tip: "Prevenir perda adicional de calor",
        },
        {
          number: 5,
          instruction: "Não dar comida ou água",
          warning: "Pode engasgar ou vomitar",
        },
        {
          number: 6,
          instruction: "Monitorar respiração e pulso",
          detail: "Estar preparado para começar RCP",
        },
        {
          number: 7,
          instruction: "Tranquilizar a pessoa e mantê-la calma",
          tip: "O apoio emocional ajuda a reduzir a gravidade do choque",
        },
      ],
      warnings: [
        "Sinais: pele pálida, fria, pegajosa, fraqueza, pulso rápido/fraco",
        "Pode ser fatal se não tratado",
        "Monitorar continuamente até a chegada da ajuda",
      ],
    },
    fracture: {
      title: "Fratura",
      whenToCall911:
        "Se houver fragmentos ósseos visíveis, deformidade ou suspeita de fratura na coluna/pescoço",
    },
    "asthma-attack": {
      title: "Crise de Asma Grave",
      whenToCall911:
        "Imediatamente se o inalador não funcionar, há dificuldade grave para respirar ou os lábios ficam azuis",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar inspeção de cena e inspeção primária; pedir ajuda médica",
          detail:
            "Ligar para 911 ou serviços de emergência imediatamente para uma crise grave",
        },
        {
          number: 2,
          instruction:
            "Colocar a vítima na posição mais confortável para respirar",
          detail:
            "Geralmente sentada ereta com os braços descansando sobre uma mesa",
        },
        {
          number: 3,
          instruction: "Ajudar a vítima a tomar medicamento prescrito",
          detail:
            "Assistir com inalador de resgate ou medicamentos prescritos para asma",
        },
        {
          number: 4,
          instruction: "Se após 5 minutos não houver melhora, ligar para 911",
          detail: "Estar preparado para RCP se a respiração parar",
        },
        {
          number: 5,
          instruction: "Manter a vítima calma e tranquila",
          warning: "A ansiedade pode piorar as crises de asma",
        },
      ],
      warnings: [
        "Dificuldade grave para respirar, lábios azuis, confusão requerem atenção imediata",
        "A vítima pode estar muito assustada - fornecer apoio emocional",
        "Se houver sibilância ou pulmões completamente silenciosos (muito grave), ligar 911",
        "Estar preparado para fazer RCP",
      ],
    },
    "mdi-inhaler": {
      title: "Assistência com Inalador de Dose Medida",
      whenToCall911:
        "Se sintomas de crise de asma piorarem ou não melhorarem após uso de medicamento",
      steps: [
        {
          number: 1,
          instruction: "Agitar o recipiente, depois remover a tampa",
          detail: "Preparar o inalador de dose medida (IDM ou 'puff') para uso",
        },
        {
          number: 2,
          instruction: "Dizer à vítima que expire completamente",
          detail: "Esvaziar os pulmões de ar antes de inalar a medicação",
        },
        {
          number: 3,
          instruction: "Dizer à vítima que inspire lenta e profundamente",
          detail:
            "Enquanto faz isso, pressionar o IDM para liberar a medicação. O IDM pode estar na boca ou logo em frente à boca",
        },
        {
          number: 4,
          instruction:
            "Dizer à vítima que retenha a respiração por 10 segundos",
          detail:
            "Isso permite que a medicação se dispersa nos pulmões. Depois dizer que respire normalmente. Se mais doses forem necessárias, esperar pelo menos 30-60 segundos antes de repetir",
        },
      ],
      warnings: [
        "Seguir as instruções prescritas da vítima para seu inalador específico",
        "Alguns inaladores requerem um dispositivo espaçador para entrega adequada",
        "Não agitar o inalador enquanto a vítima está inhalando",
        "Garantir que a vítima entenda a técnica",
        "Se os sintomas não melhorarem após 15 minutos, buscar ajuda médica",
      ],
    },
    seizure: {
      title: "Convulsão",
      whenToCall911:
        "Imediatamente para a primeira convulsão ou convulsões que duram mais de 5 minutos",
    },
    stroke: {
      title: "Acidente Vascular Cerebral/AVC",
      whenToCall911:
        "Imediatamente — o tempo é crítico (RÁPIDO: Rosto, Braços, Fala, Tempo)",
      steps: [
        {
          number: 1,
          instruction:
            "Realizar inspeção de cena, depois inspeção primária; fazer avaliação RÁPIDA",
          detail:
            "R.Á.P.I.D.O. = Rosto caído, Armos fracos, Parola dificultosa, Identificar tempo. Procurar por estes sinais imediatamente",
        },
        {
          number: 2,
          instruction: "Ligar para ajuda médica",
          warning:
            "Ligar para 911 imediatamente — o tempo é crítico, o tratamento deve começar dentro de horas",
        },
        {
          number: 3,
          instruction: "Colocar a vítima na posição semi-sentada",
          detail: "Esta posição ajuda com respiração e circulação",
        },
        {
          number: 4,
          instruction: "Não dar nada pela boca, especialmente aspirina",
          warning:
            "A vítima pode ter dificuldade para engolir e a aspirina é contraindicada em alguns tipos de AVC",
        },
        {
          number: 5,
          instruction: "Dar atendimento contínuo",
          detail:
            "Monitorar respiração e consciência, mantê-la calma e tranquilizada, estar preparado para RCP se necessário",
        },
      ],
      warnings: [
        "Rosto caído de um lado",
        "Fraqueza ou dormência de braço de um lado",
        "Dificuldade de fala ou fala arrastada",
        "Problemas de visão ou perda de visão",
        "Perda de equilíbrio ou tontura",
        "Dor de cabeça grave sem causa conhecida",
        "Não dar comida ou água — risco de asfixia",
        "Não dar aspirina — pode piorar alguns tipos de AVC",
        "Minutos = células cerebrais morrendo — agir RAPIDAMENTE",
      ],
    },
    shock: {
      title: "Primeiros Socorros em Caso de Choque",
      whenToCall911: "Imediatamente — choque é uma emergência médica",
      steps: [
        {
          number: 1,
          instruction:
            "Prestar primeiros socorros para a lesão ou doença que causou o choque",
          detail: "Trate a causa principal enquanto cuida do choque",
        },
        {
          number: 2,
          instruction: "Reassegurar a vítima com frequência",
          detail: "Mantenha-a calma e informe o que está acontecendo",
        },
        {
          number: 3,
          instruction: "Minimizar a dor manuseando com cuidado",
          detail:
            "Evite movimentos desnecessários e seja muito cuidadoso ao mover a pessoa",
        },
        {
          number: 4,
          instruction: "Afrouxar roupas apertadas no pescoço, peito e cintura",
          detail: "Isso ajuda a circulação e a respiração",
        },
        {
          number: 5,
          instruction: "Manter a vítima aquecida, sem superaquecer",
          detail:
            "Use casacos ou cobertores se disponíveis. Evite superaquecer",
        },
        {
          number: 6,
          instruction: "Umedecer os lábios se a vítima reclamar de sede",
          detail:
            "Não dê comida ou bebida. Se a ajuda demorar muitas horas, pequenas quantidades de água ou líquidos claros podem ser dadas — anote o quê e quando",
        },
        {
          number: 7,
          instruction:
            "Colocar a vítima na melhor posição de acordo com a condição",
          detail:
            "Geralmente deitada com as pernas elevadas 20–30 cm, a menos que isso cause dor ou dificuldade para respirar",
        },
      ],
      warnings: [
        "Não dar comida ou bebida, exceto em atraso extremo",
        "Não superaquecer a vítima",
        "Manusear com cuidado para minimizar a dor",
        "Monitorar consciência e respiração",
        "Choque pode piorar rapidamente e ser fatal",
      ],
    },
    fainting: {
      title: "Primeiros Socorros em Caso de Desmaio",
      whenToCall911:
        "Se a recuperação não for rápida/completa, ou se o desmaio estiver relacionado a lesão, dor no peito ou episódios repetidos",
      steps: [
        {
          number: 1,
          instruction: "Garantir ar fresco e afrouxar as roupas",
          detail:
            "Afrouxe roupas no pescoço, peito e cintura para ajudar a respiração",
        },
        {
          number: 2,
          instruction:
            "Deixar a vítima confortável durante o retorno da consciência",
          detail: "Deixe-a deitada por 10 a 15 minutos",
        },
        {
          number: 3,
          instruction: "Continuar monitorando a respiração e a consciência",
          detail: "Observe qualquer mudança no estado da pessoa",
        },
        {
          number: 4,
          instruction:
            "Se a recuperação não for rápida ou completa, fique com a vítima",
          detail:
            "Não presuma que foi 'apenas um desmaio' sem recuperação rápida. Fique até receber ajuda médica",
        },
        {
          number: 5,
          instruction:
            "Se precisar sair, coloque a vítima na posição lateral de segurança",
          detail: "Seja o mais cuidadoso possível se houver lesões",
        },
      ],
      warnings: [
        "Não presumir recuperação rápida sem observação",
        "Não deixar a vítima sozinha se a recuperação estiver incompleta",
        "Tratar a causa se o desmaio for secundário a outra condição",
        "Monitorar respiração e consciência",
      ],
    },
    poisoning: {
      title: "Primeiros Socorros Gerais em Caso de Envenenamento",
      whenToCall911:
        "Ligue para o centro de intoxicações ou 911 imediatamente em caso de sintomas graves, perda de consciência, convulsões ou dificuldade para respirar",
      steps: [
        {
          number: 1,
          instruction:
            "Garanta sua segurança e a da vítima; afaste a fonte se for seguro",
        },
        {
          number: 2,
          instruction: "Identificar a substância, se possível",
          detail:
            "Guarde o frasco/rótulo e anote quantidade, hora e via de exposição",
        },
        {
          number: 3,
          instruction:
            "Ligar para o centro de intoxicações/urgência e seguir as instruções",
        },
        {
          number: 4,
          instruction:
            "Não induzir vômito e não dar comida/bebida a menos que orientado",
          warning:
            "Algumas substâncias podem causar mais danos se a pessoa vomitar",
        },
        {
          number: 5,
          instruction: "Monitorar respiração e consciência",
          detail:
            "Inicie RCP se parar de respirar; PLS se inconsciente mas respirando",
        },
      ],
      warnings: [
        "Não dar nada pela boca se a pessoa estiver sonolenta ou inconsciente",
        "Evitar 'remédios caseiros' sem orientação profissional",
        "Evitar exposição secundária (ventilar, usar luvas se possível)",
      ],
    },
    fracture: {
      title: "Primeiros Socorros em Caso de Convulsão",
      whenToCall911:
        "Ligue 911 se durar mais de 5 minutos, houver lesão, dificuldade para respirar, gravidez/diabetes, ou for a primeira convulsão",
      steps: [
        { number: 1, instruction: "Mantenha a calma e fique com a pessoa" },
        {
          number: 2,
          instruction: "Proteja a cabeça e afaste objetos perigosos",
        },
        {
          number: 3,
          instruction: "Não segure a pessoa e não tente parar os movimentos",
        },
        {
          number: 4,
          instruction: "Não colocar nada na boca",
          warning: "A pessoa não vai 'engolir a língua'",
        },
        {
          number: 5,
          instruction: "Cronometrar a convulsão",
          detail: "Anote a duração e o tipo de movimentos",
        },
        {
          number: 6,
          instruction:
            "Após a convulsão, colocar na posição lateral de segurança",
          detail: "Verifique se a respiração volta ao normal",
        },
        {
          number: 7,
          instruction: "Verificar lesões e tranquilizar durante a recuperação",
        },
        {
          number: 8,
          instruction: "Deixe a pessoa descansar e preserve a privacidade",
          detail: "Ela pode ficar confusa ou muito cansada",
        },
      ],
      warnings: [
        "Não segurar",
        "Não colocar nada na boca",
        "Afastar perigos e proteger a cabeça",
      ],
    },
    stroke: {
      title: "Primeiros Socorros em Caso de AVC/AIT",
      whenToCall911:
        "Imediatamente — cada minuto conta (FAST: face, braço, fala, tempo)",
      steps: [
        {
          number: 1,
          instruction: "Reconhecer sinais FAST",
          detail:
            "Rosto caído, fraqueza em um braço, fala alterada — hora de ligar",
        },
        {
          number: 2,
          instruction: "Ligar para ajuda médica",
          warning:
            "Ligar para 911 imediatamente — o tempo é crítico, o tratamento deve começar dentro de horas",
        },
        {
          number: 3,
          instruction: "Anotar a hora de início dos sintomas",
          detail: "Isso influencia o tratamento",
        },
        {
          number: 4,
          instruction: "Manter a pessoa segura e confortável",
          detail:
            "Se consciente: posição semi-sentada. Se vômitos/sonolência: considerar PLS",
        },
        {
          number: 5,
          instruction: "Não dar nada pela boca, especialmente aspirina",
          warning:
            "A pessoa pode ter dificuldade para engolir e a aspirina é contraindicada em alguns tipos de AVC",
        },
        {
          number: 6,
          instruction: "Dar atendimento contínuo",
          detail:
            "Monitorar respiração e consciência, mantê-la calma e tranquilizada, estar preparado para RCP se necessário",
        },
      ],
      warnings: [
        "Rosto caído de um lado",
        "Fraqueza ou dormência de braço de um lado",
        "Dificuldade de fala ou fala arrastada",
        "Problemas de visão ou perda de visão",
        "Perda de equilíbrio ou tontura",
        "Dor de cabeça grave sem causa conhecida",
        "Não dar comida ou água — risco de asfixia",
        "Não dar aspirina — pode piorar alguns tipos de AVC",
        "Minutos = células cerebrais morrendo — agir RAPIDAMENTE",
      ],
    },
    "heart-attack": {
      title: "Infarto do Miocárdio/Angina",
      whenToCall911: "Imediatamente — não espere, ligue 911 primeiro",
      steps: [
        {
          number: 1,
          instruction: "Realizar inspeção de cena, depois inspeção primária",
          detail:
            "Fazer perguntas à vítima: 'Pode me mostrar onde dói?' 'Já sentiu essa dor antes?' 'Tem medicamento para essa dor?'",
        },
        {
          number: 2,
          instruction: "Ligar para ajuda médica e obter um desfibrilador",
          warning: "Ligar para 911 imediatamente — o tempo é crítico",
        },
        {
          number: 3,
          instruction: "Colocar a vítima em repouso na posição semi-sentada",
          detail:
            "A posição semi-sentada é geralmente a melhor opção, e tranquilizar",
        },
        {
          number: 4,
          instruction:
            "Ajudar a vítima consciente a tomar seu medicamento prescrito",
          detail:
            "Geralmente nitroglicerina. Se a vítima não tiver medicamento prescrito, ou a primeira dose não funcionar, perguntar se tem alergia a aspirina. Se a vítima achar que pode tomar, sugerir mastigar um comprimido de aspirina regular (ou dois comprimidos de dose baixa). A aspirina pode reduzir os efeitos de um infarto por suas propriedades anticoagulantes",
        },
        {
          number: 5,
          instruction:
            "Se a vítima perder consciência e deixar de respirar, começar RCP",
          warning: "Estar preparado para fazer RCP imediatamente",
        },
      ],
      warnings: [
        "Dor, pressão ou opressão no peito requerem atendimento médico imediato",
        "A dor pode irradiar para o braço, mandíbula ou costas",
        "Perguntar sobre alergias a aspirina antes de administrar",
        "Mulheres podem ter sintomas atípicos",
        "Ligar para 911 imediatamente — cada minuto conta",
      ],
    },
  },
};
