import {React, ReactDOM, $, classnames, Envs, NComponent} from './n-component'

let prefixFA = function(str) {
	if (str) {
		return str.split(' ').map(classname => {
			if (classname.startsWith('!')) {
				return classname.substr(1);
			} else {
				return classname.replace(/^(?!fa-)(.*)$/, 'fa-$1');
			}
		}).join(' ');
	} else {
		return str;
	}
};


// icon has no standard line-height

// default is font-awesome
class NIcon extends NComponent {
	static defaultProps = {
		defaultOptions: {
			fontAwesome: true
		}
	}
	renderInNormal() {
		return (<i className={prefixFA(this.getRenderedClassName())}
				   onClick={this.onComponentClicked}
				   ref='me' />);
	}
	// style
	getComponentClassName() {
		return '!n-icon';
	}
	getRenderedClassName() {
		return classnames(this.getComponentStyle(), {
			'!fa fw': this.isFontAwesome()
		}, classnames(this.getFontClassName()), {
			'!n-clickable': this.isClickable()
		});
	}

	// option value
	isFontAwesome() {
		return this.getLayoutOptionValue('fontAwesome');
	}
	// all font class names should be defined here
	// if it is from font-awesome, the first 'fa-' can be ignored
	// such as 'ban', equals 'fa-ban'.
	// but others cannot be ignored
	// such as 'ban fa-spin', equals 'fa-ban fa-spin'
	// can be any format which can be parsed by classnames
	getFontClassName() {
		return this.getLayoutOptionValue('icon');
	}

	onComponentClicked = (evt) => {
		if (this.isClickable()) {
			this.fireEventToMonitor(evt);
		}
	}
}

// only for font-awesome
class NStackIcon extends NComponent {
	renderInNormal() {
		return (<span className={prefixFA(this.getRenderedClassName())}
					  onClick={this.onComponentClicked}
					  ref='me' >
			<i className={prefixFA(classnames('!fa stack-1x', this.getForeClassName()))} />
			<i className={prefixFA(classnames('!fa stack-2x', this.getBackClassName()))} />
		</span>);
	}
	// style
	getComponentClassName() {
		return '!n-stack-icon';
	}
	getRenderedClassName() {
		return classnames(this.getComponentStyle(), 
						'stack fw', 
						this.getBackgroundClassName(), {
						  	'!n-clickable': this.isClickable()
						});
	}

	// option value
	getBackgroundClassName() {
		return this.getLayoutOptionValue('background');
	}
	getForeClassName() {
		return this.getLayoutOptionValue('foreicon');
	}
	getBackClassName() {
		return this.getLayoutOptionValue('backicon');
	}
	onComponentClicked = (evt) => {
		if (this.isClickable()) {
			this.fireEventToMonitor(evt);
		}
	}
}

Envs.COMPONENT_TYPES.ICON = {type: 'n-icon', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.ICON.type, function (options) {
	return <NIcon {...options} />;
});

Envs.COMPONENT_TYPES.STACK_ICON = {type: 'n-stack-icon', label: false, popover: false, error: false};
Envs.setRenderer(Envs.COMPONENT_TYPES.STACK_ICON.type, function (options) {
	return <NStackIcon {...options} />;
});

export {NIcon, NStackIcon}
export * from './n-component'