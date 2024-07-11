<script>
	export let data;
</script>
<style>
	@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap');
	@import url('https://fonts.googleapis.com/css2?family=Sedan:ital@0;1&display=swap');

	.container {
		position: absolute;
		top: 50%;
		left: 50%;
		text-align: center;
		-ms-transform: translateY(-50%) translateX(-50%);
		transform: translateY(-50%) translateX(-50%);
	}

	.quote {
		font-family: Montserrat;
		font-size: 36px;
		font-weight: 100;
		max-width: 700px;
		min-width: 700px;
		margin: auto;
		padding: 40px;
		color: #9db03d;
	}

	.source {
		font-family: Sedan;
		text-align: right;
		font-size: 24px;
		color: #a29480;
	}

	.footer, .footer a {
		padding-top: 100px;
		font-family: Montserrat;
		font-size: 12px;
		color: #ccc;
	}
</style>

<div class="container">
	<div class="quote">
		{JSON.stringify(data.quote.quote).replace(/"/g, "")}
	</div>
	<div class="source">
		{JSON.stringify(data.quote.source).replace(/"/g, "")}
	</div>
	<div class="footer">
		<center>
			Questions or suggestions? <a href="mailto:eric@realandpresent.com">Send me an email.</a>
		</center>
	</div>
</div>
