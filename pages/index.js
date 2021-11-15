import Head from "next/head";
import Link from 'next/link'

export default function index() {
  return (
    <div>
      <h1>Home Page</h1>
      <Link href='/blog'>
        <a>Blog</a>
      </Link>
    </div>
  );
}
