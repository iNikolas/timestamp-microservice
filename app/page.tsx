import Link from "next/link";

export default function Home() {
  return (
    <>
      <h1>Timestamp Microservice</h1>
      <hr />
      <section className="container">
        <h2>Example Usage:</h2>
        <ul>
          <li>
            <Link href="api/2015-12-25">[project url]/api/2015-12-25</Link>
          </li>
          <li>
            <Link href="api/1451001600000">
              [project url]/api/1451001600000
            </Link>
          </li>
        </ul>

        <h2>Example Output:</h2>
        <p>
          <code>{`{"unix":1451001600000, "utc":"Fri, 25 Dec 2015 00:00:00 GMT"}`}</code>
        </p>
      </section>
      <footer className="footer">
        <p>
          By{" "}
          <Link href="https://www.linkedin.com/in/nikolaj-lebed-570438207/">
            Mikola Lebid
          </Link>
        </p>
      </footer>
    </>
  );
}
