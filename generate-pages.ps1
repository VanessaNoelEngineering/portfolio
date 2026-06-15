# generate-pages.ps1
# Regenerates all 11 project HTML pages as minimal boilerplate templates.
# Run from the repo root: pwsh .\generate-pages.ps1

$pages = @(
  @{ file = 'baymax.html';          title = 'Baymax Robotic Arm';              id = 'baymax';          type = 'hw'   }
  @{ file = 'mech-flower.html';     title = 'Mechanical Flower';               id = 'mech-flower';     type = 'hw'   }
  @{ file = 'lego-minifig.html';    title = 'Giant LEGO Minifigure';           id = 'lego-minifig';    type = 'hw'   }
  @{ file = 'masks.html';           title = 'Replica Props';                   id = 'replica-props';   type = 'hw'   }
  @{ file = 'gesture-car.html';     title = 'Gesture Controlled Car';          id = 'gesture-car';     type = 'sw'   }
  @{ file = 'happytappy.html';      title = 'Happy Tappy';                     id = 'happy-tappy';     type = 'both' }
  @{ file = 'project-sonder.html';  title = 'Project Sonder';                  id = 'project-sonder';  type = 'both' }
  @{ file = 'qset-launches.html';   title = 'Stratospheric Satellite Launches'; id = 'qset-launches';  type = 'hw'   }
  @{ file = 'csa-outreach.html';    title = 'CSA Satellite Program';           id = 'csa-outreach';    type = 'both' }
  @{ file = 'stem-connections.html'; title = 'STEM Outreach Program';          id = 'stem-connections'; type = 'both' }
  @{ file = 'first-robotics.html';  title = 'FIRST Robotics Mentorship';       id = 'first-robotics';  type = 'both' }
)

foreach ($p in $pages) {
  $outPath = Join-Path $PSScriptRoot "projects\$($p.file)"

  $html = @"
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>$($p.title) — Vanessa Noel</title>
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
  <link href="https://fonts.googleapis.com/css2?family=Cabinet+Grotesk:wght@400;500;700;800;900&family=Instrument+Serif:ital@0;1&family=JetBrains+Mono:wght@300;400;500&display=swap" rel="stylesheet"/>
  <link rel="stylesheet" href="_shared.css"/>
  <script src="data.js"></script>
</head>
<body>

<script>
const PROJECT_CONFIG = { type: '$($p.type)', id: '$($p.id)' };
const _p={hw:['#2E8CF0','#5AAEFF'],sw:['#E8559A','#FF80BF'],both:['#7B5CEA','#A480FF']}[PROJECT_CONFIG.type];
document.documentElement.style.setProperty('--accent',_p[0]);
document.documentElement.style.setProperty('--accent2',_p[1]);
document.documentElement.style.setProperty('--accent-glow',
  PROJECT_CONFIG.type==='hw'?'rgba(46,140,240,.12)':
  PROJECT_CONFIG.type==='sw'?'rgba(232,85,154,.12)':'rgba(123,92,234,.12)');
</script>

<div id="cur"></div>
<div id="cur2"></div>

<nav class="top-nav">
  <a href="../index.html" class="nav-back">Back to Portfolio</a>
  <div class="nav-title">Vanessa Noel</div>
</nav>

<div class="tab-nav">
  <a href="#purpose" class="tab-link" data-section="purpose">Purpose</a>
  <a href="#process" class="tab-link" data-section="process">Process</a>
  <a href="#result"  class="tab-link" data-section="result">Result</a>
</div>

<section class="hero" id="top">
  <div class="hero-bg"></div>
  <div class="hero-pattern"></div>
  <div class="hero-accent-bg"></div>
  <div class="hero-content" id="hero-content"></div>
</section>

<section class="section" id="purpose">
  <div class="section-label reveal">Purpose</div>
  <div id="purpose-content"></div>
  <div id="blocks-after-purpose"></div>
</section>

<section class="section" id="process">
  <div class="section-label reveal">Process</div>
  <div id="process-content"></div>
  <div id="blocks-after-process"></div>
</section>

<section class="section" id="result">
  <div class="section-label reveal">Result</div>
  <div id="result-content"></div>
  <div id="blocks-after-result"></div>
</section>

<nav class="proj-nav"></nav>

<footer>
  <p>© 2025 Vanessa Noel</p>
  <div class="foot-links">
    <a href="http://www.linkedin.com/in/vanessa-noel-engineering" target="_blank">LinkedIn</a>
    <a href="../index.html">Portfolio</a>
    <a href="https://drive.google.com/uc?export=download&id=131lQYNBJ5ARIR6ctfGMtkI_jaZ1D5dqs" target="_blank">Resume</a>
  </div>
</footer>

<script src="_shell.js"></script>
</body>
</html>
"@

  # Write with UTF-8 encoding (no BOM)
  [System.IO.File]::WriteAllText($outPath, $html, [System.Text.UTF8Encoding]::new($false))
  Write-Host "Written: $($p.file)"
}

Write-Host "`nDone. $($pages.Count) files generated."
