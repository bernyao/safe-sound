# iOS App Store Release Checklist — First Aid App

> This checklist is written to match common App Store review expectations for **health/medical-adjacent** apps.
> Each section includes **acceptance criteria** you can verify before uploading.

## 1) App Store policy + medical safety

### 1.1 Medical disclaimer (required)

**Acceptance criteria**

- [ ] A medical disclaimer is shown on **first launch** before the user accesses content.
- [ ] The disclaimer is accessible later in the app (Settings → About / Disclaimer).
- [ ] The disclaimer includes:
  - [ ] “Not medical advice” wording.
  - [ ] “Call emergency services in urgent cases” wording.
  - [ ] “If trained” language for CPR / AED / advanced steps.
  - [ ] A short statement encouraging professional training.
- [ ] The user must **tap to accept** (no auto-accept).
- [ ] Acceptance is stored persistently and survives app restarts.

### 1.2 Remove medical-claim language

**Acceptance criteria**

- [ ] App copy avoids: “diagnose”, “treat”, “cure”, “prevent”, “guaranteed”.
- [ ] Guides use informational language (“may”, “can”, “common signs”) instead of definitive diagnosis.

### 1.3 Emergency call safety

**Acceptance criteria**

- [ ] Emergency call action requires user tap.
- [ ] A **confirmation dialog** appears before dialing.
- [ ] No automatic calling based on symptoms.

## 2) Privacy + data handling

### 2.1 Privacy Policy URL

**Acceptance criteria**

- [ ] A **Privacy Policy URL** exists.
- [ ] It’s linked in-app (Settings → Privacy Policy).
- [ ] The URL is also configured in App Store Connect.

### 2.2 Data collection disclosure

**Acceptance criteria**

- [ ] You can answer App Store “App Privacy” questions accurately.
- [ ] If you collect **nothing**, confirm:
  - [ ] No analytics SDK.
  - [ ] No crash reporting SDK.
  - [ ] No account system.
  - [ ] No location usage.
- [ ] If you collect something, document:
  - [ ] What data, why, retention, and whether it’s linked to identity.

### 2.3 Sensitive data

**Acceptance criteria**

- [ ] App does not log sensitive values.
- [ ] If you add personal medical notes later, use Keychain/encrypted storage.

## 3) Permissions audit

**Acceptance criteria**

- [ ] The app only requests permissions it truly needs.
- [ ] For any permission used, Info.plist usage strings are present and specific.
- [ ] With permissions denied, the app still works (no crashes, no dead ends).

## 4) Reliability + crash testing

**Acceptance criteria**

- [ ] “Tap everything” pass completed in a **Release build**.
- [ ] Fresh install tested.
- [ ] Upgrade install tested (if applicable).
- [ ] Offline mode tested (Airplane mode → open app → guides readable).
- [ ] Background/foreground interruptions don’t break state.

## 5) Performance

**Acceptance criteria**

- [ ] Cold start shows a branded splash/loading UI (no blank white screen).
- [ ] Scrolling long guides is smooth.
- [ ] Images are optimized (no huge raw images in repo).

## 6) Accessibility

**Acceptance criteria**

- [ ] Key controls have accessibility labels and roles.
- [ ] Tap targets are at least 44×44pt.
- [ ] Text respects Dynamic Type where possible.
- [ ] Contrast is readable, especially Warning/Emergency content.

## 7) UI / content quality

**Acceptance criteria**

- [ ] No placeholder text.
- [ ] No obvious typos.
- [ ] Consistent terms (CPR, AED, choking).
- [ ] Steps are scannable: short bullets, clear warnings, “Call emergency services” is prominent.

## 8) Build + signing + Store metadata readiness

**Acceptance criteria**

- [ ] Bundle Identifier is correct.
- [ ] Version + build numbers are set correctly.
- [ ] App icons are complete.
- [ ] Launch screen looks good on multiple devices.
- [ ] No debug menus / staging endpoints.
- [ ] App Store listing prepared: screenshots, description, keywords, support email.

## 9) Pre-upload verification (recommended)

**Acceptance criteria**

- [ ] `SMOKE_TESTS.md` exists and is followed.
- [ ] Basic automated tests pass (Jest).
- [ ] No high/critical vulnerabilities: `npm audit` clean (or documented exceptions).
