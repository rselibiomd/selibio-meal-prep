# The Selibio Table

A practical four-week meal planner for two, adjustable to 1–12 people. No account or build step is required. Open `index.html` with `recipe-data.js`, `planner.js` and `planner.css` alongside it, or use GitHub Pages.

## What's included

- The original four-week weekday menu, breakfast and dinner methods, flexible weekends and packable office/hospital lunches.
- A consolidated shopping list derived from the structured recipes in `recipe-data.js`. People, optional sides, measured pantry deductions and explicitly assigned freezer stock update the quantities. Checkboxes use ingredient identities so changes don't move ticks onto another item.
- Sunday tasks and lunch handoffs derived from the same batch dependencies. A dinner feeding two lunches makes four main portions; Week 2 meatballs supply eight main portions across Sunday, Monday, Tuesday and Thursday. Wednesday salmon for Friday is promptly frozen and thawed in the fridge.
- Labelled freezer entries with quantity, raw/cooked state, frozen date, location notes and frozen/thawing status. Reserve an entry for one week, record partial/full consumption, or delete it. Consumption of assigned food remains credited for that cycle so the planner doesn't tell you to buy it again.
- A confirmed cycle reset that clears progress, pantry deductions and stock reservations while keeping freezer food and notes. Download/restore JSON backups for another browser or device.
- Large-text cooking mode, saved step progress, keyboard focus handling, print and copy lists, and a responsive phone layout.

## Quantity conventions

The structured ingredients are the authoritative quantities shown in recipes and shopping. Existing cooking methods remain practical guidance; use the displayed scaled amounts and cook in batches as needed. These are home adaptations, not claims of personally tested recipes or dietary prescriptions.

Default choices use firm tofu, chicken thighs, water instead of sake, honey instead of maple syrup, paste instead of whole lemongrass, and the menu's specified vegetable. Optional garnishes and flexible weekend meals are excluded. Select extra side dishes explicitly. The Greek dinner includes a simple yogurt/lemon topping; add the optional tzatziki side for its full cucumber/garlic/dill recipe.

Cups convert to 240 mL for liquids; ingredient-specific approximate cup weights consolidate oats, yogurt, berries, nuts, greens, frozen vegetables and black beans with weights used elsewhere. Black beans assume 340 g drained per 540 mL can. Chickpeas retain the recipe's can count. Garlic stays in cloves, juice stays in mL, and grains stay in dry cups. Round purchases to packages and check actual drained weights.

All ten weekday lunches/dinners use about one cup of cooked grains per person; fried rice uses 1.5 cups. The planner estimates 12 cooked cups per five dry cups (2.5 rice, 1.25 quinoa, 1.25 lentils). This is a conservative planning yield, not a promise: measure actual output and top up or freeze surplus. Existing freezer grains reduce only the amount still needed.

Prepared freezer main entries include the main protein and its sauce, **not** grain blend, lunch toppings or separately listed dinner vegetables. Raw marinated protein entries deduct protein weight only; marinade ingredients remain listed. Assignment reserves the whole entry; split larger packs into separate entries for different weeks. Surplus never creates negative purchases. Food quantities are unchanged by merely planning; record actual use yourself.

Pantry values are amounts available for the selected plan, not a live household inventory. They apply across weeks until edited; a new cycle clears them for a recount. Quantities and optional sides can change before shopping; collected ingredient ticks remain checked until cleared. There is no automatic scheduling or cross-device sync.

## Storage and migration

The existing `selibio-table-v1` browser storage key is retained. Old week selection and notes survive. Earlier shopping/prep tick data is preserved but the new derived lists use stable identities, so earlier position-based ticks are not reused. Download a backup before clearing browser data. A visible warning appears if saving fails.

## Verification

Run from the repository root:

```sh
node --test tests/planner.test.cjs
node --check planner.js
node --check recipe-data.js
```

Browser flow tests require Playwright and Chrome:

```sh
npm install --no-save playwright
node tests/browser.cjs
```

Use `CHROME_PATH` for another installed Chrome executable, or `BASE_URL` to test a served/deployed site. The tests use a new isolated browser context; they do not change an existing browser profile. Tests cover all four weeks, batch coverage, scaling, unit consolidation, pantry/freezer deductions, grain yield, optional sides, migration, cycle reset, backup validation, persistence, partial stock use, cooking steps and mobile overflow.

GitHub Actions runs the calculation tests on every push and pull request. GitHub Pages serves the static files from `main` as configured for this repository.
