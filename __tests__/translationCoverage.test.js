const firstAidData = require("../src/data/firstAidData.json");
import { guideTranslations } from "../src/locales/guideTranslations";

describe("guide translation coverage", () => {
  test("every guide id has ES/FR/PT translations", () => {
    const guideIds = (firstAidData.guides || [])
      .map((g) => g.id)
      .filter(Boolean);

    expect(guideIds.length).toBeGreaterThan(0);

    const requiredLangs = ["es", "fr", "pt"];
    const missingByLang = {};

    for (const lang of requiredLangs) {
      const translationsForLang = guideTranslations?.[lang] || {};
      const translatedIds = new Set(Object.keys(translationsForLang));

      const missingForLang = guideIds
        .filter((id) => !translatedIds.has(id))
        .sort();
      // If you're seeing ALL ids listed as missing, it usually means the
      // translation file isn't being imported correctly or the lang block is missing.
      if (missingForLang.length > 0) {
        missingByLang[lang] = missingForLang;
      }
    }

    // Helpful failure message (keeps snapshot-like output stable)
    expect(missingByLang).toEqual({});
  });
});
