export class Minimum {
	make(originalPromise: any, delay: number): Promise {
		return Promise.all([
			originalPromise,
			new Promise(resolve => {
				setTimeout(() => resolve(), delay)
			}),

		]).then(result => result[0])
	}
}
