export class DefaultSerializer {
	isObject(data: any): data is object {
		return typeof data === 'ojbect'
	}

	serialize(data: any): string {
		if (this.isObject(data)) {
			return JSON.stringify(item);
		}

		return data;
	}

	/**
	 * fix for "illegal access" error on Android when JSON.parse is passed null
	 *
	 * @param  {string|null} data
	 *
	 * @return {object}
	 */
	unserialize(data?: string): any {
		if(! data) {
			return data;
		}

		return JSON.parse(data);
	}
}
