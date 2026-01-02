module.exports = {
	content: [
		'./src/**/*.{html,js,svelte,ts}',
		// Exclude problematic files
		'!./src/lib/components/shared/json-editor/json-editor.svelte',
		'!./src/routes/(dashboard)/config/show/+page.svelte'
	]
	// ...other config
};
