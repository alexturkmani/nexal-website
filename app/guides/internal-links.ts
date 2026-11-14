import { guideTopic, type Guide } from './content';

/**
 * Contextual internal links for guides.
 *
 * Instead of editing 100+ articles by hand, each guide is scanned for phrases
 * that already appear in its own copy, and the first natural match for each
 * relevant commercial page becomes the anchor. Anchors therefore vary from
 * guide to guide and always read as part of the sentence.
 *
 * Rules: at most one link per target page, at most MAX_LINKS per guide, never
 * two links in the same paragraph, and targets are tried in the listed order
 * (most specific phrase first).
 */

export type Topic = ReturnType<typeof guideTopic>;
export type ContextualLink = { href: string; start: number; end: number; anchor: string };

const MAX_LINKS = 3;

type Target = { href: string; phrases: RegExp[] };

const freeMacroTracker: Target = { href: '/free-calorie-and-macro-tracker', phrases: [
  /\b(?:free )?manual meal(?:,? (?:calorie )?and macro)? (?:logging|tracking)\b/i,
  /\bmeal(?:,)? (?:calorie )?and macro (?:logging|tracking)\b/i,
  /\b(?:calorie and macro|macro|calorie) (?:tracker|tracking|logging)\b/i,
  /\btrack(?:ing)? (?:your |daily )?(?:calories|macros|protein)\b/i,
  /\bfood (?:log|diary|logging)\b/i,
  /\b(?:copy(?:ing)? )?recent meals?\b/i,
] };

const freeWorkoutTracker: Target = { href: '/free-workout-tracker-app', phrases: [
  /\b(?:free )?(?:manual )?workout (?:tracker|logging|log|history)\b/i,
  /\bcustom workouts\b/i,
  /\bworkout diary\b/i,
  /\bgym log\b/i,
  /\blog(?:ging)? (?:each |every |your )?(?:sets?|sessions?|workouts?)\b/i,
] };

const targets: Record<Topic, Target[]> = {
  'WORKOUT PLANNING': [
    { href: '/ai-workout-planner', phrases: [
      /\bAI workout (?:planner|planning|plans?|generator)\b/i,
      /\b(?:beginner|weekly|three-day|four-day|two-day|full-body) (?:gym |workout |training )?(?:split|routine|programme|program|plan|schedule|week)\b/i,
      /\bstructured (?:workout |training )?(?:plan|programme|program|routine|week)\b/i,
      /\b(?:workout|training) (?:plan|programme|program|split)s?\b/i,
      /\bAI planning\b/i,
    ] },
    freeWorkoutTracker,
  ],
  'NUTRITION TRACKING': [
    freeMacroTracker,
    { href: '/ai-meal-planner', phrases: [
      /\b(?:Premium |Nexal Premium offers )?AI meal (?:planner|plans?|planning)\b/i,
      /\bAI workout and meal plans\b/i,
      /\bmeal (?:plans?|planning|planner)\b/i,
      /\bmeal prep(?:ping)?\b/i,
      /\bAI planning\b/i,
    ] },
  ],
  'CHOOSING AN APP': [
    { href: '/workout-meal-planner-app', phrases: [
      /\ball-in-one (?:fitness )?(?:app|tracker|planner)\b/i,
      /\bAI workout and meal plans\b/i,
      /\bworkout and (?:meal|nutrition) (?:planner|plans|planning|tracking|logging|app)\b/i,
      /\b(?:one|a single) app\b/i,
      /\bseparate (?:apps|trackers|tools)\b/i,
      /\btraining and nutrition\b/i,
    ] },
    { href: '/compare/myfitnesspal-alternative', phrases: [
      /\bMyFitnessPal alternative\b/i,
      /\bMyFitnessPal\b/,
      /\b(?:calorie|food|nutrition) (?:tracking |counting |logging )?apps?\b/i,
      /\bcalorie (?:tracker|counter)s?\b/i,
      /\bfood database\b/i,
    ] },
    freeMacroTracker,
    freeWorkoutTracker,
  ],
};

// Plain arrays (no generators) so the module also runs under the ES5 transpile used by tests/content-quality.mjs.
const paragraphsOf = (guide: Guide) => guide.sections.flatMap(section => section.paragraphs.map((text, index) => ({ key: `${section.id}:${index}`, text })));

/** Contextual links for one guide, keyed by `${sectionId}:${paragraphIndex}`. */
export function contextualLinks(guide: Guide): Map<string, ContextualLink> {
  const links = new Map<string, ContextualLink>();
  const paragraphs = paragraphsOf(guide);
  // Commercial pages already promoted by the guide's own CTA still get a body
  // link, but the guide's feature page goes first so the strongest match wins.
  const ordered = [...targets[guideTopic(guide)]].sort((a, b) => Number(b.href === guide.feature.href) - Number(a.href === guide.feature.href));
  for (const target of ordered) {
    if (links.size >= MAX_LINKS) break;
    found: for (const phrase of target.phrases) {
      for (const { key, text } of paragraphs) {
        if (links.has(key)) continue;
        const match = phrase.exec(text);
        if (match) {
          links.set(key, { href: target.href, start: match.index, end: match.index + match[0].length, anchor: match[0] });
          break found;
        }
      }
    }
  }
  return links;
}

export const contextualTargets = Object.fromEntries(Object.entries(targets).map(([topic, list]) => [topic, list.map(target => target.href)])) as Record<Topic, string[]>;
