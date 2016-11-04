import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
let $ = jQuery;
import {
	Envs, 
	Layout, 
	NContainer} from './n-component'

class NForm extends NContainer {
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderLeadingDOMChildren()}
			{this.renderLeadingChildren()}
			{this.renderChildren()}
			{this.renderTailingChildren()}
			{this.renderTailingDOMChildren()}
		</div>);
	}
	getComponentClassName() {
		return 'n-form'
	}
}

Envs.COMPONENT_TYPES.FORM = {type: 'n-form', label: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.FORM.type, function (options) {
	return <NForm {...options} />;
});

export {NForm}
export * from './n-component'