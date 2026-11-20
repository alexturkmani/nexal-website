import type { Guide } from './content';

// Retain batch metadata locally without changing the shared content contract.
type ExpansionGuide = Guide & { contentBatch: 'expansion-2' };

const articles: ExpansionGuide[] = [
  {
    slug: 'record-machine-seat-settings',
    title: 'Recording machine seat settings for comparable sessions',
    metaTitle: 'Record Gym Machine Seat Settings Clearly',
    description: 'Build a machine setup reference with seat, support and start-position settings while keeping equipment labels separate from load.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'You remember the weight from your last machine session but cannot remember where the seat was. That missing setup can make the next entry hard to interpret. A compact machine reference helps you reproduce the instructed configuration and recognise when a session used something different.',
    takeaway: 'Tie settings to a specific machine, distinguish each adjustment, and date meaningful changes. A remembered seat number is a memory aid rather than proof of a suitable setup.',
    sections: [
      { id: 'identify-station', title: 'Attach the setting to the actual station', paragraphs: [
        'Record the manufacturer, model or gym equipment identifier before recording seat three. Two machines with similar upholstery may have different adjustment systems. Life Fitness describes different seat and start-position mechanisms within its Hammer Strength Select line, so even a familiar brand is not enough to establish identical settings.',
        'Choose an identifier you can recognise after the gym rearranges the room. Row machine near window is a fragile reference; the facility’s asset label or model name is more durable. Ask staff to identify an unlabelled station rather than guessing its model from appearance.'
      ] },
      { id: 'separate-adjustments', title: 'Give every adjustment its own name', paragraphs: [
        'Seat height, back support, chest support and start position are separate details. Preserve the printed number or letter beside the correct adjustment. If two dials both show four, a note saying machine four cannot tell you which one was changed. Keep the reference compact but specific.',
        'Where markings are absent, ask an instructor for a reliable way to recognise the setup they taught you. Do not improvise a body-position rule from a generic article. The log records an explained configuration; the machine instructions and qualified guidance determine how you should use it.'
      ] },
      { id: 'setup-card', title: 'Build an equipment card instead of a long diary entry', paragraphs: [
        'An illustrative companion card might read: chest press CP-2; seat B; start lever 3; trainer checked 11 October. A session note can then reference CP-2 setup A rather than repeating the whole description. These invented labels show an organisation method and are not universal machine settings.',
        'Keep any changes dated on the same card. If an instructor changes the seat to C, label the revised configuration setup B and record the first session that used it. That lets later readers distinguish a resistance change from a setup change without reconstructing several visits from memory.'
      ] },
      { id: 'verify-before-use', title: 'Check the current setup before comparing results', paragraphs: [
        'Another member may have changed the machine since your last visit. Consult your reference and follow the equipment adjustment instructions before using it. A saved setting does not mean the station is currently configured that way, and a log cannot verify that an adjustment mechanism is correctly engaged.',
        'For comparison, check machine identity, adjustment version, resistance unit and completed repetitions. If a dial marking is unreadable or the machine has been serviced, note the uncertainty and ask staff. Do not force an old number onto equipment that now behaves or labels its settings differently.'
      ] },
      { id: 'app-reference', title: 'Pair free workout history with your setup card', paragraphs: [
        'Nexal provides free manual workout logging, custom workouts and history on Android. Use those features for performed results and keep the equipment card in your own notes if the app fields do not capture each adjustment. Dedicated seat-setting storage is not assumed by this workflow.',
        'Install Nexal and test one machine session by finding both its saved result and the matching setup reference before your next visit. Premium AI workout planning is optional. The immediate benefit to assess is whether you can identify the setup associated with the result without relying on last week’s memory.'
      ] }
    ],
    feature: { href: '/ai-workout-planner', label: 'Explore workout history in Nexal', text: 'Use free session records alongside your own equipment setup reference.' },
    sources: [{ href: 'https://www.lifefitness.com/en-us/catalog/strength-training/selectorized/hammer-strength-select', label: 'Life Fitness: seat and start-position adjustment systems' }],
    faqs: [
      { question: 'Can I reuse seat three on every chest press?', answer: 'No. Settings belong to the specific machine and instructed setup. Identical numbers do not establish identical positions.' },
      { question: 'Does Nexal have a dedicated machine setup card?', answer: 'This guide uses your own companion note for setup details and Nexal’s supported free logging tools for workout results.' }
    ]
  },
  {
    slug: 'track-timed-holds-without-rep-totals',
    title: 'Tracking timed holds without inventing repetition totals',
    metaTitle: 'Track Timed Holds Without Inventing Reps',
    description: 'Keep hold durations, interruptions and position changes clear without turning seconds into repetition counts in workout history.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'A timed hold does not become thirty repetitions because it lasted thirty seconds. When a workout tracker is organised around sets and reps, squeezing a duration into the wrong field creates false totals. Keep the measurement honest, even if part of the record needs a companion note.',
    takeaway: 'Use seconds for duration, distinguish each uninterrupted attempt, and describe the held position. Never invent a repetition equivalent merely to fill a required field.',
    sections: [
      { id: 'measurement', title: 'Identify the measurement before opening the log', paragraphs: [
        'Check whether your programme asks for a sustained hold, repeated movements with a pause, or several separate holds. Those are different records. The NSCA distinguishes static and dynamic core exercise, providing context for treating a held position differently from a sequence of movements. Follow the exercise definition you were actually given.',
        'For a timed attempt, record duration in a unit such as seconds. For a moving exercise with a pause, keep repetitions and the instructed pause context distinct. A notation like ten with a pause should not silently become a ten-second hold when you review it later.'
      ] },
      { id: 'attempt-boundaries', title: 'Choose a consistent start and stop rule', paragraphs: [
        'Use the timing rule explained in your existing routine, including when the attempt begins and what marks its end. Keep your timing method consistent and place the device safely. This article does not prescribe a position or a duration, and a phone timer cannot check whether you maintained the instructed setup.',
        'If you are estimating after the event, label the duration estimated. A precise-looking number is not automatically a precise measurement. Decide with your instructor how to document an interrupted attempt, then apply that rule without changing it to make one session appear better.'
      ] },
      { id: 'interruption-example', title: 'Separate an interrupted hold from a continuous one', paragraphs: [
        'Suppose an illustrative attempt lasts 18 seconds, stops, and is followed later by 12 seconds. You can record two attempts totalling 30 seconds of observed holding time. You cannot describe that as one uninterrupted 30-second hold. These invented durations explain record boundaries rather than recommend a target.',
        'Keep the interruption outside the holding duration. If your timer continued through the break, preserve what you actually know instead of using the full elapsed reading as hold time. Record an uncertain duration as uncertain and use a clearer timing method next visit.'
      ] },
      { id: 'variation-check', title: 'Match position and support before comparing seconds', paragraphs: [
        'A longer duration in a different position describes a different attempt. Record the variation, support and any externally added resistance when relevant. Avoid assigning bodyweight kilograms to a hold unless your programme and logging method explicitly establish what that figure means.',
        'Before comparing two entries, check the held variation, timing rule, interruption status and whether the duration was measured or estimated. That checklist explains the record without turning the longest hold into an automatic instruction to continue longer next time. Ask your trainer about appropriate progression.'
      ] },
      { id: 'supported-fields', title: 'Test whether the app can represent the result honestly', paragraphs: [
        'Nexal offers free manual workout logging, custom workouts and history on Android. Inspect the available fields before choosing how to record a timed exercise. If they cannot express the duration, keep seconds in your own dated companion record rather than entering seconds as reps or assuming a dedicated hold timer exists.',
        'Download Nexal to try recording the rest of your routine and retrieving the matching hold reference. Premium AI workout planning is an optional way to organise sessions, not a requirement for keeping a truthful duration record. Judge the workflow by whether you can reconstruct each attempt later.'
      ] }
    ],
    feature: { href: '/workout-meal-planner-app', label: 'See Nexal’s manual workout tools', text: 'Use free workout history with companion duration records where needed.' },
    sources: [{ href: 'https://dxpprod.nsca.com/education/articles/kinetic-select/incorporate-dynamic-and-static-core-exercises/', label: 'NSCA: static and dynamic core exercise distinctions' }],
    faqs: [
      { question: 'Can I enter thirty seconds as thirty reps?', answer: 'That changes the meaning of the field. Preserve seconds in a supported duration field or your own companion record.' },
      { question: 'Can interrupted attempts be added together?', answer: 'You may calculate total observed holding time, but keep the attempts separate and do not call the sum one continuous hold.' }
    ]
  },
  {
    slug: 'manual-treadmill-incline-speed-log',
    title: 'Keeping a manual treadmill incline and speed workout log',
    metaTitle: 'Manual Treadmill Incline and Speed Log',
    description: 'Record treadmill speed, incline, duration and pauses manually without assuming machine syncing or converting incline levels into percentages.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'A treadmill visit recorded only as twenty minutes loses the settings that describe the session. If speed or incline changes, the final console reading may not represent the whole workout. A small manual segment record captures the differences without requiring a connection between the machine and your phone.',
    takeaway: 'Preserve speed units, the displayed incline convention and time spent at each setting. Keep machine readings separate from your own calculations and treat pauses explicitly.',
    sections: [
      { id: 'console-units', title: 'Read the console labels before copying numbers', paragraphs: [
        'Check whether speed is displayed in kilometres per hour or miles per hour and whether incline is a percentage or a numbered level. Life Fitness’s SL console guidance identifies speed, incline and time controls, but your specific console instructions remain the reference for what its labels mean.',
        'Record the treadmill model or gym identifier when useful. A note saying speed five, incline four is incomplete without units and label meanings. Do not translate a level into a percentage from appearance alone, and do not assume a second treadmill uses the same display convention.'
      ] },
      { id: 'segments', title: 'Split the record when a setting changes', paragraphs: [
        'Use a companion segment list with elapsed time, speed and incline. Make an entry when the setting changes, using the console reading when you can do so safely. You do not need to operate the phone while moving: preserve a simple summary after stopping according to the machine instructions.',
        'If you cannot remember an exact transition, label that segment approximate. Avoid retrospectively filling every minute with invented precision. A useful record distinguishes what was read from the console, what was recalled and what remains unknown, especially when you want to compare interval patterns.'
      ] },
      { id: 'illustrative-session', title: 'Keep the final setting from becoming the whole workout', paragraphs: [
        'An illustrative log might show five minutes at 4 km/h and 0% incline, then ten minutes at 5 km/h and 3%, then five minutes at 4 km/h and 0%. These invented settings demonstrate a segment ledger and are not a walking programme or an intensity recommendation.',
        'The final display of 4 km/h at 0% does not describe the middle segment. Likewise, the maximum incline does not describe all twenty minutes. Preserve the segment list instead of labelling the whole visit twenty minutes at 3%. Keep any console distance as a separate displayed observation.'
      ] },
      { id: 'pauses', title: 'Distinguish moving time from elapsed time', paragraphs: [
        'Note whether a pause is included in the console’s timer. If the session includes a break, preserve the observed moving segments and the break separately rather than assuming the display excludes it. Ask staff or consult the manual when the pause behaviour is unclear.',
        'For later comparison, check the same units, incline convention, segment durations and pause treatment. Record relevant support changes, such as using the handrails, as context for your trainer. The log does not translate treadmill settings into a personalised exertion assessment or a guaranteed calorie expenditure.'
      ] },
      { id: 'manual-app', title: 'Pair a manual treadmill ledger with Nexal history', paragraphs: [
        'Nexal offers free manual workouts, custom workouts and history on Android. Use the supported workout fields for your session and retain treadmill segments in your own dated note when they do not fit. This workflow uses manual recording and does not assume a treadmill integration or automatic speed capture.',
        'Download Nexal from Google Play and check whether your saved workout plus segment reference is easy to revisit. Premium AI planning is optional. Start with one existing treadmill session and judge the workflow by whether you can explain its settings, rather than by how many console numbers you copy.'
      ] }
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore manual workout history on Android', text: 'Use Nexal’s free workout tools alongside your own treadmill segment notes.' },
    sources: [{ href: 'https://support.lifefitness.com/hc/en-us/articles/42814152246039-Life-Fitness-Atmos-Treadmill-How-to-Use-Your-SL-Console-Guided-Tour', label: 'Life Fitness: SL console speed, incline and time controls' }],
    faqs: [
      { question: 'Does this workflow sync my treadmill with Nexal?', answer: 'No. It uses manual workout recording and a companion segment ledger. A treadmill connection is not assumed.' },
      { question: 'Can I record only the final incline?', answer: 'Only if it describes the session accurately. When incline changes, preserve the segments rather than applying the last setting to the whole visit.' }
    ]
  },
  {
    slug: 'record-range-of-motion-changes',
    title: 'Recording range-of-motion changes in exercise history',
    metaTitle: 'Record Range-of-Motion Changes in Your Log',
    description: 'Keep movement-range versions and changed repetition criteria visible without using a workout log to prescribe or assess exercise range.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'A repetition count loses meaning if the movement’s start and finish change without a record. This can happen after instruction, a changed setup or a revised exercise variation. A log should preserve that boundary so a larger count does not hide a different repetition definition.',
    takeaway: 'Describe the range you were taught, date changes and compare matching definitions. A workout record documents performed movement; it cannot establish the range that is appropriate for you.',
    sections: [
      { id: 'range-reference', title: 'Write the instructed endpoints in plain language', paragraphs: [
        'Ask your trainer how to describe the starting and finishing positions for the exercise you use. Keep their explanation in your programme reference, using concrete cues you understand. Avoid vague labels such as full or normal when they do not tell you what happened during the movement.',
        'The NHS strength examples describe movement endpoints for particular exercises, showing how a movement description adds information beyond its name. Those general examples do not set your individual range. This guide does not prescribe joint angles or tell you to extend a movement to improve the appearance of the log.'
      ] },
      { id: 'version-change', title: 'Create a dated range version when instruction changes', paragraphs: [
        'If an instructor revises the movement description, preserve both the earlier and current versions. A companion note could identify range A before the review and range B from the first session using the new instruction. Keep the reason as stated rather than supplying your own explanation.',
        'Associate each completed session with the version actually used. Do not rewrite older entries as though the latest instruction applied then. If the change happened partway through a session, identify which sets used each version so the visit does not become one falsely uniform result.'
      ] },
      { id: 'count-example', title: 'Explain a repetition change without ranking it', paragraphs: [
        'An illustrative history might show ten repetitions under range A and eight under range B at the same displayed load. The count changed while the repetition definition also changed. That supports describing two different conditions, rather than declaring a decline or claiming that the earlier count was invalid.',
        'If you cannot identify which range an older set used, mark that limitation in your companion notes. These invented counts are classification examples, not a recommended training progression. Preserve what was actually recorded and start a clear comparison from the first well-described session.'
      ] },
      { id: 'unexpected-range', title: 'Distinguish planned changes from observations', paragraphs: [
        'An intentionally revised variation differs from noticing that your movement changed during an attempt. Record the observation plainly, including the affected set, without treating it as a new instruction. If discomfort or uncertainty led to the change, seek appropriate guidance rather than interpreting the log as permission to continue.',
        'Use a review checklist: movement version, setup, endpoints, completed repetitions and whether the range change was planned. A diary can support a precise trainer question about what to count next time. It cannot diagnose a restriction or prescribe a corrective exercise.'
      ] },
      { id: 'history-workflow', title: 'Keep range context with your Android workout history', paragraphs: [
        'Nexal’s free manual workouts, custom workouts and history can hold your established routine and results. Keep the range-version reference separately where supported fields do not express the detail. Automatic motion measurement or technique assessment is not part of the workflow described here.',
        'Download Nexal to test finding a completed session alongside the matching instruction version. Premium AI workout planning is optional, and generated text does not observe your movement. The practical test is whether the saved history helps you ask an informed question when the definition of a repetition changes.'
      ] }
    ],
    feature: { href: '/ai-workout-planner', label: 'Explore manual workout history and planning', text: 'Keep actual results free and retain your own movement-version reference.' },
    sources: [{ href: 'https://www.nhs.uk/live-well/exercise/strength-exercises/', label: 'NHS: exercise descriptions with movement endpoints' }],
    faqs: [
      { question: 'Is a lower count after a range change a decline?', answer: 'The conditions changed. Describe the new repetition definition and compare matching versions before drawing a conclusion.' },
      { question: 'Can the log tell me which range is suitable?', answer: 'No. Use qualified instruction for suitability and keep the log as a record of the movement actually performed.' }
    ]
  },
  {
    slug: 'workout-history-permanent-equipment-change',
    title: 'Keeping workout history when gym equipment changes permanently',
    metaTitle: 'Workout History After Gym Equipment Changes',
    description: 'Preserve retired equipment records, start a clearly labelled replacement history and avoid invented weight conversions after a gym refit.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'A gym refit removes the machine you used for months and replaces it with a different model. This is more than a one-day substitution: every future session needs a new equipment reference. Preserve the old history while making the permanent transition easy to recognise.',
    takeaway: 'Record the retirement boundary, identify the replacement and start a new comparison series. Preserve old values under their original conventions rather than converting them to match the new machine.',
    sections: [
      { id: 'close-old-series', title: 'Mark the last actual session on the old equipment', paragraphs: [
        'Find the latest saved workout you can confidently associate with the retired machine. Record its date and identifier in a companion transition note. If you do not know the exact removal date, say last recorded use instead of inventing a precise retirement date for the gym.',
        'Keep earlier entries intact as records of their original conditions. A machine disappearing does not make its history useless, but it does limit direct numerical comparison with the replacement. Retain the old weight convention and setup key so you can still explain those sessions later.'
      ] },
      { id: 'new-equipment', title: 'Build the replacement reference from scratch', paragraphs: [
        'Identify the new manufacturer, model, units and adjustment system. Ask staff for instruction before treating a familiar exercise name as a familiar machine. Life Fitness documents different seat and start-position systems within its equipment range, illustrating why an old setting should not automatically transfer to a replacement.',
        'Record the replacement setup you are taught in a new companion equipment card. Do not copy the old selector value as a starting instruction. This is an administrative handover, not a method for selecting a suitable load or deciding whether the replacement movement belongs in your programme.'
      ] },
      { id: 'transition-example', title: 'Use an explicit boundary instead of a conversion factor', paragraphs: [
        'An illustrative transition note could read: old row R-1, last recorded use 8 October; replacement R-2, first recorded use 11 October. A result of 40 kg on R-1 and 25 kg on R-2 then remains two labelled machine observations. The invented figures are not an equivalence or a suggested replacement load.',
        'Keep a stable movement-family reference if useful, but distinguish the equipment-specific series. Do not multiply all old entries by a guessed factor to make the graph continuous. A visible break is more honest than a seamless line based on an unsupported conversion.'
      ] },
      { id: 'new-baseline', title: 'Review consistency within the replacement series', paragraphs: [
        'Once you have actual sessions on the replacement, compare those with each other under the same setup. Check that the machine identity, load label, adjustment version and exercise definition match. Ask the programme author how they want to interpret the transition rather than demanding a new personal record immediately.',
        'If the replacement changes the movement enough to require a revised programme instruction, preserve that revision separately from the equipment event. The machine change date and the programme revision date may differ. Keeping both prevents a later review from attributing every difference to a single cause.'
      ] },
      { id: 'update-working-copy', title: 'Update the current routine without rewriting past visits', paragraphs: [
        'Nexal provides free custom workouts, manual logging and history on Android. Use the supported workflow to make your current routine reflect the replacement while keeping completed sessions understandable under their original labels. Retain the transition register in your own notes where extra metadata does not fit.',
        'Install Nexal to test finding the last old-equipment result and first new-equipment result. Premium AI workout planning is optional if you need help organising a revised routine. Your immediate recording goal is a traceable handover that preserves past work and makes future comparisons specific to the new station.'
      ] }
    ],
    feature: { href: '/workout-meal-planner-app', label: 'Explore Nexal custom workouts and history', text: 'Keep current routines and completed results clear through equipment changes.' },
    sources: [{ href: 'https://www.lifefitness.com/en-us/catalog/strength-training/selectorized/hammer-strength-select', label: 'Life Fitness: differences in machine adjustment systems' }],
    faqs: [
      { question: 'Should I delete history for a retired machine?', answer: 'Preserve useful old records with their original equipment context. Mark the transition and compare replacement sessions within their own series.' },
      { question: 'Can I convert every old machine weight to the new one?', answer: 'Do not invent an equivalence. Different equipment and label conventions can prevent a defensible direct conversion.' }
    ]
  },
  {
    slug: 'prepare-trainer-questions-from-workout-log',
    title: 'Using a workout log to prepare questions for a trainer',
    metaTitle: 'Prepare Trainer Questions from Workout Logs',
    description: 'Turn specific session observations into useful trainer questions with dates, context and a clear decision to clarify at your next review.',
    publishedAt: '2026-10-11', contentBatch: 'expansion-2', category: 'WORKOUT TRACKING', readTime: '5 min read',
    intro: 'A trainer review is easier to use when you bring a specific question rather than a month of unexplained numbers. Your workout history can supply the date, exercise and context behind that question. Preparing a short agenda helps you clarify an instruction without asking the log to make the decision itself.',
    takeaway: 'Separate observation, uncertainty and the decision you want clarified. Bring a small number of relevant records and write down the trainer’s answer with its effective date.',
    sections: [
      { id: 'choose-decision', title: 'Start with the decision you need clarified', paragraphs: [
        'Choose a concrete question such as which equipment variation belongs in session B, how the programme counts alternating repetitions, or what to record after an interrupted set. These are easier to answer than a broad request to explain every change in your workout totals.',
        'The NSCA’s client-consultation guidance discusses clarifying questions and agreements between trainer and client. Use that communication principle without turning your diary into an assessment tool. A question about an instruction should identify the instruction, not imply that a larger logged number proves what the next programme should be.'
      ] },
      { id: 'evidence-packet', title: 'Choose the smallest relevant set of records', paragraphs: [
        'Find the actual session dates and exercise entries connected to the uncertainty. Include the programme version, machine or variation and what you completed. Keep unrelated visits out of the immediate agenda so the trainer can see the relevant sequence without reconstructing your entire history.',
        'If a detail is missing, say so. Remembering that something felt different is an observation; identifying the exact cause requires more evidence. A short companion note can distinguish recorded facts from later recollection and prevent an uncertain equipment setting from becoming a confident premise in the conversation.'
      ] },
      { id: 'question-example', title: 'Write observation, context and question as separate lines', paragraphs: [
        'An illustrative agenda item could say: on 8 October I recorded ten repetitions on row R-1; on 11 October I used replacement R-2 and recorded eight; which setup should I use for the next session? The invented dates, labels and counts show question structure, not a performance comparison or suggested workload.',
        'The observation gives evidence, the equipment change supplies context and the final line requests a decision. Avoid leading wording such as why did I get weaker when the conditions differ. Also avoid asking the trainer to infer facts you can clarify directly with gym staff, such as an unreadable machine model.'
      ] },
      { id: 'prioritise-agenda', title: 'Sort questions by what affects your next visit', paragraphs: [
        'Put unclear exercise instructions and unresolved equipment choices before optional analysis of long-term totals. Use a short checklist: what happened, where it is recorded, what remains unknown and what answer would change your next action. This creates a practical agenda rather than an argument for a predetermined progression.',
        'Keep symptoms or concerns in plain language and seek appropriate professional advice when needed. The workout log cannot diagnose a problem, and the trainer discussion should not be treated as a substitute for an assessment outside their scope. Do not continue an uncertain movement merely to collect another data point.'
      ] },
      { id: 'capture-answer', title: 'Use free history as a personal conversation reference', paragraphs: [
        'Nexal’s Android manual workout logging, custom workouts and history are free. Open the relevant entries during your review or manually summarise them in your own agenda. This method does not assume a coach portal, export feature or automatic sharing with a trainer.',
        'After the conversation, record the answer and the date it applies from in your companion programme notes. Download Nexal to test whether retrieving those actual session records makes your next review easier to prepare. Premium AI workout planning is optional and does not replace clarification from the person who supplied your instructions.'
      ] }
    ],
    feature: { href: '/ai-workout-planner', label: 'Explore free workout history for personal review', text: 'Find completed sessions in Nexal and prepare your own trainer discussion notes.' },
    sources: [{ href: 'https://dxpprod.nsca.com/education/articles/kinetic-select/client-consultation/', label: 'NSCA: clarifying questions in a client consultation' }],
    faqs: [
      { question: 'Do I need to show every workout to my trainer?', answer: 'Choose records relevant to the question and retain access to the rest. A focused agenda helps establish the context quickly.' },
      { question: 'Does Nexal send my history to a trainer?', answer: 'This guide uses personal history review and your own manual summary. It does not assume automatic sharing or a coach account.' }
    ]
  },
];

export const trainingDetailGuides: Guide[] = articles;
