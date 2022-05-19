<template>
    <div className="panel">
        <Tab v-for="(tab, index) in tabs"
            :key="index"
            :index="index"
            v-bind="tab"
            :selected="currentTab"
            @on-selection="select">
        </Tab>

        <div className="box">
            <p>{{tabs[currentTab].content}}</p>
        </div>
    </div>
</template>

<script setup lang="ts">
    import {ref} from 'vue'
    import Tab, {type TabProps} from './Tab.vue'

    export interface TabPanelProps {
      tabs: {
          title: string,
          content: string
      }[]
    }

    defineProps<TabPanelProps>()


  const currentTab = ref(0)

  function select(tabIndex: number){
      currentTab.value = tabIndex
  }
</script>

<style>
    div .panel{
        margin: 100px;
    }

    .box{
        border: 3px solid lightslategray;
        border-radius: 0px 10px 10px 10px;
        padding: 15px;
    }
</style>