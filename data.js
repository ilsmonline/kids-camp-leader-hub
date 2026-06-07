const contacts = [
  {
    role: 'Kids Camp Director',
    name: 'Patti Chapman',
    phone: '(417) 429-7862',
    photo: 'photos/patti-chapman.jpg'
  },
  {
    role: 'Kids Camp Director',
    name: 'Zach Krause',
    phone: '(763) 614-7531',
    photo: 'photos/zach-krause.jpeg'
  },
  {
    role: 'Student Director (Male Dean)',
    name: 'Luke Marsiglio',
    phone: '(515) 771-8415',
    photo: 'photos/Luke Marsiglio - Male Dean.jpg'
  },
  {
    role: 'Student Director (Male Dean)',
    name: 'Lucas Yantz',
    phone: '(502) 810-4714',
    photo: 'photos/lucas-yantz.jpeg'
  },
  {
    role: 'Student Director (Male Dean)',
    name: 'Micah Hinckley',
    phone: '(217) 622-3142',
    photo: 'photos/micah-hinckley.jpeg'
  },
  {
    role: 'Student Director (Female Dean)',
    name: 'Abigail Marsiglio',
    phone: '(914) 513-1931',
    photo: 'photos/abigail-marsiglio.jpeg'
  },
  {
    role: 'Student Director (Female Dean)',
    name: 'Kaitlyn Deese',
    phone: '(417) 773-6873',
    photo: 'photos/kaitlyn-deese.jpeg'
  },
  {
    role: 'Student Director (Female Dean)',
    name: 'Rebecca Husbands',
    phone: '(314) 513-8070',
    photo: 'photos/rebecca-husbands.jpg'
  }
];

const schedule = {
  day1: [
    ["9:00 AM", "Registration Begins (til 1pm) - Outdoor Activities Available"],
    ["9:30 AM", "Swim Testing (til 1pm) - AC Indoor Pool"],
    ["11:00 AM", "Dining Hall Opens (til 12:30pm) - $6 Cash or Card"],
    ["12:30 PM", "SS Mtg to prep for Opening Rally - Admin"],
    ["1:00 PM", "Cabin Leader Orientation - Schneider Center"],
    ["1:00 PM", "Opening Rally - Auditorium"],
    ["1:30 PM", "Support Staff Mtg - Admin"],
    ["1:45 PM", "Cabin Leader/Camper Connect - Cabins"],
    ["2:00 PM", "Overflow Swim Testing (til 4pm)"],
    ["2:30 PM", "FREE TIME - AC"],
    ["4:30 PM", "Clean Up for Dinner - Cabins"],
    ["4:45 PM", "Dinner - 🟥🟧🟨"],
    ["5:15 PM", "Dinner - 🟩🟦🟪"],
    ["6:00 PM", "First-Time Cabin Leader Meeting - Schneider Center"],
    ["6:00 PM", "Opening Service - Auditorium"],
    ["7:30 PM", "Prayer Stations - Schneider Center - Mon 🟥🟦"],
    ["7:30 PM", "Overflow Swim Testing (til 9pm) - AC Indoor Pool"],
    ["7:30 PM", "Night Meds from Nurse 🟥🟧🟨 - Upstairs AC"],
    ["7:30 PM", "Evening Activities/Cafe/Store Open - AC/Grant/Lincoln"],
    ["8:15 PM", "Night Meds from Nurse 🟩🟦🟪 - Upstairs AC"],
    ["10:00 PM", "Cabin Time"],
    ["11:00 PM", "Lights Out"]
  ],

  day2: [
    ["7:00 AM", "Wake Up & Clean Up"],
    ["8:00 AM", "Breakfast - 🟥🟧🟨"],
    ["8:30 AM", "Breakfast - 🟩🟦🟪"],
    ["9:15 AM", "The Morning Show - Auditorium"],
    ["9:15 AM", "Cabin Leader Mtg - Schneider Center"],
    ["10:15 AM", "Boy's Dream - Auditorium"],
    ["10:15 AM", "Girls Team Comp - Refer to Activities Guide for Daily Locations"],
    ["11:15 AM", "Transition to Lunch"],
    ["11:30 AM", "Lunch - 🟥🟧🟨"],
    ["12:00 PM", "Lunch - 🟩🟦🟪"],
    ["12:45 PM", "Girls Dream - Auditorium"],
    ["12:45 PM", "Boys Team Comp - Refer to Activities Guide for Daily Locations"],
    ["2:00 PM", "FREE TIME - ALL (til 4:30PM) - AC & Outdoor Activities"],
    ["2:00 PM", "High Ropes - Green paper wristbands"],
    ["4:30 PM", "Clean Up for Dinner - Cabins"],
    ["4:45 PM", "Dinner - 🟥🟧🟨"],
    ["5:15 PM", "Dinner - 🟩🟦🟪"],
    ["6:00 PM", "Evening Service"],
    ["7:30 PM", "Prayer Stations - Schneider Center - Tues 🟨🟩"],
    ["7:30 PM", "Night Meds from Nurse 🟩🟦🟪 - Upstairs AC"],
    ["7:30 PM", "Evening Activities/Cafe/Store Open - AC/Grant/Lincoln"],
    ["8:15 PM", "Night Meds from Nurse 🟥🟧🟨 - Upstairs AC"],
    ["10:00 PM", "Cabin Time"],
    ["11:00 PM", "Lights Out"]
  ],

  day3: [
    ["7:00 AM", "Wake Up & Clean Up"],
    ["8:00 AM", "Breakfast - 🟥🟧🟨"],
    ["8:30 AM", "Breakfast - 🟩🟦🟪"],
    ["9:15 AM", "The Morning Show - Auditorium"],
    ["9:15 AM", "Cabin Leader Mtg - Schneider Center"],
    ["10:15 AM", "Boy's Dream - Auditorium"],
    ["10:15 AM", "Girls Team Comp - Refer to Activities Guide for Daily Locations"],
    ["11:15 AM", "Transition to Lunch"],
    ["11:30 AM", "Lunch - 🟥🟧🟨"],
    ["12:00 PM", "Lunch - 🟩🟦🟪"],
    ["12:45 PM", "Girls Dream - Auditorium"],
    ["12:45 PM", "Boys Team Comp - Refer to Activities Guide for Daily Locations"],
    ["2:00 PM", "FREE TIME - ALL (til 4:30PM) - AC & Outdoor Activities"],
    ["2:00 PM", "High Ropes - Yellow paper wristbands"],
    ["4:30 PM", "Clean Up for Dinner - Cabins"],
    ["4:45 PM", "Dinner - 🟥🟧🟨"],
    ["5:15 PM", "Dinner - 🟩🟦🟪"],
    ["6:00 PM", "Evening Service - Offering Night"],
    ["7:30 PM", "Prayer Stations - Schneider Center - Wed 🟪🟧"],
    ["7:30 PM", "Night Meds from Nurse 🟥🟧🟨 - Upstairs AC"],
    ["7:30 PM", "Evening Activities/Cafe/Store Open - AC/Grant/Lincoln"],
    ["8:15 PM", "Night Meds from Nurse 🟩🟦🟪 - Upstairs AC"],
    ["9:30 PM", "Camp Champ Announcement - Auditorium"],
    ["10:00 PM", "Cabin Time"],
    ["11:00 PM", "Lights Out"]
  ],

  day4: [
    ["7:00 AM", "Pack and Clean - Empty Cabins Completely / Room Checks"],
    ["8:30 AM", "Breakfast - 🟥🟧🟨"],
    ["9:15 AM", "Breakfast - 🟩🟦🟪"],
    ["10:00 AM", "Closing Service - Auditorium"],
    ["12:00 PM", "Departure - Sack Lunch available"]
  ]
};

const teamColors = {
  Red: '#ef4444',
  Orange: '#f97316',
  Yellow: '#eab308',
  Green: '#22c55e',
  Blue: '#3b82f6',
  Purple: '#8b5cf6'
};

const activityIntro = [
  {
    title: 'Team Cheers',
    body: 'Sometimes during games or tournaments, your team will be waiting its turn. During that time, be loud and show a ton of team spirit. Team chants and cheers can earn a bunch of bonus points. Getting the Activities Directors’ attention is a good thing, even when your team is not currently playing. Get crazy and get creative. Leaders set the tone, and when leaders are willing to be wild and engaged, students usually follow.'
  },
  {
    title: 'Good Sportsmanship',
    body: 'Cheering for other teams and keeping cool heads is good for your team and good for team points. These are fun and silly games, and we want students to try their hardest without sacrificing attitude. No student or leader should yell at support staff. No leader should publicly dispute the outcome of a game. If there is a concern about an unfair outcome, address it quietly and tactfully with support staff.'
  },
  {
    title: 'Winning the Dream',
    body: 'Winning the game or tournament earns big points, but it is not the only way to make progress. Even if your team does not win, you can still make up ground through cheering, having a good attitude, and participating well.'
  },
  {
    title: 'Participation',
    body: 'Whether it is your team’s turn to compete or you are waiting, leaders should encourage total involvement in playing and cheering. Be patient with kids who feel overwhelmed, but make a real effort to help students engage. Active students on the field often become more engaged students in service too.'
  },
  {
    title: 'Room Checks',
    body: 'Room checks can earn big points too. Deans are looking for clean rooms and visible team spirit. Some rooms have even created theme rooms, and that kind of creativity can lead to huge points.'
  }
];

const activityGroups = [
  {
    heading: 'ADD / Activities Director Dreams',
    note: 'Also listed on the schedule as Boys Dream and Girls Dream. All Dreams are played in the main auditorium.',
    items: [
      {
        title: 'Day 2: Pizzas vs. Chefs',
        label: 'ADD Dream - Auditorium',
        quick: 'Students collect ingredients while protecting their pizza boxes from noodle-wielding chefs.',
        paragraphs: [
          'The object of this game is to sneak up to the chef’s ingredient pool, which is a pool full of plastic balls, and take as many ingredients as possible to make the best pizzas in the world.',
          'Students will hold a cardboard pizza box waiter-style in one hand. They cannot use two hands or any other part of their body to stabilize the pizza box.',
          'Three chefs with pool noodles will stand inside kiddie pools filled with plastic balls. The chefs try to knock the pizza boxes out of the kids’ hands while the kids try to steal ingredients from the pools.',
          'The team that collects the most ingredients by the time the game is done wins the round.'
        ],
        bullets: [
          'If a student drops a pizza box, or if it is knocked out of their hand, they must return to the starting point and reset.',
          'If a student drops the pizza box while holding an ingredient, they must drop the ingredient where they lost the box.',
          'Students are not allowed to knock pizza boxes out of another team’s hands.',
          'Bins will be placed on each team’s side of the room. Cabin Leaders should not collect stray ingredients and put them in their bins.'
        ]
      },
      {
        title: 'Day 3: Feed the Monster',
        label: 'ADD Dream - Auditorium',
        quick: 'A relay-style game where teams move a Monster Meatball through multiple challenge legs and shoot it into the monster’s mouth.',
        paragraphs: [
          'This is a relay-style game. The objective is to transport a dodgeball, called the Monster Meatball, from the starting point to the monster’s mouth.',
          'Each round needs 20 people: 19 students and 1 Cabin Leader.'
        ],
        bullets: [
          'Hop Along Tarp: 6 students transport the dodgeball on a tarp while hopping. If the ball falls, they go back to the starting point.',
          'Treadmill: 4 students transport the dodgeball across the room without dropping it.',
          'Horsey Rider: 1 Cabin Leader rides the bouncing horse back across the auditorium. The more in character, the better.',
          'Scooter Riders: 4 students scoot the ball while staying connected with linked arms.',
          'Baby Food: 2 students do a blind pull of baby food and must finish it before moving on.',
          'Soccer Dribble: students dribble the dodgeball through cones and hand off to another dribbler.',
          'Shoot the Shot: one older/confident student shoots the dodgeball into the monster’s mouth. The team that feeds the monster first wins.'
        ]
      }
    ]
  },
  {
    heading: 'Team Competitions',
    note: 'Smaller competitions for fewer points. These focus on teamwork, participation, and fun.',
    items: [
      {
        title: 'Hand Ball',
        label: 'Team Competition - Small Gym / possible outdoor field',
        quick: 'A modified ultimate-frisbee-style game using a soft dodgeball and net goals.',
        paragraphs: [
          'Students go head-to-head by passing a ball back and forth and trying to score in the opposing team’s goal.',
          'The game is played 10 v 10, including the goalie. Team captains are responsible for subbing in new students every 5 minutes.',
          'Players may not run once they have the ball. Teams need to work together to score, and only one goalie is allowed.'
        ],
        bullets: [
          'No ball stripping. Defenders may block passes, swat passes out of the air, and intercept, but may not make physical contact.',
          'Only one goalie. Offense and defense must stay out of the goalie box.',
          'No jump shots or alley-oop style shooting.',
          'If the ball hits the ground, it is a turnover.',
          'No handoffs, only passes.',
          'No traveling with the ball.',
          'There will be multiple rounds with subs every 5 minutes, starting with older kids and then smaller kids.'
        ]
      },
      {
        title: 'Defender 2.0',
        label: 'Team Competition - Cottonwood Pavilion',
        quick: 'A dodgeball-style game where teams defend a tennis ball target on a cone.',
        paragraphs: [
          'Defender is a fun take on dodgeball. The point is not to get other players out. The point is to hit a defended target with dodgeballs.',
          'The targets are tennis balls on top of street cones. If the other team knocks your tennis ball off the cone, your team loses the round.',
          'Each team receives cardboard moving boxes. At the beginning of the match, teams get time to build a wall or fort to protect their target.'
        ],
        bullets: [
          'Once a cardboard box or part of your defense is knocked over, you cannot rebuild it during that round.',
          'If a box falls and knocks the tennis ball off the cone, that counts and your team loses the round.',
          'Students should think strategically and work together.'
        ]
      },
      {
        title: 'Steal the Treasure',
        label: 'Team Competition - Large Gym',
        quick: 'A new variation on Steal the Sock using treasure dodgeballs.',
        paragraphs: [
          'Each team has 15 players. Students are set up with a pool noodle down their back and a sock on top, similar to classic Steal the Sock.',
          'Opposing teams begin against opposite walls. Each team’s side will have 10 to 15 dodgeballs placed randomly as treasure.',
          'The goal is to move dodgeballs from the opposing team’s side to your own side while protecting your own treasure.'
        ],
        bullets: [
          'Getting caught means the sock was removed from the student’s pool noodle.',
          'If a student gets caught, they are not eliminated. They return to a Cabin Leader to get their sock reset.',
          'This game has timed rounds. The point is to collect the other team’s treasure and protect your own.',
          'The team with the most treasure at the end of the time limit wins the round.',
          'Random bigger and funnier treasures may be added. If the game is not working, it can always shift back to traditional Steal the Sock.'
        ]
      }
    ]
  }
];

const competitionSchedule = [
  {
    day: 'Day Two',
    dreams: [
      { time: '10:15 AM', title: "Boys' Dream", game: 'Pizza vs. Chefs', location: 'Auditorium' },
      { time: '12:45 PM', title: "Girls' Dream", game: 'Pizza vs. Chefs', location: 'Auditorium' }
    ],
    teamComps: [
      { game: 'Steal the Treasure', location: 'Gym 1 - Large Gym / Activities Center', matchups: ['Red v Green'] },
      { game: 'Defender 2.0', location: 'Cottonwood Pavilion', matchups: ['Orange v Purple'] },
      { game: 'Handball', location: 'Outdoor Field #3', matchups: ['Yellow v Blue'] }
    ]
  },
  {
    day: 'Day Three',
    dreams: [
      { time: '10:15 AM', title: "Boys' Dream", game: 'Feed the Monster Relay', location: 'Auditorium' },
      { time: '12:45 PM', title: "Girls' Dream", game: 'Feed the Monster Relay', location: 'Auditorium' }
    ],
    teamComps: [
      { game: 'Steal the Treasure', location: 'Gym 1 - Large Gym / Activities Center', matchups: ['Orange v Blue'] },
      { game: 'Defender 2.0', location: 'Cottonwood Pavilion', matchups: ['Red v Yellow'] },
      { game: 'Handball', location: 'Outdoor Field #3', matchups: ['Green v Purple'] }
    ]
  }
];

const highRopesSchedule = [
  {
    day: 'Day Two',
    wristband: 'Green paper wristbands',
    time: '2:00 PM during Free Time',
    students: [
      { name: 'Isaiah Struve', cabin: '104-106', church: 'Urbandale IA-New Hope AG' },
      { name: 'Judah Baartman', cabin: '112-114', church: 'Urbandale IA-New Hope AG' },
      { name: 'Bode Buntin', cabin: '112-114', church: 'Urbandale IA-New Hope AG' },
      { name: 'Georgina Cross', cabin: '203-205', church: 'Bloomington-Nexus Church' },
      { name: 'Nori Evans', cabin: '414-416', church: 'Greenville-The Bridge' },
      { name: 'Savannah Tibbitts', cabin: '418-420', church: 'Princeton-The People Church' },
      { name: 'Emily Smith', cabin: '501-503', church: 'Peru-Faith AG' },
      { name: 'Adelyn Rabe', cabin: '513-515', church: 'Alton-The River Church' },
      { name: 'Grace Cuff', cabin: '517-519', church: 'Alton-The River Church' },
      { name: 'Bridget Elliott', cabin: '517-519', church: 'Alton-The River Church' },
      { name: 'Lillie Gray', cabin: '517-519', church: 'Alton-The River Church' },
      { name: 'Hadleigh Ashby', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Aubrie Grant', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Jessalyn Herndon', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Penelope Leady', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Rylee Rabe', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Raylee Ragan', cabin: '518-520', church: 'Alton-The River Church' },
      { name: 'Lillee Hiserote', cabin: '605-607', church: 'Urbandale IA-New Hope AG' },
      { name: 'Addison Hornung', cabin: '605-607', church: 'Urbandale IA-New Hope AG' },
      { name: 'Clara Mitchell', cabin: '609', church: 'Urbandale IA-New Hope AG' },
      { name: 'Cruz Carlson', cabin: '614-616', church: 'Minier-Assembly of God' },
      { name: 'Axel Standley', cabin: '614-616', church: 'Minier-Assembly of God' },
      { name: 'DeAnna Bauer', cabin: '617-619', church: 'Minier-Assembly of God' },
      { name: 'William Heimer', cabin: '626-628', church: 'Alton-The River Church' },
      { name: 'Noah Miles', cabin: '626-628', church: 'Alton-The River Church' },
      { name: 'Max Ragan', cabin: '626-628', church: 'Alton-The River Church' },
      { name: 'Anthony Ventimiglia', cabin: '626-628', church: 'Alton-The River Church' },
      { name: 'Keegan Yates', cabin: '626-628', church: 'Alton-The River Church' },
      { name: 'Rustin Tuxhorn', cabin: 'C-04', church: 'Springfield-Calvary Church' },
      { name: 'Brayden Ulm', cabin: 'C-04', church: 'Springfield-Calvary Church' },
      { name: 'Isaiah Perez', cabin: 'C-07', church: 'Peru-Faith AG' },
      { name: 'Jaxon Grant', cabin: 'C-10', church: 'Alton-The River Church' },
      { name: 'Jackson Hawkins', cabin: 'C-10', church: 'Alton-The River Church' },
      { name: 'Wyatt Heimer', cabin: 'C-10', church: 'Alton-The River Church' },
      { name: 'Joseph Herndon', cabin: 'C-10', church: 'Alton-The River Church' },
      { name: 'Liam O’Connor', cabin: 'C-15', church: 'Marengo-First Assembly' },
      { name: 'Asa Aikman', cabin: 'C-21', church: 'Mattoon-The Fields Church' },
      { name: 'Milo Herbert', cabin: 'C-21', church: 'Mattoon-The Fields Church' },
      { name: 'Camden Ramsey', cabin: 'C-21', church: 'Mattoon-The Fields Church' },
      { name: 'Samuel Orrick', cabin: 'C-22', church: 'Mattoon-The Fields Church' }
    ]
  },
  {
    day: 'Day Three',
    wristband: 'Yellow paper wristbands',
    time: '2:00 PM during Free Time',
    students: [
      { name: 'David Salmons', cabin: '117-119', church: 'Camp Point-Assembly of God' },
      { name: 'Addelaide Brown', cabin: '223-225', church: 'Decatur-Life Foursquare Church' },
      { name: 'Laela Smith', cabin: '223-225', church: 'Decatur-Life Foursquare Church' },
      { name: 'Maybelle Eickleberry', cabin: '302', church: 'Decatur-Life Foursquare Church' },
      { name: 'Idella Matherly', cabin: '304', church: 'Decatur-Life Foursquare Church' },
      { name: 'Jackie Wells', cabin: '304', church: 'Decatur-Life Foursquare Church' },
      { name: 'Emery Jaques', cabin: '305', church: 'Mattoon-The Fields Church' },
      { name: 'Scarlett Fayhee', cabin: '307', church: 'Mattoon-The Fields Church' },
      { name: 'Avery Houk', cabin: '307', church: 'Mattoon-The Fields Church' },
      { name: 'Raelynn Webster', cabin: '406-408', church: 'Bethalto-Cornerstone Church' },
      { name: 'Kenzie Yates', cabin: '406-408', church: 'Bethalto-Cornerstone Church' },
      { name: 'Ona Benoit', cabin: '502-504', church: 'Elgin-Hope Culture Church' },
      { name: 'Lauren Grover', cabin: '522-524', church: 'Columbia-Life Community Church' },
      { name: 'Isa Meurer', cabin: '522-524', church: 'Columbia-Life Community Church' },
      { name: 'Marissa Reeves', cabin: '526-528', church: 'Columbia-Life Community Church' },
      { name: 'Jenna Kuehlem', cabin: '601-603', church: 'Sandwich-Harvest Chapel' },
      { name: 'Nathan Barngrover', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Levi Card', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Luke Card', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Oliver Cullins', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Nehemiah Duvick', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Connor Gauer', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Knute Gudmunson', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Jameson Smith', cabin: '602-604', church: 'Sandwich-Harvest Chapel' },
      { name: 'Gavin Butler', cabin: '606-608', church: 'Sandwich-Harvest Chapel' },
      { name: 'Ezekeil Martinez', cabin: '606-608', church: 'Sandwich-Harvest Chapel' },
      { name: 'Garrett Dell', cabin: '610-612', church: 'Mattoon-The Fields Church' },
      { name: 'Lincoln Gault', cabin: '610-612', church: 'Mattoon-The Fields Church' },
      { name: 'Kyden Hudson', cabin: '610-612', church: 'Mattoon-The Fields Church' },
      { name: 'Finn Flickema', cabin: '618-620', church: 'Elgin-Hope Culture Church' },
      { name: 'Ryker Good', cabin: '622-624', church: 'Decatur-Life Foursquare Church' },
      { name: 'Easton Pyle', cabin: '622-624', church: 'Decatur-Life Foursquare Church' },
      { name: 'Benny Howard', cabin: 'C-14', church: 'Camp Point-Assembly of God' },
      { name: 'Samuel Voelkel', cabin: 'C-16', church: 'Columbia-Life Community Church' },
      { name: 'Norah Forester', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' },
      { name: 'Maya Gomez', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' },
      { name: 'Charlotte Grandgeorge', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' },
      { name: 'Arly Harmon', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' },
      { name: 'Khloe McCaslin', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' },
      { name: 'Dakota Wittenauer', cabin: 'Cottonwood', church: 'Sandwich-Harvest Chapel' }
    ]
  }
];

const menuDays = [
  {
    day: 'Day One', date: 'Monday, June 8', meals: [
      { name: 'Lunch', time: '11:00 AM - 12:30 PM', serviceTimes: [{ time: 'Open Lunch', teams: [] }], items: ['Cold cuts, cheese, and buns', 'Salad bar / beverage center', 'Assorted desserts'] },
      { name: 'Dinner', time: '4:45 PM / 5:15 PM', serviceTimes: [{ time: '4:45 PM', teams: ['Red','Orange','Yellow'] }, { time: '5:15 PM', teams: ['Green','Blue','Purple'] }], items: ['Chicken tenders', 'Potato chips', 'Potato salad', 'Carrots with ranch packets', 'Orange drink / water', 'Ice cream sandwich'] }
    ]
  },
  {
    day: 'Day Two', date: 'Tuesday, June 9', meals: [
      { name: 'Breakfast', time: '8:00 AM / 8:30 AM', serviceTimes: [{ time: '8:00 AM', teams: ['Red','Orange','Yellow'] }, { time: '8:30 AM', teams: ['Green','Blue','Purple'] }], items: ['Cheese omelets (GF)', 'Sausage patties (GF)', 'Tater coins', 'French toast', 'Orange juice / water', 'Fruit Loops', 'Apples (GF, DF)'] },
      { name: 'Lunch', time: '11:30 AM / 12:00 PM', serviceTimes: [{ time: '11:30 AM', teams: ['Red','Orange','Yellow'] }, { time: '12:00 PM', teams: ['Green','Blue','Purple'] }], items: ['Sloppy Joes (GF) with bun', 'French fries', 'Mixed vegetables (GF)', 'Pink lemonade / water', 'Rice Krispie Treats'] },
      { name: 'Dinner', time: '4:45 PM / 5:15 PM', serviceTimes: [{ time: '4:45 PM', teams: ['Red','Orange','Yellow'] }, { time: '5:15 PM', teams: ['Green','Blue','Purple'] }], items: ['Hamburgers (GF) with bun', 'Hot dogs (GF) with bun', 'Au gratin potatoes', 'Broccoli (GF)', 'Lemonade / water', 'Sidekicks'] }
    ]
  },
  {
    day: 'Day Three', date: 'Wednesday, June 10', meals: [
      { name: 'Breakfast', time: '8:00 AM / 8:30 AM', serviceTimes: [{ time: '8:00 AM', teams: ['Red','Orange','Yellow'] }, { time: '8:30 AM', teams: ['Green','Blue','Purple'] }], items: ['Scrambled eggs (GF)', 'Sausage links (GF)', 'Tater triangles', 'Pancakes', 'Apple juice / water', 'Cocoa Puffs', 'Oranges'] },
      { name: 'Lunch', time: '11:30 AM / 12:00 PM', serviceTimes: [{ time: '11:30 AM', teams: ['Red','Orange','Yellow'] }, { time: '12:00 PM', teams: ['Green','Blue','Purple'] }], items: ['Pizza - 2 kinds', 'Waffle fries', 'Corn (GF)', 'Orange drink / water', 'Cookies'] },
      { name: 'Dinner', time: '4:45 PM / 5:15 PM', serviceTimes: [{ time: '4:45 PM', teams: ['Red','Orange','Yellow'] }, { time: '5:15 PM', teams: ['Green','Blue','Purple'] }], items: ['Mini corn dogs', 'Tater tots', 'California blend vegetables (GF)', 'Pink lemonade / water', 'Fudge bars'] }
    ]
  },
  {
    day: 'Day Four', date: 'Thursday, June 11', meals: [
      { name: 'Breakfast', time: '8:30 AM / 9:15 AM', serviceTimes: [{ time: '8:30 AM', teams: ['Red','Orange','Yellow'] }, { time: '9:15 AM', teams: ['Green','Blue','Purple'] }], items: ['Cheese omelets (GF)', 'Sausage patties (GF)', 'Tater triangles', 'French toast sticks', 'Assorted juices / water', 'Rice Krispies', 'Banana (GF)'] },
      { name: 'Lunch', time: 'Departure', serviceTimes: [{ time: 'Departure', teams: [] }], items: ['Sack lunch'] }
    ]
  }
];

const prayerStations = [
  { title: 'Pray for the World and Missions', url: 'files/prayer-stations/pray-for-the-world-and-missions.pdf' },
  { title: 'Pray for Your Family', url: 'files/prayer-stations/pray-for-your-family.pdf' },
  { title: 'Called', url: 'files/prayer-stations/called.pdf' },
  { title: 'Identity - Who God Says You Are', url: 'files/prayer-stations/identity-who-god-says-you-are.pdf' },
  { title: 'Make Your Mark', url: 'files/prayer-stations/make-your-mark.pdf' },
  { title: 'Filled with the Holy Spirit', url: 'files/prayer-stations/filled-with-the-holy-spirit.pdf' },
  { title: 'The Wonder of Worship', url: 'files/prayer-stations/the-wonder-of-worship.pdf' },
  { title: 'Pray for Healing', url: 'files/prayer-stations/pray-for-healing.pdf' },
  { title: 'Pray for Your Friends', url: 'files/prayer-stations/pray-for-your-friends.pdf' },
  { title: 'Pray for Unity', url: 'files/prayer-stations/pray-for-unity.pdf' },
  { title: 'Pray for Yourself', url: 'files/prayer-stations/pray-for-yourself.pdf' },
  { title: 'Shine in the Darkness', url: 'files/prayer-stations/shine-in-the-darkness.pdf' },
  { title: 'Make Time', url: 'files/prayer-stations/make-time.pdf' },
  { title: 'Pray for Your School', url: 'files/prayer-stations/pray-for-your-school.pdf' },
  { title: 'Pray for Your Church', url: 'files/prayer-stations/pray-for-your-church.pdf' },
  { title: 'Pray for Forgiveness', url: 'files/prayer-stations/pray-for-forgiveness.pdf' },
  { title: 'Pray for Your Pastors', url: 'files/prayer-stations/pray-for-your-pastors.pdf' }
];
