import React from 'react'
import ReactDOM from 'react-dom'
import jQuery from 'jquery'
import classnames from 'classnames'
let $ = jQuery;
import {Envs} from '../envs'
import {Model} from '../model/model'
import {NWidget, NComponent} from './n-component'
import {NPanel} from './n-panel'

class NDialog extends NComponent {
	renderDialogContent() {
		let layout = Envs.deepMergeTo({}, {
			comp: {
				type: Envs.COMPONENT_TYPES.PANEL
			}
		}, this.getContentLayout());
		return (<div className='n-dialog-content'>
			{this.renderInternalComponent(layout)}
		</div>);
	}
	renderInNormal() {
		return (<div className={this.getComponentStyle()}
					 ref='me'>
			{this.renderDialogContent()}
		</div>);
	}

	getComponentClassName() {
		return 'n-dialog';
	}
	getContentLayout() {
		return this.getLayoutOptionValue('content');
	}
}

class NDialogBackdrop extends NWidget {
	state = {}
	render() {
		let className = classnames('n-dialog-backdrop', {
			'n-dialog-show': this.state.show
		});
		return (<div className={className}
					 ref='me'>
			<NDialog {...this.props.dialogOptions}
					 backdrop={this}
					 ref='dialog' />
		</div>);
	}
	isShown() {
		return this.state.show;
	}
	getDialogId() {
		if (this.state.id == null) {
			this.state.id = Math.floor(Math.random() * 1000000);
		}
		return this.state.id;
	}
	show() {
		$('body').addClass(`n-dialog-open-${this.getDialogId()}`);
		this.setState({show: true});
	}
	hide() {
		this.setState({show: false});
		Envs.transitionend({
			target: this.$me(),
			handler: () => {
				$('body').removeClass(`n-dialog-open-${this.getDialogId()}`);
			}
		});
	}
}

class NDialogUtil {
	static createDialog(options) {
		let container = $('<div />');
		let dialog = ReactDOM.render(<NDialogBackdrop dialogOptions={options} />, container[0]);
		$('body').append(container);
		return dialog;
	}
}

Envs.COMPONENT_TYPES.DIALOG = {type: 'n-dialog', label: true, error: true};
Envs.setRenderer(Envs.COMPONENT_TYPES.DIALOG.type, function (options) {
	return <NDialog {...options} />;
});

export {NDialog, NDialogUtil}
