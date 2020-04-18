module.exports = {
	name: '5elookup',
	description: 'Looks up a value in the D&D 5e database. Specify "spell", "item", "monster", or "ability". If spaces are needed, use dashes instead. Example command would be >5elookup ability lay-on-hands.',
	args: true,
	execute(message, args) {
		var url = 'http://www.dnd5eapi.co/api/';
		if (args[0] == 'spell')
		{
			url = url + 'spells/' + args[1];
			fetch('https://example.com')
			.then(response => response.json())
			.then(data => {
			console.log(data)
			})
  .catch(err => ...);
		}
		
};