import type { Guide } from './content';

const publication = { publishedAt: '2026-10-11', contentBatch: 'expansion-2' };

export const foodDetailGuides: Guide[] = [
  {
    ...publication,
    slug: 'tinned-food-drained-versus-net-weight',
    title: 'Drained versus net weight: logging the part of a tin you eat',
    metaTitle: 'Tinned Food: Drained vs Net Weight',
    description: 'Match tinned food nutrition to drained solids or retained liquid, calculate your share and try free manual meal logging in Nexal.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'A tin can show a net weight, a drained weight and a serving size that refers to only one of them. For beans, fish or fruit, the useful question is which contents reached your plate. Choosing the largest printed weight without reading the nutrition basis can misdescribe an otherwise simple lunch.',
    takeaway: 'Identify what the panel describes before using either weight. Keep solids, discarded liquid and liquid eaten with the meal distinct, and record only your portion.',
    sections: [
      { id: 'three-quantities', title: 'Read three quantities as separate pieces of information', paragraphs: [
        'Net contents can include the food and its packing liquid, while a stated drained weight describes the drained contents. Neither number alone establishes the nutrition calculation. Look beside the panel for words such as drained, as sold or including sauce. Keep the serving definition with the nutrient values rather than pairing a weight from the front with an unrelated column.',
        'The Australian Food Standards Code addresses nutrition information for drained foods. For your diary, use the wording on the particular product rather than assuming every tin follows the same basis. Beans packed in water, fish in oil and a ready-to-eat sauced product require separate checks. If the basis is unclear, consult the manufacturer before treating your calculation as label-based.',
      ] },
      { id: 'half-tin', title: 'Calculate a drained share without using the net weight', paragraphs: [
        'Here is an explicitly illustrative example: a tin has 400 grams net contents, 240 grams drained contents and 8 grams of protein per 100 grams drained. You eat 120 grams of the drained food. Your calculation is 120 divided by 100, multiplied by 8, giving 9.6 grams of protein. The 400-gram figure has no role in this drained-solids calculation.',
        'Apply the same 1.2 multiplier to each relevant value in that drained column. Eating half the drained contents does not mean eating 200 grams merely because the unopened tin lists 400 grams. If your actual drained yield differs, use your measured edible amount with the matching nutrition basis rather than forcing the portion to match the package illustration.',
      ] },
      { id: 'liquid-decision', title: 'Decide whether the packing liquid belongs in the meal', paragraphs: [
        'Before discarding the tin, ask whether you drained it, retained everything or used some liquid in a sauce. If the nutrition describes drained solids but you also consume packing liquid, the solids calculation may not describe the complete meal. Seek suitable information for the retained component. Do not invent an exact oil or syrup contribution from the difference between net and drained weights.',
        'Conversely, adding a separate sauce entry may duplicate nutrition when the product panel already describes the whole sauced food. Make one clear boundary: this entry includes these contents. Keep a brief companion note outside the app when the label needs explanation. A useful note says drained solids only or all contents retained, rather than an unsupported precise drainage percentage.',
      ] },
      { id: 'tin-workflow', title: 'Test this label check with one real lunch in Nexal', paragraphs: [
        'Download Nexal for Android, create your account and try free manual meal and macro tracking with a tin you regularly buy. Read the panel, calculate the portion outside the app and enter its nutrition through the available manual workflow. Keep the packaging reference in your own notes if needed; this process does not require a dedicated drained-weight calculator.',
        'When copying that recent meal, confirm both the product and how you handled its liquid. A lunch made with the whole tin differs from one made with half the drained contents. Premium barcode scanning is optional and still needs this check. Finish when the food, label basis and eaten quantity agree, without expecting the download to make uncertain packing-liquid estimates exact.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Try Nexal’s free manual meal tracker', text: 'Record the edible portion after checking the tin’s nutrition basis.' },
    sources: [{ href: 'https://www.legislation.gov.au/F2015L00395/latest/text', label: 'Australian Food Standards Code: nutrition information requirements' }],
    faqs: [
      { question: 'Should I always use the drained weight?', answer: 'Use it when you ate drained contents and the nutrition values describe drained food. Other products or retained liquid may need a different basis.' },
      { question: 'Does scanning a tin establish how much liquid I consumed?', answer: 'No. Nexal Premium barcode scanning does not establish your portion or how you drained the food. Check those details yourself.' },
    ],
  },
  {
    ...publication,
    slug: 'log-leftovers-recipe-changes-second-day',
    title: 'Recording leftovers when yesterday’s recipe changes today',
    metaTitle: 'Log Leftovers When the Recipe Changes',
    description: 'Carry forward only the remaining food, account for second-day additions and log a changed leftover meal without rebuilding yesterday in Nexal.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'Yesterday’s stew becomes today’s pasta sauce, or leftover rice gets eggs and vegetables. Copying yesterday’s meal unchanged misses the new ingredients, while recalculating the whole original batch can count food already eaten. Treat the remaining food as a new starting quantity with its own additions.',
    takeaway: 'Carry forward the estimated nutrition of the food remaining, add what enters today’s dish and calculate today’s eaten share. Keep yesterday’s consumed portion in yesterday’s record.',
    sections: [
      { id: 'carry-forward', title: 'Establish what remains before changing the dish', paragraphs: [
        'Find the original batch calculation and identify the portion left after the first meal. If the dish was reasonably uniform, its remaining share can provide a starting estimate. If someone took most of one ingredient, the leftover mixture may differ. State that limitation rather than assuming the remaining weight contains exactly the original balance of ingredients.',
        'Keep a companion recipe note outside the app with original batch totals, the amount consumed and the estimated remainder. That is an accounting reference, not proof of food safety or a storage recommendation. Follow appropriate food handling guidance separately. Your diary calculation should not make a decision about whether leftovers are suitable to eat.',
      ] },
      { id: 'changed-batch', title: 'Build today’s batch from the remainder and additions', paragraphs: [
        'Use this explicitly illustrative example: yesterday’s batch was estimated at 1,200 kcal and half remained, so the starting remainder contributes 600 kcal. Today you add ingredients totalling 300 kcal. The changed batch therefore contains an estimated 900 kcal. If you eat one third of an evenly mixed new batch, today’s portion contributes 300 kcal. These are invented arithmetic figures.',
        'Scale protein, carbohydrate and fat separately using the same shares. Do not enter yesterday’s entire 1,200 kcal alongside today’s additions because half the old batch was already eaten. If you eat all the remainder yourself with the additions, there is no new portion division. The calculation follows food entering the new dish and the share leaving it onto your plate.',
      ] },
      { id: 'second-day-yield', title: 'Check whether reheating changed weight or composition', paragraphs: [
        'Reheating, adding water or reducing a sauce can change finished weight. FSANZ explains that moisture gains and losses affect recipe weight. Use the current finished batch weight when dividing today’s dish by weight; yesterday’s grams-per-serving reference may no longer describe it. Water added for texture changes the division basis without adding the nutrition of another ingredient.',
        'If you add distinct components, such as separate pasta and a leftover sauce, calculate their portions separately instead of assuming a uniform mixture. If you discard part of the dish or its liquid, avoid inventing exact nutrient losses from discarded weight alone. Record a reasonable estimate with its limitation. A changed recipe deserves a new explanation, even when its familiar name stays the same.',
      ] },
      { id: 'leftover-entry', title: 'Use recent-meal copying as a reference, then revise', paragraphs: [
        'Try Nexal’s free manual meal tracker on Android after downloading the app and creating your account. Calculate the new portion outside the app, then record its nutrition. A copied recent meal can provide a starting reference, but check every carried-forward amount and addition before treating it as today’s meal. Do not also log the old ingredients for the same consumed food.',
        'Keep the two versions clear in your companion notes: original batch and second-day batch. Nexal Premium AI meal plans or macro estimates are optional; this method does not require automatic leftover detection or recipe versioning. Before saving, ask whether today’s total includes only today’s eaten share and whether any remaining food still belongs to a future meal rather than this one.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Record changed leftover meals in Nexal', text: 'Use free manual tracking for today’s portion after calculating the new batch.' },
    sources: [{ href: 'https://www.foodstandards.gov.au/business/labelling/nutrition-panel-calculator/weight-change-factors', label: 'FSANZ: recipe weight changes through moisture gains and losses' }],
    faqs: [
      { question: 'Can I copy yesterday’s leftovers entry unchanged?', answer: 'Only if today’s food and portion still match. New ingredients, a different remaining share or a changed preparation can require a new calculation.' },
      { question: 'Does adding water mean adding calories?', answer: 'Water changes the dish’s weight without adding food energy. Recalculate weight-based shares of the finished dish rather than reusing the old portion weight.' },
    ],
  },
  {
    ...publication,
    slug: 'food-diary-decimal-rounding-false-precision',
    title: 'Food diary decimals: round calculations without inventing precision',
    metaTitle: 'Food Diary Rounding and False Precision',
    description: 'Keep useful decimals during portion calculations, round the final entry sensibly and avoid mistaking extra digits for better food data.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'A calculator can produce six decimal places from a label with whole numbers. Those digits describe the arithmetic, not a laboratory measurement of your lunch. For people calculating portions manually, a simple rounding convention makes entries readable without losing useful information halfway through the calculation.',
    takeaway: 'Keep intermediate arithmetic intact, round once at the final entry and spend your checking effort on food identity and portion basis before tiny decimal differences.',
    sections: [
      { id: 'input-limits', title: 'Recognise the precision already missing from the inputs', paragraphs: [
        'Nutrition information describes food using stated quantities and label conventions. US FDA guidance includes rounding rules for displayed nutrient values. A printed whole number is therefore not necessarily an unrounded measurement. Applying a precise portion multiplier cannot recover hidden digits or establish the exact composition of the particular item you ate.',
        'Your portion may also be approximate: an uneven scoop, food left on a plate or a scale reading to whole grams. Keep those limits in perspective when comparing days. The difference between a measured portion and an estimated bowl is usually a more useful explanation than the final hundredth of a gram. Extra digits should not disguise uncertain ingredients or preparation.',
      ] },
      { id: 'one-round', title: 'Round at the end of a multi-step calculation', paragraphs: [
        'Consider an explicitly illustrative product with 7.3 grams of protein per 100 grams. A 37-gram portion contributes 7.3 multiplied by 0.37, or 2.701 grams. If your final-entry convention uses one decimal place, record 2.7 grams. The calculation is transparent even though the entry is shorter. These invented numbers are arithmetic examples, not measured nutrition for a real product.',
        'If several components form one meal, add their calculated contributions before rounding the final total. Rounding each small component to a whole gram first can move the combined figure unnecessarily. Use the available entry precision and a consistent convention suitable for ordinary diary use. You are simplifying the displayed estimate, not claiming that one decimal place is universally the right resolution.',
      ] },
      { id: 'mismatch-triage', title: 'Investigate the right kind of discrepancy', paragraphs: [
        'When two calculations disagree, check the unit, serving definition, food state and product version first. A per-serving figure mistaken for per-100-gram nutrition can create a substantial mismatch. A tiny difference between two valid calculation routes may reflect rounding in the original columns. Do not change your portion simply to make two printed columns reconcile perfectly.',
        'Use a short decision sequence in your companion notes: same food; same preparation; same quantity basis; then rounding. If those first checks fail, resolve them before debating decimal places. If they pass and the remaining difference is small, keep your chosen source and method clear. This makes repeated entries consistent without presenting them as exact chemical measurements.',
      ] },
      { id: 'readable-nexal', title: 'Test a readable manual entry in Nexal', paragraphs: [
        'Download Nexal on Android, create an account and try its free manual meal and macro logging with one calculated portion. Keep the original label and arithmetic in a companion note if you want an audit trail. Enter the final meal values through the supported fields. This guide does not assume adjustable decimal display settings or an automatic rounding control in the app.',
        'Copy a recent meal when it truly repeats, preserving the checked calculation rather than recalculating it with a different rounding rule each time. Premium AI macro estimates remain estimates even if they display precise-looking numbers. Before finishing, ask whether your entry communicates the source and portion honestly. A tidy number can be useful without implying that your diary measures intake to a fraction of a gram.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Keep readable meal records with Nexal', text: 'Try free manual logging after checking your portion arithmetic.' },
    sources: [{ href: 'https://www.fda.gov/regulatory-information/search-fda-guidance-documents/guidance-industry-guide-developing-and-using-data-bases-nutrition-labeling', label: 'FDA: nutrition label values and rounding guidance' }],
    faqs: [
      { question: 'Do more decimal places mean a more accurate diary?', answer: 'No. Extra digits may only reflect calculator output. Accuracy still depends on the food source, portion and assumptions.' },
      { question: 'Should I round every ingredient before adding it?', answer: 'Keep intermediate calculations intact where practical, add the component contributions and round the final value to a sensible supported precision.' },
    ],
  },
  {
    ...publication,
    slug: 'buffet-meal-estimate-transparent-food-diary',
    title: 'Record a buffet meal estimate you can explain afterwards',
    metaTitle: 'Log a Buffet Meal Estimate Transparently',
    description: 'Reconstruct buffet rounds, separate known foods from uncertain dishes and save one transparent meal estimate with Nexal’s manual tracker.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'A buffet is a sequence of small decisions rather than one fixed restaurant order. You might revisit a dish, share dessert and leave part of a serving. A transparent estimate begins with the rounds you actually ate, so the final total can be explained without pretending the buffet supplied a weighed recipe.',
    takeaway: 'Reconstruct each round once, identify the uncertain components and choose a reasonable working estimate. Keep the uncertainty in companion notes rather than polishing unsupported decimal places.',
    sections: [
      { id: 'rounds-first', title: 'Reconstruct the meal by rounds before calculating', paragraphs: [
        'Make a brief companion note after eating: first plate, second plate, dessert and drinks. Describe the foods and approximate amounts you consumed, including unfinished items. This prevents one mental image of the first plate from standing in for the whole visit. You do not need to document other diners or interrupt the meal with a detailed weighing exercise.',
        'NIDDK’s sample diary illustrates recording eating events, including shared and unfinished food. Use that event-based idea for the buffet, while keeping the calculation method separate. Your note is outside Nexal and is not an automatic plate tracker. If a later round is poorly remembered, identify that gap instead of replacing it with a confidently named standard buffet meal.',
      ] },
      { id: 'source-confidence', title: 'Separate known portions from uncertain mixed dishes', paragraphs: [
        'Use the venue’s information when it clearly describes the food and quantity you ate. A wrapped item with its own label may be easier to estimate than an unfamiliar mixed casserole. For an unlabelled dish, choose a reasonably matching prepared-food source and explain the key assumption. A sauce-heavy preparation should not silently inherit values for a plain ingredient.',
        'Keep practical confidence categories in your note: labelled item; recognisable food with estimated amount; mixed dish with uncertain recipe. These are your review categories, not promised app fields. Spend attention on the part most likely to change the estimate, such as an unknown dressing or a repeated serving. Recalculating a known packaged item repeatedly will not settle an unknown mixed dish.',
      ] },
      { id: 'working-total', title: 'Choose a working estimate without hiding the uncertainty', paragraphs: [
        'Consider an explicitly illustrative reconstruction: known items contribute 300 kcal, while two uncertain dishes together are estimated at 400 to 600 kcal. That gives an arithmetic range of 700 to 900 kcal. A working entry of about 800 kcal could be reasonable if your chosen assumptions support it. These invented figures are not typical buffet values or a recommended intake.',
        'The range is a scenario comparison, not a statistical confidence interval. Keep its basis outside the app and enter a single working estimate through the available workflow. Estimate protein, carbohydrate and fat from the selected components separately; an energy range alone cannot determine them. Do not choose an endpoint simply to make the day’s total look more comfortable or more cautious.',
      ] },
      { id: 'buffet-close', title: 'Save one reviewed meal and stop reconstructing it', paragraphs: [
        'Try Nexal’s free manual meal and macro logging on Android after downloading the app and creating an account. Enter either the calculated meal total or its component contributions as appropriate to the workflow, without counting both. Keep your rounds note available for one final check: repeated servings represented, shared food limited to your share and drinks included where relevant.',
        'Premium AI macro estimates are optional starting points, not verification of hidden buffet recipes. Once your best available reconstruction is represented, close the entry. A later correction is useful when new information arrives, such as the venue identifying a dish, but repeated guessing does not necessarily improve it. The app’s useful role is maintaining an understandable record, without guaranteeing an exact total from uncertain portions.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Keep a transparent buffet record in Nexal', text: 'Try free manual logging with your own clearly stated portion assumptions.' },
    sources: [{ href: 'https://www.niddk.nih.gov/health-information/weight-management/healthy-eating-physical-activity-for-life/health-tips-for-adults', label: 'NIDDK: sample diary including shared and unfinished meals' }],
    faqs: [
      { question: 'Should I enter a range for the buffet meal?', answer: 'Use a range in companion notes to explore uncertain assumptions, then record a supported working estimate. This guide does not claim a range-entry field in Nexal.' },
      { question: 'Can an AI estimate verify buffet ingredients?', answer: 'No. Nexal Premium AI macro estimates do not establish an unknown recipe or the amount you consumed. Review the assumptions yourself.' },
    ],
  },
  {
    ...publication,
    slug: 'meal-plan-ingredient-availability-grocery-swaps',
    title: 'Meal plan ingredient availability: reconcile the plan with the shop',
    metaTitle: 'Meal Plan Availability and Grocery Swaps',
    description: 'Check a meal plan against pantry stock, pack sizes and store availability, make practical manual swaps and record the meals actually prepared.',
    category: 'MEAL PLANNING', readTime: '5 min read',
    intro: 'A meal plan can be neatly written while depending on ingredients your shop does not stock or quantities that leave awkward leftovers. Before cooking, reconcile the plan with the groceries you can actually buy. This is a basket-and-kitchen workflow, rather than a search for nutritionally identical substitutes.',
    takeaway: 'Check stock and usable quantities first, choose a feasible manual change and carry that decision through shopping, preparation and logging. A generated meal remains a proposal until you cook it.',
    sections: [
      { id: 'availability-pass', title: 'Run a pantry and shop availability pass', paragraphs: [
        'Write a companion shopping note with four columns of information: ingredient needed, amount required, amount already available and amount to buy. Keep it in your usual notes or on paper. Check what usable form you have, such as dry, cooked or frozen, before treating pantry stock as a direct match. Count ingredients across the planned meals rather than checking each dinner in isolation.',
        'Then identify uncertain purchases: a specific brand, seasonal produce or an ingredient carried by only one shop. Decide which meals can tolerate a change and which rely on that ingredient for their basic preparation. This is a manual planning exercise outside Nexal. Do not assume AI suggestions have checked local stock, store inventory or the contents of your cupboards.',
      ] },
      { id: 'pack-reality', title: 'Turn recipe amounts into a workable grocery basket', paragraphs: [
        'Consider an explicitly illustrative plan needing 300 grams of an ingredient across two dinners. Your pantry contains 100 usable grams, and the shop sells 250-gram packs. Buying one pack covers the remaining 200 grams and leaves 50 grams to account for. These invented quantities demonstrate purchasing arithmetic; they are not a serving recommendation or a claim about any store’s packaging.',
        'Give that remainder a plausible use, keep it for another suitable purpose or reconsider the recipe before buying. The right answer need not be exact pack matching. Likewise, changing to a larger substitute pack does not mean the entire pack belongs in tonight’s diary. Shopping quantity, recipe quantity and eaten quantity are three separate decisions, even when an app brings planning and tracking together.',
      ] },
      { id: 'swap-decision', title: 'Choose a manual swap by its job in the recipe', paragraphs: [
        'Identify what the missing ingredient does: provides a filling, forms a sauce, adds texture or acts as a topping. Compare replacements for availability, preparation time, equipment and taste before trying to preserve a macro total. Sometimes changing the meal entirely is more practical than assembling several substitutes that create another difficult shopping list.',
        'Check current ingredient and allergen information for the actual replacement. FSANZ explains declared allergen information and requesting information for unpackaged food. A suggested swap does not verify those details for the product in your basket. Update the companion plan with the chosen product and amount so that you cook the revision, rather than discovering the decision again when dinner begins.',
      ] },
      { id: 'basket-to-diary', title: 'Bring the actual cooked meal into Nexal', paragraphs: [
        'Nexal Premium offers AI meal planning; download the Android app, create your account and evaluate whether planning ideas help with your real kitchen constraints. Review availability yourself before shopping. After preparing the revised dish, use free manual meal and macro logging for what you actually ate, calculating changed ingredients outside the app as needed.',
        'Keep the original suggestion, shopping revision and actual meal distinct in your companion notes. This workflow does not rely on automatic grocery lists, store connections or automatic macro adjustments after a swap. A useful final review asks what was unavailable, what you changed and whether the replacement made cooking easier. That gives the next planning attempt concrete information without promising that every generated recipe will fit your shop.',
      ] },
    ],
    feature: { href: '/ai-meal-planner', label: 'Explore Nexal’s optional AI meal plans', text: 'Review Premium planning ideas against your groceries, then log actual meals with free manual tracking.' },
    sources: [{ href: 'https://www.foodstandards.gov.au/consumer/labelling/allergen-labelling', label: 'FSANZ: allergen information on packaged and unpackaged food' }],
    faqs: [
      { question: 'Does Nexal check whether my shop stocks an ingredient?', answer: 'This guide does not claim store inventory access. Check availability yourself and keep your grocery decisions in companion notes.' },
      { question: 'Should I log the quantity bought or the quantity eaten?', answer: 'Log your eaten portion. A purchased pack can cover several recipes or leave unused food, so its full contents are not automatically one meal.' },
    ],
  },
  {
    ...publication,
    slug: 'food-diary-travel-ounces-grams-conversions',
    title: 'Food diary travel units: convert ounces, grams and servings clearly',
    metaTitle: 'Travel Food Diary: Ounces, Grams and Servings',
    description: 'Distinguish weight ounces from fluid ounces, use label gram equivalents and convert travel portions before logging meals in Nexal.',
    category: 'NUTRITION TRACKING', readTime: '5 min read',
    intro: 'An overseas label can describe a serving in ounces while your usual diary reference uses grams. A drink may use fluid ounces, and a familiar cup can have a different stated volume. Before converting anything, identify whether the quantity describes mass, liquid volume or a manufacturer’s serving definition.',
    takeaway: 'Prefer the gram or millilitre equivalent printed on the actual label. Otherwise convert within the same kind of quantity, then scale the nutrition once to the amount you consumed.',
    sections: [
      { id: 'unit-identity', title: 'Identify weight ounces and fluid ounces separately', paragraphs: [
        'An ordinary food weight ounce, written oz, converts to approximately 28.35 grams. A fluid ounce, written fl oz, measures volume rather than mass. NIST lists these as separate conversions; its approximate US fluid-ounce conversion is 29.57 millilitres. Do not multiply a drink’s fluid ounces by the weight-ounce factor and assume the result describes grams of that drink.',
        'Fluid-ounce conventions can differ by context, so use the metric quantity on the package when available. Similarly, treat cup as a label-defined measure rather than assuming your home measuring cup matches it. If the label says one cup with an accompanying gram amount, that gram amount is often the clearer bridge to a weighed food portion during travel.',
      ] },
      { id: 'printed-equivalent', title: 'Use the printed serving equivalent before a generic conversion', paragraphs: [
        'A label might pair a familiar unit with a rounded metric serving. For scaling that panel, keep its stated serving definition together rather than replacing the metric number with a more precise conversion and wondering why the columns differ. Your goal is to calculate from the label’s basis, not to reconstruct how the manufacturer rounded the display.',
        'Use this explicitly illustrative example: the panel states one serving as 1 oz, with 28 grams printed alongside, and lists 150 kcal per serving. You eat 42 grams. Using the stated 28-gram serving gives 1.5 servings and 225 kcal. These invented label values demonstrate serving arithmetic. The printed equivalent is the basis for this example, rather than an assertion that every ounce equals exactly 28 grams.',
      ] },
      { id: 'conversion-chain', title: 'Keep a short conversion chain when no equivalent is printed', paragraphs: [
        'For a weight quantity without a printed gram equivalent, multiply food ounces by approximately 28.35 to obtain grams. An explicitly illustrative 2.5-ounce portion therefore weighs about 70.9 grams. If your matching source is per 100 grams, multiply its nutrient values by about 0.709. Keep the original unit, conversion and nutrition basis together in a companion note outside the app.',
        'For liquids, convert volume to volume and use compatible per-volume nutrition. A conversion from millilitres to grams additionally needs suitable density information, so it is not an automatic next step. Avoid chains that repeatedly switch between guessed cups, ounces and servings. If the amount remains uncertain, record a sensible estimate and its original description rather than adding precision through extra conversions.',
      ] },
      { id: 'travel-entry', title: 'Test your travel reference with Nexal before reusing it', paragraphs: [
        'Download Nexal for Android, create your account and try free manual meal and macro logging with the calculated travel portion. Do the unit arithmetic outside the app, then enter the resulting meal nutrition through the supported workflow. Keep the local label and unit explanation in your own companion reference. This guide does not promise automatic regional-unit detection or every possible unit setting.',
        'When copying a recent meal abroad, confirm the product, serving size and unit rather than trusting a familiar brand name. Premium barcode scanning is optional and still needs comparison with the current package. Close the entry after checking that the food amount and nutrition basis use compatible quantities. The useful result is a readable travel record, without pretending a unit conversion removes uncertainty about an unfamiliar recipe.',
      ] },
    ],
    feature: { href: '/free-calorie-and-macro-tracker', label: 'Try a clear travel meal record in Nexal', text: 'Use free manual tracking after checking the local label and portion units.' },
    sources: [{ href: 'https://www.nist.gov/pml/owm/metric-si/unit-conversion/approximate-conversions-us-customary-measures-metric', label: 'NIST: approximate ounce and US fluid-ounce metric conversions' }],
    faqs: [
      { question: 'Are ounces and fluid ounces interchangeable?', answer: 'No. Food weight ounces describe mass, while fluid ounces describe volume. Use a matching conversion and the metric equivalent on the label where available.' },
      { question: 'Should I use 28 or 28.35 grams for a labelled ounce serving?', answer: 'For scaling a label, use its stated metric serving equivalent when provided. Approximately 28.35 grams converts an ordinary weight ounce when you need a separate conversion.' },
    ],
  },
];
