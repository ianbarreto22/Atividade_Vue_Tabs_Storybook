<script setup lang="ts">
import TabPanel from './components/TabPanel.vue'
import type { TabPanelProps } from './components/TabPanel.vue';
import TabPanelForm from './components/TabPanelForm.vue'
import { tabPanelStore } from './store/tabPanel.store';

  function updateTabPanel(tabPanel: TabPanelProps){
    tabPanelStore.update(tabPanel)
  }

</script>

<template>
  <div class="linha">
    <div class="coluna-50">
      <TabPanelForm @on-submit="updateTabPanel($event)"/>
    </div>
    <div class="coluna-50">
      <div class="container">
        <h1>Conteúdo</h1>
        <TabPanel :tabs="tabPanelStore.tabPanel.tabs"/>
      </div>
    </div>
  </div>
</template>

<style>
@import './assets/base.css';
.linha{
  margin: 50px;
  display: flex;
  flex-flow: row wrap;
}

.coluna-50{
  width: 50%;
}

.container{
  margin-top: 50px;
  margin-right: 50px;
  border-radius: 10px;
  padding: 15px;
  padding-top: 0px;
  border: lightslategray;
  box-shadow: 0 0 3px 3px rgb(75, 75, 75);
  color: lightslategray;
}

h1 {
    font-weight: bold;
    font-size: 30px;
    padding: 15px;
}
</style>
