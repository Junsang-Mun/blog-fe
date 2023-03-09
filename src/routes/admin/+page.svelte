<script>
	import { onMount } from 'svelte';
	import Editor from '@toast-ui/editor';
	import '@toast-ui/editor/dist/toastui-editor.css';
	import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
	let texteditor;
	let toastEditor;
	
	onMount(() => {
		toastEditor = new Editor({
			el: texteditor,
			height: '800px',
			initialEditType: 'markdown',
			previewStyle: 'vertical',
			theme: 'dark',
		})
	})
</script>

<div id="editorWrapper">
	<div bind:this={texteditor}></div>
</div>
