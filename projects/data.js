/* ═══════════════════════════════════════════════════════════════
   PROJECTS DATA — single source of truth for every project
   ═══════════════════════════════════════════════════════════════

   To add a new project:
     1. Copy one of the objects below and paste it at the end of the array
     2. Fill in the fields
     3. Set published: false while you're still working on it
     4. Flip to published: true when it's ready

   Fields:
     id          — matches the HTML filename  e.g. 'lego-minifig' → projects/lego-minifig.html
     published   — false hides it everywhere (cards, terminal, modal)
     type        — 'hw' | 'sw' | 'both'  (controls card colour theme)
     tabs        — array of tab filters this card appears under: 'built' | 'led' | 'launched'
     wip         — true shows a WIP badge on the card
     title       — project name
     emoji       — fallback if no thumbnail
     thumbnail   — cloudinary URL (or null to use emoji)
     label       — short category label shown on the card
     desc        — one-liner shown on the card
     previewDesc — longer description shown in the preview modal
     tags        — array of tag strings shown in the modal
     url         — path to the project page (or '#' if none yet)
   ═══════════════════════════════════════════════════════════════ */

window.PROJECTS_DATA = [

  {
    id:          'baymax',
    published:   true,
    type:        'hw',
    tabs:        ['built'],
    title:       'Baymax Robotic Arm',
    emoji:       '🤖',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392198/baymaxArmColor-removebg-preview_xh1guw.png',
    label:       'Hardware · Mechanisms',
    desc:        'A life-sized soft robotic arm designed for human interaction — engineered so it physically cannot hurt you.',
    previewDesc: "The brief was a soft Baymax replica capable of meaningful gestures: fist bump, high-five, hug. I owned the elbow mechanism — which meant solving a real problem: how do you get 2 DOF in a joint that needs to stay soft, foldable, and proportionally accurate to Baymax?\n\nMy first design used a cable-driven universal joint. Simulations and hand calculations showed it would compromise the arm's proportions. I iterated to a belt-driven differential instead — two stepper motors coordinating through bevel gears, with motors relocated to the shoulder to reduce forearm torque requirements. The result was stronger, smoother, and dimensionally faithful.\n\nThe final arm combines a carbon fiber inner core for rigidity, inflatable outer segments for softness and safety, and a pressurized polyethylene cover that gives Baymax his signature appearance.",
    tags:        ['Mechanisms', 'CAD', 'Simulation', 'Fusion 360', 'Safety Design'],
    url:         'projects/baymax.html',
  },

  {
    id:          'mech-flower',
    published:   true,
    type:        'hw',
    tabs:        ['built'],
    title:       'Mechanical Flower',
    emoji:       '🌸',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776391800/mechanical-flower-full-size-no-background_ity0qm.png',
    label:       'Hardware · Robotics',
    desc:        'A robotic lotus that opens to your touch — capacitive sensing driving servo actuation, built to feel alive.',
    previewDesc: "The technical challenge here was small but specific: make something mechanical feel organic. A DIY capacitive touch sensor (literally a spoon, wired to an Arduino Uno) detects the presence of a hand. First touch: the servo opens the petals and the LED blooms. Second touch: it closes and goes dark.\n\nThe harder part was the motion. Getting the petal linkage geometry right so the flower opens slowly and smoothly — not snapping open like a mechanism, but unfolding like a real flower — required iteration on both the CAD and the code. All models were designed and printed from scratch, except the outer petal profile.",
    tags:        ['Arduino', 'C++', 'CAD', '3D Printing', 'Servo Control', 'Capacitive Sensing'],
    url:         'projects/mech-flower.html',
  },

  {
    id:          'lego-minifig',
    published:   true,
    type:        'hw',
    tabs:        ['built'],
    title:       'Giant LEGO Minifigure',
    emoji:       '🧱',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776389372/Untitled_design_uiqoq8.png',
    label:       'Hardware · 3D Printing',
    desc:        'A 10× scale LEGO Space Minifigure — fully posable, 100% 3D printed, no adhesives, no hardware. Every joint clicks.',
    previewDesc: "LEGO's tolerances are engineered for injection molding at 1× scale. The interesting problem here was figuring out what happens to snap fits, joint clearances, and mating surfaces when you scale everything up by 10.\n\nThe process was methodical: print at 5× first to validate proportions, then refine the model and scale to 10×. Add surface details — chest logo, face — once the geometry was proven. Test every joint interface at full scale before committing to the final print run. 90+ hours of total print time across both figures (the adult astronaut and Baby Benny), designed to click together and pose like the originals — no glue, no fasteners.",
    tags:        ['CAD', '3D Printing', 'Tolerance Design', 'DFM'],
    url:         'projects/lego-minifig.html',
  },

  {
    id:          'replica-props',
    published:   true,
    type:        'hw',
    tabs:        ['built'],
    title:       'Replica Props',
    emoji:       '🎭',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776541582/Untitled_design_1_f2sfld.png',
    label:       'Hardware · Fabrication',
    desc:        "Majora's Mask, the Deku Mask, and a life-sized Minecraft Chicken — built for fun, finished like they mean it.",
    previewDesc: "Three very different objects, one shared discipline: getting from a digital model to a physical thing that looks right.\n\nMajora's Mask exceeded my printer's build volume, so I split it into registered parts, printed separately, and joined them. Painted from scratch.\n\nThe Deku Mask went further — 3D printed base, Bondo applied and sanded, thin clay layer hand-sculpted to restore organic surface detail lost in the print, then painted. Each stage of finishing directly affects the next, so the process has to be planned as a whole, not step by step.\n\nThe Minecraft Chicken is a study in translating voxel geometry — a deliberately blocky digital asset — into a printable object with actual surfaces and structural integrity. Life-sized. All files modeled from scratch.",
    tags:        ['CAD', '3D Printing', 'Surface Finishing', 'Multi-part Assembly'],
    url:         'projects/masks.html',
  },

  {
    id:          'gesture-car',
    published:   true,
    type:        'sw',
    tabs:        ['built', 'led'],
    title:       'Gesture Controlled Car',
    emoji:       '🚗',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392702/gesture-controlled-car-no-background_gdzrps.png',
    label:       'Software · Embedded',
    desc:        'A vehicle controlled entirely by wrist orientation — built for engineering outreach, now one of its most popular programs ever.',
    previewDesc: "This started with data. I analyzed participant feedback trends from previous years at Connections and saw a clear signal: students wanted more technically advanced projects. So I designed one from scratch.\n\nThe goal: control a car's movement by tilting your wrist, no buttons. An MPU-6050 accelerometer on a wrist controller reads pitch and roll, translating orientation directly into drive commands sent via Arduino to an H-bridge motor controller driving four DC wheels.\n\nThe first prototype was wireless with three motors. Testing showed it was too unreliable and complex for participants to replicate in a workshop setting. I redesigned it: four motors, wired control, simpler and more robust. The right call for the context.\n\nThe result became the highest-rated project in 20+ summer programs at Connections, with 95% participant satisfaction. Its success directly led to the expansion of the mechatronics program.",
    tags:        ['Arduino', 'C++', 'IMU', 'Motor Control', 'Embedded Systems'],
    url:         'projects/gesture-car.html',
  },

  {
    id:          'survey-tool',
    published:   false,
    type:        'sw',
    tabs:        ['built'],
    title:       'Survey Automation Tool',
    emoji:       '🐍',
    thumbnail:   null,
    label:       'Software · Python',
    desc:        'A Python tool that turned a 4-hour manual process into a 2-minute one. 99.2% of the work, gone.',
    previewDesc: "The process was survey data collection and participant management for engineering outreach programs — done manually each cycle, taking roughly 4 hours. I built a Python tool that automated ingestion, parsing, analysis, and output generation end-to-end. No external services, no dependencies beyond Python.\n\nThe result was a 99.2% reduction in processing time and a process that now runs consistently without error. The tool also freed up staff time that had been spent on data entry, redirecting it toward actual program work. Sometimes the most impactful engineering is the kind that makes something tedious just disappear.",
    tags:        ['Python', 'Automation', 'Data Processing'],
    url:         '#',
  },

  {
    id:          'happy-tappy',
    published:   true,
    type:        'hw',
    tabs:        ['built', 'launched'],
    wip:         true,
    title:       'Happy Tappy',
    emoji:       '💙',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611532/happy-tappy-thumbnail_tzkunz.png',
    label:       'Hardware · Open Source · Community',
    desc:        'Open-source EMDR tappers — therapeutic hardware that costs $500 commercially. This version costs under $50.',
    previewDesc: "EMDR (Eye Movement Desensitization and Reprocessing) tappers deliver bilateral stimulation — alternating vibration, light, or sound — used in trauma therapy. Commercial devices are hundreds of dollars, which puts them out of reach for a lot of people who could benefit.\n\nHappy Tappy is an open-source alternative: configurable vibration, light, and audio feedback with adjustable intensity, frequency, and color. Built from readily available components, target BOM under $50. The tapper units are breadboarded and validated. PCB design and enclosure are in progress. The goal is something anyone can build, modify, improve, and share.",
    tags:        ['Arduino', 'PCB Design', 'Embedded Systems', 'Open Source', 'Accessibility'],
    url:         'projects/happytappy.html',
  },

  {
    id:          'project-sonder',
    published:   true,
    type:        'both',
    tabs:        ['built', 'led', 'launched'],
    wip:         true,
    title:       'Project Sonder',
    emoji:       '✉️',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611627/project-sonder-thumbnail_l4rqce.png',
    label:       'Hardware · Software · Community',
    desc:        "3D-printed letters with NFC tags, placed in mailboxes around LA. Scan it, read a stranger's note, leave your own.",
    previewDesc: "Sonder is named for the realization that every person you pass has a life as vivid and complex as your own. The project is a physical-digital system built around that idea.\n\nA 3D-printed letter sits in a handmade mailbox somewhere in Los Angeles. You find it, scan the NFC tag or QR code, and a web app serves you a letter written by a complete stranger — then asks you to write one back. No algorithm decides what you get. No filters on what people write. Just what someone actually left for you.\n\nThe backend is fully built and live — database, letter routing, the whole scroll-to-open envelope interaction. The physical letters and mailboxes are in production. First installations go up in LA soon.",
    tags:        ['Web Dev', 'NFC', '3D Printing', 'Full-Stack', 'Community Design'],
    url:         'https://project-sonder.netlify.app/',
  },

  {
    id:          'qset-launches',
    published:   true,
    type:        'hw',
    tabs:        ['built', 'led'],
    title:       'Stratospheric Satellite Launches',
    emoji:       '🛰️',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392473/satellite-thumbnail-no-background_ur8htb.png',
    label:       'Led · Hardware · Aerospace',
    desc:        'Two real satellite launches to the stratosphere — 48.4km altitude, multi-cycle missions, data feeding future launches.',
    previewDesc: "As manager of Queen's Space Engineering Team, I led end-to-end development of stratospheric payloads across two launch cycles, from structural design and component selection through sensor integration, system validation, and post-flight data analysis.\n\nThe satellite \"Eggo\" flew to 48.4km, surviving temperatures from -28°C to +20.7°C over a 90-minute ascent, collecting pressure, temperature, and altitude data that directly informed the following year's mission. I used in-flight data and weather modeling to optimize future launches, reducing mission costs 15% year-over-year.\n\nI also developed a helium transport safety standard that streamlined regulatory approval for QSET's launches — reducing preparation delays and setting a reusable process for future teams.",
    tags:        ['Embedded Systems', 'Arduino', 'C++', 'Sensor Integration', 'Mission Planning', 'Data Analysis'],
    url:         '#',
  },

  {
    id:          'csa-outreach',
    published:   true,
    type:        'both',
    tabs:        ['led', 'launched'],
    title:       'CSA Satellite Program for At-Risk Youth',
    emoji:       '🚀',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611690/IMG_5809_zkihvi.jpg',
    label:       'Led · Community · Aerospace',
    desc:        'A free satellite program for at-risk youth, built in partnership with the Canadian Space Agency — and I wrote the $50K grant that funded it.',
    previewDesc: "I co-founded and ran a program that gave at-risk youth real aerospace engineering experience — not simulations, not kits. Actual satellite design, wiring, coding, and launch.\n\nParticipants learned embedded systems, sensor integration, circuit wiring, and 3D CAD. The program culminated in a stratospheric balloon launch where student-built hardware went to the edge of the atmosphere and came back with data. It ran as a partnership between Connections (Queen's engineering outreach) and the Canadian Space Agency, supported by a $50K grant I wrote from scratch.\n\nThe program became a model for ongoing STEM-space collaboration between QSET and Connections, with future launches planned.",
    tags:        ['Program Design', 'Grant Writing', 'Aerospace Education', 'CSA Partnership'],
    url:         '#',
  },

  {
    id:          'stem-connections',
    published:   true,
    type:        'both',
    tabs:        ['built', 'led', 'launched'],
    title:       'STEM Outreach — Connections',
    emoji:       '⚡',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611945/STEM-outreach-thumbnail-no-background_iw66vx.png',
    label:       'Led · Community · Hardware',
    desc:        'A sold-out mechatronics program built from nothing — reaching thousands of students across robotics, space, and embedded systems.',
    previewDesc: "I joined Connections as an instructor and advanced to Mechatronics Engineer, building a program that hadn't existed before. Recognizing there was no hands-on mechatronics offering for high school students, I designed and launched one from scratch. It sold out.\n\nThe curriculum spanned Arduino robotics, Python and machine learning, 3D modeling and fabrication, and space engineering. Projects I designed and taught include a gesture-controlled car (highest-rated project in 20+ summer programs), a functional seismometer used in live bridge-testing workshops, a servo-actuated prosthetic hand, and a LEGO Canadarm with three control modalities.\n\nThe shaker table workshop: participants built earthquake-proof structures, then tested them on the motorized shaker table while their seismometers detected simulated seismic events in real time.",
    tags:        ['Curriculum Design', 'Arduino', 'C++', 'Python', 'ML', '3D Printing', 'Program Leadership'],
    url:         '#',
  },

  {
    id:          'first-robotics',
    published:   true,
    type:        'hw',
    tabs:        ['led', 'launched'],
    title:       'FIRST Robotics — Team 19528',
    emoji:       '🏆',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776612649/IMG_3124_oa4xnt.png',
    label:       'Led · Community · Robotics',
    desc:        'Two years mentoring Team 19528 — tools, wiring, CAD, debugging, mechanisms, algorithms, and four competition awards.',
    previewDesc: "I mentored Team 19528 (Tech Comet Lancers) for two full years, showing up 2–3 times a week through both build season and off-season. Also served as a competition judge.\n\nWhat I taught: safe use of hand tools and power tools, circuit wiring and multimeter debugging, component selection, mechanism design, control algorithm development, and CAD. About 10 students, consistently, over two years.\n\nYear 1 — Judges' Choice Award + 2nd Place Motivate Award. Winning awards in a rookie FTC year is rare and reflects how quickly the team developed both technically and culturally.\n\nYear 2 — Design Award + Connect Award. A meaningful jump in technical maturity and strategic presentation between seasons.",
    tags:        ['Robotics', 'FTC', 'Mentorship', 'Embedded Systems', 'Mechanism Design'],
    url:         '#',
  },

];
