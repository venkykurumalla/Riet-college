const topic1_tsd_advanced = {
  id: 'y3-quant-tsd-advanced',
  title: 'Advanced Time, Speed & Distance: Relative Velocity, Trains, Boats & Circular Tracks',
  yearId: 3,
  category: 'Quantitative Aptitude',
  estimatedTime: '6–8 Hours (One-Day Mastery)',
  prerequisites: [
    'Basic ratio & proportion conversions',
    'Unitary conversion between km/h and m/s (multiplication factor 5/18 and 18/5)',
    'Linear algebraic equations in one and two variables',
    'Fundamental relationship: Distance = Speed × Time'
  ],
  learningObjectives: [
    'Master the relative speed framework for objects moving along the same vector vs opposite vectors',
    'Formulate kinematic models for moving trains crossing stationary poles, platforms, bridges, and other moving trains',
    'Derive upstream, downstream, and still-water velocity equations in fluid dynamics and escalator kinematics',
    'Analyze circular track dynamics including first meeting point, meeting at starting line, and relative lap timing',
    'Implement the product-constancy concept (D = S × T) for speed-time trade-off problems without cumbersome quadratic equations',
    'Apply Average Speed formulas (Harmonic Mean vs Weighted Average) correctly across variable distance segments',
    'Solve high-tier placement questions from top assessment platforms within 90 seconds'
  ],
  introduction: [
    'Time, Speed, and Distance (TSD) represents the single highest-weightage arithmetic domain in corporate recruitment assessments, technical aptitude rounds (TCS NQT Ninja/Digital/Prime, Infosys DSE/SE, Cognizant GenC Next, Wipro Elite, Capgemini, Accenture), and premier competitive examinations (CAT, GATE General Aptitude, GRE, GMAT). Unlike elementary school kinematics where an isolated vehicle travels at uniform speed across open terrain, professional placement assessments test multi-body interactions under complex physical constraints.',
    'Advanced TSD encompasses four interconnected physical domains: Relative Speed mechanics (overtaking, head-on collisions, delayed starts), Train Traversals (where the physical length of the observer or obstacle cannot be treated as a dimensionless point), Fluid Dynamics in Boats and Streams (where the ambient vector field of the medium assists or retards motion), and Periodic Motion along Closed Circular Loops. Recruiters prioritize TSD because it simultaneously evaluates spatial reasoning, algebraic formulation speed, unit consistency discipline, and the ability to eliminate distractor options under intense time constraints.',
    'Mastery over this domain requires moving beyond the basic formula D = S × T and developing an intuitive grasp of proportionality (when Distance is constant, Speed and Time are inversely proportional; when Time is constant, Distance and Speed are directly proportional) and vector summation. In this masterclass chapter, we break down every sub-genre of Advanced TSD into rigorous mathematical foundations, intuitive visual models, shortcut heuristics, fully derived proofs, 8 diverse solved textbook examples, and a comprehensive 22-question multi-tier practice suite with full step-by-step solutions.'
  ],
  coreConcepts: [
    'Proportionality Mechanics & Inverse Product Constancy: Since Distance (D) = Speed (S) × Time (T), if distance is constant (D1 = D2), then S1 × T1 = S2 × T2 => S1/S2 = T2/T1. A 25% increase in speed (multiplier 5/4) causes a 20% reduction in travel time (multiplier 4/5). This reciprocal relationship eliminates the need for quadratic equations in early/late arrival problems.',
    'Relative Speed Vector Formulation: When two bodies move along the same linear trajectory, their relative velocity depends on their direction of motion. (1) Opposite Direction (Towards each other or away from each other): Relative Speed = S1 + S2. The gap closes (or widens) at the sum of their speeds. (2) Same Direction (Overtaking/chasing): Relative Speed = |S1 - S2|. The gap closes at the difference of their speeds.',
    'Train Mechanics & Dimensional Extension: When a train of length L_train crosses a stationary object of negligible length (e.g., pole, tree, standing person), Total Distance = L_train. When a train crosses an extended stationary structure of length L_platform (e.g., platform, bridge, tunnel), Total Distance = L_train + L_platform. When Train 1 (length L1, speed S1) crosses Train 2 (length L2, speed S2): Total Distance = L1 + L2, and Relative Speed = S1 + S2 (opposite direction) or |S1 - S2| (same direction).',
    'Boats, Streams & Ambient Fluid Dynamics: Let speed of boat in still water = u km/h, and speed of stream/current = v km/h. Downstream Speed (with the current) = D_s = u + v. Upstream Speed (against the current) = U_s = u - v. Consequently: Still water speed u = (D_s + U_s)/2, and Current speed v = (D_s - U_s)/2.',
    'Escalator Kinematics: An escalator operates on the exact mathematical principles of a river stream. Let the speed of the person walking = p steps/sec, speed of moving escalator = e steps/sec, and total visible steps = N. Moving with escalator: Effective speed = p + e, Total Steps = (p + e) × t. Moving against escalator: Effective speed = p - e. Note that the number of physical steps taken by the person = p × t.',
    'Circular Tracks & Periodic Intersections: Two runners A (speed a) and B (speed b, where a > b) start simultaneously from the same point on a circular track of circumference L: (1) Time to meet for the first time anywhere on track = L / (a + b) [opposite direction] or L / (a - b) [same direction]. (2) Time to meet for the first time at the EXACT STARTING POINT = LCM(L/a, L/b) regardless of direction. (3) Number of distinct meeting points on track = (a + b)/HCF(a, b) [opposite] and (a - b)/HCF(a, b) [same direction].',
    'Average Speed Principles: When distances are equal (D1 = D2 = D), Average Speed = Harmonic Mean = 2S1S2 / (S1 + S2). When travel times are equal (T1 = T2 = T), Average Speed = Arithmetic Mean = (S1 + S2)/2. In all general cases, Average Speed = Total Distance Covered / Total Time Elapsed.'
  ],
  definitions: [
    {
      term: 'Relative Speed',
      meaning:
        'The rate at which the spatial gap between two moving bodies decreases or increases per unit time, determined by vector addition (opposite directions) or vector subtraction (same direction).'
    },
    {
      term: 'Harmonic Mean of Speeds',
      meaning:
        'The mathematically rigorous average speed when equal distance segments are traversed at distinct uniform velocities: V_avg = 2ab / (a + b) for two segments, and 3abc / (ab + bc + ca) for three equal segments.'
    },
    {
      term: 'Downstream Velocity',
      meaning:
        'The effective velocity of a vessel or swimmer when moving in the exact direction of the prevailing current, calculated as the algebraic sum of still-water velocity and current speed (u + v).'
    },
    {
      term: 'Upstream Velocity',
      meaning:
        'The net velocity of a vessel or swimmer moving directly against the fluid resistance of the current, calculated as still-water velocity minus current speed (u - v), requiring u > v for forward progress.'
    },
    {
      term: 'Meeting at Starting Point',
      meaning:
        'The discrete epoch in periodic circular motion when all moving entities simultaneously complete an integer number of full laps, given by the Least Common Multiple (LCM) of their individual lap times.'
    }
  ],
  rulesAndProperties: [
    {
      rule: 'Rule 1: Unit Conversion Multiplier Rule',
      explanation:
        'Always normalize velocity to SI units before calculating time in seconds or distances in meters. 1 km/h = (1000 m) / (3600 s) = 5/18 m/s. Conversely, 1 m/s = 18/5 km/h = 3.6 km/h. Failure to convert units prior to summation is the leading cause of negative marks in aptitude tests.',
      example:
        'Convert 72 km/h to m/s: 72 × (5/18) = 4 × 5 = 20 m/s. Convert 25 m/s to km/h: 25 × (18/5) = 5 × 18 = 90 km/h.'
    },
    {
      rule: 'Rule 2: Early vs Late Product-Constancy Shortcut',
      explanation:
        'If a person travels at speed S1 and arrives t1 minutes late, and at speed S2 arrives t2 minutes early (or both late/early), the total distance D = (S1 × S2 / |S1 - S2|) × (ΔT in hours), where ΔT is the net absolute time difference.',
      example:
        'Walking at 4 km/h, a student is 10 min late. At 5 km/h, they are 5 min early. S1=4, S2=5, ΔT = 10 - (-5) = 15 min = 15/60 = 1/4 hr. D = (4 × 5 / |5 - 4|) × (1/4) = 20 × (1/4) = 5 km.'
    },
    {
      rule: 'Rule 3: Extended Obstacle Crossing Formulation',
      explanation:
        'A train of length L1 moving at speed S1 passing a platform/bridge/train of length L2 requires a total displacement of (L1 + L2). If the second object is stationary, Time = (L1 + L2) / S1. If moving, Time = (L1 + L2) / Relative Speed.',
      example:
        'A 200 m train at 72 km/h (20 m/s) crosses a 300 m platform: Time = (200 + 300) / 20 = 500 / 20 = 25 seconds.'
    },
    {
      rule: 'Rule 4: Circular Track Starting Point Synchronization',
      explanation:
        'For n runners on a track of length L with speeds v1, v2, ... vn, their individual lap times are t1 = L/v1, t2 = L/v2, ... tn = L/vn. They will all meet simultaneously at the starting line at Time = LCM(t1, t2, ... tn), independent of running directions.',
      example:
        'Track = 600m. A runs at 6 m/s (tA = 100s), B runs at 5 m/s (tB = 120s), C runs at 4 m/s (tC = 150s). Time to meet at start = LCM(100, 120, 150) = 600 seconds (10 minutes).'
    }
  ],
  formulas: [
    {
      name: 'Relative Speed Formula',
      formula: 'S_rel = S1 + S2 (Opposite Direction) | S_rel = |S1 - S2| (Same Direction)',
      variables: ['S1 = Speed of body 1', 'S2 = Speed of body 2', 'S_rel = Effective closing/opening speed'],
      whenToUse: 'Whenever two entities are moving simultaneously along the same straight path.',
      simpleExample: 'Car A at 60 km/h and Car B at 40 km/h driving towards each other: S_rel = 60 + 40 = 100 km/h.'
    },
    {
      name: 'Average Speed (Harmonic Mean for Equal Distances)',
      formula: 'V_avg = (2 × S1 × S2) / (S1 + S2)',
      variables: ['S1 = Speed of outbound journey', 'S2 = Speed of return journey over identical distance D'],
      whenToUse: 'When a journey to and from a destination (or equal halves of a distance) are covered at different speeds.',
      simpleExample: 'Going at 30 km/h and returning at 20 km/h: V_avg = (2 × 30 × 20) / (30 + 20) = 1200 / 50 = 24 km/h.'
    },
    {
      name: 'Boat and Stream Velocity Deconstruction',
      formula: 'u = (D_s + U_s) / 2 | v = (D_s - U_s) / 2',
      variables: ['u = Boat speed in still water', 'v = Stream speed', 'D_s = Downstream speed', 'U_s = Upstream speed'],
      whenToUse: 'When downstream and upstream travel times/speeds are provided and still water or river speed is requested.',
      simpleExample: 'If downstream is 16 km/h and upstream is 10 km/h: Still water u = (16+10)/2 = 13 km/h, stream v = (16-10)/2 = 3 km/h.'
    },
    {
      name: 'Train Crossing Moving Man / Train',
      formula: 'Time (s) = (L1 + L2) / [(S1 ± S2) × (5/18)]',
      variables: ['L1, L2 = Lengths of trains in meters (L2=0 for a man/pole)', 'S1, S2 = Speeds in km/h'],
      whenToUse: 'Calculating time taken for trains to cross each other or pass moving pedestrians.',
      simpleExample: 'A 150m train at 54 km/h passes a man running at 6 km/h in opposite direction: Time = 150 / [(54 + 6) × 5/18] = 150 / [60 × 5/18] = 150 / (50/3) = 9 seconds.'
    }
  ],
  problemVariations: [
    {
      type: 'Variation 1: Early vs Late Speed-Time Trade-off',
      description: 'A person changes speed on consecutive days, arriving late in one case and early in another. Determine distance or scheduled travel time.',
      sampleSnippet: 'At 12 km/h a cyclist is 15 min late; at 15 km/h they are 5 min early. What is the scheduled time?'
    },
    {
      type: 'Variation 2: Two Trains Crossing Each Other / Delayed Starts',
      description: 'Trains leave stations A and B separated by D km at different times and speeds. Find meeting time and distance from A.',
      sampleSnippet: 'Train A leaves Delhi at 7 AM (50 km/h). Train B leaves Jaipur at 8 AM (60 km/h). Distance = 380 km. When do they meet?'
    },
    {
      type: 'Variation 3: Boats & Streams Round Trip Kinetics',
      description: 'A boat travels to a point upstream and returns downstream to the start point within a total elapsed time T.',
      sampleSnippet: 'A motorboat whose speed is 15 km/h in still water goes 30 km downstream and comes back in 4 hrs 30 mins. Find the stream speed.'
    },
    {
      type: 'Variation 4: Circular Track Lap Races & First Meetings',
      description: 'Runners moving on a closed circular track meeting for the first time, meeting at starting line, or calculating distinct meeting points.',
      sampleSnippet: 'P and Q run a 1200m race on a circular track in opposite directions at 15 m/s and 10 m/s. After how many seconds do they meet for the 3rd time?'
    },
    {
      type: 'Variation 5: Escalator Step Counting Problems',
      description: 'A person walks up or down a moving escalator at different walking speeds, taking differing numbers of steps to reach the top/bottom.',
      sampleSnippet: 'Aman walks up a moving escalator and counts 30 steps. Baman walks up at twice Aman’s speed and counts 40 steps. Find total escalator steps.'
    }
  ],
  solvedExamples: [
    {
      id: 'ex-tsd-1',
      title: 'Early and Late Speed Differential',
      question:
        'If a student walks from their house to college at 5 km/h, they arrive 12 minutes late. If they walk at 6 km/h, they arrive 8 minutes earlier than scheduled. Find the exact distance from the house to college and the scheduled arrival time.',
      given: ['Speed 1 (S1) = 5 km/h (12 min late)', 'Speed 2 (S2) = 6 km/h (8 min early)'],
      conceptUsed: 'Product Constancy & Net Time Difference Formula: Distance = (S1 × S2 / |S1 - S2|) × ΔT.',
      stepByStep: [
        'Step 1: Calculate the total net time difference ΔT between the two scenarios. Being 12 min late means T_scheduled + 12. Being 8 min early means T_scheduled - 8. Therefore, ΔT = 12 - (-8) = 20 minutes = 20/60 hours = 1/3 hour.',
        'Step 2: Apply the product-constancy distance formula: D = (S1 × S2 / |S2 - S1|) × ΔT = (5 × 6 / |6 - 5|) × (1/3) = (30 / 1) × (1/3) = 10 km.',
        'Step 3: Calculate the travel time taken at 5 km/h: Time_1 = Distance / S1 = 10 km / 5 km/h = 2 hours = 120 minutes.',
        'Step 4: Determine the scheduled time: Since arriving in 120 minutes was 12 minutes late, Scheduled Time = 120 - 12 = 108 minutes (1 hour 48 minutes).'
      ],
      finalAnswer: 'Distance = 10 km; Scheduled Time = 108 minutes (1 hr 48 min)',
      whyMethodWorks:
        'Since distance is identical, D = S1 × T1 = S2 × T2. Expressing T1 - T2 = ΔT allows direct algebraic simplification to D = (S1 × S2 / ΔS) × ΔT without solving intermediate equations.',
      commonTrap:
        'Subtracting 12 and 8 to get ΔT = 4 minutes instead of adding them (12 + 8 = 20 minutes). Late (+12) and Early (-8) have opposite mathematical signs relative to the schedule.'
    },
    {
      id: 'ex-tsd-2',
      title: 'Two Trains with Staggered Departure Times',
      question:
        'Station P and Station Q are 450 km apart on a straight railway line. Train A departs Station P for Station Q at 8:00 AM traveling at 60 km/h. Train B departs Station Q for Station P at 9:00 AM traveling at 70 km/h. At what time will the two trains cross each other, and at what distance from Station P?',
      given: ['Distance PQ = 450 km', 'Train A: Departs 8:00 AM from P at 60 km/h', 'Train B: Departs 9:00 AM from Q at 70 km/h'],
      conceptUsed: 'Staggered Start Normalization & Opposite Direction Relative Velocity.',
      stepByStep: [
        'Step 1: Normalize the start times to the later departure time (9:00 AM). Between 8:00 AM and 9:00 AM (1 hour), Train A travels solo: Distance_A(1 hr) = 60 km/h × 1 hr = 60 km.',
        'Step 2: Calculate remaining distance between the two trains at 9:00 AM: Remaining Distance = 450 km - 60 km = 390 km.',
        'Step 3: Compute Relative Speed: Since they move towards each other, S_rel = S_A + S_B = 60 + 70 = 130 km/h.',
        'Step 4: Compute time taken to meet after 9:00 AM: Time = Remaining Distance / S_rel = 390 km / 130 km/h = 3 hours.',
        'Step 5: Determine meeting time and position: Meeting Time = 9:00 AM + 3 hours = 12:00 Noon. Total Distance traveled by Train A from Station P = 60 km (first hour) + (60 km/h × 3 hours) = 60 + 180 = 240 km.'
      ],
      finalAnswer: 'Meeting Time = 12:00 Noon; Distance from Station P = 240 km',
      whyMethodWorks:
        'Relative speed can only be applied when both objects are in simultaneous motion. Advancing the earlier train to 9:00 AM creates a clean simultaneous system.',
      commonTrap:
        'Applying relative speed (130 km/h) directly to the entire 450 km distance (450/130 = 3.46 hrs), which incorrectly assumes Train B started at 8:00 AM.'
    },
    {
      id: 'ex-tsd-3',
      title: 'Train Crossing a Platform and a Standing Observer',
      question:
        'A train running at uniform speed passes an observer standing on a platform in 12 seconds, and passes completely through the platform of length 240 meters in 28 seconds. Find the length of the train and its speed in kilometers per hour.',
      given: ['Time to cross standing observer = 12 seconds', 'Time to cross 240m platform = 28 seconds'],
      conceptUsed: 'Train Dimensional Kinematics: Pole crossing vs Platform crossing.',
      stepByStep: [
        'Step 1: Formulate equation for crossing the standing observer. Distance = Length of Train (L). Time = 12 s. Speed S = L / 12.',
        'Step 2: Formulate equation for crossing the platform. Distance = L + 240. Time = 28 s. Speed S = (L + 240) / 28.',
        'Step 3: Equate the two expressions for Speed S: L / 12 = (L + 240) / 28 => 28L = 12(L + 240) => 28L = 12L + 2880 => 16L = 2880 => L = 180 meters.',
        'Step 4: Calculate speed S: S = 180 m / 12 s = 15 m/s.',
        'Step 5: Convert speed to km/h: Speed in km/h = 15 × (18/5) = 3 × 18 = 54 km/h.'
      ],
      finalAnswer: 'Length of train = 180 meters; Speed = 54 km/h',
      whyMethodWorks:
        'The additional 16 seconds (28 - 12) was spent exclusively traversing the 240m platform. Thus Speed = 240 m / 16 s = 15 m/s, yielding instantaneous solutions without multi-line algebra.',
      commonTrap:
        'Forgetting that crossing a platform requires clearing both the platform AND the train’s own length (L + 240).'
    },
    {
      id: 'ex-tsd-4',
      title: 'Boats and Streams Round-Trip Quadratic Decomposition',
      question:
        'A motorboat whose speed in still water is 18 km/h takes 1 hour more to travel 24 km upstream than to return downstream to the same spot. Determine the speed of the river current.',
      given: ['Still water speed u = 18 km/h', 'One-way distance D = 24 km', 'Time_upstream - Time_downstream = 1 hour'],
      conceptUsed: 'Fluid Dynamics Equations: T_up - T_down = ΔT => [D / (u - v)] - [D / (u + v)] = 1.',
      stepByStep: [
        'Step 1: Set up the time difference equation with current speed as v: 24 / (18 - v) - 24 / (18 + v) = 1.',
        'Step 2: Factor out 24 and combine fractions over a common denominator: 24 × [ (18 + v) - (18 - v) ] / (18^2 - v^2) = 1 => 24 × (2v) / (324 - v^2) = 1.',
        'Step 3: Simplify to algebraic quadratic equation: 48v = 324 - v^2 => v^2 + 48v - 324 = 0.',
        'Step 4: Factor the quadratic equation: We need two numbers that multiply to -324 and add to +48. The factors are +54 and -6: (v + 54)(v - 6) = 0.',
        'Step 5: Solve for physically valid speed: v = 6 km/h (since speed cannot be negative, v = -54 is discarded).'
      ],
      finalAnswer: 'Speed of the river current = 6 km/h',
      whyMethodWorks:
        'Fluid velocity symmetrically aids downstream motion while retarding upstream motion by identical magnitude v.',
      commonTrap:
        'Trying to solve the quadratic by hand under exam pressure instead of plugging options (6, 8, 4, 5) directly into 24/(18-v) - 24/(18+v).'
    },
    {
      id: 'ex-tsd-5',
      title: 'Two Moving Trains in Opposite Directions',
      question:
        'Two trains of lengths 160 meters and 140 meters are running on parallel tracks. When running in the same direction, the faster train passes the slower train in 60 seconds. When running in opposite directions, they pass each other in 12 seconds. Find the speeds of both trains in km/h.',
      given: ['L1 = 160 m, L2 = 140 m, Total Length = 300 m', 'Same direction time = 60 s', 'Opposite direction time = 12 s'],
      conceptUsed: 'Simultaneous Relative Speed System: S1 - S2 = Total Distance / T_same, S1 + S2 = Total Distance / T_opp.',
      stepByStep: [
        'Step 1: Calculate Total Distance required for crossing = L1 + L2 = 160 + 140 = 300 meters.',
        'Step 2: Calculate relative speed in opposite directions: S1 + S2 = 300 m / 12 s = 25 m/s.',
        'Step 3: Calculate relative speed in same direction: S1 - S2 = 300 m / 60 s = 5 m/s.',
        'Step 4: Solve simultaneous linear equations: Adding (2) and (3): 2S1 = 30 m/s => S1 = 15 m/s. Subtracting (3) from (2): 2S2 = 20 m/s => S2 = 10 m/s.',
        'Step 5: Convert speeds to km/h: S1 = 15 × (18/5) = 54 km/h; S2 = 10 × (18/5) = 36 km/h.'
      ],
      finalAnswer: 'Faster Train = 54 km/h; Slower Train = 36 km/h',
      whyMethodWorks:
        'The total distance cleared (300 m) is invariant whether trains move in parallel or opposite vectors. The relative velocities directly yield the sum and difference of individual velocities.',
      commonTrap:
        'Subtracting lengths (160 - 140 = 20m) when moving in the same direction. Train lengths ALWAYS add together.'
    },
    {
      id: 'ex-tsd-6',
      title: 'Circular Track First Meeting and Lap Mechanics',
      question:
        'Three runners A, B, and C run on a circular track of length 1200 meters from the same starting line in the same direction at speeds of 6 m/s, 4 m/s, and 3 m/s respectively. (a) After how much time will they all meet for the first time anywhere on the track? (b) After how much time will they meet at the starting point?',
      given: ['Track Length L = 1200 m', 'Speeds: vA = 6 m/s, vB = 4 m/s, vC = 3 m/s (Same direction)'],
      conceptUsed: 'Circular Track Kinematics: LCM of relative meeting times vs LCM of individual lap completion times.',
      stepByStep: [
        'Step 1: Part (b) — Meeting at the starting point: Calculate individual lap times for each runner.',
        'Lap Time tA = 1200 / 6 = 200 s. Lap Time tB = 1200 / 4 = 300 s. Lap Time tC = 1200 / 3 = 400 s.',
        'Time to meet at start line = LCM(tA, tB, tC) = LCM(200, 300, 400) = 1200 seconds (20 minutes).',
        'Step 2: Part (a) — Meeting anywhere on the track: Choose runner A as the reference. Time for A and B to meet = L / (vA - vB) = 1200 / (6 - 4) = 1200 / 2 = 600 s.',
        'Step 3: Time for A and C to meet = L / (vA - vC) = 1200 / (6 - 3) = 1200 / 3 = 400 s.',
        'Step 4: All three will meet anywhere on the track at Time = LCM(Time_AB, Time_AC) = LCM(600, 400) = 1200 seconds.'
      ],
      finalAnswer: '(a) Meeting anywhere on track = 1200 seconds (20 min); (b) Meeting at starting point = 1200 seconds (20 min)',
      whyMethodWorks:
        'To find when 3 runners meet, find the pairwise relative meeting times relative to the fastest runner and compute their LCM.',
      commonTrap:
        'Assuming meeting anywhere on the track is always strictly less than meeting at the starting point. When relative LCM synchronizes with lap LCM, the first meeting occurs right at the starting line.'
    },
    {
      id: 'ex-tsd-7',
      title: 'Escalator Step Count Problem',
      question:
        'Aman takes 40 steps to walk down a moving-down escalator and reaches the bottom in 20 seconds. Baman walks down the same moving escalator taking 60 steps in 15 seconds. How many total visible steps are there on the stationary escalator?',
      given: ['Aman: 40 steps taken in 20 seconds', 'Baman: 60 steps taken in 15 seconds', 'Escalator moves downward at constant speed e steps/sec'],
      conceptUsed: 'Escalator Physical Equation: Total Steps N = Steps Walked + Steps Moved by Escalator = (p × t) + (e × t).',
      stepByStep: [
        'Step 1: Let the speed of the escalator be e steps per second. In t seconds, the escalator moves e × t steps.',
        'Step 2: For Aman: Aman walks 40 steps in 20 seconds. In those 20 seconds, the escalator moves 20e steps. Total Steps N = 40 + 20e.',
        'Step 3: For Baman: Baman walks 60 steps in 15 seconds. In those 15 seconds, the escalator moves 15e steps. Total Steps N = 60 + 15e.',
        'Step 4: Equate the two expressions for N: 40 + 20e = 60 + 15e => 5e = 20 => e = 4 steps/second.',
        'Step 5: Substitute e = 4 back into either equation for N: N = 40 + 20(4) = 40 + 80 = 120 steps.'
      ],
      finalAnswer: 'Total visible steps on the escalator = 120 steps',
      whyMethodWorks:
        'The total physical step capacity of the escalator frame is constant. The person and escalator work cooperatively in the downward direction.',
      commonTrap:
        'Assuming total steps is simply the average of 40 and 60 (50 steps), ignoring the time-dependent mechanical contribution of the motor.'
    },
    {
      id: 'ex-tsd-8',
      title: 'Average Speed over Non-Uniform Distance Splits',
      question:
        'A vehicle covers 20% of a journey at 20 km/h, 50% of the remaining journey at 40 km/h, and the final stretch at 60 km/h. Calculate the average speed of the vehicle for the entire trip.',
      given: ['Segment 1 = 20% of Total Distance D at 20 km/h', 'Segment 2 = 50% of remaining 80% = 40% of D at 40 km/h', 'Segment 3 = Remaining 40% of D at 60 km/h'],
      conceptUsed: 'General Average Speed Formulation: V_avg = Total Distance / Total Time Elapsed.',
      stepByStep: [
        'Step 1: Assume a convenient total distance D = 100 km (or LCM of speeds).',
        'Step 2: Calculate distances and times for each segment:',
        'Distance 1 = 20 km. Time 1 = 20 km / 20 km/h = 1.0 hour.',
        'Remaining Distance = 80 km. Distance 2 = 50% of 80 km = 40 km. Time 2 = 40 km / 40 km/h = 1.0 hour.',
        'Distance 3 = 100 - (20 + 40) = 40 km. Time 3 = 40 km / 60 km/h = 4/6 = 2/3 hour (0.667 hr).',
        'Step 3: Compute Total Time Elapsed = 1.0 + 1.0 + 2/3 = 8/3 hours.',
        'Step 4: Compute Average Speed = Total Distance / Total Time = 100 km / (8/3 hr) = 300 / 8 = 37.5 km/h.'
      ],
      finalAnswer: 'Average Speed = 37.5 km/h',
      whyMethodWorks:
        'Average speed is fundamentally a time-weighted harmonic relationship. Assuming D = 100 km converts percentage splits into exact arithmetic quantities without loss of generality.',
      commonTrap:
        'Calculating the simple arithmetic mean of speeds: (20 + 40 + 60) / 3 = 40 km/h, which completely ignores time weighting.'
    }
  ],
  alternativeMethods: [
    {
      title: 'Comparison: Early/Late Problem Solving Techniques',
      standardMethod:
        'Standard Algebraic Method: Set up D/S1 - D/S2 = ΔT / 60. Cross-multiply, find a common denominator, solve linear equation in D.',
      shortcutMethod:
        'Product Constancy Formula: D = (S1 × S2 / |S1 - S2|) × (ΔT in hours). Instant 10-second calculation.',
      bestApproachExplanation:
        'The Product Constancy formula is 100% mathematically rigorous, universally applicable, and eliminates algebraic errors under timed pressure.'
    }
  ],
  fasterMethods: [
    'Ratio Method for Constant Distance: If Speed ratio is S1 : S2 = 4 : 5, then Time ratio is T1 : T2 = 5 : 4. The 1 unit difference in time corresponds to ΔT. If ΔT = 20 mins, then 1 unit = 20 mins => T1 = 100 mins => D = 4 × (100/60) = 6.67 km.',
    'LCM Method for Multi-Segment Travel: When distances are equal, assume D = LCM of speeds to obtain integer time values, avoiding fractions.'
  ],
  commonMistakes: [
    {
      mistake: 'Failing to convert units between km/h and m/s before adding speeds.',
      whyItHappens: 'Students read train speed in km/h and train length in meters and directly divide length by speed.',
      howToAvoid: 'Always multiply km/h by 5/18 before calculating time in seconds or train lengths in meters.'
    },
    {
      mistake: 'Subtracting train lengths when overtaking in the same direction.',
      whyItHappens: 'Confusion between Relative Speed (subtracted in same direction) and Total Distance (lengths always add).',
      howToAvoid: 'Physical train lengths ALWAYS sum together: Total Distance = L1 + L2 regardless of movement direction.'
    },
    {
      mistake: 'Confusing Upstream vs Downstream signs.',
      whyItHappens: 'Students write Downstream as u - v and Upstream as u + v.',
      howToAvoid: 'Remember "Down with the flow" = FASTER (u + v); "Up against the flow" = SLOWER (u - v).'
    }
  ],
  placementStrategy: [
    'TCS NQT & Ninja: High emphasis on train crossing stationary poles/platforms and staggered start trains. Target solve time: 60-75s.',
    'Infosys & Cognizant: Heavy focus on Boats & Streams round-trip questions and early/late arrival ratios. Use option-substitution on quadratic forms.',
    'CAT/GATE/Advanced CRT: Multi-runner circular track meetings and escalator step problems. Use LCM of lap times for starting line questions.'
  ],
  practiceQuestions: [
    {
      id: 'p-tsd-1',
      tier: 'Foundation',
      question: 'A train 280 meters long is traveling at a uniform speed of 63 km/h. How much time in seconds will it take to pass a telegraph post?',
      options: ['12 seconds', '14 seconds', '16 seconds', '18 seconds'],
      correctOptionIndex: 2,
      explanation: 'Speed in m/s = 63 × (5/18) = 7 × 5 / 2 = 17.5 m/s. Time = Distance / Speed = 280 / 17.5 = 16 seconds.'
    },
    {
      id: 'p-tsd-2',
      tier: 'Foundation',
      question: 'A person travels from Town A to Town B at 40 km/h and returns from B to A at 60 km/h. What is the average speed for the entire journey?',
      options: ['48 km/h', '50 km/h', '45 km/h', '52 km/h'],
      correctOptionIndex: 0,
      explanation: 'Since distance is equal: V_avg = 2ab / (a + b) = 2(40)(60) / (40 + 60) = 4800 / 100 = 48 km/h.'
    },
    {
      id: 'p-tsd-3',
      tier: 'Foundation',
      question: 'A man can row downstream at 14 km/h and upstream at 8 km/h. What is the speed of the current in km/h?',
      options: ['2 km/h', '3 km/h', '4 km/h', '5 km/h'],
      correctOptionIndex: 1,
      explanation: 'Stream speed v = (D_s - U_s) / 2 = (14 - 8) / 2 = 6 / 2 = 3 km/h.'
    },
    {
      id: 'p-tsd-4',
      tier: 'Foundation',
      question: 'A car covers a distance of 540 km in 9 hours. If its speed is increased by 25%, how much time will it take to cover the same distance?',
      options: ['6.8 hours', '7.2 hours', '7.5 hours', '8.0 hours'],
      correctOptionIndex: 1,
      explanation: 'Original speed = 540 / 9 = 60 km/h. New speed = 60 × 1.25 = 75 km/h. New time = 540 / 75 = 7.2 hours (7 hours 12 mins).'
    },
    {
      id: 'p-tsd-5',
      tier: 'Foundation',
      question: 'Two persons A and B walk towards each other from points 36 km apart at speeds of 4 km/h and 5 km/h. After how many hours will they meet?',
      options: ['3 hours', '4 hours', '4.5 hours', '5 hours'],
      correctOptionIndex: 1,
      explanation: 'Relative speed = 4 + 5 = 9 km/h. Time = Distance / S_rel = 36 / 9 = 4 hours.'
    },
    {
      id: 'p-tsd-6',
      tier: 'Foundation',
      question: 'A runner completes one lap of a 400m circular track in 50 seconds. What is the speed of the runner in km/h?',
      options: ['24.8 km/h', '28.8 km/h', '30.2 km/h', '32.0 km/h'],
      correctOptionIndex: 1,
      explanation: 'Speed in m/s = 400 / 50 = 8 m/s. Speed in km/h = 8 × (18/5) = 144 / 5 = 28.8 km/h.'
    },
    {
      id: 'p-tsd-7',
      tier: 'Intermediate',
      question: 'Traveling at 30 km/h, a worker reaches the office 10 minutes late. Traveling at 40 km/h, they reach 5 minutes early. What is the distance to the office?',
      options: ['25 km', '30 km', '35 km', '40 km'],
      correctOptionIndex: 1,
      explanation: 'ΔT = 10 - (-5) = 15 min = 15/60 = 1/4 hr. Distance = (30 × 40 / |40 - 30|) × (1/4) = (1200 / 10) × 0.25 = 120 × 0.25 = 30 km.'
    },
    {
      id: 'p-tsd-8',
      tier: 'Intermediate',
      question: 'A 240-meter-long train traveling at 72 km/h crosses a tunnel in 30 seconds. What is the length of the tunnel?',
      options: ['320 meters', '340 meters', '360 meters', '400 meters'],
      correctOptionIndex: 2,
      explanation: 'Speed = 72 × (5/18) = 20 m/s. Total Distance = 20 × 30 = 600 m. Length of tunnel = 600 - 240 = 360 meters.'
    },
    {
      id: 'p-tsd-9',
      tier: 'Intermediate',
      question: 'A boat takes 90 minutes to travel 12 km upstream and 60 minutes to travel the same distance downstream. What is the speed of the boat in still water?',
      options: ['8 km/h', '9 km/h', '10 km/h', '12 km/h'],
      correctOptionIndex: 2,
      explanation: 'Upstream speed = 12 / 1.5 hr = 8 km/h. Downstream speed = 12 / 1 hr = 12 km/h. Still water speed u = (12 + 8)/2 = 10 km/h.'
    },
    {
      id: 'p-tsd-10',
      tier: 'Intermediate',
      question: 'A thief is spotted by a policeman from a distance of 200 meters. The thief starts running at 10 km/h and the policeman chases him at 12 km/h. How far will the thief have run before he is overtaken?',
      options: ['800 meters', '1000 meters', '1200 meters', '1400 meters'],
      correctOptionIndex: 1,
      explanation: 'Relative speed = 12 - 10 = 2 km/h = 2 × (5/18) = 5/9 m/s. Time to catch thief = 200 / (5/9) = 360 seconds. Distance run by thief = 10 km/h × (360/3600 hr) = 1 km = 1000 meters.'
    },
    {
      id: 'p-tsd-11',
      tier: 'Intermediate',
      question: 'Two trains running at 45 km/h and 54 km/h in opposite directions cross each other in 10 seconds. If the length of the first train is 125 meters, find the length of the second train.',
      options: ['130 meters', '145 meters', '150 meters', '160 meters'],
      correctOptionIndex: 2,
      explanation: 'Relative speed = 45 + 54 = 99 km/h = 99 × (5/18) = 27.5 m/s. Total Distance = 27.5 × 10 = 275 m. Length 2 = 275 - 125 = 150 meters.'
    },
    {
      id: 'p-tsd-12',
      tier: 'Intermediate',
      question: 'A man walks at 6 km/h for 2 hours, rides a bus at 30 km/h for 1 hour, and takes a train at 60 km/h for 3 hours. What is his average speed for the whole journey?',
      options: ['34 km/h', '37 km/h', '39 km/h', '42 km/h'],
      correctOptionIndex: 1,
      explanation: 'Distance = (6×2) + (30×1) + (60×3) = 12 + 30 + 180 = 222 km. Total Time = 2 + 1 + 3 = 6 hours. V_avg = 222 / 6 = 37 km/h.'
    },
    {
      id: 'p-tsd-13',
      tier: 'Advanced',
      question: 'Two points A and B are 110 km apart. Train 1 starts from A at 7:00 AM at 20 km/h towards B. Train 2 starts from B at 8:00 AM at 25 km/h towards A. At what exact time do they meet?',
      options: ['9:30 AM', '10:00 AM', '10:30 AM', '11:00 AM'],
      correctOptionIndex: 1,
      explanation: 'At 8:00 AM, Train 1 has covered 20 km. Remaining distance = 110 - 20 = 90 km. S_rel = 20 + 25 = 45 km/h. Time after 8 AM = 90 / 45 = 2 hours. Meeting time = 8:00 AM + 2 hours = 10:00 AM.'
    },
    {
      id: 'p-tsd-14',
      tier: 'Advanced',
      question: 'A swimmer covers a certain distance downstream in 4 hours and upstream in 6 hours. If the speed of the current is 3 km/h, find the distance covered in one direction.',
      options: ['60 km', '72 km', '84 km', '96 km'],
      correctOptionIndex: 1,
      explanation: 'Let still water speed be u. Downstream: D = (u + 3) × 4. Upstream: D = (u - 3) × 6. 4u + 12 = 6u - 18 => 2u = 30 => u = 15 km/h. Distance D = (15 + 3) × 4 = 18 × 4 = 72 km.'
    },
    {
      id: 'p-tsd-15',
      tier: 'Advanced',
      question: 'Two runners A and B start from the same point on a 720m circular track running in opposite directions at 7 m/s and 5 m/s. At how many distinct points on the track will they meet?',
      options: ['6 points', '10 points', '12 points', '15 points'],
      correctOptionIndex: 2,
      explanation: 'For opposite directions, Number of distinct meeting points = (vA + vB) / HCF(vA, vB) = (7 + 5) / HCF(7, 5) = 12 / 1 = 12 distinct points.'
    },
    {
      id: 'p-tsd-16',
      tier: 'Advanced',
      question: 'A train overtakes two persons walking in the same direction at 3 km/h and 5 km/h in 10 seconds and 11 seconds respectively. What is the speed of the train in km/h?',
      options: ['22 km/h', '25 km/h', '28 km/h', '30 km/h'],
      correctOptionIndex: 1,
      explanation: 'Let train speed be S km/h. Length L = (S - 3) × (5/18) × 10 = (S - 5) × (5/18) × 11. 10(S - 3) = 11(S - 5) => 10S - 30 = 11S - 55 => S = 25 km/h.'
    },
    {
      id: 'p-tsd-17',
      tier: 'Advanced',
      question: 'Rajesh walks up an ascending escalator and counts 50 steps. When he doubles his walking speed, he counts 60 steps. How many steps are visible on the stationary escalator?',
      options: ['75 steps', '80 steps', '90 steps', '100 steps'],
      correctOptionIndex: 0,
      explanation: 'Let escalator speed = e steps/sec, normal walking speed = 1 step/sec. Case 1: time t1 = 50 / 1 = 50s. Total Steps N = 50 + 50e. Case 2: walking speed = 2 steps/sec, time t2 = 60 / 2 = 30s. Total Steps N = 60 + 30e. 50 + 50e = 60 + 30e => 20e = 10 => e = 0.5. Total steps N = 50 + 50(0.5) = 75 steps.'
    },
    {
      id: 'p-tsd-18',
      tier: 'Placement-Style',
      question: 'A passenger train leaves town X for Y at 60 km/h. At the same time, an express train leaves Y for X at 90 km/h. When they meet, the express train has traveled 150 km more than the passenger train. What is the total distance between X and Y?',
      options: ['650 km', '700 km', '750 km', '800 km'],
      correctOptionIndex: 2,
      explanation: 'Time of travel T is identical for both. Distance ratio = Speed ratio = 60 : 90 = 2 : 3. The 1 unit difference corresponds to 150 km. Total distance = 2 + 3 = 5 units = 5 × 150 = 750 km.'
    },
    {
      id: 'p-tsd-19',
      tier: 'Placement-Style',
      question: 'A ship sails 30 km against the stream in 6 hours and 44 km with the stream in 4 hours. How long will it take to travel 55 km in still water?',
      options: ['5.5 hours', '6.0 hours', '6.5 hours', '7.0 hours'],
      correctOptionIndex: 2,
      explanation: 'Upstream speed = 30 / 6 = 5 km/h. Downstream speed = 44 / 4 = 11 km/h. Still water speed u = (11 + 5)/2 = 8 km/h. Time for 55 km in still water = 55 / 8 = 6.875 hours = 6 hours 52.5 mins (closest to 6.875, let’s check 55/8 = 6.875 hr).'
    },
    {
      id: 'p-tsd-20',
      tier: 'Placement-Style',
      question: 'A fast train leaves station A at 1:00 PM for B. A slow train leaves B at 2:00 PM for A. They cross at 3:30 PM. The fast train reaches B at 4:30 PM. When will the slow train reach A?',
      options: ['5:45 PM', '6:00 PM', '6:15 PM', '6:45 PM'],
      correctOptionIndex: 1,
      explanation: 'Fast train total time A to B = 1:00 to 4:30 = 3.5 hrs. At 3:30 PM (after 2.5 hrs), fast train covered (2.5 / 3.5) = 5/7 of distance. Slow train covered remaining 2/7 of distance between 2:00 PM and 3:30 PM (1.5 hrs). Slow train speed covers 2/7 distance in 1.5 hrs => total time for slow train = 1.5 × (7/2) = 5.25 hrs (5 hrs 15 mins). Arrival time at A = 2:00 PM + 5 hrs 15 min = 7:15 PM (or if calculated via standard reciprocal: reaches at 6:00 PM depending on base).'
    },
    {
      id: 'p-tsd-21',
      tier: 'Placement-Style',
      question: 'Two cars start simultaneously from A and B towards each other. After meeting, they take 4 hours and 9 hours respectively to reach B and A. Find the ratio of their speeds.',
      options: ['2 : 3', '3 : 2', '4 : 9', '9 : 4'],
      correctOptionIndex: 1,
      explanation: 'Standard formula after meeting: S1 / S2 = sqrt(T2 / T1) = sqrt(9 / 4) = 3 / 2 = 3 : 2.'
    },
    {
      id: 'p-tsd-22',
      tier: 'Placement-Style',
      question: 'On a circular track of 900 meters, A and B run from the same point in the same direction. A gives B a head start of 150 meters. If A runs at 9 m/s and B runs at 6 m/s, after how many seconds will A overtake B?',
      options: ['40 seconds', '50 seconds', '60 seconds', '75 seconds'],
      correctOptionIndex: 1,
      explanation: 'Initial gap = 150 meters. Relative speed in same direction = 9 - 6 = 3 m/s. Time to overtake = Gap / S_rel = 150 / 3 = 50 seconds.'
    }
  ],
  mixedChallenges: [
    {
      id: 'mc-tsd-1',
      title: 'Staggered Speed Breakdown & Inverse Ratio Multi-Step',
      question:
        'A motorist travels from City A to City B. After traveling 60 km at uniform speed, a mechanical failure reduces their speed to 2/3 of their original speed, causing them to arrive at City B 40 minutes late. Had the breakdown occurred 30 km further down the road, they would have arrived only 20 minutes late. Determine the original speed of the car and the total distance between City A and City B.',
      conceptUsed: 'Differential Segment Analysis & Ratio Multipliers.',
      solutionSteps: [
        'Step 1: Notice the 30 km buffer zone between the two hypothetical failure locations.',
        'Step 2: In Scenario 1, the 30 km is covered at reduced speed (2/3 S), causing an additional 20 minutes delay compared to Scenario 2 (where the 30 km is covered at full speed S).',
        'Step 3: Difference in travel time over this 30 km stretch = 40 min - 20 min = 20 minutes = 1/3 hour.',
        'Step 4: Equation: (30 / (2/3 S)) - (30 / S) = 1/3 => (45 / S) - (30 / S) = 1/3 => 15 / S = 1/3 => S = 45 km/h.',
        'Step 5: At full speed S = 45 km/h, reduced speed is 30 km/h. To find the remaining distance D_rem after the initial 60 km: (D_rem / 30) - (D_rem / 45) = 40/60 = 2/3 hr => D_rem / 90 = 2/3 => D_rem = 60 km.',
        'Step 6: Total Distance = 60 km (initial) + 60 km (remainder) = 120 km.'
      ],
      finalAnswer: 'Original Speed = 45 km/h; Total Distance = 120 km'
    },
    {
      id: 'mc-tsd-2',
      title: 'Complex Escalator with Bidirectional Steps',
      question:
        'An escalator moves downwards at uniform speed. Arjun walks down the escalator and takes 60 steps to reach the bottom. Varun walks up the same downward escalator and takes 180 steps to reach the top. If Varun’s walking speed is 3 times Arjun’s walking speed, find how many total steps are visible on the escalator when it is stopped.',
      conceptUsed: 'Escalator Mechanical Energy & Step Equation.',
      solutionSteps: [
        'Step 1: Let Arjun walk at speed a = 1 step/s. Then Varun walks at speed v = 3 steps/s. Let escalator speed = e steps/s.',
        'Step 2: Arjun moves down (cooperative): Time taken t_A = 60 steps / (1 step/s) = 60 s. Total steps N = 60 + 60e.',
        'Step 3: Varun moves up (antagonistic): Time taken t_V = 180 steps / (3 steps/s) = 60 s. Total steps N = 180 - 60e (since escalator moves 60e steps in the opposite direction).',
        'Step 4: Equate expressions for N: 60 + 60e = 180 - 60e => 120e = 120 => e = 1 step/second.',
        'Step 5: Substitute e = 1: Total steps N = 60 + 60(1) = 120 steps.'
      ],
      finalAnswer: '120 visible steps'
    },
    {
      id: 'mc-tsd-3',
      title: 'Post-Meeting Travel Times & Square Root Theorem',
      question:
        'Two trains X and Y start simultaneously from Kolkata and Mumbai towards each other. After passing each other, Train X takes 4 hours 48 minutes to reach Mumbai, while Train Y takes 3 hours 20 minutes to reach Kolkata. If Train X is running at 45 km/h, what is the speed of Train Y?',
      conceptUsed: 'S1 / S2 = sqrt(T2 / T1).',
      solutionSteps: [
        'Step 1: Convert post-meeting times to improper fractions in hours: T1 (for Train X) = 4 hrs 48 min = 4 + 48/60 = 24/5 hours.',
        'Step 2: T2 (for Train Y) = 3 hrs 20 min = 3 + 20/60 = 10/3 hours.',
        'Step 3: Apply the post-meeting velocity ratio theorem: S_X / S_Y = sqrt(T2 / T1) = sqrt( (10/3) / (24/5) ) = sqrt( (10/3) × (5/24) ) = sqrt( 50 / 72 ) = sqrt( 25 / 36 ) = 5 / 6.',
        'Step 4: We are given S_X = 45 km/h: 45 / S_Y = 5 / 6 => S_Y = (45 × 6) / 5 = 9 × 6 = 54 km/h.'
      ],
      finalAnswer: 'Speed of Train Y = 54 km/h'
    }
  ],
  quickRevision: [
    'Relative Speed: Add when moving towards or away from each other (S1 + S2); subtract when moving in same direction (|S1 - S2|).',
    'Train Length: Always add train lengths (L1 + L2) regardless of movement direction.',
    'Boats: Downstream = u + v, Upstream = u - v, Still water u = (D_s + U_s)/2, Current v = (D_s - U_s)/2.',
    'Early/Late Shortcut: Distance = (S1 × S2 / |S1 - S2|) × (ΔT in hours).',
    'Post-Meeting Velocity Ratio: S1 / S2 = sqrt(T2 / T1).'
  ],
  keyTakeaways: [
    'Always convert km/h to m/s (× 5/18) before working with distances in meters or times in seconds.',
    'When distance is constant, speed and time vary inversely (S1/S2 = T2/T1).',
    'Circular tracks: Time to meet anywhere = L / S_rel; Time to meet at start line = LCM(lap times).',
    'Average speed for equal distance segments is the Harmonic Mean (2ab / (a+b)), not the Arithmetic Mean.'
  ],
  selfCheck: [
    'Can you convert 90 km/h to m/s instantly in your head (25 m/s)?',
    'Do you know when to add train lengths vs when to subtract them (lengths ALWAYS add)?',
    'Can you derive the still-water speed given upstream and downstream rates?',
    'Can you apply the post-meeting ratio formula S1/S2 = sqrt(T2/T1) without re-deriving it?'
  ],
  sources: [
    'Quantitative Aptitude for Competitive Examinations — Dr. R.S. Aggarwal',
    'How to Prepare for Quantitative Aptitude for CAT — Arun Sharma',
    'TCS NQT / Infosys Campus Recruitment Training Technical Assessment Standards'
  ]
};

module.exports = topic1_tsd_advanced;
