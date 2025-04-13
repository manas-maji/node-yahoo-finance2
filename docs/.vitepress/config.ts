import { defineConfig } from 'vitepress'
import { getSidebar } from './sidebar'

export default defineConfig({
  title: 'Yahoo Finance 2 Docs',
  description: 'Documentation for yahoo-finance2',
  ignoreDeadLinks: true,
  base: '/node-yahoo-finance2/',
  themeConfig: {
    sidebar: getSidebar()
  }
})
