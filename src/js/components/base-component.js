import React from 'react'
import * as MDK from '../model/model-index'

// base component, which has model, layout, orientation and viewMode
class BaseComponent extends React.Component {
	getInitialState() {
		return {};
	}

	getModel() {
		return this.props.model;
	}
	getLayout() {
		return this.props.layout;
	}
	getOrientation() {
		return this.props.orientation;
	}
	isViewMode() {
		return this.props.viewMode ? true : false;
	}
}

export * from '../model/model-index'
export {
	React,
	BaseComponent
}
