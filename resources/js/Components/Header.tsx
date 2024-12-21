import { Link } from '@inertiajs/react';
import React from 'react';
import ApplicationLogo from './ApplicationLogo';

type AuthProps = {
  auth: {
    user?: {
      name: string;
      email: string;
    };
  };
};

export default function Header({ auth }: AuthProps) {
  return (
    <header className="py-4 fixed top-0 inset-x-0 bg-white/90 backdrop-blur-lg dark:bg-black/80 z-50">
      <div className="container flex justify-between items-center px-6">
        <span className="font-bold text-lg">
          <ApplicationLogo className='w-14 fill-current text-[#f05340]'/>
        </span>
        <nav className="-mx-3 flex flex-1 justify-end">
          {auth?.user ? (
            <Link
              href={route('dashboard')}
              className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
              aria-label="Go to Dashboard"
            >
              Dashboard
            </Link>
          ) : (
            <>
              <Link
                href={route('login')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                aria-label="Log in"
              >
                Log in
              </Link>
              <Link
                href={route('register')}
                className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                aria-label="Register"
              >
                Register
              </Link>
            </>
          )}
        </nav>
      </div>
    </header>
  );
}
