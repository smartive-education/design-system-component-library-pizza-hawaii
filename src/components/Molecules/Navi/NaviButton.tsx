import React, { FC, ReactNode, ButtonHTMLAttributes, AnchorHTMLAttributes } from 'react';
import { Icon } from '../../Atoms/Icon/Icon';
import { Label } from '../../Atoms/Label/Label';

type BaseNaviButtonProps = {
	children: ReactNode;
	as?: 'button' | 'a';
	icon?: string;
};

type HTMLButtonProps = BaseNaviButtonProps & {
	as: 'button';
} & ButtonHTMLAttributes<HTMLButtonElement>;

type LinkButtonProps = BaseNaviButtonProps & {
	as: 'a';
} & AnchorHTMLAttributes<HTMLAnchorElement>;

type NaviButtonProps = HTMLButtonProps | LinkButtonProps;

const defaultProps: Partial<NaviButtonProps> = {
	as: 'a',
	children: 'NaviButton',
	icon: 'profile',
};

export const NaviButton: FC<NaviButtonProps> = ({ as: Tag = 'a', children, icon, ...props }) => {
	const style =
		'inline-flex flex-col items-center justify-center min-w-[56px] min-h-[56px] gap-1 p-2 rounded-lg text-white bg-violet-600 hover:bg-violet-700';

	let content;
	if (children && typeof children[0] === 'string') {
		content = (
			<Label as="span" size="S">
				{children}
			</Label>
		);
	} else {
		content = children;
	}
	return (
		<li className="flex-auto">
			<Tag className={style} {...props}>
				{icon ? <Icon name={icon} /> : null}
				{content}
			</Tag>
		</li>
	);
};

NaviButton.defaultProps = defaultProps;
