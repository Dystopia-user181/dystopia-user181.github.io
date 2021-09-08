let app;

function load() {
	Vue.component('game-data', {
		props: ["game"],
		data() { return {
			show: false
		}},
		template: `<div style="margin: 0 50px">
			<div :class="{'game-prompt': true, active: show}" @click="show = !show;">
				{{game.title}} &nbsp;<img src="images/arrow.png" width="25" class="arrow-img" :style="{
					transform: 'rotate(' + (show ? 0 : 180) + 'deg) translateY(' + (show ? '-' : '') + '50%)',
				}"/>
			</div>
			<div style="text-align: left; margin: 0 200px 0 10px;" v-if="show">
				<br>
				<span class="txtlarge">Links:</span>
				<span v-for="(link, name) in game.links" class="txtlarge"><br>
					{{name}}: <a :href="link" target="newtab">{{link}}</a>
				</span>
				<br><br>
				<span v-html="game.desc" style="color: var(--c2)"></span>
			</div>
		</div>`
	})
	app = new Vue({
		el: '#app',
		data: {
			games: [{
				title: "Plants of Instability",
				links: {
					"Plants of Instability": "https://dystopia-user181.github.io/Growth-sim-testing/"
				},
				desc: `This is an incremental game about growing lots of plants.<br><br>
				This was my first proper attempt at a project written in a text-based language. The result didn't turn out bad,
				and actually I'd say it's pretty good in the game design sector. The code sucks though, it's barely readable for present me which is obstructing new updates.
				<br><br>A full rewrite is planned in the future.<br><br>
				<img src="images/growth-sim.png" width="700"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.user.io/Growth-sim-testing" target="newtab"><i>Plants of Instablity</i></a>
				</span><br><br>`
			}, {
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
				<img src="images/the-factoree.png" width="400"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.github.io/The-Modding-Tree" target="newtab"><i>The Factoree</i></a>
				</span><br><br>`
			}, {
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
			}, {
				title: "Resource Starve (Cassiopeia)",
				links: {
					"Resource Starve": "https://dystopia-user181.itch.io/cassiopeia/"
				},
				desc: `Another jam release, this time for an incremental jam with the theme "running out of".<br><br>
				You play as a player that just so happens to look like a nuclear bomb, and you have to manage a variety of resources. I tried taking full advantage of the jam theme.
				Personally this is one of my proudest releases, and it also explores grid mechanics in incrementals more thoroughly. I also like the graphics on this one, I'm not a graphics person
				but I think I pulled this one off quite well.
				<br><br>
				A "spiritual successor" to <a href="https://yhvr.itch.io/cleansed" target="newtab">Cleansed</a>.<br><br>
				<img src="images/resource-starve-2.png" width="600"/><br>
				<span style="font-size: 12px;">
					Image taken from <a href="https://dystopia-user181.itch.io/cassiopeia" target="newtab"><i>Resource Starve</i></a>
				</span><br><br>`
			}, {
				title: "Miscellaneous cool stuff",
				links: {
					"Perlin noise experiments": "https://dystopia-user181.github.io/noise-experimentation/",
					"Image manipulation experiment": "https://dystopia-user181.github.io/Meme-Image-Editor/",
					"Calculating pi": "https://dystopia-user181.github.io/Calculate-pi-nilakantha/",
					"Circle physics engine experiment": "https://dystopia-user181.github.io/circular/"
				},
				desc: `The title says it all.<br><br>
				<img src="images/archipegalo.png" width="700"/><br>
				<span style="font-size: 12px;">
					Archipegalo generated using <a href="https://dystopia-user181.github.io/noise-experimentation" target="newtab"><i>Noise experiments</i></a>
					</span><br><br>`
			}]
		}
	})
}