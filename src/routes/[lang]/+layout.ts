import translationsEn from '$lib/translations/en.ftl?raw';
import translationsRu from '$lib/translations/ru.ftl?raw';

export function load({ params }) {
	const { lang } = params;
	let translations;

	switch (lang) {
		case 'en':
			translations = translationsEn;
			break;
		case 'ru':
			translations = translationsRu;
			break;
		default:
			// ToDo: redirect to en
			translations = translationsEn;
	}

	return {
		translations
	};
}
