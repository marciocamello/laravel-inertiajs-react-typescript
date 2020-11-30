import { InertiaLink } from '@inertiajs/inertia-react'
import React from 'react'
import route from 'ziggy'
import Layout from '../../../components/common/Layout'

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage: React.FC<Props> = ({ bookmarks }: Props) => {
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          <ul className="list-group">
            {bookmarks.length > 0 &&
              bookmarks.map((bookmark, index) => {
                return (
                  <li className="list-group-item" key={index}>
                    <div>
                      <span>
                        <InertiaLink
                          href={route('bookmarks.view', {
                            bookmark: bookmark
                          })}
                        >
                          {bookmark.title}
                        </InertiaLink>
                      </span>
                      <br />
                      <span>{bookmark.description}</span>
                    </div>
                  </li>
                )
              })}
          </ul>
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkListPage
