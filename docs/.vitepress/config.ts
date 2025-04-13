import { defineConfig } from 'vitepress'
import { generateSidebar } from 'vitepress-sidebar';

export default defineConfig({
  title: 'Yahoo Finance 2 Docs',
  description: 'Documentation for yahoo-finance2',
  ignoreDeadLinks: true,
  base: '/node-yahoo-finance2/',
  themeConfig: {
    sidebar: generateSidebar({
      collapsed: true,
      capitalizeFirst: true,
      frontmatterTitleFieldName: 'title',
      includeFolderIndexFile: true,
      useTitleFromFrontmatter: true,
    }),
  }
})
