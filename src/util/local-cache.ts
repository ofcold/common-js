import { DefaultSerializer } from './default-serializer';
import { StorageQuotaLimited } from '../exceptions/storage-quotaLimited';

export class LocalCache {

	/**
	 * When Safari (OS X or iOS) is in private browsing mode, it appears as though localStorage is available, but trying
	 * to call .setItem throws an exception below: "QUOTA_EXCEEDED_ERR: DOM Exception 22: An attempt was made to add
	 * something to storage that exceeded the quota."
	 *
	 * @param  {Object|null} storage
	 *
	 * @see https://github.com/gsklee/ngStorage/blob/master/ngStorage.js#L52
	 *
	 * @return {boolean}
	 */
	isStorageSupported(storage?: Storage): boolean {
		let supported = false;

		if (storage && storage.setItem ) {

			supported = true;
			let key = '__' + Math.round(Math.random() * 1e7);

			try {
				storage.setItem(key, key);
				storage.removeItem(key);
			} catch (err) {
				supported = false;
			}
		}

		return supported;
	}

}
