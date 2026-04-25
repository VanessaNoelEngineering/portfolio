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

   Page-content fields (used by _shell.js renderPage()):
     heroTitle   — h1 text with <em> around last word
     purpose     — { heading, body: [...paragraphs], images? }
     process     — { heading, summary, steps: [{title, body}], images? }
     result      — { heading, body: [...paragraphs], stats: [{val, label}], images? }
     blocks      — [] array of extra content blocks (video, gallery, code, cad, image)
   ═══════════════════════════════════════════════════════════════ */

window.PROJECTS_DATA = [

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

    heroTitle: 'Giant LEGO <em>Minifigure.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'LEGO set 71037 — Series 24, the Brown Astronaut and Baby Benny the Spaceman — holds a specific place in my heart. I wanted a version I could actually display, which meant scaling it up. But I had a constraint: 100% 3D printed, no glue, no fasteners. Every joint had to click together and stay posable, exactly like the real thing.',
        'That constraint turned a fun idea into a real engineering problem. LEGO\'s tolerances are designed for injection molding at 1× scale. Scaling up by 10× doesn\'t just make parts bigger — it changes how every fit and joint behaves.',
      ],
       images:['https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777145303/Your_paragraph_text_ob8os9.png'],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Methodical scale-up with a 5× validation step before committing to the full 10× print.',
      steps: [
        {
          title: 'CAD model from reference',
          body: 'Built both figures in CAD from the original LEGO set as reference. Focus on capturing the geometry accurately — proportions, joint shapes, connection interfaces — since everything downstream depends on getting this right.',
        },
        {
          title: '5× prototype to validate proportions',
          body: 'Before committing to the full 10× print, I printed at 5× to check that the proportions read correctly and that the assembly logic worked. Caught fit issues at this stage that would have cost days of print time at full scale.',
        },
        {
          title: 'Detail pass at 10×',
          body: 'Once the base geometry was validated, scaled to 10× and added the smaller surface details: chest logos, face features, helmet markings. These couldn\'t be added at 5× (too small to print cleanly) but needed to be right before the final run.',
        },
        {
          title: 'Joint tolerance testing',
          body: 'Printed individual joints and interfaces at full scale to test snap-fit clearances before running the full build. 3D-printed snap fits at this scale behave differently than injection-molded ones — stiffer, more brittle at thin sections. Adjusted clearances accordingly.',
        },
        {
          title: 'Full print run and assembly',
          body: 'Final build: 90+ hours of print time across both figures. Parts assembled in the designed sequence — joints clicked in, figures posed. No adhesive, no hardware.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'Two fully posable 10× LEGO minifigures that behave like the originals — joints click, limbs move, helmets come off. The 5× validation step was the key decision: it found problems cheaply that would have been expensive at full scale. The project is a good example of how DFM thinking applies even to personal builds.',
      ],
      stats: [
        { val: '10×',  label: 'Scale' },
        { val: '90+',  label: 'Hours of Print Time' },
        { val: '2',    label: 'Figures Built' },
        { val: '0',    label: 'Adhesives or Fasteners' },
      ],
    },
    blocks: [],
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
    url:         'projects/csa-outreach.html',

    heroTitle: 'CSA Satellite <em>Program.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'I had access to real aerospace engineering experience through QSET. Most high school students — especially those from underprivileged backgrounds — don\'t. I wanted to change that for at least one group of kids, and I had the tools to do it: a relationship with the Canadian Space Agency, a connection to the Kingston Robotics Lab, and the ability to write a grant.',
        'So I built the program. At-risk youth designing, wiring, coding, and launching actual satellites. Not simulations. Not kits. Real hardware, real launch, real data.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Grant application, partnership formation, curriculum design, program delivery, and launch.',
      steps: [
        {
          title: 'Grant writing and funding',
          body: 'Wrote the proposal that secured $50K from the Canadian Space Agency. The grant covered all program costs — components, tools, launch logistics — so participants paid nothing. Writing the proposal meant articulating the educational value, the partnership structure, and the technical feasibility of putting student-built hardware into the stratosphere.',
        },
        {
          title: 'Partnership with CSA and Kingston Robotics Lab',
          body: 'Established the formal partnership between Connections (Queen\'s engineering outreach), the Canadian Space Agency, and the Kingston Robotics Lab. Each partner brought something specific: CSA provided credibility and funding, Kingston Robotics Lab provided facilities and expertise, Connections provided the student pipeline and instructional framework.',
        },
        {
          title: 'Curriculum design',
          body: 'Designed the technical curriculum from scratch: embedded systems basics, sensor integration, circuit wiring and soldering, 3D CAD, and satellite structure design. The curriculum had to work for students with no prior engineering background and build to a working payload over the program duration.',
        },
        {
          title: 'Program delivery and satellite build',
          body: 'Ran the program with participants designing and assembling their own payload systems — writing code, wiring sensors, testing integration. Supported students through the debugging process; the goal was for them to own the technical decisions, not just assemble a kit.',
        },
        {
          title: 'Launch',
          body: 'Payload launched via stratospheric balloon. Student-built hardware went to the edge of the atmosphere and returned with data. For most participants, it was the first time something they built had ever physically left the ground.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'The program ran successfully, culminated in a real launch, and established a model for ongoing STEM-space collaboration between QSET and Connections. The partnership continues, with future launches planned. The $50K grant covered everything — no cost to participants. The most important outcome wasn\'t the data the satellite collected. It was the students who saw their hardware come back from the stratosphere.',
      ],
      stats: [
        { val: '$50K', label: 'Grant Secured' },
        { val: '1',    label: 'Satellite Launched' },
        { val: '0',    label: 'Cost to Participants' },
        { val: '3',    label: 'Partner Organizations' },
      ],
    },
    blocks: [],
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

    heroTitle: 'Mechanical <em>Flower.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'The goal was to make something mechanical feel organic. Not just functional — genuinely responsive in a way that felt natural rather than programmed. A flower that opens when you touch it sounds simple. Getting it to feel right is the harder problem.',
        'The sensor needed to respond to human presence without physical buttons. The motion needed to feel like unfolding, not actuating. Both of those constraints shaped every decision in the design.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Sensor first, then mechanics, then the long work of making the motion feel right.',
      steps: [
        {
          title: 'DIY capacitive touch sensor',
          body: 'Rather than using an off-the-shelf touch module, I built a capacitive touch sensor from a spoon and a resistor — wired directly to an Arduino Uno analog pin. The spoon acts as the sensing electrode; when a hand gets close, the capacitance changes enough to trigger the input. Cheap, effective, and a good lesson in how touch sensing actually works at the circuit level.',
        },
        {
          title: 'Servo and LED circuit',
          body: 'A single servo motor drives the petal opening mechanism. First touch: servo rotates, petals open, LED turns on. Second touch: reverse. The circuit was tested and validated before any mechanical assembly — catching a wiring issue with the LED early that would have been much harder to debug inside the assembled flower.',
        },
        {
          title: 'CAD and petal linkage',
          body: 'All inner structural components were modeled and printed from scratch. The outer petal profile came from an existing file, but the stem, inner flower housing, and LED mount were original. Getting the linkage geometry right — so the petals open smoothly rather than snapping — took several print-and-test iterations, adjusting the pivot point positions each time.',
        },
        {
          title: 'Assembly and tuning',
          body: 'Once all parts fit, the circuit was soldered (fixing the LED issue found in step 02), the servo was calibrated to the correct rotation range, and the capacitive threshold was tuned so the sensor responded reliably to a nearby hand without false triggers.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'A fully functional robotic lotus that opens and closes in response to human touch. The motion is slow and deliberate — more flower than machine. The DIY capacitive sensor proved reliable across repeated use, and the overall build cost was minimal. The most valuable outcome was the iteration on the linkage: learning how small changes in pivot geometry change the feel of motion entirely.',
      ],
      stats: [
        { val: '1', label: 'Sensor (DIY, no module)' },
        { val: '2', label: 'Touch States' },
        { val: '4', label: 'Linkage Iterations' },
      ],
    },
    blocks: [],
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

    heroTitle: 'Happy <em>Tappy.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'EMDR (Eye Movement Desensitization and Reprocessing) is a trauma therapy technique that uses bilateral stimulation — alternating sensory input on the left and right sides of the body — to help process difficult memories. Tappers are the hardware that delivers this stimulation: small handheld devices that vibrate alternately, sometimes paired with light or audio cues.',
        'Commercial EMDR tappers cost hundreds of dollars. That price isn\'t justified by the electronics inside — it\'s a market access problem, not a complexity problem. A close friend benefited significantly from EMDR therapy, and watching the cost of the equipment be a barrier for other people made this project feel necessary.',
        'Happy Tappy is an open-source alternative: full bilateral vibration, configurable light and audio feedback, adjustable intensity and frequency, target BOM under $50. Everything documented, everything modifiable, everything shareable.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Validated the core tapper experience on breadboard first; PCB and enclosure in progress.',
      steps: [
        {
          title: 'Defining the spec',
          body: 'Commercial tappers offer vibration, LED light bars, and audio tones — all configurable in intensity and frequency. The goal was to match that feature set at a fraction of the cost, using components anyone can source and assemble. Researched existing open-source EMDR projects to understand the gaps, then defined a target spec: bilateral vibration motors, RGB LEDs, configurable timing, sub-$50 BOM.',
        },
        {
          title: 'Breadboard prototype: tapper units',
          body: 'Built the tapper units on breadboard — two handheld controllers, each with a vibration motor and LED, driven by a microcontroller. Tested the bilateral timing loop: motor and LED fire on one side, pause, fire on the other. Core functionality validated. The haptic feedback was the critical test — the sensation needs to feel distinct and rhythmic, not just vibration.',
        },
        {
          title: 'Breadboard prototype: control unit',
          body: 'Built the control unit: interface for setting frequency, intensity, and mode. Tested the full system end-to-end — control signals passing reliably to both tapper units, adjustments reflected in real time.',
        },
        {
          title: 'PCB design (in progress)',
          body: 'Moving off breadboard onto a custom PCB to make the design reproducible and compact. The breadboard version proved the circuit; the PCB makes it something someone else can actually build.',
        },
        {
          title: 'Enclosure design (in progress)',
          body: 'Designing the physical enclosure for both the tapper units and the control box. Needs to be comfortable to hold, durable enough for regular use, and simple enough to 3D print at home.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'The tapper units are breadboarded and validated — the core experience works. PCB layout and enclosure design are the remaining steps before this becomes something anyone can build from the documentation. The project is ongoing. When it ships, all files will be open-source: schematics, PCB layout, firmware, enclosure STLs, and a full build guide.',
      ],
      stats: [
        { val: '&lt;$50', label: 'Target BOM Cost' },
        { val: '$500+',   label: 'Commercial Equivalent' },
        { val: '3',       label: 'Feedback Modalities (vibration, light, audio)' },
        { val: '100%',    label: 'Open Source' },
      ],
    },
    blocks: [],
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
    page:        'projects/project-sonder.html',
    url:         'https://project-sonder.netlify.app/',

    heroTitle: 'Project <em>Sonder.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'Sonder is a word for the realization that every person you pass on the street has a life as vivid and complex as your own — full of ambitions, fears, routines, and relationships you\'ll never know. It\'s the kind of thought that makes you feel more connected to strangers and less alone.',
        'I wanted to build something that made people feel that. Not through a social media platform, not through an algorithm that curates what you see — through something physical, accidental, and unfiltered. You find a letter in a mailbox. You scan a tag. A stranger\'s words appear on your screen. Then you write back.',
        'The project is a social experiment as much as an engineering one: what do people actually say when there\'s no audience, no likes, no followers — just a stranger who might read it?',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Web platform built first and fully functional; physical system in production.',
      steps: [
        {
          title: 'Core concept and system design',
          body: 'Mapped the full user experience: someone finds a physical letter, scans an NFC tag or QR code, lands on a web app, reads a stranger\'s letter, writes their own, puts the physical letter back. Designed the data model around this flow: letters stored with metadata but no user accounts, served randomly to new visitors, no filtering, no moderation algorithm.',
        },
        {
          title: 'Web platform: frontend',
          body: 'Built the full frontend experience — a scroll-to-open envelope animation that reveals a stranger\'s letter as you scroll down, followed by a reply form. Designed to feel like opening a real letter, not filling out a form. Hosted on Netlify. Live at project-sonder.netlify.app.',
        },
        {
          title: 'Web platform: backend and database',
          body: 'Built the backend: letter storage, random letter retrieval logic, submission handling. When you scan a tag and load the page, you get a random letter from the database. When you write one, it enters the pool for the next person who finds that mailbox. No accounts, no profiles, no history — just the exchange.',
        },
        {
          title: 'NFC tag integration',
          body: 'Each physical letter has an embedded NFC tag programmed to open the web URL on tap. QR code backup for devices without NFC. The tag is the bridge between the physical object and the digital experience — someone who doesn\'t know what NFC is can still just tap and have it work.',
        },
        {
          title: 'Physical letter and mailbox design (in progress)',
          body: 'Designing the 3D-printed letter form and mailbox enclosures for outdoor installation. The letter needs to be weather-resistant, durable, and feel intentional — something worth picking up and engaging with. The mailbox needs a flag mechanism (raised = there\'s mail) to signal to passersby that something is there.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'The platform is fully built and live. The physical system is in production — letters and mailboxes being designed and printed for initial deployment around Los Angeles. First installations coming soon. The most interesting design decision in the whole project: no filters, no moderation, no algorithm. You get exactly what someone wrote. That\'s either the best or most naive thing about it, depending on who you ask.',
      ],
      stats: [
        { val: '1',  label: 'Platform (live)' },
        { val: '0',  label: 'Algorithms deciding what you read' },
        { val: '0',  label: 'User accounts required' },
        { val: '∞',  label: 'Letters possible' },
      ],
    },
    blocks: [],
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

    heroTitle: 'Replica <em>Props.</em>',
    purpose: {
      heading: 'Why I <em>built these.</em>',
      body: [
        'These projects exist because I wanted to, which is a perfectly good reason. But the skills involved are real: part splitting, print registration, multi-stage surface finishing, and the discipline to see a process through to a result that actually looks finished rather than just printed.',
        'Replica work is unforgiving in a specific way — you\'re working toward a known reference, so there\'s no hiding a bad decision. Every stage either moves you closer to the target or compounds the error.',
      ],
    },
    process: {
      heading: 'How I <em>built them.</em>',
      summary: 'Three props, three different finishing challenges — each one pushing a different part of the fabrication process.',
      steps: [
        {
          title: "Majora's Mask: part splitting for oversized geometry",
          body: "The mask exceeded my printer's build volume. The solution: split the model into sections at natural seam lines, print separately, and join with registration features to ensure alignment. Painted after assembly. The challenge is planning the splits so the seams are invisible in the final result.",
        },
        {
          title: 'Deku Mask: multi-stage surface finishing',
          body: 'The Deku Mask went through a full finishing pipeline. 3D printed base → Bondo body filler applied and sanded to remove layer lines and refine the form → thin clay layer hand-sculpted over the Bondo to restore organic surface detail that the print couldn\'t capture → painted. Each material layer has to be planned in sequence because each one affects what comes next. You can\'t fix a bad Bondo stage with clay.',
        },
        {
          title: 'Minecraft Chicken: voxel geometry to physical object',
          body: 'The Chicken is a different problem — translating a deliberately blocky, voxel-based game asset into a real object that holds together structurally at life size. All geometry modeled from scratch. The design challenge is that voxel objects have no organic curves to hide seams in — every face is flat, every edge is sharp, so print quality and part joins are fully exposed.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'Three finished props, each one the product of a different process path. The Deku Mask\'s multi-stage finishing taught the most — understanding how Bondo, clay, and paint interact as a system rather than as separate steps is a skill that transfers directly to any multi-material surface work. The Chicken is the most structurally interesting. Majora\'s Mask is the most visually striking.',
      ],
      stats: [
        { val: '3', label: 'Props Built' },
        { val: '3', label: 'Distinct Finishing Processes' },
        { val: '1', label: 'From-scratch Geometry (Chicken)' },
      ],
    },
    blocks: [],
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
    url:         'projects/stem-connections.html',

    heroTitle: 'STEM Outreach <em>Program.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'When I joined Connections, the engineering outreach department at Queen\'s University, there was no mechatronics programming. Students could learn about bridges and mouse-trap cars. They couldn\'t build robots or write code for hardware that did something interesting.',
        'I saw a gap and built into it. Starting with Python and machine learning courses during the pandemic, then expanding to a full mechatronics program once in-person teaching resumed. The test of whether it worked: it sold out.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Built the program in stages — curriculum first, then iterating each project based on what actually worked in the room with students.',
      steps: [
        {
          title: 'Python and machine learning curriculum (2021–2022)',
          body: 'Started with free online courses during the pandemic: Python fundamentals, ML applications (letter recognition, animal classification), and building a virtual assistant. Designed to be accessible with no prior coding experience, and to show students that machine learning wasn\'t magic — it was pattern matching they could understand and implement.',
        },
        {
          title: 'Mechatronics program development (2022 onwards)',
          body: 'Designed the hands-on mechatronics curriculum from scratch: Arduino-based robotics, sensor integration, circuit wiring, and hardware debugging. The core question for each project was the same: does this teach something real, and does it feel like real engineering to a 16-year-old?',
        },
        {
          title: 'Gesture-controlled car',
          body: 'Designed the gesture-controlled car project from participant feedback data (see full project page). It became the highest-rated project in 20+ summer programs. Its success demonstrated that advanced embedded systems content worked in an outreach context, and directly expanded the program.',
        },
        {
          title: 'Seismometer and shaker table workshop',
          body: 'Built a motorized LEGO shaker table and designed a workshop around it: participants built earthquake-proof structures from spaghetti/marshmallows or LEGO bricks, then wired and coded their own Arduino seismometers. The seismometer detected the simulated seismic events from the shaker table in real time, triggering an LED and buzzer alert. Real feedback loop, real engineering judgment required.',
        },
        {
          title: 'LEGO Canadarm and prosthetic hand',
          body: 'Designed two more projects exploring robotics and human-machine interaction. The LEGO Canadarm used three sensing modalities creatively: a wheel mapped to base rotation, a color sensor controlling arm height (red = lower, green = raise), and a force sensor driving the gripper (partial press = open, hard press = close). The prosthetic hand used the open-source e-NABLE framework, driven by Arduino and servo motors, with individual fingers controlled by buttons.',
        },
        {
          title: 'Connections to Space',
          body: 'Brought the satellite program into Connections — high school students learning mechatronics and space engineering, culminating in a launch. See the CSA Outreach project page for the full story.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'A sold-out program that didn\'t exist when I started. Thousands of students reached across multiple years of delivery. Projects that were designed for the room — tested against real students, iterated based on what actually landed — rather than what seemed interesting on paper. The gesture-controlled car expansion, the seismometer workshop, and the satellite program are all downstream of decisions made about what real engineering education looks like for a high schooler who\'s never soldered anything.',
      ],
      stats: [
        { val: '1',    label: 'Program built from scratch' },
        { val: '6+',   label: 'Projects designed and taught' },
        { val: '1000s', label: 'Students reached' },
        { val: '$50K', label: 'Grant funding secured' },
      ],
    },
    blocks: [],
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
    url:         'projects/first-robotics.html',

    heroTitle: 'FIRST Robotics <em>Mentorship.</em>',
    purpose: {
      heading: 'Why I <em>did this.</em>',
      body: [
        'FIRST Tech Challenge gives high school students access to real robotics competition — but only if someone shows up to teach them. Team 19528 (Tech Comet Lancers) needed a mentor who could cover the full technical stack: mechanical, electrical, and software. I had all of it, and I wanted to give it back.',
        'I committed for two years. Two to three times a week, build season and off-season. The goal wasn\'t to build their robot for them — it was to get to the point where they could build it themselves.',
      ],
    },
    process: {
      heading: 'How I <em>did it.</em>',
      summary: 'Two full seasons, with progressively more technical ownership transferred to the students.',
      steps: [
        {
          title: 'Foundations: tools, wiring, measurement',
          body: 'Year one started from basics for most of the team. Safe use of hand tools and power tools — drills, saws, drivers. How to read a wiring diagram. How to use a multimeter to check continuity and voltage. How to select a component for a given requirement. These skills aren\'t glamorous but they\'re load-bearing — everything else depends on them.',
        },
        {
          title: 'Mechanism design and CAD',
          body: 'Taught mechanism design principles: linkages, gear ratios, structural loading, motor selection. Introduced CAD as a tool for thinking through problems before cutting or printing anything. Helped students move from "let\'s try it and see" to "let\'s model it, check the geometry, then build."',
        },
        {
          title: 'Controls and algorithms',
          body: 'Worked through control algorithm development for the drive train and autonomous routines — PID basics, sensor integration, state machines for autonomous sequences. This is where the electrical and software work comes together, and where a lot of teams struggle. Focused on making sure students understood what the code was doing, not just that it worked.',
        },
        {
          title: 'Competition judging',
          body: 'Also served as a competition judge across both seasons, which gave me a different view of the program — understanding how robots and teams are evaluated beyond just whether the mechanism functions.',
        },
        {
          title: 'Year two: raising the ceiling',
          body: 'Year two the team came back with a foundation. The work shifted from fundamentals to optimization: improving mechanisms, refining autonomous routines, thinking strategically about game design. The awards in year two — Design and Connect — reflected a team that had internalized the engineering process, not just executed a build.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        "Year one: Judges' Choice Award + 2nd Place Motivate Award — rare for a rookie FTC team. Year two: Design Award + Connect Award — reflecting real growth in technical maturity and how the team communicated their engineering decisions to judges. Ten students, consistently, for two full years. Watching a team go from \"which end of the screwdriver do I use\" to winning a Design Award in their second year is the clearest possible signal that the process worked.",
      ],
      stats: [
        { val: '2',    label: 'Seasons Mentored' },
        { val: '~10',  label: 'Students, Consistently' },
        { val: '4',    label: 'Competition Awards' },
        { val: '2–3×', label: 'Weekly Commitment (year-round)' },
      ],
    },
    blocks: [],
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
    url:         'projects/qset-launches.html',

    heroTitle: 'Stratospheric Satellite <em>Launches.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'As manager of Queen\'s Space Engineering Team, I led the development of stratospheric balloon payloads across two launch cycles. The goal was twofold: give QSET design team members real experience with end-to-end satellite development, and generate flight data that could actually inform future missions.',
        'These weren\'t demonstrations. The hardware had to survive launch conditions, operate autonomously at altitude, and return usable data. The satellite nicknamed "Eggo" flew to 48.4km — well into the stratosphere — where temperatures swing from +20.7°C at launch to -28°C at peak altitude, and pressure drops to near nothing.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Full mission lifecycle, twice — design, build, validate, launch, analyze, improve.',
      steps: [
        {
          title: 'System design and component selection',
          body: 'Chose components for reliability and cost-effectiveness within the team\'s constraints. Arduino Nano Every as core controller — compact, low power. BMP180 for barometric pressure, temperature, and altitude (operated outside its rated range but validated as reasonably accurate for the mission profile). TMP36 and precision thermistor for temperature redundancy. SD card reader for local data logging — no downlink capability, so reliable storage was critical.',
        },
        {
          title: 'Build and integration',
          body: 'Assembled and integrated all systems into the payload structure. Wired sensor harnesses, validated all connections, confirmed data logging was functioning correctly before enclosure. Structural design prioritized lightweight materials and survivability through the balloon burst and descent.',
        },
        {
          title: 'Pre-launch validation and safety protocols',
          body: 'Developed a helium transport safety standard for QSET — a formal procedure that satisfied regulatory requirements for moving pressurized gas to the launch site. This hadn\'t existed before. It streamlined approval for the 2024 launch and established a reusable process for future teams.',
        },
        {
          title: 'Launch and flight',
          body: '2023 mission: 90-minute ascent, 41-minute descent, peak altitude 48.4km. Payload collected temperature, pressure, and altitude data across the full flight envelope. All data recovered successfully from SD card post-landing.',
        },
        {
          title: 'Data analysis and mission improvement',
          body: 'Analyzed flight data in Python/Colab — temperature range -28°C to +20.7°C, pressure 14.2 to 1007.2 hPa. Used data alongside weather prediction modeling to refine the 2024 mission plan. Cost reduced 15% year-over-year through improved trajectory modeling and launch timing decisions.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'Two successful launches, data recovered from both, and a 15% cost reduction between cycles. The helium safety standard created for this program has since been adopted as a reusable process for future QSET launches. The 2024 mission also incorporated an on-board camera, adding visual documentation to the sensor data. The data from both flights is publicly available.',
      ],
      stats: [
        { val: '48.4 km', label: 'Peak Altitude' },
        { val: '2',       label: 'Successful Launches' },
        { val: '15%',     label: 'Cost Reduction YoY' },
        { val: '90 min',  label: 'Ascent Duration' },
      ],
    },
    blocks: [],
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

    heroTitle: 'Gesture Controlled <em>Car.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'I analyzed participant feedback from previous years at Connections Engineering Outreach and saw a consistent pattern: students wanted more technically advanced projects. The existing curriculum wasn\'t meeting them where they wanted to be.',
        'So I designed something harder. The goal was a project that felt like real engineering to a high schooler: meaningful sensors, non-trivial code, a control interface that disappears and lets the user just drive. No buttons to learn. Tilt your wrist; the car goes that direction.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Two prototypes, one honest pivot, one final design built to be replicable by participants with varying experience.',
      steps: [
        {
          title: 'Component selection for a workshop context',
          body: 'Component choices were constrained by two things: cost (each kit would be replicated across many participants) and reliability (every kit had to work the first time, in a crowded room, without debugging support). Chose Arduino Uno for compatibility and affordability, MPU-6050 accelerometer for gesture sensing, L298N H-bridge motor driver for the drive system.',
        },
        {
          title: 'First prototype: wireless, three motors',
          body: 'Initial design used wireless communication between controller and car, with three motors. Testing revealed two problems: wireless was unreliable in a crowded RF environment, and three-motor drive was too mechanically complex for participants to assemble and debug independently. Both issues would have killed the workshop.',
        },
        {
          title: 'Redesign: wired, four motors',
          body: 'Replaced wireless with a wired tether (simpler, more reliable, cheaper), switched to four DC motors in a standard differential drive configuration. Four motors is actually a cleaner mechanical design — more stable, better turning, easier to wire. The redesign solved the failure modes without sacrificing the core experience.',
        },
        {
          title: 'Code and calibration',
          body: 'The IMU reads pitch and roll in real time. Pitch controls forward/back speed; roll controls turn rate. The code maps these values to PWM signals on the H-bridge, with a deadband in the center so the car holds still when the wrist is level. Threshold-tuned until control felt responsive without being twitchy.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'The gesture-controlled car became the highest-rated project in 20+ summer programs at Connections, with 95% participant satisfaction. More importantly, its success demonstrated that high schoolers could engage with — and succeed at — genuinely advanced embedded systems content. The program expanded as a direct result. The first prototype failing was the right outcome: it found the constraints early, and the redesign solved for the actual use case rather than the ideal one.',
      ],
      stats: [
        { val: '#1',  label: 'Rated of 20+ Projects' },
        { val: '95%', label: 'Participant Satisfaction' },
        { val: '2',   label: 'Prototype Iterations' },
        { val: '1',   label: 'Program Expansion' },
      ],
    },
    blocks: [],
  },

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
    previewDesc: "I owned the elbow of a soft Baymax replica — 2 DOF, foldable, proportionally faithful, inherently safe to touch.\n\nFirst design: cable-driven universal joint. Simulation showed it would compromise arm proportions. Second design: belt-driven differential with motors relocated to the shoulder, reducing forearm torque and keeping the joint slim.\n\nFinal arm: carbon fiber core, inflatable outer segments, pressurized polyethylene cover. No rigid surface ever exposed to a user — the material is the safety system.",
    tags:        ['Mechanisms', 'CAD', 'Simulation', 'Fusion 360', 'Safety Design'],
    url:         'projects/baymax.html',

    heroTitle: 'Baymax Robotic <em>Arm.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'I was given a clear brief: design the elbow of a soft Baymax replica capable of meaningful gestures — fist bump, high-five, hug — while preserving the soft, friendly aesthetic that defines the character. Beyond the mechanics, there was a safety requirement baked into the premise: this robot would interact with people directly. The design had to be inherently safe, not just software-safe.',
        'My responsibility was the elbow joint. The constraints were tight: 2 degrees of freedom, foldable for storage, proportionally faithful to Baymax, and soft enough that a person could touch it without risk.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Two full design iterations, driven by simulation and hand calculations at each stage.',
      steps: [
        {
          title: 'Cable-driven universal joint (first iteration)',
          body: 'My initial design used a cable-driven universal joint at the elbow: three cables spaced 120° apart, running through a hollow carbon fiber core, controlled by linear actuators in the upper arm. The top cable controlled vertical lift; the two side cables controlled lateral rotation, enabling a hug. Technically sound on paper — but simulation revealed it would compromise the arm\'s proportions to fit all the components.',
        },
        {
          title: 'Belt-driven differential (second iteration)',
          body: 'I redesigned around a belt-driven differential: two stepper motors in the shoulder driving through V-belts and bevel gears to give the elbow its 2 DOF. Same motors rotating in the same direction lifts the arm vertically; opposite rotation swings it laterally. Moving the motors to the shoulder dramatically reduced torque requirements on the forearm and kept the elbow slim enough to look right.',
        },
        {
          title: 'Final assembly and integration',
          body: 'The final arm: carbon fiber inner core for rigidity, three inflatable outer segments for softness and coverage, and a lightly pressurized polyethylene cover that gives Baymax his continuous balloon appearance. Hand cables route from fingers to shoulder through the hollow core. The soft exterior means no rigid surface is ever exposed to a user — the material is the safety system.',
        },
      ],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'The belt-driven differential passed simulation testing and hand calculations, demonstrating both the strength and precision needed for repeatable gestures. The design also solved a secondary problem: by routing all actuation to the shoulder, the forearm stayed light and the shoulder motors stayed within torque limits. The iterative process — cable joint first, differential second — was the right call. The first design found the problem; the second solved it.',
      ],
      stats: [
        { val: '2',     label: 'Design Iterations' },
        { val: '2 DOF', label: 'Elbow Articulation' },
        { val: '3',     label: 'Gesture Types' },
        { val: '0',     label: 'Rigid Surfaces Exposed' },
      ],
    },
    blocks: [],
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

    heroTitle: 'Survey Automation <em>Tool.</em>',
    purpose: {
      heading: 'Why I <em>built this.</em>',
      body: [
        'A Python tool that turned a 4-hour manual process into a 2-minute one. 99.2% of the work, gone.',
      ],
    },
    process: {
      heading: 'How I <em>built it.</em>',
      summary: 'Automated ingestion, parsing, analysis, and output generation end-to-end.',
      steps: [],
    },
    result: {
      heading: 'What I <em>made.</em>',
      body: [
        'A 99.2% reduction in processing time and a process that now runs consistently without error.',
      ],
      stats: [],
    },
    blocks: [],
  },

];
