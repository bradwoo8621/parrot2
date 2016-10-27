import {
	React, 
	ReactDOM, 
	$, 
	classnames, 
	Envs, 
	Model, 
	NComponent} from './n-component'
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

class NDialogBackdrop extends React.Component {
	state = {}
	render() {
		let className = classnames('n-dialog-backdrop', {
			'n-dialog-show': this.state.show
		});
		return (<div className={className}
					 onTransitionEnd={this.onTransitionEnd}
					 ref='me'>
			<NDialog {...this.props.dialogOptions}
					 backdrop={this}
					 ref='dialog' />
		</div>);
	}
	isShown() {
		return this.state.show;
	}
	show() {
		this.setState({
			show: true
		});
	}
	hide() {
		$(ReactDOM.findDOMNode(this.refs.me)).removeClass('n-dialog-shown');
		this.setState({
			show: false
		});
	}

	onTransitionEnd = (evt) => {
		if (this.isShown()) {
			$(ReactDOM.findDOMNode(this.refs.me)).addClass('n-dialog-shown');
		}
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
export * from './n-component'