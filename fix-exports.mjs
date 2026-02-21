import fs from 'fs';
import path from 'path';

function walk(dir, callback) {
    if (!fs.existsSync(dir)) return;
    fs.readdirSync(dir).forEach(f => {
        let dirPath = path.join(dir, f);
        let isDirectory = fs.statSync(dirPath).isDirectory();
        isDirectory ? walk(dirPath, callback) : callback(path.join(dir, f));
    });
}

walk('src/app', (filepath) => {
    if (filepath.endsWith('page.tsx')) {
        let content = fs.readFileSync(filepath, 'utf8');
        let original = content;

        // Replace "export function X" with "export default function X"
        content = content.replace(/^export\s+function\s+([A-Z][a-zA-Z0-9_]*)/gm, 'export default function $1');
        content = content.replace(/^export\s+const\s+([A-Z][a-zA-Z0-9_]*)\s*=\s*/gm, 'export default function $1');

        // Some might already be default, we don't want "export default default"
        content = content.replace(/export\s+default\s+default/g, 'export default');

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Fixed export in', filepath);
        }
    }
});
