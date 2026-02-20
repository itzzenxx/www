export const prerender = true;
export const GET = async () => {
	const body = `-----BEGIN PGP PUBLIC KEY BLOCK-----

mDMEZ+1tKBYJKwYBBAHaRw8BAQdAYmMR1ADLovBnFX+R/ofRO4Fv4aayZJ5Mqu1T
tvcmNM2IeAQgFgoAIBYhBIBM2QyKTPIS76XIfYhgUSphLTXMBQJpmJGKAh0AAAoJ
EIhgUSphLTXMzcsBANlJWSnBQQw8mbVF7LQON8QooUgf2iqqW+YEqrtB8xDkAP9N
qCX6dnOpYWlHih9akWHu2iTqeVEwLjOtKZGI4vHhDbQbYWxsaXNzYSA8aXR6emVu
QGl0enplbi5uZXQ+iJkEExYKAEEWIQSATNkMikzyEu+lyH2IYFEqYS01zAUCZ+1t
KAIbAwUJAeEzgAULCQgHAgIiAgYVCgkICwIEFgIDAQIeBwIXgAAKCRCIYFEqYS01
zOKKAQClFTitDgGpw3YS0ArgMM0sFDerY9QgnHx0vesTfViGQAEAxeseWJtP1i5r
RiUiD5DLBw8NP6JOLE5NX1Mni3DWdgy4MwRn7W0oFgkrBgEEAdpHDwEBB0DRW5et
obZeLhsSh6avFx1vmWNBJiACxFf5elviDpQygIh+BBgWCgAmFiEEgEzZDIpM8hLv
pch9iGBRKmEtNcwFAmftbSgCGyAFCQHhM4AACgkQiGBRKmEtNcyEBAEAkRwQBx71
orsCYcA/Y3BnLoWI/Es1xNJ5JcQ/no2E2/YA/iX+YJKdLx/IizwjZ5tQnLHx1/Yi
4cymLVB1gahwpjgJuDgEZ+1tKBIKKwYBBAGXVQEFAQEHQGI21lBMFW0JpEzeN90Z
SzAQyFvim36LZXUy7Oq8nk4kAwEIB4h+BBgWCgAmFiEEgEzZDIpM8hLvpch9iGBR
KmEtNcwFAmftbSgCGwwFCQHhM4AACgkQiGBRKmEtNcymbwD8CmhEU8Zv4v3ppd4B
gzavngUiyY5vh2h8269LaMxbGjgBAKordhL119BnmWQp7oc5cN4bL6cULICg41Zb
mXfcLXEL
=QoKy
-----END PGP PUBLIC KEY BLOCK-----
`;

	const headers: Headers = new Headers({
		'Content-Type': 'text/plain; charset=utf-8',
		'Cache-Control': `max-age=0, s-max-age=${600}`,
		'Content-Disposition': 'inline; filename=allissa.gpg'
	});
	return new Response(body, { headers });
};
