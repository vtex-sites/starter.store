erase: erase-cms
    rm -rf node_modules yarn.lock .next .faststore ./src/components ./public

erase-cms:
    # sh (used by just) does not expand **; use find instead of bash globstar
    find ./cms -type f -name '*.jsonc' -delete
    find ./cms -type f -name '*.example' -delete
    find ./cms -type f -name '*.json' -delete

replace: fix-type fix-props

clean: erase
    yarn install
    just replace
    just ts
    just gen-schema

ts:
    node --input-type=module -e "\
    import config from '$PWD/tsconfig.json' with { type: 'json' };\
    import fs from 'node:fs';\
    config.compilerOptions.paths = {\
      'src/*': ['./node_modules/@faststore/core/src/*'],\
      '@generated/*': ['./node_modules/@faststore/core/@generated/*'],\
      '@faststore/core': ['./node_modules/@faststore/core/index.ts'],\
      '@faststore/core/api': ['./node_modules/@faststore/core/api/index.ts'],\
      '@faststore/core/experimental': ['./node_modules/@faststore/core/src/experimental/index.ts'],\
      '@faststore/core/experimental/server': ['./node_modules/@faststore/core/src/experimental/server/index.ts']\
    };\
    fs.writeFileSync('$PWD/tsconfig.json', JSON.stringify(config, null, 2), 'utf-8');"

agents:
    "Use skill /Users/otavio.meirelles/Projects/fs_mcp/skills/faststore-storefront/SKILL.md" >> agents.md

fix-type:
  sed -i '' 's#useLocalizedVariables(variables)#useLocalizedVariables(variables);\n  localizedVariables.after = localizedVariables.after.toString();#g' ./node_modules/@faststore/core/src/sdk/product/useProductsQuery.ts

fix-props:
    sed -i '' 's#{searchId && buildExtraProductProps}#{searchId \&\& buildExtraProductProps || undefined}#g' ./node_modules/@faststore/core/src/components/ui/ProductGallery/ProductGalleryPage.tsx

gen-schema:
    vtex content generate-schema cms/faststore/components cms/faststore/pages -o cms/faststore/schema.json -b vtex.faststore4

upload-schema:
    vtex content upload-schema cms/faststore/schema.json