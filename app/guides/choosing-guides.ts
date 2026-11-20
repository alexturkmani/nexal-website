import type { Guide } from './content';

export const choosingGuides: Guide[] = [
  {
    slug: 'fitness-app-android-beginners',
    title: 'Choosing a fitness app for Android as a complete beginner',
    metaTitle: 'Fitness App for Android Beginners',
    description: 'Choose your first Android fitness app with a practical setup test, clear logging priorities and an honest look at free Nexal features.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'Your first fitness app should make one ordinary task easier. Start by learning to record something familiar, then decide whether more tools belong in your routine.',
    takeaway: 'Judge a beginner app by whether you can enter, correct and retrieve a real record on your own Android phone.',
    sections: [
      { id: 'first-job', title: 'Give your first app one clear job', paragraphs: [
        'Write a sentence describing the problem you want to solve before opening the store. Perhaps you forget which exercises you completed, or you want one place to record lunch. These are specific jobs you can test. A broad ambition such as getting healthier does not tell you whether a particular screen or subscription will help tomorrow.',
        'Choose a starting task that uses information you already understand. If you have a suitable workout from an instructor, recording that session is a sensible first exercise in using the software. If you want a food diary, begin with a familiar packaged item. Learning an unfamiliar training programme and unfamiliar software together makes problems harder to identify.',
      ] },
      { id: 'phone-test', title: 'Try the workflow on your actual phone', paragraphs: [
        'Check the current Google Play listing on the Android phone you intend to use. Install the app and read the setup questions before entering details. Then try the screen in the place you would normally log: standing beside your gym bag or sitting at your kitchen table. Store screenshots cannot show how readable the interface feels to you.',
        'Run three small tasks: create an entry, fix a deliberate typing mistake and find the saved result. For example, enter an exercise you know, correct its completed repetition count and reopen the session from history. A beginner needs a reliable route through those tasks more than a large collection of charts they cannot yet interpret or use.',
      ] },
      { id: 'first-week', title: 'Build a first week around learning the controls', paragraphs: [
        'For the first few uses, keep the scope narrow. Record the same type of information so you learn where it belongs. Write down unfamiliar terms outside the app and look them up before making decisions from them. If a field asks for a target you do not understand, avoid borrowing a number from a promotional example.',
        'At the end of that week, ask what went wrong in the workflow. Did you forget to save, choose an ambiguous exercise name or enter a food portion on the wrong basis? Resolve one repeatable issue at a time. A clear record of a modest amount of information is more useful than an impressive dashboard filled with uncertain entries.',
      ] },
      { id: 'nexal-start', title: 'Start with Nexal tracking before considering planning', paragraphs: [
        'Nexal is an Android app with free core manual workout logging, custom workouts and workout history. Manual meal, calorie and macro logging are also free, including copying recent meals. Choose whichever side answers your starting question. You can evaluate the tracking workflow without making AI planning part of your first day or taking out a subscription.',
        'Premium adds AI workout and meal planning, AI macro estimates and barcode scanning. Consider these after you can explain the task they would help you complete. Software familiarity does not establish that an exercise or diet is suitable for you. Ask an appropriate qualified professional for help with technique or individual needs, while using the app to organise your records.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal for Android', text: 'Start with free manual tracking and learn one workflow at a time.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: Android tracking and optional Premium planning' }],
    faqs: [
      { question: 'What should I test in my first fitness app?', answer: 'Try creating, correcting and retrieving one real entry. Those tasks reveal whether the app is understandable on your phone.' },
      { question: 'Do beginners need Nexal Premium?', answer: 'No. Core manual workout and nutrition tracking are free. Premium is optional for AI planning, AI macro estimates and barcode scanning.' },
    ],
  },
  {
    slug: 'all-in-one-fitness-app-vs-separate-trackers',
    title: 'An all-in-one fitness app or separate trackers: which fits your routine?',
    metaTitle: 'All-in-One Fitness App vs Separate Trackers',
    description: 'Compare one fitness app with separate workout and food trackers by testing daily handoffs, duplicate work and the records you actually need.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'Keeping workouts and food in one app can simplify daily organisation. Separate tools can also make sense when each already handles a distinct job well.',
    takeaway: 'Count the handoffs and missing information in your own routine before deciding how many apps to keep.',
    sections: [
      { id: 'map-handoffs', title: 'Map where you move between tools', paragraphs: [
        'Describe a normal day from the moment you check a previous workout to the moment you review your meal diary. List each app, notebook or phone note you open. Mark why you switch. Looking up a completed exercise and then entering lunch are different tasks; manually copying information between systems is an additional task that deserves closer attention.',
        'For example, you might use a gym notebook, a food tracker and a Sunday summary note. The summary could require finding dates in two places every week. A combined tracker may reduce that searching. If you never review those records together, however, the convenience of consolidation may be less important than the quality of each individual logging workflow.',
      ] },
      { id: 'essential-detail', title: 'Protect the detail that makes each record useful', paragraphs: [
        'Write down the fields you rely on before replacing a specialist tool. For a workout, these might be the exact movement variation and completed work. For a meal, they might be the portion basis and nutrition values. Treat these as acceptance criteria. A combined home screen does not compensate for losing information you need to interpret an entry later.',
        'Use a concrete example from each side during evaluation. Can you distinguish a machine exercise from a similarly named free-weight movement? Can you distinguish a whole package from a single serving? You do not need to compare every feature in every product. You need to establish whether the new system preserves the meaning of the records you personally use.',
      ] },
      { id: 'parallel-test', title: 'Run a bounded comparison without double logging forever', paragraphs: [
        'Pick one completed session and one familiar meal as test cases. Enter the examples in the candidate system and compare how easily you can retrieve them. Keep your existing records as your reference during this test. Make the comparison small enough to finish; maintaining duplicate diaries indefinitely can obscure whether consolidation actually reduces effort in normal use.',
        'Evaluate the next review as well as the initial entry. Ask whether you can answer two questions: what training did I complete, and what food did I record? Keeping those answers nearby may help organisation, but it does not establish that one caused the other. Avoid drawing nutrition or training conclusions simply because two charts appear on the same screen.',
      ] },
      { id: 'combined-choice', title: 'Choose consolidation for a specific practical benefit', paragraphs: [
        'Nexal brings free manual workout logging, custom workouts and history together with free meal, calorie and macro logging on Android. It also lets you copy recent meals. This makes it a candidate when your priority is maintaining both kinds of diary in one place. Test the actual entries you need rather than treating all-in-one as a complete feature specification.',
        'Keep separate trackers if a requirement you depend on remains unverified in the replacement. Before leaving any paid tool, review its billing separately and retain records you need through options it actually offers. Choose one clear reason for the final arrangement, such as easier weekly retrieval or a better workout entry process, then revisit that reason after ordinary use.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'See Nexal’s combined tracking workflow', text: 'Try a workout and a meal in one Android app before changing your routine.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: combined workout and meal tracking' }],
    faqs: [
      { question: 'Is one fitness app always better than two?', answer: 'No. Choose the arrangement that preserves your essential details and reduces meaningful effort in your routine.' },
      { question: 'Does a combined tracker explain how food affects a workout?', answer: 'Putting records together does not establish causation. Use the diary for organisation and seek qualified advice for individual interpretation.' },
    ],
  },
  {
    slug: 'free-vs-paid-fitness-app-decision',
    title: 'Free versus paid fitness apps: decide what is worth paying for',
    metaTitle: 'Free vs Paid Fitness Apps: A Decision Guide',
    description: 'Decide whether a fitness subscription solves a real task. Compare free Nexal logging with Premium planning, estimates and barcode tools.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'A paid app is worthwhile only when the features you use justify the cost to you. Start with the job you need done and the budget you can comfortably allocate.',
    takeaway: 'Pay for a demonstrated use case, and assess the actual billing commitment rather than the number of advertised features.',
    sections: [
      { id: 'identify-cost', title: 'Identify the problem behind the upgrade', paragraphs: [
        'Separate difficulty recording information from difficulty deciding what to do next. If you already have a suitable routine and simply forget your previous session, workout history may solve the problem. If you repeatedly spend time organising possible sessions, a planning tool may be relevant. Paying for a planner will not necessarily fix an awkward recording habit or an unclear goal.',
        'Make a short list of the moments when your current process breaks down. Write the action beside each one: enter a meal, identify a packaged item or organise a proposed week. Then connect each action to a feature you can verify. A subscription deserves consideration when it addresses a recurring task, rather than an inconvenience you encounter once during setup.',
      ] },
      { id: 'free-boundary', title: 'Understand what Nexal includes without payment', paragraphs: [
        'Nexal includes core manual workout logging, custom workouts and history for free on Android. Its free nutrition tools include manual meal, calorie and macro logging and copying recent meals. If these cover your needs, using the free version is a complete decision. You do not have to upgrade simply because you have been consistent or have accumulated a longer diary.',
        'Premium includes AI workout and meal planning, AI macro estimates and barcode scanning. Consider each independently. A person using an existing instructor-provided routine might value barcode entry but have little use for generated workouts. Someone who mostly eats familiar meals might prefer copying recent entries. Your likely pattern of use matters more than a generic list of premium features.',
      ] },
      { id: 'budget-example', title: 'Compare cost against realistic usage', paragraphs: [
        'Use the price and billing period displayed in your own checkout. As an arithmetic example only, an imaginary tool costing 12 currency units for a month and used on 12 occasions costs one unit per occasion. If you use it three times, the figure becomes four. These invented numbers are not Nexal prices or a promise of financial value.',
        'Also check the amount actually charged. An annual commitment displayed as a monthly equivalent still has a different cash requirement from a monthly purchase. Write down the full charge, the renewal interval and the task you expect to use. Compare that commitment with your budget without assuming an upgrade will produce a specific fitness outcome or reimburse itself through time savings.',
      ] },
      { id: 'review-value', title: 'Set a review question before subscribing', paragraphs: [
        'Choose a question you can answer after normal use: did I use the planning tool when preparing my week, or did scanning reduce the manual entry I disliked? Record a few examples outside the app. Judge the feature by completed useful tasks. Opening a paid screen repeatedly is not the same as receiving practical help from the subscription.',
        'Review again when your circumstances change. A tool that suited a predictable month may be less useful during exams or travel. Keep free tracking as an option when it meets your needs. If you decide to stop a paid service, check the cancellation process with the billing provider and verify the resulting status rather than relying on simply opening the app less often.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Review Nexal’s free and Premium tools', text: 'Use free tracking first and assess paid tools against your own recurring tasks.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: free tracking and optional Premium planning' }],
    faqs: [
      { question: 'Can I keep using Nexal just for free logging?', answer: 'Yes. Core manual workout and nutrition logging are free; Premium tools are optional.' },
      { question: 'How can I judge whether Premium is worth it?', answer: 'Choose a specific task, test whether the paid feature helps you complete it and compare your actual usage with the checkout cost and billing commitment.' },
    ],
  },
  {
    slug: 'test-fitness-app-before-subscribing',
    title: 'How to test a fitness app before subscribing',
    metaTitle: 'Test a Fitness App Before Subscribing',
    description: 'Run a practical fitness app test with entry, correction and retrieval tasks, then evaluate any paid tools separately before subscribing.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'A useful app test has a small set of tasks and a clear decision at the end. You can evaluate the core workflow before considering a subscription offer.',
    takeaway: 'Test complete tasks with familiar information, including mistakes and repeat use, before judging whether paid features add value.',
    sections: [
      { id: 'test-brief', title: 'Write a short test checklist', paragraphs: [
        'Choose three tasks you would genuinely repeat: recording a familiar workout, entering a meal and finding yesterday’s record. Give each a clear success condition. For example, success for the workout task means the saved session contains the correct exercise variation and completed work, and you can reopen it without consulting instructions. This makes the test more specific than browsing screens.',
        'Use information you can independently check. Take a recent session from your notebook and a food label from your kitchen. Keep those references beside you during the test. If something looks wrong, you can identify whether the issue came from your input, your interpretation of a field or a feature that does not handle the task as expected.',
      ] },
      { id: 'make-correction', title: 'Include a deliberate mistake and a return visit', paragraphs: [
        'First enter the examples normally. Then deliberately mistype a simple value and try to correct it before treating the result as a real record. This reveals whether you understand the editing process. A polished first-entry experience can hide confusion around fixing data, which matters when you will be using the same tool repeatedly in busy or distracting settings.',
        'Close the app and return during your next ordinary logging opportunity. Retrieve the earlier examples and check that their meaning is still clear. Look for ambiguous names, missing portion information or confusion between a planned session and completed work. The point is to test retrieval after context has faded, not just your memory of where you tapped a minute earlier.',
      ] },
      { id: 'paid-test', title: 'Test paid tools only against an additional question', paragraphs: [
        'Nexal’s free manual workout and nutrition tracking lets you perform the core entry test on Android without subscribing. If that workflow fits, identify an extra question before considering Premium. You might want help producing a draft workout plan, or you might want to test barcode entry for products you use. Those are different evaluations with different evidence.',
        'If a trial is offered to your account, read its duration, later charge and cancellation terms in the purchase flow before accepting. Do not assume every user receives the same offer. Keep the test focused on usability and practical fit; an app trial cannot establish long-term training outcomes, nutritional suitability or the accuracy of every AI-generated suggestion you might receive.',
      ] },
      { id: 'decision-notes', title: 'Make the result explainable in a few sentences', paragraphs: [
        'Keep a separate note with the task, what happened and the consequence. An example might read: I found last week’s session easily, but I confused two exercise variations, so I need clearer naming before switching. Another might say: copying a familiar meal helped, so manual logging already covers the repeated-entry problem I expected scanning to solve.',
        'Decide whether to keep testing, use free tracking or purchase a specific feature. If you cannot name what the paid feature improves, gather more ordinary use before committing. If a must-have task fails, retain your existing system while you investigate. A useful evaluation ends with a concrete reason, rather than pressure to justify the time you already spent testing.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Try Nexal’s core tracking workflow', text: 'Evaluate free entry and history before considering Premium tools.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: core tracking and Premium feature overview' }],
    faqs: [
      { question: 'How long should I test a fitness app?', answer: 'Use enough ordinary logging opportunities to test entry, correction and later retrieval. A fixed duration matters less than completing those tasks.' },
      { question: 'Does trying free Nexal logging start a Premium trial?', answer: 'Free core tracking does not require a subscription. Treat any separate Premium offer as a purchase decision and read the terms shown to your account.' },
    ],
  },
  {
    slug: 'fitness-app-busy-parents',
    title: 'Choosing a fitness app for busy parents: organise the interruptions',
    metaTitle: 'Fitness App for Busy Parents',
    description: 'Choose an Android fitness app around childcare handovers, interrupted sessions and repeated meals, with a practical organisation-first test.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'For a parent, the difficult part of tracking may be returning to a task after an interruption. Evaluate an app around those handovers and unfinished moments.',
    takeaway: 'Choose a workflow you can understand after being interrupted, and keep family scheduling separate from individual training decisions.',
    sections: [
      { id: 'available-window', title: 'Describe your available window honestly', paragraphs: [
        'List the practical conditions around an ordinary gym visit: school collection, a childcare handover, transport and the time needed to get home. Distinguish the time available for the entire outing from the time inside the gym. An app evaluation should use the real window. A routine that depends on an unusually quiet weekend tells you little about a normal Tuesday.',
        'Use a separate household calendar to agree who is responsible for each handover. Your fitness tracker can hold workout records, while that calendar holds family commitments. Clear responsibilities reduce the need to reinterpret the plan on the day. This is an organisational exercise, not a recommendation about how many sessions a parent should fit around childcare or household work.',
      ] },
      { id: 'interrupted-entry', title: 'Test returning after an interruption', paragraphs: [
        'Choose a familiar completed session and practise recording part of it, leaving the app and returning later. Check what you can actually retrieve, rather than assuming unfinished entries will be retained. If the process is unclear, finish and verify each record at a convenient pause or keep a temporary note until you can enter it properly.',
        'Consider a hypothetical parent who leaves the gym early because a child needs collecting. The useful record contains the work actually completed. The original intention belongs in the plan, not in the completed history. At the next visit, that distinction helps the person remember where they stopped without making the diary appear more complete than the session really was.',
      ] },
      { id: 'repeat-meals', title: 'Reduce repeated entry without assuming identical portions', paragraphs: [
        'Family meals often repeat, which makes copying a recent meal worth testing. Nexal includes that function in its free manual nutrition tracking on Android. Try it with your own familiar breakfast or lunch, then review the copied contents. The goal is to avoid retyping known information while keeping the new entry faithful to the food you actually ate.',
        'A shared dinner does not mean everyone ate the same amount. If you record your portion, distinguish it from the full dish and from another family member’s serving. Check changed ingredients and additions when reusing an entry. Keep this as your individual diary; buying an app for your own organisation does not require creating food or calorie records for your children.',
      ] },
      { id: 'weekly-reset', title: 'Choose a short review that leads to one practical change', paragraphs: [
        'At a convenient weekly handover, review which planned opportunities were available and which records were easy to maintain. Ask whether the problem was travel, unclear childcare coverage or an entry process that took too much attention. Then change one organisational detail, such as packing the gym bag earlier or agreeing a clearer pickup arrangement. Avoid treating every interrupted week as a training failure.',
        'Nexal offers free workout logging, custom workouts and history alongside meal, calorie and macro logging. These tools may suit a parent who wants fewer places to maintain records. Premium AI planning is optional. Judge the free diary first, using an ordinary family week, and decide whether additional planning tools help with a task you can identify and realistically complete.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal’s daily tracking tools', text: 'Keep your own workout and meal records together on Android.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: free workout and nutrition tracking' }],
    faqs: [
      { question: 'What should parents prioritise when testing an app?', answer: 'Test retrieval after an interruption, recording only completed work and reusing familiar meals with portion checks.' },
      { question: 'Does this guide recommend a training schedule for parents?', answer: 'No. It addresses organisation around childcare and daily commitments, rather than prescribing exercise or nutrition.' },
    ],
  },
  {
    slug: 'fitness-app-frequent-travellers',
    title: 'Choosing a fitness app for frequent travellers',
    metaTitle: 'Fitness App for Frequent Travellers',
    description: 'Evaluate a fitness diary for changing gyms, unfamiliar meals, travel dates and connectivity before relying on it during your next trip.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'Travel changes the context of a fitness record. The same exercise name, meal description or calendar date may mean something different away from home.',
    takeaway: 'Test the app before departure, keep travel records interpretable and verify essential access requirements rather than assuming them.',
    sections: [
      { id: 'trip-requirements', title: 'List what the trip changes', paragraphs: [
        'Write a short travel brief: destinations, accommodation, expected phone access and whether you know the available training facilities. Separate confirmed details from guesses. A hotel advertising a gym does not tell you which equipment you will find. Choose a logging process that can describe what you actually use, while keeping exercise selection within a routine appropriate to your experience.',
        'Check the app on your Android phone before leaving. Sign in, find a previous workout and try a familiar meal entry. If connectivity or account access is essential to your trip, verify those requirements directly with the product and test your own arrangements. Keep important reference information separately when necessary instead of treating unverified access behaviour as a travel guarantee.',
      ] },
      { id: 'different-gym', title: 'Give unfamiliar equipment clear names', paragraphs: [
        'A machine at a different gym may have a different setup or resistance system even when its movement looks familiar. Keep the distinction visible in your records. If the app’s supported fields cannot capture the context you need, maintain a brief separate note identifying the venue and equipment. Do not compare displayed numbers as though the conditions were necessarily identical.',
        'Consider a traveller using a home-gym machine on Monday and a hotel machine on Thursday. Clear variation names prevent Thursday’s record from looking like an unexplained change in performance. Ask staff or a qualified instructor about unfamiliar equipment before using it. The app’s job here is to preserve context, not to establish that two pieces of equipment are interchangeable.',
      ] },
      { id: 'unfamiliar-food', title: 'Keep unfamiliar food estimates honest', paragraphs: [
        'A restaurant meal without a clear recipe creates uncertainty that extra decimal places cannot remove. Record the information you reasonably know and distinguish it from assumptions in your own notes. For packaged foods, check the label and portion basis available at the destination. Do not assume a familiar-looking product has the same serving size or nutrition as the version at home.',
        'Nexal’s free manual meal, calorie and macro logging gives you a way to maintain a diary; Premium includes AI macro estimates and barcode scanning. An estimate remains an estimate, and scanning should not replace checking the entry against the actual package. Choose the method that fits the available information, rather than forcing every travel meal to appear equally certain.',
      ] },
      { id: 'travel-review', title: 'Review dates and expectations when you return', paragraphs: [
        'For a trip that crosses time zones, inspect the saved dates and verify the app’s behaviour before relying on daily summaries. Keep a separate itinerary reference if it helps explain departure and arrival days. A useful travel test asks whether the records remain understandable afterwards. It does not assume the app offers itinerary handling or that every date boundary follows your preferred convention.',
        'After returning, compare the diary with the opportunities that actually existed: available facilities, transport days and meals you could identify. Note any workflow limitation to check before the next trip. Nexal’s free workout history and custom workouts can be evaluated alongside its meal diary. Decide whether that combination helps preserve useful records across locations without demanding that travel resemble your usual week.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal before your next trip', text: 'Test free Android tracking and verify the access requirements that matter to you.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: workout and meal tracking features' }],
    faqs: [
      { question: 'What should I test before travelling?', answer: 'Test account access, saved workout retrieval, meal entry and the date behaviour relevant to your itinerary. Verify connectivity requirements directly.' },
      { question: 'Can I compare every hotel machine with my usual gym equipment?', answer: 'Keep different equipment clearly identified. Similar names or displayed loads do not establish that two machines are equivalent.' },
    ],
  },
  {
    slug: 'fitness-app-privacy-questions-before-signup',
    title: 'Privacy questions to ask before signing up for a fitness app',
    metaTitle: 'Fitness App Privacy Questions Before Signup',
    description: 'Read a fitness app’s privacy policy, Google Play Data safety disclosures and permission requests before entering workout or meal information.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'A fitness diary can contain information you would not put in a public profile. Decide what you are comfortable sharing before building a detailed account history.',
    takeaway: 'Read disclosures alongside permissions, ask specific retention and AI-processing questions, and resolve important uncertainties before entering sensitive information.',
    sections: [
      { id: 'data-inventory', title: 'List the information you intend to provide', paragraphs: [
        'Start with your own intended use. A basic workout diary might contain exercise names and completed work. A more detailed account could also include meal records, goals and information entered into planning tools. Write down which categories you would actually supply. This gives you a concrete checklist for reading the privacy policy instead of scanning a long document without a question.',
        'Separate required fields from optional details during setup. Ask why each requested item is necessary for the task you want to complete. You can decide to postpone a feature while seeking an explanation. For instance, wanting a record of gym sessions does not mean you need to add personal background information that you have not assessed or do not understand.',
      ] },
      { id: 'disclosures', title: 'Read Data safety and the privacy policy together', paragraphs: [
        'Google explains that Play’s Data safety section contains developer disclosures about collection and sharing. Its permissions list describes technical access and is a different kind of information. Read both, then follow the developer’s privacy-policy link. An absence of one particular permission does not by itself tell you how information you voluntarily enter is processed or stored.',
        'Look for concrete answers: what is collected, why it is used, who receives it and how long it remains. If the wording is broad, formulate a specific question for the developer. For example, ask whether workout entries are used for advertising or only for stated service functions. Avoid turning an unclear policy into either a privacy guarantee or an unsupported accusation.',
      ] },
      { id: 'permission-review', title: 'Connect each permission to an action you chose', paragraphs: [
        'When a permission request appears, relate it to the feature you are using. A request you cannot explain is a reason to read further before accepting. Google’s Android help describes reviewing an app through Settings, Apps and Permissions; available controls and wording can vary. Use your phone’s controls to inspect access rather than relying only on recollection of setup prompts.',
        'For a practical test, record which action triggered the request and what the app said it needed. Then ask whether you still want that action. Revoking permission and deleting stored information are separate questions. If you previously supplied data, read the deletion process as well; changing device access does not establish what happens to information already associated with your account.',
      ] },
      { id: 'ai-and-exit', title: 'Ask about AI processing and your exit options', paragraphs: [
        'If you intend to use AI features, ask what inputs leave the app, which providers process them, whether they are retained and whether they are used to train models. These are questions to verify against the current policy and developer answers. Do not infer processing arrangements from an AI label, an Android permission screen or general marketing language about personalisation.',
        'Before signup, locate instructions for deleting the account and associated data, and ask about any retention exceptions that matter to you. Nexal’s privacy page is a starting point for reviewing its current terms; this guide makes no additional security or retention promises. Save the policy location and resolve consequential uncertainties before entering information you would find difficult to withdraw later.',
      ] },
    ],
    feature: { href: '/privacy', label: 'Read Nexal’s privacy policy', text: 'Review the current policy before deciding which information to provide.' },
    sources: [
      { href: 'https://support.google.com/googleplay/answer/11416267?hl=en', label: 'Google Play: understand app privacy and Data safety' },
      { href: 'https://support.google.com/android/answer/9431959?hl=en', label: 'Android Help: change app permissions' },
      { href: '/privacy', label: 'Nexal: current privacy policy' },
    ],
    faqs: [
      { question: 'Are app permissions the same as Data safety disclosures?', answer: 'No. Google describes permissions as technical access information and Data safety as developer disclosures about data handling. Review both and the privacy policy.' },
      { question: 'What should I ask before using AI fitness tools?', answer: 'Ask what inputs are processed, by whom, for which purposes and for how long, including whether inputs are used for model training.' },
    ],
  },
  {
    slug: 'google-play-fitness-app-trial-cancellation-checklist',
    title: 'Fitness app trials and cancellation: a Google Play checklist',
    metaTitle: 'Fitness App Trials and Cancellation Checklist',
    description: 'Check fitness app trial terms, billing accounts, renewal commitments and cancellation status with official Google Play guidance.',
    publishedAt: '2026-10-11', category: 'SUBSCRIPTIONS', readTime: '4 min read',
    intro: 'A trial is a billing decision as well as a product test. Make the terms easy to find before accepting an offer and keep enough information to manage it later.',
    takeaway: 'Record the offer shown to your account, manage the subscription through its billing provider and verify the cancellation result.',
    sections: [
      { id: 'offer-check', title: 'Check the offer before accepting it', paragraphs: [
        'Read the offer presented to your account rather than relying on a remembered promotion. Record whether a trial is available, when it ends, the next charge and the billing period. Check the full payment commitment, especially if a longer plan is presented using a monthly equivalent. A free download, free core tools and a subscription trial describe different arrangements.',
        'Create a separate reminder early enough to review your decision before the displayed deadline. Give it a useful name, such as review fitness subscription, and include where to find the terms. The reminder is an organisational aid, not proof that a cancellation has happened. Your purchase screen and billing account remain the references for the offer you actually accepted.',
      ], bullets: ['Save the trial end date and later charge shown at checkout.', 'Identify the billing provider and purchasing account.', 'Write down the feature you intend to test before renewal.'] },
      { id: 'find-purchase', title: 'Keep the purchasing account identifiable', paragraphs: [
        'Google instructs users to sign in to the account that holds their subscriptions. In Google Play’s subscription area, select the relevant purchase and follow its cancellation instructions. If you cannot find it, check which account made the purchase. An account you use inside a fitness app and the account used by the store are details worth recording separately.',
        'Imagine you have a personal Google account and another used for study. Keep the receipt with a note identifying the purchasing account so you can locate the subscription later. If the purchase was billed through another provider, use that provider’s process. Searching a store that did not handle the transaction will not resolve the billing question, even if the app was downloaded there.',
      ] },
      { id: 'confirm-cancel', title: 'Complete the cancellation and inspect the result', paragraphs: [
        'Google states that uninstalling an app does not cancel its subscription. Complete the store’s cancellation flow and inspect the resulting status and dates. Save the confirmation somewhere you can retrieve. Do this as a specific administrative task, rather than assuming that deleting the icon, stopping use or declining notifications communicates your billing decision to the provider.',
        'For an ordinary cancelled subscription, Google says access continues for the period already paid. Payment plans can carry remaining payment commitments, so read the terms for your purchase. Inspect the displayed result instead of assuming every plan behaves identically. If anything is unclear, retain the receipt and confirmation while you seek clarification through the provider’s current support process.',
      ] },
      { id: 'refund-and-free', title: 'Treat refunds and future app use as separate decisions', paragraphs: [
        'Cancellation and a refund request are separate processes. Google explains that refund availability depends on factors including what was bought, payment timing and location. Read the current refund guidance if that is your question, and keep the relevant purchase details. Neither a trial checklist nor a successful cancellation establishes that a particular charge will be refunded.',
        'With Nexal, free core manual workout and nutrition tracking can be evaluated without subscribing; Premium includes AI planning, AI macro estimates and barcode scanning. Decide whether those paid tasks helped during your evaluation. If free logging meets your needs, that is a valid product choice. Keep your billing decision explicit so a usable diary does not become an unintended renewal commitment.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Review Nexal before considering Premium', text: 'Try free core tracking and read any Premium offer shown to your account.' },
    sources: [
      { href: 'https://support.google.com/googleplay/answer/7018481?hl=en', label: 'Google Play: cancel, pause or change a subscription' },
      { href: 'https://support.google.com/googleplay/answer/2479637?hl=en', label: 'Google Play: refund policies' },
      { href: '/workout-meal-planner-app', label: 'Nexal: free core tracking and optional Premium' },
    ],
    faqs: [
      { question: 'Does uninstalling a fitness app cancel a Google Play subscription?', answer: 'No. Google says uninstalling does not cancel the subscription. Complete cancellation through the purchasing account and verify the result.' },
      { question: 'Does cancelling automatically refund my payment?', answer: 'No. Cancellation and refund requests are separate. Check Google’s current refund policy and the terms relevant to your purchase.' },
    ],
  },
  {
    slug: 'switch-paper-workout-log-to-app',
    title: 'Switching from a paper workout log to an Android app',
    metaTitle: 'Switch from a Paper Workout Log to an App',
    description: 'Move your workout diary from paper to an Android app with clear exercise names, a small manual handover and checks that preserve useful context.',
    publishedAt: '2026-10-11', category: 'WORKOUT LOGGING', readTime: '4 min read',
    intro: 'A notebook can hold years of useful context. Moving to an app works best when you decide which information you need next, rather than trying to recreate every old page.',
    takeaway: 'Keep the original notebook, transfer a small set of useful references manually and verify one complete digital session before making the handover.',
    sections: [
      { id: 'audit-paper', title: 'Find the information you actually consult', paragraphs: [
        'Look through your last few visits and mark what you refer to before a session. You might rely on movement names, equipment variations and completed work, while ignoring older shorthand you can no longer interpret. This establishes the minimum useful record for the app. Preserve the notebook as the original reference instead of treating migration as a reason to discard it.',
        'Choose a recent representative session to guide the transition. If it includes a notation such as row A, write out what that means before moving it anywhere. Resolve units and abbreviations while the context is available. Digital storage makes ambiguous notes easier to find, but it cannot recover information that was never written down or that you no longer remember.',
      ] },
      { id: 'name-convention', title: 'Translate shorthand into consistent names', paragraphs: [
        'Use one clear name for each movement variation you want to distinguish. For example, seated cable row and chest-supported machine row should not become one generic row entry if that distinction matters in your records. Decide how you will handle units as well. Keep any information the app cannot represent in a separate reference note rather than silently dropping its meaning.',
        'Before entering a custom workout, compare your naming convention against the app’s supported fields and exercise choices. Try finding the same movement again without consulting the notebook. If you choose a different label on the second attempt, refine the convention. This small naming test can prevent a history from becoming fragmented across several nearly identical entries as your digital diary grows.',
      ] },
      { id: 'small-handover', title: 'Make a small manual handover', paragraphs: [
        'In Nexal, core manual workout logging, custom workouts and workout history are free on Android. Start by creating a custom workout from a suitable routine you already use. Check it against the notebook before treating it as your working reference. This handover is about moving your recording process; it is not an instruction to change the exercises or workload.',
        'Keep the latest useful paper session nearby when recording the first new digital session. Enter what you actually complete, then compare the saved result with your temporary notes. Avoid entering an old session as though it happened today just to populate history. If you need historical entries, verify the available date workflow first and preserve the notebook wherever the app cannot represent them clearly.',
      ] },
      { id: 'handover-review', title: 'Decide when the notebook becomes an archive', paragraphs: [
        'After a few ordinary visits, ask whether you can find your previous session and understand the recorded work without reaching for paper. If you can, choose a clear date from which the app becomes your main diary. Keep earlier pages available as an archive. A short transition period can reveal problems, while indefinite double entry may simply add work.',
        'Review any missing context before finalising the switch. Perhaps you still need a paper reference for equipment settings, or a separate note explaining an unusual session. That does not invalidate the app workflow. The aim is a dependable current record with access to useful history, not a perfect recreation of every mark in a notebook or a new record that conceals uncertainty.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore free workout logging in Nexal', text: 'Use custom workouts and history for a small, deliberate digital handover.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: free core workout logging' }],
    faqs: [
      { question: 'Should I type every notebook page into the app?', answer: 'Usually start with a current routine and a few useful references. Keep the notebook available rather than reconstructing history you may never consult.' },
      { question: 'Will my paper workout history transfer automatically?', answer: 'This guide describes a manual handover. Preserve your paper records and verify any historical-entry requirements directly.' },
    ],
  },
  {
    slug: 'fitness-app-returning-gym-members',
    title: 'Choosing a fitness app when you are returning to the gym',
    metaTitle: 'Fitness App for Returning Gym Members',
    description: 'Choose a workout diary for a gym return by separating old records, current instruction and new sessions without chasing previous numbers.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'Returning to a gym gives you old reference points and new circumstances. A useful app helps keep those distinct while you establish a record of your current visits.',
    takeaway: 'Use past history as context, build a clear current baseline and seek qualified help with the actual training decisions.',
    sections: [
      { id: 'old-context', title: 'Treat the old diary as historical context', paragraphs: [
        'Find your previous records, but label them mentally as evidence of what happened then. Your current equipment, schedule, confidence and circumstances may differ. Write down what has changed before choosing software or reopening a routine. This helps you evaluate whether the app can organise the return without turning previous performance figures into instructions for your first new session.',
        'For example, a person returning after a long break might recognise familiar exercise names while finding that the gym has replaced several machines. An old load entry cannot explain the new setup. Keep the old record available as background and ask for an induction or appropriate instruction when needed. The app selection task is to preserve distinctions, not to select a starting workload.',
      ] },
      { id: 'current-routine', title: 'Keep current guidance separate from old intentions', paragraphs: [
        'If you receive a suitable routine from a qualified trainer, give it a clear current name and check that you can record its movements accurately. Avoid making an old saved workout the default simply because it already exists. Compare each exercise label against what you have actually been shown, especially where a variation or equipment change affects the meaning of the entry.',
        'An illustrative naming choice is return routine October, with older routines retained as references. This makes it easier to identify which instructions apply now. Record only completed work in the session history. A planned session, an abandoned intention and a completed visit are different things, and your diary should not blur them just to present an uninterrupted sequence of successful workouts.',
      ] },
      { id: 'new-baseline', title: 'Build a readable baseline for the return', paragraphs: [
        'Choose the same small set of details to record for each new visit: the movement variation and the work actually completed. Keep relevant context in your own notes when the app lacks a field for it. After several visits, inspect whether the records are understandable and comparable. The first objective is a useful baseline, not a particular rate of improvement.',
        'Ask practical questions during review. Did a machine name change? Was one entry a different variation? Did you accidentally record planned work instead of completed work? Resolve these data issues before interpreting the history. If you have concerns about pain, symptoms, an injury or suitability after a break, take them to an appropriate qualified professional rather than asking a chart to settle them.',
      ] },
      { id: 'return-choice', title: 'Evaluate tracking before adding generated plans', paragraphs: [
        'Nexal includes free core workout logging, custom workouts and workout history on Android. These can support the current-record test without a subscription. Create the routine you are actually using, record a familiar session and check the saved result. Meal, calorie and macro logging are also free if you want those records nearby, but they need not become part of the return immediately.',
        'Premium offers AI workout and meal planning, AI macro estimates and barcode scanning. Assess those tools only if they solve a current task. A generated workout does not assess your readiness to return or replace an instructor’s observation. Choose the app that makes your present routine easier to record and understand, then reconsider extra features when your needs become clearer through ordinary use.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Start a current workout diary in Nexal', text: 'Use free custom workouts and history to organise your return on Android.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: workout logging and optional AI planning' }],
    faqs: [
      { question: 'Should my old workout numbers become my starting targets?', answer: 'Use old records as context. Appropriate starting work depends on your current circumstances and may need qualified guidance.' },
      { question: 'Do I need AI planning to restart a workout diary?', answer: 'No. Nexal’s core logging, custom workouts and history are free, so you can record a suitable existing routine.' },
    ],
  },
  {
    slug: 'simple-fitness-app-dashboard-overwhelm',
    title: 'Choosing a simple fitness app when dashboards feel overwhelming',
    metaTitle: 'Simple Fitness App: Reduce Dashboard Overload',
    description: 'Evaluate fitness apps by the tasks you can complete, reduce unnecessary metric checking and build a small diary you can understand.',
    publishedAt: '2026-10-11', category: 'CHOOSING AN APP', readTime: '4 min read',
    intro: 'A dashboard can offer more information than you know what to do with. Simplicity comes from a clear task and an understandable record, as well as the interface itself.',
    takeaway: 'Choose one daily task, one review question and a clear stopping point instead of trying to interpret every metric.',
    sections: [
      { id: 'one-question', title: 'Choose the question you want the screen to answer', paragraphs: [
        'Write down a single question before comparing apps. Perhaps it is what did I do last time, or have I recorded today’s lunch? A screen is useful if it helps answer that question clearly. A large collection of metrics may be irrelevant to the task, even when each individual metric is presented attractively or appears in a polished product demonstration.',
        'Give yourself a stopping rule as well. For a workout diary, the session is recorded once the completed work is saved and checked. You do not need to open every chart afterwards. For meal logging, checking the entry and portion can be the end of the task. This keeps your definition of successful use separate from time spent browsing information.',
      ] },
      { id: 'minimum-record', title: 'Define a small record you can interpret', paragraphs: [
        'Pick the information necessary to understand your chosen task later. A workout record needs enough detail to distinguish the movement and completed work. A meal record needs a recognisable food and portion. Avoid adding extra metrics purely because a field exists. More information is useful only when you understand how you obtained it and why you intend to consult it.',
        'For a hypothetical user overwhelmed by several charts, the first week might involve recording one familiar type of session and reopening the previous example. The review question is whether the history is clear. That is a complete software evaluation even without exploring every available panel. Once the basic record is dependable, you can decide whether another view answers a separate useful question.',
      ] },
      { id: 'usability-test', title: 'Measure simplicity through a complete task', paragraphs: [
        'Try the app at the text size and lighting you normally use. Locate an earlier entry, add a new one and correct a mistake. Notice where you hesitate and whether the labels tell you what will happen. The number of taps alone is not a complete measure: a few clear steps may feel easier than a shorter process with ambiguous controls.',
        'Keep a brief separate note about the points of confusion. If you repeatedly mistake a plan for a completed session, that is a meaningful usability issue to investigate. If you simply do not need a particular chart, you may be able to leave it out of your routine. Verify actual display controls before assuming the product lets you hide or customise every panel.',
      ] },
      { id: 'small-start', title: 'Start with a narrow Nexal workflow', paragraphs: [
        'Nexal offers free manual workout logging, custom workouts and history, alongside manual meal, calorie and macro logging on Android. You can begin with the side relevant to your question. Copying recent meals is also free for repeated entries. Test whether these tasks feel understandable to you; this guide does not claim that one interface will feel simple to every person.',
        'Premium adds AI planning, AI macro estimates and barcode scanning. Extra tools should earn a place by reducing a specific difficulty. If tracking itself creates persistent distress or pressure, reassess whether the diary and its level of detail serve your needs, and seek appropriate support where needed. A useful app should fit the role you chose for it rather than expand that role automatically.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Evaluate a small Nexal tracking routine', text: 'Try one free logging task and judge whether the workflow feels clear to you.' },
    sources: [{ href: '/workout-meal-planner-app', label: 'Nexal: manual workout and nutrition tracking' }],
    faqs: [
      { question: 'How do I know whether an app is simple enough?', answer: 'Test a complete task, including correction and retrieval, with your normal phone settings. Note confusion rather than judging only by screenshots or tap counts.' },
      { question: 'Do I have to use every dashboard or feature?', answer: 'No. Choose the features that answer your own questions and leave other tools outside your routine unless you find a clear use for them.' },
    ],
  },
];
