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
        let original = content;

        // Replace <Link ... to= with href=
        content = content.replace(/<Link([^>]*?)to=/g, '<Link$1href=');

        // Replace relative imports to components
        content = content.replace(/from\s+['"](?:\.\.\/|\.\/)+components\/(.*?)['"]/g, 'from \'@/components/$1\'');

        // Replace relative imports direct to ui simply catching them
        content = content.replace(/from\s+['"](?:\.\.\/|\.\/)+ui\/(.*?)['"]/g, 'from \'@/components/ui/$1\'');

        if (content !== original) {
            fs.writeFileSync(filepath, content, 'utf8');
            console.log('Fixed', filepath);
        }
    }
});
