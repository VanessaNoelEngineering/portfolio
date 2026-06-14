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
    id: "lego-minifig",
    published: true,
    type: "hw",
    tabs: ["built"],
    title: "Giant LEGO Minifigure",
    emoji: "🧱",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776389372/Untitled_design_uiqoq8.png",
    label: "Hardware · 3D Printing",
    desc: "A 10× scale, fully posable, LEGO Space Minifigure!",
    previewDesc:
      "LEGO's tolerances are engineered for injection molding at millimeter scale. Scaling to 10× doesn't just make things bigger, it changes how materials flex, how joints wear, and how much force you need to actually click something into place. The goal: posable joints that still feel satisfying and hold their position years later, and figures that actually feel like LEGO.",
    tags: ["CAD", "3D Printing", "Tolerance Design", "FDM"],
    url: "projects/lego-minifig.html",

    heroTitle: "Giant LEGO <em>Minifigure.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [],
      blocks: [
        {
          type: "split",
          right: {
            type: "image",
            align: "top",
            nudge: "-80px",
            url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777145303/Your_paragraph_text_ob8os9.png",
          },
          left: {
            type: "text",
            align: "top",
            body: [
              "I've always loved LEGO. Set 71037 - the Brown Astronaut and Baby Benny the Spaceman is one of my favourite minifigure sets, and I wanted an enlarged version to display. The rule I gave myself: fully functional, no glue, no hardware. Every joint had to be posable, just like the real thing.",
              "LEGO achieves their insane tolerances through injection molding. I had a 3D printer, so that would have to do. But scaling up creates problems that don't exist at standard size. PLA wears down with repeated use, so joints that start tight gradually loosen. Everything gets heavier, which puts more stress on the joints. And getting the chest logos to sit flush without a multi-colour printer meant dialling in settings precisely enough that the inlay would fit perfectly without protruding.",
            ],
          },
        },
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Methodical scale-up with a 5× validation step before committing to the full 10× print.",
      steps: [
        {
          title: "CAD model from reference",
          body: "Built both figures in CAD from the original LEGO set as reference. The focus was on capturing the geometry accurately including the proportions, joint shapes, and connection interfaces.",
          blockAfter: {
            type: "split",
            left: {
              type: "video",
              url: "https://www.youtube.com/embed/h5ZbaEFdA68",
              autoplay: true,
              mute: true,
              controls: false,
            },
            right: {
              type: "video",
              url: "https://www.youtube.com/embed/ir0tKuCpMhQ",
              autoplay: true,
              mute: true,
              controls: false,
            },
          },
        },
        {
          title: "5× prototype to validate proportions",
          body: "Before committing to the full 10× print, I printed at 5× to check that the proportions read correctly and that the assembly logic worked. Caught fit issues at this stage that would have cost days of print time at full scale.",
          blockAfter: {
            type: "split",
            left: {
              type: "image",
              url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777744199/small-brown-astronaut-minifigure-no-background_ugbjpb.png",
            },
            right: {
              type: "image",
              url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777744099/baby-benny-minifigure-small-no-background_odxlxh.png",
            },
          },
        },
        {
          title: "Detail pass at 10×",
          body: "Once the base geometry was validated, scaled to 10× and added the smaller surface details: chest logos, face features, helmet markings. These couldn't be added at 5× (too small to print cleanly) but needed to be right before the final run.",
          blockAfter: {
            type: "split",
            left: {
              type: "image",
              url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777745418/brown-astronaut-minifig-chest-emblem-no-background_qv75yw.png",
            },
            right: {
              type: "image",
              url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777745414/Original_10_drvwlu.png",
            },
          },
        },
        {
          title: "Full print run and assembly",
          body: "Final build: 90+ hours of print time across both figures. Parts assembled in the designed sequence — joints clicked in, figures posed. No adhesive, no hardware.",
          blockAfter: {
            type: "split",
            left: {
              type: "video",
              url: "https://www.youtube.com/embed/n6bRrRhsyjE",
              autoplay: true,
              mute: true,
              controls: false,
            },
            right: {
              type: "video",
              url: "https://www.youtube.com/embed/hLLRDKRHqJ8",
              autoplay: true,
              mute: true,
              controls: false,
            },
          },
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "Two fully posable 10× LEGO minifigures that behave like the originals — joints click, limbs move, helmets come off. The 5× validation step was the key decision: it found problems cheaply that would have been expensive at full scale. The project is a good example of how DFM thinking applies even to personal builds.",
      ],
      stats: [
        { val: "10×", label: "Scale" },
        { val: "90+", label: "Hours of Print Time" },
        { val: "2", label: "Figures Built" },
        { val: "0", label: "Adhesives or Fasteners" },
      ],
      blocks: [
        {
          type: "gallery",
          columns: 2,
          images: [
            "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777747059/Untitled_design_1_t5ziyo.jpg",
            "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777747071/Untitled_design_2_omwb1l.jpg",
            "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777747083/20240408_190537_fjp02s.jpg",
            "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1777747091/20240411_052327_1_la3755.jpg",
          ],
        },
        {
          type: "split",
          heading: "Explore the <em>models.</em>",
          left: {
            type: "cad",
            url: "https://queensu158.autodesk360.com/shares/public/SHd38bfQT1fb47330c99374753ba30fbfc3b?mode=embed",
          },
          right: {
            type: "cad",
            url: "https://queensu158.autodesk360.com/shares/public/SHd38bfQT1fb47330c99713edf926c420b55?mode=embed",
          },
        },
      ],
    },
  },

  {
    id: "csa-outreach",
    published: false,
    type: "both",
    tabs: ["led", "launched"],
    title: "Free Satellite Launching Program for At-Risk Youth",
    emoji: "🚀",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611690/IMG_5809_zkihvi.jpg",
    label: "Led · Community · Aerospace",
    desc: "A free satellite program for at-risk youth, built in partnership with the CSA — and I wrote the $50K grant that funded it.",
    previewDesc:
      "At-risk youth designing, wiring, and launching real satellites. I founded this program from scratch, funded by a $50K grant I wrote during my internship.\n\nThe first half of the program was all teaching: embedded systems, circuit design, designing for robustness, how to think about hardware that has to survive real conditions. All hands-on. The second half was building — participants designed and assembled functional satellite modules from scratch, then launched them via stratospheric balloon to ~19 miles altitude, collected real data, and brought them back down.",
    tags: [
      "Program Design",
      "Grant Writing",
      "Aerospace Education",
      "CSA Partnership",
    ],
    url: "projects/csa-outreach.html",

    heroTitle: "Free Satellite Launching <em>Program.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "Through leading a sub-team on my university's space engineering team, I'd built real aerospace experience and found mentors who shaped how I think about engineering. Most people never get that. I wanted to share it, especially with kids who wouldn't stumble into it on their own. I already had a relationship with the Canadian Space Agency through the design team, connections at a local robotics lab where I volunteered, and experience launching a small scale satellite. I knew if I could write a grant and get people to understand how impactful this program would be, I could make it happen. So I built the program",
        "At-risk youth designing, wiring, coding, and launching actual satellites. No kits, no predetermined missions. The kids decided what they wanted to investigate and build and I helped them figure it out.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Grant application, partnership formation, curriculum design, program delivery, and launch.",
      steps: [
        {
          title: "Grant writing and funding",
          body: "Wrote the proposal that secured $50K from the CSA. The grant covered all program costs — components, tools, launch logistics — so participants paid nothing. Writing the proposal meant articulating the educational value, the partnership structure, and the technical feasibility of putting student-built hardware into the stratosphere.",
        },
        {
          title: "Partnership with CSA and the Robotics Lab",
          body: "Established the formal partnership between Connections (Queen's engineering outreach), the CSA, and the Robotics Lab. Each partner brought something specific: CSA provided credibility and funding, the Robotics Lab provided facilities and expertise, Connections provided the student pipeline and instructional framework.",
        },
        {
          title: "Curriculum design",
          body: "Designed the technical curriculum from scratch: embedded systems basics, sensor integration, circuit wiring and soldering, CAD, and satellite structure design. The curriculum had to work for students with no prior engineering background and build to a working payload over the program duration.",
        },
        {
          title: "Program delivery and satellite build",
          body: "Ran the program with participants designing and assembling their own payload systems; writing code, wiring sensors, testing integration. Supported students through the debugging process; the goal was for them to own the technical decisions and learn through iteration.",
        },
        {
          title: "Launch",
          body: "Payload launched via stratospheric balloon. Student-built hardware went to the stratosphere and returned with data. For most participants, it was their first time soldering, reading data-sheets, or seeing their code interact with real hardware — and they got to experience all of that in the context of a real launch.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "The program ran successfully, culminated in a real launch, and established a model for ongoing STEM-space collaboration between QSET and Connections. The partnership continues, with future launches planned. The most important outcome wasn't the data the satellite collected. It was watching kids who'd never touched a circuit board realize they can build whatever they can imagine.",
      ],
      stats: [
        { val: "$50K", label: "Grant Secured" },
        { val: "1", label: "Satellite Launched" },
        { val: "0", label: "Cost to Participants" },
        { val: "3", label: "Partner Organizations" },
      ],
    },
    blocks: [],
  },

  {
    id: "mech-flower",
    published: true,
    type: "hw",
    tabs: ["built"],
    title: "Mechanical Flower",
    emoji: "🌸",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776391800/mechanical-flower-full-size-no-background_ity0qm.png",
    label: "Hardware · Robotics",
    desc: "A robotic lotus that opens to your touch — capacitive sensing driving servo actuation, built to feel alive.",
    previewDesc:
      "The technical challenge here was small but specific: make something mechanical feel organic. A DIY capacitive touch sensor (literally a spoon, wired to an Arduino Uno) detects the presence of a hand. First touch: the servo opens the petals and the LED blooms. Second touch: it closes and goes dark.\n\nThe harder part was the motion. Getting the petal linkage geometry right so the flower opens slowly and smoothly — not snapping open like a mechanism, but unfolding like a real flower — required iteration on both the CAD and the code. All models were designed and printed from scratch, except the outer petal profile.",
    tags: [
      "Arduino",
      "C++",
      "CAD",
      "3D Printing",
      "Servo Control",
      "Capacitive Sensing",
    ],
    url: "projects/mech-flower.html",

    heroTitle: "Mechanical <em>Flower.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "The goal was to make something mechanical feel organic. Not just functional — genuinely responsive in a way that felt natural rather than programmed. A flower that opens when you touch it sounds simple. Getting it to feel right is the harder problem.",
        "The sensor needed to respond to human presence without physical buttons. The motion needed to feel like unfolding, not actuating. Both of those constraints shaped every decision in the design.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Sensor first, then mechanics, then the long work of making the motion feel right.",
      steps: [
        {
          title: "DIY capacitive touch sensor",
          body: "Rather than using an off-the-shelf touch module, I built a capacitive touch sensor from a spoon and a resistor — wired directly to an Arduino Uno analog pin. The spoon acts as the sensing electrode; when a hand gets close, the capacitance changes enough to trigger the input. Cheap, effective, and a good lesson in how touch sensing actually works at the circuit level.",
        },
        {
          title: "Servo and LED circuit",
          body: "A single servo motor drives the petal opening mechanism. First touch: servo rotates, petals open, LED turns on. Second touch: reverse. The circuit was tested and validated before any mechanical assembly — catching a wiring issue with the LED early that would have been much harder to debug inside the assembled flower.",
        },
        {
          title: "CAD and petal linkage",
          body: "All inner structural components were modeled and printed from scratch. The outer petal profile came from an existing file, but the stem, inner flower housing, and LED mount were original. Getting the linkage geometry right — so the petals open smoothly rather than snapping — took several print-and-test iterations, adjusting the pivot point positions each time.",
        },
        {
          title: "Assembly and tuning",
          body: "Once all parts fit, the circuit was soldered (fixing the LED issue found in step 02), the servo was calibrated to the correct rotation range, and the capacitive threshold was tuned so the sensor responded reliably to a nearby hand without false triggers.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "A fully functional robotic lotus that opens and closes in response to human touch. The motion is slow and deliberate — more flower than machine. The DIY capacitive sensor proved reliable across repeated use, and the overall build cost was minimal. The most valuable outcome was the iteration on the linkage: learning how small changes in pivot geometry change the feel of motion entirely.",
      ],
      stats: [
        { val: "1", label: "Sensor (DIY, no module)" },
        { val: "2", label: "Touch States" },
        { val: "4", label: "Linkage Iterations" },
      ],
    },
    blocks: [],
  },

  {
    id: "happy-tappy",
    published: true,
    type: "hw",
    tabs: ["built", "launched"],
    wip: true,
    title: "Happy Tappy",
    emoji: "💙",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611532/happy-tappy-thumbnail_tzkunz.png",
    label: "Hardware · Open Source · Community",
    desc: "Open-source EMDR tappers — therapeutic hardware that costs $500 commercially. This version costs under $50.",
    previewDesc:
      "EMDR (Eye Movement Desensitization and Reprocessing) tappers deliver bilateral stimulation — alternating vibration, light, or sound — used in trauma therapy. Commercial devices are hundreds of dollars, which puts them out of reach for a lot of people who could benefit.\n\nHappy Tappy is an open-source alternative: configurable vibration, light, and audio feedback with adjustable intensity, frequency, and color. Built from readily available components, target BOM under $50. The tapper units are breadboarded and validated. PCB design and enclosure are in progress. The goal is something anyone can build, modify, improve, and share.",
    tags: [
      "Arduino",
      "PCB Design",
      "Embedded Systems",
      "Open Source",
      "Accessibility",
    ],
    url: "projects/happytappy.html",

    heroTitle: "Happy <em>Tappy.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "EMDR (Eye Movement Desensitization and Reprocessing) is a trauma therapy technique that uses bilateral stimulation — alternating sensory input on the left and right sides of the body — to help process difficult memories. Tappers are the hardware that delivers this stimulation: small handheld devices that vibrate alternately, sometimes paired with light or audio cues.",
        "Commercial EMDR tappers cost hundreds of dollars. That price isn't justified by the electronics inside — it's a market access problem, not a complexity problem. A close friend benefited significantly from EMDR therapy, and watching the cost of the equipment be a barrier for other people made this project feel necessary.",
        "Happy Tappy is an open-source alternative: full bilateral vibration, configurable light and audio feedback, adjustable intensity and frequency, target BOM under $50. Everything documented, everything modifiable, everything shareable.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Validated the core tapper experience on breadboard first; PCB and enclosure in progress.",
      steps: [
        {
          title: "Defining the spec",
          body: "Commercial tappers offer vibration, LED light bars, and audio tones — all configurable in intensity and frequency. The goal was to match that feature set at a fraction of the cost, using components anyone can source and assemble. Researched existing open-source EMDR projects to understand the gaps, then defined a target spec: bilateral vibration motors, RGB LEDs, configurable timing, sub-$50 BOM.",
        },
        {
          title: "Breadboard prototype: tapper units",
          body: "Built the tapper units on breadboard — two handheld controllers, each with a vibration motor and LED, driven by a microcontroller. Tested the bilateral timing loop: motor and LED fire on one side, pause, fire on the other. Core functionality validated. The haptic feedback was the critical test — the sensation needs to feel distinct and rhythmic, not just vibration.",
        },
        {
          title: "Breadboard prototype: control unit",
          body: "Built the control unit: interface for setting frequency, intensity, and mode. Tested the full system end-to-end — control signals passing reliably to both tapper units, adjustments reflected in real time.",
        },
        {
          title: "PCB design (in progress)",
          body: "Moving off breadboard onto a custom PCB to make the design reproducible and compact. The breadboard version proved the circuit; the PCB makes it something someone else can actually build.",
        },
        {
          title: "Enclosure design (in progress)",
          body: "Designing the physical enclosure for both the tapper units and the control box. Needs to be comfortable to hold, durable enough for regular use, and simple enough to 3D print at home.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "The tapper units are breadboarded and validated — the core experience works. PCB layout and enclosure design are the remaining steps before this becomes something anyone can build from the documentation. The project is ongoing. When it ships, all files will be open-source: schematics, PCB layout, firmware, enclosure STLs, and a full build guide.",
      ],
      stats: [
        { val: "&lt;$50", label: "Target BOM Cost" },
        { val: "$500+", label: "Commercial Equivalent" },
        { val: "3", label: "Feedback Modalities (vibration, light, audio)" },
        { val: "100%", label: "Open Source" },
      ],
    },
    blocks: [],
  },

  {
    id: "project-sonder",
    published: true,
    type: "both",
    tabs: ["built", "led", "launched"],
    wip: true,
    title: "Project Sonder",
    emoji: "✉️",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611627/project-sonder-thumbnail_l4rqce.png",
    label: "Hardware · Software · Community",
    desc: "3D-printed letters with NFC tags, placed in mailboxes around LA. Scan it, read a stranger's note, leave your own.",
    previewDesc:
      "Sonder is named for the realization that every person you pass has a life as vivid and complex as your own. The project is a physical-digital system built around that idea.\n\nA 3D-printed letter sits in a handmade mailbox somewhere in Los Angeles. You find it, scan the NFC tag or QR code, and a web app serves you a letter written by a complete stranger — then asks you to write one back. No algorithm decides what you get. No filters on what people write. Just what someone actually left for you.\n\nThe backend is fully built and live — database, letter routing, the whole scroll-to-open envelope interaction. The physical letters and mailboxes are in production. First installations go up in LA soon.",
    tags: ["Web Dev", "NFC", "3D Printing", "Full-Stack", "Community Design"],
    page: "projects/project-sonder.html",
    url: "https://project-sonder.netlify.app/",

    heroTitle: "Project <em>Sonder.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "Sonder is a word for the realization that every person you pass on the street has a life as vivid and complex as your own — full of ambitions, fears, routines, and relationships you'll never know. It's the kind of thought that makes you feel more connected to strangers and less alone.",
        "I wanted to build something that made people feel that. Not through a social media platform, not through an algorithm that curates what you see — through something physical, accidental, and unfiltered. You find a letter in a mailbox. You scan a tag. A stranger's words appear on your screen. Then you write back.",
        "The project is a social experiment as much as an engineering one: what do people actually say when there's no audience, no likes, no followers — just a stranger who might read it?",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Web platform built first and fully functional; physical system in production.",
      steps: [
        {
          title: "Core concept and system design",
          body: "Mapped the full user experience: someone finds a physical letter, scans an NFC tag or QR code, lands on a web app, reads a stranger's letter, writes their own, puts the physical letter back. Designed the data model around this flow: letters stored with metadata but no user accounts, served randomly to new visitors, no filtering, no moderation algorithm.",
        },
        {
          title: "Web platform: frontend",
          body: "Built the full frontend experience — a scroll-to-open envelope animation that reveals a stranger's letter as you scroll down, followed by a reply form. Designed to feel like opening a real letter, not filling out a form. Hosted on Netlify. Live at project-sonder.netlify.app.",
        },
        {
          title: "Web platform: backend and database",
          body: "Built the backend: letter storage, random letter retrieval logic, submission handling. When you scan a tag and load the page, you get a random letter from the database. When you write one, it enters the pool for the next person who finds that mailbox. No accounts, no profiles, no history — just the exchange.",
        },
        {
          title: "NFC tag integration",
          body: "Each physical letter has an embedded NFC tag programmed to open the web URL on tap. QR code backup for devices without NFC. The tag is the bridge between the physical object and the digital experience — someone who doesn't know what NFC is can still just tap and have it work.",
        },
        {
          title: "Physical letter and mailbox design (in progress)",
          body: "Designing the 3D-printed letter form and mailbox enclosures for outdoor installation. The letter needs to be weather-resistant, durable, and feel intentional — something worth picking up and engaging with. The mailbox needs a flag mechanism (raised = there's mail) to signal to passersby that something is there.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "The platform is fully built and live. The physical system is in production — letters and mailboxes being designed and printed for initial deployment around Los Angeles. First installations coming soon. The most interesting design decision in the whole project: no filters, no moderation, no algorithm. You get exactly what someone wrote. That's either the best or most naive thing about it, depending on who you ask.",
      ],
      stats: [
        { val: "1", label: "Platform (live)" },
        { val: "0", label: "Algorithms deciding what you read" },
        { val: "0", label: "User accounts required" },
        { val: "∞", label: "Letters possible" },
      ],
    },
    blocks: [],
  },

  {
    id: "replica-props",
    published: true,
    type: "hw",
    tabs: ["built"],
    title: "Replica Props",
    emoji: "🎭",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776541582/Untitled_design_1_f2sfld.png",
    label: "Hardware · Fabrication",
    desc: "Majora's Mask, the Deku Mask, and a life-sized Minecraft Chicken — built for fun, finished like they mean it.",
    previewDesc:
      "Three very different objects, one shared discipline: getting from a digital model to a physical thing that looks right.\n\nMajora's Mask exceeded my printer's build volume, so I split it into registered parts, printed separately, and joined them. Painted from scratch.\n\nThe Deku Mask went further — 3D printed base, Bondo applied and sanded, thin clay layer hand-sculpted to restore organic surface detail lost in the print, then painted. Each stage of finishing directly affects the next, so the process has to be planned as a whole, not step by step.\n\nThe Minecraft Chicken is a study in translating voxel geometry — a deliberately blocky digital asset — into a printable object with actual surfaces and structural integrity. Life-sized. All files modeled from scratch.",
    tags: ["CAD", "3D Printing", "Surface Finishing", "Multi-part Assembly"],
    url: "projects/masks.html",

    heroTitle: "Replica <em>Props.</em>",
    purpose: {
      heading: "Why I <em>built these.</em>",
      body: [
        "These projects exist because I wanted to, which is a perfectly good reason. But the skills involved are real: part splitting, print registration, multi-stage surface finishing, and the discipline to see a process through to a result that actually looks finished rather than just printed.",
        "Replica work is unforgiving in a specific way — you're working toward a known reference, so there's no hiding a bad decision. Every stage either moves you closer to the target or compounds the error.",
      ],
    },
    process: {
      heading: "How I <em>built them.</em>",
      summary:
        "Three props, three different finishing challenges — each one pushing a different part of the fabrication process.",
      steps: [
        {
          title: "Majora's Mask: part splitting for oversized geometry",
          body: "The mask exceeded my printer's build volume. The solution: split the model into sections at natural seam lines, print separately, and join with registration features to ensure alignment. Painted after assembly. The challenge is planning the splits so the seams are invisible in the final result.",
        },
        {
          title: "Deku Mask: multi-stage surface finishing",
          body: "The Deku Mask went through a full finishing pipeline. 3D printed base → Bondo body filler applied and sanded to remove layer lines and refine the form → thin clay layer hand-sculpted over the Bondo to restore organic surface detail that the print couldn't capture → painted. Each material layer has to be planned in sequence because each one affects what comes next. You can't fix a bad Bondo stage with clay.",
        },
        {
          title: "Minecraft Chicken: voxel geometry to physical object",
          body: "The Chicken is a different problem — translating a deliberately blocky, voxel-based game asset into a real object that holds together structurally at life size. All geometry modeled from scratch. The design challenge is that voxel objects have no organic curves to hide seams in — every face is flat, every edge is sharp, so print quality and part joins are fully exposed.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "Three finished props, each one the product of a different process path. The Deku Mask's multi-stage finishing taught the most — understanding how Bondo, clay, and paint interact as a system rather than as separate steps is a skill that transfers directly to any multi-material surface work. The Chicken is the most structurally interesting. Majora's Mask is the most visually striking.",
      ],
      stats: [
        { val: "3", label: "Props Built" },
        { val: "3", label: "Distinct Finishing Processes" },
        { val: "1", label: "From-scratch Geometry (Chicken)" },
      ],
    },
    blocks: [],
  },

  {
    id: "stem-connections",
    published: true,
    type: "both",
    tabs: ["built", "led", "launched"],
    title: "STEM Outreach — Connections",
    emoji: "⚡",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776611945/STEM-outreach-thumbnail-no-background_iw66vx.png",
    label: "Led · Community · Hardware",
    desc: "A sold-out mechatronics program built from nothing — reaching thousands of students across robotics, space, and embedded systems.",
    previewDesc:
      "I joined Connections as an instructor and advanced to Mechatronics Engineer, building a program that hadn't existed before. Recognizing there was no hands-on mechatronics offering for high school students, I designed and launched one from scratch. It sold out.\n\nThe curriculum spanned Arduino robotics, Python and machine learning, 3D modeling and fabrication, and space engineering. Projects I designed and taught include a gesture-controlled car (highest-rated project in 20+ summer programs), a functional seismometer used in live bridge-testing workshops, a servo-actuated prosthetic hand, and a LEGO Canadarm with three control modalities.\n\nThe shaker table workshop: participants built earthquake-proof structures, then tested them on the motorized shaker table while their seismometers detected simulated seismic events in real time.",
    tags: [
      "Curriculum Design",
      "Arduino",
      "C++",
      "Python",
      "ML",
      "3D Printing",
      "Program Leadership",
    ],
    url: "projects/stem-connections.html",

    heroTitle: "STEM Outreach <em>Program.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "When I joined Connections, the engineering outreach department at Queen's University, there was no mechatronics programming. Students could learn about bridges and mouse-trap cars. They couldn't build robots or write code for hardware that did something interesting.",
        "I saw a gap and built into it. Starting with Python and machine learning courses during the pandemic, then expanding to a full mechatronics program once in-person teaching resumed. The test of whether it worked: it sold out.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Built the program in stages — curriculum first, then iterating each project based on what actually worked in the room with students.",
      steps: [
        {
          title: "Python and machine learning curriculum (2021–2022)",
          body: "Started with free online courses during the pandemic: Python fundamentals, ML applications (letter recognition, animal classification), and building a virtual assistant. Designed to be accessible with no prior coding experience, and to show students that machine learning wasn't magic — it was pattern matching they could understand and implement.",
        },
        {
          title: "Mechatronics program development (2022 onwards)",
          body: "Designed the hands-on mechatronics curriculum from scratch: Arduino-based robotics, sensor integration, circuit wiring, and hardware debugging. The core question for each project was the same: does this teach something real, and does it feel like real engineering to a 16-year-old?",
        },
        {
          title: "Gesture-controlled car",
          body: "Designed the gesture-controlled car project from participant feedback data (see full project page). It became the highest-rated project in 20+ summer programs. Its success demonstrated that advanced embedded systems content worked in an outreach context, and directly expanded the program.",
        },
        {
          title: "Seismometer and shaker table workshop",
          body: "Built a motorized LEGO shaker table and designed a workshop around it: participants built earthquake-proof structures from spaghetti/marshmallows or LEGO bricks, then wired and coded their own Arduino seismometers. The seismometer detected the simulated seismic events from the shaker table in real time, triggering an LED and buzzer alert. Real feedback loop, real engineering judgment required.",
        },
        {
          title: "LEGO Canadarm and prosthetic hand",
          body: "Designed two more projects exploring robotics and human-machine interaction. The LEGO Canadarm used three sensing modalities creatively: a wheel mapped to base rotation, a color sensor controlling arm height (red = lower, green = raise), and a force sensor driving the gripper (partial press = open, hard press = close). The prosthetic hand used the open-source e-NABLE framework, driven by Arduino and servo motors, with individual fingers controlled by buttons.",
        },
        {
          title: "Connections to Space",
          body: "Brought the satellite program into Connections — high school students learning mechatronics and space engineering, culminating in a launch. See the CSA Outreach project page for the full story.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "A sold-out program that didn't exist when I started. Thousands of students reached across multiple years of delivery. Projects that were designed for the room — tested against real students, iterated based on what actually landed — rather than what seemed interesting on paper. The gesture-controlled car expansion, the seismometer workshop, and the satellite program are all downstream of decisions made about what real engineering education looks like for a high schooler who's never soldered anything.",
      ],
      stats: [
        { val: "1", label: "Program built from scratch" },
        { val: "6+", label: "Projects designed and taught" },
        { val: "1000s", label: "Students reached" },
        { val: "$50K", label: "CSA Grant (see Satellite Launches)" },
      ],
    },
    blocks: [],
  },

  {
    id: "first-robotics",
    published: true,
    type: "hw",
    tabs: ["led", "launched"],
    title: "FIRST Robotics — Team 19528",
    emoji: "🏆",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776612649/IMG_3124_oa4xnt.png",
    label: "Led · Community · Robotics",
    desc: "Two years mentoring Team 19528 — tools, wiring, CAD, debugging, mechanisms, algorithms, and four competition awards.",
    previewDesc:
      "I mentored Team 19528 (Tech Comet Lancers) for two full years, showing up 2–3 times a week through both build season and off-season. Also served as a competition judge.\n\nWhat I taught: safe use of hand tools and power tools, circuit wiring and multimeter debugging, component selection, mechanism design, control algorithm development, and CAD. About 10 students, consistently, over two years.\n\nYear 1 — Judges' Choice Award + 2nd Place Motivate Award. Winning awards in a rookie FTC year is rare and reflects how quickly the team developed both technically and culturally.\n\nYear 2 — Design Award + Connect Award. A meaningful jump in technical maturity and strategic presentation between seasons.",
    tags: [
      "Robotics",
      "FTC",
      "Mentorship",
      "Embedded Systems",
      "Mechanism Design",
    ],
    url: "projects/first-robotics.html",

    heroTitle: "FIRST Robotics <em>Mentorship.</em>",
    purpose: {
      heading: "Why I <em>did this.</em>",
      body: [
        "FIRST Tech Challenge gives high school students access to real robotics competition — but only if someone shows up to teach them. Team 19528 (Tech Comet Lancers) needed a mentor who could cover the full technical stack: mechanical, electrical, and software. I had all of it, and I wanted to give it back.",
        "I committed for two years. Two to three times a week, build season and off-season. The goal wasn't to build their robot for them — it was to get to the point where they could build it themselves.",
      ],
    },
    process: {
      heading: "How I <em>did it.</em>",
      summary:
        "Two full seasons, with progressively more technical ownership transferred to the students.",
      steps: [
        {
          title: "Foundations: tools, wiring, measurement",
          body: "Year one started from basics for most of the team. Safe use of hand tools and power tools — drills, saws, drivers. How to read a wiring diagram. How to use a multimeter to check continuity and voltage. How to select a component for a given requirement. These skills aren't glamorous but they're load-bearing — everything else depends on them.",
        },
        {
          title: "Mechanism design and CAD",
          body: 'Taught mechanism design principles: linkages, gear ratios, structural loading, motor selection. Introduced CAD as a tool for thinking through problems before cutting or printing anything. Helped students move from "let\'s try it and see" to "let\'s model it, check the geometry, then build."',
        },
        {
          title: "Controls and algorithms",
          body: "Worked through control algorithm development for the drive train and autonomous routines — PID basics, sensor integration, state machines for autonomous sequences. This is where the electrical and software work comes together, and where a lot of teams struggle. Focused on making sure students understood what the code was doing, not just that it worked.",
        },
        {
          title: "Competition judging",
          body: "Also served as a competition judge across both seasons, which gave me a different view of the program — understanding how robots and teams are evaluated beyond just whether the mechanism functions.",
        },
        {
          title: "Year two: raising the ceiling",
          body: "Year two the team came back with a foundation. The work shifted from fundamentals to optimization: improving mechanisms, refining autonomous routines, thinking strategically about game design. The awards in year two — Design and Connect — reflected a team that had internalized the engineering process, not just executed a build.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        'Year one: Judges\' Choice Award + 2nd Place Motivate Award — rare for a rookie FTC team. Year two: Design Award + Connect Award — reflecting real growth in technical maturity and how the team communicated their engineering decisions to judges. Ten students, consistently, for two full years. Watching a team go from "which end of the screwdriver do I use" to winning a Design Award in their second year is the clearest possible signal that the process worked.',
      ],
      stats: [
        { val: "2", label: "Seasons Mentored" },
        { val: "~10", label: "Students, Consistently" },
        { val: "4", label: "Competition Awards" },
        { val: "2–3×", label: "Weekly Commitment (year-round)" },
      ],
    },
    blocks: [],
  },

  {
    id: "qset-launches",
    published: true,
    type: "both",
    tabs: ["built", "led", "launched"],
    title: "Satellite Launches & Space Outreach",
    emoji: "🛰️",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392473/satellite-thumbnail-no-background_ur8htb.png",
    label: "Led · Hardware · Aerospace · Community",
    desc: "Launched 2 satellites, taught 75 students how to do the same, and raised $50K to bring the same experience to at-risk youth, for free.",
    previewDesc:
      "As manager of QSET, I led two stratospheric balloon launches to 48.4km — designing hardware, developing safety standards, and reducing mission costs 15% year-over-year through data-driven planning.\n\nThe same work gave me a platform to do something else. I secured a $50K CSA grant and built a free satellite program for at-risk youth from scratch — teaching embedded systems, circuit design, and launch operations to kids who'd never touched a circuit board, then launching their satellite to the stratosphere and watching them get their data back.",
    tags: [
      "Embedded Systems",
      "C++",
      "Mission Planning",
      "Data Analysis",
      "Grant Writing",
    ],
    url: "projects/qset-launches.html",

    heroTitle: "Satellite Launches & <em>Outreach.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "Queen's Space Engineering Team (QSET) is a student aerospace team. I joined a sub-team called Space School in 2023 — the goal was to equip students with the skills they needed to join the larger team: embedded software, circuit design, soldering, and CAD. The lessons were good but heavily guided. Step-by-step, not a lot of room to struggle. I knew there was a better way.",
        "In 2024 I took over and changed the approach. Students picked problems that interested them, even if I had no idea how to solve them either. We figured it out together. The goal wasn't just to prepare them for the satellite team. It was to teach them how to think, how to problem solve, how to sit with something hard and keep going. <strong>Retention increased by over 40%.</strong>",
        "At the same time, I'd been teaching robotics and coding to kids through Connections, Queen's engineering outreach department, since 2021. I saw an opportunity to connect the two. QSET had the aerospace expertise. Connections had the reach. I wrote a grant, <strong>secured $50K from the Canadian Space Agency</strong>, and built the Connections to Space Program: at-risk youth choosing their own missions, building real hardware, and launching it to the stratosphere.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary: "Two launches, two years, two programs running in parallel.",
      steps: [
        { type: "year", title: "2023" },
        {
          title: "Satellite Design",
          body: "The stratosphere sits well outside the rated operating range of most consumer sensors. I wanted to see how they'd hold up and whether the data would still be usable. I used a pressure sensor knowing it would be operating outside spec, and paired it with a precision thermistor so we could quantify the error.",
          blockAfter: {
            type: "image",
            url: "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1781454527/Copy_of_Copy_of_Copy_of_My_satellite_mwy2fm.png",
          },
        },
        {
          title: "Validation",
          body: "We had one shot. No downlink, no second chance. If the SD card failed, the code crashed, or the Nano powered off in the cold, we'd come back with nothing. I validated the sensor harness end-to-end, stress-tested the data logging across the full expected temperature range, and made sure we weren't going to run out of storage mid-flight.",
        },
        {
          title: "The Launch",
          body: "This was our first time doing this. Finding a launch site meant scouting locations clear enough of trees, power lines, and structures nothing would pop the balloon on its way up. Filling a weather balloon with the right amount of helium is a balance. Underfilling meant it wouldn't reach altitude, overfilling meant it would burst too early.",
        },
        {
          title: "The Data",
          body: "Eggo flew to 48.4km (30.1 miles); 90 minutes up, 41 minutes down. Temperature ranged from -28 to 20.7°C, pressure from 1007 to 14 hPa.",
          blockAfter: {
            type: "html",
            content: `<div class="reveal" style="margin:2rem 0;">
<div style="display:flex;gap:20px;margin-bottom:10px;font-family:'JetBrains Mono',monospace;font-size:11px;color:rgba(240,240,248,0.45);letter-spacing:.06em;align-items:center;">
  <span style="display:flex;align-items:center;gap:6px;"><span style="width:18px;height:2px;background:#2E8CF0;display:inline-block;"></span>Thermistor</span>
  <span style="display:flex;align-items:center;gap:6px;"><span style="width:18px;height:0;border-top:2px dashed #5AAEFF;display:inline-block;"></span>BMP180</span>
  <span style="margin-left:auto;display:flex;gap:12px;">
    <span style="color:rgba(46,140,240,0.45);">▐ ground</span>
    <span style="color:rgba(46,140,240,0.75);">▐ ascent</span>
    <span style="color:#2E8CF0;">▐ descent</span>
    <span style="color:rgba(46,140,240,0.3);">▐ landed</span>
  </span>
</div>
<div style="position:relative;width:100%;height:200px;margin-bottom:4px;">
  <canvas id="qset-temp-chart" role="img" aria-label="Temperature over 721 samples. Rises from 6°C to 20°C before launch, drops to -28°C at peak altitude, then recovers after landing.">Thermistor and BMP180 temperature across the full flight.</canvas>
</div>
<div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(240,240,248,0.25);text-align:right;margin-bottom:1rem;letter-spacing:.05em;">TEMPERATURE (°C)</div>
<div style="position:relative;width:100%;height:180px;margin-bottom:4px;">
  <canvas id="qset-press-chart" role="img" aria-label="Absolute pressure over 721 samples on a log scale. Drops from 979 hPa at launch to 14 hPa at peak, then climbs back to 1006 hPa after landing.">Absolute pressure across the full flight, log scale.</canvas>
</div>
<div style="font-family:'JetBrains Mono',monospace;font-size:10px;color:rgba(240,240,248,0.25);text-align:right;letter-spacing:.05em;">ABSOLUTE PRESSURE (hPa) — log scale</div>
<script>
(function(){
  if(!window.Chart) return;
  var raw=[[6.33,10.12,979.75],[6.02,9.82,979.75],[5.81,9.81,979.59],[5.71,9.82,979.71],[6.02,9.89,979.75],[6.13,9.97,979.82],[5.71,9.46,979.87],[5.71,9.78,979.91],[5.81,9.99,979.76],[6.33,10.32,979.87],[6.54,10.81,979.87],[7.06,11.36,979.89],[7.68,11.72,979.96],[7.79,11.90,979.98],[7.89,12.14,979.88],[8.30,12.35,979.84],[8.30,12.51,979.81],[8.71,12.82,979.77],[8.91,13.09,979.89],[9.12,13.20,979.88],[9.22,13.39,980.00],[9.42,13.57,979.95],[9.73,13.73,979.87],[10.03,13.95,979.94],[10.03,14.14,979.96],[10.44,14.32,979.94],[10.74,14.49,979.98],[10.74,14.63,979.94],[10.84,14.79,979.95],[11.04,14.93,979.87],[11.04,15.01,979.98],[10.94,15.07,979.92],[11.04,15.21,979.96],[11.14,15.50,979.97],[11.34,15.74,979.97],[11.44,15.99,979.96],[11.64,16.19,979.90],[11.74,16.34,979.92],[11.94,16.75,979.93],[12.25,17.01,979.89],[12.54,17.21,979.86],[12.64,17.36,979.90],[13.24,17.45,979.95],[13.44,17.54,979.90],[13.34,17.65,979.89],[13.74,17.77,979.94],[13.84,17.90,979.96],[14.24,18.02,979.88],[14.43,18.18,979.89],[14.53,18.40,979.94],[14.73,18.60,979.96],[15.03,18.82,979.94],[15.42,19.02,979.95],[15.52,19.26,979.95],[15.82,19.49,979.89],[16.02,19.74,979.87],[16.31,19.97,979.88],[16.90,20.23,979.96],[16.90,20.48,979.99],[17.20,20.72,979.99],[17.50,20.94,979.96],[17.69,21.13,979.97],[17.89,21.29,979.87],[18.38,21.51,979.92],[18.38,21.68,979.86],[18.48,21.89,979.91],[18.78,22.04,979.96],[19.17,22.21,979.91],[19.27,22.39,979.92],[19.37,22.60,979.94],[19.76,22.77,979.82],[19.96,22.99,980.03],[19.86,23.11,979.92],[20.16,23.25,979.96],[20.16,23.35,979.88],[20.46,23.48,979.90],[20.55,23.58,979.89],[20.65,23.65,979.88],[20.46,23.72,979.95],[20.46,23.58,975.02],[20.16,23.16,963.52],[19.76,22.76,951.79],[19.07,22.42,942.16],[18.88,21.92,935.44],[18.38,21.54,927.87],[17.99,21.20,921.21],[17.69,20.83,913.45],[17.40,20.46,904.08],[16.90,20.16,893.39],[16.41,19.88,882.43],[16.12,19.60,871.74],[16.12,19.30,861.34],[15.82,19.06,851.29],[15.52,18.81,841.20],[15.03,18.52,831.21],[14.73,18.20,821.62],[14.43,17.93,812.59],[14.24,17.71,803.20],[13.94,17.39,793.98],[13.44,17.11,785.01],[13.24,16.86,775.98],[13.14,16.70,766.70],[12.84,16.38,757.45],[12.35,16.17,748.35],[12.25,15.88,738.90],[11.84,15.62,729.48],[11.34,15.33,720.05],[11.14,15.10,710.68],[10.84,14.76,701.38],[10.34,14.39,692.31],[10.03,14.12,683.20],[9.73,13.84,674.28],[9.53,13.49,665.38],[9.12,13.23,656.63],[8.51,12.88,648.06],[8.40,12.50,639.60],[7.99,12.19,630.99],[7.68,11.93,622.82],[7.06,11.72,614.46],[6.96,11.31,605.64],[6.44,11.04,597.45],[6.44,10.93,589.09],[5.81,10.50,580.70],[5.60,10.18,572.53],[5.07,9.81,564.27],[4.65,9.56,556.38],[4.12,9.37,548.59],[4.44,8.93,540.96],[3.90,8.58,533.89],[3.36,8.21,526.87],[2.82,8.08,519.98],[2.49,7.74,512.47],[2.17,7.52,504.88],[1.73,6.97,497.54],[0.95,6.48,490.50],[0.72,6.06,483.40],[0.16,5.71,476.41],[-0.06,5.37,469.35],[-0.41,5.03,461.99],[-0.75,4.70,454.47],[-1.21,4.25,447.17],[-1.67,3.76,440.38],[-2.02,3.39,433.71],[-2.97,2.99,427.17],[-2.97,2.68,420.97],[-3.21,2.25,414.23],[-4.17,1.97,407.45],[-4.05,1.64,400.86],[-4.54,1.38,394.30],[-5.28,1.07,387.57],[-5.53,0.72,381.82],[-5.78,0.54,375.67],[-6.03,0.20,369.69],[-6.28,0.05,363.93],[-6.28,0.05,358.60],[-6.16,-0.27,353.33],[-6.79,-0.53,348.16],[-7.44,-0.66,343.29],[-7.57,-1.05,337.93],[-8.36,-1.47,332.59],[-8.36,-1.72,327.43],[-9.30,-1.98,322.21],[-9.57,-2.38,317.40],[-9.30,-2.37,312.92],[-9.03,-2.45,307.83],[-9.17,-2.67,302.69],[-9.44,-2.98,297.96],[-9.44,-3.20,292.93],[-9.57,-3.29,288.27],[-9.71,-3.24,284.25],[-9.85,-3.52,279.20],[-10.26,-3.68,274.18],[-10.82,-3.76,269.81],[-11.11,-3.89,265.35],[-11.11,-4.20,260.55],[-11.25,-4.42,255.96],[-10.82,-4.45,252.29],[-11.82,-4.65,247.82],[-11.53,-4.81,243.83],[-11.82,-5.18,240.02],[-12.40,-5.53,235.89],[-12.70,-5.40,232.15],[-12.85,-5.45,228.88],[-12.85,-5.60,225.37],[-13.29,-5.92,220.85],[-13.29,-6.21,216.92],[-13.60,-6.30,213.42],[-13.14,-6.41,209.94],[-14.36,-6.47,206.05],[-13.90,-6.76,202.17],[-14.51,-6.95,198.74],[-14.98,-7.11,194.81],[-14.21,-7.07,191.82],[-14.21,-6.92,188.97],[-14.36,-7.08,186.25],[-14.98,-7.07,183.61],[-14.98,-6.97,180.82],[-14.98,-7.12,177.57],[-14.83,-7.19,175.07],[-15.30,-7.33,172.38],[-15.14,-7.37,168.98],[-15.30,-7.42,166.14],[-15.14,-7.36,163.68],[-15.78,-7.53,161.09],[-15.62,-7.57,158.72],[-15.94,-7.60,156.14],[-15.46,-7.56,153.51],[-15.78,-7.44,151.36],[-15.14,-7.52,148.73],[-16.10,-7.63,146.61],[-16.10,-7.67,144.33],[-15.94,-7.71,141.90],[-15.94,-7.68,139.49],[-15.94,-7.69,137.47],[-16.10,-7.63,135.49],[-16.10,-7.57,133.62],[-16.10,-7.53,131.62],[-16.10,-7.54,129.68],[-15.94,-7.52,127.91],[-16.10,-7.49,126.18],[-16.10,-7.64,123.68],[-16.10,-7.89,120.74],[-16.10,-8.07,118.59],[-17.43,-8.19,116.12],[-16.59,-8.34,114.07],[-17.26,-8.47,112.13],[-17.43,-8.59,110.33],[-17.43,-8.69,108.49],[-17.43,-8.88,106.66],[-17.76,-8.93,105.15],[-17.76,-9.05,103.42],[-17.76,-9.13,101.78],[-17.94,-9.17,100.27],[-17.59,-9.36,98.52],[-18.28,-9.47,96.76],[-18.80,-9.54,95.19],[-18.28,-9.61,93.71],[-19.16,-9.71,92.30],[-18.80,-9.79,90.83],[-19.52,-9.81,89.41],[-18.98,-9.79,87.98],[-18.98,-9.86,86.50],[-18.98,-10.00,85.15],[-19.52,-10.10,83.73],[-19.34,-10.12,82.54],[-19.52,-10.12,81.04],[-19.34,-10.19,79.82],[-19.16,-10.13,78.41],[-19.34,-10.24,76.98],[-19.52,-10.30,75.75],[-19.52,-10.32,74.55],[-19.16,-10.31,73.31],[-19.70,-10.25,72.10],[-18.98,-10.36,70.98],[-18.98,-10.42,69.86],[-19.52,-10.45,68.70],[-19.88,-10.52,67.41],[-19.70,-10.59,66.32],[-20.24,-10.70,65.19],[-19.88,-10.67,63.99],[-20.24,-10.73,62.95],[-20.06,-10.82,61.87],[-20.24,-10.87,60.81],[-20.24,-10.93,59.56],[-20.24,-11.00,58.45],[-19.70,-11.06,57.37],[-20.06,-11.09,56.39],[-20.24,-11.04,55.44],[-19.70,-11.13,54.45],[-20.61,-11.25,53.64],[-20.80,-11.32,52.62],[-20.99,-11.32,51.81],[-20.80,-11.36,50.92],[-20.99,-11.43,50.08],[-21.18,-11.46,49.12],[-21.37,-11.52,48.31],[-21.37,-11.59,47.42],[-21.56,-11.66,46.59],[-21.18,-11.70,45.75],[-21.18,-11.70,44.97],[-21.56,-11.69,44.28],[-21.18,-11.71,43.48],[-21.95,-11.69,42.79],[-22.54,-11.69,42.10],[-21.18,-11.68,41.41],[-21.18,-11.74,40.72],[-21.56,-11.72,40.11],[-21.37,-11.72,39.52],[-21.18,-11.76,38.87],[-21.37,-11.76,38.25],[-21.56,-11.74,37.67],[-21.37,-11.72,36.98],[-21.56,-11.70,36.42],[-21.37,-11.70,35.82],[-20.99,-11.69,35.20],[-20.99,-11.67,34.60],[-20.99,-11.67,34.10],[-20.43,-11.60,33.47],[-21.75,-11.59,32.84],[-20.99,-11.60,32.35],[-20.80,-11.59,31.82],[-21.37,-11.56,31.22],[-20.99,-11.59,30.74],[-20.99,-11.58,30.17],[-21.18,-11.53,29.67],[-20.80,-11.48,29.20],[-20.80,-11.44,28.72],[-20.61,-11.40,28.28],[-20.43,-11.38,27.78],[-20.61,-11.37,27.24],[-20.61,-11.29,26.77],[-20.24,-11.26,26.35],[-20.24,-11.20,25.90],[-20.80,-11.14,25.56],[-19.70,-11.11,25.07],[-20.43,-11.05,24.80],[-20.06,-10.99,24.32],[-20.24,-10.97,23.89],[-19.88,-10.93,23.51],[-19.88,-10.90,23.12],[-19.88,-10.85,22.73],[-19.70,-10.79,22.30],[-20.06,-10.73,21.88],[-19.52,-10.67,21.55],[-19.52,-10.61,21.22],[-19.34,-10.56,20.89],[-19.16,-10.48,20.53],[-19.34,-10.40,20.16],[-19.16,-10.35,19.84],[-18.98,-10.29,19.55],[-19.16,-10.23,19.18],[-19.16,-10.12,19.00],[-18.80,-10.07,18.65],[-18.63,-10.01,18.34],[-18.45,-9.94,17.97],[-18.80,-9.87,17.79],[-18.45,-9.80,17.47],[-18.28,-9.72,17.19],[-18.11,-9.67,16.91],[-18.28,-9.58,16.61],[-18.28,-9.51,16.40],[-18.28,-9.42,16.05],[-17.94,-9.34,15.86],[-18.28,-9.27,15.67],[-17.59,-9.19,15.36],[-17.59,-9.13,15.14],[-17.94,-9.03,14.98],[-16.92,-8.94,14.70],[-17.43,-8.86,14.53],[-16.92,-8.79,14.28],[-16.92,-8.70,14.18],[-16.92,-8.65,15.93],[-17.59,-8.59,17.57],[-16.92,-8.52,19.47],[-17.43,-8.49,21.24],[-17.59,-8.52,23.30],[-17.26,-8.51,25.50],[-17.76,-8.54,27.76],[-17.43,-8.58,30.22],[-18.11,-8.68,32.90],[-17.76,-8.79,35.84],[-18.11,-8.88,38.65],[-18.98,-8.96,41.88],[-18.28,-9.12,45.05],[-18.28,-9.29,48.34],[-18.63,-9.43,51.85],[-18.63,-9.57,55.45],[-19.52,-9.82,59.27],[-18.98,-10.01,63.01],[-19.70,-10.24,67.14],[-21.18,-10.43,71.26],[-20.99,-10.67,75.46],[-20.24,-10.86,79.78],[-20.24,-11.11,84.12],[-21.18,-11.31,88.58],[-21.56,-11.55,93.24],[-21.75,-11.84,97.89],[-22.34,-12.07,102.63],[-21.37,-12.21,107.75],[-21.95,-12.44,112.90],[-22.14,-12.64,118.06],[-21.95,-12.82,123.44],[-22.74,-13.09,128.78],[-22.94,-13.26,134.13],[-22.74,-13.48,139.71],[-23.96,-13.66,145.36],[-22.94,-13.81,151.09],[-24.17,-14.02,156.84],[-24.59,-14.17,162.77],[-23.55,-14.36,168.99],[-23.96,-14.47,175.41],[-24.17,-14.64,181.83],[-24.38,-14.73,188.30],[-24.38,-14.92,194.71],[-24.59,-14.99,201.51],[-24.38,-15.12,208.09],[-24.38,-15.28,214.75],[-24.17,-15.35,221.57],[-24.38,-15.48,228.47],[-25.68,-15.60,235.57],[-25.90,-15.67,242.72],[-25.24,-15.82,249.87],[-24.59,-15.95,256.93],[-24.81,-16.13,263.96],[-25.02,-16.27,271.24],[-26.35,-16.41,278.22],[-25.90,-16.59,285.50],[-25.90,-16.75,293.28],[-26.35,-16.82,300.94],[-25.90,-17.00,308.81],[-27.51,-17.02,316.70],[-27.51,-17.08,324.64],[-27.04,-17.19,332.83],[-27.75,-17.31,341.24],[-26.81,-17.38,349.66],[-27.99,-17.48,358.26],[-26.81,-17.56,366.98],[-25.68,-17.63,375.80],[-27.27,-17.70,384.68],[-26.12,-17.71,393.73],[-26.12,-17.74,402.65],[-27.27,-17.82,411.72],[-26.58,-17.82,420.77],[-26.81,-17.85,429.81],[-26.12,-17.88,438.87],[-27.51,-17.88,448.19],[-26.12,-17.88,457.40],[-25.90,-17.84,466.78],[-26.81,-17.82,476.15],[-26.58,-17.73,485.45],[-26.58,-17.72,494.92],[-27.04,-17.70,504.54],[-25.90,-17.64,514.03],[-25.90,-17.56,523.71],[-25.90,-17.48,533.42],[-25.46,-17.36,543.36],[-25.46,-17.30,553.01],[-25.02,-17.15,563.00],[-25.24,-17.00,573.05],[-23.96,-16.82,583.06],[-23.75,-16.68,592.97],[-24.17,-16.55,602.94],[-23.14,-16.31,612.79],[-24.38,-16.09,622.46],[-23.75,-15.91,632.62],[-22.34,-15.73,642.79],[-22.34,-15.44,653.58],[-22.74,-15.26,664.23],[-22.74,-15.03,675.21],[-22.74,-14.74,686.76],[-21.56,-14.54,698.45],[-21.37,-14.24,710.46],[-21.18,-14.01,721.58],[-20.61,-13.73,733.14],[-21.18,-13.48,745.14],[-20.43,-13.22,757.18],[-18.98,-12.96,769.01],[-19.52,-12.66,781.01],[-18.80,-12.39,793.20],[-17.94,-12.10,805.36],[-17.76,-11.82,817.04],[-17.59,-11.47,828.87],[-17.76,-11.21,840.82],[-16.92,-10.86,853.49],[-16.26,-10.58,866.45],[-16.43,-10.27,878.90],[-15.78,-9.92,891.03],[-15.46,-9.57,903.61],[-15.14,-9.17,915.59],[-14.36,-8.84,926.32],[-13.90,-8.48,936.41],[-13.60,-8.14,946.32],[-13.29,-7.79,956.57],[-13.14,-7.43,967.62],[-12.99,-7.00,979.80],[-12.40,-6.58,991.18],[-11.11,-6.19,1003.43],[-11.25,-5.81,1005.93],[-10.68,-5.56,1005.90],[-9.99,-5.30,1005.91],[-9.99,-5.04,1005.93],[-9.57,-4.77,1005.91],[-9.44,-4.48,1005.98],[-9.03,-4.20,1005.89],[-8.76,-3.91,1005.80],[-8.23,-3.60,1005.81],[-7.57,-3.29,1005.92],[-7.83,-3.00,1005.96],[-7.70,-2.72,1005.88],[-6.92,-2.46,1005.84],[-7.05,-2.17,1005.93],[-6.16,-1.91,1005.90],[-5.90,-1.66,1005.92],[-5.53,-1.41,1005.87],[-5.78,-1.18,1005.85],[-5.53,-0.93,1005.85],[-5.03,-0.67,1005.81],[-4.66,-0.41,1005.90],[-4.41,-0.18,1005.74],[-4.17,0.08,1005.92],[-3.93,0.33,1005.88],[-3.93,0.56,1005.82],[-3.69,0.82,1005.87],[-3.09,1.04,1005.86],[-2.73,1.27,1005.86],[-2.97,1.49,1005.81],[-2.61,1.71,1005.87],[-2.02,1.93,1005.88],[-2.26,2.12,1005.83],[-2.37,2.35,1005.80],[-1.79,2.56,1005.87],[-1.44,2.78,1005.89],[-1.09,2.99,1005.91],[-0.86,3.19,1005.88],[-0.75,3.38,1005.79],[-0.63,3.61,1005.90],[-0.06,3.83,1005.99],[-0.29,4.01,1005.89],[0.05,4.21,1005.95],[0.05,4.42,1005.93],[0.27,4.60,1005.90],[0.39,4.79,1005.85],[1.06,5.00,1005.91],[0.95,5.18,1005.92],[1.39,5.35,1005.82],[1.61,5.57,1005.93],[1.84,5.75,1005.91],[1.84,5.92,1005.93],[2.17,6.12,1005.96],[2.38,6.29,1005.91],[2.49,6.48,1005.90],[2.93,6.70,1006.01],[2.49,6.87,1005.91],[3.25,7.06,1005.96],[3.36,7.23,1005.92],[3.58,7.38,1005.89],[3.58,7.55,1005.96],[3.79,7.70,1005.92],[3.79,7.88,1006.04],[4.22,8.06,1006.01],[4.22,8.22,1006.00],[4.33,8.37,1005.92],[4.54,8.52,1005.99],[4.65,8.67,1005.96],[4.75,8.85,1006.00],[4.97,9.02,1005.94],[5.28,9.18,1005.97],[5.71,9.36,1005.97],[5.50,9.53,1006.02],[5.71,9.69,1006.05],[6.02,9.86,1006.03],[6.33,9.98,1006.05],[6.33,10.15,1006.06],[6.44,10.25,1006.03],[6.75,10.41,1006.05],[6.75,10.55,1006.00],[6.86,10.68,1006.01],[7.06,10.85,1006.09],[7.06,10.98,1006.07],[7.17,11.13,1006.00],[7.58,11.30,1006.10],[7.68,11.42,1006.06],[7.58,11.58,1006.03],[7.99,11.69,1006.11],[7.89,11.84,1006.05],[7.99,12.00,1006.04],[8.61,12.14,1006.00],[8.61,12.26,1006.03],[8.40,12.38,1006.00],[8.51,12.50,1006.07],[8.81,12.64,1006.08],[8.81,12.78,1006.09],[9.22,12.90,1006.07],[9.32,13.02,1006.00],[9.42,13.16,1006.10],[9.63,13.25,1006.08],[9.53,13.41,1006.07],[9.83,13.55,1006.08],[9.93,13.68,1006.06],[10.03,13.83,1006.07],[10.23,13.96,1006.12],[10.44,14.09,1006.17],[10.64,14.18,1006.06],[10.64,14.32,1006.17],[10.64,14.42,1006.06],[10.94,14.54,1006.09],[10.84,14.66,1006.17],[11.24,14.78,1006.10],[11.34,14.88,1006.10],[11.34,15.00,1006.06],[11.64,15.14,1006.11],[11.54,15.25,1006.11],[11.64,15.38,1006.06],[12.05,15.49,1006.10],[12.05,15.53,1006.16],[11.94,15.60,1006.05],[12.05,15.70,1006.10],[12.25,15.73,1006.05],[12.25,15.79,1006.03],[12.25,15.83,1006.11],[12.35,15.88,1006.09],[12.54,15.96,1006.06],[12.64,16.05,1006.07],[12.44,16.15,1006.07],[12.54,16.24,1006.07],[12.84,16.35,1006.06],[12.74,16.46,1005.98],[13.04,16.61,1006.09],[13.24,16.75,1006.11],[13.44,16.90,1006.07],[13.34,17.05,1006.05],[13.94,17.20,1006.03],[13.94,17.37,1006.03],[14.14,17.48,1006.03],[14.24,17.61,1006.04],[14.43,17.75,1006.05],[14.63,17.85,1006.05],[14.63,17.95,1006.00],[14.73,18.07,1006.03],[14.93,18.15,1006.02],[15.03,18.28,1006.05],[15.23,18.42,1006.11],[15.13,18.53,1006.12],[15.13,18.61,1006.13],[15.42,18.66,1006.09],[15.52,18.72,1006.04],[15.42,18.81,1006.09],[15.72,18.90,1006.08],[15.72,18.97,1006.12],[15.92,19.06,1006.18],[15.72,19.08,1006.17],[15.82,19.12,1006.20],[15.92,19.16,1006.07],[15.92,19.24,1006.12],[15.92,19.28,1006.12],[16.02,19.33,1006.13],[15.92,19.38,1006.22],[16.02,19.44,1006.24],[16.12,19.44,1006.18],[16.12,19.51,1006.27],[16.21,19.53,1006.21],[16.12,19.56,1006.17],[16.31,19.61,1006.20],[16.41,19.66,1006.20],[16.51,19.74,1006.30],[16.31,19.80,1006.26],[16.61,19.87,1006.29],[16.71,19.94,1006.35],[16.61,20.01,1006.25],[16.81,20.09,1006.41],[16.81,20.13,1006.37],[17.00,20.20,1006.41],[16.81,20.25,1006.40],[16.90,20.26,1006.49],[17.10,20.29,1006.49],[17.00,20.34,1006.38],[17.00,20.40,1006.51],[17.00,20.37,1006.48],[17.00,20.42,1006.49],[17.00,20.59,1006.44],[17.10,20.74,1006.46],[17.20,20.79,1006.58],[17.30,20.82,1006.61],[17.30,20.83,1006.61],[17.30,20.83,1006.61],[17.30,20.88,1006.65],[17.59,20.90,1006.60],[17.50,20.92,1006.66],[17.40,20.81,1007.12],[17.30,20.72,1006.92],[17.69,20.80,1006.95],[17.79,20.92,1006.91],[17.79,20.95,1007.04],[17.69,20.89,1007.02],[17.50,20.90,1006.92],[17.69,20.94,1007.11],[17.89,20.97,1007.04],[17.79,21.02,1007.00],[17.99,21.08,1007.03],[18.19,21.15,1007.05],[18.48,21.28,1007.03],[18.68,21.40,1006.95],[18.88,21.55,1007.04],[19.07,21.68,1007.08],[19.07,21.76,1007.04],[18.97,21.81,1007.02],[19.17,21.87,1006.94],[19.07,22.02,1006.90],[19.37,22.15,1007.05],[19.17,22.18,1007.09],[19.17,22.19,1006.99],[19.27,22.21,1007.01],[19.27,22.19,1007.00],[19.47,22.23,1007.15],[19.27,22.30,1006.89],[19.47,22.39,1007.08],[19.47,22.48,1006.99],[19.57,22.42,1007.06],[19.07,22.47,1007.06],[19.27,22.26,1006.90],[18.28,21.21,1006.95],[17.30,20.46,1006.84],[16.02,19.50,1006.85],[15.03,18.75,1007.04],[14.53,18.32,1007.10],[13.64,17.48,1007.07],[13.14,17.02,1007.05],[13.24,16.85,1007.09],[12.94,16.43,1007.15],[12.74,15.86,1006.53],[11.04,14.99,1006.87],[10.74,14.56,1006.99],[10.13,14.12,1007.13],[9.53,13.76,1007.12],[9.53,13.73,1007.14],[9.32,13.62,1007.14],[9.32,13.23,1006.99],[9.22,13.23,1007.17],[8.81,12.99,1006.97],[8.61,12.71,1007.16]];
  var n=raw.length,labels=raw.map(function(_,i){return i+1});
  var t1=raw.map(function(r){return r[0]}),t2=raw.map(function(r){return r[1]}),pr=raw.map(function(r){return r[2]});
  var g='rgba(240,240,248,0.07)',tc='rgba(240,240,248,0.35)';
  var phases={id:'phases',beforeDraw:function(c){
    var ctx=c.ctx,ca=c.chartArea,x=c.scales.x;
    var rs=[{f:0,t:79,col:'rgba(46,140,240,0.04)'},{f:79,t:351,col:'rgba(46,140,240,0.09)'},{f:351,t:475,col:'rgba(46,140,240,0.06)'},{f:475,t:720,col:'rgba(46,140,240,0.02)'}];
    var ls=['GROUND','ASCENT','DESCENT','LANDED'];
    rs.forEach(function(r,i){
      var x1=x.getPixelForValue(r.f),x2=x.getPixelForValue(r.t);
      ctx.save();ctx.fillStyle=r.col;ctx.fillRect(x1,ca.top,x2-x1,ca.bottom-ca.top);
      ctx.fillStyle='rgba(240,240,248,0.2)';ctx.font='9px JetBrains Mono,monospace';
      ctx.fillText(ls[i],x1+5,ca.top+11);ctx.restore();
    });
  }};
  var tip={backgroundColor:'#13131E',borderColor:'rgba(46,140,240,0.4)',borderWidth:1,titleColor:'rgba(240,240,248,0.5)',bodyColor:'#F0F0F8',titleFont:{family:'JetBrains Mono',size:10},bodyFont:{family:'JetBrains Mono',size:11}};
  var xScale={ticks:{color:tc,font:{family:'JetBrains Mono',size:9},maxTicksLimit:10},grid:{color:g},border:{color:g}};
  new Chart(document.getElementById('qset-temp-chart'),{type:'line',plugins:[phases],data:{labels:labels,datasets:[{label:'Thermistor (°C)',data:t1,borderColor:'#2E8CF0',borderWidth:1.5,tension:0.3,pointRadius:0},{label:'BMP180 (°C)',data:t2,borderColor:'#5AAEFF',borderWidth:1.5,borderDash:[4,3],tension:0.3,pointRadius:0}]},options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{display:false},tooltip:tip},scales:{x:xScale,y:{ticks:{color:tc,font:{family:'JetBrains Mono',size:9},callback:function(v){return v.toFixed(0)+'°'}},grid:{color:g},border:{color:g}}}}});
  new Chart(document.getElementById('qset-press-chart'),{type:'line',plugins:[phases],data:{labels:labels,datasets:[{label:'Pressure (hPa)',data:pr,borderColor:'#2E8CF0',borderWidth:1.5,tension:0.3,pointRadius:0,fill:true,backgroundColor:'rgba(46,140,240,0.06)'}]},options:{responsive:true,maintainAspectRatio:false,animation:false,plugins:{legend:{display:false},tooltip:tip},scales:{x:xScale,y:{type:'logarithmic',ticks:{color:tc,font:{family:'JetBrains Mono',size:9},callback:function(v){return v>=100?Math.round(v):v.toFixed(0)}},grid:{color:g},border:{color:g}}}}});
})();
</script>
</div>`,
          },
        },
        { type: "year", title: "2024" },
        {
          title: "Teaching the Fundamentals",
          body: "Both programs ran in parallel — university students through Space School, high schoolers through Connections to Space. Two different programs that taught the same skills: embedded systems, circuit design, soldering, and CAD.",
        },
        {
          title: "Logistics & Approvals",
          body: "There was no procedure for transporting pressurized helium to the launch site, which meant no clear path to regulatory approval. I wrote one from scratch. It satisfied the school's requirements, unblocked the launch, and became the standard for every QSET launch after it.",
        },
        {
          title: "Building the Hardware",
          body: "Students in both groups picked what excited them, designed their modules, and wired everything themselves. Missions ranged widely — one student wanted to measure radon at different altitudes, another set up cameras to capture images during the ascent.",
        },
        {
          title: "Launch Day",
          body: [
            "Launch windows are weather-dependent. Wind speed, direction, and upper atmosphere conditions all determine whether you can go that day. Once we got the green light, we were up before dawn — transporting the helium, filling the balloon on-site. Both satellites went up on the same balloon.",
            "Then we waited, and drove. The payload had a GPS tracker and for about two hours we followed it across the map, watching altitude climb in real time. When it burst and started descending we figured out where it was going to land and drove to meet it. We found it in a field, still intact.",
          ],
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "I created a program that gave at-risk youth a real aerospace engineering experience. I built a partnership between a student engineering team and a university outreach department that is still intact today, years later. And I wrote a safety protocol that enabled future launches.",
      ],
      stats: [
        { val: "2", label: "Launches" },
        { val: "75", label: "Students" },
        { val: "↑40%", label: "Retention" },
        { val: "↓15%", label: "Mission Costs" },
      ],
    },
    blocks: [],
  },

  {
    id: "gesture-car",
    published: true,
    type: "sw",
    tabs: ["built", "led"],
    title: "Gesture Controlled Car",
    emoji: "🚗",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392702/gesture-controlled-car-no-background_gdzrps.png",
    label: "Software · Embedded",
    desc: "A vehicle controlled entirely by wrist orientation — built for engineering outreach, now one of its most popular programs ever.",
    previewDesc:
      "This started with data. I analyzed participant feedback trends from previous years at Connections and saw a clear signal: students wanted more technically advanced projects. So I designed one from scratch.\n\nThe goal: control a car's movement by tilting your wrist, no buttons. An MPU-6050 accelerometer on a wrist controller reads pitch and roll, translating orientation directly into drive commands sent via Arduino to an H-bridge motor controller driving four DC wheels.\n\nThe first prototype was wireless with three motors. Testing showed it was too unreliable and complex for participants to replicate in a workshop setting. I redesigned it: four motors, wired control, simpler and more robust. The right call for the context.\n\nThe result became the highest-rated project in 20+ summer programs at Connections, with 95% participant satisfaction. Its success directly led to the expansion of the mechatronics program.",
    tags: ["Arduino", "C++", "IMU", "Motor Control", "Embedded Systems"],
    url: "projects/gesture-car.html",

    heroTitle: "Gesture Controlled <em>Car.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "I analyzed participant feedback from previous years at Connections Engineering Outreach and saw a consistent pattern: students wanted more technically advanced projects. The existing curriculum wasn't meeting them where they wanted to be.",
        "So I designed something harder. The goal was a project that felt like real engineering to a high schooler: meaningful sensors, non-trivial code, a control interface that disappears and lets the user just drive. No buttons to learn. Tilt your wrist; the car goes that direction.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Two prototypes, one honest pivot, one final design built to be replicable by participants with varying experience.",
      steps: [
        {
          title: "Component selection for a workshop context",
          body: "Component choices were constrained by two things: cost (each kit would be replicated across many participants) and reliability (every kit had to work the first time, in a crowded room, without debugging support). Chose Arduino Uno for compatibility and affordability, MPU-6050 accelerometer for gesture sensing, L298N H-bridge motor driver for the drive system.",
        },
        {
          title: "First prototype: wireless, three motors",
          body: "Initial design used wireless communication between controller and car, with three motors. Testing revealed two problems: wireless was unreliable in a crowded RF environment, and three-motor drive was too mechanically complex for participants to assemble and debug independently. Both issues would have killed the workshop.",
        },
        {
          title: "Redesign: wired, four motors",
          body: "Replaced wireless with a wired tether (simpler, more reliable, cheaper), switched to four DC motors in a standard differential drive configuration. Four motors is actually a cleaner mechanical design — more stable, better turning, easier to wire. The redesign solved the failure modes without sacrificing the core experience.",
        },
        {
          title: "Code and calibration",
          body: "The IMU reads pitch and roll in real time. Pitch controls forward/back speed; roll controls turn rate. The code maps these values to PWM signals on the H-bridge, with a deadband in the center so the car holds still when the wrist is level. Threshold-tuned until control felt responsive without being twitchy.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "The gesture-controlled car became the highest-rated project in 20+ summer programs at Connections, with 95% participant satisfaction. More importantly, its success demonstrated that high schoolers could engage with — and succeed at — genuinely advanced embedded systems content. The program expanded as a direct result. The first prototype failing was the right outcome: it found the constraints early, and the redesign solved for the actual use case rather than the ideal one.",
      ],
      stats: [
        { val: "#1", label: "Rated of 20+ Projects" },
        { val: "95%", label: "Participant Satisfaction" },
        { val: "2", label: "Prototype Iterations" },
        { val: "1", label: "Program Expansion" },
      ],
    },
    blocks: [],
  },

  {
    id: "baymax",
    published: true,
    type: "hw",
    tabs: ["built"],
    title: "Baymax Robotic Arm",
    emoji: "🤖",
    thumbnail:
      "https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392198/baymaxArmColor-removebg-preview_xh1guw.png",
    label: "Hardware · Mechanisms",
    desc: "A life-sized soft robotic arm designed for human interaction — engineered so it physically cannot hurt you.",
    previewDesc:
      "I owned the elbow of a soft Baymax replica — 2 DOF, foldable, proportionally faithful, inherently safe to touch.\n\nFirst design: cable-driven universal joint. Simulation showed it would compromise arm proportions. Second design: belt-driven differential with motors relocated to the shoulder, reducing forearm torque and keeping the joint slim.\n\nFinal arm: carbon fiber core, inflatable outer segments, pressurized polyethylene cover. No rigid surface ever exposed to a user — the material is the safety system.",
    tags: ["Mechanisms", "CAD", "Simulation", "Fusion 360", "Safety Design"],
    url: "projects/baymax.html",

    heroTitle: "Baymax Robotic <em>Arm.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "I was given a clear brief: design the elbow of a soft Baymax replica capable of meaningful gestures — fist bump, high-five, hug — while preserving the soft, friendly aesthetic that defines the character. Beyond the mechanics, there was a safety requirement baked into the premise: this robot would interact with people directly. The design had to be inherently safe, not just software-safe.",
        "My responsibility was the elbow joint. The constraints were tight: 2 degrees of freedom, foldable for storage, proportionally faithful to Baymax, and soft enough that a person could touch it without risk.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Two full design iterations, driven by simulation and hand calculations at each stage.",
      steps: [
        {
          title: "Cable-driven universal joint (first iteration)",
          body: "My initial design used a cable-driven universal joint at the elbow: three cables spaced 120° apart, running through a hollow carbon fiber core, controlled by linear actuators in the upper arm. The top cable controlled vertical lift; the two side cables controlled lateral rotation, enabling a hug. Technically sound on paper — but simulation revealed it would compromise the arm's proportions to fit all the components.",
        },
        {
          title: "Belt-driven differential (second iteration)",
          body: "I redesigned around a belt-driven differential: two stepper motors in the shoulder driving through V-belts and bevel gears to give the elbow its 2 DOF. Same motors rotating in the same direction lifts the arm vertically; opposite rotation swings it laterally. Moving the motors to the shoulder dramatically reduced torque requirements on the forearm and kept the elbow slim enough to look right.",
        },
        {
          title: "Final assembly and integration",
          body: "The final arm: carbon fiber inner core for rigidity, three inflatable outer segments for softness and coverage, and a lightly pressurized polyethylene cover that gives Baymax his continuous balloon appearance. Hand cables route from fingers to shoulder through the hollow core. The soft exterior means no rigid surface is ever exposed to a user — the material is the safety system.",
        },
      ],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "The belt-driven differential passed simulation testing and hand calculations, demonstrating both the strength and precision needed for repeatable gestures. The design also solved a secondary problem: by routing all actuation to the shoulder, the forearm stayed light and the shoulder motors stayed within torque limits. The iterative process — cable joint first, differential second — was the right call. The first design found the problem; the second solved it.",
      ],
      stats: [
        { val: "2", label: "Design Iterations" },
        { val: "2 DOF", label: "Elbow Articulation" },
        { val: "3", label: "Gesture Types" },
        { val: "0", label: "Rigid Surfaces Exposed" },
      ],
    },
    blocks: [],
  },

  {
    id: "survey-tool",
    published: false,
    type: "sw",
    tabs: ["built"],
    title: "Survey Automation Tool",
    emoji: "🐍",
    thumbnail: null,
    label: "Software · Python",
    desc: "A Python tool that turned a 4-hour manual process into a 2-minute one. 99.2% of the work, gone.",
    previewDesc:
      "The process was survey data collection and participant management for engineering outreach programs — done manually each cycle, taking roughly 4 hours. I built a Python tool that automated ingestion, parsing, analysis, and output generation end-to-end. No external services, no dependencies beyond Python.\n\nThe result was a 99.2% reduction in processing time and a process that now runs consistently without error. The tool also freed up staff time that had been spent on data entry, redirecting it toward actual program work. Sometimes the most impactful engineering is the kind that makes something tedious just disappear.",
    tags: ["Python", "Automation", "Data Processing"],
    url: "#",

    heroTitle: "Survey Automation <em>Tool.</em>",
    purpose: {
      heading: "Why I <em>built this.</em>",
      body: [
        "A Python tool that turned a 4-hour manual process into a 2-minute one. 99.2% of the work, gone.",
      ],
    },
    process: {
      heading: "How I <em>built it.</em>",
      summary:
        "Automated ingestion, parsing, analysis, and output generation end-to-end.",
      steps: [],
    },
    result: {
      heading: "What I <em>made.</em>",
      body: [
        "A 99.2% reduction in processing time and a process that now runs consistently without error.",
      ],
      stats: [],
    },
    blocks: [],
  },
];
