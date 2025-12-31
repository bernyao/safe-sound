const en = require("../src/locales/en.json");
const es = require("../src/locales/es.json");
const fr = require("../src/locales/fr.json");
const pt = require("../src/locales/pt.json");

const firstAidData = require("../src/data/firstAidData.json");

describe("category translations", () => {
  test("every category has ES/FR/PT translations", () => {
    const guides = Array.isArray(firstAidData.guides)
      ? firstAidData.guides
      : [];
    const categories = Array.from(
      new Set(
        guides
          .map((g) => g?.category)
          .filter((c) => typeof c === "string" && c.trim().length > 0)
      )
    ).sort();

    expect(categories.length).toBeGreaterThan(0);

    const locales = { en, es, fr, pt };

    // en is the source of truth for keys.
    const enCategories = locales.en?.categories || {};
    for (const category of categories) {
      expect(enCategories[category]).toBeTruthy();
    }

    const requiredLangs = ["es", "fr", "pt"];
    const missing = {};

    for (const lang of requiredLangs) {
      const dict = locales[lang]?.categories || {};
      const missingForLang = categories.filter((category) => !dict[category]);
      if (missingForLang.length) missing[lang] = missingForLang;
    }

    expect(missing).toEqual({});
  });

  test("SearchBar helper key exists in all locales", () => {
    const locales = { en, es, fr, pt };
    const missing = {};

    for (const [lang, dict] of Object.entries(locales)) {
      const value = dict?.home?.in_category;
      if (!value) missing[lang] = true;
    }

    expect(missing).toEqual({});
  });
});
