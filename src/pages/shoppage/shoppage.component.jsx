import React, { useEffect, lazy, Suspense } from 'react'

import { Route } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchCollectionStartAsync } from '../../redux/shop/shop.action'
import Spinner from '../../components/spinner/spinner.component'

const CollectionOverviewContainer = lazy(() =>
  import('../../components/collection-overview/collection-overview.container')
)

const CollectionPageContainer = lazy(() =>
  import('../collection/collection.container')
)

const ShopPage = ({ fetchCollectionStartAsync, match }) => {
  useEffect(() => {
    fetchCollectionStartAsync()
  })

  return (
    <div className="shop-page">
      <Suspense fallback={<Spinner />}>
        <Route
          exact
          path={`${match.path}`}
          component={CollectionOverviewContainer}
        />
        <Route
          path={`${match.path}/:collectionId`}
          component={CollectionPageContainer}
        />
      </Suspense>
    </div>
  )
}

const mapTodispatchToProps = dispatch => ({
  fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
})

export default connect(null, mapTodispatchToProps)(ShopPage)
