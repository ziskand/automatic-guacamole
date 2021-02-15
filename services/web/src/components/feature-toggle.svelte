<script>
    import { featureTogglesStore } from "../feature-toggles/store";
    export let name;
</script>

{#if $featureTogglesStore[name]}
    <slot />
{/if}
