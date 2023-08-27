<script>
	import { isDarkMode } from '../../../stores/theme.js';
	import { onMount } from 'svelte';

	onMount(() => {
		const unsubscribe = isDarkMode.subscribe((value) => {
			if (value) {
				document.body.classList.add('dark');
				console.log(document.body.classList);
			} else {
				document.body.classList.remove('dark');
				console.log(document.body.classList);
			}
		});

		return unsubscribe;
	});
</script>

<div class="page">
	<h1 class="article title">우리집 고양이 츄르를 좋아해</h1>
	<div class="article content">
		<p>
			걱정도 때 나는 아무 까닭입니다. 아름다운 비둘기, 오는 하나에 있습니다. 걱정도 위에 멀리 너무나
			계십니다. 이름과, 노새, 지나가는 까닭입니다. 어머니, 비둘기, 토끼, 까닭이요, 듯합니다. 하나에
			멀리 멀듯이, 언덕 피어나듯이 봅니다. 책상을 이름과, 나의 가슴속에 그리워 하나에 했던 이름자
			새겨지는 있습니다. 아침이 강아지, 가득 애기 토끼, 듯합니다. 피어나듯이 프랑시스 않은 동경과
			마리아 까닭입니다. 이름을 가슴속에 새겨지는 부끄러운 없이 하나에 별 비둘기, 이름과 까닭입니다.
			별들을 별 벌써 보고, 이름과, 속의 헤일 계십니다.
		</p>

		<p>
			까닭이요, 별 동경과 까닭입니다. 언덕 릴케 동경과 아이들의 된 하나에 봅니다. 별 나의 않은 밤이
			추억과 별 것은 남은 묻힌 거외다. 소학교 시와 계절이 무엇인지 봅니다. 마디씩 비둘기, 이름자를
			피어나듯이 벌레는 어머니 위에도 청춘이 하나에 듯합니다. 하나에 나는 둘 이름과, 별들을
			버리었습니다. 이름과, 이름을 묻힌 내 별 슬퍼하는 아스라히 하나에 버리었습니다. 묻힌 벌써
			책상을 이런 때 하나에 마리아 다 있습니다. 새겨지는 내 아름다운 흙으로 언덕 밤이 봅니다. 무성할
			너무나 많은 비둘기, 하늘에는 별 아름다운 슬퍼하는 봅니다. 된 멀리 내린 가난한 버리었습니다.
		</p>

		<p>
			겨울이 추억과 풀이 헤는 봅니다. 그리워 까닭이요, 이런 그러나 새워 마리아 하나에 있습니다. 묻힌
			계집애들의 소녀들의 거외다. 부끄러운 계절이 이름을 노새, 어머님, 나는 청춘이 아직 노루,
			까닭입니다. 이름을 나의 이런 불러 쉬이 내일 계절이 이름과 까닭입니다. 너무나 별 내린 계십니다.
			하나에 지나가는 마리아 이런 오는 딴은 소녀들의 불러 까닭입니다. 슬퍼하는 그리고 묻힌 남은 애기
			흙으로 별 까닭이요, 가을로 봅니다. 밤이 이런 위에 다하지 까닭입니다. 풀이 부끄러운 가득
			봅니다.
		</p>
	</div>

	<label class="switch">
		<input type="checkbox" bind:checked={$isDarkMode} />
		<span class="slider round" />
	</label>
</div>
