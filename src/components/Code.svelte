<script>
    export let title = '';

    let codeWrapper;
    let copied = false;

    const copyCode = () => {
        const code = getTextNode(codeWrapper);
        navigator.clipboard.writeText(code);
        copied = true;
        setTimeout(() => copied = false, 2000);
    };

    const getTextNode = node => {
        if (node.nodeType === 3) return node.data;
        if (!node.childNodes) return '';
        let text = '';
        node.childNodes.forEach(childNode => text += getTextNode(childNode));
        return text;
    };
</script>

<style>
    .btn-copied {
        @apply text-success pointer-events-none;
    }
</style>

<div class="flex flex-col rounded-b-lg my-4">

  <div class="flex justify-between bg-dark py-2 px-3 text-light rounded-t-lg">
    <span>{title}</span>

    <div class="flex gap-1 items-center">
      <div class="text-sm text-success select-none" class:hidden={!copied}>Copied</div>

      <button class="material-symbols-outlined select-none" class:text-light-darker={!copied} class:btn-copied={copied} on:click={copyCode}>
        {copied ? 'done' : 'content_copy'}
      </button>
    </div>
  </div>
  <div bind:this={codeWrapper}>
    <pre class="language-js"><slot name="code"/></pre>
  </div>
</div>
