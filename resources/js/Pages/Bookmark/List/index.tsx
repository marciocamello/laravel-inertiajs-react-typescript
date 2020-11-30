import React from 'react'
import Layout from '../../../components/common/Layout'

interface Props {
  bookmarks: Array<any>
}

const BookmarkListPage:React.FC<Props> = ({ bookmarks }: Props) => {
  return <Layout>
    <div className="r">
      <div className="col-8">
        <ul className="list-group">
          {bookmarks?.map((bookmark, index) => {
            return <li className="list-group-item" key={index}>
              {bookmark.title}
            </li>
          })}
        </ul>
      </div>
    </div>
  </Layout>
}

export default BookmarkListPage
