import type { Guide } from './content';

// Bottom-of-funnel guides for people actively comparing Android fitness apps.
// Nexal feature statements were checked against the Android app on 15 November 2026.
const publication = { publishedAt: '2026-11-15', contentBatch: 'buyer-intent-1' } as const;

export const buyerIntentGuides: Guide[] = [
  {
    ...publication,
    slug: 'best-ai-workout-and-meal-planner-apps-android',
    title: 'Best AI workout and meal planner apps for Android: a buyer’s checklist',
    metaTitle: 'Best AI Workout and Meal Planner Apps for Android',
    description: 'A buyer’s checklist for AI workout and meal planner apps on Android: plan quality, macro alignment, free versus paid tiers and one app versus two.',
    category: 'APP BUYING GUIDE', readTime: '7 min read',
    intro: 'There is no single best app for everyone, so this guide does not hand out a ranking. It gives you the tests that separate a useful AI planner from a polished demo, with worked examples you can run on any Android app before you pay.',
    takeaway: 'Judge an AI planner on four things: whether the workout plan fits your real week, whether the meal plan adds up to its own targets, what stays free after a trial, and whether training and food live somewhere you will actually open every day.',
    sections: [
      { id: 'define-best', title: 'Decide what “best” means for your week', paragraphs: [
        'App reviews often score features you will never use. Start with the job you are hiring the app for. Someone who already follows a coach’s programme needs a clear workout log more than an AI generator, while someone who cooks at home and wants structure may care most about meal plans that respect their targets and allergies.',
        'Write down your training days, typical session length, equipment and the meals you repeat each week. That short brief becomes the input you give every app you test, which keeps the comparison fair and stops a slick onboarding screen from deciding for you.',
      ], example: { title: 'Four buyer profiles and what to test first', headers: ['Your situation', 'Test first', 'Lower priority'], rows: [
        ['Lifts three days a week, eats similar meals', 'Workout plan fit and set logging', 'Large recipe libraries'],
        ['Cooks at home, wants nutrition guidance', 'Meal plans against stated macro targets', 'Advanced training analytics'],
        ['Budget comes first', 'What remains free once any trial ends', 'Premium-only extras'],
        ['Already uses a food app happily', 'Whether a second app adds enough to justify switching', 'Features that duplicate your food app'],
      ], caption: 'Illustrative profiles. Your own brief should drive the order of your tests.' } },
      { id: 'test-ai-workouts', title: 'Test the AI workout plan against your real constraints', paragraphs: [
        'Give each planner the same brief, for example: three days a week, 45 minutes, dumbbells and a bench at home, two years of casual training. Then read the output critically. A plan that schedules five sessions, assumes a barbell or runs past an hour has ignored the brief, however professional it looks.',
        'Check that every session lists exercises with sets, repetitions and rest, that the week has a recognisable structure, and that you can log what you actually completed. An AI plan is a starting point to review, ideally with a qualified trainer if you are new to an exercise. It does not watch your technique.',
      ], bullets: [
        'Does the plan use only the days and equipment you gave it?',
        'Are sets, repetitions and rest times stated for each exercise?',
        'Can you substitute an exercise without breaking your history?',
        'Can you log completed sets in the same app, ideally for free?',
      ] },
      { id: 'macro-alignment', title: 'Check that AI meal plans add up to their own targets', paragraphs: [
        'A meal plan is only useful if its numbers reconcile. Add up one generated day and compare it with the target the app claims to be planning for. Then spot-check single meals using the standard energy factors the USDA describes: roughly 4 kcal per gram of protein and carbohydrate and 9 kcal per gram of fat.',
        'Small gaps are normal because of rounding, fibre and food-specific factors. A large gap, such as a meal listed at 380 kcal whose macros imply 540 kcal, means you cannot trust that day without checking it. Test two or three generated days before you rely on the feature.',
      ], example: { title: 'Worked check: does a generated day match its target?', headers: ['Item', 'Protein', 'Carbohydrate', 'Fat', 'Listed kcal', 'kcal from macros'], rows: [
        ['Breakfast', '30 g', '55 g', '12 g', '450', '448'],
        ['Lunch', '40 g', '50 g', '20 g', '380', '540'],
        ['Dinner', '45 g', '70 g', '22 g', '650', '658'],
        ['Day total', '115 g', '175 g', '54 g', '1,480', '1,646'],
      ], caption: 'Invented example. Lunch fails the check by 160 kcal; the plan claimed a 1,650 kcal target, so the listed total also undershoots.' } },
      { id: 'free-versus-paid', title: 'Map what stays free after the trial', paragraphs: [
        'Many planners advertise AI features but put everyday logging behind the same subscription. Before you start a trial, list which tasks you will still be able to do on the free tier, and set a reminder before the trial converts. Google Play shows the price and renewal terms at checkout and lets you manage subscriptions from your account.',
        'As examples, checked on 15 November 2026: MyFitnessPal’s official Premium page lists barcode scanning, custom macro goals and ad-free logging as paid features. Fitbod’s help centre describes a workout-focused app, and it does not log food. Nexal keeps manual workout and meal logging free, and puts AI workout plans, AI meal plans, AI macro estimates and barcode scanning in Premium. Check each listing yourself because tiers change.',
      ] },
      { id: 'one-app-or-two', title: 'One unified app or two specialised apps?', paragraphs: [
        'Training and nutrition affect the same goal, so seeing them together has a practical benefit: you can notice that protein dips on training days, or that sessions shrink in weeks when you under-eat. Two separate apps can hold the same data, but you have to remember to open both and connect the dots yourself.',
        'Specialised apps can still be the better choice. A dedicated strength app may adapt each session more deeply, and a large food database speeds up logging if you eat many packaged foods. A unified app wins when the switching cost is what stops you logging. If you already maintain two apps without friction, there is less reason to change.',
      ] },
      { id: 'try-nexal', title: 'Run the checklist on Nexal', paragraphs: [
        'Nexal is an Android app that keeps workouts, meals and progress in one place. Workout logging, custom workouts, history and manual meal, calorie and macro logging are free. Premium adds AI workout plans of four to six weeks, AI meal plans built around your calorie and macro targets, preferences and allergies, AI macro estimates and barcode scanning.',
        'Run the same brief through Nexal that you gave other apps. Note the boundaries too: Nexal does not include a searchable food database, does not sync with wearables or Health Connect, and is not available on iPhone. If it passes your checklist, the local Premium price is shown in Google Play before you subscribe.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'See Nexal’s workout and meal planner', text: 'Test free tracking first. Add AI planning only if it passes your checklist.' },
    seeAlso: [
      { slug: 'choose-workout-and-meal-planner-app', label: 'How to choose a workout and meal planner app' },
      { slug: 'test-fitness-app-before-subscribing', label: 'Test a fitness app before subscribing' },
      { slug: 'free-vs-paid-fitness-app-decision', label: 'Free versus paid fitness apps' },
    ],
    sources: [
      { href: 'https://www.myfitnesspal.com/premium', label: 'MyFitnessPal: Premium features (official)' },
      { href: 'https://help.fitbod.me/hc/en-us/articles/38144798013719-System-Requirements', label: 'Fitbod help centre: system requirements' },
      { href: 'https://agresearchmag.ars.usda.gov/2013/sep/calories', label: 'USDA Agricultural Research: estimating calories' },
      { href: 'https://support.google.com/googleplay/answer/7018481', label: 'Google Play: manage and cancel subscriptions' },
    ],
    faqs: [
      { question: 'Is there one best AI workout and meal planner app for Android?', answer: 'No single app suits everyone. The best choice is the app whose plans fit your days, equipment and food preferences, whose numbers add up, and whose free tier covers what you need after any trial.' },
      { question: 'Are AI meal plans accurate to my macros?', answer: 'Not automatically. Add up a generated day and check single meals with roughly 4 kcal per gram of protein and carbohydrate and 9 kcal per gram of fat. Large gaps mean the plan needs checking.' },
      { question: 'Is one app better than separate workout and food apps?', answer: 'One app helps when switching between apps is what stops you logging. If you already use two apps without friction, a specialised pair can be the better fit.' },
      { question: 'Is AI planning free in Nexal?', answer: 'No. Workout and meal logging are free. AI workout plans, AI meal plans, AI macro estimates and barcode scanning are part of Nexal Premium.' },
    ],
  },
  {
    ...publication,
    slug: 'how-to-calculate-macros-for-muscle-gain-and-fat-loss',
    title: 'How to calculate macros for muscle gain and fat loss, then track them on Android',
    metaTitle: 'Macros for Body Recomposition: Calculate and Track',
    description: 'A worked example of protein, carbohydrate and fat targets for body recomposition, with the arithmetic shown and a daily logging routine for Android.',
    category: 'NUTRITION TRACKING', readTime: '7 min read',
    intro: 'Body recomposition means trying to keep or build muscle while slowly losing fat. This guide walks through one illustrative macro calculation step by step, then shows how to log against it every day without turning food into a spreadsheet project.',
    takeaway: 'Start from an honest maintenance estimate, set protein first, keep fat in a sensible range, give the remainder to carbohydrate, and judge the result on several weeks of averages rather than any single day.',
    sections: [
      { id: 'recomp-basics', title: 'What recomposition can and cannot promise', paragraphs: [
        'Recomposition is usually slower than a dedicated bulk or diet, and it is more realistic for people who are newer to resistance training or returning after a break. Experienced lifters often see little change on the scale even when the plan is working, which is why training logs and measurements matter alongside body weight.',
        'The numbers below are an illustration of the arithmetic, not a prescription for your body. If you have a medical condition, are pregnant, have a history of disordered eating or take medication that affects appetite or weight, set targets with a doctor or registered dietitian instead.',
      ] },
      { id: 'worked-example', title: 'A worked macro calculation, step by step', paragraphs: [
        'Our invented example is an 80 kg adult who lifts four days a week. Over three weeks of careful logging their intake averaged about 2,600 kcal while their weight stayed roughly stable, so 2,600 kcal is a reasonable maintenance estimate. A modest deficit of about 10 per cent gives a daily target of 2,350 kcal.',
        'Protein comes first. The International Society of Sports Nutrition position stand describes 1.4 to 2.0 g per kilogram of body weight per day as sufficient for most exercising people; the example uses 1.8 g. Fat is set at 25 per cent of energy, inside the 20 to 35 per cent range in the Dietary Reference Intakes. Carbohydrate takes what is left.',
      ], example: { title: 'Illustrative recomposition targets for an 80 kg adult', headers: ['Step', 'Calculation', 'Result'], rows: [
        ['Maintenance estimate', 'Average logged intake while weight was stable', '2,600 kcal'],
        ['Daily target', '2,600 × 0.9 = 2,340, rounded to the nearest 50', '2,350 kcal'],
        ['Protein', '80 kg × 1.8 g = 144 g; 144 × 4 kcal', '144 g (576 kcal)'],
        ['Fat', '2,350 × 0.25 = 588 kcal; 588 ÷ 9', '65 g (588 kcal)'],
        ['Carbohydrate', '2,350 − 576 − 588 = 1,186 kcal; 1,186 ÷ 4', '297 g (1,186 kcal)'],
      ], caption: 'Invented example using 4 kcal per gram of protein and carbohydrate and 9 kcal per gram of fat. Not a personal recommendation.' } },
      { id: 'meal-split', title: 'Turn daily targets into meals you can repeat', paragraphs: [
        'Large daily numbers are easier to hit when you split them across the meals you already eat. Spreading protein across three or four meals is a common practical approach and keeps any single meal from needing an unusual portion. The split below is one way to divide the example targets.',
        'Leave room for real life. If dinner is often unpredictable, plan a higher-protein breakfast and lunch so the day is not decided at 8 p.m. Repeating two or three reliable breakfasts also makes logging faster, because the same entry can be re-used. If you would rather not build meals yourself, Nexal Premium’s AI meal plans are built around your calorie and macro targets, preferences and allergies.',
      ], example: { title: 'Example split of 144 g protein, 297 g carbohydrate and 65 g fat', headers: ['Meal', 'Protein', 'Carbohydrate', 'Fat'], rows: [
        ['Breakfast', '35 g', '70 g', '15 g'],
        ['Lunch', '40 g', '80 g', '18 g'],
        ['Afternoon snack', '25 g', '45 g', '10 g'],
        ['Dinner', '44 g', '102 g', '22 g'],
      ], caption: 'Illustrative split. Any arrangement that reaches similar daily totals works.' } },
      { id: 'log-daily', title: 'Log against the targets every day', paragraphs: [
        'Log meals as you eat them rather than reconstructing the day at night. Weigh foods consistently, either raw or cooked, and match the entry to how you weighed it. A quick protein check mid-afternoon tells you whether dinner needs to carry more, which is easier than discovering a 50 g gap at bedtime.',
        'In Nexal, manual meal, calorie and macro logging is free, and recent meals can be logged again in a tap. Nexal calculates its own daily targets from your goal, weight and activity level, and custom gram targets cannot be typed in. If your hand-calculated numbers differ, keep them in a note and read Nexal’s daily totals against them.',
      ] },
      { id: 'review-weekly', title: 'Review weekly averages, then adjust slowly', paragraphs: [
        'Daily intake and scale weight both swing for ordinary reasons, including water, salt and training. Compare weekly averages instead: average intake, average morning weight and whether your logged lifts are holding or improving. Two or three weeks of data says far more than any single weigh-in.',
        'If weight is dropping faster than you intended and lifts are slipping, the deficit may be too large for this goal. If nothing has changed after several weeks of consistent logging, a small change of 100 to 150 kcal is a cautious next step. Change one thing at a time so you can tell what made the difference.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Log your macros free in Nexal', text: 'Log every meal against your targets free. AI meal plans are optional Premium.' },
    seeAlso: [
      { slug: 'how-to-track-calories-and-macros', label: 'How to track calories and macros' },
      { slug: 'protein-tracking-without-prescribed-targets', label: 'Protein tracking without prescribed targets' },
      { slug: 'raw-versus-cooked-food-weights', label: 'Raw versus cooked food weights' },
    ],
    sources: [
      { href: 'https://doi.org/10.1186/s12970-017-0177-8', label: 'International Society of Sports Nutrition position stand: protein and exercise (2017)' },
      { href: 'https://www.nationalacademies.org/read/11537/chapter/7', label: 'Institute of Medicine: Dietary Reference Intakes, macronutrients chapter' },
      { href: 'https://agresearchmag.ars.usda.gov/2013/sep/calories', label: 'USDA Agricultural Research: estimating calories' },
    ],
    faqs: [
      { question: 'Can you build muscle and lose fat at the same time?', answer: 'Some people can, especially those newer to resistance training or returning after a break. Progress is usually slower than a dedicated bulk or diet, and results are not guaranteed.' },
      { question: 'How much protein should I eat for recomposition?', answer: 'The International Society of Sports Nutrition describes 1.4 to 2.0 g per kilogram per day as sufficient for most exercising people. Your own needs can differ; a registered dietitian can set an individual target.' },
      { question: 'Can I enter custom macro targets in Nexal?', answer: 'Not currently. Nexal calculates targets from your goal, weight and activity level. You can keep your own numbers in a note and compare them with Nexal’s daily totals.' },
      { question: 'Do I need to hit my macros exactly every day?', answer: 'No. Weekly averages matter more than any single day, so aim for consistency and review trends over two or three weeks.' },
    ],
  },
  {
    ...publication,
    slug: 'push-pull-legs-routine-tracker-android',
    title: 'Push pull legs routine: 3-day and 6-day templates you can track on Android',
    metaTitle: 'Push Pull Legs Routine Tracker for Android',
    description: 'Illustrative 3-day and 6-day push pull legs templates, a simple double-progression rule and a way to log every session in a free Android tracker.',
    category: 'WORKOUT PLANNING', readTime: '7 min read',
    intro: 'Push pull legs (PPL) groups exercises by movement: pressing muscles one day, pulling muscles the next, then legs. It is easy to understand and easy to log, which is why it suits people who want a clear structure they can track session by session.',
    takeaway: 'Pick the three-day version unless you have the time and recovery for six, keep exercise names consistent, and add load only when your log shows you have earned it.',
    sections: [
      { id: 'what-is-ppl', title: 'How a push pull legs split is organised', paragraphs: [
        'Push sessions cover chest, shoulders and triceps; pull sessions cover back and biceps; leg sessions cover quadriceps, hamstrings, glutes and calves. Because related muscles train together, each session has a clear theme, and you always know which day comes next even when the calendar slips.',
        'Run once through, PPL fits three training days. Run twice, it fills six. The templates below are illustrative organisation tools, not individual programmes. Choose exercises and starting loads you can perform with good technique, ideally with guidance from a qualified trainer if a movement is new to you.',
      ] },
      { id: 'three-day-template', title: 'An illustrative 3-day push pull legs template', paragraphs: [
        'Three days with a rest day between sessions is a manageable starting point for most schedules. Each muscle group is trained directly once a week, so the quality of each session matters more than the number of exercises.',
      ], example: { title: 'Example 3-day PPL week', headers: ['Day', 'Session', 'Example exercises', 'Example sets × reps'], rows: [
        ['Monday', 'Push', 'Dumbbell bench press, overhead press, lateral raise, triceps pushdown', '3 × 6–10, 3 × 8–12, 2 × 12–15, 2 × 10–15'],
        ['Wednesday', 'Pull', 'Lat pulldown, seated cable row, face pull, biceps curl', '3 × 6–10, 3 × 8–12, 2 × 12–15, 2 × 10–15'],
        ['Friday', 'Legs', 'Leg press or squat, Romanian deadlift, leg curl, calf raise', '3 × 6–10, 3 × 8–10, 2 × 10–15, 2 × 10–15'],
      ], caption: 'Illustrative template for organising sessions. Not a personalised prescription; adjust exercises and volume with appropriate guidance.' } },
      { id: 'six-day-template', title: 'An illustrative 6-day push pull legs template', paragraphs: [
        'The six-day version trains each muscle group twice a week using two variations of each session, labelled A and B. It suits people with consistent time and recovery. Six sessions also means six logs a week, so naming matters: Push A and Push B keep your history comparable.',
        'If sessions start being missed, a six-day plan quietly becomes an irregular one. It is usually better to complete three planned days than to half-complete six. You can always move to six once the three-day version is consistent.',
      ], example: { title: 'Example 6-day PPL rotation', headers: ['Day', 'Session', 'Example focus'], rows: [
        ['Monday', 'Push A', 'Heavier presses: dumbbell bench press, overhead press'],
        ['Tuesday', 'Pull A', 'Heavier pulls: pulldown or pull-up, barbell or cable row'],
        ['Wednesday', 'Legs A', 'Squat or leg press focus'],
        ['Thursday', 'Push B', 'Incline press, machine shoulder press, more raises'],
        ['Friday', 'Pull B', 'Single-arm row, rear-delt work, curls'],
        ['Saturday', 'Legs B', 'Hip-hinge focus: Romanian deadlift, hip thrust, leg curl'],
        ['Sunday', 'Rest', 'Recovery'],
      ], caption: 'Illustrative rotation. Rest days can move to fit your week.' } },
      { id: 'progression-rule', title: 'A progression rule your log can enforce', paragraphs: [
        'Double progression is simple to track. Pick a repetition range for each exercise. Keep the load the same until you complete every set at the top of the range with good technique, then increase the load by the smallest step available and work back up the range. The American College of Sports Medicine position stand describes increasing load by around 2 to 10 per cent once you can exceed the target repetitions.',
        'Log the sets you actually completed, including the ones that fell short. A history that only records good days cannot tell you when to progress. Change one variable at a time, so if you switch from a barbell to dumbbells, treat it as a new exercise in your log rather than a continuation.',
      ], example: { title: 'Worked example: dumbbell bench press, target 3 × 8–10', headers: ['Session', 'Load per dumbbell', 'Reps completed', 'Decision'], rows: [
        ['1', '20 kg', '10, 9, 8', 'Stay at 20 kg'],
        ['2', '20 kg', '10, 10, 9', 'Stay at 20 kg'],
        ['3', '20 kg', '10, 10, 10', 'Top of range on all sets: increase next time'],
        ['4', '22 kg', '8, 8, 7', 'Work back up the range'],
      ], caption: 'Invented numbers. The smallest available increment depends on your equipment.' } },
      { id: 'track-in-nexal', title: 'Organise push pull legs in Nexal', paragraphs: [
        'In Nexal you can create custom workouts for free. Make one for each session, such as Push, Pull and Legs, or Push A and Push B for the six-day version, and add your exercises once. Each time you train, log sets, reps and weight, use the rest timer between sets and add notes such as seat settings or a grip change.',
        'Your workout history keeps each session comparable, and the weekly volume chart shows total weight × reps for the last eight weeks, so you can see whether the split is adding up over a training block rather than judging it from one session.',
        'If you would rather not build the plan yourself, Nexal Premium’s AI workout planner can generate a four to six week muscle-group plan, such as push pull legs or upper and lower, around your goal, experience and three to seven training days.',
      ] },
    ],
    feature: { href: '/free-workout-tracker-app', label: 'Log your push pull legs sessions free in Nexal', text: 'Track every push, pull and legs session free. Add an AI plan only if you want one.' },
    seeAlso: [
      { slug: 'four-day-workout-routine-organisation', label: 'Organising a four-day workout routine' },
      { slug: 'log-warm-up-sets-separately', label: 'Log warm-up sets separately' },
      { slug: 'exercise-substitutions-comparable-history', label: 'Keep history comparable after exercise substitutions' },
    ],
    sources: [
      { href: 'https://doi.org/10.1249/MSS.0b013e3181915670', label: 'American College of Sports Medicine position stand: progression models in resistance training (2009)' },
      { href: 'https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/', label: 'NHS: how to improve strength and flexibility' },
      { href: 'https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines', label: 'US Physical Activity Guidelines for Americans' },
    ],
    faqs: [
      { question: 'Is push pull legs good for beginners?', answer: 'The three-day version can suit beginners because each session has a clear theme and the week is easy to follow. Learn each movement with appropriate guidance before adding load.' },
      { question: 'Should I run push pull legs three or six days a week?', answer: 'Start with three unless you have consistent time and recovery for six. Completing three planned sessions beats half-completing six.' },
      { question: 'How do I know when to increase the weight?', answer: 'With double progression, increase the load by the smallest available step once you complete every set at the top of your repetition range with good technique.' },
      { question: 'Can Nexal create a push pull legs plan for me?', answer: 'Nexal Premium can generate a four to six week muscle-group plan, such as push pull legs, from your goal, experience and training days. Building and logging your own PPL workouts is free.' },
    ],
  },
  {
    ...publication,
    slug: 'barcode-scanner-calorie-tracker-android',
    title: 'Barcode scanner calorie tracker on Android: scan, check and log packaged food accurately',
    metaTitle: 'Barcode Scanner Calorie Tracker for Android',
    description: 'How to scan packaged foods accurately on Android, spot database errors, check serving bases and combine barcode entries with homemade meals.',
    category: 'NUTRITION TRACKING', readTime: '7 min read',
    intro: 'A barcode scanner turns a search into a single tap, but the speed only helps if the entry is right. This guide covers a scan-check-log routine, the database errors worth catching, and how to combine scanned ingredients with meals you cook yourself.',
    takeaway: 'Treat every scan as a suggestion: confirm the product, confirm whether the numbers are per serving or per 100 g, then log the amount you actually ate.',
    sections: [
      { id: 'how-scanning-works', title: 'What happens when you scan a barcode', paragraphs: [
        'A retail barcode encodes a product identifier, which GS1 standards call a Global Trade Item Number. The app uses that number to look up a record in a food database. The nutrition you see comes from that record, not from the barcode itself, so the quality of the database decides the quality of the entry.',
        'Databases differ. Some are curated by the app maker, while others are open and community-maintained. Nexal Premium’s scanner looks products up in Open Food Facts, a non-profit database built by volunteers. Open data covers a wide range of products, but any record can be incomplete or describe an older recipe, so checking stays part of the routine.',
      ] },
      { id: 'scan-check-log', title: 'A four-step scan, check and log routine', paragraphs: [
        'First, scan and read the product name, brand and variety, because a similar flavour can carry very different numbers. Second, find the basis: is the record per serving, per 100 g or per pack? Third, compare one number, usually energy, with the label in your hand. Fourth, log the quantity you actually ate, not the quantity the record assumes.',
        'The basis step catches the most expensive errors. In the example below, logging the scanned record as one serving would more than double the real intake. Checking takes a few seconds and becomes automatic after the first week.',
      ], example: { title: 'Worked example: a granola label versus a scanned record', headers: ['Source', 'Basis', 'Energy', 'What to log for a 45 g bowl'], rows: [
        ['Pack label', 'Per 100 g', '450 kcal', '450 × 45 ÷ 100 = 203 kcal'],
        ['Pack label', 'Per 45 g serving', '203 kcal', '1 serving = 203 kcal'],
        ['Scanned record', 'Shown as one serving', '450 kcal', 'Wrong basis: logging it adds 247 kcal too many'],
      ], caption: 'Invented values. Always calculate from the label on the pack you are eating.' } },
      { id: 'spot-errors', title: 'Spot database errors before they reach your diary', paragraphs: [
        'A quick arithmetic check catches many bad records. Multiply protein and carbohydrate by about 4 and fat by about 9, then compare the sum with the listed energy. Fibre, sugar alcohols and rounding explain small differences. A gap of hundreds of calories, every value at zero, or numbers that belong to a different product mean the record needs replacing with the label.',
        'Recipes change and packs are resized, so a record that was right last year can be wrong now. When the label and the record disagree, the label on the pack you bought wins. Allergen and ingredient decisions should always come from the physical label, never from a scan result.',
      ], bullets: [
        'Energy that does not roughly match protein × 4 + carbohydrate × 4 + fat × 9.',
        'A serving size that does not appear anywhere on the pack.',
        'All values at zero, or a name that does not match the product.',
        'A product that has been reformulated or resized since the record was made.',
      ] },
      { id: 'homemade-meals', title: 'Combine scanned ingredients with homemade meals', paragraphs: [
        'Barcodes do not exist for a pasta bake, but most of its ingredients have one. Use the labels to total the recipe, weigh the finished dish, and work out the energy per 100 g cooked. Then weigh your portion and log it. The calculation takes five minutes once and serves every portion of that batch.',
        'Keep the recipe card or a note with the totals so the next batch is faster. If you change an ingredient, recalculate rather than assuming the old numbers still apply.',
      ], example: { title: 'Worked example: pasta bake from scanned ingredients', headers: ['Ingredient', 'Label value per 100 g', 'Amount used', 'Energy'], rows: [
        ['Dry pasta', '355 kcal', '250 g', '888 kcal'],
        ['Tomato passata', '35 kcal', '400 g', '140 kcal'],
        ['Lean beef mince', '125 kcal', '500 g', '625 kcal'],
        ['Grated cheese', '400 kcal', '50 g', '200 kcal'],
        ['Whole dish', 'Cooked weight 1,600 g', 'About 116 kcal per 100 g', '1,853 kcal'],
      ], caption: 'Invented label values. A 400 g portion of this example would be about 463 kcal.' } },
      { id: 'choose-scanner-app', title: 'What to test in a barcode scanner app', paragraphs: [
        'Before paying for a scanner, scan the ten packaged foods you buy most often and count how many return a correct record. Check whether the basis is clearly shown, whether a missing product has a quick manual fallback, and whether scanning is free or paid. MyFitnessPal’s official Premium page, for example, lists barcode scanning as a paid feature.',
        'In Nexal, barcode scanning is part of Premium and manual meal, calorie and macro logging are free. If a product is not found, Nexal asks you to scan again or enter it manually. If a scanned record does not match your pack, log the food manually from the label instead of accepting the scan.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'See what is free and what Premium scanning adds', text: 'Log packaged and homemade meals free. Add barcode scanning with Premium if it saves you time.' },
    seeAlso: [
      { slug: 'food-barcode-scanner-limitations', label: 'What a successful barcode scan does not verify' },
      { slug: 'per-container-versus-per-serving-food-labels', label: 'Per container versus per serving labels' },
      { slug: 'track-homemade-meals-and-meal-prep-macros', label: 'Track homemade meals and meal prep macros' },
    ],
    sources: [
      { href: 'https://www.gs1.org/standards/barcodes', label: 'GS1: barcode standards' },
      { href: 'https://world.openfoodfacts.org/discover', label: 'Open Food Facts: about the project' },
      { href: 'https://www.foodstandards.gov.au/consumer/labelling/panels', label: 'Food Standards Australia New Zealand: nutrition information panels' },
      { href: 'https://agresearchmag.ars.usda.gov/2013/sep/calories', label: 'USDA Agricultural Research: estimating calories' },
    ],
    faqs: [
      { question: 'Is barcode scanning free in Nexal?', answer: 'No. Barcode scanning is a Nexal Premium feature. Manual meal, calorie and macro logging are free.' },
      { question: 'Which database does Nexal’s barcode scanner use?', answer: 'Nexal looks scanned products up in Open Food Facts, a non-profit, volunteer-built food database. Check each record against the pack before logging.' },
      { question: 'Why does a scanned food show different calories from the pack?', answer: 'The record may use a different basis, such as per 100 g instead of per serving, or describe an older recipe. The label on the pack you bought should win.' },
      { question: 'Can I scan a homemade meal?', answer: 'No, but you can scan or read the labels of its ingredients, total the recipe, divide by the cooked weight and log your weighed portion.' },
    ],
  },
  {
    ...publication,
    slug: 'workout-and-meal-plan-for-shift-workers',
    title: 'Workout and meal planning for shift workers: rotating rosters and flexible macro windows',
    metaTitle: 'Workout and Meal Plan for Shift Workers',
    description: 'Plan training and meals across rotating shifts with day types, flexible daily macro windows, a worked night-shift example and logging tips for Android.',
    category: 'SHIFT WORK', readTime: '7 min read',
    intro: 'A Monday-to-Friday plan breaks the first time your roster rotates. This guide plans by day type instead of weekday, treats daily macros as a window anchored to your sleep rather than to midnight, and shows how to keep the log readable across night shifts.',
    takeaway: 'Label each day by what it is (day shift, night shift, recovery or off), give each type a default workout and eating pattern, and judge progress by roster block rather than calendar week.',
    sections: [
      { id: 'day-types', title: 'Plan by day type, not by weekday', paragraphs: [
        'Look at the next roster and give every day one of four labels: day shift, night shift, recovery day after nights, or day off. Each label gets a default plan. When the roster changes, you relabel the days instead of rewriting the whole week, which is the difference between a plan that survives rotation and one that collapses.',
        'Be realistic about recovery days. The first day after a run of nights is often short on sleep and energy, so it suits a walk, mobility work or rest rather than your hardest session. Put demanding training on days off or after day shifts, when you are most likely to be rested.',
      ], example: { title: 'Example defaults for each day type', headers: ['Day type', 'Training default', 'Eating default'], rows: [
        ['Day off', 'Full session, 45–60 minutes', 'Normal meal pattern'],
        ['Day shift', 'Short session before or after work, 25–35 minutes', 'Packed lunch and planned snack'],
        ['Night shift', 'Rest or a short session after waking', 'Main meal before the shift, lighter food overnight'],
        ['Recovery after nights', 'Walk, mobility or rest', 'Regular meals to reset towards daytime'],
      ], caption: 'Illustrative defaults. Fit them to your sleep, commute and how you feel.' } },
      { id: 'macro-windows', title: 'Use a flexible daily macro window', paragraphs: [
        'A calendar day ends at midnight; your day does not. On night shifts, think of the daily target as a budget for the period between one main sleep and the next. The totals stay the same as on a normal day; only the timing moves. Spreading protein across three or four eating occasions while you are awake keeps the target manageable.',
        'Timing guidance for night work is practical rather than precise. NIOSH training for night-shift nurses suggests avoiding or reducing food between midnight and 6 a.m., favouring foods such as vegetables, soups, fruit, wholegrain sandwiches and yoghurt during the shift, and avoiding a large meal shortly before the main sleep. The example below follows that shape.',
      ], example: { title: 'Worked example: one night shift, 19:00 to 07:00, 140 g protein target', headers: ['Time', 'Eating occasion', 'Protein'], rows: [
        ['15:00', 'Meal after waking', '35 g'],
        ['17:30', 'Main meal before the shift', '45 g'],
        ['23:00', 'Lighter meal on break', '30 g'],
        ['03:00', 'Small snack, such as yoghurt and fruit', '10 g'],
        ['07:30', 'Small breakfast before daytime sleep', '20 g'],
      ], caption: 'Invented example. The window runs from waking at 14:30 to the next main sleep, not midnight to midnight.' } },
      { id: 'log-across-midnight', title: 'Keep the log readable across midnight', paragraphs: [
        'Food eaten at 03:00 lands on the next calendar date in most apps, which can make one night look like two half-days. Pick one convention and stick to it. Many people log every item to the date the shift started, so each roster day reads as a whole. Others log by calendar date and review two days together.',
        'In Nexal, a meal is saved to whichever date is selected in the food log, so you can choose either convention. Write your choice down once so that you do not double count a meal when you review the week. Repeated work meals can be logged again from recent foods in a tap.',
      ] },
      { id: 'review-blocks', title: 'Review by roster block, not calendar week', paragraphs: [
        'A week with four night shifts and a week of leave are different experiments. Compare like with like: one night block against the previous night block, one run of day shifts against the last. Average intake and training volume per block tell you more than a calendar-week total that mixes different patterns.',
        'If training keeps slipping on a particular day type, change that day type’s default rather than relying on willpower. A 25-minute session that happens is worth more in your log than a 60-minute session that is planned and skipped.',
      ] },
      { id: 'shift-plan-nexal', title: 'Set up a shift-friendly routine in Nexal', paragraphs: [
        'Create free custom workouts named by length or day type, such as Short session and Full session, so you can pick one to match the day. Log sets, reps and weight as usual. Nexal’s streak counts any day you log activity, including meals or water, so recovery days after nights still keep it going.',
        'Nexal Premium’s AI workout plans are built around three to seven training days per week. On a rotating roster, treat a generated plan as a menu of sessions to slot into day types, and regenerate it if your pattern changes for a long period. Nexal provides general fitness guidance, not advice on sleep or health conditions linked to shift work.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'See how Nexal keeps workouts and meals together', text: 'Plan by day type and log training and meals in one app. Core tracking is free.' },
    seeAlso: [
      { slug: 'fitness-app-shift-workers', label: 'Choosing a fitness app for shift workers' },
      { slug: 'workout-routine-changing-work-roster', label: 'A workout routine for a changing work roster' },
      { slug: 'food-diary-midnight-overnight-meals', label: 'Logging overnight meals across midnight' },
    ],
    sources: [
      { href: 'https://www.cdc.gov/niosh/work-hour-training-for-nurses/longhours/mod9/08.html', label: 'NIOSH: diet suggestions for night-shift workers' },
      { href: 'https://doi.org/10.1186/s12970-017-0177-8', label: 'International Society of Sports Nutrition position stand: protein and exercise (2017)' },
      { href: 'https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines', label: 'US Physical Activity Guidelines for Americans' },
    ],
    faqs: [
      { question: 'How should shift workers plan workouts?', answer: 'Plan by day type rather than weekday. Give days off and day shifts your longer sessions, keep night-shift days light, and use recovery days after nights for walking, mobility or rest.' },
      { question: 'Should I count macros from midnight to midnight on night shifts?', answer: 'Not necessarily. Many people treat the period from one main sleep to the next as the day. Keep the daily totals the same and choose one logging convention.' },
      { question: 'What should I eat during a night shift?', answer: 'NIOSH training for night-shift nurses suggests reducing food between midnight and 6 a.m. and choosing foods such as vegetables, soups, fruit, wholegrain sandwiches and yoghurt. For individual advice, speak with a health professional.' },
      { question: 'Does a rest day after night shifts break my Nexal streak?', answer: 'No, if you log something. The streak counts any day with logged activity, including a meal or water.' },
    ],
  },
];
