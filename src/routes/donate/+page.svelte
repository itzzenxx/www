<h2>Donate</h2>

<h3>Fiat</h3>

<ul>
	<li><a href="https://ko-fi.com/itzzen"><i class="icons ko-fi"></i> itzzen</a> | Ko-fi</li>
	<li><a href="https://paypal.me/itzzenxx"><i class="icons paypal"></i> itzzenxx</a> | Paypal</li>
	<li><a href="https://venmo.com/u/itzzenxx"><i class="icons venmo"></i> itzzenxx</a> | Venmo</li>
	<li><i class="icons zelle"></i> itzzen@itzzen.net | Zelle</li>
</ul>

<h3>Crypto</h3>

<table>
	<thead>
		<tr>
			<th>coin</th>
			<th>symbol</th>
			<th>wallet address</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Bitcoin</td>
			<td>BTC</td>
			<td><code>bc1qp8pgl7gzxp427unv5hr69cdz5u3w4zytz2tuf5</code></td>
		</tr>
		<tr>
			<td>Monero</td>
			<td>XMR</td>
			<td><code>84uzBxURYwqXk9Y66XA2V7EMpGggnwAioUkjiiwsF4G8YUiNQMRJMBbVD2tQBiweKiJfPMjG6BsUXZvnrTD95k41Uj915Tb</code></td>
		</tr>
	</tbody>
</table>

<style>
	.ko-fi {
		mask-image: url($lib/assets/icons/ko-fi.svg);
	}
	.paypal {
		mask-image: url($lib/assets/icons/paypal.svg);
	}
	.venmo {
		mask-image: url($lib/assets/icons/venmo.svg);
	}
	.zelle {
		mask-image: url($lib/assets/icons/zelle.svg);
	}
	li {
		color: var(--textColor);
	}
	li + li {
		margin: 3px 0;
	}
	table {
		border-collapse: collapse;
		padding: 5px;
		width: 100%;
		max-width: 612px;
	}

	table th {
		color: var(--textColor);
		border: 2px solid var(--tableColor);
	}

	table tr td {
		color: var(--textColor);
		font-family: monospace;
		padding: 5px;
		border: 2px solid var(--tableColor);
		user-select: all;
	}

	table tr:nth-child(odd) td {
		background-color: var(--tableOddBackgroundColor);
	}

	table tr:nth-child(even) td {
		background-color: var(--tableEvenBackgroundColor);
	}
	code {
		overflow-wrap: anywhere;
	}
</style>
