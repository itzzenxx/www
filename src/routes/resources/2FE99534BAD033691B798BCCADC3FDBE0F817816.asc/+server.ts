export const prerender = true;
export const GET = async () => {
	const body = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEaZiTLxYJKwYBBAHaRw8BAQdAlfCmzhMZofLcG0SWwIvL+RGHby9XzhBpeQWH
jVvrP3G0F3plbiA8aXR6emVuQGl0enplbi5uZXQ+iQITBBMWCgG7AhsDBQkFpOvh
BQsJCAcCAiICBhUKCQgLAgQWAgMBAh4HAheAFiEEL+mVNLrQM2kbeYvMrcP9vg+B
eBYFAmmYoxU2FIAAAAAAEAAdcHJvb2ZAYXJpYWRuZS5pZGh0dHBzOi8vZGlzY29y
ZC5nZy9XU2V1RjJaU2VZQBSAAAAAABAAJ3Byb29mQGFyaWFkbmUuaWRodHRwczov
L3RyYW5zbHVuYXIuYWNhZGVteS91c2Vycy9pdHp6ZW49FIAAAAAAEAAkcHJvb2ZA
YXJpYWRuZS5pZGh0dHBzOi8vY29kZWJlcmcub3JnL2l0enplbi9rZXlveGlkZTAU
gAAAAAAQABdwcm9vZkBhcmlhZG5lLmlkZG5zOml0enplbi5uZXQ/dHlwZT1UWFRa
FIAAAAAAEABBcHJvb2ZAYXJpYWRuZS5pZGh0dHBzOi8vZ2lzdC5naXRodWIuY29t
L2l0enplbnh4L2JlNjBmMjIyN2I4ODRjMGVlNjQ3YmNiMjkxZjFmMzUzNxSAAAAA
ABAAHnByb29mQGFyaWFkbmUuaWRpcmM6Ly9pcmMubGliZXJhLmNoYXQvaXR6emVu
eHgACgkQrcP9vg+BeBatmwEAj2hFsn1PDkrvzK7gdzdaPDqsBqq+1S7SmQNLlzc5
/2gBALzNGNnLAsbcFm02rMAX2lh7KW5u5ytuNWMaXvWOekcAuDMEaZiTLxYJKwYB
BAHaRw8BAQdA6ZRKUjMVWPxDmkEKk3PknbPI4WU+4Mrdk2SvwUNwRKOIfgQYFgoA
JhYhBC/plTS60DNpG3mLzK3D/b4PgXgWBQJpmJMvAhsgBQkFpOvhAAoJEK3D/b4P
gXgWVJsBAIoNVOHVcWhygIKoJ+eFsOHMe8kYxeS+kkSSf8/fSLsxAPsH5MmYrqCk
vU6YyOCN7CY1QUVsvJ4lokslXxTl1FJyD7g4BGmYky8SCisGAQQBl1UBBQEBB0Dh
axVCpD9b3QSNrbr2vB6InqBaL/uOUYpLIpH20G/IdwMBCAeIfgQYFgoAJhYhBC/p
lTS60DNpG3mLzK3D/b4PgXgWBQJpmJMvAhsMBQkFpOvhAAoJEK3D/b4PgXgWcuMB
AJqD9La4XpBDV/QZ2WNcdyKGj4l235PJGuvNSiKB6mQXAP91veHfRa+z6i8A3K6L
YQH83EJSvPS8tDWdk+gCpReNAg==
=kJzv
-----END PGP PUBLIC KEY BLOCK-----
`;

	const headers: Headers = new Headers({
		'Content-Type': 'text/plain; charset=utf-8',
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Disposition': 'inline; filename=allissa.gpg'
	});
	return new Response(body, { headers });
};
