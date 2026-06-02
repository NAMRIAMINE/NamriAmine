import { statSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const __dir = dirname(fileURLToPath(import.meta.url))
const publicDir = join(__dir, '..', 'public')

const IMAGES = [
  { src: 'indus-inspection.png', maxWidth: 1400, quality: 82 },
  { src: 'creaboost.png', maxWidth: 1400, quality: 82 },
  { src: 'dr-turbine.png', maxWidth: 1400, quality: 82 },
  { src: 'filahi.png', maxWidth: 1400, quality: 82 },
  { src: 'pdp.png', maxWidth: 320, quality: 85 },
]

for (const { src, maxWidth, quality } of IMAGES) {
  const inPath = join(publicDir, src)
  const outPath = join(publicDir, src.replace('.png', '.webp'))

  const beforeBytes = statSync(inPath).size

  const meta = await sharp(inPath).metadata()
  const needsResize = meta.width > maxWidth

  await sharp(inPath)
    [needsResize ? 'resize' : 'toFormat'](
      ...(needsResize ? [{ width: maxWidth, withoutEnlargement: true }] : ['webp']),
    )
    [needsResize ? 'webp' : 'toFile'](...(needsResize ? [{ quality }] : [outPath]))
    .toFile(outPath)
    .catch(async () => {
      // fallback: explicit chain
      let pipeline = sharp(inPath)
      if (needsResize) pipeline = pipeline.resize({ width: maxWidth, withoutEnlargement: true })
      await pipeline.webp({ quality }).toFile(outPath)
    })

  const afterBytes = statSync(outPath).size
  const pct = (((beforeBytes - afterBytes) / beforeBytes) * 100).toFixed(1)
  console.log(
    `${src.padEnd(28)} ${Math.round(beforeBytes / 1024)
      .toString()
      .padStart(6)} KB  →  ${Math.round(afterBytes / 1024)
      .toString()
      .padStart(5)} KB  (${pct}% reduction)`,
  )
}

console.log('\nDone.')
