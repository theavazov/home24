import { useRouter } from "next/router";
import en from "./en";
import ru from "./ru";
import uz from "./uz";

export function useTranslations() {
  const { locale } = useRouter();

  const t =
    locale === "ru" ? ru : locale === "en" ? en : locale === "uz" ? uz : null;

  return { t };
}
