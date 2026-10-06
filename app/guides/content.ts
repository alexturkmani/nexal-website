export type GuideSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  example?: { title: string; headers: string[]; rows: string[][]; caption: string };
};
export type Guide = {
  slug: string; title: string; metaTitle: string; description: string; category: string;
  readTime: string; intro: string; takeaway: string; sections: GuideSection[];
  feature: { href: string; label: string; text: string };
  sources: { href: string; label: string }[];
  faqs: { question: string; answer: string }[];
};

export const publishedDate = '2026-10-06';

export const guides: Guide[] = [
  {
    slug: 'beginner-3-day-workout-plan',
    title: 'A beginner three-day workout week you can actually organise',
    metaTitle: 'Beginner 3-Day Workout Plan: Gym Week & Tracking',
    description: 'Organise a beginner three-day gym week, keep a simple workout log and understand how AI planning differs from free workout tracking in Nexal.',
    category: 'WORKOUT PLANNING', readTime: '5 min read',
    intro: 'A useful workout plan answers three questions: when will you train, what will you practise, and how will you remember what you did? Start with a manageable week before worrying about complicated splits.',
    takeaway: 'Choose a schedule you can repeat. Keep the session details visible. Treat an example plan as a starting point, not a prescription for your body.',
    sections: [
      { id: 'schedule', title: 'Start with your calendar, not a six-day split', paragraphs: [
        'For someone learning their way around a gym, three available training days can make a clear weekly structure. Monday, Wednesday and Friday is one example, not a requirement. A two-day routine may fit your life better; more sessions are not automatically better sessions.',
        'The NHS recommends muscle-strengthening activity on at least two days each week as part of general adult activity guidance. That does not mean every person should follow the same exercises, intensity or timetable. Your experience, recovery and any health conditions matter.',
        'Pick realistic time slots and arrange an induction if you are unfamiliar with the equipment. Ask a qualified trainer to help you select movements and learn technique before adding challenging loads.',
      ] },
      { id: 'example-week', title: 'An illustrative three-day beginner gym week', paragraphs: [
        'This example shows how to organise sessions and notes. It is not an individual training programme and does not prescribe weights, sets or repetitions. Choose the actual exercises and workload with appropriate instruction.',
      ], example: { title: 'Example calendar: training and recovery', headers: ['Day', 'Session focus', 'What to record'], rows: [
        ['Monday', 'Full-body session: practise a squat, push and pull pattern', 'Exercises, completed sets, repetitions and technique notes'],
        ['Wednesday', 'Full-body session: revisit familiar movements and practise a hinge pattern', 'What felt comfortable and any changes agreed with your trainer'],
        ['Friday', 'Full-body session: repeat suitable movements and review the week', 'Completed work, recovery and next week’s available days'],
      ], caption: 'Illustrative organisation only. Leave room between sessions for recovery; adapt the schedule to your needs.' }, bullets: [
        'Before each session: follow the warm-up and technique guidance appropriate to your chosen movements.',
        'Between sessions: note how you feel rather than treating every free day as another hard workout.',
        'If an exercise causes pain or concerning symptoms, stop and seek appropriate advice rather than trying to complete the log.',
      ] },
      { id: 'workout-log', title: 'Keep a workout log that helps your next session', paragraphs: [
        'An exercise name alone is not much use next week. Record the variation you performed, the resistance used where relevant, and the sets and repetitions you completed. A short note such as “needed help setting up the machine” can be more useful than chasing a personal record.',
        'Compare like with like. Changing the exercise, equipment and technique every session makes a simple load comparison less meaningful. Ask your trainer when it is appropriate to progress rather than increasing weight because a graph looks flat.',
        'In Nexal, core workout logging, custom workouts and workout history are available without a subscription. Use those tools to keep the plan and your actual sessions together. You do not need Premium simply to record a workout.',
      ] },
      { id: 'ai-plan', title: 'When an AI workout planner can help', paragraphs: [
        'An AI planner is useful when you want help organising exercises around your goal, experience, training days and home or gym setting. Be specific about what you can realistically do. A polished plan is still only helpful if you can follow it.',
        'Nexal Premium generates personalised four-to-six-week workout plans, including exercise sets, repetitions and rest times. AI generation is a paid feature; the free tracker and this educational example are not a free AI workout generator.',
        'Review any generated plan before using it. AI can make mistakes and is not a substitute for a qualified coach, injury assessment or medical advice. Revisit the plan if your circumstances change.',
      ] },
      { id: 'review', title: 'Review consistency before judging results', paragraphs: [
        'At the end of the week, check which sessions you actually completed, what was difficult to organise, and whether your next week needs a different schedule. This gives you a practical adjustment rather than a verdict on your fitness.',
        'For your first tracked week, success can simply mean learning the workflow and keeping clear notes. No app or example timetable can guarantee a particular body change or rate of progress.',
      ] },
    ],
    feature: { href: '/ai-workout-planner', label: 'Explore Nexal’s AI workout planner', text: 'Log workouts for free. Upgrade only when you want personalised AI planning.' },
    sources: [{ href: 'https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/', label: 'NHS: strength and flexibility guidance' }],
    faqs: [
      { question: 'Do beginners have to train three days a week?', answer: 'No. Three days is an example schedule. Choose a suitable routine around your circumstances and seek qualified guidance when you need help with exercise selection or technique.' },
      { question: 'Can I log this workout week in Nexal for free?', answer: 'Yes. Core workout logging and custom workouts do not require Premium. AI-generated workout plans do require Premium.' },
    ],
  },
  {
    slug: 'how-to-track-calories-and-macros',
    title: 'How to track calories and macros without making logging complicated',
    metaTitle: 'How to Track Calories & Macros: A Worked Example',
    description: 'Learn calorie and macro logging with a worked serving-size example, common mistakes and a simple daily routine. Start tracking free in Nexal on Android.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'Food logging becomes clearer when you know what the numbers describe. The most useful first skill is matching the amount you eat to the serving size on the label, not finding a perfect daily macro split.',
    takeaway: 'Match the food entry, units and portion before comparing totals. Treat estimates as estimates and keep tracking optional and appropriate to your wellbeing.',
    sections: [
      { id: 'basics', title: 'Calories and macros describe different parts of the same food', paragraphs: [
        'Calories describe energy. Protein, carbohydrate and fat are macronutrients, usually recorded in grams. A food can contribute all three, so its protein figure does not replace its calorie figure.',
        'As a rough calculation, protein and carbohydrate each provide four kilocalories per gram, while fat provides nine. Label totals can differ from a simple calculation because of rounding and other components such as fibre. Use the actual label for the food you are logging rather than treating the formula as a perfect audit.',
        'This guide explains logging, not how many calories you should eat. Personal nutrition targets depend on individual circumstances. If you need advice about a condition, pregnancy or a difficult relationship with food, speak with a qualified healthcare professional.',
      ] },
      { id: 'serving-example', title: 'A worked example: convert per-100 g values to your portion', example: { title: 'Illustrative portion calculation', headers: ['Label entry', 'Per 100 g', 'For 150 g'], rows: [
        ['Energy', '200 kcal', '300 kcal'], ['Protein', '10 g', '15 g'], ['Carbohydrate', '25 g', '37.5 g'], ['Fat', '6 g', '9 g'],
      ], caption: 'Portion multiplier = 150 ÷ 100 = 1.5. This example is not a daily calorie or macro target.' }, paragraphs: [
        'Imagine a food label gives the values below per 100 grams and you eat 150 grams. Multiply each value by 1.5. These are invented numbers for teaching the calculation, not the nutrition values of a recommended food.',
        'If an entry is per serving instead, check what that serving means. Two servings are not automatically 200 grams. Also check whether a value is in kcal or kJ; copying the number without the unit can make the entry substantially wrong.',
      ] },
      { id: 'daily-routine', title: 'Build a simple daily logging routine', paragraphs: [
        'Choose the meal, identify the food and enter the amount you actually ate. Check whether the entry describes the food raw, cooked or prepared: the same weight can mean something different after cooking.',
        'For a mixed meal, logging the ingredients can be clearer than choosing a vaguely similar restaurant dish. Record the portion of the finished recipe you ate and avoid counting both the recipe and its ingredients again.',
        'When you repeat a meal, reuse a recent entry and adjust it if the portion or ingredients change. Nexal supports core meal, calorie and macro tracking without a subscription, including copying recent meals for faster logging.',
      ], bullets: ['Check the food description and serving unit.', 'Adjust the quantity to match your portion.', 'Include additions such as sauces when relevant.', 'Review the entry once rather than repeatedly chasing perfect precision.'] },
      { id: 'common-errors', title: 'Common macro-tracking mistakes worth checking', paragraphs: [
        'A mistaken serving size can matter more than the difference between two similar food database entries. Start by checking portions, units and whether the food is raw or cooked.',
        'Barcode scanning helps find packaged-food information, but you still need to check the product and portion. AI food estimates are estimates, especially when ingredients or portion sizes are unclear. Neither tool removes the need to review an entry.',
        'Do not interpret a single day’s total as a diagnosis or a promise of weight change. If logging becomes distressing or compulsive, pause and seek appropriate support. Tracking is a tool, not a requirement for taking care of yourself.',
      ] },
      { id: 'free-premium', title: 'Free macro tracking versus Premium meal planning', paragraphs: [
        'Tracking records what you ate. Planning helps organise what you might eat next. They are connected but they are not the same feature, and an app should make that distinction clear before you subscribe.',
        'Nexal’s free tools cover core manual tracking. Premium adds AI meal plans around your targets and preferences, meal substitutions, AI macro estimates and barcode scanning. Review generated meal ideas and independently check ingredients if you have allergies.',
        'Start by logging a familiar meal. You can decide later whether planning and scanning save enough time to justify a subscription.',
      ] },
    ],
    feature: { href: '/calorie-macro-tracker', label: 'Explore the free calorie and macro tracker', text: 'Keep calories and macros beside your workouts. Premium AI meal planning is optional.' },
    sources: [
      { href: 'https://www.nhs.uk/live-well/eat-well/food-guidelines-and-food-labels/how-to-read-food-labels/', label: 'NHS: how to read food labels' },
      { href: 'https://www.nhs.uk/live-well/eat-well/food-types/different-fats-nutrition/', label: 'NHS: energy from fat, protein and carbohydrate' },
    ],
    faqs: [
      { question: 'Do I need a subscription to track macros in Nexal?', answer: 'No. Core calorie and macro tracking are free. Premium is needed for AI planning, AI estimates and barcode scanning.' },
      { question: 'Should label calories exactly match the macro calculation?', answer: 'Not always. Rounding and components such as fibre can cause differences. Check the label, serving size and units before assuming an entry is wrong.' },
    ],
  },
  {
    slug: 'choose-workout-and-meal-planner-app',
    title: 'How to choose a workout and meal planner app for Android',
    metaTitle: 'Choose a Workout & Meal Planner App for Android',
    description: 'Compare free tracking, AI plans, food logging and subscription terms before choosing an Android workout and meal planner. Use this practical checklist.',
    category: 'APP BUYING GUIDE', readTime: '4 min read',
    intro: 'A feature list is only the beginning. The right fitness app needs to fit your actual routine, make everyday logging manageable and explain what you will pay for before you commit.',
    takeaway: 'Test your real workflow before subscribing: one workout, one meal and a review of your progress. Compare the features you will actually use.',
    sections: [
      { id: 'job', title: 'Decide whether you need tracking, planning or both', paragraphs: [
        'If you already have a coach or a routine you like, you may mainly need a place to record sessions and meals. Paying for AI plan generation is not automatically useful in that situation.',
        'If you struggle to organise your week, planning tools may matter more. Check what inputs they accept and what the output contains: exercise names alone are different from sessions with sets, repetitions and rest times.',
        'For nutrition, ask whether you want a diary, meal ideas or both. A calorie counter does not necessarily generate meal plans, and a meal-planning app does not necessarily make daily logging easy.',
      ] },
      { id: 'checklist', title: 'A practical checklist before your first subscription', paragraphs: [
        'Use the same checklist for each app rather than comparing screenshots alone. The table describes questions to test, not a ranking of competitors.',
      ], example: { title: 'Check the workflow, not just the marketing', headers: ['Area', 'Question to answer'], rows: [
        ['Free access', 'Can I log workouts and meals without starting a subscription?'],
        ['Workout plans', 'Does the planner support my experience, schedule and home or gym setting?'],
        ['Food logging', 'Can I change portions and reuse a meal without starting over?'],
        ['Progress', 'Can I find previous entries and understand what a chart represents?'],
        ['Billing', 'Are the local price, renewal period and trial terms clear?'],
        ['Support', 'Can I restore a purchase and find help if access does not update?'],
      ], caption: 'Open each app and test the tasks that matter to you. Feature availability and prices can change.' } },
      { id: 'nexal-fit', title: 'Where Nexal fits, and what requires Premium', paragraphs: [
        'Nexal is an Android app that brings workout and nutrition tracking together. Core meal, calorie, macro, workout and progress tracking are available without a subscription. Custom workouts and recent-meal copying support a repeatable daily routine.',
        'Premium adds AI workout plans, AI meal plans, substitutions, AI macro estimates and barcode scanning. Workout generation supports gym or home settings and different experience levels; meal planning uses your targets and preferences.',
        'That combination may suit someone who wants planning and logging in one place. It may not suit someone looking for an iPhone app or expecting AI guidance to replace individual professional advice. Nexal is currently available through Google Play for Android.',
      ] },
      { id: 'trial', title: 'Read the trial and renewal terms before subscribing', paragraphs: [
        'Check the actual price shown by Google Play for your country and chosen plan. An annual equivalent monthly price is not a monthly payment: the annual amount is charged according to the terms shown at checkout.',
        'Nexal advertises a fourteen-day free trial for eligible new subscribers. Eligibility and the applicable offer are determined through Google Play. Read the renewal amount and cancellation terms before confirming; do not assume every account or offer includes a trial.',
        'During a trial, test the features you subscribed for. Generate and review a plan, use it in your routine and decide whether it saves you time. Manage or cancel a Google Play subscription through Google Play. Uninstalling an app is not a cancellation workflow.',
      ] },
      { id: 'first-session', title: 'A useful first-session test', paragraphs: [
        'Choose a familiar meal and log it with the correct portion. Record a workout you understand, then find the entry again in your history. This tests whether the app helps with real daily tasks before you judge the design or advanced features.',
        'If you choose Premium, check that the plan reflects the settings you supplied. Look for clear instructions and review anything that seems unsuitable. Also reopen the app to confirm that your subscription access remains available.',
        'This guide is published by Nexal, so it is not an independent product review. It is intended to help you assess fit, understand feature boundaries and make an informed decision without claims that one app is best for everyone.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'See Nexal’s workout and meal planning features', text: 'Try core tracking for free before deciding whether Premium tools fit your routine.' },
    sources: [{ href: 'https://support.google.com/googleplay/answer/7018481', label: 'Google Play: manage and cancel subscriptions' }],
    faqs: [
      { question: 'Is an annual fitness subscription always better value?', answer: 'Only if you use the app enough to justify the commitment. Compare the total charge and renewal terms, not just an equivalent monthly figure.' },
      { question: 'Is this an independent comparison of fitness apps?', answer: 'No. This guide is published by Nexal and explains a practical selection checklist alongside Nexal’s own feature boundaries.' },
    ],
  },
];

export function findGuide(slug: string) { return guides.find((guide) => guide.slug === slug); }
