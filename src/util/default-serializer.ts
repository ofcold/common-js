export class DefaultSerializer {
	isObject(x: any): boolean {
		return x instanceof Object || x instanceof Array;
	}

	serialize(data: any): string {
		if (this.isObject(data)) {
			return JSON.stringify(data);
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
