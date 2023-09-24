<script>
	import 'carbon-components-svelte/css/g80.css';

	function forceRefresh() {
		window.location.reload();
	}
</script>

<h1 style="font-weight: 900;">저런! 약간의 문제가 생긴 것 같아요!</h1>
<p>아니, 그보다도… 조금 전에 뭐라 그랬나, 날 보고 접속이 불가하다고? 404가 됐다, 그런 말인가?</p>
<p>404라니! 아니, 내가 404라니! 이게 무슨 소리야! 에잌, 404라니!!! 내가, 내가 404라니!!! 내가...! 아아, 아...</p>
<br>
<a href="/" style="font-weight: 900;" on:click={()=>{forceRefresh()}}>404가 아닌 곳으로 돌아가기</a>