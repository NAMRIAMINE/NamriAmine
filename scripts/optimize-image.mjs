import { mkdir } from 'node:fs/promises'
import path from 'node:path'
import process from 'node:process'
import sharp from 'sharp'

const [input, output, widthArg = '1600', qualityArg = '82'] = process.argv.slice(2)

if (!input || !output) {
  console.error('Usage: pnpm image:optimize <input> <output.webp> [max-width=1600] [quality=82]')
  process.exit(1)
}

const width = Number.parseInt(widthArg, 10)
const quality = Number.parseInt(qualityArg, 10)

if (!Number.isInteger(width) || width < 1) {
  throw new Error('max-width must be a positive integer')
}

if (!Number.isInteger(quality) || quality < 1 || quality > 100) {
  throw new Error('quality must be an integer from 1 to 100')
}

const inputPath = path.resolve(input)
const outputPath = path.resolve(output)

await mkdir(path.dirname(outputPath), { recursive: true })

const result = await sharp(inputPath)
  .rotate()
  .resize({ width, fit: 'inside', withoutEnlargement: true })
  .webp({ quality, smartSubsample: true })
  .toFile(outputPath)

console.log(`${path.relative(process.cwd(), outputPath)}: ${result.width}x${result.height}`)
