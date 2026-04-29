// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://docs.pezeshkpour.eu',
	integrations: [
		starlight({
			title: 'Pezeshkpour Docs',
			description: 'Dokumentation für die Projekte von Amir Houshang Pezeshkpour.',
			defaultLocale: 'root',
			locales: {
				root: { label: 'Deutsch', lang: 'de' },
				en: { label: 'English', lang: 'en' },
			},
			social: [
				{
					icon: 'github',
					label: 'GitHub',
					href: 'https://github.com/Houshang78',
				},
			],
			// Sidebar entries are deeply nested per project. The label keys
			// are translatable via `translations` below; add a new locale by
			// duplicating the EN block. Keep the slugs identical across
			// locales — Starlight expects a parallel file tree.
			sidebar: [
				{
					label: 'Einstieg',
					translations: { en: 'Getting started' },
					items: [
						{
							label: 'Übersicht',
							translations: { en: 'Overview' },
							slug: 'intro',
						},
					],
				},
				{
					label: 'MailGate',
					items: [
						{
							label: 'Übersicht',
							translations: { en: 'Overview' },
							slug: 'mailgate/overview',
						},
						{
							label: 'Architektur',
							translations: { en: 'Architecture' },
							slug: 'mailgate/architecture',
						},
						{
							label: 'Installation',
							translations: { en: 'Installation' },
							slug: 'mailgate/installation',
						},
						{
							label: 'Bedienung',
							translations: { en: 'Usage' },
							slug: 'mailgate/usage',
						},
					],
				},
				{
					label: 'PoolX',
					items: [
						{
							label: 'Übersicht',
							translations: { en: 'Overview' },
							slug: 'poolx/overview',
						},
						{
							label: 'Architektur',
							translations: { en: 'Architecture' },
							slug: 'poolx/architecture',
						},
						{
							label: 'Installation',
							translations: { en: 'Installation' },
							slug: 'poolx/installation',
						},
						{
							label: 'Bedienung',
							translations: { en: 'Usage' },
							slug: 'poolx/usage',
						},
					],
				},
			],
		}),
	],
});
