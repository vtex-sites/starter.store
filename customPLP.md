# Instructions to mock CMS

My hCMS in not sync properly, then I can't test the CMS features.
For the sake of testing, we have to mock this code in the folder `.faststore/src/pages/[...slug].tsx`:

row 115

```js
// just for testing purposes while having cms issues, replace current hero for HeroCustom
const nativeHero = cmsPage?.sections?.find(
  (section) => section.name === "Hero"
);
nativeHero.name = "HeroCustom";
```

if you want to add another section as `HeroCustom` as last section instead of replace the native Hero, add this code instead:

```js
// just for testing purposes while having cms issues, clone native hero as HeroCustom, and add as last section
const nativeHero = cmsPage?.sections?.find(
  (section) => section.name === "Hero"
);
const cloneNativeHero = nativeHero.name
  ? { ...nativeHero, name: "HeroCustom" }
  : null;
cmsPage.sections.push(cloneNativeHero);
```
