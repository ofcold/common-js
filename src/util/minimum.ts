export function Minimum(originalPromise: any, delay: number): Promise<any> {
	return Promise.all([
		originalPromise,
		new Promise(resolve => {
			setTimeout(() => resolve(), delay)
		}),

	]).then(result => result[0])
}
