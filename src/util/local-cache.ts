export class LocalCache {
	key: string;

	constructor(key: string) {
		this.key = key;
	}

	set(value: any): LocalCache {
		localStorage.setItem(this.key, value)

		return this
	}

	get(): any {
		return localStorage.getItem(this.key)
	}
}
