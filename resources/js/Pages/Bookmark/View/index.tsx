
import { Inertia } from '@inertiajs/inertia'
import React from 'react'
import Layout from '../../../components/common/Layout'

interface Props {
  bookmark: any
}

const BookmarkViewPage: React.FC<Props> = ({ bookmark }: Props) => {
  const handleSave = (event: React.MouseEvent) => {
    event.preventDefault()
    Inertia.post('/bookmarks/make-active', { id: bookmark.id })
  }
  return (
    <Layout>
      <div className="row">
        <div className="col-12">
          {bookmark.title && (
            <div className="card">
              <div className="card-header">{bookmark.title}</div>
              <div className="card-body">
                <p>Url: {bookmark.url}</p>
                <p>{bookmark.description}</p>
                {bookmark.image_url && <div className="mb-3">
                  <img
                    src={bookmark.image_url}
                    alt={bookmark.title}
                    width="100%"
                  />
                </div>
                }
                <button className="btn btn-primary" onClick={handleSave}>
                  Save
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  )
}

export default BookmarkViewPage
