import fs from 'fs'
import path from 'path'

const DOCS_ROOT = path.resolve(__dirname, '../')

function toTitleCase(str: string): string {
  return str
    .replace(/-/g, ' ')
    .replace(/\b\w/g, char => char.toUpperCase())
}

function walk(dir: string, baseRoute = ''): any[] {
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  const sidebar: any[] = []

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name)

    // Skip node_modules and other unwanted folders
    if (entry.isDirectory() && entry.name === 'node_modules') {
      continue
    }

    const routePath = path.posix.join(baseRoute, entry.name.replace(/\.md$/, ''))

    if (entry.isDirectory()) {
      const children = walk(fullPath, routePath)
      if (children.length > 0) {
        sidebar.push({
          text: toTitleCase(entry.name),
          items: children
        })
      }
    }

    if (entry.isFile() && entry.name.endsWith('.md') && entry.name !== 'index.md') {
      sidebar.push({
        text: toTitleCase(entry.name.replace(/\.md$/, '')),
        link: routePath.startsWith('/') ? routePath : '/' + routePath
      })
    }
  }

  return sidebar
}

export function getSidebar(): any[] {
  return walk(DOCS_ROOT)
}
