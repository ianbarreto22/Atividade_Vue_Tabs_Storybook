<template>
    <form @submit.prevent="submit">
        <h1>Tabs</h1>
        <div class="linha">
            <label class="col-25">Num. Tabs</label>
            <input type="number" class="col-35"
                :value="numTabs"
                @change="changeNumTabs(($event.target as HTMLInputElement).value)"
            />
            <div class="error col-25">{{errors[`numTabs`]}}</div>
        </div>

        <hr/>

        <div v-for="(tab, i ) in tabs" :key="`tab_${i}`">
            <p>Tab {{i+1}}</p>
            <div class="linha">
                <label class="col-25">Título</label>
                <input type="text" v-model="tabs[i].title" class="col-35"
                 @change="changeTabTitle(i, ($event.target as HTMLInputElement).value)"
                 @blur="touched[`tab_title_${i}`] && check(($event.target as HTMLInputElement).value, required, `tab_title_${i}`)"/>
                <div class="error col-25">{{errors[`tab_title_${i}`]}}</div>
            </div>
            <div class="linha">
                <label class="col-25">Conteúdo</label>
                <input type="text" v-model="tabs[i].content" class="col-35"
                 @change="changeTabContent(i, ($event.target as HTMLInputElement).value)"
                 @blur="touched[`tab_content_${i}`] && check(($event.target as HTMLInputElement).value, required, `tab_content_${i}`)"/>
                <div class="error col-25">{{errors[`tab_content_${i}`]}}</div>
            </div>

            <hr v-if="i != tabs.length - 1"/>
        </div>

        <div class="linha b-box">
            <input type="submit" value="Salvar" :disabled="numTabs === 0 ? true : false" class="button"/>
        </div>
    </form>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import type { TabProps } from './Tab.vue';
import { inRange, isInt, maxLength, required } from '../utils/validation'
import type { TabPanelProps } from './TabPanel.vue';

    export interface TabPanelEvents {
        (e: 'onSubmit', tabPanel: TabPanelProps): void
    }

    const numTabs = ref<number>(1)
    const tabs = reactive<TabProps[]>([{title: '', content: ''}])
    const touched = reactive<{[name: string]: boolean}>({})
    const errors = reactive<{[name: string]: string}>({})

    const emit = defineEmits<TabPanelEvents>()

    function touch(name: string, value: boolean = true) {
        touched[name] = value
    }

    function setError(name: string, error: string) {
        errors[name] = error
    }

    function changeNumTabs(value: string){
        const range = inRange(1, 8)

        const validateFunc = (value: string) => required(value) || isInt(value) || range(value)

        if(check(value, validateFunc, 'numTabs')){

            const num = parseInt(value, 10)
            numTabs.value = num
            console.log(num, tabs.length)
            if(num <= tabs.length){
                for(let i = num; i < tabs.length; i++){
                    touch(`tab_title_${i}`, false)
                    touch(`tab_content_${i}`, false)
                    setError(`tab_title_${i}`, '')
                    setError(`tab_content_${i}`, '')
                }
                tabs.splice(num, tabs.length - num)
            }
            else{
                for(let i = tabs.length; i < num; i++){
                    tabs.push({title:'', content: ''})
                }
                
            }
        }
    }

    function check(value: string, validateFunc: Function, name: string){
        const error = validateFunc(value)
        setError(name, error)
        return error === null
    }

    function changeTabTitle(index: number, value: string){

        tabs[index].title = value
        touch(`tab_title_${index}`)
    }

    function changeTabContent(index: number, value: string){
        tabs[index].content = value
        touch(`tab_content_${index}`) 
    }

    function submit(){
        const validateFunc = (value: string) => required(value) || maxLength(12, value)

        const tabsTitleOk = tabs.map((tab, i) => check(tab.title, validateFunc, `tab_title_${i}`)).every(t => t)
        const tabsContentOk = tabs.map((tab, i) => check(tab.content, required, `tab_content_${i}`)).every(t => t)

        if(tabsTitleOk && tabsContentOk){
            emit('onSubmit', {tabs})
            tabs.splice(0, tabs.length)
            numTabs.value = 0
        }
    }
</script>

<style scoped>
label {
    font-weight: bold;
}

form {
    margin-top: 50px;
    margin-right: 50px;
    border-radius: 10px;
    box-shadow: 0 0 3px 3px rgb(75, 75, 75);
    color: lightslategray;
}


h1 {
    font-weight: bold;
    font-size: 30px;
    padding: 15px;
}

form p {
    font-weight: bold;
    padding: 25px;
}

form input {
    padding: 5px;
}

.linha{
    clear: both;
}

.col-25 {
    width: 25%;
}

.col-35 {
    width: 35%;
}

.b-box{
    margin-left: 85%;
}

.button{
    background-color: lightslategray;
    color: white;
    padding: 13px;
    border-radius: 10px;
    margin-bottom: 5px;
    border: 1px solid transparent;
}

.button:hover {
    transition: 0.1s;
    background-color: transparent;
    color: lightslategray;
    border: 1px solid lightslategray;
    cursor: pointer;
}

.button:disabled{
    opacity: 50%;
}



form .error {
    padding: 10px;
    color: red;
}

hr {
    color: lightslategray;
}
</style>