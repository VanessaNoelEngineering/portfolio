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
     type        — 'hw' | 'sw' | 'both'
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
    id:          'lego-minifig',
    published:   true,
    type:        'hw',
    title:       'Giant LEGO Minifigure',
    emoji:       '🧱',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776389372/Untitled_design_uiqoq8.png',
    label:       '3D Printing · Hobby',
    desc:        '10× scale fully articulated 3D printed LEGO Classic. ~90 hour print time, every joint moves.',
    previewDesc: 'A fully 3D printed, 10× scale model of a LEGO Classic Space Minifigure. Every joint articulates exactly like the original — from the rotating head to the movable arms and legs. Total print time was approximately 90 hours across multiple filament colours, with careful tolerance work to make all the snap-fit connections satisfying.',
    tags:        ['3D Printing', 'FDM', 'SolidWorks', 'Hobby'],
    url:         'projects/lego-minifig.html',
  },

  {
    id:          'mech-flower',
    published:   true,
    type:        'hw',
    title:       'Mechanical Flower',
    emoji:       '🌸',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776391800/mechanical-flower-full-size-no-background_ity0qm.png',
    label:       'Robotics · Mechanisms',
    desc:        'Robotic lotus that blossoms on touch — servo actuation, capacitive sensing, compliant mechanisms.',
    previewDesc: 'A robotic lotus that blossoms when touched. Combines capacitive touch sensing, servo actuation, and soft compliant mechanisms to create a smooth organic blooming motion. The challenge was designing linkages that mimic the natural movement of petals opening — no rigid snapping, just a gentle unfurl.',
    tags:        ['Robotics', 'Arduino', 'Servo Control', 'Mechanisms', 'Capacitive Sensing'],
    url:         'projects/mech-flower.html',
  },

  {
    id:          'baymax',
    published:   true,
    type:        'hw',
    title:       'Baymax Robotic Arm',
    emoji:       '🦾',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392198/baymaxArmColor-removebg-preview_xh1guw.png',
    label:       'Robotics · Human Interaction',
    desc:        'Baymax arm replica designed for safe, compliant human interaction with custom force control.',
    previewDesc: "An engineering replica of Baymax's arm from Big Hero 6, designed specifically for safe human interaction. Uses custom compliant linkages and force-controlled servos so the arm yields to external forces rather than resisting them. The goal was a robot that feels soft and safe to touch — like the real Baymax.",
    tags:        ['Robotics', 'Force Control', 'Mechanisms', 'Arduino', 'Human-Robot Interaction'],
    url:         'projects/baymax.html',
  },

  {
    id:          'satellite',
    published:   true,
    type:        'hw',
    title:       'Satellite Launches',
    emoji:       '🛰️',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392473/satellite-thumbnail-no-background_ur8htb.png',
    label:       'Aerospace · Hardware',
    desc:        'Small-scale satellites launched to the stratosphere via QSET, monitoring payload metrics in flight.',
    previewDesc: 'Small-scale satellites designed, built, and launched into the stratosphere through the Queens Space Engineering Team (QSET). Each satellite monitored critical payload metrics throughout the flight — temperature, pressure, altitude, and acceleration. Data was collected, analysed in Python, and used to improve future missions.',
    tags:        ['Aerospace', 'Embedded Systems', 'Arduino', 'PCB Design', 'Python', 'Data Analysis'],
    url:         'projects/satellite.html',
  },

  {
    id:          'replica-props',
    published:   true,
    type:        'hw',
    title:       'Replica Props',
    emoji:       '🎭',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776541582/Untitled_design_1_f2sfld.png',
    label:       '3D Printing · Prop Making',
    desc:        "Zelda masks and a life-sized Minecraft chicken — multi-part CAD, FDM printing, and hand-finishing.",
    previewDesc: "A collection of replica props built for the love of it. The Zelda set includes Majora's Mask and the Deku Mask — each modelled in multiple interlocking parts, printed in different filament colours, and hand-finished with sanding, priming, and painting to hit game-accurate detail. The Minecraft chicken is a life-sized recreation modelled to exact in-game proportions and scaled up to real-world size. Both projects are a reminder that engineering should bring joy.",
    tags:        ['3D Printing', 'FDM', 'CAD Modelling', 'Hand Finishing', 'Painting', 'Prop Making'],
    url:         'projects/masks.html',
  },

  {
    id:          'gesture-car',
    published:   true,
    type:        'sw',
    title:       'Gesture Controlled Car',
    emoji:       '🚗',
    thumbnail:   'https://res.cloudinary.com/dlxdxu3ac/image/upload/v1776392702/gesture-controlled-car-no-background_gdzrps.png',
    label:       'Arduino · Firmware',
    desc:        'IMU wrist gesture recognition controls an Arduino RC car in real-time. No buttons.',
    previewDesc: 'An Arduino-based RC car controlled entirely by wrist gestures — no buttons, no joystick. An IMU worn on the hand detects tilt and orientation in real time, which is translated into steering and throttle commands transmitted wirelessly to the car. Tilt forward to accelerate, lean left to turn.',
    tags:        ['Arduino', 'C++', 'IMU', 'Wireless Comms', 'Firmware', 'Embedded Systems'],
    url:         'projects/gesture-car.html',
  },

  {
    id:          'canadarm',
    published:   true,
    type:        'sw',
    title:       'LEGO Canadarm',
    emoji:       '🤖',
    thumbnail:   null,
    label:       'Arduino · Controls',
    desc:        'Wheel-motor interface, colour-sensor height adjustment, force-sensitive gripper activation.',
    previewDesc: 'A LEGO prototype of the Canadarm with a surprisingly sophisticated control system. A wheel-motor interface controls the main joint, a colour sensor adjusts height based on surface detection, and force-sensitive resistors in the gripper activate the clamp. Three different sensor modalities working together in one arm.',
    tags:        ['Arduino', 'C++', 'Control Systems', 'Sensor Fusion', 'LEGO', 'Robotics'],
    url:         'projects/canadarm.html',
  },

  {
    id:          'happytappy',
    published:   true,
    type:        'sw',
    title:       'Happy Tappy',
    emoji:       '💙',
    thumbnail:   null,
    label:       'Embedded · Open Source · WIP',
    desc:        'Open-source EMDR tapper making therapy more affordable. Active development.',
    previewDesc: 'An open-source, modular EMDR tapper designed to make Eye Movement Desensitization and Reprocessing therapy more affordable and accessible. EMDR tappers can cost hundreds of dollars — Happy Tappy is designed to cost a fraction of that while being customisable and easy to build. Currently in active development.',
    tags:        ['Embedded Systems', 'Arduino', 'Open Source', 'Healthcare', 'WIP'],
    url:         'projects/happytappy.html',
  },

];
