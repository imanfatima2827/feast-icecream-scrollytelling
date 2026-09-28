import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const workspaceDir = process.cwd();
const icecreamDir = path.join(workspaceDir, 'icecream');
const assetsDir = path.join(workspaceDir, 'assets');
const publicDir = path.join(workspaceDir, 'public');
const publicImagesDir = path.join(publicDir, 'images');
const publicFeastDir = path.join(publicImagesDir, 'feast');
const publicVideosDir = path.join(publicDir, 'videos');

async function main() {
  console.log('Preparing directories...');
  fs.mkdirSync(publicFeastDir, { recursive: true });
  fs.mkdirSync(publicVideosDir, { recursive: true });

  // 1. Copy Assets
  const heroSource = path.join(assetsDir, 'image.png_20260927150343.jpg');
  const bgSource = path.join(assetsDir, 'image.png_20260927150744.jpg');
  const videoSource = path.join(assetsDir, 'Ice_cream_product_assembly_20260927154951.mp4');

  if (fs.existsSync(heroSource)) {
    console.log('Generating hero images...');
    await sharp(heroSource)
      .jpeg({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'feast-hero.jpg'));
    await sharp(heroSource)
      .webp({ quality: 90 })
      .toFile(path.join(publicImagesDir, 'feast-hero.webp'));
    await sharp(heroSource)
      .jpeg({ quality: 90 })
      .toFile(path.join(publicFeastDir, 'hero.jpg'));
    await sharp(heroSource)
      .webp({ quality: 90 })
      .toFile(path.join(publicFeastDir, 'hero.webp'));
  }

  if (fs.existsSync(bgSource)) {
    console.log('Generating background image...');
    await sharp(bgSource)
      .jpeg({ quality: 85 })
      .toFile(path.join(publicImagesDir, 'chocolate-bg.jpg'));
    await sharp(bgSource)
      .webp({ quality: 85 })
      .toFile(path.join(publicImagesDir, 'chocolate-bg.webp'));
  }

  if (fs.existsSync(videoSource)) {
    console.log('Copying assembly video...');
    fs.copyFileSync(videoSource, path.join(publicVideosDir, 'feast-assembly.mp4'));
  }

  // 2. Process frames from icecream/
  if (fs.existsSync(icecreamDir)) {
    const files = fs.readdirSync(icecreamDir).filter(f => f.endsWith('.jpg') || f.endsWith('.png') || f.endsWith('.webp'));
    // Sort files naturally
    files.sort((a, b) => a.localeCompare(b, undefined, { numeric: true, sensitivity: 'base' }));

    console.log(`Found ${files.length} frames in icecream directory. Processing to webp and jpg...`);

    for (let i = 0; i < files.length; i++) {
      const srcFile = path.join(icecreamDir, files[i]);
      const indexNum = i + 1;

      // Keep original name
      fs.copyFileSync(srcFile, path.join(publicFeastDir, files[i]));
      // Keep 1.jpg, 2.jpg...
      fs.copyFileSync(srcFile, path.join(publicFeastDir, `${indexNum}.jpg`));

      // Convert to 1.webp, 2.webp...
      await sharp(srcFile)
        .webp({ quality: 85, effort: 3 })
        .toFile(path.join(publicFeastDir, `${indexNum}.webp`));

      if (indexNum % 25 === 0 || indexNum === files.length) {
        console.log(`Processed ${indexNum} / ${files.length} frames...`);
      }
    }
  }

  console.log('All image assets successfully prepared in public/images/feast!');
}

main().catch(err => {
  console.error('Error preparing images:', err);
  process.exit(1);
});
