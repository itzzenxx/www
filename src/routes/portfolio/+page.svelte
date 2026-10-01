<h2>Portfolio</h2>

<p>This page serves to present my work in a neat format, mostly self-hosted services and tools, plus my experience and skills.</p>

<p>
	<a href="/contact">Contact me</a> |
	<a href="/allissa_blatt_resume.pdf">Resume</a> |
	<a href="https://github.com/itzzenxx">GitHub</a> |
	<a href="https://linkedin.com/in/allissa-blatt">LinkedIn</a>
</p>

<h3>Projects</h3>

<h4><a href="https://github.com/itzzenxx/fediforgetme">FediForgetMe</a></h4>

<p>2025 to present. A Python script that mass-deletes posts, favorites, and reblogs from a Fediverse profile. Servers often only delete part of what you ask for, so the script works around that to remove the rest.</p>

<h4>Homelab cluster</h4>

<p>Ongoing. A two-node Proxmox cluster with Ceph storage, plus a third machine acting as an extra monitor. The two nodes have 128 GB and 96 GB of ECC memory, and each has four 2 TB drives, with one node on SSDs and the other on hard drives. I'm currently building a PostgreSQL primary and standby pair on it, using Patroni and etcd for automatic failover.</p>

<h4>Constellatory</h4>

<p>2023 to 2025. A smaller set of privacy-focused internet services on my homelab, replacing Plus St. I ran fewer services on purpose so I could put stability and quality of service first.</p>

<h4>Plus St</h4>

<p>2022 to 2023. My first sysadmin project: a collection of open-source, privacy-focused internet services for classmates and the public. The Matrix homeserver was the most popular, with hundreds of users.</p>

<h4>Smaller tools</h4>

<ul>
	<li><a href="https://github.com/itzzenxx/prevent_media_downloads_from">prevent_media_downloads_from</a> (2023): a script, written with a collaborator, that keeps a blocklist file Matrix homeservers read at startup, so banning a malicious homeserver also drops its cached media.</li>
	<li><a href="https://github.com/itzzenxx/cookie-patchset">cookie-patchset</a> (2022): a patchset for Cookie Clicker that hides the scrollbar and removes ads and third-party trackers.</li>
</ul>

<h3>Experience</h3>

<h4>IT support intern, Weston High School</h4>

<p>I provided IT support and repaired Chromebooks, and handled end-of-year facilities and inventory work.</p>

<h3>Skills</h3>

<ul>
	<li><b>Proficient:</b> Linux system administration, NGINX, DNS, TLS/SSL certificates, reverse proxying, firewall configuration, self-hosted service deployment, Matrix/Synapse administration, Python, hardware troubleshooting and repair</li>
	<li><b>Familiar:</b> Proxmox VE, Ceph distributed storage, virtualization, Java, PostgreSQL, network-attached storage, local LLM deployment, Fediverse and federated technologies</li>
</ul>

<h3>Links</h3>

<ul>
	<li><a href="/contact">Contact me</a></li>
	<li><a href="/allissa_blatt_resume.pdf">Resume</a></li>
	<li><a href="https://github.com/itzzenxx">GitHub</a></li>
	<li><a href="https://linkedin.com/in/allissa-blatt">LinkedIn</a></li>
</ul>

<style>
	li {
		color: var(--textColor);
	}
	li + li {
		margin: 3px 0;
	}
</style>
