import React from 'react'
import PropTypes from 'prop-types'
import { Title } from './index.style'

const ThisTitle = ({children}) => (
	<Title>
		{children}
	</Title>
)

ThisTitle.propTypes = {
  children: PropTypes.node,
}

export { ThisTitle as Title }
