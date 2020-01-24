import React from 'react'
import PropTypes from 'prop-types'
import { Button } from './index.style'

const ThisButton = ({children}) => (
	<Button type="button">
		{children}
	</Button>
)

ThisButton.propTypes = {
  children: PropTypes.node,
}

export { ThisButton as Button }
