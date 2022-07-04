import { reactive } from "vue"

export interface TabPanelType{
    tabs: {title: string, content: string}[]
}

export interface TabPanelStore {
    tabPanel: TabPanelType,
    update: (tabPanel: TabPanelType) => void
}

export const tabPanelStore = reactive<TabPanelStore>({
    tabPanel: reactive<TabPanelType>({tabs: [{title: 'Tab', content: 'Sem conteúdo'}]}),

    update(tabPanel: TabPanelType){
        this.tabPanel = {...tabPanel}
        this.tabPanel.tabs = {...tabPanel.tabs}
    },

})