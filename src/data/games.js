const data = [
  {
    title: 'Star Exploder',
    website: 'https://js13kgames.com/entries/star-exploder',
    description: `Built With Kontra.js. A space exploration action game made for JS13k 2021.`,
    year: 2021,
  },
  {
    title: 'NONOCROSS',
    website: 'https://dwhiffing.itch.io/nonocross/',
    description: `Built With Phaser. A puzzle platforming game made for LOW REZ JAM 2021.`,
    year: 2021,
  },
  {
    title: 'Online Minesweeper',
    website: 'https://dwhiffing.github.io/sweep/',
    description: `Built With React/Colyseus. Sweep with friends.`,
    year: 2021,
  },
  {
    title: 'Woodland Annex',
    website: 'https://dwhiffing.itch.io/woodland-annex/',
    description: `Built With Phaser. A simple puzzle game made for GMTK 2021.`,
    year: 2021,
  },
  {
    title: 'Cards Against Luminosity',
    website: 'https://dwhiffing.github.io/cards-against-luminosity/',
    description: `Built With React. An incremental card game made for Incremental Jam 2021.`,
    year: 2021,
  },
  {
    title: 'Online Chess',
    website: 'https://daniel-chess.herokuapp.com/',
    description: `Built With React and Colyseus.  A simple heuristic AI.`,
    year: 2020,
  },
  {
    title: 'Online Deception',
    website: 'https://daniel-deception.herokuapp.com/',
    description: `Built With React and Colyseus.  A word based murder mystery game.`,
    year: 2020,
  },
  {
    title: 'Online Battleship',
    website: 'https://daniel-battleship.herokuapp.com/',
    description: `Built With React and Colyseus.  Play with up to 8 players!`,
    year: 2020,
  },
  {
    title: 'Space Crisis',
    website: 'https://dwhiffing.github.io/space-crisis',
    description: `Built With Phaser for Ludum Dare 2020.`,
    year: 2020,
  },
  {
    title: 'Machine',
    website: 'https://dwhiffing.github.io/machine',
    description: `Built With Vanilla JS for JS13K 2020.`,
    year: 2020,
  },
  {
    title: 'Wild Blue Yonder',
    website: 'https://dwhiffing.github.io/hexcode-showdown',
    description: `Built With Phaser for Hexcode Showdown 2020.`,
    year: 2020,
  },
  {
    title: 'Cleanup 98',
    website: 'https://dwhiffing.github.io/cleanup98',
    description: `Built With React for Incremental Game Jam 2020.`,
    year: 2020,
  },
  {
    title: 'Lightcycle',
    website: 'https://dwhiffing.github.io/lightcycle',
    description: `Built With Phaser for LOWREZJAM 2020.`,
    year: 2020,
  },
  {
    title: 'Light Pendulum',
    website: 'https://dwhiffing.github.io/pendulum-climber',
    description: `Built With Phaser for ScoreSpace Jam #9.`,
    year: 2020,
  },
  {
    title: 'Stranger Changer',
    website: 'https://dwhiffing.github.io/grocer',
    description: `Built With Phaser for GMTK Jam 2020.`,
    year: 2020,
  },
  {
    title: 'Quaranteam',
    website: 'https://dwhiffing.github.io/tojam2020',
    description: `Built With Phaser For Toronto Game Jam 2020.`,
    year: 2020,
  },
  // {
  //   title: 'Basketball',
  //   website: 'https://dwhiffing.github.io/basketball',
  //   description: `Built With Phaser.`,
  //   year: 2020,
  // },
  {
    title: 'Vagrant',
    website: 'https://dwhiffing.github.io/vagrant',
    description: `Built With Phaser for ODO Jam.`,
    year: 2020,
  },
  {
    title: 'Solitaire',
    website: 'https://dwhiffing.github.io/solitaire',
    description: `Built With React.`,
    year: 2020,
  },
  {
    title: 'Tawatomo',
    website: 'https://dwhiffing.github.io/tawatomo',
    description: `Built With Phaser for Global Game Jam 2020.`,
    year: 2020,
  },
  {
    title: 'Sudoku',
    website: 'http://dwhiffing.github.io/sudoku/',
    description: `Built With React.`,
    year: 2020,
  },
  {
    title: 'Poker',
    website: 'http://daniel-poker.herokuapp.com/',
    description: `Built With React + Colysseum.`,
    year: 2020,
  },
  {
    title: 'Hexacross',
    website: 'https://dwhiffing.github.io/hexacross',
    description: `Built With Phaser for Global Game Jam 2019.`,
    year: 2019,
  },
  {
    title: 'Incremental',
    website: 'http://dwhiffing.github.io/incremental/',
    description: `Built With React.`,
    year: 2019,
  },
  {
    title: 'Body Brigade',
    website: 'http://dwhiffing.github.io/games-on-demand/',
    description: `Built With Phaser for the Games On Demand Jam in 2017.`,
    year: 2017,
  },
  {
    title: 'Idle Game',
    website: 'http://dwhiffing.github.io/idle-game/',
    description: `Built With React.`,
    year: 2017,
  },
  {
    title: 'Stampede',
    website: 'https://dwhiffing.github.io/stampede/',
    description: `Built With Phaser for LOWREZJAM 2016.`,
    year: 2016,
  },
  {
    title: 'Stellar Pendulum',
    website: 'http://dwhiffing.github.io/stellar-pendulum/',
    description: `Built With Phaser for Ludum Dare Apr 2016.`,
    year: 2016,
  },
  {
    title: 'Siege',
    website: 'https://dwhiffing.github.io/ludumdare-2016/',
    description: `Built With Phaser for Ludum Dare Aug 2016.`,
    year: 2016,
  },
  {
    title: 'Vengeance With No Goal',
    website: 'http://dwhiffing.github.io/vengeance-with-no-goal/',
    description: `Built With Phaser for ToJam 2016.`,
    year: 2016,
  },
  {
    title: 'Snake & Bake',
    website: 'http://dwhiffing.github.io/snakebake/',
    description: `Built With Phaser for TOJam 2015.`,
    year: 2015,
  },
  {
    title: 'Fuse',
    website: 'http://dwhiffing.github.io/fuse/',
    description: `Built With Phaser.`,
    year: 2015,
  },
]

exports.data = data
