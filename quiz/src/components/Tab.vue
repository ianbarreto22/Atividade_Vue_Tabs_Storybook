<template>
    <button 
        @click="$emit('onSelection', index!)"
        :class="{selected: index === selected}">
            {{title}}
    </button>
</template>

<script setup lang="ts">
    export interface TabProps{
        title: string,
        content: string,
        index?: number,
        selected?: number
    }
    export interface TabEvents{
        (e: 'onSelection', val: number): void
    }
    defineProps<TabProps>()
    defineEmits<TabEvents>()
</script>

<style>
    button {
        transition: 0.4s;
        font-size: medium;
        font-weight: bold;
        background-color: transparent;
        color: lightslategray;
        border: 2px solid lightslategray;
        padding: 10px;
        margin: 5px;
        margin-left: 0;
        border-radius: 5px;
    }
    button:hover{
        cursor: pointer;
    }
    .selected {
        background-color: lightslategray;
        color: white;
    }
</style>