<script lang="ts">
	import { FluentBundle, FluentResource } from '@fluent/bundle';
	import { FluentProvider, Localized } from '@nubolab-ffwd/svelte-fluent';

	export let data;

  const { translations } = data;

	const bundle = new FluentBundle('en');
	bundle.addResource(new FluentResource(translations));
</script>

<FluentProvider bundles={[bundle]}>
	<Localized id="hello" />
	<slot />
</FluentProvider>
