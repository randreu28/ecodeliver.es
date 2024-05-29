import english from "./en.json";
import spanish from "./es.json";

/**
 * Retrieves the internationalization object based on the provided locale.
 * Uses web standards for locale names.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Accept-Language#syntax
 * @param locale The locale identifier.
 * @returns The localization resources for the specified locale.
 */
export function getI18N(locale: string) {
  switch (locale) {
    case "en":
      return english;
    case "es":
      return spanish;
    default:
      return spanish;
  }
}
