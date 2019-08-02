import Link from "next/link";

type Props = {
  href: string;
  queryId?: string;
};
//href queryId
const BasicLink: React.FunctionComponent<Props> = ({
  href,
  queryId,
  children
}) => (
  <Link
    href={{
      pathname: `${href}`,
      query: queryId && { id: queryId }
    }}
  >
    <a>{children}</a>
  </Link>
);

export { BasicLink as Link };
