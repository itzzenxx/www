---
title: 'Our beloved homelab setup'
date: '2026-03-15'
author: 'allissa'
category: 'tech'
---

<script>
        import rack from '$lib/assets/blog/20260315/rack.avif';
        import rack400 from '$lib/assets/blog/20260315/rack-400px.avif';
        import rack800 from '$lib/assets/blog/20260315/rack-800px.avif';
        import thinkstation from '$lib/assets/blog/20260315/thinkstation.avif';
        import thinkstation400 from '$lib/assets/blog/20260315/thinkstation-400px.avif';
        import thinkstation800 from '$lib/assets/blog/20260315/thinkstation-800px.avif'
</script>

<a href={rack}><img src={rack400} alt="our servers" fetchpriority="high" srcset="{rack400} 400w, {rack800} 800w, {rack} 4000w" sizes="400px" /></a>

_An older picture, but the hardware is the same._

## Prologue

> This blog post contains a lot of rambling, you have warned.

For years and years I've always self hosted things. I never really liked the idea of using a virtual private servers (VPS) for anything other than basic uses. Having exclusive control over the hardware is a plus, but it's also becaues I can bring performant servers and be as flexible with how I set them up without any real cost.

They are convenient, and are certianly heplful in a clutch (this website is on a hetzner VPS as of writing due to how my homelab is actually in storage because my parents moved recently). However the cost is too much for me. You could get a buyvm server for hundreds a month to match the perfornce of a server you could get on ebay for way less.

Since 2021 I've never really used a VPS for anything, always hosting on whatever hardware I had. After opening the neccesary ports on my home ISP, running Plus St and later on Constellatory, I went wild with getting whatever performant hardware I could get my hands on for cheap.

## More than one server?

I used to just have one. It used to be the old family laptop that was repurposed to host things. It did good with what I wanted to do, but then I wanted to get into Matrix.

The big problem with matrix is that unless you use a small efficient homeserver like ~~dendrite~~ ~~conduit~~ ~~conduwuit~~ tuwunel you need to handle the absolute girth that is matrix-synapse. A default install is slow and sluggish, so you need to do a lot to optimize it. That results in what I can only describe as a rabbit hole that swallowed me whole (and my wallet).

Small homeserver software can run on a raspberry pi and for a single user instance this is more than enough, but matrix-synapse practically requires you setup some workers and have a fast and optimized PostgreSQL database to get any real performance with a small userbase. It's also written in Python, so that's another reason as to why it's sluggish. Despite its drawbacks, I went with matrix-synapse because I was hosting a large userbase and conduwuit lacked some features at the time.

That was more than a year ago. Now Constellatory is dead, conduwuit is dead, and I'm no longer involved with Matrix in any capacity. I could go on about why, but that's a long story. My current problem is that I now have incredibly powerful hardware with no real software to take advantage of it.

## The hardware in question

My server is composed of 3 important servers. I sometimes will attach some others, but vitally these 3 are the most important. I've named them after constellations when I was hosting Constellatory and I don't have any reason to change them again.

### andromeda / thinkstation p510

When handing multiple servers I needed a reliable server to host a reverse proxy on so that bringing down one of the servers doesn't take everything with it. This server has done pretty well at that.

It runs a minimal FreeBSD install and uses NGINX for reverse proxying. I've modified NGINX thorugh ports to compile it with LibreSSL to get quic working and some other modules to make managing response headers easier. Any static website will be handled through NGINX on here, so that is where the rendered static files for itzzen.net rest. I should put these files on the media server, but that's for a later project.

It also runs Grafana and prometheus to gather metrics that other servers will send data to so I can get a general breakdown on hardware and software metrics.

### gemini / thinkstation p510

While FreeBSD is nice, I want to run Jellyfin and it isn't supported. Having a seperate linux server gives me that performance with more redundancy. At the moment it runs Debian. I went with Debian because I've been burned by less stable linux distros before and I want a reliable and widely supported server operating system. FreeBSD is also this, however its lack of software support relegates it to servers that have a specific purpose rather than being a catch-all for software.

I have been considering reformatting this server and starting fresh. While these servers are reliable, I didn't think about disk snapshotting when I created them. All of my FreeBSD servers use ZFS, so enabling it won't be that tricky. On Debian, I installed ext4 which made doing this singificantly more difficult.

I could install Debian with btrfs, however I've been looking into switching linux distros all together. I am currently considering, Fedora which I've used in the past and has a healthy server ecosystem of its own. I have a lot of research and experiemnting to do.

### phoenix / thinkstation p320

So the story of this server is kinda interesting. I was graduating high school and I struck an IT internship at the school. On the last few days out I noticed one of my other thinkstations was malfunctioning, and I asked the IT lead if I could bring home one of their decomissioned thinkstations. Shockingly, I was allowed to! I am happy to give this tower a second life.

<a href={thinkstation}><img src={thinkstation400} alt="me bringing a thinkstation home on the school bus" fetchpriority="high" srcset="{thinkstation400} 400w, {thinkstation800} 800w, {thinkstation} 4000w" sizes="400px" /></a>

As for what I use it for, it's a media server. I wanted to keep S3 storage away from the other servers because attaching a raid array to one of them would overcomplicate things. This server runs FreeBSD. It was logical, because I wanted to manage these drives with ZFS.

I use Garage to handle S3. It used to be minio but I switched away from it because it was too much for my small deployment. Aparently, my decision was further vindicated as they've completely killed off their open source version and focused on AI things now. Bummer.

As for the raid setup, I have 4x2tb SSDs with raidz-1 setup. This allows me to use 6tb of the 8tb with tolerance for one disk loss. This is good enough for me and allows me to host a lot of data on it with the assurance that one drive failure won't take everything with it.

### taurus / thinkstation p320

This server doesn't exist yet, but I plan on working on it when I get the chance to. Recently I upgraded the media server to use SSDs, and that left me with hard drives that aren't getting used at the moment. This means I can setup an almost identical server to phoenix but with slower HDDs than SSDs.

This server would proably not be in-network, as I want to complete the 3-2-1 backup rule without relying on a paid solution like backblaze. Having andromeda, gemini, and phoenix sending over important data via rsync or S3 would be really nice.

This raid setup is a bit more redundant as data can be compressed and I don't hold onto everything forever. The drives I have are 4x2tb HDDs configured with disk mirroring. This allows me to use 4tb of the 8tb with a disk tolerance of 2 disks.

## What I plan on doing with this setup in the future

I want to get back into homelabbing and making my own "cloud" because I like the benefits it brings. I used to use syncthing to sync things over my local devices, however I'd pretty much need to always have syncthing left on always on any device that I want to sync to or I will sometimes get nasty sync conflicts that can actually brick some browser profiles if you aren't careful. Syncthing is really powerful, but it isn't a replacement for everything for me sadly.

I definitely want to host Immich and Jellyfin. Photos, Video, and Music are the biggest contributers to storage on my devices. I use lossless encoding on any CD, DVD, or Blu-ray I rip, meaning I will fill up my phone before I even begin to sync over movies and shows.

## Conclusion

Homelabbing is fun and one hell of a drug. I could just ramble on what I want to host, but this blog post is already long enough. If you have any cool software, please <a href="/contact">contact me</a> and inform me!
