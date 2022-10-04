class Cache {

	infoStorage = new Map();
	stats = [];

	set = (key, value, count = 1) => {
		this.infoStorage.set(key, [value, count]);
	}

	get = (key) => {
		let tempResult = this.infoStorage.get(key);
		if (tempResult[1] > 0) {
			this.stats.push([key, tempResult[0], tempResult[1]])
			tempResult[1]--;
			return tempResult[0];
		} else {
			return null;
		}
	}

}

export {Cache}