export const prerender = true;
export const GET = async () => {
	const body = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZ+1tKBYJKwYBBAHaRw8BAQdAYmMR1ADLovBnFX+R/ofRO4Fv4aayZJ5Mqu1T
tvcmNM20G2FsbGlzc2EgPGl0enplbkBpdHp6ZW4ubmV0PoiZBBMWCgBBFiEEgEzZ
DIpM8hLvpch9iGBRKmEtNcwFAmftbSgCGwMFCQHhM4AFCwkIBwICIgIGFQoJCAsC
BBYCAwECHgcCF4AACgkQiGBRKmEtNcziigEApRU4rQ4BqcN2EtAK4DDNLBQ3q2PU
IJx8dL3rE31YhkABAMXrHlibT9Yua0YlIg+QywcPDT+iTixOTV9TJ4tw1nYMuDME
Z+1tKBYJKwYBBAHaRw8BAQdA0VuXraG2Xi4bEoemrxcdb5ljQSYgAsRX+Xpb4g6U
MoCIfgQYFgoAJhYhBIBM2QyKTPIS76XIfYhgUSphLTXMBQJn7W0oAhsgBQkB4TOA
AAoJEIhgUSphLTXMhAQBAJEcEAce9aK7AmHAP2NwZy6FiPxLNcTSeSXEP56NhNv2
AP4l/mCSnS8fyIs8I2ebUJyx8df2IuHMpi1QdYGocKY4Cbg4BGftbSgSCisGAQQB
l1UBBQEBB0BiNtZQTBVtCaRM3jfdGUswEMhb4pt+i2V1MuzqvJ5OJAMBCAeIfgQY
FgoAJhYhBIBM2QyKTPIS76XIfYhgUSphLTXMBQJn7W0oAhsMBQkB4TOAAAoJEIhg
USphLTXMpm8A/ApoRFPGb+L96aXeAYM2r54FIsmOb4dofNuvS2jMWxo4AQCqK3YS
9dfQZ5lkKe6HOXDeGy+nFCyAoONWW5l33C1xCw==
=98/t
-----END PGP PUBLIC KEY BLOCK-----
`;

	const headers: Headers = new Headers({
		'Content-Type': 'text/plain; charset=utf-8',
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Disposition': 'inline; filename=allissa.gpg'
	});
	return new Response(body, { headers });
};
