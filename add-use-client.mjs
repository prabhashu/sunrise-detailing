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

walk('src', (filepath) => {
    if (filepath.endsWith('.tsx') || filepath.endsWith('.ts')) {
        let content = fs.readFileSync(filepath, 'utf8');

        // Check if file uses client-side features and doesn't already have 'use client'
        if (!content.includes('"use client"') && !content.includes("'use client'") &&
            (content.includes('useState') ||
                content.includes('useEffect') ||
                content.includes('useRef') ||
                content.includes('framer-motion') ||
                content.includes('next/navigation'))) {

            content = '"use client";\n' + content;
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Added use client to', filepath);
        }
    }
});
