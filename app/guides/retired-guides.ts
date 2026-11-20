/**
 * Guides retired on 20 Nov 2026 after Search Console reported them as
 * "Discovered – currently not indexed" (never crawled). Each one 308-redirects
 * to the closest surviving guide on the same topic, so links and bookmarks
 * still land somewhere useful. Their content stays in git history; to restore
 * one, revert its removal and delete its entry here.
 *
 * Map: retired slug -> surviving guide slug.
 */
export const retiredGuides: Record<string, string> = {
  // App choice: folded into the buyer's checklist and the free-vs-paid decision guide.
  'assess-fitness-app-reviews-beyond-stars': 'test-fitness-app-before-subscribing',
  'fitness-app-accessibility-selection-checklist': 'test-fitness-app-before-subscribing',
  'fitness-app-notification-overload-settings': 'test-fitness-app-before-subscribing',
  'fitness-app-monthly-annual-subscription-worksheet': 'free-vs-paid-fitness-app-decision',
  'evaluate-ai-fitness-advice-safely': 'best-ai-workout-and-meal-planner-apps-android',
  'recognise-misleading-ai-fitness-app-marketing': 'best-ai-workout-and-meal-planner-apps-android',
  'fitness-app-without-wearable': 'best-ai-workout-and-meal-planner-apps-android',
  'gym-nutrition-app-students': 'best-ai-workout-and-meal-planner-apps-android',
  'meal-planner-app-vs-recipe-app-task': 'best-ai-workout-and-meal-planner-apps-android',
  'calorie-tracker-vs-habit-tracker-choice': 'how-to-track-calories-and-macros',
  'personal-trainer-vs-fitness-app-support': 'workout-tracker-vs-ai-workout-planner',
  'strength-training-app-log-first-selection': 'workout-tracker-vs-ai-workout-planner',
  'bodyweight-training-app-meaningful-records': 'workout-tracker-vs-ai-workout-planner',
  'fitness-app-running-gym-manual-records': 'workout-tracker-vs-ai-workout-planner',
  'fitness-app-shift-workers': 'workout-and-meal-plan-for-shift-workers',

  // Workout logging details: folded into broader training guides.
  'compare-cable-machines-in-workout-history': 'exercise-substitutions-comparable-history',
  'log-plate-loaded-equipment-weight': 'exercise-substitutions-comparable-history',
  'record-bodyweight-exercise-variations': 'exercise-substitutions-comparable-history',
  'organise-searchable-exercise-names': 'exercise-substitutions-comparable-history',
  'log-alternating-reps-unfinished-side-sequences': 'push-pull-legs-routine-tracker-android',
  'log-partially-completed-sets': 'push-pull-legs-routine-tracker-android',
  'log-warm-up-sets-separately': 'push-pull-legs-routine-tracker-android',
  'track-supersets-clearly': 'push-pull-legs-routine-tracker-android',
  'record-assisted-pull-up-progress': 'push-pull-legs-routine-tracker-android',
  'workout-log-sets-reps-weight-units': 'push-pull-legs-routine-tracker-android',
  'log-circuit-rounds-with-different-stations': 'home-workout-planner-app',
  'home-dumbbell-workout-log': 'home-workout-planner-app',
  'organise-resistance-band-sessions': 'home-workout-planner-app',
  'plan-shorter-gym-sessions': 'four-day-workout-routine-organisation',

  // Food logging details: folded into the core tracking and barcode guides.
  'raw-versus-cooked-food-weights': 'how-to-track-calories-and-macros',
  'two-minute-macro-tracker-logging-workflow': 'how-to-track-calories-and-macros',
  'log-drinks-milk-sugar-cup-sizes': 'how-to-track-calories-and-macros',
  'logging-food-by-piece-varying-sizes': 'how-to-track-calories-and-macros',
  'shared-platter-personal-portion-notes': 'how-to-track-calories-and-macros',
  'food-diary-midnight-overnight-meals': 'workout-and-meal-plan-for-shift-workers',
  'per-container-versus-per-serving-food-labels': 'barcode-scanner-calorie-tracker-android',
  'dry-versus-prepared-cereal-mix-labels': 'barcode-scanner-calorie-tracker-android',
  'food-product-recipe-packaging-changes-logging': 'barcode-scanner-calorie-tracker-android',
  'logging-packaged-meal-kits-label-totals': 'barcode-scanner-calorie-tracker-android',
  'packed-lunch-food-diary': 'track-homemade-meals-and-meal-prep-macros',
  'reviewing-ai-photo-macro-estimates': 'ai-meal-planner-with-macros',
  'meal-substitution-review': 'ai-meal-planner-with-macros',
};
