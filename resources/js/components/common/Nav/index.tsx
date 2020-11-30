import { InertiaLink, usePage } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'

interface PageProps {
  appName: string;
  auth: any;
}

const Menu:React.FC = () => {
  const { auth, appName } = usePage().props as PageProps
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-white shadow-sm">
      <div className="container">
        <InertiaLink className="navbar-brand" href={route('home')}>
          {appName}
        </InertiaLink>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="nav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route('bookmarks.index')}
              >
                Bookmarks
              </InertiaLink>
            </li>
            <li className="nav-item">
              <InertiaLink
                className="nav-link"
                href={route('bookmarks.add')}
              >
                Bookmark add
              </InertiaLink>
            </li>
          </ul>

          <ul className="navbar-nav ml-auto">
            <li className="nav-item dropdown">
              <a
                id="navbarDropdown"
                className="nav-link dropdown-toggle"
                href="#"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
              >
                {auth.user.email}
              </a>

              <div
                className="dropdown-menu dropdown-menu-right"
                aria-labelledby="navbarDropdown"
              >
                <InertiaLink
                  method="post"
                  href={route('logout')}
                  className="dropdown-item"
                  as="button"
                >
                  Logout
                </InertiaLink>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Menu
