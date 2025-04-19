'use client';

import Link from 'next/link';
import { FaChevronRight } from 'react-icons/fa';
import { useEffect, useState } from 'react';

interface BreadcrumbProps {
  item?: { name: string };
}

const breadcrumbLabels: Record<string, string> = {
  home: 'Home',
  menu: 'Menu',
  categories: 'Categories',
  pizza: 'Pizza',
  burger: 'Burger',
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ item }) => {
  const [pathname, setPathname] = useState<string>('');

  useEffect(() => {
    if (typeof window !== "undefined") {
      setPathname(window.location.pathname);
    }
  }, []);

  const pathnames = pathname.split('/').filter(Boolean);

  return (
    <nav className="text-sm text-gray-600 dark:text-gray-300 my-4">
      <ol className="flex items-center flex-wrap gap-x-1">
        <li>
          <Link href="/" className="hover:text-brandColor font-medium">
            Home
          </Link>
        </li>

        {pathnames.map((path, index) => {
          const href = '/' + pathnames.slice(0, index + 1).join('/');
          const isLast = index === pathnames.length - 1;
          const label =
            breadcrumbLabels[path.toLowerCase()] ||
            (path === 'menu' && item?.name ? item.name : decodeURIComponent(path));

          return (
            <li key={href} className="flex items-center gap-x-2">
              <FaChevronRight className="text-gray-400 text-xl"/>
              {isLast ? (
                <span className="text-brandColor font-semibold">{label}</span>
              ) : (
                <Link href={href} className="hover:text-brandColor capitalize">
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
