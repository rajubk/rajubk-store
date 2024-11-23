"use client";
import Button from "@/app/ui/button";
import Popover from "@/app/ui/popover";
import { getAllLanguages, getSelectedLang } from "@/utils/languages";
import { useRouter } from "@/i18n/routing";
import { Locale } from "@/i18n/types";
import { logger } from "@/utils/pino";
import { useLocale } from "next-intl";

const LanguageSelector = () => {
  const router = useRouter();
  const locale = useLocale() as Locale;
  console.log("locale", locale);

  const handleLangChagne = (lang: Locale) => {
    try {
      router.replace("/", { locale: lang });
    } catch (error) {
      logger.error(error, "Error while switching language");
    }
  };

  return (
    <Popover content={getSelectedLang(locale).dispaly}>
      {getAllLanguages().map((lang) => (
        <Button
          key={lang.name}
          variant="naked"
          onClick={() => handleLangChagne(lang.value)}
        >
          {lang.dispaly}
        </Button>
      ))}
    </Popover>
  );
};

export default LanguageSelector;
