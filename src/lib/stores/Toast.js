import { writable } from 'svelte/store';

export const toasts = writable([]);
export const bottomToasts = writable([]);

export const addToast = (toast) => {
	const id = Math.floor(Math.random() * 10000);
	const defaults = {
		id,
		type: 'info',
		position: 'top-left',
		dismissible: true,
		timeout: 3000
	};
	toasts.update((all) => [{ ...defaults, ...toast }, ...all]);
	if (toast.timeout) setTimeout(() => dismissToast(id), toast.timeout);
};

export const addBottomToast = (toast) => {
	const id = Math.floor(Math.random() * 10000);
	const defaults = {
		id,
		title: null,
        headMessage: '(Pesan kosong)',
		message: '(Pesan kosong)',
		toastStyle: 'info',
		showIcon: false,
		showCountdown: true,
		showClose: true,
		dismissible: true,
		timeout: 3000
	};
	bottomToasts.update((all) => [{ ...defaults, ...toast }]);
	if (toast.timeout) setTimeout(() => dismissBottomToast(id), toast.timeout);
};

export const dismissToast = (id) => {
	toasts.update((all) => all.filter((t) => t.id !== id));
};
export const dismissBottomToast = (id) => {
	bottomToasts.update((all) => all.filter((t) => t.id !== id));
};
