function mouse() {
	this.name = name;
	this.dead = false;
}
mouse.prototype.die = function() {
	this.dead = true;
};
module.exports = mouse;