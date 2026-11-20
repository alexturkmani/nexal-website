import type { Guide } from './content';

const publication = { publishedAt: '2026-10-11', contentBatch: 'expansion-2' } as const;

export const goalGuides: Guide[] = [
  {
    ...publication,
    slug: 'fitness-app-account-google-play-purchase-identity',
    title: 'Fitness app account vs Google Play account: a purchase identity checklist',
    metaTitle: 'Fitness App vs Google Play Account Checklist',
    description: 'Check app identity, Google Play purchase identity and receipt details before a fitness subscription without assuming accounts are interchangeable.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'Before purchasing a fitness subscription, identify both the account holding your app records and the Google Play account involved in payment. They serve different purposes even when the email addresses happen to match. A short identity check can make the purchase easier to understand.',
    takeaway: 'Confirm app sign-in, purchasing account and checkout terms separately. Matching addresses do not prove that app records and store billing are one account system.',
    sections: [
      { id: 'identity-map', title: 'Name the identities involved in the purchase', paragraphs: [
        'Begin with the app account you intend to use for workout or meal records. Note its sign-in method and the account identifier visible through the supported interface. Then check the Google account currently selected in Google Play. Google’s subscription help explicitly notes that an app subscription email can differ from a Google account. Treat these as separate checks even when both addresses look familiar.',
        'A third detail is the payment method displayed in checkout. A familiar card does not establish which Google account owns the purchase, and a phone’s main email address does not establish which app account is open. Keep an identity map in a private companion note using labels you understand. This worksheet is your reference, not a Nexal account-linking feature.',
      ] },
      { id: 'before-confirming', title: 'Run the checklist before confirming payment', paragraphs: [
        'Read the purchase screen for the selected product, full charge, billing period and account information it presents. Confirm that the app account is the one where you want to use the service. If the purchasing identity is unclear, stop before confirmation and consult the official help for the purchase route. Do not complete a transaction merely to discover which account it uses.',
        'An illustrative identity example uses labels rather than personal addresses: app account A holds the diary, Google account B appears in the store, and payment method C funds the purchase. This arrangement is a checklist example, not evidence of an actual Nexal issue. The question is whether you understand and intend the identities shown, not whether their labels must match.',
      ] },
      { id: 'receipt-reference', title: 'Keep a private purchase reference after checkout', paragraphs: [
        'If you purchase, retain the official receipt and identify the account that can view the subscription through Google Play. Record the product and renewal information in your private worksheet. Keep passwords and verification codes out of it. You are documenting a transaction for your own future reference, not creating a second source of payment instructions or publishing account details.',
        'If a later question arises, compare the displayed identities with your purchase reference and contact official support as appropriate. This checklist does not promise recovery, transfer or automatic matching between accounts. Avoid making another purchase just to investigate uncertainty. Support can explain the applicable process; your worksheet helps you describe the identities involved without guessing how the service works internally.',
      ] },
      { id: 'nexal-purchase-choice', title: 'Separate the free app decision from Premium billing', paragraphs: [
        'Nexal offers free manual workout logging, custom workouts, history and manual meal and macro tracking on Android, including copying recent meals. Download from its official Google Play route and evaluate those tools after creating your account. You can establish whether the diary fits before making a purchase decision or constructing a paid-feature test.',
        'Premium includes AI workout and meal plans, AI macro estimates and barcode scanning. If you choose one of these paid tasks, perform the identity checklist at the actual checkout. Use the terms and account details shown there rather than assuming that sign-in alone identifies the payer. Clear purchase records support an informed decision without guaranteeing any particular access-resolution outcome.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Review Nexal’s free and Premium tools', text: 'Evaluate free Android tracking before checking identities for an optional purchase.' },
    sources: [{ href: 'https://support.google.com/googleplay/answer/9818348?hl=en', label: 'Google Play: app emails and subscription account identity' }],
    faqs: [
      { question: 'Must my app email and Google Play email be identical?', answer: 'Google explains that they can differ. Check both identities and the applicable purchase process rather than assuming one address represents everything.' },
      { question: 'Does this checklist guarantee purchase recovery or transfer?', answer: 'No. It helps you document and understand identities. Official support and the applicable terms determine any later resolution process.' },
    ],
  },
  {
    ...publication,
    slug: 'fitness-app-two-people-separate-accounts',
    title: 'Choosing a fitness app for two people with separate accounts',
    metaTitle: 'Fitness Apps for Two: Separate Account Checks',
    description: 'Evaluate one fitness app independently as a pair, keeping accounts, records, purchases and voluntary conversations separate.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'Two people can choose the same fitness app for different reasons. One may want a gym diary while the other wants meal records. A useful joint evaluation lets each person decide independently without assuming that accounts, plans or subscriptions are shared.',
    takeaway: 'Test two separate workflows and agree what you want to discuss voluntarily. Using the same product does not establish shared records, joint plans or transferable Premium access.',
    sections: [
      { id: 'two-briefs', title: 'Write two briefs before making one shortlist', paragraphs: [
        'Each person should name the task they want to complete and a requirement that would rule an app out. Examples include finding a previous workout or recording a familiar meal quickly. Compare these briefs to identify overlap, but retain both. A product can be convenient for one person and unsuitable for the other without either evaluation being mistaken.',
        'Check both actual Android phones rather than assuming that a successful installation on one proves compatibility on the other. Google Play explains that app availability can depend on the device and location. Use each person’s own store context for the check. If one phone cannot install the candidate, resolve that requirement before spending time agreeing on a shared routine.',
      ] },
      { id: 'account-boundary', title: 'Keep identity and purchase checks individual', paragraphs: [
        'Create and use separate app accounts with credentials each person controls. Confirm whose account is open before entering a record, particularly if one person helps the other through setup. Help with navigation does not require exchanging passwords. Keep any setup checklist in a private companion note rather than putting account details into a shared workout entry or public review.',
        'Review any subscription offer separately for each account. Do not assume a purchase transfers because you live together, train together or use the same app name. Verify the applicable terms before either person buys. This guide makes no claim about shared Nexal plans or family subscription access. A free tracking decision can be made individually without resolving paid features first.',
      ] },
      { id: 'voluntary-review', title: 'Agree a conversation boundary rather than a shared dashboard', paragraphs: [
        'Decide what, if anything, you both want to discuss: whether logging felt manageable, whether a familiar session was easy to retrieve, or whether meal entry took too much effort. You can talk about those experiences without exchanging detailed nutrition or workout records. Consent to choose an app together is not automatic consent to inspect another person’s diary.',
        'Use a simple joint decision rule: both workflows pass independently, each person understands the account boundary, and neither needs an unverified shared feature. If only one workflow passes, different apps may be the better outcome. A matching download is less important than both people retaining control over their information and choosing a process they can comfortably use.',
      ] },
      { id: 'nexal-pair', title: 'Evaluate Nexal twice, with separate starting tasks', paragraphs: [
        'Nexal provides free manual workout logging, custom workouts and history, plus free manual meal and macro tracking and copying recent meals. One person can test a workout while the other tests a meal on their own Android account. Download through the official Google Play route and check each saved result separately before comparing the experience in conversation.',
        'Premium adds AI workout and meal plans, AI macro estimates and barcode scanning. Each person should assess those tools against their own needs and current purchase terms. The useful joint outcome is two informed choices, which may include one free user and one person considering Premium. No linked accounts, synchronised routines or partner visibility are implied by this evaluation.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal on your own Android account', text: 'Test workout and meal tracking separately before making a decision together.' },
    sources: [{ href: 'https://support.google.com/googleplay/answer/2851648?hl=en', label: 'Google Play: app compatibility with Android devices' }],
    faqs: [
      { question: 'Does choosing Nexal together create a shared plan?', answer: 'No shared-plan functionality is claimed here. Evaluate individual accounts and discuss your experiences voluntarily.' },
      { question: 'Can one person choose free tracking while the other considers Premium?', answer: 'Yes, the needs assessment can differ. Check each account’s actual purchase terms without assuming access transfers.' },
    ],
  },
  {
    ...publication,
    slug: 'fitness-app-storage-device-compatibility',
    title: 'Fitness app storage and device compatibility checks before installation',
    metaTitle: 'Fitness App Storage and Compatibility Checks',
    description: 'Check the current Google Play listing, Android version and available storage before installing a fitness app on your actual device.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'The first fitness app decision happens before signup: can the official version install on the phone you actually use? Check compatibility and storage from current device information rather than relying on an old screenshot, another person’s phone or a guessed download size.',
    takeaway: 'Treat store availability, Android requirements and free space as separate checks. A successful installation is a starting point, not proof that the whole workflow suits your device.',
    sections: [
      { id: 'device-facts', title: 'Record the phone you are evaluating', paragraphs: [
        'Find the model and Android version through your phone’s settings. Keep those details in a companion note with the date of your check. If you own several devices, identify which one will go to the gym or kitchen. Evaluating a newer spare phone can conceal the constraints of the older device you intend to use every day.',
        'Open the official Google Play listing in the context of that device and account. Google explains that compatibility is determined by app developers and can be checked through listing information. Read the current availability and required operating system details. Avoid substituting a general statement that an app is for Android for verification that your particular phone can install its current release.',
      ] },
      { id: 'space-budget', title: 'Compare download information with actual storage', paragraphs: [
        'Check available storage in Android settings and inspect the download information shown in Google Play. Treat these as different quantities: a download figure does not promise a permanent limit for installed files and later app data. Leave yourself room for ordinary phone use and updates. This guide does not assign Nexal a fixed size or invent a minimum free-space requirement.',
        'If space is tight, review what you can safely remove through supported phone controls before installing. Do not delete existing workout records, clear an app’s data or remove irreplaceable files just to meet an assumed target. A candidate that requires an unacceptable storage compromise may be a poor fit even when the store technically allows installation on your device.',
      ] },
      { id: 'installation-check', title: 'Separate install success from everyday usability', paragraphs: [
        'After installation, try opening the app, completing the supported setup and reaching one ordinary recording screen. Observe readability and responsiveness on your phone. Keep this check small; its job is to identify an obvious device barrier. A successful download does not establish dependable performance in every situation, and an initial delay alone does not identify the cause of a problem.',
        'Use a go-or-investigate checklist: official listing available, device compatibility confirmed, storage acceptable, app opens, and essential task reachable. If a check fails, retain the exact store or screen wording in a private note. Consult official help before trying alternatives. Installing an unofficial copy is not a substitute for resolving the compatibility question with the supported distribution route.',
      ] },
      { id: 'nexal-device-choice', title: 'Make the Nexal decision from current listing information', paragraphs: [
        'Nexal is available for Android through its official Google Play route. Check that route on your intended device before creating an account. Free manual workout logging, custom workouts and history, plus manual meal and macro tracking, let you evaluate a basic task after setup. No particular Android minimum, download size or storage growth rate is asserted in this guide.',
        'If you later want Premium AI plans, macro estimates or barcode scanning, check their workflow on the same phone. A compatible installation does not verify every feature you might eventually use. Keep the device note for future update decisions and recheck the current listing when circumstances change. Choose based on your actual phone rather than a specification remembered from an earlier release.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Find Nexal’s official Android download route', text: 'Check your device first, then try a free manual tracking task.' },
    sources: [{ href: 'https://support.google.com/googleplay/answer/15163227?hl=en', label: 'Google Play: app availability and compatibility information' }],
    faqs: [
      { question: 'What Android version does Nexal require?', answer: 'Check the current official Google Play listing on your device. This guide intentionally does not provide a version number that could become outdated.' },
      { question: 'Is the listed download size the maximum storage the app will use?', answer: 'Do not treat it as a permanent ceiling. Check available space and actual installed usage through supported Android controls.' },
    ],
  },
  {
    ...publication,
    slug: 'workout-app-vs-spreadsheet-record-retrieval',
    title: 'Workout app vs spreadsheet: choose by record retrieval',
    metaTitle: 'Workout App vs Spreadsheet: Retrieval First',
    description: 'Compare a workout app with a spreadsheet by finding the last matching session, checking context and maintaining readable records.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'A spreadsheet gives you control over columns; a workout app gives you an established recording workflow. The useful comparison happens later, when you need to find an earlier result. Decide which system makes your own retrieval question easier without losing the meaning of the data.',
    takeaway: 'Compare the same lookup in both systems. Choose the one that preserves exercise context and remains understandable without constant repair or memory of how the record was entered.',
    sections: [
      { id: 'lookup-contract', title: 'Write a retrieval contract for the comparison', paragraphs: [
        'Choose a question with a clear answer, such as the most recent completed result for a particular exercise variation. Define what counts as a match: same movement name, relevant equipment and readable units. Keep the question fixed across the app and spreadsheet. Comparing an app’s session history with a spreadsheet’s unrelated dashboard would not test the same job.',
        'Select a small set of existing entries you understand. Include a similarly named exercise and a session with different equipment so the lookup requires more than finding the largest number. Keep the original records as your reference. This test is about retrieving known facts, not migrating your entire training history or making a new programme from historical totals.',
      ] },
      { id: 'spreadsheet-cost', title: 'Assess what your spreadsheet needs to stay reliable', paragraphs: [
        'A spreadsheet can work well when dates, exercise names and units are entered consistently. Microsoft documents filtering data in a range or table, which can support a focused lookup. The important condition is that the source rows distinguish the facts you need. A filter cannot recover a variation label that was never entered or reconcile mixed units automatically merely because they share a column.',
        'Try the lookup using your current sheet rather than designing an ideal future version. Notice whether blank cells, merged headings or inconsistent names make it difficult. Count the maintenance you would actually accept: fixing labels, preserving formulas or maintaining a personal naming key. Flexibility is useful when you use it; it can become overhead when the structure needs continual attention.',
      ] },
      { id: 'app-retrieval', title: 'Assess the app’s structure with the same tricky entries', paragraphs: [
        'Enter the same small examples through the candidate’s supported workflow. Find the matching movement without relying on your memory of its position. Check whether the recorded date and completed work remain readable. If a necessary distinction belongs in companion notes, include that extra lookup in the comparison. The app should not receive credit for context stored somewhere you forgot to consult.',
        'Write a verdict for each system: correct result found independently, found with a separate naming reference, or ambiguous. Also record what caused the ambiguity. An app may remove spreadsheet upkeep while offering less freedom; a sheet may preserve detail while demanding more organisation. Your software choice should reflect the retrieval problem you experience rather than a general belief that apps are more modern.',
      ] },
      { id: 'choose-without-migration', title: 'Choose a working record before planning any migration', paragraphs: [
        'Nexal offers free manual workout logging, custom workouts and history on Android. Download through its official Google Play route, create your account and test the matching entries. This guide does not promise spreadsheet imports, exports or synchronisation. Retain your original sheet as a separate reference while deciding whether new sessions belong in the app.',
        'Premium AI workout planning addresses drafting sessions, which is a different task from retrieving completed records. You can choose free logging without buying planning, or keep your spreadsheet if it answers the question more clearly. Document where future sessions will be recorded so you do not accidentally maintain two competing histories. Choose the tool that you can reliably read later.',
      ] },
    ],
    feature: { href: '/ai-workout-planner', label: 'Try Nexal’s free workout history workflow', text: 'Compare completed-record retrieval before considering optional AI plans.' },
    sources: [{ href: 'https://support.microsoft.com/en-us/office/filter-data-in-a-range-or-table-01832226-31b5-4568-8806-38c37dcc180e', label: 'Microsoft Support: filter spreadsheet data' }],
    faqs: [
      { question: 'Does this comparison require moving all my history?', answer: 'No. Test a small set of meaningful examples while preserving the original spreadsheet.' },
      { question: 'Does Nexal automatically import my spreadsheet?', answer: 'No import or synchronisation capability is claimed here. Evaluate manual entry and retrieval independently.' },
    ],
  },
  {
    ...publication,
    slug: 'fitness-app-consistency-without-streak-pressure',
    title: 'Choosing a fitness app to track consistency without streak pressure',
    metaTitle: 'Fitness Consistency Without Streak Pressure',
    description: 'Evaluate fitness records using flexible review windows and honest context instead of making an unbroken streak the reason to open an app.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'An unbroken chain can be a poor description of a routine that includes different activities, interruptions and ordinary changes. Choose an app that helps you understand what you recorded without making a daily symbol the reason you exercise or enter data.',
    takeaway: 'Review a sensible window and the quality of your records. A missed entry is a gap in information, not an instruction to invent activity or do extra work to protect a counter.',
    sections: [
      { id: 'review-window', title: 'Choose a review window that fits the question', paragraphs: [
        'Decide what consistency means for your records before opening a dashboard. You may want to see whether familiar sessions remain represented across an ordinary work cycle, or whether meal entries are usable when you review them. Neither question necessarily requires a record every day. Choose a window long enough to include your usual routine rather than treating midnight as a universal deadline.',
        'General physical activity guidance discusses activity over time, giving broader context than a daily app symbol. This guide does not prescribe how often you should train. Look for software that can support a factual review of your existing suitable activities. Keep your review definition in companion notes if the app does not provide a matching summary.',
      ] },
      { id: 'gap-meaning', title: 'Give different gaps different meanings', paragraphs: [
        'A blank workout date could mean no session, a forgotten entry or a session recorded elsewhere. A blank meal diary cannot establish that you ate nothing. Preserve that uncertainty instead of using a single failure label. When you know what happened, record the fact through the supported workflow. When you do not, a gap is more honest than a plausible reconstruction presented as certain.',
        'For an explicitly illustrative review, a person finds several clear session records and one uncertain date in a fortnight. The useful question is whether the missing context matters to their next lookup. The invented window and record pattern are not an attendance target. A perfect-looking chain created by filling blanks from habit would provide less trustworthy information for that question.',
      ] },
      { id: 'pressure-test', title: 'Evaluate how the interface affects your choices', paragraphs: [
        'Notice what happens when you return after a gap. Can you reach useful history without treating the screen as a verdict? Do messages encourage you to enter facts, or do you feel pushed to change behaviour solely to restore a symbol? This is a personal fit test, not a clinical assessment. You can reject a workflow that creates unhelpful pressure even when other users enjoy it.',
        'Check available settings directly if hiding a counter or reducing notifications is important to you. Do not assume those controls exist in Nexal or any candidate. Keep the evaluation distinct from workout scheduling: an app display is not a reason to add compensatory exercise. If a tracking approach becomes uncomfortable, simplify the information you collect or reconsider whether the tool serves your purpose.',
      ] },
      { id: 'nexal-factual-record', title: 'Try a factual recordkeeping workflow in Nexal', paragraphs: [
        'Nexal offers free manual workouts, custom workouts and workout history on Android, plus manual meal and macro tracking and recent-meal copying. Download through its official Google Play route and evaluate retrieving actual completed entries after account setup. This guide does not promise a streak-free interface, a counter toggle or automatic consistency analysis. Assess the current experience against your own requirement.',
        'Keep a brief companion review focused on useful records and practical friction. Premium AI workout and meal plans are optional and do not need to become part of this consistency test. Choose the tracker if it helps you return to understandable information. The goal of choosing software is a workable record, not an unbroken sequence or a guaranteed pattern of future behaviour.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal’s manual tracking tools', text: 'Evaluate useful history against your own definition of consistency.' },
    sources: [{ href: 'https://odphp.health.gov/our-work/nutrition-physical-activity/physical-activity-guidelines/current-guidelines', label: 'US HHS: physical activity guidance over time' }],
    faqs: [
      { question: 'Does an empty date prove I missed an activity?', answer: 'No. It may indicate a missing entry. Check what you know and avoid filling uncertain gaps as if they were verified events.' },
      { question: 'Does Nexal guarantee a hidden-streak setting?', answer: 'No such setting is promised here. Inspect the current interface and decide whether it fits your preferred review style.' },
    ],
  },
  {
    ...publication,
    slug: 'fitness-app-updates-read-release-notes',
    title: 'Fitness app updates: how to read release notes before upgrading',
    metaTitle: 'Fitness App Updates: Read Release Notes Well',
    description: 'Read fitness app release notes for changes that affect your workflow, check official update information and verify key tasks after upgrading.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'Release notes can help you understand an update, but a short announcement rarely describes every consequence for your routine. Read them with a specific question: what might change in the task I depend on, and what should I check after the official update?',
    takeaway: 'Connect each relevant note to a workflow check. Vague notes leave uncertainty, while a new feature announcement does not establish a change to your subscription or existing records.',
    sections: [
      { id: 'release-context', title: 'Identify the official update and its context', paragraphs: [
        'Open the app’s official Google Play listing and inspect the available update information. Note the installed version and the offered version where your device displays them. Keep the date in a companion note. A friend may receive an update at a different time, so their screenshot is not proof that the same release is currently offered to your account and phone.',
        'Google Play documents both manual updates and automatic update settings. Check your current setting before assuming you will personally approve every future change. This guide does not recommend avoiding updates indefinitely or installing older unofficial copies. It helps you read the information available through the supported route and prepare a small check of the tasks you already use.',
      ] },
      { id: 'note-translation', title: 'Translate release notes into consequences for your task', paragraphs: [
        'Sort each relevant note by the action it could affect: entry, retrieval, account access or an optional feature. A stated logging change suggests checking a familiar entry; a history change suggests finding an older session. General wording such as improvements does not identify a particular behaviour. Mark it as limited information rather than inventing a specific fix or assuming the whole app has changed.',
        'Use an invented release-note example for illustration: clearer food quantity labels. A suitable follow-up would be reviewing the quantity and unit of a familiar meal. It would not justify claiming that old portions were automatically corrected. This example is not an actual Nexal release announcement. Apply the same discipline to real notes by separating what they explicitly say from what you hope they imply.',
      ] },
      { id: 'before-after', title: 'Keep a small reference for the workflow you depend on', paragraphs: [
        'Before updating when practical, identify one saved record you understand and the route you normally use to find it. Avoid creating duplicate real entries merely for testing. After the official update, reopen that record and check its meaning, then try your next ordinary entry. You are looking for a relevant change, not rebuilding your entire diary to demonstrate that an update completed.',
        'If something differs, record the version, exact screen wording and steps that led to the observation without posting private diary details. Use official support for consequential questions. An unfamiliar button position is different from an unreadable saved record, and a release note alone cannot diagnose either. Do not assume reinstalling, clearing data or repurchasing is an appropriate first response.',
      ] },
      { id: 'nexal-version-choice', title: 'Keep Nexal feature decisions separate from release excitement', paragraphs: [
        'Nexal’s described free Android tools include manual workouts, custom workouts, history and manual meal and macro tracking with recent-meal copying. Premium adds AI workout and meal plans, AI macro estimates and barcode scanning. Compare an actual release announcement with that current feature information. A mention of AI does not establish that an existing free task now requires payment or that a new paid tool is included automatically.',
        'For a first installation, use the official Google Play route and current listing rather than searching for a version mentioned in an old review. For an existing installation, use the update notes to guide a relevant follow-up check. Choose additional features because they solve a task you have, while maintaining a readable record of the version and workflow you evaluated.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Check Nexal’s current feature overview', text: 'Compare release announcements with the tracking and planning tasks you need.' },
    sources: [{ href: 'https://support.google.com/googleplay/answer/113412?hl=en', label: 'Google Play: manual and automatic app updates' }],
    faqs: [
      { question: 'Do vague release notes prove a specific problem was fixed?', answer: 'No. Treat the note as limited information and verify the behaviour relevant to your own workflow.' },
      { question: 'Is the example quantity-label update a Nexal announcement?', answer: 'No. It is an invented example showing how to translate a release note into a practical check.' },
    ],
  },
  {
    ...publication,
    slug: 'fitness-app-gym-home-two-location-equipment',
    title: 'Choosing a fitness app for equipment at the gym and at home',
    metaTitle: 'Gym and Home Fitness App: Two-Location Checks',
    description: 'Evaluate a fitness app across home and gym equipment by keeping location references, session identities and comparable records clear.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'A routine spanning home and a gym creates a location problem before it creates a planning problem. Equipment, naming and the records you can compare may change between places. Choose an app that helps you preserve those distinctions instead of treating every similarly named movement as identical.',
    takeaway: 'Use two location references and test retrieval across them. Home and gym labels should preserve context; they do not establish that equipment or exercises are interchangeable.',
    sections: [
      { id: 'location-inventory', title: 'Make a reference for each actual location', paragraphs: [
        'List the equipment you can use at home and the relevant equipment at your gym. Include practical availability, not just ownership: an item stored elsewhere or a room unavailable at your usual time may not be part of the working setup. Keep this inventory in companion notes. It is a selection reference, not a claim that Nexal maintains an automatic equipment inventory.',
        'Separate facts from assumptions. A gym may contain a machine without offering the same setup as another machine with a similar name. A home weight may have markings that use a different convention. NHS guidance describes strength activities across bodyweight and resistance settings. That broad variety is a reason to preserve context, not evidence that any two movements have equivalent loads.',
      ] },
      { id: 'session-names', title: 'Give each working routine a location identity', paragraphs: [
        'Use clear names for existing suitable routines so that choosing the home session does not require editing a gym session from memory. Check whether the candidate’s custom-workout workflow lets you distinguish the versions you need. Keep naming simple enough to recognise quickly. If location detail belongs in a companion reference, include that lookup in your evaluation rather than pretending the app supplies a location field.',
        'An illustrative naming pair is Home A and Gym A, each linked in your personal notes to the actual equipment used. Those names do not imply matching exercises or prescribed workloads. The test is whether you open the intended routine at the intended place. Changing location should not quietly turn one historical exercise identity into a different movement with the same label.',
      ] },
      { id: 'cross-location-lookup', title: 'Test a lookup that crosses the location boundary', paragraphs: [
        'Create a small example record for each location using familiar completed work. Later, ask for the last matching result from the gym and then the last matching result from home. Can you tell which is which without remembering the date? A candidate that merges them into an ambiguous history may cost you more review effort than its combined dashboard saves.',
        'Use three acceptance checks: intended routine identifiable, equipment context recoverable, and prior matching record readable. Do not compare a home dumbbell result directly with a gym machine number simply because the exercise family sounds related. If you need an alternative for unavailable equipment, agree a suitable option separately rather than treating the app’s naming system as exercise instruction.',
      ] },
      { id: 'nexal-locations', title: 'Evaluate custom workouts before paying for location planning', paragraphs: [
        'Nexal includes free manual workout logging, custom workouts and history on Android. Download through its official Google Play route and test two clearly named routines after account setup. The app is a candidate for keeping your records organised across places. This guide does not claim automatic location detection, equipment synchronisation or a dedicated multi-location planning engine.',
        'Premium AI workout plans can provide drafting help, but review suggestions against the equipment reference for the location where you will use them. A home or gym setting does not verify every individual item or substitution. Choose free tracking when the routines are already appropriate and the main problem is finding their records. Pay for planning only when that additional task is useful.',
      ] },
    ],
    feature: { href: '/ai-workout-planner', label: 'Explore Nexal custom workouts and AI planning', text: 'Try clearly named home and gym records with free workout tracking.' },
    sources: [{ href: 'https://www.nhs.uk/live-well/exercise/how-to-improve-strength-flexibility/', label: 'NHS: examples of bodyweight and resistance activities' }],
    faqs: [
      { question: 'Does Nexal detect which location I am training at?', answer: 'No automatic location detection is claimed here. Use clear routine names and a companion equipment reference.' },
      { question: 'Can I compare home and gym weight numbers directly?', answer: 'Only compare records with appropriate matching context. Similar movement names do not establish equivalent equipment or resistance.' },
    ],
  },
  {
    ...publication,
    slug: 'before-recommending-fitness-app-friend',
    title: 'What to check before recommending a fitness app to a friend',
    metaTitle: 'Before Recommending a Fitness App to a Friend',
    description: 'Make a useful fitness app recommendation by checking your friend’s task, device, privacy preferences and paid-feature expectations.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'An app that fits your routine may solve a different problem from the one your friend has. A useful recommendation explains what you personally tested and gives the other person room to decide, rather than making your enthusiasm stand in for their requirements.',
    takeaway: 'Recommend a bounded use case with clear limits. Check task, device, comfort with data and feature cost before suggesting an installation or subscription.',
    sections: [
      { id: 'friend-brief', title: 'Ask for the task before naming the product', paragraphs: [
        'Find out what your friend wants help with: remembering completed exercises, keeping meal records or drafting a plan. Avoid assuming that your training goal or food routine applies to them. Ask whether they already have a suitable system and what feels difficult about it. If they cannot name a problem, there may be no reason to recommend another app immediately.',
        'Keep the conversation optional. Someone may want general information without wanting a food diary, account creation or a paid service. Do not request private body details to make a software suggestion. A concise brief about the recording task and phone they use is often enough to decide whether the app deserves a look, while leaving personal choices under their control.',
      ] },
      { id: 'claim-boundary', title: 'Describe what you tested and what you cannot verify', paragraphs: [
        'Say which task worked for you and on what device, without turning that experience into a universal result. Finding your last session easily is a useful observation. Claiming an app will transform your friend’s fitness is a different promise. FTC review guidance encourages scrutiny of sources and claims; apply that discipline to your own recommendation as well as comments you read online.',
        'Use a short recommendation structure in your companion notes: their task, your relevant experience, an unverified requirement and the official link to check. For an illustrative example, you found workout history useful but have not tested the assistive technology your friend uses. That makes accessibility a question for their own evaluation, not a feature you should confidently endorse on their behalf.',
      ] },
      { id: 'installation-boundaries', title: 'Check practical fit without taking over their account', paragraphs: [
        'Point your friend to the official listing so they can confirm compatibility on their Android phone. Explain which capabilities are free and which require payment using current information. Let them read privacy and purchase details for themselves. Helping with a navigation question does not require creating their account using your email, handling their password or buying a subscription before they understand the terms.',
        'Avoid promising account sharing, transferring your plan or linking diaries unless the service explicitly supports the relevant arrangement. A recommendation is separate from a joint-account decision. If your friend wants to discuss their records later, agree what they wish to share. Their choice to install the same app does not give you automatic permission to inspect or manage their information.',
      ] },
      { id: 'nexal-recommendation', title: 'Make a Nexal recommendation specific and truthful', paragraphs: [
        'You can describe Nexal as an Android option with free manual workouts, custom workouts and history, plus free manual meal and macro tracking and copying recent meals. Premium includes AI workout and meal plans, AI macro estimates and barcode scanning. Recommend the capability relevant to your friend’s brief rather than presenting every feature as something they ought to use.',
        'Direct them through Nexal’s official Google Play download route and let them create their own account if they choose. Suggest a familiar entry as a starting point, with no need to subscribe just to test core logging. A good recommendation ends with an informed choice, including the possibility that another workflow fits better. It does not need a promised outcome to be helpful.',
      ] },
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Share Nexal’s official feature overview', text: 'Explain the relevant free task and leave the download decision to your friend.' },
    sources: [{ href: 'https://consumer.ftc.gov/articles/how-evaluate-online-reviews', label: 'FTC: evaluating sources and claims in recommendations' }],
    faqs: [
      { question: 'Should I recommend my subscription immediately?', answer: 'First identify the task and explain the free-versus-paid boundary. Your paid use case may differ from your friend’s needs.' },
      { question: 'Should I set up my friend’s account for them?', answer: 'Let them control their sign-in and purchase decisions. You can explain navigation without handling credentials or assuming access to their records.' },
    ],
  },
  {
    ...publication,
    slug: 'does-ai-meal-plan-save-time',
    title: 'How to decide whether an AI meal plan saves you time',
    metaTitle: 'Does an AI Meal Plan Save Time? Measure It',
    description: 'Measure meal-planning effort from the initial brief through review and usable decisions, including corrections instead of timing generation alone.',
    category: 'APP SELECTION', readTime: '5 min read',
    intro: 'A meal plan that appears quickly can still take time to review, correct and turn into workable choices. Evaluate whether AI saves time by measuring the whole planning task against your current method, using the same constraints and a clear stopping point.',
    takeaway: 'Count briefing, review and rework as well as generation. Time saved is useful only when the result is practical enough to use and does not move unfinished decisions into the kitchen.',
    sections: [
      { id: 'finished-task', title: 'Define what a finished planning task contains', paragraphs: [
        'Choose a bounded planning job, such as selecting dinners for a few ordinary evenings. Define finished as choices you understand and can prepare with your available time and resources. Keep the same preferences and constraints for your existing method and the AI method. Otherwise you may compare a familiar repeat menu with an ambitious new menu that involves much more work.',
        'MyPlate’s planning guidance includes checking existing food and thinking about preparation time. Include those practical checks in your stopping point. This does not mean an app automatically reads your pantry or produces a shopping list. Keep the brief and any ingredient checks in companion notes so the comparison measures your complete process rather than capabilities you have not verified.',
      ] },
      { id: 'baseline-clock', title: 'Measure your current method before timing the alternative', paragraphs: [
        'Record the time spent choosing meals, checking references and resolving missing details with your usual process. Use an ordinary planning occasion instead of your most difficult week. Note whether the result relies mostly on meals you already know. This baseline can reveal that repetition already keeps planning quick, in which case another generation tool may offer variety rather than a large time saving.',
        'For the AI method, include writing the brief, reading the output, checking practical fit and changing unusable suggestions. Keep active time distinct from any waiting time if that distinction matters to you. Do not stop the clock at generation when significant review remains. The question is whether you reach a usable meal decision, not how quickly text first appears on a screen.',
      ] },
      { id: 'worked-time', title: 'Calculate the difference and inspect displaced work', paragraphs: [
        'Use an explicitly illustrative example with invented times: the usual method takes twenty-five minutes, while AI briefing takes five, generation and reading take four, and review and revision take twelve. The AI total is twenty-one minutes, so the measured difference is four minutes. These figures are not Nexal performance data or a promise of typical savings.',
        'Then ask whether either method left unresolved cooking instructions or ingredient decisions for later. If the AI method required another ten minutes of repairs before dinner, its apparent advantage would disappear in this invented example. Keep nutritional suitability and ingredient checks independent of speed. A faster planning process does not justify accepting a suggestion you cannot confidently interpret or prepare.',
      ] },
      { id: 'nexal-time-value', title: 'Evaluate Premium planning against ordinary repeated use', paragraphs: [
        'Nexal Premium offers AI meal plans, AI macro estimates and barcode scanning. Free manual meal and macro tracking and copying recent meals support recording what you actually eat on Android. Download through the official Google Play route and evaluate free recording first if that is your task. If planning is the bottleneck, compare the current Premium offer with your whole-task timing evidence.',
        'Repeat the comparison on another ordinary planning occasion if the first result depended on unusually familiar or unfamiliar meals. Decide whether any time saved, reduced decision effort or useful variety justifies the purchase to you. Keep the criteria separate: you might value suggestions without claiming they are faster. Choose on observed usefulness rather than assuming AI generation guarantees a quicker week.',
      ] },
    ],
    feature: { href: '/ai-meal-planner', label: 'Evaluate Nexal Premium meal planning', text: 'Measure usable meal decisions, including review, before judging time savings.' },
    sources: [{ href: 'https://www.myplate.gov/eathealthy/budget/budget-weekly-meals', label: 'USDA MyPlate: meal planning with food and time constraints' }],
    faqs: [
      { question: 'Should I time only how fast the plan generates?', answer: 'No. Include the brief, reading, practical checks, revisions and any planning work displaced to later.' },
      { question: 'Are the worked times measured Nexal results?', answer: 'No. They are invented figures for demonstrating the calculation. Measure your own complete planning task.' },
    ],
  },
];
