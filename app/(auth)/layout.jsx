import Link from 'next/link';
import React from 'react';

export default function AuthLayout({ children }) {
  return (
    <>
      <nav>
        <h1>Dojo Helpdesk</h1>
        <Link href={'/login'}>Login</Link>
        <Link href={'/signup'}>Signup</Link>
      </nav>
      {children}
    </>
  );
}
