import { useRouter } from "next/router";
import Link from "next/link";
import { useIntl } from "react-intl";

export default function Home() {
  const { locales, locale } = useRouter();
  const { formatMessage: f } = useIntl();

  return (
    <div>
      <nav>
        <ul>
          <li>
            {locale === "en" ? (
              <Link href="/" locale={locales[1]}>
                <a>fr</a>
              </Link>
            ) : (
              <Link href="/" locale={locales[0]}>
                <a>en</a>
              </Link>
            )}
          </li>
        </ul>
      </nav>

      <h1>{f({ id: "home.hello" })}</h1>
    </div>
  );
}
