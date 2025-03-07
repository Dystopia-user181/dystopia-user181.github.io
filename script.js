let app;

function load() {
	Vue.component('game-data', {
		props: ["game"],
		data() { return {
			show: false
		}},
		template: `<div class="gamedata-div">
			<div :class="{'game-prompt': true, active: show}" @click="show = !show;">
				{{game.title}} &nbsp;<img src="images/arrow.png" width="25" class="arrow-img" :style="{
					transform: 'rotate(' + (show ? 0 : 180) + 'deg) translateY(' + (show ? '-' : '') + '50%)',
				}"/>
			</div>
			<div class="gamedata-content" v-if="show">
				<br>
				<span class="txtlarge">Links:</span>
				<span v-for="(link, name) in game.links" class="txtlarge"><br>
					{{name}}: <a :href="link" target="newtab">{{link}}</a>
				</span>
				<br><br>
				<span v-html="game.desc" style="color: var(--c2)"></span>
			</div>
		</div>`
	});
	app = new Vue({
		el: '#app',
		data: {
			games: [
			{
				title: "Classical Music",
				links: {
					"YouTube Channel": "https://www.youtube.com/@dystopia-user181",
				},
				desc: `Some time around mid-2022, I started becoming more and more interested in classical music- both new
				things being written by contemporary composers and classics like those of Beethoven. The YouTube channel above
				is where I put my own contributions to the genre (Or other related genres like ambient music).
				<br><br>`
			},
			{
				title: "Antimatter Dimensions",
				links: {
					"Antimatter Dimensions": "https://ivark.github.io/AntimatterDimensions/",
				},
				desc: `I was a tester (and later a developer) of the game Antimatter Dimensions, mainly helping to create and clean
				up the user interface of later parts of the content. It was overall a rather rewarding experience which taught me how
				to work as part of a development team. I also included a secret theme around the user interface of windows in the game-
				see if you can find it!
				<br><br>`
			},
			{
				title: "The Alterhistorian's conquest",
				links: {
					"The Alterhistorian's Conquest": "https://dystopia-user181.itch.io/the-alterhistorians-conquest",
				},
				desc: `This is (arguably) my best shot at an incremental game yet. This game mostly revolves around elements and their interactions
				with different machines, with the end goal currently being formulating the elixir of eternal life. Heavily inspired by another game
				with a similar name, it's probably the largest scale and one of the still-active projects that I'm working on. It's also my first
				attempt making a game using proper build tools. Would heavily recommend playing this first since it's much more polished than most
				other games.<br><br>
				<img src="images/alterhistorian.png" class="imglarge"/>`
			},
			{
				title: "Plants of Instability",
				links: {
					"Plants of Instability": "https://dystopia-user181.github.io/Growth-sim-testing/"
				},
				desc: `This is an incremental game about growing lots of plants.<br><br>
				This was my first proper attempt at a project written in a text-based language. The result didn't turn out bad,
				and actually I'd say it's pretty good in the game design sector. The code sucks though, it's barely readable for present me which is obstructing new updates.
				<br><br>A full rewrite is planned in the future.<br><br>
				<img src="images/growth-sim.png" class="imglarge"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.user.io/Growth-sim-testing" target="newtab"><i>Plants of Instablity</i></a>
				</span><br><br>`
			},
			{
				title: "Timelapse and Sequence",
				links: {
					"Timelapse and Sequence": "https://dystopia-user181.itch.io/consequence/"
				},
				desc: `A puzzle platformer with time reversal and other cool stuff, made for a game jam with the theme "All actions have consequences".<br><br>
				This was my first attempt at writing a platformer style game, and I decided not to use a physics engine for some reason.<br>
				Regardless, it turned out pretty good, and I'm happy with it. This is one of my proudest games.<br><br>
				<img src="images/timelapse-and-sequence.png" width="400"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.itch.io/consequence" target="newtab"><i>Timelapse and Sequence</i></a>
				</span><br><br>`
			},
			{
				title: "Project Iridium / Resource Starve",
				links: {
					"Project Iridium": "https://dystopia-user181.itch.io/project-iridium",
					"Resource Starve": "https://dystopia-user181.itch.io/cassiopeia/"
				},
				desc: `Another jam release, this time for an incremental jam with the theme "running out of".<br><br>
				A "spiritual successor" to <a href="https://yhvr.itch.io/cleansed" target="newtab">Cleansed</a>.<br><br>
				Project Iridium represents a later attempt using a same engine. The game is themed around time and the bending of it.
				<br><br>
				<img src="images/resource-starve-2.png" class="imglarge"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.itch.io/cassiopeia" target="newtab"><i>Resource Starve</i></a>
				</span><br><br>`
			},
			{
				title: "TMT mods",
				links: {
					"The Factoree": "https://dystopia-user181.github.io/The-Modding-Tree/",
					"The Compact Tree": "https://raw.githack.com/Dystopia-user181/The-Modding-Tree/The-Compact-Tree/index.html",
					"Prestige Tree: Reloaded": "https://prestige-tree-reloaded.glitch.me/"
				},
				desc: `Around October 2020, an incremental game engine called "The Modding Tree" took off in popularity.<br><br>
				I decided to try it for myself and these were the results.<br><br>
				The Factoree is semi decent, and I'd say it's the best out of the 3.<br>
				The Compact Tree was more of an experiment, but it does have some cool bits.<br>
				Prestige tree reloaded is a parody of Jacorb's <a href="https://jacorb90.me/Prestige-Tree/">Prestige Tree</a>.<br><br>
				<img src="images/the-factoree.png" class="imgsmall"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.github.io/The-Modding-Tree" target="newtab"><i>The Factoree</i></a>
				</span><br><br>`
			},
			{
				title: "Miscellaneous cool stuff",
				links: {
					"Connecting pipes": "https://dystopia-user181.github.io/connect-pipes-polygonal/",
					"Calculating pi": "https://dystopia-user181.github.io/Calculate-pi-nilakantha/",
					"Circle physics engine experiment": "https://dystopia-user181.github.io/circular/"
				},
				desc: `The title says it all.<br><br>
				<img src="images/archipegalo.png" class="imglarge"/><br>
				<span style="font-size: 12px;">
					Archipelago generated using <a href="https://dystopia-user181.github.io/noise-experimentation" target="newtab"><i>Noise experiments</i></a>
					</span><br><br>`
			}]
		}
	})
}