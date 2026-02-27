import { execSync } from 'child_process'

console.log('[v0] Regenerating Prisma client without --no-engine...')
execSync('npx prisma generate', { stdio: 'inherit', cwd: '/vercel/share/v0-project' })
console.log('[v0] Prisma client regenerated successfully.')
