<script>
import fediforgetme800 from "$lib/assets/projects/fediforgetme/banner-800px.webp";
import fediforgetme400 from "$lib/assets/projects/fediforgetme/banner-400px.webp";
</script>

<h2>Resume</h2>

<h3>Projects</h3>

<h4>FediForgetMe</h4>

<img src={fediforgetme400} alt="our desk setup" fetchpriority="high" srcset="{fediforgetme400} 400w, {fediforgetme800} 800w" sizes="400px" />

<p><i>authors: zen</i> | <i>years worked on: 2025-2026</i> | <i>status: active</i> | <i><a href="https://codeberg.org/itzzen/fediforgetme">link</a></i></p>

<p>Fediverse homeservers have a bad track record with data deletion. Their approach is useless and doesn't delete any user data at all. To bypass this, I wrote a simple python script for mass deleting data from a fediverse profile. All it does is look through the posts, favorites, reblogs, etc. on your profile and deletes it one-by-one manually.</p>

<h4>Constellatory</h4>

<p><i>authors: zen</i> | <i>years worked on: 2023-2025</i> | <i>status: defunct</i> </p>

<p>Constellatory was the successor to Plus St. While Plus St was a research project that was unstable and succomed to its problems after a unrecoverable database failure. Constellatory was a new approach that prioritized stability and correctness. We ran less services than Plus St, allowing for more attention to be given and a higher quality of service.</p>

<h4>prevent_media_downloads_from</h4>

<p><i>authors: zen, june</i> | <i>years worked on: 2023</i> | <i>status: archived</i> | <i><a href="https://codeberg.org/itzzen/prevent_media_downloads_from">link</a></i> </p>

<p>While maintaining a Matrix homeserver, a problem that can happen is that banning a malicous homeserver won't remove media by default. Homeservers support this, but the methods of banning a homeserver don't sync with this. This script solves that problem by updating a file that homeservers can look at on startup.</p>

<h4>Plus St</h4>

<p><i>authors: zen</i> | <i>years worked on: 2022-2023</i> | <i>status: defunct</i> </p>

<p>Plus St was a collection of internet services running on my homelab. My goal was to make open source privacy focused internet services accessible to the public. The target demographic being classmates at my highschool and the general public.</p>

<p>It was my first endevour into system administration and I learnt a lot from my time. I gained an understanding on linux administration and how to network computers together.</p>

<p>The most popular service we offered was <a href="https://matrix.org">Matrix</a>. We had hundreds of users using our homeserver.</p>

<h4>cookie-patchset</h4>

<p><i>authors: zen</i> | <i>years worked on: 2022</i> | <i>status: archived</i> | <i><a href="https://codeberg.org/itzzen/cookie-patchset">link</a></i> </p>

<p>A small patchset for the cookie clicker game that makes some cosmetic modifications. It hides the scrollbar, disables ads, and removes third party trackers.</p>

<style>
	li {
		color: var(--textColor);
	}
	li + li {
		margin: 3px 0;
	}
</style>
