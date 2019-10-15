export class DefaultSerializer {
	static isSupportSerializer(x: any): boolean {
		return x instanceof Object || x instanceof Array;
	}

	static serialize(data: any): string {
		if (this.isSupportSerializer(data)) {
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
	static unserialize(data?: string): any {
		if(! data) {
			return data;
		}

		return JSON.parse(data);
	}
}
