import React from 'react'

import Spinner from '../spinner/spinner.component'

//HOC patterns component

const WithSpinner = WrappedComponent => ({ isloading, ...otherprops }) =>
  isloading ? <Spinner /> : <WrappedComponent {...otherprops} />

export default WithSpinner
