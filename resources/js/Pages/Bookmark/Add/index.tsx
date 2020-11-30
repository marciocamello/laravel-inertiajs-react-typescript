import { Inertia } from '@inertiajs/inertia'
import React, { useState } from 'react'
import Layout from '../../../components/common/Layout'

interface Props {
  errors: any;
}

const BookmarkAddPage: React.FC<Props> = ({ errors }: Props) => {
  const [state, setState] = useState({
    title: 'Some hardecoded title',
    link: ''
  })

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState({ ...state, [event.currentTarget.name]: event.currentTarget.value })
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    Inertia.post('/bookmarks/preview', state)
  }

  return <Layout>
    <div className="r">
      <div className="col-8">
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="link">Link</label>
            <input
              type="url"
              className={`${errors?.link ? 'form-control is-invalid' : 'form-control'}`}
              id="link"
              name="link"
              aria-describedby="link"
              onChange={handleChange}
            />
            <small id="link" className="form-text text-muted">Create a bookmark link</small>
            <div id="validate-link" className={`${errors ? 'invalid-feedback' : 'is-valid'}`}>
              {errors?.link}
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </Layout>
}

export default BookmarkAddPage
