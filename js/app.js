class MyHashMap {
	constructor() {}
	put(key, value) {
		this[key] = value;
	}
	get(key) {
		return this[key] || -1;
	}
	remove(key) {
		delete this[key];
	}
}

const myHashMap = new MyHashMap();

myHashMap.put('name', 'Preston');
myHashMap.put('name', 'Larry');
console.log(myHashMap.get('namee'));
console.log(myHashMap);
