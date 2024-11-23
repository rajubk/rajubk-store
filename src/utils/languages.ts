import { Locale } from "@/i18n/types";
import { find, values } from "lodash";

export const languages: Record<string, Language> = {
  english: {
    name: "english",
    dispaly: "English",
    value: "en",
  },
  kannada: {
    name: "kannada",
    dispaly: "ಕನ್ನಡ",
    value: "kn",
  },
};

interface Language {
  name: string;
  dispaly: string;
  value: Locale;
}
export const getAllLanguages = () => values(languages);

export const getSelectedLang = (locale: Locale) =>
  find(values(languages), { value: locale }) ?? languages["english"];
